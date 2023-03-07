const core = require('@actions/core');
const exec = require('@actions/exec');

const cmdExec = require('node:child_process');
const curlArgs = "curl -sSfL https://raw.githubusercontent.com/carbonetes/jacked/main/install.sh | sh -s --"

// Get input
const directory = core.getInput('directory', { required: true })

async function run() {
    try {
        console.log("User directory input: ", directory)
        // Download and install the script
        await exec.exec('curl', ['-sSfL', 'https://raw.githubusercontent.com/carbonetes/jacked/main/install.sh', '|', 'sh', '-s', '--', '-d', '/usr/local/bin']);

        // Call the binary
        await exec.exec('jacked');
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();