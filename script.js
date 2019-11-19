// variables
var gs = document.getElementById("george");
var mb = document.getElementById("michael");
var ya = document.getElementById("yordan");
var cc = document.getElementById("carlos");
var ja = document.getElementById("jose");
var ab = document.getElementById("alex");
var yg = document.getElementById("yuli");
var jr = document.getElementById("josh");
var mm = document.getElementById("martin");
var rc = document.getElementById("robinson");
var jv = document.getElementById("justin");
var gc = document.getElementById("gerrit");

var gsS = document.getElementById("springer-sound");
var ygS = document.getElementById("gurriel-sound");
var mbS = document.getElementById("brantley-sound");
var yaS = document.getElementById("alvarez-sound");
var jrS = document.getElementById("reddick-sound");
var abS = document.getElementById("bregman-sound");
var jaS = document.getElementById("altuve-sound");
var ccS = document.getElementById("correa-sound");
var gcS = document.getElementById("cole-sound");
var jvS = document.getElementById("verlander-sound");

// arrays
var allPlayers = [gs, mb, ya, cc, ja, ab, yg, jr];
var allSounds = [gsS, ygS, mbS, yaS, jrS, abS, jaS, ccS, gcS, jvS];

// event listeners
mb.addEventListener("click", brantleyImage);
ya.addEventListener("click", alvarezImage);
yg.addEventListener("click", gurrielImage);
gs.addEventListener("click", springerImage);
ja.addEventListener("click", altuveImage);
cc.addEventListener("click", correaImage);
jv.addEventListener("click", verlanderImage);
gc.addEventListener("click", coleImage);


x = 0


function reddickImages(el){
	if (el.src.match("images/portraits/JR.png")){
		el.src = "images/bubble/JR1.jpg";
	} else if (el.src.match("images/bubble/JR1.jpg")){
		el.src = "images/bubble/JR2.jpg";
	} else if (el.src.match("images/bubble/JR2.jpg")){
		el.src = "images/bubble/JR3.jpg";
	} else if (el.src.match("images/bubble/JR3.jpg")){
		el.src = "images/bubble/JR4.jpg";
		x++;
		console.log(x);
		document.getElementById("reddick-sound").play();
	} else {
		// play bubble popping sound as many times as the user clicks!
		document.getElementById("reddick-sound").play();
	}
}

function bregmanImages(el){
	gs.src = "images/dugout/ABscream.gif";
	mb.src = "images/dugout/ABharden.gif";
	ya.src = "images/dugout/ABback2back.gif";
	cc.src = "images/dugout/ABnod.gif";
	ja.src = "images/dugout/ABshuffleboard.gif";
	ab.src = "images/dugout/ABshouldawalked.gif";
	yg.src = "images/dugout/ABcrazyface.gif";
	jr.src = "images/dugout/ABteamstare.gif";
	
	// https://www.mlb.com/entertainment/walk-up/hou
	document.getElementById("bregman-sound").play();

}

function brantleyImage(){
	document.getElementById("brantley-sound").play();
	mb.src = "images/brantleys_double_play.png";
}

function alvarezImage(){
	document.getElementById("alvarez-sound").play();
	ya.src = "images/back_to_back.png";
}

function gurrielImage(){
	document.getElementById("gurriel-sound").play();
	yg.src = "images/yuli_troll_hair.gif";
}

function springerImage(){
	document.getElementById("springer-sound").play();
	gs.src = "images/springer-SI-covers.png";
}

function altuveImage(){
	document.getElementById("altuve-sound").play();
	ja.src = "images/alcs_mvp.png";
}

function correaImage(){
	document.getElementById("correa-sound").play();
	cc.src = "images/correa_see_you_later.gif";
}

function coleImage(){
	if (jv.src = ""){
		// play no sound
	} else {
		document.getElementById("cole-sound").play();
	}
	mm.src = "images/portraits/MM.png";
}

function verlanderImage(){
	document.getElementById("verlander-sound").play();
	rc.src = "images/portraits/RC.png";
}


function reload(){
	//window.location.reload(false); 
}
