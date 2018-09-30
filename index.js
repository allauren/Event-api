const app = require('express')
const mongo = require('mongoose')
const middlewares = require('middlewares')

classe :
Event :
- name: nom de l'event fournis
- cookieId: id cookie unique recupere ou fournis
- referer: source http de l'event 
- ip: source ip de l'event
- createdAt: date de création de l'event
	
listen avec express
app.get ('/api/events',
app.get ('/api/events',
app.post('/api/events/:num', )
app.post('/api/events/:num', )
- GET /api/events (liste d'évenements)
- POST /api/events (création d'un évenement)
- GET /api/events/1 (récupération d'un évenement)
- GET /api/dashboard (dashboard statistiques)

Pour le endpoint Dashboard, les événements sont représentés de la manière suivante:
- eventsByName: Afficher le nombre d'événements par nom (groupé par nom)
- eventsByMinute: Afficher le nombre d'évenements par minute (groupé par minute)
	pas clair!! (interface graphique peut etre ??? possible bonus demande)

modules : mongoose, express potentiellement cookie-session!
