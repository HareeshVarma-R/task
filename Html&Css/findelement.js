var ages = [4, 12, 16, 20];

function checkAdult(age) {
  return age >= document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult);
}