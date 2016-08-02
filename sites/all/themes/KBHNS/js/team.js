(function($){

$(function(){

	//adding underscore to the href value
		$('.view-team-list #Partners .views-row,.view-team-list #Associe .views-row, .view-client-industries-detail .views-row,.view-current-opportunities .views-row').each(function(index){

				var textValue = $(this).find('a').attr("href");  
				textValue=textValue.replace(/,/g, "");     
		        textValue =textValue.split(' ').join('_');
		        $(this).find('a').attr("href",textValue);    
		});

		$('.view-team .views-row').each(function(index){

				var textValue = $(this).find('.pos_link').attr("id");    
		        textValue =textValue.split(' ').join('_');
		        $(this).find('.pos_link').attr("id",textValue);    
		});
			

		$('.view-team-list #Partners .views-row a, .view-team-list #Associe .views-row a').click(function(e){

			var textValue = $(this).attr("href");    
			$(this).parents('.view-team-list').hide();
			$('.view-team').fadeIn();		
			$('.view-team').find(textValue).parents('.team-container, .views-row').fadeIn();

			if($(window).width()<767)
			{
			  var target = textValue;
	          var $target = $(target);
	          $('html, body').stop().animate({
	              'scrollTop': $target.offset().top-100
	          }, 400, 'swing', function () {
	              window.location.hash = target;
	          });
			}
			
			e.preventDefault();

		});

		$('.view-team .close-icon').click(function(e){

			var textValue = $(this).parents('.views-row a').attr("href")  
			$('.view-team-list').fadeIn();
			$('.view-team-list').find(textValue).parents('.container').hide();
			$(this).parents('.view-team').hide();
			$(this).parents('.view-team').find('.views-row').hide();
			e.preventDefault();
		});

		$('.view-more').click(function(e){

			e.preventDefault();
			$(this).toggleClass('open');
			$(this).parents('.views-row').find('.body').slideToggle('slow');

		});
			
});

})(jQuery);