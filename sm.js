let stringManager = prompt("Please input some sentence:");
let options = prompt(
  "Thank you! Now, would you like to use the following options?:\n\n --- Replace characters with symbols.\n --- Capitalize.\n --- Replace spaces with commas.\n\nPlease enter 'y' for Yes or 'n' for No:"
);

while (options !== "y" && options !== "n") {
  options = prompt("Cabessa pulsa (y) o (n) mahara....");
}

let initTime = performance.now();

if (options === "y") {
  replaceChars = stringManager
    .replace(/a/g, "@")
    .replace(/e/g, "3")
    .replace(/i/g, "1")
    .replace(/o/g, "0")
    .replace(/s/g, "$");
  capitalize = stringManager.toUpperCase();
  replaceSpaces = stringManager.replace(/\s/g, ",");
  console.log(
    stringManager +
      "\n" +
      replaceChars +
      "\n" +
      capitalize +
      "\n" +
      replaceSpaces
  );
} else if (options === "n") {
  console.log("te pierde mi magia loko!");
}

let endTime = performance.now();
let totalTime = endTime - initTime;
console.log(`Work done in ${totalTime.toFixed(2)} milliseconds.`);
