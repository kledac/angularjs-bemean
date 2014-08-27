var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshop-pelotas');

var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao.', err)
});
db.on('open', function () {
  console.log('Conexão aberta.')
});

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Osvaldinho' });
kitty.save(function (err, data) {
  if (err){
	console.log('Erro: ', err);
  }
  console.log('meow', data);
});


