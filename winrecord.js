// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
var a = document.getElementById("w104");
var b = document.getElementById("w105");
var c = document.getElementById("w106");
var d = document.getElementById("w107");
var e = document.getElementById("final");
var astros_announcer = document.getElementById("celebration");
var counter = 0;

function test(elem){
	elem.style.filter = "grayscale(50%)";
}

function showNext(){
	if (counter == 0) {
		b.classList.remove("display-none");
		a.classList.add("no-cursor");
		a.style.filter = "grayscale(0%)";
		// https://stackoverflow.com/questions/10712219/remove-onclick-event-from-img-tag
		a.removeAttribute("onclick");
		counter++;
	} else if (counter == 1) {
		c.classList.remove("display-none");
		b.classList.add("no-cursor");
		b.style.filter = "grayscale(0%)";
		b.removeAttribute("onclick");
		counter++;
	} else if (counter == 2) {
		d.classList.remove("display-none");
		c.classList.add("no-cursor");
		c.style.filter = "grayscale(0%)";
		c.removeAttribute("onclick");
		counter++;
	} else {
		e.classList.remove("display-none");
		e.classList.add("no-cursor");
		d.classList.add("no-cursor");
		d.style.filter = "grayscale(0%)";
		d.removeAttribute("onclick");
		// play sound
		astros_announcer.play();
		setTimeout(launchIndex, 6500);
	}
	console.log(counter);
}

function launchIndex() {
	window.location.href="index.html";
}