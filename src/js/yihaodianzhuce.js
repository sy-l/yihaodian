/* 帮助中心效果 */
;(function () {
    $(".drop-li").hover(function () {
         $(this).find("ul").stop().slideDown();
         $(this).find("ul>li").css({
            borderBottom: "1px solid #ddd"
         })
    }, function () {
        $(this).find("ul").stop().slideUp();
    })
}())
/* 切换背景图 */
;(function(){
    var timer1=null;
    var timer2=null;
    var timer3=null;
    var timer4=null;
    var timer5=null;
    timer1=setInterval(function(){
        $(".m-huantu").css({
            background: "url(./images/r_icon2.png) no-repeat"
        }).stop().fadeIn();
    },2000);
    timer2=setInterval(function(){
        $(".m-huantu").css({
            background: "url('./images/r_icon1.png') no-repeat"
        }).stop().fadeIn();
    },4000);
    timer3=setInterval(function(){
        $(".m-huantu").css({
            background: "url('./images/r_icon3.png') no-repeat"
        }).stop().fadeIn();
    },6000);
    timer4=setInterval(function(){
        $(".m-huantu").css({
            background: "url('./images/r_icon4.png') no-repeat"
        }).stop().fadeIn();
    },8000);
    timer5=setInterval(function(){
        $(".m-huantu").css({
            background: "url('./images/r_icon5.png') no-repeat"
        }).stop().fadeIn();
    },10000);
}())

