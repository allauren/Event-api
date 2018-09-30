# Even-api
	
	"cookie-parser": "^1.4.3",
    "express": "^4.16.3",
    "mongoose": "^5.3.0"

Utilisation :
	Clonage du repo,
	Npm install (NPM requis)
	Possibilite si vous possedes une base de donnee mongo connectable de soit, faire des tests en prods ou en dev en rajoutant un fichier typea contenant des identifiants compatibles (https://mlab.com/home pour creer un compte provisoire)
	Conseille pour tester l'API :https://www.getpostman.com/ afin de simuler les requetes
	Certains choix sur les cookies, l'ip et l heure meriteraient d'etre remis en question avec plus de temps passe sur le developpement

 Cet API a pour but de recevoir concernant des evenements sur les Endpoints suivants (methode http associee)
	- GET /api/events (liste d'évenements)
	- POST /api/events (création d'un évenement)
	- GET /api/events/1 (récupération d'un évenement)
	XXXX en cour - GET /api/dashboard (dashboard statistiques)

Un event est composé des champs suivants :
- name: nom de l'event
- cookieId: id cookie unique
- referer: source http de l'event
- ip: source ip de l'event
- createdAt: date de création de l'event !!!! en cas de non saisie la date du jour sera remplie, merci de formater en ISO
   
Node modules added to this API


Remarques: 
Travail Non termine, la plupart des Features ont ete implementees cependant la phase de test laisse a desirer
