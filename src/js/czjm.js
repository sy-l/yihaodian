;
(function () {
    var regphone = /^[0-9]{11}$/i;
    var onff = 0;
    function trimer(str) {
        return str.replace(/^\s*|\s*$/g, "");
    }
    // 验证手机号
    $("#phone").focus(function () {
        $(".verify").html("请输入11位有效手机号").css({
            color: "red"
        })
    });
    
    $("#phone").blur(function () {
        var res2 = regphone.test(trimer($("#phone").val()));
        if (!res2) {
            $(".verify").html("请输入11位有效手机号").css({
                color: "red"
            });
            // rules.phone = false;
            onff = 0;
        } else {
            $(".verify").html("通过").css({
                color: "#69B76E"
            });
            onff = 1;
        }
    })

    // 点击   
    $(".table-item  li").click(function(){
        if(!onff){
            return;
        }
        $(this).addClass("shuzhi").siblings().removeClass("shuzhi");
    })
}())
