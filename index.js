const core = require('@actions/core');
const exec = require('@actions/exec');

const cmdExec = require('node:child_process');
const url = "https://raw.githubusercontent.com/carbonetes/jacked/main/install.sh"

// Get input
const directory = core.getInput('directory', { required: true })

async function run() {
    try {
        // Download and install the script
        await exec.exec('curl', ['-sSfL', url, '|', 'sh']);
        await exec.exec('chmod', ['+x', 'script.sh']);
        await exec.exec('sudo', ['bash', './script.sh']);

        // Installation successful
        core.info('Script has been installed');

        // Call the binary
        await exec.exec('jacked');
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();