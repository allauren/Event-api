module.exports = class {
	constructor(name, cookieId, referer, ip, createdAt) {
		this.name = name
		this.cookieId = cookieId
		this.referer = referer
		this.ip = ip
		this.createdAt = createdAt
	}
}
