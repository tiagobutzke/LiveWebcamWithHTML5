# Live Stream Using HTML 5 and Node.js
My experiments with HTML 5 and Node.js to make Live Stream.

## Canvas
In this case, I'm geting live video and taking snapshots. And a pooling send a canvas to node.js server via websockets.

This case is fully functional now.

### To RUN
#### Install Node.js: 
http://nodejs.org/

#### Install NPM: 
https://npmjs.org/

#### Install modules:
`npm install util`
`npm install ws`

#### Run server side:
`node LiveWebcamWithHTML5/canvas/server/js/broadcast.js`

#### Run client transmissor and receptors:
http://localhost/LiveWebcamWithHTML5/canvas/client/transmissor.html
http://localhost/LiveWebcamWithHTML5/canvas/client/receptor.html

PS.: Is necessary run with http. Like a external page.

## RTMP
... It's not been done yet.

Doubts: @tiagobutzke

Based on the following articles:
- http://zackhobson.com/2010/03/28/node-js-and-web-sockets.html
- http://francisshanahan.com/index.php/2011/stream-a-webcam-using-javascript-nodejs-android-opera-mobile-web-sockets-and-html5/
- http://www.html5rocks.com/en/tutorials/getusermedia/intro/
