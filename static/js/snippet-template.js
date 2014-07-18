(function() {
  'use strict';
    
  openerp.website.add_template_file('/theme_clean_sfl/static/src/xml/theme.xml');
    
  var website = openerp.website;
  website.openerp_website = {};
  website.snippet.animationRegistry.snippet_name = website.snippet.Animation.extend({
  
    selector : ".SNIPPET-NAME",
    
    start: function(){
     
	 <!-- Start Custom JS Here -->
	 

	 
	 <!-- Stop Custom JS Here -->
	 
    },
  
  });
})();