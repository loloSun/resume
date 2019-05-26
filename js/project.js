$(function(){
    $(".desc").on("mouseover",function(){
        $(this).css({"opacity":1})
        // $(".desc h3").animate({
        //     transform: "translateY(30px)"
        // },1000)
    })
    $(".desc").on("mouseout",function(){
        $(this).css({"opacity":0})
    })
})