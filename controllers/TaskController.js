
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

TaskRouter.get('/:id', async (req, res) => {
    let { id } = req.params;
    try {
        let task = await new Task().GetTaskByID(id);
        if (task.title == undefined) 
            res.status(404).json({ message: 'task not found', task });
        else
            res.status(200).json(task);
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

// NoteRouter.put('/:id', async (req, res) => {
//     let {id} = req.params;
//     let {title, description} = req.body;
//     try {
//         let result = await new Note(title, description).UpdateNoteById(id);
//         res.status(200).json(result);
//     } catch (error) {
//         res.status(500).json({ error });
//     }
// });

// NoteRouter.delete('/:id', async (req, res) => {
//     let {id} = req.params;
//     try {
//         let result = await new Note().DeleteNote(id);
//         res.status(200).json(result);
//     } catch (error) {
//         es.status(500).json({ error });
//     }
// });


module.exports = TaskRouter;