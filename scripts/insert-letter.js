const fs = require('fs');
const p = require('path');
const file = p.resolve(__dirname, '../src/targetFile.js');
let code = fs.readFileSync(file, 'utf8').split('\n');
if (!code[1].startsWith('// X')) {
    code[1] = '// X ' + code[1];
    fs.writeFileSync(file, code.join('\n'));
    console.log('Inserted letter X in targetFile.js');
}
