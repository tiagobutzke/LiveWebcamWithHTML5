var img;

function init() {
    img = document.getElementById('frame');
}

$(document).ready(function (){
    init();
});

if ('WebSocket' in window) {
    connect('ws://127.0.0.1:8080/');
} else {
    console.log('web sockets not suported');
}

var ws;

function connect(host) {
    ws = new WebSocket(host);

    ws.onopen = function () {
        console.log('connected');
    }

    ws.onmessage = function (evt) {
        if (evt.data != null) {
            if ((evt.data[0] == 'd') && (evt.data[1] == 'a'))
                img.src = evt.data;
        }
    }

    ws.onclose = function () {
        console.log('closed');
    }

    ws.onerror = function(evt) {
        console.log('<span style="color: red;">ERROR:</span> ' + evt.data);
    }
}
