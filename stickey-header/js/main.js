
// stickey-header js

function sticky_header(){
  var header_length = jQuery(".header-site").innerHeight();
 
  if(jQuery(window).scrollTop() > header_length){
jQuery("body").addClass("sticky_hrader");
  }
  else{
    jQuery("body").removeClass("sticky_hrader");
  }
}

jQuery(document).ready(function(){ 
sticky_header();
  });
jQuery(window).scroll(function(){
sticky_header();
});