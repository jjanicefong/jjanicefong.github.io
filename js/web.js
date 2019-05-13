/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//contact form database - firebase 

var datab = firebase.firestore();

function sendData() {
    fname = document.querySelector("#fname").value;
    lname = document.querySelector("#lname").value;
    subj = document.querySelector("#subj").value;
    email = document.querySelector("#email").value;
    msg = document.querySelector("#msg").value;
    
    datab.collection("contact-form").add({
        email: email,
        firstname: fname,
        lastname: lname,
        subject: subj,
        message: msg
    });
    
}