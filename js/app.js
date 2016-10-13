//slideshow
var Projects = function(image, url, gitUrl){
	this.image=image;
	this.url=url;
	this.gitUrl=gitUrl;
}
var karma = new Projects("images/karma.png","https://cgaita.github.io/startup-landing-page-clone/", "https://github.com/cgaita/startup-landing-page-clone");
var street_fighter = new Projects();
//var projectArray = [karma,street_fighter]



var image = new Array ("images/about_me.png", karma.image, "images/street_fighter.png", "images/shopping_list.png", "images/hot_cold.png", "images/quiz.png");
var image_number =0;
var image_length = image.length - 1;
var Interval;

function change_image(num){
	image_number = image_number + num;
	if (image_number > image_length){
		image_number =0;
	}
	if (image_number < 0){
		image_number= image_length;
	}
	$('#slideshow').fadeOut('slow', function(){
		$(this).attr('src', image[image_number]);
	}).fadeIn('slow');
}
function play(){
	document.getElementById("play_stop").innerHTML = '<a href="javascript:stop()">Stop</a>';
	Interval = setInterval("change_image(1)", 3000);
}
function stop(){
	document.getElementById("play_stop").innerHTML = '<a href="javascript:play()">Play</a>';
	clearInterval(Interval);
}
$(document).ready(function(){
	//hides home page shows projects page
	// $('.projects-button').click(function(){
	// 	$('#home-page').hide();
	// 	$('#projects-page').show();
	// });
	// //hides projects pages asnd goes back to home page
	// $('#go-home').click(function(){
	// 	$('#projects-page').hide();
	// 	$('#home-page').show();
	// });
});
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}