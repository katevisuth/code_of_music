var data;
var results;
var headlines;
var headline;
var divHeadline;
var divHeadlines = [];
var wordsArray;

var melodyToPlay = [];
var melodyDuration = [];
var chordToPlay = [];
var chordDuration = [];	

var melodyTime = 0;
var chordTime = 0;

var counter = 0;

function preload(){
	data = loadJSON("http://api.nytimes.com/svc/news/v3/content/all/all/.jsonp?api-key=b420f3213aad12db41ad3ea1f957441a%3A17%3A60255800");
	// console.log("loaded", data);
}

function setup(){
	//Set up for P5 sound. Must be in set up.
	trigger = millis();	

	triOsc1 = new p5.TriOsc();
	triOsc2 = new p5.TriOsc();
	triOsc3 = new p5.TriOsc();
	triOsc4 = new p5.TriOsc();

	triOsc1.amp(0);
	triOsc1.start();
	triOsc2.amp(0);
	triOsc2.start();
	triOsc3.amp(0);
	triOsc3.start();
	triOsc4.amp(0);
	triOsc4.start();

	env1 = new p5.Env(attackTime, attackLevel, decayTime, decayLevel, sustainTime, sustainLevel, releaseTime);
	env2 = new p5.Env(attackTime, attackLevel, decayTime, decayLevel, sustainTime, sustainLevel, releaseTime);
	env3 = new p5.Env(attackTime, attackLevel, decayTime, decayLevel, sustainTime, sustainLevel, releaseTime);
	env4 = new p5.Env(attackTime, attackLevel, decayTime, decayLevel, sustainTime, sustainLevel, releaseTime);

	noCanvas();
	processData();
	splitHeadline(headlines);	
	playLine();	
}

function playLine() {

	playThisLine(counter, function() {
	counter++;
	//console.log("counter - "+counter);
	playLine();
	});
}

function playThisLine(callback){

	//words2music
	//Create a div to display headlines 
	divHeadline = createDiv(results[counter].title);
	//Push headlines in an array
	divHeadlines.push(divHeadline);
	//To prevent pushing unwanted headlines to melodyToPlay
	var array = [];
	for (var i = -4; i <= 0; i++) {
		if (wordsArray[counter + i]) array.push(wordsArray[counter + i]);
	}
	wordToMusic(array);	
	console.log('Add new headline' + ':' + ' ' + headlines[counter]);
	// If you need to play each headline line by line
	// console.log(wordsArray[counter]);

	/////////////////////////////////////////////////////////////////////////////

	//music2play
	playMusic(melodyToPlay, melodyTime, chordToPlay, chordTime, function(timeOut) {

		//Remove the first headline and replace with a new headline.
		setTimeout(function() {
			counter++;
			if (counter > 4){
				divHeadlines[counter-5].remove();
				console.log('Remove headline' + ':' + ' ' + headlines[counter-5]);
			}
		
		console.log('Finished Playing' + ' ' + [counter] + ' ' + "times." + ' ' + 'Duration' + ':' + ' ' + timeOut + ' ' + 'millis');
		
		playLine()}, timeOut);
	});
}