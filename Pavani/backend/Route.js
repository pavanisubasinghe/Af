const express=require('express');
var routes=express.Router();
var PhaRouter=require('./Controller/PhaRouter');

routes.use('/Pha',PhaRouter);

module.exports=routes;