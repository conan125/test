var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var options = {
    //webrtc要求SSL安全传输,所以要设置证书
    key: fs.readFileSync('key/server.key'),
    cert: fs.readFileSync('key/server.crt')
}

var server = PeerServer({
    port: 9000,
    ssl: options,
    path: "/"
});
