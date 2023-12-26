const {User}  = require('../models/index');

class UserRepository{

    async create(data){
       try{      
            const user = await User.create(data);
            console.log(user)
            return user;
          }
          catch(error){
              console.log('there was an error creating on repository layer');
              throw {error};
          }
    }

    async destroy(userid){
        try{
            const user = await User.destroy({
                where: {
                    id : userid
                   }
            });
            return true;
        }
        catch(error){
            console.log('there was an error destroying on repository layer');
            throw {error};
        }
    }
}

module.exports = UserRepository