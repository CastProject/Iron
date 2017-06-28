#!/usr/bin/env node
/*
    iron.js - mainfile / executable (?) for the Iron package manager.
    Copyright (c) 2017 Isaac Trimble-Pederson

    This software is Free Software licensed under the MIT License; you are
    free to use it under those terms - please see LICENSE.
*/

// Get package.json for information
let ironPackage = require('./package.json')
let ironVersion = ironPackage.version

// Get commandline args
let process = require('process')
let args = process.argv.slice(2)
let workingDir = process.cwd()

// Load libraries
let IronfileLib = require('./lib/ironfile.js')

switch (args[0]) {
  case 'info': {
    console.log('Cast v' + ironVersion)
    console.log('A Package Manager for Cast')
    console.log('---')
    console.log('Cast is Free Software under the terms of the MIT License')
    console.log('See Iron\'s repository: https://github.com/CastProject/Iron')
    break
  }
  case 'test': {
    console.log('Iron: Testing Ironfile.json...')
    let ironfile = new IronfileLib.Ironfile(workingDir + '/Ironfile.json')
    if (ironfile.validContents) {
      console.log(ironfile.contents)
    }
    break
  }
  case undefined: {
    console.log('Iron: No arguments provided.')
    break
  }
  default: {
    console.log('Iron: Invalid arguments provided: ' + args[0] + ' is not a valid command.')
    break
  }
}
