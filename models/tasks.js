const Task = require('./task')


class Tasks {

    constructor() {
        this._list = {}
    }

    get arrayList() {

        const list = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        });
        return list;
    }

    readTasksFromArray( tasks = []){

        tasks.forEach(task => {
        this._list[task.id] = task;
        })

    }

    tasksList = ( ) =>{

        this.arrayList.forEach((task,i) =>{
            
            let idx = `${i + 1}`.green;
            const {desc,completedIn} = task;
            const state =  (completedIn)  ? 'Completed'.green : 'Pending'.red;
            console.log(`${idx}. ${desc} :: ${state}`);

        });


    }

    listCompletedIncomplete  = ( isCompleted = true ) =>{

        let counter = 0;
        this.arrayList.forEach(task => {
            const { desc , completedIn } = task;
            
            if(isCompleted){
                //show completed
                if (completedIn ){
                    counter +=1;
                    console.log(`${ counter.toString().green} - ${desc.green}`);
                }
            } else if (!isCompleted) {
                //Show incomplete
                if ( !completedIn){
                    counter += 1;
                    console.log(`${ counter.toString().green} - ${desc.red}`);
                }
            }

        });

    }


    
    createTask =  (desc = '') => {

        const task = new Task(desc);
        this._list[task.id] = task;

    }

     confirm = async ( message) => {

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
    
      removeTask = ( id ) => {

        if(this._list[id] ){
            delete this._list[id];
        }

      }
   
    toggleCompleted  = ( ids ) => {

        ids.forEach((id) => {
            const task = this._list[id];
            if (!task.completedIn){
                task.completedIn = new Date().toString();
            }
        })

        this.arrayList.forEach(task => {

            if(!ids.includes(task.id)){
                this._list[task.id].completedIn =null;
            }

        });


    }


}


module.exports = Tasks;