const http = require('http');
const https = require('https');
var fs = require('fs');


http.createServer()
    .listen(3000)
    .on('error', err => console.error(err))
    .on('request', handler);

function handler(req, res) {
    if (req.method === 'GET') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    if (req.method === 'POST') {
        let data = '',
            url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=',
            key = 'trnsl.1.1.20160723T183155Z.f2a3339517e26a3c.d86d2dc91f2e374351379bb3fe371985273278df';
            lang = 'lang=ru-en';
       req.on('data', chunk => data = data +  chunk);
        req.on('end', () => {
            let ResponsYAData = '';
            https.get(`${url}${key}&${data}&${lang}`, (response) => {
                response.on('data', chunk => {
                    ResponsYAData = ResponsYAData + chunk;
                });
                response.on('end', () => {
                    ResponsYAData = JSON.parse(ResponsYAData);
                    res.writeHead(200, 'OK', { 'Content-Type': 'text/html;charset=utf-8' });
                    res.write(`${ResponsYAData.text}`);
                    res.end();
                });
            });
        });
    }
}