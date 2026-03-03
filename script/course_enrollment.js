document.getElementById("visaCARD").style.display = "block";
document.getElementById("acledaKHQR").style.display = "none";

function visaMethod() {
  document.getElementById("visaCARD").style.display = "block";
  document.getElementById("acledaKHQR").style.display = "none";
  document.getElementById("acleda").style.backgroundColor = "lightgray";
  document.getElementById("acleda").style.color = "var(--button-color)";
  document.getElementById("visa").style.backgroundColor = "var(--button-color)";
  document.getElementById("visa").style.color = "white";
}

function acledaMethod() {
  document.getElementById("visaCARD").style.display = "none";
  document.getElementById("acledaKHQR").style.display = "block";
  document.getElementById("visa").style.backgroundColor = "lightgray";
  document.getElementById("visa").style.color = "var(--button-color)";
  document.getElementById("acleda").style.backgroundColor =
    "var(--button-color)";
  document.getElementById("acleda").style.color = "white";
}
