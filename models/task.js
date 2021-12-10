const { v4: uuid4v } = require('uuid');


class Task {

    constructor(desc){
        this.desc = desc;
        this.id = uuid4v();
        this.completedIn = null;
    }

}

module.exports = Task;