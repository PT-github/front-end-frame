let config
console.log(process.env)
if (process.env.NODE_ENV.indexOf('test') !== -1) {
	config = require('./test')
} else if (process.env.NODE_ENV === 'production') {
	config = require('./prod')
} else {
	config = require('./dev')
}
export default config