
// include CDN link in html file : <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

// By default, all HTML elements have a static position, and cannot be moved.
// To manipulate the position, remember to first set the CSS position property of the element to 'relative', 'fixed', or 'absolute'!

/* <style type="text/css">
	 	div {
	 		position: absolute;
	 		background:#eee;
	 		height:fit-content;       // example CSS file
	 		width:fit-content;
	 	}
	 	button {
	 		position: absolute;
	 	}
	 </style> */

// Basic syntax
// $(selector).animate({params},speed,callback);

// we can manipulate ALL CSS properties with the animate() method.
// Important thing to remember: all property names must be camel-cased when used with the animate() method.
// We will need to write paddingLeft instead of padding-left, marginRight instead of margin-right


$(document).ready(function(){

// Global Animation properties
	jQuery.fx.off = true;              // to disable all animations on page.
	jQuery.fx.interval = 100;          // rate at which animations run, defines no. of frames to run per second


	 $("button").click(function(){

		 $("div").animate({

		 "left":'250px',                   // properties can be with or without "" , still better to have within ""
		 "opacity": '0.5',
	         "height": '+=150px',              // relative values specified to current value, using += or -=
	         "width": '-=150px'

		 }, 5000, function(event){
		 	alert("completed!!");
		 });


		 $("div").animate({               // animate() func added in queue

		 "height" : 'toggle',
		 "width" : 'hide',
		 "opacity" : 'toggle'              // using predefined values of "show" , "hide" , "toggle" with props

		 },3000);
	 });


	 $("div").slideUp("fast")
			 .delay(400)               // delay() : delays between effects
			 .slideDown("slow");       


	 $("#stop").click(function(){          // stop(stopAll, goToEnd)
	 	$("div").stop(true,true);      // stop(false,false) or stop() (default) : only the active animation will be stopped, without making current animation to it's end state, allowing any queued animations to be performed afterwards
					      //  stop(true)      : 'stopAll' specifies whether also the animation queue should be cleared or not, current anim will be stopped.
					      //  stop(true,true) : 'goToEnd' specifies whether or not to complete the current animation immediately.
	 });

});
