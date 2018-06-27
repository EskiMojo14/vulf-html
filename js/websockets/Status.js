
var reconnect;

function open() {
  try {
    var url = "ws://127.0.0.1:58932/Status";
    wsStatus = new WebSocket(url);
    wsStatus.onopen = onOpen;
    wsStatus.onclose = onClose;
    wsStatus.onmessage = onMessage;
    wsStatus.onerror = onError;
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
  if (event.data == 1) {
    document.getElementById("playpause").innerHTML = 'pause';
  } else {
    document.getElementById("playpause").innerHTML = 'play';
  }
};

var onError = function(event) {
  if (typeof event.data != 'undefined') {
    //document.getElementById('content').innerHTML += "\nWebsocket Error:" + event.data;
  }
};

open();
