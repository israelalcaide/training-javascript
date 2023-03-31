let option = prompt(
  "Please, choose your character: (Black Widown | Captain America | Iron Man | Thor)"
);

console.log(option);

switch (option) {
  case "Black Widown":
    console.log("Indestructible shield");
    break;
  case "Captain America":
    console.log("Genius-level intellect");
    break;
  case "Iron Man":
    console.log("The hammer of Thor");
    break;
  case "Thor":
    console.log("Choose your hero");
    break;
    default:
        console.log("Choose your hero!");
}

