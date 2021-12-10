const inquirer = require('inquirer');
require('colors');

const menuOpts = [{
    type: 'list',
    name: 'opt',
    message: 'What would you like to do',
    choices: [
        {
            value: '1',
            name: `1. Create a task`.white
        },
        {
            value: '2',
            name: `2. List Tasks`.white
        },
        {
            value: '3',
            name: `3. List Completed Tasks`.white 
        },
        {
            value: '4',
            name: `4. List Pending Tasks`.white
        },
        {
            value: '5',
            name: `5. Complete Task(s)`.white
        },
        {
            value: '6',
            name: `6. Remove Task`.white
        },
        {
            value: '0',
            name: `0. Get Out`.white
        },
    ]


}

]

const inquirerMenu = async ( ) => {

    console.clear()
    console.log('============================'.green);
    console.log('Select One Option');
    console.log('============================\n'.green);
    
    const {opt} = await inquirer.prompt(menuOpts)
    return opt;

}

const pause = async ( ) => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'Enter'.green} To Continue`

        }
    ]
    console.log('\n')
    await inquirer.prompt(question);
     




}

const readInput = async (message) =>{

    const question = [
    {
        type: 'input',
        name: 'desc',
        message,
        validate (value){
            if(value.length === 0){
                return 'Please enter a valid Task'
            }
            return true;
        }
    }
];

    const {desc} = await inquirer.prompt(question);
    return desc;

}

const listDeletedTasks  = async ( tasks = [] ) => {

    const choices = tasks.map((task,i) => {

        let inx = `${i + 1}`
     return {
         
        value: task.id,
        name: `${inx} - ${task.desc}`

     }
     })

     choices.unshift({
         value: '0',
         name: 'Go Back'
     })

     const questions = [
         {
             type: 'list',
             name: 'id',
             message: 'delete',
             choices

         }
     ]

  const {id} =  await inquirer.prompt(questions);
  return id;

 }

 const confirm = async ( message) => {

    const opt = [
        {
            message,
            type: 'confirm',
            name: 'ok'
        }
    ];

    const { ok} = await inquirer.prompt(opt);
    return ok;

  }

  const checkComplete  = async ( tasks = [] ) => {

    const choices = tasks.map((task,i) => {

        let inx = `${i + 1}`
     return {
        value: task.id,
        name: `${inx} - ${task.desc}`,
        checked: (task.completedIn) ? true : false,
     }
     })


     const question = [
         {
             type: 'checkbox',
             name: 'ids',
             message: 'Checked',
             choices

         }
     ]

  const {ids} =  await inquirer.prompt(question);
  return ids;

 }


module.exports = {

inquirerMenu,
pause,
readInput,
listDeletedTasks,
confirm,
checkComplete

}