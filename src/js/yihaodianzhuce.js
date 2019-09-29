/* 帮助中心效果 */ ;
(function () {
    $(".drop-li,.drop-li ul").hover(function () {
        $(this).find("ul").stop().show();
        $(this).find("ul>li").css({
            borderBottom: "1px solid #ddd"
        })
    }, function () {
        $(this).find("ul").stop().hide();
    })
}())
/* 切换背景图 */
;
(function () {
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
    /*
				 声明两个正则
				 * */

    //用户名验证
    $("#userName").blur(function () {
        var regUser = /^[a-z_]\w{4,8}$/i;
        var regPwd = /^[a-z0-9]{6,9}$/i;
        var rules = {
            user: false,
            pwd: false
        };
        alert(11)
        var res = regUser.test(trimer($("#userName").val()));
        if (!res) {
            //验证不通过
            $(".verify1").html('验证不通过');
            $(".verify1").css({
                color = "red"
            })
            rules.user = false;
        } else {
            $(".verify1").html('验证通过');
            $(".verify1").css({
                color = "green"
            })
            rules.user = true;
        }
    })
    /* userName.onblur = function () {
        //					if(trimer(this.value) == ""){
        //						alert("不能为空");
        //					}
        // console.log(trimer(this.value).match(regUser));
        //					var res = trimer(this.value).match(regUser);
        
    } */

    pwd.onblur = function () {
        //					var res = trimer(this.value).match(regPwd);
        var res = regPwd.test(trimer(this.value));
        if (!res) {
            //验证不通过
            pwdReg.innerHTML = '密码验证不通过';
            pwdReg.style.color = "red";
            rules.pwd = false;
        } else {
            pwdReg.innerHTML = '验证通过';
            pwdReg.style.color = "gray";
            rules.pwd = true;
        }
    }
    //如果两个用户名和密码验证都通过才可以提交，否则不能提交

    form.onsubmit = function () {
        if (rules.user && rules.pwd) {
            return true;
        } else {
            return false;
        }
    }


    function trimer(str) {
        return str.replace(/^\s*|\s*$/g, "");
    }

}())