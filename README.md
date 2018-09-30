# Even-api
A short API 
Réalisation d'une API REST (framework NodeJS au choix) avec 4 endpoints :
- GET /api/events (liste d'évenements)
- POST /api/events (création d'un évenement)
- GET /api/events/1 (récupération d'un évenement)
- GET /api/dashboard (dashboard statistiques)

Un event est composé des champs suivants :
- name: nom de l'event
- cookieId: id cookie unique
- referer: source http de l'event
- ip: source ip de l'event
- createdAt: date de création de l'event

Pour le endpoint Dashboard, les événements sont représentés de la manière suivante:
- eventsByName: Afficher le nombre d'événements par nom (groupé par nom)
- eventsByMinute: Afficher le nombre d'évenements par minute (groupé par minute)

Ajout d'une fonctionnalité supplémentaire au choix (libre)

Livraison du code sur GitHub avec un fichier Readme expliquant comment lancer le projet.  
