import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongoDB.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/admin.routes.js';

// App Config


const app = express();

 const port = process.env.PORT || 4000
 connectDB()
 connectCloudinary()

 //middleware 

 app.use(express.json());

 app.use(cors())

 //api end point

 app.use('/api/admin', adminRouter)

 app.get('/',(req, res)=>{
    res.send('API Working.')
 })


app.listen(port, ()=> console.log('Server is running at PORT : ',port ));
