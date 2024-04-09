$(document).ready(function(){

    $(".pointer").fancybox({
        iframe: {
            preload: false
        },
        'width'         : '75%',
        'height'        : '75%',
        'autoScale'     : false,
        'transitionIn'  : 'none',
        'transitionOut' : 'none',
        'type'          : 'iframe'
    });

    $(".pointer2").fancybox({
        fitToView: false, // avoids scaling the image to fit in the viewport
        width: 2800,
        height: 2600,
        
        image: {
            width: 2800,
            height: 2600,
        }
    });
});