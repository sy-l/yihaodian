"use strict";$(function(){$(window).scroll(function(){$(document).scrollTop()>$(".big-img").offset().top?$(".search").css({display:"block",position:"fixed",top:0}):$(".search").css({display:"none"})})}),$(function(){$(".move1").click(function(){$(".search-none").fadeIn()}),$(".move1").blur(function(o){$(".search-none").fadeOut(),o.stopPropagation()})}),$(function(){$(".all,.list").mouseenter(function(){$(".list").css({display:"block"})}),$(".all,.list").mouseleave(function(){$(".list").css({display:"none"})})});