var child = require('child_process');
var du = child.exec('gcc ./test/c/main.c -o main && ./main 111111111111111111111111111111111111111111111111111111111111111111111111111111111');

du.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});
du.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});
du.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});