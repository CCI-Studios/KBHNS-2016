(function($){

	$(function(){

	        $('#block-views-quotes-block .view-content').slick(
			{infinite: true,
			arrows: true,
			dots: false}); 

			$('.view-header-image .view-content').slick(
			{infinite: true,
			arrows: false,
			dots: true}); 


		 	var max1=$('.view-header-image .views-row').length;
	     	for(var i=1; i<=max1; i++)
	        {
				$('.view-header-image .views-row-'+i+' .views-field-field-image-header').replaceImgtag();
	 	    }
	 	    
			boxHeight(0.4);
			function boxHeight(h)
			{
				var width=$(window).width();

			  	$('#block-views-header-image-block .backbg, #block-views-header-image-block .views-row').css({'height':h*width,'min-height':400});
			  	$('.views-field-field-image-header').css({'height':h*width});
			}

			if($(window).width() < 580)
			{
				boxHeight(0.5);
			}

		  	$(window).resize(function(){

			  	boxHeight(0.4);

			  	if($(window).width() < 580)
				{
					boxHeight(0.5);
				}

		  	});
	});

	 $.fn.replaceImgtag = function( action ){
        
        var img = $(this).find('img');
        var imgSrc = img.attr('src');
        var div = $(this).find('div');
        console.log(img.attr('src'));
        img.remove();
        div.html('<div class="backbg"></div>');
        $(this).find('.backbg').css('background-image', 'url(' + imgSrc + ')');
 	};

})(jQuery);
