const express=require ('express');
const app=express();

app.get('/',function(req,res){
    res.cookie("name","ashish");
    res.send("done");

    app.get('/ashish',function(req,res){
        console.log(req.cookies)
        res.send("read page done")
    })
})
app.listen(3000);
console.log("*connected*")