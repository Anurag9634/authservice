const UserRepository  = require('../repository/user-repository');

class UserService
{
    constructor(){
        this.userRepository =  new UserRepository();
    }

    async create(data){
        try{
            const user = await this.userRepository.create(data);
            return user;
        }
        catch(error){
            console.log('there was an error creating on service layer');
            throw {error};
        }
     
    }

    async destroy(userId){
        try{
            const user = await this.userRepository.destroy(userId);
            return user;
        }
        catch(error){
            console.log('there was an error creating on service layer');
            throw {error};
        }
     
    }

}

module.exports = UserService;