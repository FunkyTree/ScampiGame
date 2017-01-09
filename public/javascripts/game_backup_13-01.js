var topMargin = 0;
var imageHeight = 400;
var rotationNumber = [3];
var spinning;

init();

function init(){
	// todo: init game
	
	$(document).keypress(function(e) {
		if(e.which == 13) {
			// set rnd spinningwidth
						
			
			// spin
			if(!spinning) {
				drehen("col1", 1.2);
				drehen("col2", 1.5);
				drehen("col3", 1.7);
			}
		}
	});
}

// drehen für i Sekunden
function drehen(spalte, i){
	setTimeout(function(){
		clearInterval(spinning);
	}, i * 1000);
	
	var spinning = setInterval(function(){
		topMargin += imageHeight;
		
		var photos = $("#" + spalte).children();
		
		for(var i = 0; i < photos.length; i++){
			$(photos[i]).css({top: ((imageHeight * i) + topMargin) + "px"});			
		}
				
		if(topMargin % imageHeight == 0) {
			rotate(spalte);
		}
	}, 200);
}

function rotate(spalte){
	var second = $("#" + spalte).children().first();
	
	// switch last to first
	var last = $("#" + spalte).children().last();
	last.css({top:0})
	last.prependTo(last.parent());
		
	topMargin = 0;
}