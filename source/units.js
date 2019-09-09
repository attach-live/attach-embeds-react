// region setup
// from webpack
const prefix = PREFIX || ''

// path
const getPath = unit => `https://${prefix}embeds.attach.live/v1/${unit}.html`
// endregion

// region export
export default {
	preview: {
		path: getPath('preview'),
	},
	reactions: {
		path: getPath('reactions'),
	},
}
// endregion
