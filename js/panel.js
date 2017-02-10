var button_off = document.getElementById("wylacz");
var button_on = document.getElementById("wlacz");

console.log(window.on_off1);
var offFunction = function(){
	document.getElementById("tresc_1").innerHTML = "Wyłączone";
	window.on_off = 99;
	console.log(window.on_off);

}
var onFunction = function(){
	document.getElementById("tresc_1").innerHTML = "Włączone";
	window.on_off = 100;
	console.log(window.on_off);
	chrome.windows.create({url: "https://onet.pl", type: 'popup'});
}

button_off.addEventListener("click", offFunction);
button_on.addEventListener("click", onFunction);

