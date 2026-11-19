
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello abes');
});

server.listen(5139, () => {
    console.log('Server running at http://localhost:5139');
});
