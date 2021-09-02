import semver from 'semver'
import fs from 'fs'

export default {
  name: 'check-node-version',

  hooks: {
    validateProject(project) {
      const data = fs.readFileSync('package.json')
      const { engines } = JSON.parse(data.toString())
      const { node } = engines
      if (!semver.satisfies(process.version, node)) {
        throw new Error(
          `The current node version ${process.version} does not satisfy the required version ${node}.`,
        )
      }
    },
  },
}
