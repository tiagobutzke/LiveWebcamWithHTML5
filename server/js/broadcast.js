var sys = require('sys'), 
    ws = require('ws');
    
var clients = [];

var server = ws.createServer(
    function (websocket) {
        clients.push(websocket);
        
        websocket.addListener('connect', function (resource) {
//            sys.debug('connect: ' + resource);
            
        });
        
        websocket.addListener('data', function(data) {
            for (var i = 1; i < clients.length; i++) {
                clients[i].write(data);
            }
            
        });
        
        websocket.addListener('close', function() {
//            sys.debug('close');
        });
    });
    
server.listen(9999);

//sys.debug('Listening on port 8080');