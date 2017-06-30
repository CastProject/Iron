/*
    fetch.js - Code to fetch packages
    Copyright (c) 2017 Isaac Trimble-Pederson

    This software is Free Software licensed under the MIT License; you are
    free to use it under those terms - please see LICENSE.
*/

let GithubApi = require('github')

let github = new GitHubApi({
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    headers: {
        "user-agent": "CastProject-Iron-PackageManager" // GitHub is happy with a unique user agent
    },
    Promise: require('bluebird'),
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000
});

function fetch (object) {
    // TODO: Verify Ironfile for consistency
    
    // Assuming object is all good
    if (object.source == "github") {
        let keyParts = object.key.split('/')
        let repoOwner = keyParts[0]
        let repo = keyParts[1]
        console.log(repoOwner +" " + repo)
    }
}

module.exports {
    fetch
}