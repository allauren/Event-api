const mongoose = require ('mongoose')
const keys = require ('../config/keys')

let Schema =  mongoose.Schema
let template = new Schema({
	name: String,
	cookieId: String,
	referer: String,
	ip: String,
	createdAt: Date,
})
