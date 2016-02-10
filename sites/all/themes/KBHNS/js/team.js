(function($){

$(function(){

$('.view-team-list .views-row').each(function(index){

		var textValue = $(this).find('a').attr("href");    
        textValue =textValue.split(' ').join('_');
        $(this).find('a').attr("href",textValue);    
});

$('.view-team .views-row').each(function(index){

		var textValue = $(this).find('.pos_link').attr("id");    
        textValue =textValue.split(' ').join('_');
        $(this).find('.pos_link').attr("id",textValue);    
});
	

	$('.view-team-list .views-row a').click(function(e){

		var textValue = $(this).attr("href");    
		$(this).parents('.view-team-list').hide();
		$('.view-team').fadeIn();
		$('.view-team').find(textValue).parents('.team-container, .views-row').fadeIn();
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
	
});

})(jQuery);