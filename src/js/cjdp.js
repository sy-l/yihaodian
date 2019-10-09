/* 懒加载 */
$(function () {
    $("img").lazyload();
});
/* app */
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


$(function () {
    $(window).scroll(function () {
        // 获取 滚动距离
        var os = $(document).scrollTop();

        if (os > $(".search2").outerHeight()) {
            $(".nav_").css({
                position: "fixed",
                left: 0,
                top: 0,
                right: 0
            });
            $(".main").css({
                marginTop: 40
            })
        } else {
            $(".nav_").css({
                position: "static",

            });
            $(".main").css({
                marginTop: 0
            })
        }
    });
});
//    商品移入
$(function () {
    $('.warp_a').mouseenter(function () {
        $(this).css({
            paddingLeft: "3px"
        })
    })
    $('.warp_a').mouseleave(function (event) {
        $(this).css({
            paddingLeft: "0"
        })
    });
});
// 倒计时
var content = document.getElementById('time');
setInterval(function () {
    // 倒计时 有2个时间节点  未来时间  现在时间
    // 未来时间-现在时间
    var futuerTime = new Date('2019/12/12 22:30:00'); //未来时间
    var now = new Date(); //当前时间
    var time = futuerTime - now; //当前时间对象对未来时间的一个毫秒差
    var s = time / 1000; //毫秒
    var hour = parseInt(s % 86400 / 3600); //计算小时
    var min = parseInt(s % 3600 / 60); //计算分钟
    var sec = parseInt(s % 60); //秒
    $(".time-hour").html(hour);
    $(".time-minit").html(min);
    $(".time-second").html(sec);
}, 1000);


// 侧边栏
$(function() {
    var len = 55;
    $(".subnav div").each(function(i,ele){
        $(ele).css({
            backgroundPosition:"0 "+(-len*i)+"px"
        });
    });
    // 滚动条事件


$(window).scroll(function () {
    // 获取滚动距离
    var os = $(document).scrollTop();
    if (os >= $(".xia").offset().top) {
        $(".subnav div").eq(1).addClass("current").siblings().removeClass("current");
    } else if (os >= $(".main_top").offset().top) {
        $(".subnav div").eq(0).addClass("current").siblings().removeClass("current");
    }
     if (os > 0) {
        $(".subnav,.back").fadeIn();
    } else {
        $(".subnav,.back").fadeOut();
    }
}).trigger("scroll");



    // 点击侧边导航页面位置滚动到对应的距离
    $(".subnav div").click(function(){
        var index = $(this).index();
        $("html,body").animate({
            scrollTop :$(".main_top,.main_bottom").eq(index).offset().top-44
        },400);
    });
    // 点击回到顶部
    $(".back").click(function(){
        $("html,body").animate({
            scrollTop :0
        },400);
    });
})
