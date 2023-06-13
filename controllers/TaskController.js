
const Task = require('../models/task');
const TaskRouter = require('express').Router();


TaskRouter.get('/', async (req, res) => {
    try {
        let allTasks = await new Task().GetAllActiveTasks();
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(500).json({ error });
    }
});

TaskRouter.post('/add', async (req, res) => {
    let { title, description } = req.body;

    let task = new Task(title, description);

    try {
        let result = await task.InsertNewTask();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error })
    }
});

TaskRouter.put('/:id', async (req, res) => {
    let {id} = req.params
    let {title, description} = req.body;
    try {
        let result = await new Task(title, description).UpdateTaskById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = TaskRouter;