const data=require('./Data')
const express=require('express');

const mongoose=require('mongoose');
const userRouter = require('./routers/userRouter');
const productRouter=require('./routers/productRouter');
const port=process.env.PORT||5000;
const orderRouter=require('./routers/orderRouter');
//const dotenv=require('dotenv');

//dotenv.config();
require('dotenv').config();

const app=express();




app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));




mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});


app.get('/',(req,res)=>{
    res.send("hello lala");
});

// app.get('/api/products',(req,res)=>{
//     res.send(data.products);
// });

app.use('/api/users',userRouter);

app.use('/api/products',productRouter);

app.use('/api/orders',orderRouter);

app.use((err,req,res,next)=>{
    res.status(500).send({
        message:err.message
    });
});

// app.get('/api/products/:id',(req,res)=>{
//     // res.send(data.products);
//     const product = data.products.find((x)=> x._id === req.params.id);
//     if(product){
//         res.send(product)
//     }else{
//         res.status(404).send({message: 'product not found :/'})
//     }
// })

app.listen(port,()=>{
    console.log("lala pro");
});

