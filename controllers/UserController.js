const User = require('../models/user');
const UserRouter = require('express').Router();
const jwt = require('jsonwebtoken');

UserRouter.post('/add', async (req, res) => {
    let { email, password } = req.body;

    let user = new User(email, password);

    try {
        let result = await user.InsertNewUser();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error })
    }
});


UserRouter.post('/logIn', async (req, res) => {
    let { email, password} = req.body;
    try {
        let user = await new User().GetUserByEmail(email);
        if (user.length !== 0 && user[0].password === password) {
            const token = jwt.sign({ userId : user[0]._id} , 'secret-key', {expiresIn : '2h'})
            res.status(200).json({token});
        }
        else{
            res.status(404).json(null);
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = UserRouter;