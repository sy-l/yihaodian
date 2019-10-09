; $(document).ready(function (e) {
    $(".move1").click(function (e) {
        $(".head_nav_resou").toggle();
    });
});

; $(function () {
    preloadImg(imgSrcArr);
})
    // 返回顶部
    ; $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(".main_foot").fadeIn(1500);
            }
            else {
                $(".main_foot").fadeOut(1500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $(".main_foot").click(function () {
            $('body,html').animate({
                scrollTop: 0
            },
                500);
            return false;
        });
    });
; $(window).scroll(function () {
    var bignav = $("bignav");      //获取到导航栏
    if ($(this).scrollTop() > 250) {  //当滚动距离大于250px时执行下面的东西
        bignav.css({
            width: "100%",
            position: "fixed",
            top: 0,
            zIndex: 9999
        });
    }
    else {//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
        bignav.css("position", "static");
    }
})
    // 导航固定
    ; $(window).scroll(function () {
        var bignav = $(".head_nav_guding");      //获取到导航栏
        if ($(this).scrollTop() > 700) {  //当滚动距离大于700px时执行下面的东西
            bignav.css({
                width: "100%",
                position: "fixed",
                top: 0,
                zIndex: 9999
            });
        }
        else {//当滚动距离小于700的时候执行下面的内容，也就是让导航栏恢复原状
            bignav.css("position", "static");
        }
    })
/*  */
$(window).scroll(function () {
    // 获取滚动距离
    var os = $(document).scrollTop();
    if (os >= $(".a4").offset().top) {
        $(".head_nav_guding li").eq(3).addClass("on").siblings().removeClass("on");
    }
    else if (os >= $(".a3").offset().top) {
        $(".head_nav_guding li").eq(2).addClass("on").siblings().removeClass("on");
    }
    else if (os >= $(".a2").offset().top) {
        $(".head_nav_guding li").eq(1).addClass("on").siblings().removeClass("on");
    }
    else if (os >= $(".a1").offset().top) {
        $(".head_nav_guding li").eq(0).addClass("on").siblings().removeClass("on");
    }
}).trigger("scroll");
// 点击侧边导航页面位置滚动到对应的距离
$(".head_nav_guding ul li").click(function () {
    var index = $(this).index();
    $("html,body").animate({
        scrollTop: $(".main_nav").eq(index).offset().top
    }, 200);
});