
// Scrollspy js
function scrollspy(){
var header_height = jQuery(".header-site").innerHeight();
var current_pos = jQuery(window).scrollTop();
jQuery("section").each(function(){
  var _section = jQuery(this).attr("data-tab");
  var section_offset = jQuery(this).offset().top - header_height;
  var section_height = jQuery(this).height();


  if(current_pos >= section_offset && current_pos< section_offset + section_height){
    current_link = jQuery(".navbar ul li a[data-link= '"+_section+"']");
    jQuery(this).addClass("active").siblings().removeClass("active");
    current_link.closest("li").addClass("active").siblings().removeClass("active");
  }
});

}

jQuery(document).ready(function(){ 
scrollspy();
  });
jQuery(window).scroll(function(){
scrollspy();
});