var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();
var load           =        require('express-load');
var client         =        require('node-rest-client');
var constants      =        require('./util/Constants');
var router         =        express.Router();
var httpreq        =        require('httpreq');
var moment         =        require('moment');
var engine         =        require('ejs-mate');
var session        =        require('express-session');

app.engine("ejs",engine);
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');
app.use(express.static(__dirname+'/public'));
app.use(session({secret:constants.session.secret}));

app.locals._layoutFile='layout.ejs';

load('model').then('controllers').then('routes').into(app);

app.listen(3000,function(){
    console.log("bindstep rodando na porta 3000");
})