/**
 * @description turns {a:1,b:2} into 'a=1&b=2'
 **/
export default parameters =>
	Object.keys(parameters)
		.sort()
		.filter(i => parameters[i] !== undefined)
		.map(i => `${encodeURIComponent(i)}=${encodeURIComponent(parameters[i])}`)
		.join('&')
