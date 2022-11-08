const User=require('../models/user'); 

module.exports.profile = function(req, res){
  return res.render('userProfile',{
    title:"Users"

  }); 
  
  
  
}

module.exports.home = function(req, res){
  res.end('<h1>User Profile</h1>');

}   

//render the sign up page
module.exports.signUp=function(req,res){
   if(req.isAuthenticated()){
   return res.redirect('/users/profile');

   }

   return res.render('user_sign _up',{
    title:"Codeial|Sign up"
   });

}

// render the sign in page
module.exports.signIn=function(req,res){
  if(req.isAuthenticated()){
   return res.redirect('/users/profile');

   }
    return res.render('user_sign _in',{
     title:"Codeial|Sign in"
    });
 
 }


// get the sign up data 

module.exports.create = function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
      if(err){
        console.log('error in finding user in signing up');
        return;
      }
      if(!user){
        User.create(req.body,function(err,user){
            if(err){
                console.log('error in creating user in signing up');
                return;
              }           
                return res.redirect('/users/sign-in');
        })
      }else{
        return res.redirect('back');
      }

    })     



}

// SIGN IN CREATE A SESSION FOR THE USER
module.exports.createSession = function(req,res){
   
  
   return res.redirect('/users/profile');

}

module.exports.destroySession=function(req,res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });


}


