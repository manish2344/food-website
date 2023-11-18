const  dotenv = require('dotenv');
dotenv.config();
require('./db.js')
const  express = require('express');
const userRoute = require("./router/user.js");

const  cors = require('cors');
const foodRouter = require('./router/food.js')

const app = express();
app.use(express.json());
app.use(cors());
app.get('/api',(req,res)=>{
  res.send('hello manish')
})
app.use('/api/foods', foodRouter);
app.use("/api/user", userRoute);
// const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
  console.log('server started ');
});
