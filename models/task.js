const DB = require('../utils/db');

class Task {
    title;
    description;
    createdAt;
    isActive;

    constructor(title="", description="") {
        this.title = title;
        this.description = description;
        this.createdAt = Date.now();
        this.isActive = true;
    }


    async GetAllActiveTasks() {
        try {
            return await new DB().FindAll('tasks', { isActive: true });
        } catch (error) {
            return error;
        }
    }

    async GetAllTask() {
        try {
            return await new DB().FindAll('tasks');
        } catch (error) {
            return error;
        }
    }

    async InsertNewTask() {
        try {
            return await new DB().Insert('tasks', this); 
        } catch (error) {
            return error;
        } 
    }

    async UpdateTaskById(id) {
        try {
            return await new DB().UpdateDocById('tasks', id, this);
        } catch (error) {
            console.log(error);
            return error;
        } 
    }
}

module.exports = Task;