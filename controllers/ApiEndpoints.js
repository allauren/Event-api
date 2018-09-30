const database = require('../database/database')
const parser = require('../middlewares/checkdatas')

module.exports = (app) =>{
	app.post ('/api/events', (req, res) =>{
			let falty = (err) =>{
				return res.status(400).send('error' + err);
			};
			parser.post(req, (err, data) =>{
				if (err)
					returnfalty(err)
				database.post(data, (err, data)=>{
				if (err)
					return falty(err)
				 res.status(200).send('ok')
				})
			})
		})

	app.get ('/api/events', (req, res) =>{
		database.get(0, (err, data) =>
			{
				if (err)
					return res.status(400).send('error' + err);
				res.json(data)
			})
		})

	app.get ('/api/events/:num', (req, res) => {
		parser.num (req, (err, num) =>{
			if (err)
				return res.status(400).send('error' + err);
			database.get(num, (err, data) =>
				{
					if (err)
						return res.status(400).send('error' + err);
					res.json(data)
				})
			})
		})

	app.get ('/api/dashboard', (req, res) => {
			database.dashboard()
		})
}
