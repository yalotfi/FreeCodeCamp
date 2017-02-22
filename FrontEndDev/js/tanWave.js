var xspacing = 8;		// Distance between horizintal locations
var w;					// Width of plot
var theta = 0.0;		// Starting angle theta
var amplitude = 25.0;	// Height of wave
var period = 100.0;		// Pixels before wave repeats
var dx;					// Increment x by dx
var yvalues;			// Array that stores height values

function setup() {
    createDynamicCanvas();
}

function draw() {
    background('#222');
    calcSinWave();
    renderWave();
}

function createDynamicCanvas() {
    var element = document.getElementById('midNavSection');
    var navWidth = element.offsetWidth;
    var navHeight = element.offsetHeight;
    //console.log(navWidth, navHeight);
    var canvas = createCanvas(navWidth, navHeight);
    canvas.parent('midNavSection');

    w = navWidth + xspacing;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w/xspacing));
}

function calcSinWave() {
	theta += 0.02;
	
	var x = theta;
	for(var i = 0; i < yvalues.length; i++) {
		yvalues[i] = sin(x) * amplitude;
		x += dx;
	}
}

function renderWave() {
	noStroke();
	fill('#33ADFF');
	for(var x = 0; x < yvalues.length; x++) {
		ellipse(x * xspacing, height/2 + yvalues[x], 8, 8);
	}
}

window.onresize = function() {
    setup();
}