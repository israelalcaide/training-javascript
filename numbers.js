switch (true) {
  case random < 0:
    console.log("Under 0");
    break;
  case random >= 0 && random <= 10:
    console.log("Between 0 and 10");
    break;
  case random >= 11 && random <= 20:
    console.log("Between 11 and 20");
    break;
  case random > 20:
    console.log("Over 20");
    break;
  default:
    console.log("Not a valid number");
    break;
}

if (random < 0) {
  console.log("Under 0");
} else if (random >= 0 && random <= 10) {
  console.log("Between 0 and 10");
} else if (random >= 11 && random <= 20) {
  console.log("Between 11 and 20");
} else if (random > 20) {
  console.log("Over 20");
} else {
  console.log("Not a valid number");
}