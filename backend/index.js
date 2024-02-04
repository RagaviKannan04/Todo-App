const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const FormDataModel = require ('./models/FormData');
const jwt = require('jsonwebtoken');
const JWT_Key='Ragavi@07'

const routes = require("./routes/ToDoRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/",routes);
mongoose.connect('mongodb://127.0.0.1:27017/practice_mern');

app.post('/register', async(req, res)=>{
    // To post / insert data into database

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
})
//     const {name,email,password} = req.body;
//     let check;
//     try{
//         check = await FormDataModel.findOne({email:email})
//     }
//     catch(err){
//         console.log(err)
//     }
//     if(check){
//         return res.status(404).json({message:"email already exists"})
//     }
//     const checkpassword = bcrypt.hashSync(password)
//     const user = new FormDataModel({
//         name,
//         email,
//         password:checkpassword,
//     })
//     try{
//         await user.save()
//     }
//     catch(err){
//         console.log(err)
//     }
//     return res.status(200).json({user})
// })



app.post('/login',async(req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        
        //If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})
    
app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});