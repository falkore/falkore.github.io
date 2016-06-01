// rwd_index.js


 $(document).ready(function(){
    var win = $(window),
        winWidth = win.width(),
        winSt = win.scrollTop(),
        box = $(".box");
    var winResize = function(){
        var win = $(window),
        winWidth = win.width();
        
        if(winWidth <= 480){
            var mobGnb = function(){
                var gnb = $("#gnb"),
                    gnbMenu = gnb.find("ul");
                gnb.on("click", function(){
                    gnbMenu.toggleClass("click", 500);
                   
               }); 
                
            };
            mobGnb();
        }// <=480
        else if(winWidth > 480 && winWidth <= 768){
         
        }// 481 ~ 768
        else if(winWidth > 768) {
            
        /*---------slide banner----------------*/
            var banner = function(){
            $("#leftBtn").on("click", function(){
                
                var banner_li = $(".slide").children("li"),
                    banner_li_width = banner_li.width();
                
                banner_li.first().stop().animate({marginLeft: banner_li_width}, 1000, function(){
                    banner_li.stop().css({marginLeft: 0}).last().prependTo(".slide");// 메소드 체인
                });
            });// left btn
            $("#rightBtn").on("click", function(){
                
                var banner_li = $(".slide").children("li"),
                    banner_li_width = banner_li.width();
                
                banner_li.first().stop().animate({marginLeft: -banner_li_width}, 1000, function(){
                    banner_li.stop().css({marginLeft: 0}).first().appendTo(".slide");// 메소드 체인
                });
            });// right btn
        /*---------auto banner---------------*/
            var timer;
            
            function startSlide(){
              timer = setInterval('$("#rightBtn").click()', 4000)
            };  // 일정한 시간간격을 두고 움직이는 기능
             startSlide();
            
            function stopSlide(){clearInterval(timer)};// setInterval을 없애는 기능
            
            $(".slide").on({"mouseover": stopSlide, "mouseout": startSlide});
    
            };// banner 
            banner();
        }
        else{
            
        }// 1024 ~
    };// winResize
    winResize();
     
    win.on("resize",function(){
        if(win.width() != winWidth){
            location.reload();
        } 
        winResize();     
    });// 새로고침
     
    /*           gallery box          */     
      var galleryLink = $(".gallery").find("a");
      $("#gallery_box").html("<img>").find("img").width(100 + "%") .attr("src","./img/gallery/gallery_01.png");
      
      galleryLink.on("click", function(e){
        e.preventDefault();
        var $this = $(this),
            imgSrc = $this.find("img").attr("src"),
            galleryBox = $("#gallery_box");
        
        galleryBox.find("img").attr("src", imgSrc);
       
      });
     
    /*      마우스 휠에 따라 움직이기     */    
    $(".box").on("mousemove",function(e){
       var posX = e.pageX,
           posY = e.pageY;
        
       $("#picture_02").css({"right": 100+(posX/20),
                             "bottom": 50+(posY/30)});
       $("#picture_03").css({"right": 50+(posX/30),
                             "bottom": 20+(posY/20)});
       $("#picture_04").css({"right": -40+(posX/10),
                             "bottom": 40+(posY/30)});
       $("#picture_05").css({"right": 230-(posX/20),
                            "bottom": 0+(posY/30)});
       
    });
    /*        One page scroll       */      
    var onePage = function(){
        var gnbA = $("#gnb").find("a"),
            gnbLi = $("#");
        gnbA.on("click", function(e){
            e.preventDefault();
            var aHash = $(this.hash),
                offsetTop = aHash.offset().top,
                bodyBox = $("html, body");
            bodyBox.animate({scrollTop: offsetTop},1000);
        });
    };// one_page_scroll
     onePage();
     var onescroll = function(){
        var gnbA = $(".content_02").find("a"),
            gnbLi = $("#gnb li");
        gnbA.on("click", function(e){
            e.preventDefault();
            var aHash = $(this.hash),
                offsetTop = aHash.offset().top,
                bodyBox = $("html, body");
            bodyBox.animate({scrollTop: offsetTop},1000);
        });
    };// one_page_scroll
     onescroll();
     
    /*        화면 높이에 맞추기         */   
    var ht = win.height();
    box.height(ht);
    win.on("resize", function(){
        var ht = win.height();
        box.height(ht);
    }); 
    /*     메뉴 클릭할 때 메뉴에 ".on" 추가*/
        var gnb_li = $("#gnb li");
         
        gnb_li.eq(0).on("click", function(){
            gnb_li.removeClass();
            gnb_li.eq(0).addClass("on");
        });
        gnb_li.eq(1).on("click", function(){
            gnb_li.removeClass();
            gnb_li.eq(1).addClass("on");
        });
        gnb_li.eq(2).on("click", function(){
            gnb_li.removeClass();
            gnb_li.eq(2).addClass("on");
        });
        gnb_li.eq(3).on("click", function(){
            gnb_li.removeClass();
            gnb_li.eq(3).addClass("on");
        });
            
    /*     스크롤 시 해당영역 메뉴에 ".on" 추가*/    
        win.on("scroll", function(){
            var win = $(window),
                winSt = win.scrollTop(),
                line_01 = $("#line_01"),
                line_02 = $("#line_02"),
                line_03 = $("#line_03"),
                line_04 = $("#line_04"),
                line_01Ot = line_01.offset().top,
                line_02Ot = line_02.offset().top,
                line_03Ot = line_03.offset().top,
                line_04Ot = line_04.offset().top,
                gnb_li = $("#gnb li");
            
            if(winSt >= line_01Ot-1 && winSt < line_02Ot-1){
                gnb_li.removeClass();
                gnb_li.eq(0).addClass("on");    
            }
            if(winSt >= line_02Ot-1 && winSt < line_03Ot-1){
                gnb_li.removeClass();
                gnb_li.eq(1).addClass("on"); 
            }
            if(winSt >= line_03Ot-1 && winSt < line_04Ot-1){
                gnb_li.removeClass();
                gnb_li.eq(2).addClass("on");                
            }
            if(winSt >= line_04Ot-1){
                gnb_li.removeClass();
                gnb_li.eq(3).addClass("on");    
            }    
            else{}
        });
    /*     팝업 박스    */ 
        $(".close_btn").on("click", function(){
                $("#pop_up").fadeOut();
            });
        $("body").on("click", function(){
                $("#pop_up").fadeOut(); 
            });
 });// jquery

