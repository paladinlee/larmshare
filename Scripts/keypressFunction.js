//keypress
//偵測瀏覽器版本
var browser = navigator.appName;
if (browser == "Netscape") {    //如果瀏覽器為Netscape或者Firefox
    //開始監聽鍵盤事件
    document.captureEvents(Event.KEYDOWN)
    document.onkeydown = function (event) {
        console.log('event.which', event.which);
        if (event.which == 34 || event.which == 37) {
            //key code 37為→
            //alert("你按下了下一頁");
            DoNext();
        }
        else if (event.which == 33 || event.which == 39) {
            //key code 39為←
            //alert("你按下了上一頁");
            DoPre();
        }
    }
}
else {    //假設瀏覽器不為Nescape則猜測為ie
    //開始監聽鍵盤事件
    document.onkeydown = function () {
        console.log('event.whitch', event.whitch);

        if (event.whitch == 34 || event.whitch == 37) {
            //key code 37為→
            //alert("你按下了下一頁");
            DoNext();
        }
        else if (event.whitch == 33 || event.whitch == 39) {
            //key code 39為←
            //alert("你按下了上一頁");
            DoPre();
        }
    }
}