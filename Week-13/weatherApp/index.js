var http = require("http")
var address = process.argv[2]
var url = `http://api.openweathermap.org/data/2.5/weather?q=${address} &units=metric&appid=e827ceada71e1f544cfcc045e7a75c66`
var server = http.createServer(function(request,response){
var request = require("request");
request(url, function(body) {
var data = JSON.parse(body);
if(!address){
response.write("<h1>" + 'Please enter city name'+ "</h1>");
response.end();
}
response.write("<h1>"+ 'City Name : ' + data['name'] + '<br>' + "</h1>");
response.write("<h2>"+ 'Temperature : ' + data.main['temp'] + '<br>' + "</h2>");
response.write("<h2>"+ 'Sunset Time : ' + new Date(data.sys['sunset']*1000) + "</h2>");
response.end();
});
}).listen(8081);