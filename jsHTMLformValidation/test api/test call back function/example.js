function pfizer(ic) {
  console.log("Pfizer given to: " + ic);
}
function moderna(ic) {
  console.log("Moderna given to: " + ic);
}

function check_eligibility(age) {
  if (age >= 12 && age <= 18) {
    // return pfizer();  -> Not this
    return pfizer;
  } else {
    return moderna;
  }
}

function give_vaccine(ic, vaccine) {
  //  vaccine = moderna
  //  vaccine(ic) = moderna(ic)
  vaccine(ic);
  return true;
}

let age = 12;
let ic = "123475869";

let vaccine_to_be_given = check_eligibility(age);
let success = give_vaccine(ic, vaccine_to_be_given);
// let success = give_vaccine(ic, pfizer);
// let success = give_vaccine(ic, moderna);

//   let success = give_vaccine(ic, (ic) => {
//     console.log("Sinovac given to: " + ic);
//   });

console.log("Success: " + success);

// function normal_pfizer(ic) {
//   console.log("Pfizer given to: " + ic);
// }

// let anonymous_pfizer = function (ic) {
//   console.log("Pfizer given to: " + ic);
// };

// let arrow_pfizer = (ic) => {
//   console.log("Pfizer given to: " + ic);
// };
