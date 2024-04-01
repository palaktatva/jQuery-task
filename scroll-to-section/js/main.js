
// Scrollspy js


jQuery(document).ready(function(){ 
   jQuery(".header-site .header-wrapper .navbar ul li a").click(function(){
    var header_height = jQuery(".header-site").innerHeight();
    var _link = jQuery(this).attr("data-link");
    var target = jQuery("body").find("section[data-tab= '"+_link+"']");
    jQuery("html , body").stop( ).animate({
        scrollTop : target.offset().top - header_height
    });

   });

  });
