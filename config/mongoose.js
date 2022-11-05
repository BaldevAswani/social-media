// reqiure the libary
const mongoose=require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost/codeial_development');

//acqire the connection (to check if it is sucessfull)
const db=mongoose.connection;


// error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running the print the message 
db.once('open',function(){
   console.log("Sucessfully connected to database");

});
module.exports=db;