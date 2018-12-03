module.exports = (app) => {

	app.post('/chat', (req, res) => {
       app.app.controllers.chat.startChat(app, req, res);
	})

	app.get('/chat', (req, res) => {
       app.app.controllers.chat.startChat(app, req, res);
	})
} 