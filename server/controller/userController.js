const { token } = require('morgan');
const dbConfig = require('../config/dbConfig');
const db = require('../model');
const jwt = require('jsonwebtoken');

const User = db.user;
// const {User} = require('../model')

const addUser = async (req,res) => {

    let add = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber 
    }

    try{
        const user = await User.create(add);
       return res.status(200).send(user).json({message: "Thanks for Registering"});
        console.log(user);
    } catch(error){
        return res.status(500).json({message:error.message})
    }
    
}

const getAllUsers = async (req, res) => {
    
    const users = await User.findAll();
    res.status(200).send(users);
}

const userRegister = async (req, res) => {

    const {username, password, email, mobileNumber} = req.body;

    const alreadyExistUser = await User.findOne({where: {username}})
    .catch(
        (err) => {
            console.log('Error : ', err.message);
        }
    );

    if(alreadyExistUser) {
        return res.status(409).json({message: "User with username already exist!"});
    }


    let add = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber 
    }

    try{
        const user = await User.create(add);
        console.log(user);
        return res.status(200).send(user).json({message: "Thanks for Registering"});
    } catch(error){
        return res.status(500).json({message:error.message})
    }
}

const userLogin = async (req, res) => {

    const {username, password} = req.body;

    const userWithUsername = await User.findOne({where: {username}})
    .catch(
        (err) => {
            console.log('Error : ', err.message);
        }
    );

    if(!userWithUsername) {
        return res.status(400).json({message: "username is incorrect"});
    }

    // let passMatch = bcrypt.compareSync(password, userWithUsername.password);

    // if(!passMatch) {
    //     return res.status(400).json({message: "password is incorrect"});
    // }
    if(userWithUsername.password !== password) {
        return res.status(400).json({message: "username or password doesn't match"});
    }

    const jwtToken = jwt.sign(
        ({id: userWithUsername.id, username: userWithUsername.username}),
        dbConfig.JWT_SECRET
    );

    res.status(200).send({token: jwtToken, data : userWithUsername})
}

module.exports = {
    addUser,
    getAllUsers,
    userRegister,
    userLogin
}