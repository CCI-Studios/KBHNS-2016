  /* Thank you message pop up */

  (function($) 
  {
  
    $(function()
    { 

        if (document.location.href.indexOf('submit') > -1)
        {
          $('#block-block-13').fadeIn();
          $('#block-block-13').addClass('overlay');  
        }

        $(document).mouseup(function (e)
        { 
          var container =$('#block-block-13');
          if (!container.is(e.target)
                  && container.has(e.target).length === 0) 
              {
                  container.fadeOut();
              }
        });

        $('html.lt-ie10 [placeholder]').focus(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
          }
        }).blur(function() {
          var input = $(this);
          if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.css('padding-bottom','15px');
            input.val(input.attr('placeholder'));
          }
        }).blur();
      });


    /* PLaceholder */

  $('html.lt-ie10 [placeholder]').parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    })
  });


})(jQuery);