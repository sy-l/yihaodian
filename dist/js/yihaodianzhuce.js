"use strict";$(function(){$(".drop-li,.drop-li ul").hover(function(){$(this).find("ul").stop().show(),$(this).find("ul>li").css({borderBottom:"1px solid #ddd"})},function(){$(this).find("ul").stop().hide()})}),$(function(){setInterval(function(){$(".m-huantu").css({background:"url(./images/r_icon2.png) no-repeat"}).stop().fadeIn()},2e3),setInterval(function(){$(".m-huantu").css({background:"url('./images/r_icon1.png') no-repeat"}).stop().fadeIn()},4e3),setInterval(function(){$(".m-huantu").css({background:"url('./images/r_icon3.png') no-repeat"}).stop().fadeIn()},6e3),setInterval(function(){$(".m-huantu").css({background:"url('./images/r_icon4.png') no-repeat"}).stop().fadeIn()},8e3),setInterval(function(){$(".m-huantu").css({background:"url('./images/r_icon5.png') no-repeat"}).stop().fadeIn()},1e4)}),$(function(){$("#userName").focus(function(){$(".u-n-span").animate({left:"-62px"},200)}),$("#phone").focus(function(){$(".phone-span").animate({left:"-62px"},200)}),$("#validCode").focus(function(){$(".valid-span").animate({left:"-90px"},200)}),$("#password").focus(function(){$(".pwd-span").animate({left:"-76px"},200)}),$("#password2").focus(function(){$(".pwd-span2").animate({left:"-76px"},200)})}),function(){var o=/^[a-z_]\w{4,8}$/i,n=/^[0-9]{11}$/i,s=/^[a-zA-Z]\w{5,19}$/,e={user:!1,phone:!1,pwd:!1,pwd2:!1};function t(n){return n.replace(/^\s*|\s*$/g,"")}$("#userName").focus(function(){$(".verify1").html("包含字母数字下划线,数字不能开头,长度5-9").css({color:"#666666"})}),$("#userName").blur(function(){var n=o.test(t($("#userName").val()));""==$("#userName").val()?$(".verify1").html("用户名不能为空"):n?($(".verify1").html("通过").css({color:"#69B76E"}),e.user=!0):($(".verify1").html("不通过").css({color:"red"}),e.user=!1)}),$("#phone").focus(function(){$(".verify2").html("请填写正确的手机号,以便接收订单通知,找回密码等").css({color:"#666666"})}),$("#phone").blur(function(){n.test(t($("#phone").val()))?($(".verify2").html("通过").css({color:"#69B76E"}),e.phone=!0):($(".verify2").html("格式错误，请输入正确的手机号码").css({color:"red"}),e.phone=!1)}),$("#validCode").focus(function(){$(".verify3").html("如无法接受验证码，请重启手机并确认短信未被拦截！4G用户请关闭4G网络进行接收").css({color:"#666666"})}),$("#validCode").blur(function(){$(".verify3").html("")}),$("#password").focus(function(){$(".verify4").html("密码至少包含 数字和英文,数字不能开头,长度6-20").css({color:"#666666"})}),$("#password").blur(function(){var n=s.test(t($("#password").val()));""==$("#password").val()?$(".verify4").html("密码不能为空"):n?($(".verify4").html("通过").css({color:"#69B76E"}),e.pwd=!0):($(".verify4").html("不通过").css({color:"red"}),e.pwd=!1)}),$("#password2").focus(function(){$(".verify5").html("请再次输入密码").css({color:"#666666"})}),$("#password2").blur(function(){""==$("#password2").val()?$(".verify5").html("请再次输入密码").css({color:"#666666"}):$("#password2").val()==$("#password").val()?$(".verify5").html("通过").css({color:"#69B76E"}):$(".verify5").html("两次密码输入不一致").css({color:"red"})})}(),$(function(){$(".agreement_btn").mouseenter(function(){$(this).css({background:"#D72226"})}),$(".agreement_btn").mouseleave(function(){$(this).css({background:"#FF3C3C"})})});