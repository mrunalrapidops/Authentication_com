var express = require("express");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var morgan = require("morgan"); //login part
var app = express();
app.use(morgan('dev'));
app.use(cookieParser());// make cookie are in Action req.cookies
app.use(session({secret:'secretkey',saveUninitialized:true,resave:true,cookie:{maxAge:6000}}));
app.get('/',function(req,res,next){
    if(req.session.views){
        req.session.views++;
        res.setHeader('content-Type','text-html')
        res.write('<p>'+req.session.views+'</p>');
        console.log("req.cookies"+req.cookies);
        console.log("------------------------");
        console.log("req.session"+req.session);
        console.log("------------------------");
        console.log("req.session.id"+req.session.id);
        console.log("------------------------");
        res.end()
    }else{
        req.session.views = 1
        res.end('refress page')
    }
})
app.listen(1234,function(){
    console.log("document is ready");
})