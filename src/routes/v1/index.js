const express = require('express');
const UserController = require('../../controller/user-controller')
const v1route = express.Router();

v1route.post('/signup', UserController.create)

module.exports = v1route;