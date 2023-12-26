const jwt = require('jsonwebtoken')
const {JWT_KEY} = require('../config/serverConfig')
const bcrypt =  require('bcrypt')
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

    async signIn(email, plainPassword){
        try{
             const user = await this.userRepository.getByEmail(email);
             if(!user){
                 throw {
                    error: 'user not found'
                };
             }        
             const isMatch = this.checkpassword(plainPassword, user.password);
             if(!isMatch){
                 throw {
                    error: 'password is incorrect'};
                  }

              const newJWT = this.createToken({email: user.email, id: user.id}) 
              return newJWT;   
        }
        catch(error){
            console.log('something went wrong in signIn process');
            throw {error};
        }
    }

      createToken(user){
         try{
                  const result = jwt.sign(user, JWT_KEY, {expiresIn: '1h'});
                  return result
         }
         catch(error){
             console.log('there went wrong in creating token',error);
             throw {error};
         }
    }


    verifyToken(token){
        try{
                 const response = jwt.verify(token, JWT_KEY);
                 return response;
        }
        catch(error){
            console.log('there went wrong in creating token', error);
            throw {error};
        }
   }

   checkpassword(userInputPlainPassword, encryptedPassword)
   {  
        try{
                return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
           }
           catch(error){
            console.log('something went wrong while checking password');
            throw{error};
           }
   }


}

module.exports = UserService;