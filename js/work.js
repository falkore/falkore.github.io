$(document).ready(function(){
    
    var win = $(window),
        winWidth = win.width();
    
    if(winWidth <= 480){
            var portfolio = $("#portfolio"),
                port_h5 = portfolio.find("h5");
            portfolio.accordion({
                 collapsible: true
            });
    
            port_h5.on("click", function(){
                $(this).stop().toggleClass("plusOn", 500)
                       .siblings().removeClass("plusOn"); 
            });
                    
        }// mobile
        else if(winWidth > 480 && winWidth <= 768){
            var portfolio = $("#portfolio"),
                port_h5 = portfolio.find("h5");
            portfolio.accordion({
                 collapsible: true
            });
    
            port_h5.on("click", function(){
                $(this).stop().toggleClass("plusOn")
                    .siblings().removeClass("plusOn");
            
            });
        }// tablet
        else{
            var portfolio = $("#portfolio"),
                port_h5 = portfolio.find("h5");
            port_h5.on("click", function(){
                $(this).stop().toggleClass("plusOn",500)
                       .siblings().removeClass("plusOn",1000);
                $(this).next("div").toggleClass("slide", 500).siblings().removeClass("slide", 1000);
            });
            /*-------------#work_05 popup------------*/
            var codePopup = function(){
              var smallImg_list = $(".small_img li"),
                  bigImg_list = $(".big_img li");
                
              smallImg_list.eq(0).on("click", function(){
                  bigImg_list.eq(0).stop().toggleClass("on")
                                  .siblings().removeClass("on",1000);
              });  
              smallImg_list.eq(1).on("click", function(){
                  bigImg_list.eq(1).stop().toggleClass("on")
                                  .siblings().removeClass("on",1000);
              });  
              smallImg_list.eq(2).on("click", function(){
                  bigImg_list.eq(2).stop().toggleClass("on")
                                  .siblings().removeClass("on",1000);
              });  
            }; 
            codePopup();
             /*     스크롤 시 해당영역 메뉴에 ".on" 추가*/    
            var win = $(window);
            win.on("scroll", function(){
               var win = $(window),
                   winSt = win.scrollTop(),
                   work_01 = $("#work_01"),
                   work_02 = $("#work_02"),
                   work_03 = $("#work_03"),
                   work_04 = $("#work_04"),
                   work_05 = $("#work_05"),
                   work_01Ot = work_01.offset().top,
                   work_02Ot = work_02.offset().top,
                   work_03Ot = work_03.offset().top,
                   work_04Ot = work_04.offset().top,
                   work_05Ot = work_05.offset().top,
                   list = $(".list"),
                   list_01 = $(".list_01"),
                   list_02 = $(".list_02"),
                   list_03 = $(".list_03"),
                   list_04 = $(".list_04"),
                   list_05 = $(".list_05"),
                   list_06 = $(".list_06");
               
               if(winSt >= work_01Ot-1 && winSt < work_02Ot-1){
                   list_01.addClass("on")
                          .siblings().removeClass("on");    
               }
               if(winSt >= work_02Ot-1 && winSt < work_03Ot-1){
                   list_02.addClass("on")
                          .siblings().removeClass("on"); 
               }
               if(winSt >= work_03Ot-1 && winSt < work_04Ot-1){
                   list_03.addClass("on")
                          .siblings().removeClass("on");                
               }
               if(winSt >= work_04Ot-1 && winSt < work_05Ot-1){
                   list_04.addClass("on")
                          .siblings().removeClass("on");    
               }   
               if(winSt >= work_05Ot-1){
                   list_05.addClass("on")
                          .siblings().removeClass("on");    
               }    
               else{}
           });
            /*        One page scroll       */      
            var onePage = function(){
            var lnbA = $("#lnb").find("a");
            lnbA.on("click", function(e){
                e.preventDefault();
                var aHash = $(this.hash),
                    offsetTop = aHash.offset().top,
                    bodyBox = $("html, body");
                bodyBox.animate({scrollTop: offsetTop},1000);
            });
            };// one_page_scroll
            onePage();    
            /*----------------  lnb  -------------------*/
            $("#lnb").hide();
            win.on("scroll", function(){
                var win = $(window),
                    winSt = win.scrollTop(),
                    winHt = win.height(),
                    footOt = $("#web_foot").offset().top,
                    lnb = $("#lnb"),
                    lnbOt = $("#lnb").offset().top,
                    contentOt = $("#content").offset().top;
               
                if(winSt >= contentOt && winSt < footOt){
                    lnb.show();
                }
                else if(winSt >= footOt){
                    lnb.hide();
                }
                else{
                    lnb.hide();
                }
            }); 
        }// pc
        
});