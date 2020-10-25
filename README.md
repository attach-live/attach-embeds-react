# Attach Embeds React

React components for Attach Embeds

## Installation

npm

```
$ npm install --save attach-embeds attach-embeds-react
```

yarn

```
$ yarn add attach-embeds attach-embeds-react
```

## Usage

```js
import React from 'react'
import { attach, Reactions, Preview } from 'attach-embeds-react'

class App extends React.Component {
	componentDidMount() {
		if (!attach.isInitialized()) {
			attach.setProperties({
				'attach:item': `https://www.attach.live`,
				'attach:reactions:hide-sections': ['comments', 'videos'],
			})

			attach.initialize()
		}
	}

	render() {
		return (
			<>
				<div>
					<Reactions item="https://developers.attach.live" />
				</div>
				<div>
					<Reactions properties={{ hide-sections: 'videos' }} />
				</div>
				<div>
					<Preview />
				</div>
			</>
		)
	}
}
```

## attach

Embeds API, convenient re-export from `attach-embeds`

## Components

All components accept these common props:

- `className`, `style`
- `properties` - object, set [properties](https://github.com/attach-live/attach-properties) local to the embed
- `item` - same as setting `properties={{ 'attach:item': '...' }}`

### Reactions

Renders the reactions embed.

### Preview

Renders the preview embed.
