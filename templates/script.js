const joke = document.getElementById("joke");
let name = "Frederick"; // Für Aufgabe 4

// ##### Aufgabe 1
function joke1() {
  joke.innerHTML = `Wie viele Windows-Anwender braucht man um eine Glühbirne zu wechseln? 100! Einer wechselt die Birne, 99 klicken die Fehlermeldungen weg.`;
}

function joke2() {
  joke.innerHTML = `Linux wird nie das meistinstallierte Betriebssystem sein, wenn man bedenkt, wie oft man Windows neu installieren muss!`;
}

function joke3() {
  joke.innerHTML = 'Ich habe all meine Passwörter in "warnichtkorrekt" geändert, so sagt mir mein Rechner wie es lautet wenn ich es vergessen habe.';
}
function joke4() {
  joke.innerHTML = "Der kürzeste Programmiererwitz: Gleich bin ich fertig!";
}

/***********
 Aufgabe 2
 ***********/
function addFruit(fruit) {
  document.getElementById("food").innerHTML += `Frucht hinzugefügt: <b>${fruit}</b> <br>`;
}

function deleteFruits() {
  document.getElementById("food").innerHTML = "";
}

/*******
 Aufgabe 3 + 4
********/
function generatedCircle(name) {
  document.getElementById("generatedHTML").innerHTML = `
    <div class="circle">
        <b>${name}</b>    
    </div>
    `;
}
function generatedCircleVar(id) {
  let inputref = document.getElementById(id).value;
  console.log(inputref);
  generatedCircle(inputref);
}
/**
 * Aufgabe 5
 */
function sendMessage() {
  let message = document.getElementById("message"); // HTML Element mit ID message wird an die Variable 'message' zugewiesen.
  let chat = document.getElementById("chat");
  let name = document.getElementById("name");
  if (message.value.length == 0) {
    alert('Trag was ein du wicht')
  } else {
    chat.innerHTML += `
    <div class="m-bottom-20"><i>${name.value}:</i> ${message.value}</div>
    `;
  }
  message.value = ""; // Inhalt von Textfeld mit id "message" löschen
}
