const mongoose = require ('mongoose')
const Event = require('../models/Event')
const Dashboard = require('../models/dashboard')

let Schema =  mongoose.Schema
let template = new Schema({
	name: String,
	cookieId: String,
	referer: String,
	ip: String,
	createdAt: { type: Date, default: Date.now },
}, {collection: 'events'})
let event = mongoose.model('Events', template);

/* event is used to get all type of request to mongo API*/

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
		},
	/*dashboard : (callback) => {
 XXX		let ret = new Object()
		event.distinct('name').exec((err, data) =>{
			{
				ret .eventsbyname = {
					 unique name 
				}}
				if (err)
					callback(err)
		// get all unique data and then require them to Mongo 
			data.forEach((elem, index) =>{
				event.find({'name' : elem}).lean().exec((error, data2) => {
					if (err)
						callback(err)
				{
					unique name : {
						all evemts
					}
				}
				})
			})
			console.log(data)
		})
		// should work same with the date data, only had to convert Datatype into miliseconds in order to get minutes thanks to division 
	}*/
}

