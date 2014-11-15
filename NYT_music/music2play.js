// For P5 Sound
var triOsc1;
var triOsc2;
var triOsc3;
var triOsc4;
var env1;
var env2;
var env3;
var env4;

// Times and levels for the ASR envelope
var attackTime = 0.1;
var attackLevel = 0.7;
var decayTime = 0.3;
var decayLevel = 0.2;
var sustainTime = 0.1;
var sustainLevel = decayLevel;
var releaseTime = 0.5;

// Set the note trigger
var trigger;

function playMusic(melodyToPlay, melodyTime, chordToPlay, chordTime, callback){
	//Play Melody
  	for (var i = 0; i < melodyToPlay.length; i++) {
		playMelody(melodyToPlay[i], melodyTime);
		melodyTime += melodyDuration[i];
		//console.log("freq:", melodyToPlay[i], melodyDuration[i]);	
	}
	//Play Chords
	for (var i = 0; i < chordToPlay.length; i++) {
		playChord(chordToPlay[i], chordTime);
		chordTime += chordDuration[i];
		//console.log("chord:", chordToPlay[i], chordDuration[i]);
	}
	callback(melodyTime);	
}

function playMelody(freq, theMelodyTime) {
	
	//console.log("play melody!");

	setTimeout(function() {
		triOsc1.freq(freq);
		env1.play(triOsc1);
	}, theMelodyTime);
}

function playChord(freqs, theChordTime){

	//console.log("play chord!");
	//console.log(freqs);

	//Chords
	//Chord c = C-E-G
	var chordC = [261.63, 329.63, 392.00];
	//Chord d = D-F#-A
	var chordD = [293.66, 369.99, 440.00];
	//Chord E = E-G#-B
	var chordE = [329.63, 415.30, 493.88];
	//Chord F = F-A-C
	var chordF = [349.23, 440.00, 523.25];
	//Chord G = G-B-D
	var chordG = [392.00, 493.88, 587.33];
	//Chord A = A-C#-E
	var chordA = [440.00, 554.37, 659.25];
	//Chord B = B-D#-F#
	var chordB = [493.88, 622.25, 739.99];

	var noChord = [0, 0 ,0, 0];

	var chords = [noChord, chordC, chordD, chordE, chordF, chordG, chordA, chordB];			

	setTimeout(function() {
		
		if (freqs == 0){
			// console.log("noChord");
		}

		if (freqs == 1){
			// console.log("chordC");
			triOsc2.freq(chordC[0]);
			env2.play(triOsc2);
			triOsc3.freq(chordC[1]);
			env3.play(triOsc3);
			triOsc4.freq(chordC[2]);
			env4.play(triOsc4);
		}

		if (freqs == 2){
			// console.log("chordD");
			triOsc2.freq(chordD[0]);
			env2.play(triOsc2);
			triOsc3.freq(chordD[1]);
			env3.play(triOsc3);
			triOsc4.freq(chordD[2]);
			env4.play(triOsc4);
		}

		if (freqs == 3){
			// console.log("chordE");
			triOsc2.freq(chordE[0]);
			env2.play(triOsc2);
			triOsc3.freq(chordE[1]);
			env3.play(triOsc3);
			triOsc4.freq(chordE[2]);
			env4.play(triOsc4);
		}

		if (freqs == 4){
			// console.log("chordF");
			triOsc2.freq(chordF[0]);
			env2.play(triOsc2);
			triOsc3.freq(chordF[1]);
			env3.play(triOsc3);
			triOsc4.freq(chordF[2]);
			env4.play(triOsc4);
		}

		if (freqs == 5){
			// console.log("chordG");
			triOsc2.freq(chordG[0]);
			env2.play(triOsc2);
			triOsc3.freq(chordG[1]);
			env3.play(triOsc3);
			triOsc4.freq(chordG[2]);
			env4.play(triOsc4);
		}

		if (freqs == 6){
			// console.log("chordA");
			triOsc2.freq(chordA[0]);
			env2.play(triOsc2);
			triOsc3.freq(chordA[1]);
			env3.play(triOsc3);
			triOsc4.freq(chordA[2]);
			env4.play(triOsc4);
		}	

		if (freqs == 7){
			// console.log("chordA");
			triOsc2.freq(chordB[0]);
			env2.play(triOsc2);
			triOsc3.freq(chordB[1]);
			env3.play(triOsc3);
			triOsc4.freq(chordB[2]);
			env4.play(triOsc4);
		}			
	}, theChordTime);
}