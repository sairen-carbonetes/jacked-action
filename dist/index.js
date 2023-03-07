// Set workspace tools
const { execSync } = require('child_process');

try {
  // Clone the carbonetes/jacked repository
  execSync('git clone https://github.com/carbonetes/jacked.git');

  // Install Go 1.19
  execSync('curl -O https://go.dev/dl/go1.19.linux-amd64.tar.gz');
  execSync('tar -xvf go1.19.linux-amd64.tar.gz');
  execSync('sudo mv go /usr/local');

  console.log('Jacked repository cloned and Go installed successfully.');
} catch (error) {
  console.error(`Set Workspace Error: ${error.message}`);
}
