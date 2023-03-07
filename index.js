/** import */
const https = require('https');
const fs = require('fs');
// npm
const core = require('@actions/core');
const exec = require('@actions/exec');
/**  */

/** var */
var directoryInput;
var scanOption;

/** const */
const DIRECTORY = 'directory';


async function run() {
    try {
        // Download the script using https
        const options = {
            hostname: 'raw.githubusercontent.com',
            path: '/carbonetes/jacked/main/install.sh',
            method: 'GET'
        };
        const request = https.request(options, response => {
            let script = '';
            response.on('data', chunk => {
                script += chunk;
            });
            response.on('end', async () => {
                // Save the script to a file
                await fs.promises.writeFile('./install.sh', script);

                // Make the script executable
                await exec.exec('chmod', ['+x', './install.sh']);

                // Run the script with the -d option to specify the installation directory
                await exec.exec('./install.sh');

                // Installation successful
                core.info('Jacked has been installed');


                // Check scan option based on user's input
                scanOption = checkUserInput();

                // Call the jacked binary
                await constructCommandExec(scanOption)
            });
        });
        request.on('error', error => {
            core.setFailed(error.message);
        });
        request.end();

    } catch (error) {
        core.setFailed(error.message);
    }
}

// Check user's input and set scan option
function checkUserInput() {
    directoryInput = core.getInput('directory', { required: true })
    if (directoryInput !== null || directoryInput !== '') {
        return DIRECTORY;
    }
}

async function constructCommandExec(scanOption) {
    switch (scanOption) {
        case DIRECTORY:
            exec.exec('./bin/jacked', ['-d', directoryInput]);
            break;

        default:
            core.setFailed('Scan Option not found')
            break;
    }
}

// Start Jacked-Action
run();
