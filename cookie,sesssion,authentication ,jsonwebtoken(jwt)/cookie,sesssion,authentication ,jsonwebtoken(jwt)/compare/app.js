const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
const { result } = require('lodash');

app.get("/",function(req,res){
    //bcrypt.compare(myPlaintextpassword,hash,function(err,result))
    bcrypt.compare('ashish','$2b$10$ltx.J3XkIL138spCPWInPO5TxaL2Ou353AZnFyI4gdHRQ/FdPnaj6',function(err,result){
        console.log(result)
    })
})
app.listen(3000);
return(console.log("*connected*"))