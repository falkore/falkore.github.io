$(document).ready(function(){
    if($(window).width() >= 481){
        var icon = $(".icon");
        
        icon.on("mouseenter", function(){
            $(this).find("i").stop().animate({'color': '#40aaef'}, 400);
        });
        icon.on("mouseleave", function(){
            $(this).find("i").stop().animate({'color': '#FF7777'}, 400);
        });
    }
});// jQuery