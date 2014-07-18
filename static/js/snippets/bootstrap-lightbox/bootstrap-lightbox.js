(function() {
  'use strict';
  var website = openerp.website;
  website.openerp_website = {};
  website.snippet.animationRegistry.lightbox_thumb = website.snippet.Animation.extend({
  
    selector : ".chd-lightbox",
    
    start: function(){
      $('.lightbox-thumbnail').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
    },
  
  });
})();