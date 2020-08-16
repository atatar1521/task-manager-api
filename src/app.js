const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
var path = require('path');

const app = express()


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/start.html'));
});
app.get('/signin', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/signin.html'));
});

app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/signup.html'));
});
app.get('js/main.js',function(req,res){
    res.sendFile(path.join(__dirname + 'js/main.js'));
    console.log((__dirname + 'js/main.js')) 
});
app.get('js/homepage.js',function(req,res){
    res.sendFile(path.join(__dirname + 'js/homepage.js'));
    console.log((__dirname + 'js/homepage.js')) 
});


module.exports = app
  
