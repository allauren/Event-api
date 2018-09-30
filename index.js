const express = require('express')
const mongo = require('mongoose')
const keys = require('./config/keys')
/* Connecting to database *\
XXX CODE
*/

try {
	mongo.connect(keys.mongoURL)
	console.log('connection success')
}
catch (err) {
	console.error(err);
};


const app = express()
/* all the required requests */
/*
classe :
Event :
- name: nom de l'event fournis
- cookieId: id cookie unique recupere ou fournis
- referer: source http de l'event fournis
- ip: source ip de l'event recupere
- createdAt: date de création de l'event fournis ou recupere 
	
listen avec express
app.get ('/api/events',
app.get ('/api/events',
app.post('/api/events/:num', )
app.get('/api/dashboard', )
- GET /api/events (liste d'évenements)
- POST /api/events (création d'un évenement)
- GET /api/events/1 (récupération d'un évenement)
- GET /api/dashboard (dashboard statistiques)

Pour le endpoint Dashboard, les événements sont représentés de la manière suivante:
- eventsByName: Afficher le nombre d'événements par nom (groupé par nom)
- eventsByMinute: Afficher le nombre d'évenements par minute (groupé par minute)
	pas clair!! (interface graphique peut etre ??? possible bonus demande)

modules : mongoose, express potentiellement cookie-session!
*/
const PORT = process.env.PORT || 3000
	let server = app.listen(PORT)
	console.log('App listens on port ' + PORT);
	server.on('error', (err) =>
	{
		console.log (err)
	})
