$(document).ready(function (e) {
    $(".move1").click(function (e) {
        $(".head_nav_resou").toggle();
    });
});
//存放图片路径的数组
var imgSrcArr = [
    'S1',
    'S2',
    'S3',
    'S4',
    'S5',
    'S6',
    'S7',
    'S8',
    'S9',
    'S10',
    'S11',
    'S12',
    'S13',
    'S14',
    'S15',
    'S16',
    'S17',
    'S18',
    'S19',
    'S20'
];

var imgWrap = [];

function preloadImg(arr) {
    for (var i = 0; i < arr.length; i++) {
        imgWrap[i] = new Image();
        imgWrap[i].src = arr[i];
    }
}

preloadImg(imgSrcArr);

//或者延迟的文档加载完毕在加载图片

$(function () {
    preloadImg(imgSrcArr);
})