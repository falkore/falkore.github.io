$(document).ready(function(){
    
    var winResize = function(){
        
        var win = $(window),
            winWidth = win.width();
        
        if(winWidth <= 480){
            var nav = $("#nav"),
            nav_h3 = nav.find("h3"),
            h3 = $("h3"),
            nav_ul = nav.find("ul");
        
            nav_h3.on("click", function(){
               h3.stop().toggleClass("on");
               nav_ul.stop().slideDown(500).toggleClass("pop",500);
            });
            
        }// mobile
        else if(winWidth > 480 && winWidth <= 768){
            $(window).on("scroll", function(){
                var winSt = $(window).scrollTop(),
                    navOt = $(".top").offset().top;
                
                if(winSt >= navOt){
                   $("#nav ul").addClass("fix"); 
                }
                else{
                   $("#nav ul").removeClass("fix", 500); 
                   $("#nav ul").addClass("main", 500); 
                }
            });
        }// tablet
        else{
            
        }// pc
    };// winResize
    winResize();
    
    $(window).on("resize", function(){
       var win = $(window),
           winWidth = win.width();
       if($(window).width != winWidth){
           location.reload();
       }
       winResize();
    });

});// jQuery