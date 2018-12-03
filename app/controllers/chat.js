module.exports.startChat = (app, req, res) => {

	const dadosForm = req.body;

	req.assert('apelido', 'Nome ou apelido tem que ser obrigátorio').notEmpty();
	req.assert('apelido', 'Nome ou apelido tem que ter entre 3 e 15 caracteres').len(3, 15);

	const erros = req.validationErrors();

	if(erros) {
		res.render('index', {validacao: erros});
		return;
	}

	app.get('io').emit('msgParaCliente',
	 {apelido: dadosForm.apelido, mensagem: ' acabou de entrar no chat'});

   res.render('chat', {dadosForm: dadosForm});
}