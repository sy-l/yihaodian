/* 帮助中心效果 */ ;
(function () {
    $(function () {
        $(".drop-li,.drop-li ul").hover(function () {
            $(this).find("ul").stop().show();
            $(this).find("ul>li").css({
                borderBottom: "1px solid #ddd"
            })
        }, function () {
            $(this).find("ul").stop().hide();
        })
    })
}())
/* 切换背景图 */
;
(function () {
    $(function () {
        var timer1 = null;
        var timer2 = null;
        var timer3 = null;
        var timer4 = null;
        var timer5 = null;
        timer1 = setInterval(function () {
            $(".m-huantu").css({
                background: "url(./images/r_icon2.png) no-repeat"
            }).stop().fadeIn();
        }, 2000);
        timer2 = setInterval(function () {
            $(".m-huantu").css({
                background: "url('./images/r_icon1.png') no-repeat"
            }).stop().fadeIn();
        }, 4000);
        timer3 = setInterval(function () {
            $(".m-huantu").css({
                background: "url('./images/r_icon3.png') no-repeat"
            }).stop().fadeIn();
        }, 6000);
        timer4 = setInterval(function () {
            $(".m-huantu").css({
                background: "url('./images/r_icon4.png') no-repeat"
            }).stop().fadeIn();
        }, 8000);
        timer5 = setInterval(function () {
            $(".m-huantu").css({
                background: "url('./images/r_icon5.png') no-repeat"
            }).stop().fadeIn();
        }, 10000);
    })
}())

/* 
input 获取焦点时里面的文字left值改动
*/
;
(function () {
    $(function () {
        $("#userName").focus(function () {
            $(".u-n-span").animate({
                left: "-62px"
            }, 200)
        })
        $("#phone").focus(function () {
            $(".phone-span").animate({
                left: "-62px"
            }, 200)
        })
        $("#validCode").focus(function () {
            $(".valid-span").animate({
                left: "-90px"
            }, 200)
        })
        $("#password").focus(function () {
            $(".pwd-span").animate({
                left: "-76px"
            }, 200)
        })
        $("#password2").focus(function () {
            $(".pwd-span2").animate({
                left: "-76px"
            }, 200)
        })
    })
}())

/* 表单验证 */




;
(function () {
    var regUser = /^[a-z_]\w{4,8}$/i;
    var regPwd = /^[a-z0-9]{6,9}$/i;
    var regphone = /^[0-9]{11}$/i;
    var pwd = /^[a-zA-Z]\w{5,19}$/;
    var pwd2 = /^[a-zA-Z]\w{5,19}$/;
    var rules = {
        user: false,
        phone: false,
        pwd: false,
        pwd2: false
    };

    function trimer(str) {
        return str.replace(/^\s*|\s*$/g, "");
    }
    // 验证用户名
    $("#userName").focus(function () {
        $(".verify1").html("包含字母数字下划线,数字不能开头,长度5-9").css({
            color: "#666666"
        })
    })
    $("#userName").blur(function () {
        var res = regUser.test(trimer($("#userName").val()));
        if ($("#userName").val() == "") {
            $(".verify1").html("用户名不能为空")
        } else {
            if (!res) {
                //验证不通过
                $(".verify1").html("不通过").css({
                    color: "red"
                });
                rules.user = false;
            } else {
                $(".verify1").html("通过").css({
                    color: "#69B76E"
                });
                rules.user = true;
            }
        }

    })
    // 验证手机号
    $("#phone").focus(function () {
        $(".verify2").html("请填写正确的手机号,以便接收订单通知,找回密码等").css({
            color: "#666666"
        })
    })
    $("#phone").blur(function () {
        var res2 = regphone.test(trimer($("#phone").val()));
        if (!res2) {
            $(".verify2").html("格式错误，请输入正确的手机号码").css({
                color: "red"
            });
            rules.phone = false;
        } else {
            $(".verify2").html("通过").css({
                color: "#69B76E"
            });
            rules.phone = true;
        }
    })
    // 验证码
    $("#validCode").focus(function () {
        $(".verify3").html("如无法接受验证码，请重启手机并确认短信未被拦截！4G用户请关闭4G网络进行接收").css({
            color: "#666666"
        })
    })
    $("#validCode").blur(function () {
        $(".verify3").html("");
    })
    // 验证密码
    $("#password").focus(function () {
        $(".verify4").html("密码至少包含 数字和英文,数字不能开头,长度6-20").css({
            color: "#666666"
        })
    })
    $("#password").blur(function () {
        var res3 = pwd.test(trimer($("#password").val()));
        if ($("#password").val() == "") {
            $(".verify4").html("密码不能为空")
        } else {
            if (!res3) {
                $(".verify4").html("不通过").css({
                    color: "red"
                });
                rules.pwd = false;
            } else {
                $(".verify4").html("通过").css({
                    color: "#69B76E"
                });
                rules.pwd = true;
            }
        }

    })
    // 确认密码
    $("#password2").focus(function () {
        $(".verify5").html("请再次输入密码").css({
            color: "#666666"
        })
    })
    $("#password2").blur(function () {
        if (($("#password2").val() == "")) {
            $(".verify5").html("请再次输入密码").css({
                color: "#666666"
            })
        } else {
            if ($("#password2").val() == $("#password").val()) {
                $(".verify5").html("通过").css({
                    color: "#69B76E"
                });
            } else {
                $(".verify5").html("两次密码输入不一致").css({
                    color: "red"
                });
            }
        }

    })
}())

// 注册按钮
;
(function () {
    $(function () {
        $(".agreement_btn").mouseenter(function () {
            $(this).css({
                background: "#D72226"
            })
        })
        $(".agreement_btn").mouseleave(function () {
            $(this).css({
                background: "#FF3C3C"
            })
        })
    })
}())