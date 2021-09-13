function maxMin() {
  let minNbr = document.getElementById("minNbr").value;
  let maxNbr = document.getElementById("maxNbr").value;
  let currentNbr = document.getElementById("currentNbr").value;

  let msg = "";

  if (minNbr < currentNbr) {
    msg = "Current n'est pas compris entre min et max";
  } else if (maxNbr > currentNbr) {
    msg = "Current n'est pas compris entre min et max";
  } else if (currentNbr < minNbr && currentNbr > maxNbr) {
    msg = "Current est entre min et max";
  } else {
    msg = "current n'est pas compris entre min et max";
  }

  document.getElementById("reponseCurrent").innerHTML = msg;
}
