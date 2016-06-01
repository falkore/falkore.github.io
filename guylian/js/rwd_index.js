// rwd_index.js

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
        }
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
    
/*---------slide banner----------------*/

var banner = function(){
 $(".button_01").on("click", function(){
     
     var banner_li = $("#slideBanner").children("li"),
         banner_li_width = banner_li.width();
     
     banner_li.first().stop().animate({marginLeft: banner_li_width}, 1000, function(){
         banner_li.stop().css({marginLeft: 0}).last().prependTo("#slideBanner");// 메소드 체인
     });
 });// left btn
 $(".button_02").on("click", function(){
     
     var banner_li = $("#slideBanner").children("li"),
         banner_li_width = banner_li.width();
     
     banner_li.first().stop().animate({marginLeft: -banner_li_width}, 1000, function(){
         banner_li.stop().css({marginLeft: 0}).first().appendTo("#slideBanner");// 메소드 체인
     });
 });// right btn
    
/*---------auto banner---------------*/
    
    var timer;
    
    function startSlide(){
      timer = setInterval('$(".button_02").click()', 3500)
    };  // 일정한 시간간격을 두고 움직이는 기능
     startSlide();
    
    function stopSlide(){clearInterval(timer)};// setInterval을 없애는 기능
    
    $("#slideBanner").on({"mouseover": stopSlide, "mouseout": startSlide});
    
};// banner             
  banner();
/*     팝업 박스    */ 
        $(".close_btn").on("click", function(){
                $("#pop_up").fadeOut();
            });
        $("body").on("click", function(){
                $("#pop_up").fadeOut(); 
            });
});// jQuery