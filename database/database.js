const mongoose = require ('mongoose')
const keys = require ('../config/keys')
const Event = require('../models/Event')

let Schema =  mongoose.Schema
let template = new Schema({
	name: String,
	cookieId: String,
	referer: String,
	ip: String,
	createdAt: String,
}, {collection: 'events'})
let event = mongoose.model('Events', template);

module.exports = {
	post : (data) =>{
			let newEvent = new event({
			name: data.name,
			cookieId: data.cookieId,
			referer: data.referer,
			ip: data.ip,
			createdAt: data.createdAt,
			})
			return newEvent.save((err) =>{
				if (err)
					throw (err)
			})
		},
	get : (x, callback) =>{
		event.find().lean().limit(0).exec((err, data) => {
				if (err)
					callback (err)
				 callback (null, data)
			})
		}
}
