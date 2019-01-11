var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/carol.jpg') {
      myImage.setAttribute ('src','images/carol2.jpg');
    } else {
      myImage.setAttribute ('src','images/carol.jpg');
    }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Carolina Sottovia, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Carolina Sottovia, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
