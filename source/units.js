// region setup
// from webpack
const prefix = typeof ATTACH_PREFIX === 'string' ? ATTACH_PREFIX : ''

// path
export const basePath = `https://${prefix}embeds.attach.live`
const getPath = unit => `${basePath}/v1/${unit}.html`
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
