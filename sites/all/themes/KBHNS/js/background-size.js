(function($){

$(function(){


		 $('.webform-component-file').prepend('<div class="browse-button">Browse</div>');
		$("[type=file]").on("change", function(){
		  // Name of file and placeholder
		  var file = this.files[0].name;
		  var dflt = $(this).attr("placeholder");
		  if($(this).val()!=""){
		  		$(this).parent().parent().find('label').hide();
		   $(this).parent().before().text(file);

		  } else {
		      	$(this).parent().before().text(dflt);

		  }	
		});


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
