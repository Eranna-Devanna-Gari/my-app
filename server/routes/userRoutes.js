const express = require('express');

const userRouter = express.Router();

const userController = require('../controller/userController.js');


userRouter.post('/addUser', userController.addUser);
userRouter.post('/register', userController.userRegister)
userRouter.get('/getAllUsers', userController.getAllUsers);
userRouter.post('/login', userController.userLogin);

module.exports = userRouter