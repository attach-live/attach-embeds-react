let embeds

if (typeof ATTACH_ENVIRONMENT === 'string') {
	embeds = require('@attach/attach-embeds')
} else {
	embeds = require('attach-embeds')
}

module.exports = embeds
