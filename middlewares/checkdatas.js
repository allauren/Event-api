const Event = require('../models/Event')

let isThere = (data) =>
{
	if (!data)
		Promise.reject('Invalid data')
	Promise.resolve('ok')
}
/*still missing checking datas and all but laterXXX*/
module.exports = {

	post : (req, callback) =>{
		let newEvent = new Event(req.body.name, req.body.cookieId, req.body.referer, req.body.ip, req.body.createdAt)
		if (!newEvent.name || !newEvent.referer)
			callback('wrong data')
		if (!newEvent.cookieId)
			newEvent.cookieId = req.cookies
		if (!newEvent.ip)
			newEvent.ip = req.ip
		callback(null, newEvent)
	},
	num : (req, callback) =>{
		let ret = parseInt(req.params.num, 10)
		if (!ret || ret < 1)
			callback('wrong request')
		callback(null, ret)
	}
}
