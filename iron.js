#!/usr/bin/env node

// Get package.json for information
let ironPackage = require('./package.json')
let ironVersion = ironPackage.version

// Get commandline args
let process = require('process')
let args = process.argv.slice(2)

switch (args[0]) {
  case 'info': {
    console.log('Cast v' + ironVersion)
    console.log('A Package Manager for Cast')
    console.log('---')
    console.log('Cast is Free Software under the terms of the MIT License')
    console.log('See Iron\'s repository: https://github.com/CastProject/Iron')
    break
  }
  case undefined: {
    console.log('Cast: No arguments provided.')
    break
  }
}
