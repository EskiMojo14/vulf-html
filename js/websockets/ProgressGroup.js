
var reconnect;

function open() {
  try {
    var url = "ws://127.0.0.1:58932/ProgressGroup";
    wsProgressGroup = new WebSocket(url);
    wsProgressGroup.onopen = onOpen;
    wsProgressGroup.onclose = onClose;
    wsProgressGroup.onmessage = onMessage;
    wsProgressGroup.onerror = onError;
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
  document.getElementById("position").innerHTML = event.data;
};

var onError = function(event) {
  if (typeof event.data != 'undefined') {
    //document.getElementById('content').innerHTML += "\nWebsocket Error:" + event.data;
  }
};

open();
