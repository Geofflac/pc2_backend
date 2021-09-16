const data = require("./data");
const express = require('espress');

let router = express.Router();

router.get("/account/all", (request, response) => {
    let account = data.get_all_accounts();
    response.status(200).send(account);
})

router.get("/account/by-uid", (request, response) => {
    let account = data.get_user_by_account_id(request.query.id);
    response.status(200).send(account);
})

// add a new user
// data.add_user(jsonobject)
router.post("/add-account", (request, response) => {
    let account = request.body;
    data.add_account(account);
    response.status(200).send("Success!");
})

// module.export { router }