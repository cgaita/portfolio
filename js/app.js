$(document).ready(function(){
	var projects
	var data = getInfoFromJson()
	.then(function(res){
		// console.log(data)
		projects = assambleProjects(res.data);
		startSlideshow(projects);
		// console.log(projects)
		var Interval
	})
});
function assambleProjects(data){
	var projectArrayNew = []
	data.forEach(function(project){
		projectArrayNew.push(new ProjectNew(project))
	})
	return projectArrayNew;
}
function ProjectNew(project){
	this.image = project.image;
	this.url = project.url;
	this.giturl = project.url;
}
function getInfoFromJson(){
	return $.get('../data.json');
}
function startSlideshow(projectArray){
	console.log(projectArray)
	var image_number = 0;
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

	// function play(){
	// 	document.getElementById("play_stop").innerHTML = '<a class="stopSlideShow" href="#">Stop</a>';
	// 	Interval = setInterval(change_image(1), 3000);
	// 	return Interval
	// }
	// function stop(Interval){
	// 	$(".stopSlideShow").innerHTML = '<a href="#">play</a>';
	// 	clearInterval(Interval);
	// 	console.log("whatevers");
	// }
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
	$('.prev').on('click', function(e){
		change_image(-1)
	})
	$('.next').on('click', function(e){
		change_image(1)
	})
	// $(document).on('click', '#play_stop', function (e){
	// 	Interval = play();
	// })
	// $(document).on('click', '.stopSlideShow', function (e){
		
	// })
	// $('#play_stop').on('click', function(e){
	// 	play();
	// })
	// $('.stopSlideShow').on('click', function(e){
	// 	console.log("this" + e);
	// 	stop();
	// })
}

