$(document).ready(function(){
	// var data = getInfoFromJson(function(response){
	// console.log(response);
	// })
	console.log("hello");
	$.get('/js/data.json', function(response){
		console.log('enter' ,response);
	}).done(function(response){
		console.log(response);
	})
});
function getInfoFromJson(cb){
	return $.getJSON('/js/data.json', cb);
}
//slideshow
 var Projects = function(image, url, gitUrl){
	this.image=image;
 	this.url=url;
 	this.gitUrl=gitUrl;
 }
var about_me = new Projects("images/about_me.png");
var karma = new Projects("images/karma.png","https://cgaita.github.io/startup-landing-page-clone/", "https://github.com/cgaita/startup-landing-page-clone");
var street_fighter = new Projects("images/street_fighter.png", "https://cgaita.github.io/jquery-streetfighter/", "https://github.com/cgaita/jquery-streetfighter");
var shopping_list = new Projects("images/shopping_list.png", "https://cgaita.github.io/shopping-list/", "https://github.com/cgaita/shopping-list");
var hot_cold = new Projects("images/hot_cold.png","https://cgaita.github.io/hot-or-cold-starter/", "https://github.com/cgaita/hot-or-cold-starter");
var quiz = new Projects("images/quiz.png","https://cgaita.github.io/quiz/", "https://github.com/cgaita/quiz/tree/master");
var stackoverflow = new Projects("images/stackoverflow.png","https://cgaita.github.io/stackoverflow/","https://github.com/cgaita/stackoverflow");
var logos = new Projects("images/logos.png", "https://cgaita.github.io/logos/", "https://github.com/cgaita/logos");
var instagram = new Projects("images/instagram.png","https://cgaita.github.io/instagram/","https://github.com/cgaita/instagram");

var projectArray = [about_me, karma, street_fighter, shopping_list, hot_cold, quiz, stackoverflow, logos, instagram];

var image_number =0;
var image_length = projectArray.length - 1;
var Interval;

function setLinks(num) {
	var currentLink = projectArray[image_number].url;
	var currentGitLink = projectArray[image_number].gitUrl;
	var gitLink ="<li><a href=\"" + currentGitLink + "\" target=_new><i class='fa fa-github' aria-hidden='true'></i></a></li><li><a href=\"" + currentLink + "\" target=_new><i class='fa fa-desktop' aria-hidden='true'></i></a></li>";
	$('.icons > ul').html(gitLink);
}

function change_image(num){
	image_number = image_number + num;
	if (image_number > image_length){
		image_number =0;
	}
	if (image_number < 0){
		image_number= image_length;
	}
	$('#slideshow').fadeOut('slow', function(){
		$(this).attr('src', projectArray[image_number].image);
	}).fadeIn('slow');
	setLinks(image_number);
}
change_image(image_number);
function play(){
	document.getElementById("play_stop").innerHTML = '<a href="javascript:stop()">Stop</a>';
	Interval = setInterval("change_image(1)", 3000);
}
function stop(){
	document.getElementById("play_stop").innerHTML = '<a href="javascript:play()">Play</a>';
	clearInterval(Interval);
}
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