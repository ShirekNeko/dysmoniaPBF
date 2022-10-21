const logOut=document.getElementById("logOut");
const profCon=document.getElementById("profCon");
const prof=document.getElementById("prof");
const ping = document.getElementById("ping");
const cbAPC=document.getElementById('cAPC');
if(document.getElementById('admin-link')){
	cbAPC.style.display = 'block';
} else {
	cbAPC.style.display = 'none';
}	
if('<!-- |name| -->' == 'Guest'){
	logOut.style.display = 'none';
	profCon.style.display = 'none';
	prof.style.display = 'none';
	ping.style.display = 'none';
} else {
	document.getElementById("logOut").href=document.getElementById("log-out").getAttribute("href");
	document.getElementById("profCon").href=document.getElementById("my-controls").getAttribute("href");		
	document.getElementById("prof").href=document.getElementById("logged-in-as").getAttribute("href");
}
/**
	OGŁOSZENIA
**/
const info= document.getElementById('ogloszenia');
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
	ping.style.display = 'none';
	ping.style.order = '10';
}
if('<!-- |new_alerts| -->'!='0'){
	ping.style.display = 'block';
	ping.style.order = '5';
} else {
	ping.style.display = 'none';
	ping.style.order = '10';
}

/**
	Szybkie logowanie
**/
const qLogBox = document.getElementById('qLog');
if('<!-- |name| -->' != 'Guest'||window.location.href == "https://dysmonia.jcink.net/index.php?act=Login&CODE=00"){
	qLogBox.style.display = 'none';
} else {
	qLogBox.style.display = 'block';
}
