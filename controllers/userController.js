const User = require('../models/User');


exports.addUser = async(req, res) => {
    try {
        const {Name, Email, Cell, Age } = req.body;
        console.log(Name, Email, Cell, Age)
        
        if(!Name || !Email || !Cell || !Age){
            return res.json({msg: "Please Fill all Fields"})
        }
        
        if(!validateEmail(Email)){
            return res.json({msg: "Invalid Email"})
        }
        
        const user = await User.findOne({Email});
        if(user){
            return res.json({msg: "Email Already exist"})
        } 

        const newUser = new User ({
            Name, Email, Cell, Age
        });
        await newUser.save();
        res.status(200).json({msg: "User Added"});       
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.viewUser = async(req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.searchUser = async(req, res) => {
    try {
        const { Name } = req.body;
        const users = await User.find({Name});
        res.send(users);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };