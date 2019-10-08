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
        $(this).find(".find,.car3").stop().fadeIn();
        $(this).css({
            border: '1px solid red'
        })
    })
    $('.bag').mouseleave(function(event) {
        $(this).find(".find,.car3").stop().fadeOut();
        $(this).css({
            border: ' 1px solid transparent'
        })
    });
});
//购物车
var items1 = [{
    itemName: "内衣",
    isChecked: true,
    itemPrice: 8.8,
    itemNum: 2,
    subTotal: 8.8
}, {
    itemName: "内裤",
    isChecked: true,
    itemPrice: 9.9,

    itemNum: 1,
    subTotal: 9.9
}, {
    itemName: "皮带",
    isChecked: true,
    itemPrice: 18.8,
    itemNum: 1,
    subTotal: 18.8
}, {
    itemName: "蜡烛",
    isChecked: true,
    itemPrice: 88.8,
    itemNum: 1,
    subTotal: 88.8
}, ]
var list = document.querySelector("#list");
var str = "";
/*
cookie
items
    []
*/
var items = getCookie("items") ? JSON.parse(getCookie("items")) : [];
// var counts = getCookie("count") ? JSON.parse(getCookie("count")) : [];
// console.log(items);
for (var i = 0; i < items1.length; i++) {
    str += "<li>" + items1[i].itemName + "</li>";
}
list.innerHTML = str;
var ali = document.querySelectorAll("#list>li");
// var count = 0;
for (var i = 0; i < ali.length; i++) {
    ali[i].index = i;
    ali[i].onclick = function() {
        // 插入数据
        // 去重
        var flag = true;


        //  console.log(count);
        for (var i = 0; i < items.length; i++) {

            if (items[i].itemName == items1[this.index].itemName) {
                flag = false;
                // count++;

                // setCookie("counts", count);
                //console.log(items1[this.index]);
                // items[i].itemNum = parseInt(items1[this.index].itemNum) + 1;
                // console.log(items[i].itemNum);


            }
        }
        if (flag) {
            items.push(items1[this.index]);
            setCookie("items", JSON.stringify(items));
            alert("加入购物车成功");
        }

    }
}