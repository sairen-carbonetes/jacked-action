// Set workspace tools
const { execSync } = require('child_process');

try {
    // download the carbonetes/jacked binary
    execSync('curl -sSfL https://raw.githubusercontent.com/carbonetes/jacked/main/install.sh | sh -s --');
    execSync('jacked')
    console.log('Jacked binary installed.');
} catch (error) {
    console.error(`Set Workspace Error: ${error.message}`);
}
