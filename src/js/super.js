//更多分类效果
$(function() {
        $('.down').mouseenter(function() {

            $('.none').stop().animate({
                opacity: '1',
                top: '53px'
            }, 200)
        });
        $('.down').mouseleave(function() {

            $('.none').stop().animate({
                opacity: '0',
                top: '323px'
            }, 500)
        })
    })
    //商品上滑动效果
$(function() {
        $('.shopping').mouseenter(function() {

            $(this).find('.shang').stop().animate({
                marginTop: '-49px'
            }, 300)
        });
        $('.shopping').mouseleave(function() {

            $(this).find('.shang').stop().animate({
                marginTop: '0'
            }, 300)
        })
    })
    //懒加载
$(function() {
    $("img").lazyload();
});
//选项卡
// $(function() {
//     $(".top div").click(function() {
//         var index = $(this).index();
//         $(this).addClass('active').siblings().removeClass('active');
//         $(".box>div").eq(index).show().siblings().hide();
//     });
// })
$('.ing').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('.shop1').show();
    $('.shop2').hide();
});
$('.ed').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.shop2').show();
        $('.shop1').hide();
    })
    //固定导航栏
$(function() {
        $(window).scroll(function() {
            // 获取 滚动距离
            var os = $(document).scrollTop();

            if (os > $(".bg").offset().top) {
                $(".nav").css({
                    position: "fixed",
                    left: 0,
                    top: 0
                });
                // $(".main").css({
                //     marginTop: 103
                // })
            } else {
                $(".nav").css({
                    position: "static",

                });
                // $(".main").css({
                //     marginTop: 20
                // })
            }
        });
    })
    //回到顶部
$(function() {
    $(window).scroll(function() {
        var oT = $(document).scrollTop();
        if (oT > 500) {
            $(".back").fadeIn();
        } else {
            $(".back").fadeOut();
        }
    });
    $(".back_n").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 200);
    });
})