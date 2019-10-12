const fs = require('fs-extra');
const childProcess = require('child_process');


try {
    console.log('building ....')
    // Remove current dist
    fs.removeSync('./dist/');
    // Copy front-end files
    // fs.copySync('./src/public', './dist/public');
    // fs.copySync('./src/views', './dist/views');
    // Transpile the typescript files
    childProcess.exec('tsc --build tsconfig.json');
} catch (err) {
    console.log(err);
}
