import semver from 'semver'

export default {
  name: '@yarnpkg/check-node-version',

  factory: require => {
    const fs = require('fs')
    const data = fs.readFileSync('package.json')
    const { engines } = JSON.parse(data.toString())
    const { node } = engines
    return {
      default: {
        hooks: {
          validateProject(project) {
            if (!semver.satisfies(process.version, node)) {
              throw new Error(`The current node version ${process.version} does not satisfy the required version ${node}.`)
            }
          },
        },
      },
    }
  },
}
