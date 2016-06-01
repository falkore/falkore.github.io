// product.js

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
            
            var box01Height = $("#box_01").height();
            
            $("#product").height(box01Height);
            
            var tabsMenu = function(){
               var lnb_li = $("#lnb_01 li");
                
               lnb_li.on("click", function(){
                  $(this).addClass("on").siblings().removeClass("on"); 
                });
            };
            tabsMenu();
            
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
            
            var box01Height = $("#box_01").height();
            
            $("#product").height(box01Height);
            
            var tabsMenu = function(){
               var lnb_li = $("#lnb_01 li");
                
               lnb_li.on("click", function(){
                  $(this).addClass("on").siblings().removeClass("on"); 
                });
            };
            tabsMenu();
        }
        else{
            
            var tabsMenu = function(){
               var lnb_li = $("#lnb_01 li");
                
               lnb_li.on("click", function(){
                  $(this).addClass("on").siblings().removeClass("on"); 
                });
            };
            tabsMenu();
        }
    };// winResize
    winResize();
    
    $(window).on("resize", function(){
       if($(window).width != winWidth){
           location.reload();
       }
       winResize();
    });
    var tabsBox = function(){
        var lnb_li = $("#lnb_01 li"),
            box_01 = $('#box_01'),
            box_02 = $('#box_02'),
            box_03 = $('#box_03'),
            box_04 = $('#box_04'),
            tabBoxWidth = $(".tab_lnb").width(),
            product =  $("#product"),
            index = $(this).index();
        
       product.height(box_01.height());
        
       lnb_li.eq(0).on("click", function(e){
           e.preventDefault();
           box_01.addClass("click").siblings().removeClass("click");
           product.height(box_01.height());
       });
       
       lnb_li.eq(1).on("click", function(e){
           e.preventDefault();
           box_02.addClass("click").siblings().removeClass("click");
           product.height(box_02.height());
       }); 
       
       lnb_li.eq(2).on("click", function(e){
           e.preventDefault();
           box_03.addClass("click").siblings().removeClass("click");
           product.height(box_03.height());
       });
       
       lnb_li.eq(3).on("click", function(e){
           e.preventDefault();
           box_04.addClass("click").siblings().removeClass("click");
           product.height(box_04.height());
       });
    };
    tabsBox();
/*     팝업 박스    */ 
        $(".close_btn").on("click", function(){
                $("#pop_up").fadeOut();
            });
        $("body").on("click", function(){
                $("#pop_up").fadeOut(); 
            });    
});// jQuery