$(function () {
    $(".span_").mouseover(function () {
        var index = $(this).index();
        $(this).css({
            color:"#fff"
        }).addClass('active').siblings().removeClass('active');
        $(".box>div").eq(index).show().siblings().hide();
    $(".span_").mouseout(function () {
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



(function () {
    $(function () {
        $(".app").mouseenter(function () {
            $(".app2").css({
                display: "block"
            })
        })
        $(".app").mouseleave(function () {
            $(".app2").css({
                display: "none"
            })
        })
    })
}());