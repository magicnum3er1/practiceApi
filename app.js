var express = require('express');
var app = express();

app.set("view engine", "ejs")


app.get('/', function(req, res){
    res.send('connected');
});
app.get('/home', function(req, res){
    res.render('home');
});

var request = require('request');
request('http://www.reddit.com',function(error, response, body){
if(error){
    console.log("smth wrong")
    console.log("error")
}else {
    if(response.statusCode == 200){
        console.log(body) 
    }
}
})


















app.listen(3000, () => console.log('server connected'));