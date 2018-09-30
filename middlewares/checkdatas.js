const Event = require('../models/Event')
const push = require('../database/database')

let getip = (req) =>
{
	let ip = req.ip
	if (!ip)
		ip = req.connection.remoteAddress
}

/*still missing checking datas and all but laterXXX*/
module.exports = (req, push) =>
{
	/*promise.all(XXX) of promised parsing functions)*/
	push(req);
}
