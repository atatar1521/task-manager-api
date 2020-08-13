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
    res.sendFile(path.join(__dirname + '/signup.html'));
});
app.get('/main.js',function(req,res){
    res.sendFile(path.join(__dirname + '/main.js')); 
});


module.exports = app
  
