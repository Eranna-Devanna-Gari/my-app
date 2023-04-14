const express = require('express');
// const dotenv = require('dotenv');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const path = require('path');
const cors = require('cors');
const db = require('./server/model/index.js')
const app = express();


var corsOption = {
    origin: 'http://localhost:3000'
}

// middleware
app.use(cors(corsOption));

app.use(express.urlencoded({extended:true}));

app.use(express.json());


//routers
const router = require('./server/routes/productRoutes.js')
app.use('/api/product', router)

const userRouter = require('./server/routes/userRoutes.js')
app.use('/api/user', userRouter)


//testing
app.get('/',(req,res)=> {
     res.send("Wel come");
})

//port
const PORT = process.env.PORT ||8000

//server
app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)})

// dotenv.config({path:'config.env'});
 

// app.use(morgan("tiny"))

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

// app.set("viewengine", "ejs");

// app.use('/css', express.static(path.resolve(__dirname,"/assets/css")));
// app.use('/img', express.static(path.resolve(__dirname,"/assets/img")));
// app.use('/js', express.static(path.resolve(__dirname,"/assets/js")));

// app.get('/',(req,res)=> {
//     res.send("Wel come");
// })

// var fetch = require('./server/database/fetch/fetch')
// app.use('/fetch',fetch);

