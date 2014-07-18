$('#strapslide').strapslide({
        animation: "string",    //List of animations, example: "fade, rotatecw, scaleup, top"
        speed: 1000,    //Slide animation speed
        timeout: 5000,  //Slide display time
        responsive: 'keyword',   //Responsive mode, example: 'resize', 'after', 'none'
        autoplay: boolean,       //Autoplay feature, boolean means: true / false
        preload: boolean,        //Preload feature
        pauseOnHover: boolean,   //Pause On Hover feature
        pagination: boolean,     //Pagination feature
        mousewheel: boolean,     //Mousewheel feature
        keyboard: boolean,       //Keyboard Navigation feature
        touchscreen: boolean     //Touchscreen Enabled
    }, function(){
        //callback when slide enters
    }, function(){
        //callback when slide exits
    })