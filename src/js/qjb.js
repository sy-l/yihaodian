$(function() {
    $("img").lazyload();
});




(function () {
    $(function () {
        $(".app").mouseenter(function () {
            $(".app2").css({
                display: "block"
            })
        })
        $(".app").mouseleave(function () {
            $(".app2").css({
                display: "none"
            })
        })
    })
}());