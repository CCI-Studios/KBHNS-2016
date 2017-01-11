(function($) {
  $(function() {

    //adding underscore to the href value
    $('.view-team-list #Partners .views-row,.view-team-list #Associe .views-row, .view-client-industries-detail .views-row,.view-current-opportunities .views-row').each(function(index) {
      var textValue = $(this).find('a').attr("href");
      textValue = textValue.replace(/,/g, "");
      textValue = textValue.split(' ').join('_');
      $(this).find('a').attr("href", textValue);
    });

    $('.view-team .views-row').each(function(index) {

      var textValue = $(this).find('.pos_link').attr("id");
      textValue = textValue.split(' ').join('_');
      $(this).find('.pos_link').attr("id", textValue);
    });


    $('.view-team-list #Partners .views-row a, .view-team-list #Associe .views-row a,  .view-team-list .views-row a.view-profile, .view-team-list .views-row a.image-link').click(function(e) {

      $('.view-team-list').hide();
      $('.view-team').show();
      $('.view-team .team-container').hide();
      var rowNum = $(this).closest(".views-row").index() - 1;
      var sectionNum = $(this).closest(".container").index();

      $('.view-team .team-container:eq(' + sectionNum + ')').show();
      $('.view-team .team-container:eq(' + sectionNum + ') .views-row:eq(' + rowNum + ')').fadeIn();

      var $target = $('.view-team .team-container:eq(' + sectionNum + ') .views-row:eq(' + rowNum + ')');
      var headerOffset = 220;
      if ($(window).width() < 767) {
        headerOffset = 180;
      }
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - headerOffset
      }, 400, 'swing');

      e.preventDefault();
    });

    $('.view-team .close-icon').click(function(e) {
      var textValue = $(this).closest('.views-row a').attr("href");
      $('.view-team-list').fadeIn();
      $('.view-team-list').find(textValue).closest('.container').hide();
      $(this).parents('.view-team').hide();
      $(this).parents('.view-team').find('.views-row').hide();
      e.preventDefault();
    });

  });
})(jQuery);