var express = require('express');
var router = express.Router();
var Controller = require('./../../controllers/beers');

var callbackReq = function(req,res,err,data,mensagem){
	if (err){
		    console.log('Erro: ', err);
		    msg =   'Erro: '  + err;
		  }else{
		    console.log(mensagem, data);    
		    msg = data;
		  }
   res.json(msg);
}


/* GET users listing. */
router.get('/', function(req, res) {
	Controller.retrieve(req,res,callbackReq);
});

router.get('/:id', function(req, res) {
	Controller.getBeer(req,res,callbackReq);
});

/* Create Beers */
router.post('/', function(req, res) {
	Controller.create(req,res,callbackReq);
});

router.put('/:id', function(req, res) {
	Controller.update(req,res,callbackReq);
});

router.delete('/:id', function(req, res) {
	Controller.remove(req,res,callbackReq);
});


module.exports = router;
