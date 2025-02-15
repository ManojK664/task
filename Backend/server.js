const bodyparser  = require('body-parser');
const cors = require('cors');

const db = require("./src/config/db.js");

const express = require('express');
const app = express();
app.use(bodyparser.json());
app.use(cors());
require('dotenv').config();
 
const port = process.env.port || 8000;

app.listen(port,()=>{
    console.log("localhost:"+port);
})

app.get('/studentmark',(req,res)=>{
    const sql = 'select * from marks';

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).json({error:"failes to add Marks"});
        }
        return res.status(200).json({marks:result});
        
    })
})

app.post('/update-mark',(req,res)=>{
    const {Name,s1,s2,s3,s4,s5} = req.body

    const sql = `insert into marks (name,english,tamil,maths,physics,chemistry)
values(?,?,?,?,?,?)`
db.query(sql,[Name,s1,s2,s3,s4,s5],(err)=>{
    if(err){
        console.log(err);
        return res.status(500).json({err:"failed to add Marks"});
    }
    return res.status(200).json({message:"Marks added successfuly"});
})
})