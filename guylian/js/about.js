// about.js

$(document).ready(function(){
    
    var winResize = function(){
        
        var win = $(window),
            winWidth = win.width();
        
        if(winWidth <= 480){
             var mobGnb = function(){
                var gnb = $("#gnb"),
                    gnbH2 = gnb.find("h2"),
                    gnbForm = gnb.find("form"),
                    navUl = $("#nav ul");
                gnbH2.on("click", function(){ 
                    navUl.removeClass("on");
                    gnbForm.toggleClass("on"); 
               });
            }; 
            mobGnb();
            
            var mobNav = function(){
                var nav = $("#nav"),
                    gnb = $("#gnb"),
                    gnbForm = gnb.find("form"),
                    navH2 = nav.find("h2"),
                    navUl = nav.find("ul");
                navH2.on("click", function(){
                    gnbForm.removeClass("on");
                    navUl.toggleClass("on"); 
               });
            }; 
            mobNav();
            
            $(window).on("scroll", function(){
                var win    = $(window),
                    winSt  = win.scrollTop(),
                    art01  = $("#article_01"),
                    img01Ot= $("#image_01").offset().top,
                    art02  = $("#article_02"),
                    img02Ot= $("#image_02").offset().top,
                    missionOt = $("#mission").offset().top, 
                    newsOt = $("#news").offset().top;
                
                if(winSt >= img01Ot && winSt < missionOt){
                   art01.height("50vw"); 
                }
                else{
                }
                if(winSt >= img02Ot && winSt < newsOt){
                   art02.height("50vw"); 
                }
                else{}
            });
        }
        else if(winWidth > 480 && winWidth <= 768){
            $(window).on("scroll", function(){
                var winSt = $(window).scrollTop(),
                    navOt = $(".top").offset().top,
                    navUl = $("#nav ul");
                
                if(winSt >= navOt){
                   navUl.addClass("fix"); 
                }
                else{
                   navUl.removeClass("fix", 500); 
                   navUl.addClass("main", 500); 
                }
            });
            
        }
        else{
        /*----------------  top button  -------------------*/
           $(window).on("scroll", function(){
                var win = $(window),
                    winSt = win.scrollTop(),
                    winHt = win.height(),
                    footOt = $("#webFoot").offset().top,
                    top = $("#top"),
                    topOt = $("#top").offset().top,
                    subTitleOt = $("#subTitle").offset().top,
                    newsOt = $("#news_03").offset().top;
               
                top.hide();
                if(winSt >= subTitleOt && winSt < newsOt){
                    top.show();
                    top.addClass("top_button",500);
                    top.removeClass("top_fix",500);
                }
                else if(winSt >= newsOt){
                    top.show();
                    top.removeClass("top_button");
                    top.addClass("top_fix");
                }
                else{
                    top.removeClass("top_fix",500);
                    top.removeClass("top_button",500);
                }
            }); 
        }
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
/*     팝업 박스    */ 
        $(".close_btn").on("click", function(){
                $("#pop_up").fadeOut();
            });
        $("body").on("click", function(){
                $("#pop_up").fadeOut(); 
            });    
});// jQuery