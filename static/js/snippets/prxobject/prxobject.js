function parallax(){
    var scrolled = $(window).scrollTop();
    var prxobject01 = $('.prxobject01');
    prxobject01.css('transform', "translateY(" + -(scrolled * 0.8) + "px)");
	var prxobject02 = $('.prxobject02');
    prxobject02.css('transform', "translateY(" + -(scrolled * 0.4) + "px)");
}

$(window).scroll(function() {
	parallax();
});
	 
