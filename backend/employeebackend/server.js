import express, { json } from "express";
import cors from "cors";
import axios from "axios";
import fs from "fs";
import path from "path";

// import RequestData from './database/loan_request_data.json' assert {type: 'json'};
// import accountsData from './database/accounts.json' assert {type: 'json'};
// import CostumerData from './database/1.json' assert {type: 'json'};
const app = express();
const PORT = 5000;
//midlewares
app.use(cors());
app.use(express.json()); // To parse json bodies

// endpoints
app.get('/request',(req,res) =>{
    fs.readFile('./database/loan_request_data.json','utf8',(err,data) =>{
        if (err) {
            res.status(500).send('Error loading 1');
            return;
        }
        res.json(JSON.parse(data));
    })
})
app.get('/Users',(req,res) =>{
    fs.readFile('./database/synthetic_card_data.json','utf8',(err,data) =>{
        if (err) {
            res.status(500).send('Error loading 1');
            return;
        }
        res.json(JSON.parse(data));
    })
})
app.get('/Users/:accountNumber',(req,res)=>{
    const
     accountNumber = req.params.accountNumber;
    console.log(accountNumber);
    const filePath = path.resolve(`./database/account_database.json`);
    fs.readFile(filePath,'utf8',(err,data) =>{
        if(err){
            return res.status(500).send('Error loading!...')
        }
        const accounts = JSON.parse(data);
        const accountData = accounts[accountNumber];
        if(accountData){
            return res.json(accountData);
        }
        else{
            return res.status(404).send('Error Not found!...')
        }
    })
})
app.listen(PORT,()=>console.log('listenning...'))

