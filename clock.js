/**
 * Created by aaron on 2016/9/9.
 */
$(document).ready(function () {
    for(var i=1; i<13; i++) {
        $("#circle").append("<div class='num'><div>"+i+"</div></div>");
    }
    for(var i = 1;i < 13;i++){
        $(".num").eq(i-1).css("transform","rotate("+eval(30*i)+"deg)");
        $(".num div").eq(i-1).css("transform","rotate("+eval(-30*i)+"deg)");
    }
    $("#innercircle").append("<div id='point'></div>");
    $("#innercircle").append("<div id='hour'></div>");
    $("#innercircle").append("<div id='minute'></div>");
    $("#innercircle").append("<div id='second'></div>");
    $("#innercircle").append("<div id='clocknum'></div>");

    setInterval(run,1000);
    function run() {
        var nowtime = new Date();
        var hours = nowtime.getHours();
        var minutes = nowtime.getMinutes();
        var seconds = nowtime.getSeconds();
        var hourDeg = parseFloat(30*hours+minutes/60*30) - 90;
        $("#second").css("transform","rotate("+eval(6*seconds - 90)+"deg)");
        $("#minute").css("transform","rotate("+eval(6*minutes - 90)+"deg)");

        if (hours < 10){
            minutes = "0" + minutes;
        }
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $("#clocknum").text(hours + ":" + minutes + ":" + seconds);

        if(hours > 12){
            hours = hours - 12;
        }
        $("#hour").css("transform","rotate("+hourDeg+"deg)");
        console.log(hours+":"+minutes+":"+seconds);
    }
});
