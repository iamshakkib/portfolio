const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  if (req.method === 'GET' && req.url === '/sitemap.xml') {
    const filePath = path.join(__dirname, './sitemap.xml');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading robots.txt');
        return;
      }
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
};
