let embeds

if (typeof ATTACH_ENVIRONMENT === 'string') {
	try {
		embeds = require('@attach/attach-embeds')
	} catch (err) {
		embeds = require('attach-embeds')
	}
} else {
	embeds = require('attach-embeds')
}

module.exports = embeds
