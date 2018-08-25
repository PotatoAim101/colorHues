//on load le canvas
const canvas = document.getElementById('hues');
const context = canvas.getContext('2d');

context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);

//les carrées
//0 c'est les cases qui ne bougents pas
var level1Matrix = [ /*  /!\  (y, x) */
	[0, 1, 0, 1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0],
	[0, 1, 0, 1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0],
	[0, 1, 0, 1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0],
	[0, 1, 0, 1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0],
];
var level2Matrix = [ /*  /!\  (y, x) */
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 0, 0, 1, 1, 0],
	[0, 1, 1, 0, 0, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
];
var level3Matrix = [ /*  /!\  (y, x) */
	[0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0],
];

//scale
squareSize = canvas.width/level1Matrix.length;
context.scale(squareSize, squareSize);

// /!\ tous les matrices doivent être de la même taille
var level1 = {
	olMatrix: level1Matrix,
	squareParam: [
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
	],
	colorMatrix: [
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
	],
	colorUL: {r: 255, g: 102, b: 153}, //pink
	colorDL: {r: 51, g: 102, b: 255}, //blue
	colorUR: {r: 255, g: 255, b: 0}, //yellow
	colorDR: {r: 0, g: 255, b: 0}, //green
};

var level2 = {
	olMatrix: level2Matrix,
	squareParam: [
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
	],
	colorMatrix: [
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
	],
	colorUL: {r: 102, g: 0, b: 255}, //violet
	colorDL: {r: 153, g: 0, b: 0}, //rouge
	colorUR: {r: 204, g: 179, b: 255}, //lavendre
	colorDR: {r: 255, g: 153, b: 51}, //orange
};

var level3 = {
	olMatrix: level3Matrix,
	squareParam: [
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
	],
	colorMatrix: [
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
	],
	colorUL: {r: 255, g: 0, b: 102}, //red
	colorDL: {r: 128, g: 64, b: 0}, //marron
	colorUR: {r: 26, g: 26, b: 255}, //blue
	colorDR: {r: 0, g: 255, b: 0}, //green
};

//pour verifier si le joueur a gagné

var player = {
	numMouvement: 0,
};


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


function colorizeLevel(clrMatrix) {
	for (i=0; i<clrMatrix.length; i++) {
		for (j=0; j<clrMatrix.length; j++) {
			context.fillStyle = "rgb(" + clrMatrix[i][j].color.r + ", " + clrMatrix[i][j].color.g + ", "+clrMatrix[i][j].color.b + ")";
			context.fillRect(i, j, 1, 1);
		}
	}
}


function printRGB(matrix) {
	for (i=0; i<matrix.length; i++) {
		for (j=0; j<matrix.length; j++) {
			console.log("indexe = "+i+" "+j+" "+" R = "+matrix[i][j].r+" G = "+matrix[i][j].g+" B = "+matrix[i][j].b);
		}
	}
}


function fillSquareParam(colorMatrix, paramMatrix, numMatrix){
	var cpt = 0;
	for (i=0; i<paramMatrix.length; i++) {
		for (j=0; j<paramMatrix.length; j++) {
			cpt += 1;
			if (numMatrix[i][j] == 0) {
				paramMatrix[i][j] = {
					movable: false,
					squareNum: cpt,
					color: {
						r: colorMatrix[i][j].r,
						g: colorMatrix[i][j].g,
						b: colorMatrix[i][j].b,
					},
				}
			}else{
				paramMatrix[i][j] = {
					movable: true,
					squareNum: cpt,
					color: {
						r: colorMatrix[i][j].r,
						g: colorMatrix[i][j].g,
						b: colorMatrix[i][j].b,
					},
				}
			}
		}
	}
}


function cloneSquare(square) {
	var res = {
		movable: square.movable,
		squareNum: square.squareNum,
		color: {
			r: square.color.r,
			g: square.color.g,
			b: square.color.b,
		}
	}
	return res;
}


function cloneSquareArray(origin) {
	var matrix =  [
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}],
	];
	for (i=0; i<origin.length; i++) {
		for (j=0; j<origin.length; j++) {
			matrix[i][j] = cloneSquare(origin[i][j]);
		}
	}
	return matrix;
}


function blackDots(squareParam) {
	for (i=0; i<squareParam.length; i++) {
		for (j=0; j<squareParam.length; j++) {
			if (!squareParam[i][j].movable) {
				context.beginPath();
				context.arc(i+0.5, j+0.5, 0.05, 0, 2 * Math.PI, false);
				context.fillStyle = 'black';
				context.fill();
			}
		}
	}
}


function randomValue(max, min) {
	return Math.random() * (max - min) + min;
}


function shuffle(matrix) {
	square1 = cloneSquare(matrix[0][0]);
	for (i=matrix.length-1; i>=0; i--) {
		for (j=matrix.length-1; j>=0; j--) {
			if (matrix[i][j].movable) {
				var x = parseInt(randomValue(i, 0));
				var y = parseInt(randomValue(j, 0));
				while (!matrix[x][y].movable) {
					x = parseInt(randomValue(i, 0));
					y = parseInt(randomValue(j, 0));
				}
				console.log(x+"         "+y);
				tmp = cloneSquare(matrix[i][j]);
				matrix[i][j] = cloneSquare(matrix[x][y]);
				matrix[x][y] = cloneSquare(tmp);
			}
		}
	}
}


/*   L E V E L  1   */
frameColor(level1.colorMatrix, level1.colorUL, level1.colorDL, level1.colorUR, level1.colorDR);
fillWithColor(level1.colorMatrix);
fillSquareParam(level1.colorMatrix, level1.squareParam, level1.olMatrix);
var finalResult = cloneSquareArray(level1.squareParam);
colorizeLevel(level1.squareParam);
blackDots(level1.squareParam);
/* set up is finnished, now start game */
shuffle(level1.squareParam);
colorizeLevel(level1.squareParam);
blackDots(level1.squareParam);


// /*   L E V E L  2   */
// frameColor(level2.colorMatrix, level2.colorUL, level2.colorDL, level2.colorUR, level2.colorDR);
// fillWithColor(level2.colorMatrix);
// fillSquareParam(level2.colorMatrix, level2.squareParam, level2.olMatrix);
// /* // printRGB(level2.colorMatrix); */
// var finalResult = cloneSquareArray(level2.squareParam);
// colorizeLevel(level2.squareParam);
// blackDots(level2.squareParam);
// /* set up is finnished, now start game */
// shuffle(level2.squareParam);
// colorizeLevel(level2.squareParam);
// blackDots(level2.squareParam);


/*   L E V E L  3   */
// frameColor(level3.colorMatrix, level3.colorUL, level3.colorDL, level3.colorUR, level3.colorDR);
// fillWithColor(level3.colorMatrix);
// fillSquareParam(level3.colorMatrix, level3.squareParam, level3.olMatrix);
// /* // printRGB(level3.colorMatrix); */
// var finalResult = cloneSquareArray(level3.squareParam);
// colorizeLevel(level3.squareParam);
// blackDots(level3.squareParam);








