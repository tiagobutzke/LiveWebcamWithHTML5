/*
 * Verifry if browser has getUserMedia
 */
function hasGetUserMedia() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

var video = document.getElementById('sourcevid');

navigator.getMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

if (hasGetUserMedia()) {
    navigator.getMedia(
        {video: true, audio: false}, 
        function (localMediaStream) {
            video.src = window.URL.createObjectURL(localMediaStream);
        }, 
        function (e) {
            console.log(e);
        }
    );
    
    var back = document.createElement('canvas');
    var backcontext = back.getContext('2d');
    
    var ws;
    
    if ('WebSocket' in window) {
        connect('ws://127.0.0.1:8080/');
    } else {
        console.log('web sockets not suported');
    }
    
    function connect(host) {
        ws = new WebSocket(host);
        ws.onopen = function () {
            console.log('connected');
        }
        
        ws.onclose = function () {
            console.log('closed');
        }
        
        ws.onerror = function(evt) {
            console.log('<span style="color: red;">ERROR:</span> ' + evt.data);
        }
    }
    
    function send(msg) {
        if (ws != null) {
            if (ws.readyState === 1)
                ws.send(msg);
        } else {
            console.log('not ready yet');
        }
    }
    
    cw = video.clientWidth;
    ch = video.clientHeight;
    back.width = cw;
    back.height = ch;
    draw(video, backcontext, cw, ch);
    
    function draw(v, bc, w, h) {
        bc.drawImage(v, 0, 0, w, h);
        
        var stringData = back.toDataURL();
        
        send(stringData);
        
        setTimeout(function() { draw(v, bc, w, h) });
    }
    
} else {
    alert('getUserMedia() is not supported in your browser!');
}