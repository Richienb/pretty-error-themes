## Adding your own theme

1. Fork this repo and create a new branch.
1. Run `yarn` or `npm i` to install the devdependencies.
1. In that new branch, add a sass file in the `themes` directory for your theme and add your styles which would later be parsed into JSON for `pe.appendStyle`. You can demo it with `yarn demo <theme name>` or `npm run demo <theme name>`
1. Add the name of the file (excluding extension) to the theme list in the [README](https://github.com/Richienb/pretty-error-themes#themes).
1. Check that `yarn test` (or `npm run test`) passes.
1. Open a PR against the master branch of this repository.
