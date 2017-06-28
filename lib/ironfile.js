/*
    ironfile.js - File for loading and working with the Ironfile itself.
    Copyright (c) 2017 Isaac Trimble-Pederson

    This software is Free Software licensed under the MIT License; you are
    free to use it under those terms - please see LICENSE.
*/

let fs = require('fs')

let Ironfile = class {
  constructor (path) {
    if (fs.existsSync(path)) {
      let json = {}

      try {
        json = fs.readFileSync(path, 'utf8')
      } catch (error) {
        console.log('Iron: JSON Parse Error - ' + error)
      }

      this.contents = json
      if (json !== {}) {
        this.validContents = true
      }
    } else {
      console.log('Iron: No JSON file found!')
    }
  }
}

module.exports = {
  Ironfile
}
