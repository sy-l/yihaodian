;$(document).ready(function (e) {
    $(".move1").click(function (e) {
        $(".head_nav_resou").toggle();
    });
});
//预加载
//存放图片路径的数组
var imgSrcArr = [
    'S1',
    'S2',
    'S3',
    'S4',
    'S5',
    'S6',
    'S7',
    'S8',
    'S9',
    'S10',
    'S11',
    'S12',
    'S13',
    'S14',
    'S15',
    'S16',
    'S17',
    'S18',
    'S19',
    'S20',
    'qsx1'
];

var imgWrap = [];

function preloadImg(arr) {
    for (var i = 0; i < arr.length; i++) {
        imgWrap[i] = new Image();
        imgWrap[i].src = arr[i];
    }
}

preloadImg(imgSrcArr);

//或者延迟的文档加载完毕在加载图片

;$(function () {
    preloadImg(imgSrcArr);
})
// 返回顶部
;$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".main_foot").fadeIn(1500);
        }
        else {
            $(".main_foot").fadeOut(1500);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $(".main_foot").click(function() {
        $('body,html').animate({
            scrollTop: 0
        },
        500);
        return false;
    });
});
;$(window).scroll(function(){
    var bignav =$("bignav");      //获取到导航栏
    if($(this).scrollTop() >250){  //当滚动距离大于250px时执行下面的东西
        bignav.css({
            width:"100%",
            position:"fixed",
            top:0,
            zIndex:9999
        });
    }
    else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
        bignav.css("position","static");
    }
})
//导航固定
;$(window).scroll(function(){
    var bignav =$(".head_nav_guding");      //获取到导航栏
    if($(this).scrollTop() >700){  //当滚动距离大于700px时执行下面的东西
        bignav.css({
            width:"100%",
            position:"fixed",
            top:0,
            zIndex:9999
        });
    }
    else{//当滚动距离小于700的时候执行下面的内容，也就是让导航栏恢复原状
        bignav.css("position","static");
    }
})