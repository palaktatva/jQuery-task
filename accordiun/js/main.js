

jQuery(document).ready(function(){ 
  jQuery(" .accordin-title").click(function(){
   jQuery(this).closest(".accordin-wrapper").find(".accordin-content").stop(true , true).slideToggle("slow");
   jQuery(this).closest(".accordin-wrapper").siblings().find(".accordin-content").stop(true , true).slideUp("slow");
   jQuery(this).closest(".accordin-wrapper").find(".accordin-items").toggleClass("active");
   jQuery(this).closest(".accordin-wrapper").siblings().find(".accordin-items").removeClass("active")
  });
});
