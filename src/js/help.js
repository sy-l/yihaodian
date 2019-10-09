//导航下拉效果
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
    // 侧边栏效果
$(function() {
        $(".click").click(function() {
            if ($(this).find('.inside').is(":hidden")) {
                $(this).find('.inside').slideDown(400);
                $(this).find('a').first().css({

                    color: 'red'
                });

            } else {
                $(this).find('.inside').slideUp(400);
                $(this).find('a').first().css({
                    color: '#666'
                })


            }
        });
    })
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