const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const {PORT}  = require('./config/serverConfig');
const apiroutes = require('./routes/index')

const prepareAndStartServer = ()=>{
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api', apiroutes)
       app.listen(PORT, ()=>{
        console.log( `Server started on port : ${PORT}` );
  
  })
}

prepareAndStartServer();