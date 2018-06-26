// values for translation
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//offset from local time in hours
var timezoneOffset = -8;

//for the Philistines
var use12Hr = false;

function startTime() {
    var today = new Date();
    var day = days[today.getDay()];
    var year = today.getFullYear();
    var date = today.getDate();
    var month = months[today.getMonth()];
    var h = today.getHours();
    h = checkTime(h);
    var h2 = today.getHours();
    h2 = timeZone(h2);
    h2 = checkTime(h2);
    var m = today.getMinutes();
    m = checkTime(m);
    var timeFormat = h + '<span class="blink">:</span>' + m;
    var timeFormat2 = h2 + '<span class="blink">:</span>' + m;
    var dateFormat = '<span class="accent">' + day + '</span>, ' + date + ' ' + month + ' ' + year;
    document.getElementById('time').innerHTML = timeFormat;
    document.getElementById('time2').innerHTML = timeFormat2;
    document.getElementById('date').innerHTML = dateFormat;
    var t = setTimeout(startTime, 10000);
}

function timeZone(i) {
    if (i > Math.abs(timezoneOffset)) { i += timezoneOffset}
    else {i = i + timezoneOffset + 24};
    return i;
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }  // add zero in front of numbers < 10
    else if (i > 12 && use12Hr == true) { i = i - 12; if (i < 10) { i = "0" + i } };
    return i;
}
startTime();