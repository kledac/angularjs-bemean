var http = require('http');
var fs = require("fs");

console.log("Vou ler", Date.now());
console.time("leitura");

//var file = fs.readFileSync("filme.avi");

fs.readFile('filme.avi', function(err, data){
    console.log(data);
});


console.timeEnd("leitura");
console.log("Ja li", Date.now());

var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end(index);
}).listen(3000);

