const core = require('@actions/core');
const exec = require('@actions/exec');

// Get input
const directory = core.getInput('directory', { required: true })

async function run() {
    try {
        console.log("User directory input: ", directory)
        // Download and install the script
        await exec.exec('curl', ['-sSfL', 'https://raw.githubusercontent.com/carbonetes/jacked/main/install.sh', '|', 'bash']);

        // Call the binary
        await exec.exec('jacked');
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();