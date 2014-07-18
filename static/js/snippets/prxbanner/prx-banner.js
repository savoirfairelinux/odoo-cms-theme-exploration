(function() {
  'use strict';
  var website = openerp.website;
  website.openerp_website = {};
  website.snippet.animationRegistry.prx_banner = website.snippet.Animation.extend({
  
    selector : ".hover-prx",
    
    start: function(){
     
	 	jQuery("#prx-banner").mousemove(
		function(e){
      
			var offset = jQuery(this).offset();
			var xPos = e.pageX - offset.left;
			var yPos = e.pageY - offset.top;

			var mouseXPercent = Math.round(xPos / jQuery(this).width() * 100);
			var mouseYPercent = Math.round(yPos / jQuery(this).height() * 100);

			jQuery(this).children('img').each(
				function(){
					var diffX = jQuery('#Parallax').width() - jQuery(this).width();
					var diffY = jQuery('#Parallax').height() - jQuery(this).height();

					var myX = diffX * (mouseXPercent / 1500);

					var myY = diffY * (mouseYPercent / 1080);


					var cssObj = {
						'left': myX + 'px',
						'top': myY + 'px'
					}
          
					jQuery(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});

				}
			);

		}
	);
	 
    },
  
  });
})();