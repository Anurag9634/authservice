const UserService = require('../services/user-service')

 const userService = new UserService();

 async function create(req, res){
    try{
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            message: "user created successfully",
            data : response,
            success  : true,
            err : {}
        });
    }
    catch(error){
        return res.status(500).json({
              message: "something went wrong",
              data : {},
              success  : false,
              err : error
        });
    }
 }



 module.exports = {
    create
 }

  