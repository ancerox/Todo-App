const fs = require('fs');

const path = './db/tasks.json';

const saveDB = ( data ) =>{

    fs.writeFileSync(path, JSON.stringify(data));

}

const readTasks = ( ) => {

    if (fs.existsSync(path)){
        const info  = fs.readFileSync(path,{encoding: 'utf8'});
        const data = JSON.parse(info);
        return data;
    }

}

module.exports = {
    saveDB,
    readTasks
}