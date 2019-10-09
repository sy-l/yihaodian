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

//懒加载
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

/*
        放大镜实现原理：
        1. “缩略图”窗口与“原图”窗口中放置的是同一个图片，但“缩略图”窗口中的图片被缩小为400px，
        而“原图”窗口中的图片保持原始大小，溢出部分设为隐藏
        2. 先确定缩放比例，我们假定原图大小为1000px，缩略图大小为400px，缩放比例为2.5
        3. 首先实现“放大镜”框跟随鼠标移动的功能（我们让鼠标处于“放大镜”框的中心）
        4. 其次实现“原图”窗口中的图片随“放大镜”框的移动而相应移动
        5. 鼠标向右移动，“原图”窗口中的图片向左移动，它们的方向是相反的！这是实现原理中的关键环节
        6. “放大镜”框的大小不是随意设定的，它与放大倍数有关，如果要放大2.5倍，
        则“原图”窗口的大小也应该是“放大镜”框的大小的2.5倍
        */

// 当鼠标进入“缩略图”窗口时，显示“原图”窗口和“放大镜”框
$('.thumbnail').mouseover(function (e) {
    $('.origin').css('display', 'block');
    $('.magnifier').css('display', 'block');
})
// 当鼠标在“缩略图”窗口中移动时
$('.thumbnail').mousemove(function (e) {
    // 一、首先实现“放大镜”框跟随鼠标移动的功能（我们让鼠标处于“放大镜”框的中心）

    // 获取鼠标当前位置
    var pageX = e.pageX;
    var pageY = e.pageY;
    // 获取“缩略图”窗口在整个文档中的偏移位置
    var offsetX = $('.thumbnail').offset().left;
    var offsetY = $('.thumbnail').offset().top;
    // 计算鼠标在缩略图中的相对位置
    var relativeX = pageX - offsetX;
    var relativeY = pageY - offsetY;
    // 考虑到鼠标处于“放大镜”框的中心，我们要根据鼠标位置计算“放大镜”框的位置
    var magOffsetX = $('.magnifier').width() / 2;
    var magOffsetY = $('.magnifier').height() / 2;
    $('.magnifier').css({
        left: relativeX - magOffsetX + 'px',
        top: relativeY - magOffsetY + 'px'
    });
    // 获取“放大镜”框的新位置，后面会用到
    var magX = $('.magnifier').position().left;
    var magY = $('.magnifier').position().top;

    // 二、处理越界情况

    // 确定边界
    var maxMagX = $('.thumbnail').width() - $('.magnifier').width()
    var maxMagY = $('.thumbnail').height() - $('.magnifier').height()
    // 左边界
    if (magX <= 0) {
        $('.magnifier').css('left', '0px');
    }
    // 右边界
    if (magX >= maxMagX) {
        $('.magnifier').css('left', maxMagX + 'px');
    }
    // 上边界
    if (magY <= 0) {
        $('.magnifier').css('top', '0px');
    }
    // 下边界
    if (magY >= maxMagY) {
        $('.magnifier').css('top', maxMagY + 'px');
    }

    // 三、其次实现“原图”窗口中的图片随“放大镜”框的移动而相应移动

    // 按照之前确定的缩放比例移动“原图”窗口中的图片
    // 注意：图片的移动方向与鼠标的移动方向是相反的！
    var originX = magX * 2;
    var originY = magY * 2;
    $('.origin img').css({
        left: -originX + 'px',
        top: -originY + 'px'
    });
})
// 当鼠标离开“缩略图”窗口时，隐藏“原图”窗口和“放大镜”框
$('.thumbnail').mouseout(function () {
    $('.origin').css('display', 'none');
    $('.magnifier').css('display', 'none');
})

/* 选项卡 */
;
(function () {
    $(function () {
        $(".tab b").mouseenter(function () {
            $(this).css({
                border: "2px solid #999"
            }).addClass("cur").siblings().removeClass("cur").css({
                border: "2px solid #fff"
            });
            /* console.log( $(".thumbnail img").attr("src"),$(".origin img").attr("src"));
            console.log($(this).has("cur").prevObject[0].children[0].src) */
            $(".thumbnail img").attr("src", $(this).has("cur").prevObject[0].children[0].src);
            $(".origin img").attr("src", $(this).has("cur").prevObject[0].children[0].src);
        });
    })
}())

/* 倒计时 */
;
(function () {
    setInterval(function () {
        // 倒计时 有2个时间节点  未来时间  现在时间
        // 未来时间-现在时间
        var futuerTime = new Date('2019/12/30 22:30:00'); //未来时间
        var now = new Date(); //当前时间
        var time = futuerTime - now; //当前时间对象对未来时间的一个毫秒差
        var s = time / 1000; //毫秒
        var day = parseInt(s / 86400); //计算天数
        var hour = parseInt(s % 86400 / 3600); //计算小时
        var min = parseInt(s % 3600 / 60); //计算分钟
        var sec = parseInt(s % 60); //秒
        $(".hour").html(hour);
        $(".minute").html(min);
        $(".second").html(sec);
    }, 1000);
}())


/* 点击切换规格 */
;(function(){
    $(function(){
        $(".specification li").click(function(){
            $(".specification li b").removeClass("gui2");
            $(this).addClass("gui1").siblings().removeClass("gui1");
            $(this).find("b").addClass("gui2");
        })
    })
}())

/* 购物数量添加减少 */
;
(function () {
    $(".count-add").click(function () {
        var n = parseInt($(".count-number").val());
        n += 1;
        $(".count-number").val(n);
        if (n <= 1) {
            n = 1;
            $(".count-number").val(n);
        }
        if (n >= 199) {
            n = 199;
            $(".count-number").val(n);
        }
    });
    $(".count-number").focus(function () {
        var n = parseInt($(".count-number").val());
        if (n <= 1) {
            n = 1;
            $(".count-number").val(n);
        }
        if (n >= 199) {
            n = 199;
            $(".count-number").val(n);
        }
    })
    $(".count-reduce").click(function () {
        var n = parseInt($(".count-number").val());
        n -= 1;
        $(".count-number").val(n);
        if (n <= 1) {
            n = 1;
            $(".count-number").val(n);
        }
        if (n >= 199) {
            n = 199;
            $(".count-number").val(n);
        }
    })
    $(".count-number").blur(function () {
        var n = parseInt($(".count-number").val());
        if (n <= 1) {
            n = 1;
            $(".count-number").val(n);
        }
        if (n >= 199) {
            n = 199;
            $(".count-number").val(n);
        }
        if (n >= 199) {
            n = 199;
            $(".count-number").val(n);
        }
    })
}())

/* 商品介绍 评价 规格及包装 售后服务 选项卡 */