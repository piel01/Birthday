const myForm = document.getElementById("date-form"); //gets element by id of myForm
const maleNames = [
  "Kwasi",
  "kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
myForm.addEventListener("submit", (e) => {
  e.preventDefault(); //stop default behavior of the browser redirecting to a different page
  const formData = new FormData(e.target); //collect inputs from HTML elements
  var dateEntered = new Date(formData.get("date")); // convert Date inputs to Date objects
  var day = dateEntered.getDay();
  if (document.getElementById("gender").value == "male") {
    document.getElementById("message").innerText =
      "Your Akan Name Is " + maleNames[day];
  }
  if (document.getElementById("gender").value == "female") {
    document.getElementById("message").innerText =
      "Your Akan Name Is " + femaleNames[day];
  }
});
