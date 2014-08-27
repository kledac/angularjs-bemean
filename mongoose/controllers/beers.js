var Model = require("./../models/beers");
var msg = '';



module.exports = {
	create: function(req, res){
		var dados = {
		  name: 'Heineken',
		  description: 'Até q eh boazinha',
		  alcohol: 5.5,
			price: 3.5,
		  category: 'lager'
		}

		var model = new Model(dados);

		model.save(function (err, data) {
		  if (err){
		    console.log('Erro: ', err);
		    msg =   'Erro: '  + err;
		  }
		  else{
		    console.log('Cerveja Inserida', data);
		    msg = 'Cerveja Inserida: ' + JSON.stringify(data);
		   }
		   res.end(msg);
		});
	},
	retrieve:function(req, res){
		Model.find(function (err, data) {
			if(err) {
				console.log(err);
				msg =   'Erro: '  + err;
			} else {
				console.log('Cerveja Encontrada: ', data)
				msg = 'Cerveja Encontrada: ' + JSON.stringify(data);
			}
			res.end(msg);
		});
	},
	update: function(req, res){
		var query = {name: 'Heineken'};
		var mod = {alcohol: 666};
		Model.update(query, mod, function (err, data) {
		  if (err){
		    console.log('Erro: ', err);
		    msg =   'Erro: '  + err;
		  }else{
		    console.log('Cerveja atualizada com sucesso', data);    
		    msg = 'Cerveja Atualizada: ' + JSON.stringify(data);
		  }
		  res.end(msg);
		});

	},
	remove: function(req, res){
		var query = {name: 'Heineken'};
			Model.remove(query, function (err, data) {
			  if (err){
			    console.log('Erro: ', err);
			    msg =   'Erro: '  + err;
			  }else{
			    console.log('Cerveja Excluida com sucesso', data);    
			    msg = 'Cerveja Excluída: ' + JSON.stringify(data);
			  }
			  res.end(msg);
			});

	}
}

