// e1e2 Mes y dias //
// Declarar la variable y el prompt para preguntar al usuario //

function a1e2() {

    let month = prompt(
      "Please, choose a month : Geneuary || February || March || April || June || July || August || September || October || November || December"
    );
    console.log(month.toUpperCase);
    // Almacenar datos y sacar booleano dependiendo de la opcion elegida por el usuario //
    if (
      month == "Geneuary" || "March" || "May" || "July" || "August" || "October" || "December") {
      console.log(month.charAt(0).toUpperCase()+ month.slice() +" have 31 days");
    } else if (month.to == "April" || "June" || "September" || "November") {
      console.log(month.charAt(0).toUpperCase() + " have 30 days");
    } else if (month == "febrero") {
      console.log(month.charAt(0).toUpperCase() +" have 28 days");
    
      // en caso de no selecionar cualquier opcion válida proporcionada al usuario //
    } else {
      console.log("That`s not a real month");
    }
    }
    