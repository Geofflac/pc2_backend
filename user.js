const data = require("./data");
const database = require("./database")
const express = require("express");

let router = express.Router();

router.get("/user/all", (request, response) => {
  // let users = data.get_all_users();
  // response.status(200).send(users);
  database.connection.query("select * from user", (error, result) => {
    if (error) {
      console.log(error);
      response.status(500).send("some internal error");
    } else {
      response.status(200).send(result);
    }
  });
});

router.get("/user/by-uid", (request, response) => {
  if (request.query.uid == null || request.query.uid.length == 0) {
    response.status(400).send("Invalid uid passed in the parameters");
  }

  // let user = data.get_user_by_user_id(request.query.uid);
  // response.status(200).send(user);
  database.connection.query(`select * from user where user_id = ${request.query.uid}`, (error, result) => {
    if (error) {
      console.log(error);
      response.status(500).send("some internal error");
    } else {
      response.status(200).send(result);
    }
  });
});

router.post("/add-user", (request, response) => {
  let user = request.body;
  if (JSON.stringify(user) === "{}") {
    response.status(400).send("Request's body content is invalid!");
  }

  database.connection.query(
    `insert into user (first_name, last_name, email, phone, plan_id, signup_date) 
    values ('${request.body.first_name}', '${request.body.last_name}',
    '${request.body.email}', '${request.body.phone}', '${request.body.plan_id}', now())`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Some internal error occurred");
      } else {
        response.status(200).send("Successfully added the user");
      }
    }
  );
});

module.exports = { router };
