// Carregando o File System
import fs from "fs";

const readMarkDown = path => fs.readdirSync(path);

const getArgs = () => arguments = process.argv.splice(2, process.argv.length - 1);

const validateArgs = argvs => {
    const validate = (argv || []).length < 4 ? false : true;

    if(!validate){
        console.log("Quantidade de parametros incorreta!")
        return;
    }
}


const getPath = args => {

    const path =

        fs.readdir("/home/user", function (err, files) {
            if (err) {

                return;
            }
        });
}



export default readMarkDown;