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
/* 返回顶部 */
;(function(){
    $(function(){
        $(window).scroll(function() {
            // 获取滚动距离
            var oT = $(document).scrollTop();
            if (oT > 0) {
                $(".prism_to_top").fadeIn();
            } else {
                $(".prism_to_top").fadeOut();
            }
        });
        $(".prism_to_top").click(function() {
            $("html,body").animate({
                scrollTop: 0
            }, 500);
        });
    })
}())