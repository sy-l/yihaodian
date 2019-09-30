$(function () {
    $("span").mouseover(function () {
        var index = $(this).index();
        $(this).css({
            color:"#fff"
        }).addClass('active').siblings().removeClass('active');
        $(".box>div").eq(index).show().siblings().hide();
    $("span").mouseout(function () {
        var index = $(this).index();
        $(this).css({
            color:"#000"
        }).addClass('active').siblings().removeClass('active');
        $(".box>div").eq(index).show().siblings().hide();
    });
    });
    
})


$(function() {
    $("img").lazyload();
});