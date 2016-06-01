// connect.js


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
                    navUl = nav.find("ul"),
                    gnbForm = $("#gnb form");
                navH2.on("click", function(){
                    gnbForm.removeClass("on");
                    navUl.toggleClass("on"); 
               });
            }; 
            mobNav();
        }// 480 mobile
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
            
        }// 768 tablet
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
                    contentOt = $("#content_02").offset().top;
               
                top.hide();
                if(winSt >= subTitleOt && winSt < contentOt){
                    top.show();
                    top.addClass("top_button",500);
                    top.removeClass("top_fix",500);
                }
                else if(winSt >= contentOt){
                    top.show();
                    top.removeClass("top_button");
                    top.addClass("top_fix");
                }
                else{
                    top.removeClass("top_fix",500);
                    top.removeClass("top_button",500);
                }
            }); 
            
        }// pc
    };// winResize
    winResize();
    
    $(window).on("resize", function(){
       if($(window).width != winWidth){
           location.reload();
       }
       winResize();
    });
    
     $( "#contact" ).accordion({
                 collapsible: true
     });
     var con_h5 = $("#contact h5"); 
            /*for(var i=0; i<=5; i++){
               var con_h5 = $("#contact h5"); 
               con_h5.removeClass();
               con_h5.eq(i).addClass("on");
            }*/
            con_h5.eq(0).on("click", function(){
                con_h5.removeClass();
                con_h5.eq(0).addClass("on");
            });
            con_h5.eq(1).on("click", function(){
                con_h5.removeClass();
                con_h5.eq(1).addClass("on");
            });
            con_h5.eq(2).on("click", function(){
                con_h5.removeClass();
                con_h5.eq(2).addClass("on");
            });
            con_h5.eq(3).on("click", function(){
                con_h5.removeClass();
                con_h5.eq(3).addClass("on");
            });
            con_h5.eq(4).on("click", function(){
                con_h5.removeClass();
                con_h5.eq(4).addClass("on");
            });
            con_h5.eq(5).on("click", function(){
                con_h5.removeClass();
                con_h5.eq(5).addClass("on");
            });
/*     팝업 박스    */ 
        $(".close_btn").on("click", function(){
                $("#pop_up").fadeOut();
            });
        $("body").on("click", function(){
                $("#pop_up").fadeOut(); 
            });  
});


