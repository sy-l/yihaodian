//购物车下拉框
$(function () {
    $('.move1').click(function () {
        $('.search-none').fadeIn();
    })
    $('.move1').blur(function (event) {
        $('.search-none').fadeOut();
        event.stopPropagation();
    });
});
$(function () {
    $('.all,.list').mouseenter(function () {
        $('.list').css({
            display: 'block'
        })
    })
    $('.all,.list').mouseleave(function () {
        $('.list').css({
            display: 'none'
        })
    });
})
/* 懒加载 */
$(function () {
    $("img").lazyload();
});
/* app */
;
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
}())
/* 商品效果 */
;
(function () {
    $(function () {
        $(".com-a2").mouseenter(function () {
            $(this).find(".com-img").stop().animate({
                filter: "alpha(opacity = 50)",
                MozOpacity: 0.5,
                KhtmlOpacity: 0.5,
                opacity: 0.5
            })
            $(this).find(".com2-1").css({
                color:"red"
            })
        })
        $(".com-a2").mouseleave(function () {
            $(this).find(".com-img").stop().animate({
                filter: "alpha(opacity = 100)",
                MozOpacity: 1,
                KhtmlOpacity: 1,
                opacity: 1
            })
            $(this).find(".com2-1").css({
                color:"#000"
            })
        })
    })
}())