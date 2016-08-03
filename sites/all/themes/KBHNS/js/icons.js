(function($) {
    $(function()
    {
         $('#block-views-client-industries-detail-block  .view-content').slick(
            {
              dots: false,
              infinite: false,
              slidesToShow: 3,
              slidesToScroll: 3,
              responsive: [
               {
                  breakpoint: 1020,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
                  }
                }
    
             ]}); 
       
  

       if($(".view-professional-servcies .field-icons").length > -1)
        {
              $(".view-professional-servcies .field-icons").each(function(){
                  var at = $(this).parent('.content').attr('id');
                  var icon =  $(this).text(); 

                  if (icon)
                  {     
                      var title_url = "/sites/all/themes/KBHNS/images/icons/"+icon+".png";
                      var title_url_small="/sites/all/themes/KBHNS/images/icons/"+icon+"-small.png";
                      $("<span class=\"icons\" style=\"background-image:url('/sites/all/themes/KBHNS/images/icons/"+icon+"-small.png')\"></span>").prependTo(('.view-ps-sidebar a[href="#'+at+'"]'));
                      $("<span><img class=\"title-icons\" src='"+title_url+"' alt='' /></span>").appendTo($(this).parent('.content').find(".left"));
                  }
              });
        }

        if($(".view-client-industries-detail .field-icons").length > -1)
        {
          $(".view-client-industries-detail .field-icons").each(function(){
            var at = $(this).parent('.content').attr('id');
            var icon =  $(this).text(); 

            if (icon)
            {   
              var title_url = "/sites/all/themes/KBHNS/images/icons/"+icon+".png";
              var title_url_small="/sites/all/themes/KBHNS/images/icons/"+icon+"-small.png";
              $("<span class=\"icons\" style=\"background-image:url('/sites/all/themes/KBHNS/images/icons/"+icon+"-small.png')\"></span>").prependTo(('.view-client-industries-titles a[href="#'+at+'"]'));
              $("<span><img class=\"title-icons\" src='"+title_url+"' alt='' /></span>").insertBefore($(this).parent('.content').find(".views-field-title span"));
            }


            });
        }
    });
}(jQuery));
