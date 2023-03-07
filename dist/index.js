const { exec } = require('child_process');

exec('curl -sSfL https://raw.githubusercontent.com/carbonetes/jacked/main/install.sh | sh -s --', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec curl error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

});

downloadBinary();
callBinary();

function downloadBinary() {
    // Download binary
    exec('curl -sSfL https://raw.githubusercontent.com/carbonetes/jacked/main/install.sh | sh -s --', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec curl error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

function callBinary() {
    // Call the jacked binary
    exec('jacked', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}