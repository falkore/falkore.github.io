$(document).ready(function(){
    
   var menu_box = $("#menu_box"),
       menuMenu = menu_box.children("ul"),
       nav = $("#nav"),
       navMenu = nav.find("li"),
       timing = 500;
    
    var menuSlide = function(){
        nav.on("mouseenter", function(){
          menu_box.stop().slideDown(500, function(){
           
          });
        });//  nav"mouseenter"
        menu_box.on("mouseenter", function(){
          menu_box.stop().slideDown(500, function(){
           
          });
        });//  menuBox"mouseenter"
   
        menu_box.on("mouseleave", function(){
          menu_box.stop().slideUp(500, function(){
           
          });
        });//  menuMenu"mouseleave"
    };// menuSlide
     menuSlide(); 
    
     navMenu.eq(0).on("click", function(){
         navMenu.eq(0).addClass("on");
         navMenu.removeClass();
     });
     navMenu.eq(1).on("click", function(){
         navMenu.removeClass();
         navMenu.eq(1).addClass("on");
     });
     navMenu.eq(2).on("click", function(){
         navMenu.removeClass();
         navMenu.eq(2).addClass("on");
     });
     navMenu.eq(3).on("click", function(){
         navMenu.removeClass();
         navMenu.eq(3).addClass("on");
    });
    
    /*     팝업 박스    */ 
        $(".close_btn").on("click", function(){
                $("#pop_up").fadeOut();
            });
        $("body").on("click", function(){
                $("#pop_up").fadeOut(); 
            });
});// jQuery
 