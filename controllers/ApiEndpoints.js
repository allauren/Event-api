const database = require('../database/database')

module.exports = (app) =>{
	app.post ('/api/events', (req, res) =>{
		//parser
		//if ok push 
		res.json({'message':'coucou'})
		})

	app.get ('/api/events', (req, res) =>{
		database.get(0, (err, data) =>
			{
				if (err)
					return res.json({'message':'coucou'})
				res.json(data)
			})
		})

	// still need to make it variable! XXX
	app.get ('/api/events/:num', (req, res) => {
		database.get(1, (err, data) =>
			{
				if (err)
					return res.json({'message':'coucou'})
				res.json(data)
			})
		})
}
