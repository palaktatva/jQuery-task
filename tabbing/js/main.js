

jQuery(document).ready(function(){ 
  jQuery(" .custom-tab-wrapper .tab-title-wrapper ul li a").click(function(){
    var _link = jQuery(this).attr("data-link");       
    jQuery(this).closest("li").addClass("active");
    jQuery(this).closest("li").siblings().removeClass("active")
    jQuery(this).closest('.custom-tab-wrapper').find('.tab-inner-content[data-tab="'+_link+'"]').addClass('active');
    jQuery(this).closest('.custom-tab-wrapper').find('.tab-inner-content[data-tab="'+_link+'"]').siblings().removeClass("active");


  });
});
