/* === Standardliste ===

var games = ["Die Siedler von Catan","Wizard","Die Inseln im Nebel","Alhambra","Carcassonne",];

document.getElementById("newGame").value = games;

 === Standardliste aufrufen ===

document.querySelector("#standardliste").addEventListener("click", function () {
  games = [
    "Die Siedler von Catan",
    "Wizard",
    "Die Inseln im Nebel",
    "Alhambra",
    "Carcassonne",
    "Cabo",
    "Flügelschlag",
    "Klatschen",
    "Just One",
    "7 Wonders",
  ];

  for (var y = 1; y <= games.length; y++) {
    // Create a new, plain <div> element
    let div1 = document.createElement("div");
    // Get the reference element
    let div2 = document.getElementById("lastCard");
    // Get the parent element
    let parentDiv = div2.parentNode;
    // Insert the new element into before sp2
    parentDiv.insertBefore(div1, div2);

    //Neue game-Class zuweisen mit aufsteigender Zahl

    var gameNumberStd = y;

    div1.setAttribute("class", "game" + gameNumberStd + " card");
    div1.textContent = games[y - 1];
  }

  document.querySelector("#standardliste").classList.add("hidden");
});
*/