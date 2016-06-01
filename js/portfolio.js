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
            
            port_h5.removeClass("plusOn");
            port_h5.on("click", function(){
                $(this).stop().toggleClass("plusOn",500)
                       .siblings().removeClass("plusOn",1000);
                $(this).next("div").toggleClass("slide", 500).siblings().removeClass("slide", 1000);
            });
        }// pc
        
});