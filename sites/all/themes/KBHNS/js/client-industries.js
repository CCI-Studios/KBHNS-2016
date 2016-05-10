(function($){

$(function(){

		var div_client='#block-views-client-industries-detail-block';
		var div_popup_client='#block-views-client-industries-pop-up-block';
		var div_popup_description='#block-views-opportunities-description-block';

		//client industries and oppprtunities views, adding underscore to id name

		$(div_popup_client+' .views-row,'+div_popup_description+' .views-row').each(function(index){

				var textValue = $(this).find('.views-field-title div').attr("id"); 
				textValue=textValue.replace(/,/g, "");   
		        textValue =textValue.split(' ').join('_');
		        $(this).find('.views-field-title div').attr("id",textValue);    
		});

		//client industries pop up

		$('.view-client-industries-detail .more-link').click(function(e){
			e.preventDefault();
			var textValue = $(this).attr("href");  
			var div = div_client;
			var div_popup = $(div_popup_client);
			$(this).parents(div).css('height','0px');
			popup(div_popup,textValue);
		
		});

		//opportunities pop up

		$('.view-current-opportunities .more-link').click(function(e){

			e.preventDefault();
			var textValue = $(this).attr("href");  
			var div_popup = $(div_popup_description);
			popup(div_popup,textValue);
			$('#node-49,#node-55').css({'height':'0'});
			
		});


		function popup(div_popup,textValue)
		{	
			console.log(textValue);
			var text_trim = textValue.substr(1);
			console.log(div_popup);
			div_popup.fadeIn();
			div_popup.find("#"+text_trim).parents('.views-row').fadeIn();

			 var target = textValue;
	          var $target = $(target);
	          $('html, body').stop().animate({
	              'scrollTop': $target.offset().top-200
	          }, 400, 'swing', function () {
	              window.location.hash = target;
	          });
		}

		// close function
		$(div_popup_client+' .close-icon,'+div_popup_description+' .close-icon').click(function(e){
			e.preventDefault();
			var textValue = $(this).parents('.views-row a').attr("href")  
			$(div_client+',#node-49,#node-55').css('height','auto');
			$(this).parents(div_popup_client+','+div_popup_description).hide();
			$(this).parents(div_popup_client+','+div_popup_description).find('.views-row').hide();

		});
			
});

})(jQuery);