const { response, request } = require('express');
const  express = require('express');

server = express();
// This is to tell that the body of of post will be in JSON format and will transform in JS
server.use(express.json());

// creating the mapping table (URI MAPPER)
router = express.Router();

router.get('/', (request, response) => {
    response.status(200).send("Hello!");
} );

router.get("/greet", (request, response) => {
    console.log(request.query);
    let name = request.query.name;
    response.status(200).send(`Hello, ${name}!`);
});

router.get("/sum", (request, response) => {
    let sum = parseInt(request.query.x) + parseInt(request.query.y);
    //  .send always expect a string or a JSobject, a number will be considered a status code
    response.status(200).send(`Sum is : ${sum}`);
})

router.get("/user/by-uid", (request, response) => {
    let result = "";
    console.log(request.query);
    if (request.query.user_id == 1) {
        result = {
            "user_id": 1,
            "first_name": "Fred",
            "last_name": "Nerk",
            "email": "fred.nerk@nerk.com",
            "phone": "888888",
            "plan_id": 1,
            "signup_date": "12-Aug-2021"
    }; }
    else {
        result = "not found";
    }
    response.status(200).send(result);
});

router.post("/post_example", (request, response) => {
    //  We will assume that date is coming in reauest body JSON format
    let name =  request.body.name;
    let age = request.body.age;

    response.status(200).send(`Received Name: ${name} and Age: ${age}`);
} )

// router.delete()

// Tell the server to user the "router" map
server.use(router);

server.listen(3000);

