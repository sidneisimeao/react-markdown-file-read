#! /usr/bin/env node

import fs from "fs";


// Create reference instance
var myMarked = require('marked');

// Set options
// `highlight` example uses `highlight.js`
myMarked.setOptions({
  renderer: new myMarked.Renderer(),  
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: true
});

const argvs = process.argv.splice(2, process.argv.length - 1);

const validateArgs = argvs => {
    if (argvs.length < 2) {
        console.error("It is expected [path] [destiny]. Received" + argvs.join(' '));
        process.exit(-1);
    }
    return argvs;
}

validateArgs(argvs);

const [path, destiny] = argvs;

fs.readdir(path, function (err, items) {
    items.forEach(item => {

        let file = path + '/' + item;

        fs.readFile(file, 'utf-8', function (err, data) {
            if (err) throw err;

           // let input = `${data}`;
          // console.log(escape(data));
            let newData = myMarked(data)
            
            fs.writeFile('./markdown/super-conversor.html', newData, { enconding: 'utf-8', flag: 'w+' }, function (err) {
                if (err) throw err;
                console.log('Arquivo salvo!');
            });
            
        });
    });
});
