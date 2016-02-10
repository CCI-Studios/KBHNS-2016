(function($) {
	

	$(function()
	{	

        $('.view-team-list .view-content h3').each(function() {
                 $(this).nextUntil('h3').andSelf().wrapAll('<div class="container"></div>');
         });

        $('.view-team .view-content h3').each(function() {
                 $(this).nextUntil('h3').andSelf().wrapAll('<div class="team-container"></div>');
         });

        $('#block-system-main-menu li.expanded a').click(function(){

            var path = window.location.pathname;
            var hash =$(this).prop("hash");
            window.location.href=path+'/'+ hash;

        });


     $(".view-ps-sidebar .item-list li a, .view-client-industries-titles .item-list a, .view-profession-type .item-list a").each(function (index) {
        $(this).attr("href", "#spec" + index.toString());    
        var textValue = $(this).text();
        console.log(textValue);
        textValue =textValue.split(' ').join('_');
        $(this).addClass(textValue);   
        $(this).parent().addClass('va-slice');

        });

      $('.view-profession-type .item-list a').each(function (index) {

        var textValue = $(this).text();
        console.log(textValue);
        textValue =textValue.split(' ').join('_');
        $(this).attr("href", '#'+textValue);    
        $(this).parent().addClass('va-slice');

        });

     $(".view-about-page-titles .item-list  a").each(function (index) {
        $(this).attr("href", "#spec" + index.toString());    
       
        $(this).parent().addClass('va-slice');

        });


        $("#block-views-client-industries-detail-block .view-content .content, .view-about-page-sections .views-row").each(function (index) {
            console.log(index);
            $(this).attr("id", "spec" + index.toString());
            var textValue = $(this).find('.views-field-title').text();
            console.log(textValue);
            textValue =textValue.split(' ').join('_');
            $(this).addClass(textValue);  
        })


          $(".view-team-list .view-content .container").each(function (index) {
            console.log(index);

            var textValue = $(this).find('h3').text();
            textValue =textValue.split(' ').join('_');
            $(this).attr("id", textValue);
            var textValue = $(this).find('.views-field-title').text();
            textValue =textValue.split(' ').join('_');
            $(this).addClass(textValue);  
        })

        $(".view-client-industries-titles .item-list ul, .view-about-page-titles .item-list ul,.view-profession-type .item-list ul").tabs();
        $('.view-ps-sidebar .item-list ul, .view-client-industries-titles .item-list ul, .view-about-page-titles .item-list ul, .view-profession-type .item-list ul').each(function(){
       
        var $active, $content, $links = $(this).find('a');

      
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);

        $links.not($active).each(function () {  
        $(this.hash).hide();
        });

        $(this).on('click', 'a', function(e){
        $active.removeClass('active');
        $content.hide();
        $('.view-team').hide();
        $('.view-team .team-container, .view-team .views-row').hide();
        $('.view-team-list').fadeIn('slow');

        $active = $(this);
        $content = $(this.hash);

        $active.addClass('active');
        $content.fadeIn('slow');

        e.preventDefault();
    });
  });
		
	});
}(jQuery));
