// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

var html, svg, text, circle;
var style, top, marginTop, left, marginLeft;

html=document.querySelector('html');
text=document.querySelector('#text');
circle=document.querySelector('#circle');
svg=document.querySelector('svg');

svg.addEventListener('click',update,false);
svg.addEventListener('touchstart',mouseDown,false);
svg.addEventListener('mousedown',mouseDown,false);

function mouseDown(){
	window.addEventListener('mousemove',update,false);
	window.addEventListener('touchmove',update,false);

	window.addEventListener('mouseup',mouseUp,false);
	window.addEventListener('touchend',mouseUp,false);

	html.className='setting';
	svg.style.cursor='-webkit-grabbing';
	svg.style.cursor='grabbing';
}

function mouseUp(){
	window.removeEventListener('mousemove',update,false);
	window.removeEventListener('touchmove',update,false);

	window.removeEventListener('mouseup',mouseUp,false);
	window.removeEventListener('touchend',mouseUp,false);

	html.className='';
	svg.style.cursor='pointer';
}

function update(e){
	e.preventDefault();
	style=getComputedStyle(svg,null);
	top=parseInt(style.top);
	marginTop=parseInt(style.marginTop);
	left=parseInt(style.left);
	marginLeft=parseInt(style.marginLeft);

	var angle=getAngleInRadian(e);
	//handle rotation
	angle+=Math.PI/2;
	angle*=100/(2*Math.PI);

	// This adds the emojis.
	var dispnum = (angle/10).toFixed(0);
	var disp = "";
		if (dispnum >= 0 && dispnum < 1.66) {
			disp = String.fromCodePoint("😢".codePointAt(0));
		}
		else if (dispnum >= 1.66 && dispnum < 3.33 ) {
			disp = String.fromCodePoint("😠".codePointAt(0));
		}
		else if (dispnum >= 3.33 && dispnum < 5) {
			disp = String.fromCodePoint("🙁".codePointAt(0));
		}
		else if (dispnum >= 5 && dispnum < 6.66) {
			disp = String.fromCodePoint("😐".codePointAt(0));
		}
		else if (dispnum >= 6.66 && dispnum <= 8.33) {
			disp = String.fromCodePoint("🙂".codePointAt(0));
		}
		else if (dispnum >= 8.33 && dispnum <= 10) {
			disp = String.fromCodePoint("😁".codePointAt(0));
		}


	// var disp=(angle/10).toFixed(0);
	text.textContent=disp;
	// Changed disp to dispnum
	dispnum<=10?text.setAttribute('x','70'):dispnum<=10?text.setAttribute('y','125'):text.setAttribute('x','67');
	var offset=502+angle/100*502;
	circle.setAttribute('stroke-dashoffset',offset.toString());

	return false;
}

function getAngleInRadian(e){
	var x, y, result, a;
	x = !! e.touches ? e.touches[ 0 ].clientX : e.clientX;
	y = !! e.touches ? e.touches[ 0 ].clientY : e.clientY;
	x=(2*x-innerWidth)/2;
	y=-(2*y-innerHeight)/2;
	a=Math.atan(y/x);
	result=x<0?Math.PI+a:a;
	return result;
}


function popup() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
