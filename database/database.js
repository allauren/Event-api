const mongoose = require ('mongoose')
const keys = require ('../config/keys')
const Event = require('../models/Event')

let Schema =  mongoose.Schema
let template = new Schema({
	name: String,
	cookieId: String,
	referer: String,
	ip: String,
	createdAt: { type: Date, default: Date.now },
}, {collection: 'events'})
let event = mongoose.model('Events', template);

module.exports = {
	post : (data, callback) =>{
			let newEvent = new event({
			name: data.name,
			cookieId: data.cookieId,
			referer: data.referer,
			ip: data.ip,
			createdAt: data.createdAt,
			})
			console.log(newEvent)
			return newEvent.save((err) =>{
				if (err)
					 return callback('mongo' + err)
				callback(null, 'ok')
			})
		},
	get : (x, callback) =>{
		event.find().lean().limit(x).exec((err, data) => {
				if (err)
					callback (err)
				 callback (null, data)
			})
		}
}
