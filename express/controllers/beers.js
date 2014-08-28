var Model = require("./../models/beer");
var msg = '';


module.exports = {
	create: function(req, res, callback){
		var dados = req.body;
		var model = new Model(dados);

		model.save(function (err, data) {
		  callback(req,res,err,data,'Cerveja Criada: ');
		});
	},
	retrieve:function(req, res, callback){
		Model.find(function (err, data) {
			callback(req,res,err,data,'Listando Cervejas');
	});
	},
	getBeer:function(req, res, callback){
		var query = { _id: req.params.id };
		Model.findOne(query, function (err, data) {
			callback(req,res,err,data,'Cerveja Encontrada:');
		});
	},
	update: function(req, res, callback){
		var query = { _id: req.params.id };
		var mod = req.body;

		Model.update(query, mod, function (err, data) {
		  callback(req,res,err,data,'Cerveja Atualizada:');
		});

	},
	remove: function(req, res, callback){
		var query = { _id: req.params.id };
		Model.remove(query, function (err, data) {
		  callback(req,res,err,data,'Cerveja Excluida:');
		});
	}
}

