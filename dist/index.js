// Set workspace tools
const { execSync } = require('child_process');

try {
    // Clone the carbonetes/jacked repository
    execSync('git clone https://github.com/carbonetes/jacked.git');

    // Install Go 1.19
    // Download Go tarball
    execSync('curl -O https://go.dev/dl/go1.19.linux-amd64.tar.gz');

    // Extract tarball to /usr/local
    execSync('sudo tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz');

    console.log('Go installed successfully.');

    console.log('Jacked repository cloned and Go installed successfully.');
} catch (error) {
    console.error(`Set Workspace Error: ${error.message}`);
}
