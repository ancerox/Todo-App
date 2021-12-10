require('colors');
const {inquirerMenu,pause,readInput,listDeletedTasks,confirm,checkComplete} = require('./helpers/inquirer.js')
const Task = require('./models/task.js')
const Tasks = require('./models/tasks.js')
const {saveDB,readTasks} = require('./helpers/saveFile');

const main = async() => {

// console.clear();

    let opt = '';
    const tasks = new Tasks();
    
    do {
        
        
        const tasksDB = readTasks();

        if (tasksDB){
            tasks.readTasksFromArray( tasksDB );
        }


        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Description: ')
                tasks.createTask(desc);
            break;
        
            case '2':
                tasks.tasksList();
            break;

            case '3':
                tasks.listCompletedIncomplete(true);
            break;

            case '4':
                tasks.listCompletedIncomplete(false);
            break;
            case '5':
                const ids = await checkComplete(tasks.arrayList);
                tasks.toggleCompleted(ids);
            break;
            case '6':
                const id =  await listDeletedTasks(tasks.arrayList);
                if (id !== '0'){
                        const ok = await confirm('Are you sure?');
                        if(ok){
                            tasks.removeTask(id);
                            console.log('Task Removed');
                        }
                    }

            break;
        }
        // console.log(opt);

        saveDB(tasks.arrayList);
        await pause();

    } while (opt !== '0');


}

main();