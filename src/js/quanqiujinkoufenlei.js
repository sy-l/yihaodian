//滑动导航
;
$(function () {
    $(window).scroll(function () {
        var os = $(document).scrollTop();
        if (os > 400) {
            $(".search").css({
                display: 'block',
                position: 'fixed',
                top: 0
            });
            // $(".search2").css({
            //     marginTop: 62
            // })
        } else {
            $(".search").css({
                display: 'none'
            });
            // $(".search").css({
            //     marginTop: 20
            // })
        }
    })
});
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
/* 品牌的显示消失 */
;
(function () {
    $(function () {
        $(".cmtR-brand2 ul li").mouseenter(function () {
            $(this).find("a img").css({
                display: "none"
            })
            $(this).find("a p").css({
                display: "block"
            })
            $(this).find("div").css({
                display: "block"
            })
        })
        $(".cmtR-brand2 ul li").mouseleave(function () {
            $(this).find("a img").css({
                display: "block"
            })
            $(this).find("a p").css({
                display: "none"
            })
            $(this).find("div").css({
                display: "none"
            })
        })
    })
}())
/* 懒加载 */
$(function() {
    $("img").lazyload();
});