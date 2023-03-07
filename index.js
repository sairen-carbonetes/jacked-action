const core = require('@actions/core');
const exec = require('@actions/exec');

const cmdExec = require('node:child_process');

// Get input
const directory = core.getInput('directory', { required: true })

async function run() {
    try {
        // Download and install the script
        const response = await fetch('https://raw.githubusercontent.com/carbonetes/jacked/main/install.sh');
        const script = await response.text();

        // Save the script to a file
        await writeFile('./install.sh', script);

        // Make the script executable
        await exec.exec('chmod', ['+x', './install.sh']);

        // Run the script with the -d option to specify the installation directory
        await exec.exec('./install.sh', ['-d', '/usr/local/bin']);

        // Installation successful
        core.info('Jacked has been installed');

        // Call the binary
        await exec.exec('jacked');

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();