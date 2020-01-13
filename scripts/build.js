const sass = require("sassp")
const cssTreeify = require("css-treeify")
const fs = require("fs-extra")
const globby = require("globby")
const path = require("path-extra")

module.exports = (async () => {
	const themes = await globby("themes/*.sass", { cwd: path.resolve(__dirname, "..") })
	themes.forEach(async (theme) => {
		const { css } = await sass.render({ file: path.resolve(__dirname, "..", theme) })
		await fs.writeJSON(path.resolve(__dirname, "..", `${path.base(theme)}.json`), cssTreeify(css.toString()))
	})
})()
