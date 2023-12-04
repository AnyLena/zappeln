// === Random-Generator für nächstes Spiel ===

var games = [];

var gamesPlayed = [];

document.querySelector("#naechstes").addEventListener("click", function () {
  //Hinweise löschen
  hinweiseLoeschen();
  //Old-Card zu zuletzt ausgewählter Karte hinzufügen.
  document.querySelector(".this-card").classList.add("old-card");
  //This-Card von allen Karten löschen
  for (var i = 1; i < games.length + 1; i++) {
    document.querySelector(".game" + i).classList.remove("this-card");
  }

  if (games.length === gamesPlayed.length) {
    document.getElementById("allDone").classList.remove("hidden");
    // ggf. Möglichkeit zum Zurücksetzen des Formulars einbauen.
  } else {
    var randomGame = Math.floor(Math.random() * games.length + 1);

    while (gamesPlayed.includes(randomGame)) {
      randomGame = Math.floor(Math.random() * games.length + 1);
    }

    gamesPlayed.push(randomGame);
    document.querySelector(".game" + randomGame).classList.add("this-card");
  }
});


// === Alle Hinweise löschen

function hinweiseLoeschen() {
  for (var f = 0; f < 4; f++) {
    document.querySelectorAll(".hinweis")[f].classList.add("hidden");
  }
}

// === Aus eingegebenem Value eine Karte machen

function createCard(newGame) {
  games.push(newGame);

    // Create a new, plain <div> element
    let div1 = document.createElement("div");
    // Get the reference element
    let div2 = document.getElementById("lastCard");
    // Get the parent element
    let parentDiv = div2.parentNode;
    // Insert the new element into before sp2
    parentDiv.insertBefore(div1, div2);

    //Neue game-Class zuweisen mit aufsteigender Zahl

    var gameNumber = games.length;

    div1.setAttribute("class", "game" + gameNumber + " card");
    div1.textContent = newGame;
}

// === Formular zum eingeben neuer Spiele incl. anlegen einer neuen Card im <div>-Element ===

function hire() {
  var newGame = document.getElementById("newGame").value;

  hinweiseLoeschen();

  // === IF Monopoly-Abfangschleife ==
  // === ELSE IF Abfangschleife für bereits vorhandene Spiele ===
  // === ELSE Eigentliche JS für das Anlegen neuer Spiele ===

  if (newGame === "") {
    document.getElementById("bitteEintragen").classList.remove("hidden");
  } else if (
    newGame === "Monopoly" &&
    document.getElementById("monopoly") != null
  ) {
    document.getElementById("monopoly-hinweis").classList.remove("hidden");
  } else if (newGame === "Monopoly") {
    
    createCard(newGame);

    document.querySelector(".game"+games.length).classList.add("old-card");
    document.querySelector(".game"+games.length).setAttribute("id", "monopoly");
    
    //Formular löschen und Cursor setzen
    document.getElementById("newGame").value = "";
    document.getElementById("newGame").autofocus;
  } else if (games.includes(newGame)) {
    document.getElementById("doppeltesSpiel").classList.remove("hidden");
  } else {
    
    createCard(newGame);

    //Formular löschen und Cursor setzen
    document.getElementById("newGame").value = "";
    document.getElementById("newGame").autofocus;

    //Hide Standardliste.
    document.querySelector("#standardliste").classList.add("hidden");
  }
}

// === Dokument mit Enter-Taste abschicken ===

document.getElementById("newGame").onkeydown = function (e) {
  if (e.key === "Enter") {
    hire();
  } else {
  }
};

// === Button "Letztes Spiel löschen"

document.querySelector("#loeschen").addEventListener("click", function () {
  // === Hinweise löschen ===

  hinweiseLoeschen();

  // === <div>-Element löschen ===

  const removeDiv = document.querySelector(".game" + games.length);

  if (
    removeDiv.classList.contains("old-card") &&
    document.querySelector(".game" + games.length).id === "monopoly"
  ) {
    document.getElementById("monopoly-hinweis2").classList.remove("hidden");
  } else if (removeDiv.classList.contains("old-card")) {
    document.getElementById("nichtLoeschbar").classList.remove("hidden");
  } else {
    removeDiv.remove();

    // === Pop Spiel from games-array ===
    console.log(games.length);
    games.pop();
    console.log(games.length);

    // === Un-hide Standardliste.

    if (games.length === 0) {
      document.querySelector("#standardliste").classList.remove("hidden");
    }
  }
});

// === Standardspiele hinzufügen ===

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
