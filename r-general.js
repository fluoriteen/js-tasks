document.writeln('<pre>\n\n==================================== Regular Expressions =======================================');
document.writeln('====================================================================================');

var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var url = "http://www.ora.com:80/goodparts?q#fragment";

var result = parse_url.exec(url);
var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];

for(var i = 0; i < result.length; i++) {
  document.writeln(names[i] + ': ' + result[i]);
}