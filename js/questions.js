// for (var i=1; i<4; i++) {
//   var modal = document.getElementById('myModal');
//   var btn = document.getElementById("myBtn-" + i);
//   var span = document.getElementsByClassName("close")[0];
//   if (button != null) {
//     button.onclick = function() {
//       modal.style.display = "block";
//       document.getElementById("myBtn-" + i).style.background = "yellowgreen";
//     }
//   }
// }
//
// Get the modal
var modal1 = document.getElementById('myModal-1');
var modal2 = document.getElementById('myModal-2');
var modal3 = document.getElementById('myModal-3');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn-1");
var btn2 = document.getElementById("myBtn-2");
var btn3 = document.getElementById("myBtn-3");

// Get the <span> element that closes the modal
var span1 = document.getElementById("close-1");
var span2 = document.getElementById("close-2");
var span3 = document.getElementById("close-3");

// Get the button that saves the answer
var save1 = document.getElementById("save1");
var save2 = document.getElementById("save2");
var save3 = document.getElementById("save3");

// When the user clicks the save button, make the button say saved
save1.onclick = function() {
  // if (modal1.innerHTML == "Enter your answer here";) {
  //   alert("Please enter an answer to save.");
  // }
  // else { save1.innerHTML = "Saved!";}

  save1.innerHTML = "Saved!";
}

save2.onclick = function() {
  save2.innerHTML = "Saved!";
}

save3.onclick = function() {
  save3.innerHTML = "Saved!";
}

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

span1.onclick = function() {
    modal1.style.display = "none";
    if (save1.innerHTML == "Saved!") {
    btn1.style.background = "yellowgreen";
    }
}

span2.onclick = function() {
    modal2.style.display = "none";
    if (save2.innerHTML == "Saved!") {
    btn2.style.background = "yellowgreen";
    }
}


span3.onclick = function() {
    modal3.style.display = "none";
    if (save3.innerHTML == "Saved!") {
    btn3.style.background = "yellowgreen";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
        if (save1.innerHTML == "Saved!") {
        btn1.style.background = "yellowgreen";
      }
    }
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
        if (save2.innerHTML == "Saved!") {
        btn2.style.background = "yellowgreen";
      }
    }
}

window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
        if (save3.innerHTML == "Saved!") {
        btn3.style.background = "yellowgreen";
      }
    }
}
