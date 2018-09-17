#! /usr/bin/env node

import fs from "fs";

const argvs = process.argv.splice(2, process.argv.length - 1);

const validateArgs = argvs => {
    if (argvs.length < 2) {
        console.error("It is expected [path] [destiny]. Received" + argvs.join(' '));
        process.exit(-1);
    }
    return argvs;
}

const [path, destiny] = argvs;

fs.readdir(path, function (err, items) {
    items.forEach(item => {

        let file = path + '/' + item;

        fs.readFile(file, 'utf-8', function (err, data) {
            if (err) throw err;
            console.log(data);
        });


    });
});

