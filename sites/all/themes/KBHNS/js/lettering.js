(function($){
  $(function(){
  	if ($("body").hasClass("front")) {
      var strings1 = [];
      var strings2 = [];
      if ($("html").attr("lang") == "en") {
        strings1 = [
          "Welcome to KBHNS<br />We provide valuable services to our clients and partner with them in achieving their"
        ];
        strings2 = [
          "short term goals",
          "long term goals",
          "short and long term goals",
        ];
      } else {
        
      }
      // $(".view-header-image .views-row-first .views-field-body .typed_step_2").html(strings2[0]).hide();
      // var $typedContainer1 = $(".view-header-image .views-row-first .views-field-body .typed_step_1");
      // $typedContainer1.typed({
      //   strings: strings1,
      //   typeSpeed: 0,
      //   showCursor: false,
      //   callback: function(){
          $(".view-header-image .views-row-first .views-field-body .typed_step_2").text("").typed({
            strings: strings2,
            typeSpeed: 5,
            showCursor: false,
            startDelay: 1000,
            backDelay: 2000,
          });
      //   },
      // });
    }
  });
})(jQuery);
