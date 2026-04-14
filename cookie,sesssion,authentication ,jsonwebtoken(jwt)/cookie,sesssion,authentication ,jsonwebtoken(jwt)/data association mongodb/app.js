const express=require('express');
const app=express();
const userModel=require('./models/user');
const postModel=require('./models/post');

app.get('/',function(req,res){
    res.send("hello world");
})
app.get('/create',async function(req,res){
    let user=await userModel.create({
        username:"ashish",
        email:'ashish24@gmail.com',
        age:25
    });
    res.send(user);
})
app.get('/post/create',async function(req,res){
    let post=await postModel.create({
        postdata:'hello ashish',
        user:'69db129316adf968d3ac9311'
    })
    let user=await userModel.findOne({_id:'69db129316adf968d3ac9311'});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
})
app.listen(3000);
return(console.log("*connected*"))