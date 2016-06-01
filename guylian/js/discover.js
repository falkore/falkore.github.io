// discover.js

$(document).ready(function(){
    var win = $(window),
        winWidth = win.width();
    
    var winResize = function(){
        
        var win = $(window),
            winWidth = win.width();
        
        if(winWidth <= 480){
             var mobGnb = function(){
                var gnb = $("#gnb"),
                    gnbH2 = gnb.find("h2"),
                    gnbForm = gnb.find("form");
                gnbH2.on("click", function(){ 
                    $("#nav ul").removeClass("on");
                    gnbForm.toggleClass("on"); 
               });
            }; 
            mobGnb();
            
            var mobNav = function(){
                var nav = $("#nav"),
                    navH2 = nav.find("h2"),
                    navUl = nav.find("ul");
                navH2.on("click", function(){
                    $("#gnb form").removeClass("on");
                    navUl.toggleClass("on"); 
               });
            }; 
            mobNav();
            
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
        }
        else{
            
        }
    };// winResize
    winResize();
    
    $(window).on("resize", function(){
       if($(window).width != winWidth){
           location.reload();
       }
       winResize();
    });
 /*     팝업 박스    */ 
        $(".close_btn").on("click", function(){
                $("#pop_up").fadeOut();
            });
        $("body").on("click", function(){
                $("#pop_up").fadeOut(); 
            });   
});// jQuery