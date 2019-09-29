//滑动导航
;
$(function() {
    $(window).scroll(function() {
        var os = $(document).scrollTop();
        if (os > $(".big-img").offset().top) {
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
$(function() {
    $('.move1').click(function() {
        $('.search-none').fadeIn();
    })
    $('.move1').blur(function(event) {
        $('.search-none').fadeOut();
        event.stopPropagation();
    });
});
$(function() {
    $('.all,.list').mouseenter(function() {
        $('.list').css({
            display: 'block'
        })
    })
    $('.all,.list').mouseleave(function() {
        $('.list').css({
            display: 'none'
        })
    });
})

//轮播
;
(function() {
    var mySwiper = new Swiper('.swiper-container', {
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: true,

    })
}())

// 轮播结束

//二维码
$(function() {
    $(window).scroll(function() {
        var os = $(document).scrollTop();
        if (os > $(".big-img").offset().top) {
            $(".two-dimensional").css({
                position: 'fixed',
                top: 149,
                left: 1487
            });

        } else {
            $(".two-dimensional").css({
                position: 'absolute',
                top: -20,
                left: 1052
            });

        }
    })
});
//返回顶部
$(function() {
        $(window).scroll(function() {
            // 获取滚动距离
            var oT = $(document).scrollTop();
            if (oT > 1200) {
                $(".back").fadeIn();
            } else {
                $(".back").fadeOut();
            }
        });
        $(".back").click(function() {
            $("html,body").animate({
                scrollTop: 0
            }, 500);
        });
    })
    //懒加载
$(function() {
    $("img").lazyload();
});
//商品鼠标移入效果
$(function() {
    $('.bag').mouseenter(function() {
        $('.car3,.find').stop().fadeIn();
        $('.bag').css({
            border: '1px solid red'
        })
    })
    $('.bag').mouseleave(function(event) {
        $('.car3,.find').stop().fadeOut();
        $('.bag').css({
            border: ' 1px solid transparent'
        })
    });
});