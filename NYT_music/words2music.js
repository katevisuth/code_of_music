
function processData(){
	// pull out a headline from NYT
	results = data.results;
	headlines = [];
	// console.log("results -"+results);

	for(var i = 0; i < results.length; i++){
		var headline = results[i].title;
		headlines.push(headline);
		//console.log(headline);
	}
}

function splitHeadline(headlines){
	//console.log(headlines);	
	wordsArray = [];
	headlines.forEach(function(headline) {
		var words = headline.split(/\W+/);
		wordsArray.push(words);
	});
	console.log(wordsArray);
}

function wordToMusic(wordsArray){	

	//Music Notes C-D-E-F-G-A-B-REST
	var musicNotes = [0, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];	

	// beat = 128 BPM
	var tempo = 468.75;

	var Note = function( freq, duration ){
		this.freq = freq || 440;
		this.duration = duration;
	} 	

	var Chord = function( freqs, duration ){
		this.freqs = freqs || chordC;
		this.duration = duration;
	} 	

	var	lex = new RiLexicon();

	wordsArray.forEach(function(words) {

			for (var i = 0; i < words.length; i++) {
				word = words[i];
				//console.log(word);
				c = word.charAt(i).toLowerCase();
				c = word.length;
				//console.log(c);

				////////// MELODY ////////////
				//Letter counts to musical notes
				if (c <= 7) {
					melodyToPlay.push(musicNotes[c]);
					melodyDuration.push(tempo);
					//console.log('Counter' + ' ' + counter + ':' + 'Full Note' + ':' + ' ' + 'Note' + ' ' + c + ':' + ' ' + 'Freq' + ' ' + musicNotes[c]);
				} else {
					var c2 = word.length - 7;
					melodyToPlay.push(musicNotes[7]);
					melodyDuration.push(234.375);
					melodyToPlay.push(musicNotes[c2]);				
					melodyDuration.push(234.375);
					//console.log('Counter' + ' ' + counter + ':' + 'Half Note' + ':' + ' ' + 'Note' + ' ' + '7' + ':' + ' ' + 'Freq' + ' ' + '493.88' );
					//console.log('Counter' + ' ' + counter + ':' + 'Half Note' + ':' + ' ' + 'Note' + ' ' + c2 + ':' + ' ' + 'Freq' + ' ' + musicNotes[c2]);
				}

				////////// CHORDS ////////////
				//Find verbs and map the verbs to the chords.

				if (lex.isVerb(word) === true && c <=7) {
				chordToPlay.push(c);
				chordDuration.push(tempo);	
				//console.log('Counter' + ' ' + counter + ':' + 'Full Note' + ':' + ' ' + 'Chord' + ' ' + c);			
				}

				if (lex.isVerb(word) === true && c >7) {
				var c2 = word.length - 7;				
				chordToPlay.push(7);
				chordToPlay.push(234.375);
				chordToPlay.push(c2);				
				chordToPlay.push(234.375);
				// console.log('Counter' + ' ' + counter + ':' + 'Half Note' + ':' + ' ' + 'Chord' + ' ' + '7');
				// console.log('Counter' + ' ' + counter + ':' + 'Half Note' + ':' + ' ' + 'Chord' + ' ' + c2);				
				}

				if (lex.isVerb(word) === false) {		
				chordToPlay.push(0);
				chordDuration.push(tempo);
				//console.log('Counter' + ' ' + counter + ':' + 'Full Note' + ':' + ' ' + 'No chord');		
			}
		}
		
		var melodyArray = [];			
		var melodyTimeArray = [];
		var chordArray = [];			
		var chordTimeArray = [];	
		var allArray = [];		
			
		melodyArray.push(melodyToPlay);
		//console.log(allMelody, allMelody.length);

		melodyTimeArray.push(melodyDuration);
			
		chordArray.push(chordToPlay);
		//console.log(allChord, allChord.length);

		chordTimeArray.push(chordDuration);		

		allArray.push(wordsArray, melodyArray, melodyTimeArray, chordArray, chordTimeArray);
		//console.log(allArray.length);
	});
}