import test from "ava"
import PrettyError from "pretty-error"
import importModules from "import-modules"
import _ from "lodash"

const error = new Error("Test error.")

const modules = _.pickBy(importModules(".", { fileExtensions: [".json"] }), (_, name) => name !== "package")

_.forOwn(_.pickBy(modules, (val) => val !== "package"), (data, name) => {
	test(name, (t) => {
		const pe = new PrettyError()
		pe.appendStyle(data)
		t.snapshot(pe.render(error))
	})
})
