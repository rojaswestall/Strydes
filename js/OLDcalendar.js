var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 100;
var startAngle = 0.5 * Math.PI;
var endAngle = 1.3 * Math.PI;
var counterClockwise = true;

context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
context.lineWidth = 20;

context.font="60px Helvetica Neue";
context.fillStyle="#085078";
context.fillText("60", 120, 170);

// line color
context.strokeStyle = 'yellowgreen';
context.stroke();


var modal1 = document.getElementById('myModal-1');
var btn1 = document.getElementById('myBtn-1');
var span1 = document.getElementById('close-1');

var question = document.getElementById('Doctor-question');
var response = document.getElementById('User-response');

var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');

btn1.onclick = function() {
    modal1.style.display = "block";
    // document.getElementById("myBtn-1").style.background = "none";
    // document.getElementById("q1").style.background = "white";
    // document.getElementById("q2").style.background = "white";
    // document.getElementById("q3").style.background = "white";
    question.innerHTML = "";
    response.innerHTML = "";
}

span1.onclick = function() {
    modal1.style.display = "none";
    //document.getElementById("myBtn-1").style.background = none;
    q1.style.background = "white";
    q2.style.background = "white";
    q3.style.background = "white";
    question.innerHTML = "";
    response.innerHTML = "";
}

q1.onclick = function() {
  question.innerHTML = "Have you experienced any side effects from your medication?";
  response.innerHTML = "I was not able to sleep very well last night.";
  q1.style.background = "yellowgreen";
  q2.style.background = "white";
  q3.style.background = "white";
}

q2.onclick = function() {
  question.innerHTML = "Have you done any physical activity today?";
  response.innerHTML = "I took a 30 minute walk today at 3:00 pm.";
  q2.style.background = "yellowgreen";
  q1.style.background = "white";
  q3.style.background = "white";
}

q3.onclick = function() {
  question.innerHTML = "Any other questions, comments, or concerns?";
  response.innerHTML = "I found myself curt and somewhat abrasive with people today.";
  q3.style.background = "yellowgreen";
  q2.style.background = "white";
  q1.style.background = "white";
}
