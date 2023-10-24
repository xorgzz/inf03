"use strict"

let frameON = false

function bgC(color) {
	document.querySelector('#r').style.background = color;
}

function fgC() {
	document.querySelector('#r').style.color = document.querySelector('#fgC').value;
}

function fontSizeChange() {
	document.querySelector('#r').style = `font-size: ${document.querySelector('#fs').value}`;
}

function frameDraw() {
	if (document.querySelector('#chck').checked) {
		document.querySelector('#img').style.border = "solid white 1px";
	}
	else {
		document.querySelector('#img').style.border = "none";
	}
}

function bulletPoints(type) {
	document.querySelector('#list').style = `list-style-type:${type};`
}