var richEdit;
var richEditBody;
var curser;
//var br = \<[*]^>\;
function setupRichEdit(){
	var textArea = document.createElement("textarea");
	textArea.setAttribute("id","textArea");
	textArea.style.display = "none";
	richEdit = document.createElement("iFrame");
	document.body.appendChild(textArea);
	document.body.appendChild(richEdit);
	richEdit.contentDocument.designMode = 'On';
	richEdit.contentDocument.body.appendChild(document.createElement("a"));

}

function insertChar(E){
	richEdit.contentDocument.body.innerHTML += E.key;
	return;
}
function removeNode(E){
	//E.preventDefault();
	if(richEdit.contentDocument.body.innerHTML[richEdit.contentDocument.body.innerHTML.length-1] == ">"){
		var end = getEndIndex(richEdit.contentDocument.body.innerHTML);
		if(end != -1){
			richEdit.contentDocument.body.innerHTML = richEdit.contentDocument.body.innerHTML.substring(0,end);
			return;
		}
	}
	richEdit.contentDocument.body.innerHTML = richEdit.contentDocument.body.innerHTML.substring(0,richEdit.contentDocument.body.innerHTML.length-1);
}
function getEndIndex(s){
	for(var i = s.length-1; i >= 0; i--){
		return -1;
	}
	return -1;
}
function handleSpecialKey(E){
	E.preventDefault()
	if(E.key == "Shift")return;
	if(E.key == "Backspace")removeNode(E);
	if(E.key == "Enter")richEdit.contentDocument.body.innerHTML += "<br>";
}

function setupKeybord(){
	document.onkeydown = function(E){
	if(E.key.length > 1)handleSpecialKey(E);
	else insertChar(E);
	}
}

function main(){
	setupRichEdit();
	setupKeybord();
}
window.onload = main;
