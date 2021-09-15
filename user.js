const data = require("./data");
const express = require('espress');

let router = express.Router();

router.get("/user/all", (request, response) => {
    let users = data.get_all_users();
    response.status(200).send(users);
})

router.get("/user/by-uid", (request, response) => {
    let users = data.get_user_by_user_id(request.query.id);
    response.status(200).send(users);
})

// add a new user
// data.add_user(jsonobject)
router.post("/add-user", (request, response) => {
    let user = request.body;
    data.add_user(user);
    response.status(200).send("Success!");
})