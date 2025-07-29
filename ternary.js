const age = 20;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

// Ternary operator example
console.log(age >= 18 ? "You can vote" : "You cannot vote");

// Another example with ternary operator
age >= 18 ? console.log("You can vote") : console.log("You cannot vote");

const isLeader = true;
const price = 500;

if (isLeader === true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price + 100;
}

// Ternary operator for the above logic
price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price + 100;
