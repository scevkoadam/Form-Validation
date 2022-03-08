var username = document.querySelector('input[type="text"]');
var password = document.querySelector('input[type="password"]');
var email = document.querySelector('input[type="email"]');
var btn = document.querySelector('input[type="submit"]');
var myForm = document.querySelector('form');
var greske = document.querySelector('.greske');

btn.addEventListener('click', formValidacija)

function formValidacija(e) {
  e.preventDefault();

  var userData = {
    uv: username.value,
    pwv: password.value,
    ev: email.value
  }

  var errors = [];

  if (userData.uv.length > 20) {
    username.style.border = "1px solid tomato";
    errors.push('Predugacak username');
  }

  if (userData.pwv != "123") {
    password.style.border = "1px solid tomato";
    errors.push('Netacan pw');
  }

  if (userData.ev.indexOf('@gmail.com') == -1) {
    email.style.border = "1px solid tomato";
    errors.push('Email mora biti gmail');
  }

  if (errors.length != 0) {
    //console.log(errors);
    greske.innerHTML = "<p>Greske su sledece:\n</p>"
    for (var i = 0; i < errors.length; i++) {
        greske.innerHTML += "<p>\n-"+errors[i]+"\n</p>";
    }
  } else {
    myForm.submit();
  }

}
