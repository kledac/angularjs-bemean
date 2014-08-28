var express = require('express');
var router = express.Router();
var Controller = require('./../controllers/beers');

var cb = function(req,res,err,data,mensagem){
	if (err){
		    console.log('Erro: ', err);
		    msg =   'Erro: '  + err;
		  }else{
		    console.log(mensagem, data);    
		    msg = data;
		  }
   res.render('beers/list', { title: 'Adega Be MEAN', msg: mensagem, beers:data });
}

var cbGet = function(req,res,err,data,mensagem){
	if (err){
		    console.log('Erro: ', err);
		    msg =   'Erro: '  + err;
		  }else{
		    console.log(mensagem, data);    
		    msg = data;
		  }
   res.render('beers/get', { title: 'Adega Be MEAN', msg: mensagem, beer:data });
}

var cbEdit = function(req,res,err,data,mensagem){
    
    if (err){
        console.log('Erro: ', err);
        msg =   'Erro: '  + err;
      }else{
        console.log(mensagem, data);    
        msg = data;
      }
    
    res.render('beers/edit', { title: 'Adega Be MEAN', msg: 'Alteração de cerveja', beer:data });
}

var cbDelete = function(req,res,err,data,mensagem){
    
    if (err){
        console.log('Erro: ', err);
        msg =   'Erro: '  + err;
      }else{
        console.log(mensagem, data);    
        msg = data;
      }
    
    res.render('beers/delete', { title: 'Adega Be MEAN', msg: 'Excluir cerveja', beer:data });
}


router.get('/create', function(req, res) {
  res.render('beers/create', { title: 'Adega Be MEAN', msg: 'Criar cerveja' });
});


router.get('/:id/edit', function(req, res) {
  Controller.getBeer(req,res, cbEdit)
});


router.get('/:id/delete', function(req, res) {
  Controller.getBeer(req,res, cbDelete)
});




router.get('/:id', function(req, res) {
  Controller.getBeer(req,res,cbGet);
});

/* GET home page. */
router.get('/', function(req, res) {
  Controller.retrieve(req,res,cb);
});



module.exports = router;
