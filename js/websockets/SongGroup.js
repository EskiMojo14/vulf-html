
var reconnect;

function open() {
  try {
    var url = "ws://127.0.0.1:58932/SongGroup";
    wsSongGroup = new WebSocket(url);
    wsSongGroup.onopen = onOpen;
    wsSongGroup.onclose = onClose;
    wsSongGroup.onmessage = onMessage;
    wsSongGroup.onerror = onError;
  } catch (error) {
    //document.getElementById('content').innerHTML += "\nError:" + error;
  }
}

var onOpen = function() {
  connected = true;
  clearTimeout(reconnect);
};

var onClose = function() {
  connected = false;
  reconnect = setTimeout(function() {
    open();
  }, 5000);
};

var onMessage = function(event) {
  var dataArray = event.data.split(' | ');
  document.getElementById("track").innerHTML = dataArray[0];
  document.getElementById("artist").innerHTML = dataArray[1];
  document.getElementById("album").innerHTML = dataArray[2];
  document.getElementById("duration").innerHTML = dataArray[3];
  //placeholder, as local files cannot be used 
  if (dataArray[4].startsWith('http') == true) {
    var cover = dataArray[4];
  } else {
    var cover = 'https://ih1.redbubble.net/image.471870831.9912/flat,800x800,070,f.u1.jpg';
  }
  drawCover(cover);
};

var onError = function(event) {
  if (typeof event.data != 'undefined') {
    //document.getElementById('content').innerHTML += "\nWebsocket Error:" + event.data;
  }
};

open();
