// JavaScript Document

jQuery(document).ready(function($){

		$('#fn-basic').fancyNews();

		$('#fancy-news-rss').fancyNews({width: 500, height: 420, previewsPerPage:4, maxWords:45, feed:'http://feeds.feedburner.com/nettuts?format=xml'});

	});

