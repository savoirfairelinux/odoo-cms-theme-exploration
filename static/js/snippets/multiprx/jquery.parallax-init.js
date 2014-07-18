$(document).ready(function(){	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#multi-prx-main').parallax("50%", 0.1);
	$('.multi-prx-element-bg1').parallax("40%", 0.8);
	$('.multi-prx-element-bg2').parallax("20%", 0.4);

})