
  (function($) 
  {
  
    $(function()
    { 

        if (document.location.href.indexOf('submit') > -1)
        {
          $('#block-block-13,#block-block-14').fadeIn();
          $('#block-block-13,#block-block-14').addClass('overlay');  
        }

        var ob = "#block-system-main-menu li.expanded";

        $(ob).bind(
          "mouseenter mouseleave",
          function( event ){
              
              if($(window).width()>1280)
              $(this).find('> ul.menu').slideToggle();
          }
        );

        $(document).mouseup(function (e)
        { 
          var container = $('#block-block-13,#block-block-14');
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

        var t = $("#navigation").offset().top;
        var s =  $(".top-block").offset().top;

        $(document).scroll(function()
        {

          if($(window).width()>767)
          {
            if($(this).scrollTop()-150 > t)
            {   
              $('#navigation').addClass('fix');
          
            }

            else
            { 

              $('#navigation').removeClass('fix');
         
            }
          }

          if($(this).scrollTop()-250 > t)
          {   
          $('#block-views-professional-servcies-block .left').addClass('slide');
        
          }

          else if($(this).scrollTop()-280 < s)
          { 

            $('#block-views-professional-servcies-block .left').removeClass('slide');
       
          }

        });

        /* Front services body toggle*/

        $('#block-views-professional-servcies-block .views-more-link').click(function(e){
          e.preventDefault();
          $('#block-views-professional-servcies-block .body-full').hide();
           $('#block-views-professional-servcies-block .body-trim').not($(this).parent().parent()).show();
          $(this).parent().parent().next().show();
          $(this).parent().parent().hide();

        });

         $('#block-views-professional-servcies-block .views-less-link').click(function(e){
          e.preventDefault();
          $(this).parent().prev().show();
          $(this).parent().hide();
        });

        var divs = $("#block-views-professional-servcies-block .view-content > .views-row");
        for(var i = 0; i < divs.length; i+=3) 
        {
            divs.slice(i, i+3).wrapAll("<div class='box'></div>");
        }

        /* End Front services body toggle*/

         
        if(window.location.hash)
        { 
           var target = window.location.hash;
            console.log('clicked');
            var $target = $(target);

            $('html, body').stop().animate({
              'scrollTop': $target.offset().top-220
            }, 150);
         }  
     

        $('#block-system-main-menu a[href*=#]').on('click',function (e) 
        {       
            var target = this.hash;
            var $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top-220
            }, 400, 'swing', function () {
                window.location.hash = target;
            });
        });
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
