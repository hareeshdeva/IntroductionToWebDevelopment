/*
  Name: Hareesh Devarasetty
  Date Created:7/14/2019
  Most recent revision: 7/14/2019
*/

function validateInfo () {
  var nameInput = document.getElementById("name"),
    emailInput = document.getElementById("email"),
    phoneInput = document.getElementById("phone"),
    reasonInput = document.getElementById("reason"),
    infoIntput = document.getElementById("info");
  
  var message = "";

  // Name and form of contact information should be filled in
  if (!(nameInput.value && emailInput.value && phoneInput.value)) {
    if(!nameInput.value) message+="\u25B6 Please enter your name\n\n"
    else message+="\u25B6 Make sure you have entered your phone and email to contact you\n\n";
  }

  // If Reason for Inquiry's dropdown is selected to Other, make sure that the Additional Information is filled in.
  if (reasonInput.value == "other" && !infoIntput.value) {
    message+="\u25B6 (Other) Please explain your reason for inquiring in the Additional Information section\n\n";
  }

  // Best days to contact you must have at least one day checked
  var daysToContact = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (daysToContact < 1) {
    message+="\u25B6 Please select at least one day that is convenient to contact you\n\n";
  }

  if (message) {
    alert(message);
    return false;
  }
  else{
  alert("Your request has been succesfully submitted! We will contact you as soon as possible")
  }
}