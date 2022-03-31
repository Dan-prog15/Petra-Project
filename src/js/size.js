jQuery(document).ready(function(){
    function classFunction(){
      if(jQuery('body').width()<978){
        rectangle.display = 'block';
        rectangle.left = 0;
        rectangle.right = 0;
      }
      else{
        jQuery('.rectangle977').removeClass('rectangle977').addClass('rectangle');
      }
    }
    
    classFunction();
    jQuery(window).resize(classFunction);
   })