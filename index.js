function scuberGreetingForFeet(ride) {
  // Write your code here!
  if (ride <= 400) {
    console.log("This one is on me!");
  } else if (ride > 2000) {
    console.log("I will gladly take your thirty bucks.");
  } else if (ride > 2500) {
    console.log("No can do.");
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  city === "NYC" ? console.log("Ok, sounds good.") : console.log("No go.");
}

function switchOnCharmFromTip(tip) {
  // Write your code here!

  switch (tip) {
    case "generous":
      console.log("Thank you so much.");
      break;
    case "not as generous":
      console.log("Thank you.");
      break;
    default:
      console.log("Bye.");
      break;
  }
}
