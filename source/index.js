// region import
import React from 'react'
import uuid from 'nanoid'
import * as attach from '@attach/attach-embeds'
// endregion

// region embed
const embed = name =>
	class Embed extends React.Component {
		constructor(props) {
			super(props)
			this.embedId = props.embedId || uuid()
			this.updateProperties = this.updateProperties.bind(this)
			this.getMergedProperties = this.getMergedProperties.bind(this)
		}

		componentDidMount() {
			attach.render()
		}

		componentDidUpdate(prevProps, prevState) {
			if (prevProps.properties !== this.props.properties || prevProps.item !== this.props.item) {
				this.updateProperties()
			}
		}

		getMergedProperties() {
			const properties = { ...this.props.properties }
			if (this.props.item) {
				properties['attach:item'] = this.props.item
			}
			return properties
		}

		updateProperties() {
			attach.setEmbedProperties(this.embedId, this.getMergedProperties())
		}

		render() {
			const { className = '', style = {}, properties = {}, item = '' } = this.props

			return (
				<div
					data-embed-id={this.embedId}
					data-property-item={item}
					data-properties={JSON.stringify(properties)}
					className={`attach-${name} ${className}`}
					style={style}
				/>
			)
		}
	}

// endregion

// region export
export { attach }
export const Preview = embed('preview')
export const Reactions = embed('reactions')
export const Item = embed('item')
export const Profile = embed('profile')
export const Video = embed('video')
export const Comment = embed('comment')
// endregion
