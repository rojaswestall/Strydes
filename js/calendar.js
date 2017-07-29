var canvas_1 = document.getElementById('myCanvas-1');
var context_1 = canvas_1.getContext('2d');
var x_1 = canvas_1.width / 2;
var y_1 = canvas_1.height / 2;
var radius_1 = 100;
var startAngle_1 = 0.5 * Math.PI;
var endAngle_1 = 1.66 * Math.PI;
var counterClockwise_1 = true;

context_1.beginPath();
context_1.arc(x_1, y_1, radius_1, startAngle_1, endAngle_1, counterClockwise_1);
context_1.lineWidth = 20;

context_1.font="60px Helvetica Neue";
context_1.fillStyle="#085078";
context_1.fillText("🙁", 120, 175);
// line color
context_1.strokeStyle = 'yellowgreen';
context_1.stroke();


var modal_1 = document.getElementById('myModal-1');
var btn_1 = document.getElementById('myBtn-1');
var span_1 = document.getElementById('close-1');

var question_1 = document.getElementById('Doctor-question-1');
var response_1 = document.getElementById('User-response-1');

var q1_1 = document.getElementById('q1-1');
var q2_1 = document.getElementById('q2-1');
var q3_1 = document.getElementById('q3-1');

btn_1.onclick = function() {
    modal_1.style.display = "block";
    question_1.innerHTML = "";
    response_1.innerHTML = "";
}

span_1.onclick = function() {
    modal_1.style.display = "none";
    //document.getElementById("myBtn-1").style.background = none;
    q1_1.style.background = "white";
    q2_1.style.background = "white";
    q3_1.style.background = "white";
    question_1.innerHTML = "";
    response_1.innerHTML = "";
}

q1_1.onclick = function() {
  question_1.innerHTML = "Have you experienced any side effects from your medication?";
  response_1.innerHTML = "I was not able to sleep very well last night.";
  q1_1.style.background = "yellowgreen";
  q2_1.style.background = "white";
  q3_1.style.background = "white";
}

q2_1.onclick = function() {
  question_1.innerHTML = "Have you done any physical activity today?";
  response_1.innerHTML = "I took a 30 minute walk today at 3:00 pm.";
  q2_1.style.background = "yellowgreen";
  q1_1.style.background = "white";
  q3_1.style.background = "white";
}

q3_1.onclick = function() {
  question_1.innerHTML = "Any other questions, comments, or concerns?";
  response_1.innerHTML = "I found myself curt and somewhat abrasive with people today.";
  q3_1.style.background = "yellowgreen";
  q2_1.style.background = "white";
  q1_1.style.background = "white";
}



var canvas_2 = document.getElementById('myCanvas-2');
var context_2 = canvas_2.getContext('2d');
var x_2 = canvas_2.width / 2;
var y_2 = canvas_2.height / 2;
var radius_2 = 100;
var startAngle_2 = 0.5 * Math.PI;
var endAngle_2 = 0 * Math.PI;
var counterClockwise_2 = true;

context_2.beginPath();
context_2.arc(x_2, y_2, radius_2, startAngle_2, endAngle_2, counterClockwise_2);
context_2.lineWidth = 20;

context_2.font="60px Helvetica Neue";
context_2.fillStyle="#085078";
context_2.fillText("😠", 120, 175);
// line color
context_2.strokeStyle = 'yellowgreen';
context_2.stroke();


var modal_2 = document.getElementById('myModal-2');
var btn_2 = document.getElementById('myBtn-2');
var span_2 = document.getElementById('close-2');

var question_2 = document.getElementById('Doctor-question-2');
var response_2 = document.getElementById('User-response-2');

var q1_2 = document.getElementById('q1-2');
var q2_2 = document.getElementById('q2-2');
var q3_2 = document.getElementById('q3-2');

btn_2.onclick = function() {
    modal_2.style.display = "block";
    question_2.innerHTML = "";
    response_2.innerHTML = "";
}

span_2.onclick = function() {
    modal_2.style.display = "none";
    //document.getElementById("myBtn-2").style.background = none;
    q1_2.style.background = "white";
    q2_2.style.background = "white";
    q3_2.style.background = "white";
    question_2.innerHTML = "";
    response_2.innerHTML = "";
}

q1_2.onclick = function() {
  question_2.innerHTML = "Have you experienced any side effects from your medication?";
  response_2.innerHTML = "I had trouble sleeping again last night.";
  q1_2.style.background = "yellowgreen";
  q2_2.style.background = "white";
  q3_2.style.background = "white";
}

q2_2.onclick = function() {
  question_2.innerHTML = "Have you done any physical activity today?";
  response_2.innerHTML = "No, I have not.";
  q2_2.style.background = "yellowgreen";
  q1_2.style.background = "white";
  q3_2.style.background = "white";
}

q3_2.onclick = function() {
  question_2.innerHTML = "Any other questions, comments, or concerns?";
  response_2.innerHTML = "For most of the day, I felt grumpy and grouchy.";
  q3_2.style.background = "yellowgreen";
  q2_2.style.background = "white";
  q1_2.style.background = "white";
}



var canvas_3 = document.getElementById('myCanvas-3');
var context_3 = canvas_3.getContext('2d');
var x_3 = canvas_3.width / 2;
var y_3 = canvas_3.height / 2;
var radius_3 = 100;
var startAngle_3 = 0.5 * Math.PI;
var endAngle_3 = 1.66 * Math.PI;
var counterClockwise_3 = true;

context_3.beginPath();
context_3.arc(x_3, y_3, radius_3, startAngle_3, endAngle_3, counterClockwise_3);
context_3.lineWidth = 20;

context_3.font="60px Helvetica Neue";
context_3.fillStyle="#085078";
context_3.fillText("🙁", 120, 175);
// line color
context_3.strokeStyle = 'yellowgreen';
context_3.stroke();


var modal_3 = document.getElementById('myModal-3');
var btn_3 = document.getElementById('myBtn-3');
var span_3 = document.getElementById('close-3');

var question_3 = document.getElementById('Doctor-question-3');
var response_3 = document.getElementById('User-response-3');

var q1_3 = document.getElementById('q1-3');
var q2_3 = document.getElementById('q2-3');
var q3_3 = document.getElementById('q3-3');

btn_3.onclick = function() {
    modal_3.style.display = "block";
    question_3.innerHTML = "";
    response_3.innerHTML = "";
}

span_3.onclick = function() {
    modal_3.style.display = "none";
    //document.getElementById("myBtn-3").style.background = none;
    q1_3.style.background = "white";
    q2_3.style.background = "white";
    q3_3.style.background = "white";
    question_3.innerHTML = "";
    response_3.innerHTML = "";
}

q1_3.onclick = function() {
  question_3.innerHTML = "Have you experienced any side effects from your medication?";
  response_3.innerHTML = "I didn't notice any side effects today.";
  q1_3.style.background = "yellowgreen";
  q2_3.style.background = "white";
  q3_3.style.background = "white";
}

q2_3.onclick = function() {
  question_3.innerHTML = "Have you done any physical activity today?";
  response_3.innerHTML = "I briefly jogged when I was late for class.";
  q2_3.style.background = "yellowgreen";
  q1_3.style.background = "white";
  q3_3.style.background = "white";
}

q3_3.onclick = function() {
  question_3.innerHTML = "Any other questions, comments, or concerns?";
  response_3.innerHTML = "Classes made me stressed all day.";
  q3_3.style.background = "yellowgreen";
  q2_3.style.background = "white";
  q1_3.style.background = "white";
}



var canvas_4 = document.getElementById('myCanvas-4');
var context_4 = canvas_4.getContext('2d');
var x_4 = canvas_4.width / 2;
var y_4 = canvas_4.height / 2;
var radius_4 = 100;
var startAngle_4 = 0.5 * Math.PI;
var endAngle_4 = 1.0 * Math.PI;
var counterClockwise_4 = true;

context_4.beginPath();
context_4.arc(x_4, y_4, radius_4, startAngle_4, endAngle_4, counterClockwise_4);
context_4.lineWidth = 20;

context_4.font="60px Helvetica Neue";
context_4.fillStyle="#085078";
context_4.fillText("🙂", 120, 175);
// line color
context_4.strokeStyle = 'yellowgreen';
context_4.stroke();


var modal_4 = document.getElementById('myModal-4');
var btn_4 = document.getElementById('myBtn-4');
var span_4 = document.getElementById('close-4');

var question_4 = document.getElementById('Doctor-question-4');
var response_4 = document.getElementById('User-response-4');

var q1_4 = document.getElementById('q1-4');
var q2_4 = document.getElementById('q2-4');
var q3_4 = document.getElementById('q3-4');

btn_4.onclick = function() {
    modal_4.style.display = "block";
    question_4.innerHTML = "";
    response_4.innerHTML = "";
}

span_4.onclick = function() {
    modal_4.style.display = "none";
    //document.getElementById("myBtn-4").style.background = none;
    q1_4.style.background = "white";
    q2_4.style.background = "white";
    q3_4.style.background = "white";
    question_4.innerHTML = "";
    response_4.innerHTML = "";
}

q1_4.onclick = function() {
  question_4.innerHTML = "Have you experienced any side effects from your medication?";
  response_4.innerHTML = "Started noticing the positive effects of the medicine.";
  q1_4.style.background = "yellowgreen";
  q2_4.style.background = "white";
  q3_4.style.background = "white";
}

q2_4.onclick = function() {
  question_4.innerHTML = "Have you done any physical activity today?";
  response_4.innerHTML = "I went to the gym and played basketball with friends.";
  q2_4.style.background = "yellowgreen";
  q1_4.style.background = "white";
  q3_4.style.background = "white";
}

q3_4.onclick = function() {
  question_4.innerHTML = "Any other questions, comments, or concerns?";
  response_4.innerHTML = "Most of my day was spent with friends which was great.";
  q3_4.style.background = "yellowgreen";
  q2_4.style.background = "white";
  q1_4.style.background = "white";
}



var canvas_5 = document.getElementById('myCanvas-5');
var context_5 = canvas_5.getContext('2d');
var x_5 = canvas_5.width / 2;
var y_5 = canvas_5.height / 2;
var radius_5 = 100;
var startAngle_5 = 0.5 * Math.PI;
var endAngle_5 = 0.66 * Math.PI;
var counterClockwise_5 = true;

context_5.beginPath();
context_5.arc(x_5, y_5, radius_5, startAngle_5, endAngle_5, counterClockwise_5);
context_5.lineWidth = 20;

context_5.font="60px Helvetica Neue";
context_5.fillStyle="#085078";
context_5.fillText("😁", 120, 175);
// line color
context_5.strokeStyle = 'yellowgreen';
context_5.stroke();


var modal_5 = document.getElementById('myModal-5');
var btn_5 = document.getElementById('myBtn-5');
var span_5 = document.getElementById('close-5');

var question_5 = document.getElementById('Doctor-question-5');
var response_5 = document.getElementById('User-response-5');

var q1_5 = document.getElementById('q1-5');
var q2_5 = document.getElementById('q2-5');
var q3_5 = document.getElementById('q3-5');

btn_5.onclick = function() {
    modal_5.style.display = "block";
    question_5.innerHTML = "";
    response_5.innerHTML = "";
}

span_5.onclick = function() {
    modal_5.style.display = "none";
    //document.getElementById("myBtn-5").style.background = none;
    q1_5.style.background = "white";
    q2_5.style.background = "white";
    q3_5.style.background = "white";
    question_5.innerHTML = "";
    response_5.innerHTML = "";
}

q1_5.onclick = function() {
  question_5.innerHTML = "Have you experienced any side effects from your medication?";
  response_5.innerHTML = "The medicine is really working - I feel so normal!";
  q1_5.style.background = "yellowgreen";
  q2_5.style.background = "white";
  q3_5.style.background = "white";
}

q2_5.onclick = function() {
  question_5.innerHTML = "Have you done any physical activity today?";
  response_5.innerHTML = "I went for a long run along the lake.";
  q2_5.style.background = "yellowgreen";
  q1_5.style.background = "white";
  q3_5.style.background = "white";
}

q3_5.onclick = function() {
  question_5.innerHTML = "Any other questions, comments, or concerns?";
  response_5.innerHTML = "Relaxed all afternoon which made me feel rested.";
  q3_5.style.background = "yellowgreen";
  q2_5.style.background = "white";
  q1_5.style.background = "white";
}



var canvas_6 = document.getElementById('myCanvas-6');
var context_6 = canvas_6.getContext('2d');
var x_6 = canvas_6.width / 2;
var y_6 = canvas_6.height / 2;
var radius_6 = 100;
var startAngle_6 = 0.5 * Math.PI;
var endAngle_6 = 1.33 * Math.PI;
var counterClockwise_6 = true;

context_6.beginPath();
context_6.arc(x_6, y_6, radius_6, startAngle_6, endAngle_6, counterClockwise_6);
context_6.lineWidth = 20;

context_6.font="60px Helvetica Neue";
context_6.fillStyle="#085078";
context_6.fillText("😐", 120, 175);
// line color
context_6.strokeStyle = 'yellowgreen';
context_6.stroke();


var modal_6 = document.getElementById('myModal-6');
var btn_6 = document.getElementById('myBtn-6');
var span_6 = document.getElementById('close-6');

var question_6 = document.getElementById('Doctor-question-6');
var response_6 = document.getElementById('User-response-6');

var q1_6 = document.getElementById('q1-6');
var q2_6 = document.getElementById('q2-6');
var q3_6 = document.getElementById('q3-6');

btn_6.onclick = function() {
    modal_6.style.display = "block";
    question_6.innerHTML = "";
    response_6.innerHTML = "";
}

span_6.onclick = function() {
    modal_6.style.display = "none";
    //document.getElementById("myBtn-6").style.background = none;
    q1_6.style.background = "white";
    q2_6.style.background = "white";
    q3_6.style.background = "white";
    question_6.innerHTML = "";
    response_6.innerHTML = "";
}

q1_6.onclick = function() {
  question_6.innerHTML = "Have you experienced any side effects from your medication?";
  response_6.innerHTML = "I didn't really notice the medicine positively or negatively.";
  q1_6.style.background = "yellowgreen";
  q2_6.style.background = "white";
  q3_6.style.background = "white";
}

q2_6.onclick = function() {
  question_6.innerHTML = "Have you done any physical activity today?";
  response_6.innerHTML = "No, I have not.";
  q2_6.style.background = "yellowgreen";
  q1_6.style.background = "white";
  q3_6.style.background = "white";
}

q3_6.onclick = function() {
  question_6.innerHTML = "Any other questions, comments, or concerns?";
  response_6.innerHTML = "I started worrying about the upcoming exams.";
  q3_6.style.background = "yellowgreen";
  q2_6.style.background = "white";
  q1_6.style.background = "white";
}



var canvas_7 = document.getElementById('myCanvas-7');
var context_7 = canvas_7.getContext('2d');
var x_7 = canvas_7.width / 2;
var y_7 = canvas_7.height / 2;
var radius_7 = 100;
var startAngle_7 = 0.5 * Math.PI;
var endAngle_7 = 1.66 * Math.PI;
var counterClockwise_7 = true;

context_7.beginPath();
context_7.arc(x_7, y_7, radius_7, startAngle_7, endAngle_7, counterClockwise_7);
context_7.lineWidth = 20;

context_7.font="60px Helvetica Neue";
context_7.fillStyle="#085078";
context_7.fillText("🙁", 120, 175);
// line color
context_7.strokeStyle = 'yellowgreen';
context_7.stroke();


var modal_7 = document.getElementById('myModal-7');
var btn_7 = document.getElementById('myBtn-7');
var span_7 = document.getElementById('close-7');

var question_7 = document.getElementById('Doctor-question-7');
var response_7 = document.getElementById('User-response-7');

var q1_7 = document.getElementById('q1-7');
var q2_7 = document.getElementById('q2-7');
var q3_7 = document.getElementById('q3-7');

btn_7.onclick = function() {
    modal_7.style.display = "block";
    question_7.innerHTML = "";
    response_7.innerHTML = "";
}

span_7.onclick = function() {
    modal_7.style.display = "none";
    //document.getElementById("myBtn-7").style.background = none;
    q1_7.style.background = "white";
    q2_7.style.background = "white";
    q3_7.style.background = "white";
    question_7.innerHTML = "";
    response_7.innerHTML = "";
}

q1_7.onclick = function() {
  question_7.innerHTML = "Have you experienced any side effects from your medication?";
  response_7.innerHTML = "Sleep was very difficult for me last night.";
  q1_7.style.background = "yellowgreen";
  q2_7.style.background = "white";
  q3_7.style.background = "white";
}

q2_7.onclick = function() {
  question_7.innerHTML = "Have you done any physical activity today?";
  response_7.innerHTML = "I found a few minutes to stretch.";
  q2_7.style.background = "yellowgreen";
  q1_7.style.background = "white";
  q3_7.style.background = "white";
}

q3_7.onclick = function() {
  question_7.innerHTML = "Any other questions, comments, or concerns?";
  response_7.innerHTML = "Stressing about school makes me feel like I'm spiraling downward.";
  q3_7.style.background = "yellowgreen";
  q2_7.style.background = "white";
  q1_7.style.background = "white";
}



var canvas_8 = document.getElementById('myCanvas-8');
var context_8 = canvas_8.getContext('2d');
var x_8 = canvas_8.width / 2;
var y_8 = canvas_8.height / 2;
var radius_8 = 100;
var startAngle_8 = 0.5 * Math.PI;
var endAngle_8 = 0.33 * Math.PI;
var counterClockwise_8 = true;

context_8.beginPath();
context_8.arc(x_8, y_8, radius_8, startAngle_8, endAngle_8, counterClockwise_8);
context_8.lineWidth = 20;

context_8.font="60px Helvetica Neue";
context_8.fillStyle="#085078";
context_8.fillText("😢", 120, 175);
// line color
context_8.strokeStyle = 'yellowgreen';
context_8.stroke();


var modal_8 = document.getElementById('myModal-8');
var btn_8 = document.getElementById('myBtn-8');
var span_8 = document.getElementById('close-8');

var question_8 = document.getElementById('Doctor-question-8');
var response_8 = document.getElementById('User-response-8');

var q1_8 = document.getElementById('q1-8');
var q2_8 = document.getElementById('q2-8');
var q3_8 = document.getElementById('q3-8');

btn_8.onclick = function() {
    modal_8.style.display = "block";
    question_8.innerHTML = "";
    response_8.innerHTML = "";
}

span_8.onclick = function() {
    modal_8.style.display = "none";
    //document.getElementById("myBtn-8").style.background = none;
    q1_8.style.background = "white";
    q2_8.style.background = "white";
    q3_8.style.background = "white";
    question_8.innerHTML = "";
    response_8.innerHTML = "";
}

q1_8.onclick = function() {
  question_8.innerHTML = "Have you experienced any side effects from your medication?";
  response_8.innerHTML = "Most of my symptoms are back. I think school is causing them.";
  q1_8.style.background = "yellowgreen";
  q2_8.style.background = "white";
  q3_8.style.background = "white";
}

q2_8.onclick = function() {
  question_8.innerHTML = "Have you done any physical activity today?";
  response_8.innerHTML = "No, I have not.";
  q2_8.style.background = "yellowgreen";
  q1_8.style.background = "white";
  q3_8.style.background = "white";
}

q3_8.onclick = function() {
  question_8.innerHTML = "Any other questions, comments, or concerns?";
  response_8.innerHTML = "I spent most of the day in the library feeling overwhelmed.";
  q3_8.style.background = "yellowgreen";
  q2_8.style.background = "white";
  q1_8.style.background = "white";
}
