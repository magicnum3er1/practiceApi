var express = require('express');
var app = express();

var request = require('request');
request('https://jsonplaceholder.typicode.com/users/2',function(error, response, body){

if(!error && response.statusCode == 200){
      var parsedData = JSON.parse(body);
    console.log(parsedData.name + ' lives in ' +  parsedData.address.city)
   
}
})

app.set("view engine", "ejs")


app.get('/', function(req, res){
    res.send('connected');
});


app.get('/home', function(req, res){
    res.render('home');
});




app.listen(3000, () => console.log('server connected'));
