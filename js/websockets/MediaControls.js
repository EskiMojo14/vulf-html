
var reconnect;

function open() {
  try {
    var url = "ws://127.0.0.1:58932/MediaControls";
    wsMediaControls = new WebSocket(url);
    wsMediaControls.onopen = onOpen;
    wsMediaControls.onclose = onClose;
    wsMediaControls.onmessage = onMessage;
    wsMediaControls.onerror = onError;
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

var onError = function(event) {
  if (typeof event.data != 'undefined') {
    //document.getElementById('content').innerHTML += "\nWebsocket Error:" + event.data;
  }
};

function MediaControls(stringToSend) {
  if (connected) {
    wsMediaControls.send(stringToSend);
  }
}
open();