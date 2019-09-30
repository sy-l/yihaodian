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
