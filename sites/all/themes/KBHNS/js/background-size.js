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
			var imgSrc1 = $('.view-header-image .views-row-'+i+' .views-field-field-image-header img').attr('src');
			var current2 = $('.view-header-image .views-row-'+i+' .views-field-field-image-header');
			$('.view-header-image .views-row-'+i+' .views-field-field-image-header img').remove();
			$(current2).append('<div class="backbg"></div>');
			$('.view-header-image .views-row-'+i+' .views-field-field-image-header .backbg').css('background-image', 'url(' + imgSrc1 + ')');  
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

})(jQuery);
