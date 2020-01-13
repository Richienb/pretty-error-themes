const meow = require("meow")
const PrettyError = require("pretty-error")

const { input: args } = meow(`
    Usage
      $ demo <name>
`)

const error = new Error("Test error.")

args.forEach((name) => {
	const pe = new PrettyError()
	pe.appendStyle(require(`../${name}`))
	console.log(pe.render(error))
})
