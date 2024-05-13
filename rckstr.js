// rckstr.js
const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server instance
const proxy = httpProxy.createProxyServer({});

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  // Proxy the request to the target URL
  proxy.web(req, res, { target: 'http://example.com' });
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('RCKSTR proxy server is running on port 3000');
});
