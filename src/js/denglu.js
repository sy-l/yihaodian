;$(function(){
    $(".loadMore").click(function(){
         if($(".typeWeb").is(":hidden")){
            $(".typeWeb").show()
         }else{
            $(".typeWeb").hide()
         }
    });
})
;$(function(){
    $(".two_dimension_code").click(function(){
        if($(".main_two").is(":hidden")){
            $(".main_two").show();
            $(".main_denglu").hide()
         }else{
            $(".main_two").hide();
            $(".main_denglu").show()
         }
    })
});
var btn = document.querySelector("#btn");
var user = document.querySelector('#userName');
var pwd = document.querySelector('#pwd');
var check = document.querySelector("#check");
btn.onclick = function(){
    var xhr = null;
    xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("post","./login.php");
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

    xhr.send("userName="+user.value+"&pwd="+pwd.value);
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 && xhr.status == 200 ){
            //console.log(xhr.responseText);
            var res = JSON.parse(xhr.responseText);
            if( res.code ){
                // 记住用户名操作
                // 条件判断 是否勾选了 记住用户名的按钮
                if( check.checked ){
                    // 记住用户名
                    setCookie("userName",JSON.stringify(res.data),7);
                }
            }
            alert(res.msg);
        }
    }

}

// 判断 本地有没有 用户信息
var userMsg = getCookie("userName");
if(userMsg){
    alert("已经登录记住用户名");
}else{
    alert("请登录");
}