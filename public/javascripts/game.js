var topMargin = 0;
var imageHeight = 400;
var rotationNumber = [3];
var spinning;
var busy = false;

init();

function init(){
	// todo: init game
	unloadScrollBars();
	
	$(document).keypress(function(e) {
		if(e.which == 13) {			
			// spin
			if(!busy) {
				busy = true;
				
				// set rnd spinningwidth
				var rotationSpeed = (Math.random() % 0.1) + 0.05;
				var rotationTime = (Math.random() % 1.5) + 1.2;
				updateSiblingsById("col1", {transition: "all " + rotationSpeed + "s linear 0s"});
				updateSiblingsById("col2", {transition: "all " + rotationSpeed + "s linear 0s"});
				updateSiblingsById("col3", {transition: "all " + rotationSpeed + "s linear 0s"});
				
				drehen("col1", 1.2, rotationSpeed);
				drehen("col2", 1.5, rotationSpeed);
				drehen("col3", 1.9, rotationSpeed);
			}
		}
	});
}

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
}

function updateSiblingsById(id, css){
	var elements = $("#" + id).children();

	for(var i = 0; i < elements.length; i++){
		$(elements[i]).css(css);			
	}
}

// drehen der spalte für s Sekunden mit intervall i
function drehen(spalte, s, i){
	setTimeout(function(){
		clearInterval(spinning);
		busy = false;
	}, s * 1000);
	
	var spinning = setInterval(function(){
		topMargin += imageHeight;
		
		var photos = $("#" + spalte).children();
		
		for(var c = 0; c < photos.length; c++){
			$(photos[c]).css({top: ((imageHeight * c) + topMargin) + "px"});			
		}
				
		if(topMargin % imageHeight == 0) {
			rotate(spalte);
		}
	}, i * 1000);
}

function rotate(spalte){
	var second = $("#" + spalte).children().first();
	
	// switch last to first
	var last = $("#" + spalte).children().last();
	last.css({top:0})
	last.prependTo(last.parent());
		
	topMargin = 0;
}
