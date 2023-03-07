const { exec } = require('child_process');

function installJacked() {
    // Download Binary
    console.log("Download Binary");
    exec('curl -sSfL https://raw.githubusercontent.com/carbonetes/jacked/main/install.sh | sh -s --', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec curl error: ${error}`);
            return;
        } else {
            // Call Binary
            exec('jacked', (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
            });
        }
    });
}

installJacked();