"use strict";$(".drop-li,.drop-li ul").hover(function(){$(this).find("ul").stop().show(),$(this).find("ul>li").css({borderBottom:"1px solid #ddd"})},function(){$(this).find("ul").stop().hide()}),setInterval(function(){$(".m-huantu").css({background:"url(./images/r_icon2.png) no-repeat"}).stop().fadeIn()},2e3),setInterval(function(){$(".m-huantu").css({background:"url('./images/r_icon1.png') no-repeat"}).stop().fadeIn()},4e3),setInterval(function(){$(".m-huantu").css({background:"url('./images/r_icon3.png') no-repeat"}).stop().fadeIn()},6e3),setInterval(function(){$(".m-huantu").css({background:"url('./images/r_icon4.png') no-repeat"}).stop().fadeIn()},8e3),setInterval(function(){$(".m-huantu").css({background:"url('./images/r_icon5.png') no-repeat"}).stop().fadeIn()},1e4),$(function(){$("#userName").focus(function(){$(".u-n-span").animate({left:"-62px"},200)}),$("#phone").focus(function(){$(".phone-span").animate({left:"-62px"},200)}),$("#validCode").focus(function(){$(".valid-span").animate({left:"-90px"},200)}),$("#password").focus(function(){$(".pwd-span").animate({left:"-76px"},200)}),$("#password2").focus(function(){$(".pwd-span2").animate({left:"-76px"},200)})}),function(){var n=/^[a-z_]\w{4,8}$/i,e=/^[a-z0-9]{6,9}$/i,t={user:!1,pwd:!1};function o(n){return n.replace(/^\s*|\s*$/g,"")}userName.onblur=function(){console.log(o(this.value).match(n)),n.test(o(this.value))?(userReg.innerHTML="验证通过",userReg.style.color="gray",t.user=!0):(userReg.innerHTML="验证不通过",userReg.style.color="red",t.user=!1)},pwd.onblur=function(){e.test(o(this.value))?(pwdReg.innerHTML="验证通过",pwdReg.style.color="gray",t.pwd=!0):(pwdReg.innerHTML="密码验证不通过",pwdReg.style.color="red",t.pwd=!1)},form.onsubmit=function(){return!(!t.user||!t.pwd)}}();