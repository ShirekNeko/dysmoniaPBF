const logOut=document.getElementById("logOut"); //Wylogowanie
const profCon=document.getElementById("profCon"); // Panel uzytkownika
const prof=document.getElementById("prof"); // Podgląd profilu
const ping = document.getElementById("alerts-indicator"); // Pingu
const cbAPC=document.getElementById('cAPC'); / Panel Admina
const info= document.getElementById('ogloszenia');
const qLogBox = document.getElementById('qLog');
(function () {
    	if('<!-- |name| -->' == 'Guest'){
		logOut.style.display = 'none';
		profCon.style.display = 'none';
		prof.style.display = 'none';
		hidePing();
	} else {
		document.getElementById("logOut").href=document.getElementById("log-out").getAttribute("href");
		document.getElementById("profCon").href=document.getElementById("my-controls").getAttribute("href");		
		document.getElementById("prof").href=document.getElementById("logged-in-as").getAttribute("href");
	}
}());

function hidePing(){
	ping.style.display = 'none';
	ping.style.order = '10';
};

function showPing(){
	ping.style.display = 'block';
	ping.style.order = '0';
};

if(document.getElementById('admin-link')){
	cbAPC.style.display = 'block';
} else {
	cbAPC.style.display = 'none';
}
if(window.location.href != "https://dysmonia.jcink.net/index.php"){
	info.style.display = 'none';
} else {
	info.style.display = 'block';
}

/**
	PING
**/

let button = document.querySelector('[title="Mark All Read"]')
button.onclick = function() {
	hidePing();
}
if('<!-- |new_alerts| -->'!='0'){
	showPing();
} else {
	hidePing();
}

/**
	Szybkie logowanie
**/

if('<!-- |name| -->' != 'Guest'||window.location.href == "https://dysmonia.jcink.net/index.php?act=Login&CODE=00"){
	qLogBox.style.display = 'none';
} else {
	qLogBox.style.display = 'block';
}
