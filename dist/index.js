const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    // Download and install the script
    await exec.exec('curl', ['-sSfL', 'https://raw.githubusercontent.com/carbonetes/jacked/main/install.sh', '|', 'sh', '-s', '--']);

    // Call the binary
    await exec.exec('jacked');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();