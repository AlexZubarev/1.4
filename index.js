var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write('<html><head><meta charset="utf-8"></head><body><form action="https://translate.yandex.net/api/v1.5/tr.json/translate" type="post">Yandex ключ<br><input name="key" size="50" type="text" value="trnsl.1.1.20160723T183155Z.f2a3339517e26a3c.d86d2dc91f2e374351379bb3fe371985273278df" /><br>Тест для перевода<br><input name="text" size="50" type="text" /><br>Язык перевода (с какого на какой (ru-en))<br><input name="lang" size="50" type="text" /><br><input type="submit" value="Перевести"></form></body></html>');
    response.end();
}).listen(3000);

