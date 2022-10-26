const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(cors());

//import routes
const ShopRoutes = require('./routes/Shop');
const userRoutes = require('./routes/users');
const equipmentRoutes = require('./routes/equipment');
const mealRoutes = require('./routes/meal');
const workout_planRoutes = require('./routes/workout_plan');
const memberRoutes = require('./routes/Member');



app.use("/Shop",ShopRoutes);
app.use("/",userRoutes)
app.use("/equipment",equipmentRoutes);
app.use("/meal",mealRoutes);
app.use("/workout_plan",workout_planRoutes);
app.use("/Member",memberRoutes);

mongoose.connect('mongodb+srv://RAD:radgroup@cluster0.lr8muui.mongodb.net/RAD?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB Connected')
})
.catch(err => console.log('DB connection error',err));
app.get("/getUsers",(req,res)=>{
    UserModel.find({},(err,users)=>{
        if(err) res.json(err);
        else{
            res.json(results);
        }
    });
})

app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));



app.listen(3001, () => {
  console.log('Server is running on port 3001');
});