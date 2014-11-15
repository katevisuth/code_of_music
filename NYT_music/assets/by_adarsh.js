var data;
var results;
var headlines;
var headline;
var divHeadline;
var divHeadlines = [];

var counter = 0;

var API_ADDRESS = 'http://api.nytimes.com/svc/news/v3/content/all/all/.jsonp?api-key=b420f3213aad12db41ad3ea1f957441a%3A17%3A60255800';

// $(document).ready(function(){

// 	//console.log('Hi John');
// 	getData();

// 	// settings();

// });

function preload(){
	data = loadJSON("http://api.nytimes.com/svc/news/v3/content/all/all/.jsonp?api-key=b420f3213aad12db41ad3ea1f957441a%3A17%3A60255800");
	console.log("loaded", data);
}

function getData() {
	// data = loadJSON("http://api.nytimes.com/svc/news/v3/content/all/all/.jsonp?api-key=b420f3213aad12db41ad3ea1f957441a%3A17%3A60255800");
	//console.log("loaded", data);
	//settings();

/*
	$.ajax({

    url: 'http://api.nytimes.com/svc/news/v3/content/all/all/.jsonp?api-key=b420f3213aad12db41ad3ea1f957441a%3A17%3A60255800',
    async: false,
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function(stuff) { data=stuff; settings(); },
    error: function() { alert('Failed!'); }
});
*/


// 	$.get(API_ADDRESS).done(function(stuff){
// 	//console.log(data);
// 	//console.log(data.result);		
// 	data = stuff;
// 	settings();
// });
}

function setup(){
	processData();
	playLine();	
}

function settings() {

	processData();
	playLine();	
}

function processData(){
	// pull out a headline from NYT
	results = data.results;
	headlines = [];
	console.log("results -"+results);

	for(var i = 0; i < results.length; i++){
		var headline = results[i].title;
		headlines.push(headline);
		// console.log(headline);
		// divHeadline = createDiv(headline);
	}
	//console.log(results[0].title);
}

function playLine() {

	displayHeadline(counter, function() {
	counter++;
	//console.log("counter - "+counter);
	playLine();
	});
}

function displayHeadline(callback){
	//console.log(headlines);
	divHeadline = createDiv(results[counter].title);
	divHeadlines.push(divHeadline);
	//setInterval(callback, 2000);

}



setInterval(function() {
	counter++;

		if (counter > 5){
		divHeadlines[counter-6].remove();
	}
	//console.log("counter - "+counter);
	playLine()}, 2000);

	window.onload = function() {
		// getData();
		// preload();
		// setup();
		//preload();
	};