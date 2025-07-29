/*
!! If ELse
if (condition) {
    }
*/

if (3 < 10) {
  console.log("3 is less than 10");
}

var weight = 70;
if (weight < 80) {
  console.log("You are overweight");
} else {
  console.log("You are not overweight");
}

const age = 20;
const price = 500;

if (age <= 12) {
  console.log("You can eat free food");
} else if (age >= 60) {
  const discount = (price * 50) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}
