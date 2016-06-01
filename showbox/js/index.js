$(document).ready(function(){
   var win = $(window),
       body = $("body");
   var screen = function(){
       var viewH = win.width();
       if(viewH <= 480){
           body.css({"background-image": "url(./img/index/contents/conBack_01.png)"});
       }
       else if(viewH > 481 && viewH <= 768){
           body.css({"background-image": "url(./img/index/contents/conBack_02.png)"});
       }
       else if(viewH > 767 && viewH <= 960){
           body.css({"background-image": "url(./img/index/contents/conBack_03.png)"});
       }
       else{
           body.css({"background-image": "url(./img/index/contents/conBack_04.png)"});
       }
   };// screen
   screen();
   win.on("resize", function(){
       screen();
   });// resize
   
});// jQuery
 