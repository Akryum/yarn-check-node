import semver from 'semver'

export = {
  name: 'check-node-version',

  factory: require => {
    const fs = require('fs')
    const data = fs.readFileSync('package.json')
    const { engines } = JSON.parse(data.toString())
    return {
      default: {
        name: 'check-node-version',

        hooks: {
          validateProject(project) {
            if (!engines.node) return
            if (!semver.satisfies(process.version, engines.node)) {
              throw new Error(`The current node version ${process.version} does not satisfy the required version ${engines.node}.`)
            }
          },
        },
      },
    }
  },
}
