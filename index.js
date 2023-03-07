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
        await downloadBinary();

        // Call the binary
        await exec.exec('jacked');
    } catch (error) {
        core.setFailed(error.message);
    }
}

downloadBinary() {
    cmdExec(curlArgs, (err, stdout, stderr) => {
        if (err) {
            console.error("curl cmdExec Error: ", err);
            return;
        }
        console.log(stdout);
    });
}

run();