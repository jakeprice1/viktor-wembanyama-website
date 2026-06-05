function validateForm() {

let email =
document.getElementById("email").value;

if(email.indexOf("@") === -1){

alert(
"Please enter a valid email address containing @"
);

return false;

}

alert(
"Form submitted successfully!"
);

return false;

}