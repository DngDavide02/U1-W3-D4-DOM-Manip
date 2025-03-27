// 1) creare una tabella da 1 a 99
// 2) creare un bottone connessa ad una funzone che genera un numero da 1 a 99
// 3) evidenzia la cartella sulla quale è uscito il numero
// 4) mantieni le cartelle estratte
// 5) non far uscire lo stesso numero
// 6) crea il tabellino di 24 celle con numeri casuali da 1 a 99 che evidenzia i numeri estratti
// 7) permetti all'utente di generare quante cartelline vuole con cui poter giocare
// ----------------------------------------------------------------------------------------------------------------------------

// 1) creare una tabella da 0 a 99
const table = document.getElementById("table");
let num = 0;

for (i = 0; i < 10; i++) {
  let row = table.insertRow();
  for (j = 0; j < 10; j++) {
    if (num <= 99) {
      let cell = row.insertCell();
      cell.textContent = num;
      cell.id = "n" + num;
      num++;
    }
  }
}

// 2) creare un bottone connessa ad una funzone che genera un numero da 0 a 99

let numAlredyExtracted = [];
function randomNumber() {
  let randomNum = Math.floor(Math.random() * 100);

  if (numAlredyExtracted.includes(randomNum)) {
    randomNumber();
    return;
  }
  numAlredyExtracted.push(randomNum);
  document.getElementById("risultato").textContent = "Numero estratto: " + randomNum;

  // 3) evidenzia la cartella sulla quale è uscito il numero
  // 4) mantieni le cartelle estratte
  let extraction = document.getElementById("n" + randomNum);
  if (extraction) {
    extraction.classList.add("hoverColor");
  }
  highlightLilNumber(randomNum);
}

// 6) crea il tabellino di 24 celle con numeri casuali da 1 a 99 che evidenzia i numeri estratti
const lilTable = document.getElementById("lilTable");
let lilTableNumbers = [];
while (lilTableNumbers.length < 24) {
  let randomNum = Math.floor(Math.random() * 100);
  if (!lilTableNumbers.includes(randomNum)) {
    lilTableNumbers.push(randomNum);
  }
}
let lilNumIndex = 0;
for (i = 0; i < 3; i++) {
  let row = lilTable.insertRow();
  for (j = 0; j < 8; j++) {
    if (lilNumIndex < 24) {
      let cell = row.insertCell();
      cell.textContent = lilTableNumbers[lilNumIndex];
      cell.id = "lilN" + lilTableNumbers[lilNumIndex];
      lilNumIndex++;
    }
  }
}
function highlightLilNumber(num) {
  const cell = document.getElementById("lilN" + num);
  if (cell) {
    cell.classList.add("hoverColor");
  }
}
