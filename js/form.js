var ul;
var ur;
var dl;
var dr;
var nbSqr;
var colorMatrix;

matrix3 = [
	[{}, {}, {}],
	[{}, {}, {}],
	[{}, {}, {}],
],
matrix4 = [
	[{}, {}, {}, {}],
	[{}, {}, {}, {}],
	[{}, {}, {}, {}],
	[{}, {}, {}, {}],
],
matrix5 = [
	[{}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}],
],
matrix6 = [
	[{}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}],
],
matrix7 = [
	[{}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}],
],
matrix8 = [
	[{}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}],
],
matrix9 = [
	[{}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}],
],
matrix10 = [
	[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
],


document.getElementById("submition").addEventListener("click", function() {
	ul = document.querySelector("#upLeft").value;
	ul = hexToRgb(ul);
	ur = document.querySelector("#upRight").value;
	ur = hexToRgb(ur);
	dl = document.querySelector("#downLeft").value;
	dl = hexToRgb(dl);
	dr = document.querySelector("#downRight").value;
	dr = hexToRgb(dr);
	length = getValue("nbSquares");
	length = parseInt(length);
	console.log("    nb    "+length);
	// console.log("    nb    "+typeof nbSqr);
	
	document.getElementById("fill").innerHTML = "<p>That is it...</p>";
	
	const canvas = document.getElementById('hues');
	const context = canvas.getContext('2d');
	context.fillStyle = 'gray';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	squareSize = canvas.width/length;
	context.scale(squareSize, squareSize);
	
	//faut simplifier ça, j'ai la flemme de trouver
	if (length == 3) {
		colorMatrix = matrix3;
	}
	if (length == 4) {
		colorMatrix = matrix4;
	}
	if (length == 5) {
		colorMatrix = matrix5;
	}
	if (length == 6) {
		colorMatrix = matrix6;
	}
	if (length == 7) {
		colorMatrix = matrix7;
	}
	if (length == 8) {
		colorMatrix = matrix8;
	}
	if (length == 9) {
		colorMatrix = matrix9;
	}
	if (length == 10) {
		colorMatrix = matrix10;
	}
	
	frameColor(colorMatrix, ul, dl, ur, dr);
	fillWithColor(colorMatrix);
	colorizeLevel(colorMatrix, context);
});


function getValue(radioName) {
    var radioButtons = document.getElementsByName(radioName);
	var res = "";
	var i = 0;
	while ((i < radioButtons.length) && (res == "")) {
        if (radioButtons[i].checked)
			res = radioButtons[i].value;
		i++;
	}
	return res;
}

function hexToRgb(hex) { //volé de : https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb ;-;
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function findColorRate(max, min, length) {
	var res = ((min-max)/(length-1));
	res = Math.trunc(res);
	// console.log("----test---- "+res);
	return res;
}

function frameColor(clrMatrix, clrUL, clrDL, clrUR, clrDR) {
	clrMatrix[0][0] = clrUL;
	clrMatrix[0][clrMatrix.length-1] = clrDL;
	clrMatrix[clrMatrix.length-1][0] = clrUR;
	clrMatrix[clrMatrix.length-1][clrMatrix.length-1] = clrDR;
	
	/* //upper border */
	difR = findColorRate(clrMatrix[clrMatrix.length-1][0].r, clrMatrix[0][0].r, clrMatrix.length);
	difG = findColorRate(clrMatrix[clrMatrix.length-1][0].g, clrMatrix[0][0].g, clrMatrix.length);
	difB = findColorRate(clrMatrix[clrMatrix.length-1][0].b, clrMatrix[0][0].b, clrMatrix.length);
	for (var i=1; i<clrMatrix.length-1; i++) {
		// clrMatrix[0][i] = {r: null, g:null, b:null,};
		clrMatrix[i][0].r = clrMatrix[i-1][0].r - difR;
		clrMatrix[i][0].g = clrMatrix[i-1][0].g - difG;
		clrMatrix[i][0].b = clrMatrix[i-1][0].b - difB;
	}
	
	/* //bottom border */
	difR = findColorRate(clrMatrix[clrMatrix.length-1][clrMatrix.length-1].r, clrMatrix[0][clrMatrix.length-1].r, clrMatrix.length);
	difG = findColorRate(clrMatrix[clrMatrix.length-1][clrMatrix.length-1].g, clrMatrix[0][clrMatrix.length-1].g, clrMatrix.length);
	difB = findColorRate(clrMatrix[clrMatrix.length-1][clrMatrix.length-1].b, clrMatrix[0][clrMatrix.length-1].b, clrMatrix.length);
	for (var i=1; i<clrMatrix.length-1; i++) {
		// clrMatrix[clrMatrix.length-1][i] = {r: null, g:null, b:null,};
		clrMatrix[i][clrMatrix.length-1].r = clrMatrix[i-1][clrMatrix.length-1].r - difR;
		clrMatrix[i][clrMatrix.length-1].g = clrMatrix[i-1][clrMatrix.length-1].g - difG;
		clrMatrix[i][clrMatrix.length-1].b = clrMatrix[i-1][clrMatrix.length-1].b - difB;
	}
	
	/* //left border */
	difR = findColorRate(clrMatrix[0][clrMatrix.length-1].r, clrMatrix[0][0].r, clrMatrix.length);
	difG = findColorRate(clrMatrix[0][clrMatrix.length-1].g, clrMatrix[0][0].g, clrMatrix.length);
	difB = findColorRate(clrMatrix[0][clrMatrix.length-1].b, clrMatrix[0][0].b, clrMatrix.length);
	for (var i=1; i<clrMatrix.length-1; i++) {
		// clrMatrix[i][0] = {r: null, g:null, b:null,};
		clrMatrix[0][i].r = clrMatrix[0][i-1].r - difR;
		clrMatrix[0][i].g = clrMatrix[0][i-1].g - difG;
		clrMatrix[0][i].b = clrMatrix[0][i-1].b - difB;
	}
	
	/* //right border */
	difR = findColorRate(clrMatrix[clrMatrix.length-1][clrMatrix.length-1].r, clrMatrix[clrMatrix.length-1][0].r, clrMatrix.length);
	difG = findColorRate(clrMatrix[clrMatrix.length-1][clrMatrix.length-1].g, clrMatrix[clrMatrix.length-1][0].g, clrMatrix.length);
	difB = findColorRate(clrMatrix[clrMatrix.length-1][clrMatrix.length-1].b, clrMatrix[clrMatrix.length-1][0].b, clrMatrix.length);
	for (var i=1; i<clrMatrix.length-1; i++) {
		// clrMatrix[i][clrMatrix.length-1] = {r: null, g:null, b:null,};
		clrMatrix[clrMatrix.length-1][i].r = clrMatrix[clrMatrix.length-1][i-1].r - difR;
		clrMatrix[clrMatrix.length-1][i].g = clrMatrix[clrMatrix.length-1][i-1].g - difG;
		clrMatrix[clrMatrix.length-1][i].b = clrMatrix[clrMatrix.length-1][i-1].b - difB;
	}
}

function fillWithColor(clrMatrix) {
	/* borders already filled 
	--> fill each line*/
	
	for (i=1; i<clrMatrix.length-1; i++) { //y
		diffR = findColorRate(clrMatrix[i][clrMatrix.length-1].r, clrMatrix[i][0].r, clrMatrix.length);
		diffG = findColorRate(clrMatrix[i][clrMatrix.length-1].g, clrMatrix[i][0].g, clrMatrix.length);
		diffB = findColorRate(clrMatrix[i][clrMatrix.length-1].b, clrMatrix[i][0].b, clrMatrix.length);
		for (j=1; j<clrMatrix.length-1; j++) {//x
			clrMatrix[i][j].r = clrMatrix[i][j-1].r - diffR;
			clrMatrix[i][j].g = clrMatrix[i][j-1].g - diffG;
			clrMatrix[i][j].b = clrMatrix[i][j-1].b -diffB;
		}
	}
}

function colorizeLevel(clrMatrix, context) {
	for (i=0; i<clrMatrix.length; i++) {
		for (j=0; j<clrMatrix.length; j++) {
			context.fillStyle = "rgb(" + clrMatrix[i][j].r + ", " + clrMatrix[i][j].g + ", "+clrMatrix[i][j].b + ")";
			context.fillRect(i, j, 1, 1);
		}
	}
}