/* importar as configurações do servidor */
const app = require('./config/server');


/* Extartar a porta do servidor */
const server = app.listen(80, () => {
	console.log('Servidor Online');
})

var io = require('socket.io').listen(server);

app.set('io', io);

/* criar uma conexão por websocket */
io.on('connection', (socket) => {
    console.log('usuario conectou')

    socket.on('disconnect', () => {
    	console.log('usuario desconectou')
    })

    socket.on('msgParaServidor', (data) => {
    	/* dialogos */
    	socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});

    	socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem})

    	/* partipantes */
    	if(parseInt(data.atualizar_nome) == 0) {
    	socket.emit('participantesParaCliente', {apelido: data.apelido});

    	socket.broadcast.emit('participantesParaCliente', {apelido: data.apelido})
    	}
    	
    })
});