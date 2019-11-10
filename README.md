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
				'attach:reactions:services': ['comments', 'videos'],
			})

			attach.initialize()
		}
	}

	render() {
		return (
			<>
				<div>
					<Reactions />
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

## Reactions

React component.

Props:

- `className`, `style` - forwarded to the iframe

## Preview

React component.

Props:

- `className`, `style` - forwarded to the iframe
