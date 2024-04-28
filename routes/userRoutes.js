const express = require("express");
const usersController = require('../controllers/userController.js');
const userRouter = express.Router();

userRouter.route('/')
    .get(usersController.getAllusers)
    .post(usersController.aduser);
userRouter.route('/:id')
    .put(usersController.replaceuser)
    .delete(usersController.deleteuser)
    .get(usersController.getOneuser)
    .patch(usersController.updateuser)


module.exports = userRouter;