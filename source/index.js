// region import
import React from 'react'
import uuid from 'nanoid'
import * as attach from '@attach/attach-embeds'

// utilities
import units from './units'
import querify from './querify'
// endregion

// region embed
const embed = name => {
	const path = units[name].path
	const webrtcAttributes = units[name].webrtc
		? {
				allowusermedia: true,
				allowfullscreen: true,
				webkitallowfullscreen: true,
				mozallowfullscreen: true,
				allow: 'camera; microphone; autoplay; fullscreen',
		  }
		: {}

	return class Embed extends React.Component {
		constructor(props) {
			super(props)
			this.state = { visibility: 'hidden', unitId: uuid() }
			this.onLoad = this.onLoad.bind(this)
		}

		onLoad() {
			this.setState({ visibility: 'visible' })
		}

		render() {
			const { className = '', style = {}, properties = {} } = this.props

			return (
				<iframe
					data-unit-id={this.state.unitId}
					className={`attach-embed ${className}`}
					onLoad={this.onLoad}
					src={`${path}#${querify({
						...properties,
						'attach:instance-id': attach.getInstanceId(),
						'attach:unit-id': this.state.unitId,
					})}`}
					style={{
						display: 'block',
						width: '100%',
						height: '100%',
						padding: 0,
						margin: 0,
						border: 'none',
						visibility: this.state.visibility,
						...style,
					}}
					{...webrtcAttributes}
				/>
			)
		}
	}
}
// endregion

// region export
export { attach }
export const Preview = embed('preview')
export const Reactions = embed('reactions')
// endregion
