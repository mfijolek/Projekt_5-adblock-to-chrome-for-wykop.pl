4//Usuwanie reklam
// var button = document.getElementById("wylacz");
// console.log(button);
// console.log(button2);

var button_off = document.getElementById("wylacz");
var button_on = document.getElementById("wlacz");

var el1 = new Array();
		el1.push(document.querySelector("div .grid-full"));
		el1.push(document.querySelector("#site > div > div.grid-right.m-reset-float.m-reset-margin.m-reset-width.m-hide > div:nth-child(1)"));
		el1.push(document.querySelectorAll("div[id*=\"bmone2n-7069\""));
		el1.push(document.querySelector("#site > a"));
		el1.push(document.querySelector("div[id=\"wrapper_plush_halfPage\"]"));
		el1.push(document.querySelector("div[id=\"fixedBox\"]"));
		for(var x = 0; x < el1.length; x++){
			console.log(x + " = " + el1[x]);
		}
		on_off = 1;


function myFunction(){		// var on_off=1;
// console.log(on_off);
// console.log(el1.length);
		if(on_off == 1 && el1.length != null ){
			//Włączone
			for(var i = 0; i < el1.length; i++){
				//console.log(el1);
				//console.log(el1[i].length);
				if(el1[i] != null && el1[i][0] != null)
				{
					for(var j = 0; j < el1[i].length; j++){
						el1[i][j].style.display = "none";
					}
				} else if (el1[i] != null && el1[i][0] == null) {
					el1[i].style.display = "none";
				} else {
					console.log("do nothing");
				}
			}
		} else {
			//Wyłaczone
			console.log("wylaczone background");
		}
}

myFunction();
window.on_off1 = 123;
//button_off.addEventListener("click", console.log(window.on_off));