const { stdin } = require('process');

require('colors');



const showMenu = () => {

    return new Promise(resolve =>{

        console.clear()
        console.log('============================'.green);
        console.log('Select One Option');
        console.log('============================'.green);
    
        console.log(`${'1'.green}. Create a task`)
        console.log(`${'2'.green}. List tasks`)
        console.log(`${'3'.green}. List completed Tasks`)
        console.log(`${'4'.green}. List pendding tasks`)
        console.log(`${'5'.green}. Complete tasks`)
        console.log(`${'6'.green}. Remove Task`)
        console.log(`${'0'.green}. Out`)
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
    
        });
    
        readline.question(`Select one question: `,(opt) => {
    
            readline.close();
            return resolve(opt);
        })
    })

}

const pause = () => {

  return new Promise(resolve => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout, 
    });

    readline.question(`Press ${'enter'.green} to continue `,(opt) => { 
        readline.close();
         resolve();

    })
  })
}

module.exports = {
    showMenu,
    pause
}