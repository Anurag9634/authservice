const express = require('express');
const UserController = require('../../controller/user-controller');
const {AuthRequestValidator} = require('../../middlewares/index');
const v1route = express.Router();

v1route.post('/signup',AuthRequestValidator.validateUserAuth,UserController.create)
v1route.post('/signin',AuthRequestValidator.validateUserAuth, UserController.signIn)

module.exports = v1route;