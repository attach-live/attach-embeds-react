// region import
import React from 'react'
import uuid from 'nanoid'
import * as attach from '@attach/attach-embeds'

// utilities
import units from './units'
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
			this.state = { visibility: 'hidden' }
			this.unitId = uuid()
			this.iframeLoaded = false
			this.iframeRef = React.createRef()
			this.onLoad = this.onLoad.bind(this)
			this.sendMessage = this.sendMessage.bind(this)
			this.updateProperties = this.updateProperties.bind(this)
		}

		componentDidUpdate(prevProps, prevState) {
			if (prevProps.properties !== this.props.properties) {
				this.updateProperties()
			}
		}

		sendMessage(type, data) {
			const message = {
				data,
				meta: {
					from: 'main',
					to: name,
					type,
				},
			}

			this.iframeRef.current.contentWindow.postMessage(JSON.stringify(message))
		}

		updateProperties() {
			if (this.iframeLoaded) {
				this.sendMessage('UPDATE_PROPERTIES', { properties: this.props.properties })
			}
		}

		onLoad() {
			this.setState({ visibility: 'visible' })
			this.iframeLoaded = true
			this.sendMessage('START_EMBED', {
				unitId: this.unitId,
				instanceId: window.attachInstanceId,
				properties: this.props.properties,
			})
		}

		render() {
			const { className = '', style = {} } = this.props

			return (
				<iframe
					ref={this.iframeRef}
					data-unit-id={this.unitId}
					className={`attach-embed ${className}`}
					onLoad={this.onLoad}
					src={path}
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
