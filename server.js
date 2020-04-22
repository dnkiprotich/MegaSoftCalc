var http = require('http');

var operations = {

        add: function(a,b){ return a + b },
        sub: function(a,b){ return a - b },
        mul: function(a,b){ return a * b },
        div: function(a,b){ return a / b }

}
var result = "";
http.createServer(function(req,res){
        var parts =req.url.split("/"),
        op = operations[parts[1]],
        a = parseFloat(parts[2]),
        b = parseFloat(parts[3]);
if (parts[1]==="fact") {
result = factorial(a);
} else{
        result = op ? op(a,b) : "Error";
}
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end("" + result);
} 
).listen(3000);

function factorial(a){
    var result = a;
    for(i=a;i>=2;i--){
        result = result * (i-1);
    }
    return result;
}
console.log("Server runing 3000");