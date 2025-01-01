// import express from "express";
// // import dotenv from "dotenv";
// // dotenv.config();
// const app = express();
// // const PORT = process.env.PORT || 3005;
// // app.listen(7654,()=>{
// //     // console.log(`seerver listen at port ${PORT}`);
// // }); 
 
// app.listen(4590, () => {
//     console.log("server listen at port 4590");
    
// })








// MIDDLEWARE 


// import express from "express";
// import dotenv from "dotenv";
// import bodyParser from "body-parser"
// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5600;
// app.use(express.json ());
// app.use(bodyParser.urlencoded({extended:true}))
// app.post("/api/v1/user/register",(req,res) => {
//     const obj = req.body
//     console.log(obj)

// })

import express from "express";
import dotenv from "dotenv";
import userRoute from "./route/user.js";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
// middleware me

const PORT = process.env.PORT || 4590;
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/user",userRoute);



app.listen(PORT,()=>{
    console.log(`server listen at port ${PORT}`); 
});