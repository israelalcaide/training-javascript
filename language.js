let option = character("Please, choose your language: (en | de | pt | po)");

console.log(option);

switch (option) {
  case "en":
    console.log("Language is English, execute code for English.");
    break;
  case "de":
    console.log(
      "Die Sprache ist Deutsch, führen Sie den Code für Deutsch aus."
    );
    break;
  case "pt":
    console.log("A língua é o português, executar o código para português.");
    break;
  case "po":
    console.log("Język to polski, uruchom kod dla języka polskiego.");
    break;

  default:
    console.log("Language not chosen, using Spanish");
    break;
}
