$(document).ready(function(){
 
        // Calling LayerSlider on the target element
        $('#layerslider').layerSlider({
			
			responsive: false,
			responsiveUnder: 1280,
			layersContainer: 1280,
			skin: 'noskin',
			hoverPrevNext: false,
			skinsPath: '/theme_clean_sfl/static/img/sliderimages/skins/'
 
            // Slider options goes here,
            // please check the 'List of slider options' section in the documentation
        });
    });