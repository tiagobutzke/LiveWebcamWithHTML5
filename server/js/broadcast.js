var sys = require('util'), 
    ws = require('ws').Server;
    
var server = new ws({port: 8080});

clients = [];

server.on("connection", function(websocket) {
    clients.push(ws);

    websocket.on('message', function(data) {
        for (var i = 1; i < clients.length; i++) {
           clients[i].send(data);
        }
    });
});

/*var clients = [];

var server = ws.createServer(
    function (websocket) {
        clients.push(websocket);
        
        websocket.addListener('connect', function (resource) {
            sys.debug('connect: ' + resource);
        });
        
        websocket.addListener('data', function(data) {
            for (var i = 1; i < clients.length; i++) {
                clients[i].write(data);
            }
        });
        
        websocket.addListener('close', function() {
            sys.debug('close');
        });
    });
    
server.listen(8080);
*/

sys.debug('Listening on port 8080');
