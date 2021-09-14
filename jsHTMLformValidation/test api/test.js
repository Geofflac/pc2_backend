function post() {

  console.log('hello');
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    user_id: 2,
    first_name: "Joe",
    last_name: "Bloggs",
    email: "joe@bloggsville.com",
    phone: "+65 1234 5678",
    plan_id: 1,
    signup_date: "13-Aug-2021",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://nusbackendstub.herokuapp.com/user/add", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

form.addEventListener("submit", post);