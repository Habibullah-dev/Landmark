require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const https = require('https');
const cookieParser = require('cookie-parser');
let postRouter = require('./Router/posts');
let mailRouter = require('./Router/mails');
let callbacksRouter = require('./Router/callbacks');
let userRouter = require('./Router/users');
let Post = require('./models/post-model').Post;
let auth = require('./controller/auth');

app.use(cookieParser());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.set('view engine' , 'ejs')

let multerStorage = new multer.diskStorage({
    destination : (req , file ,cb) => cb(null ,'public/images') ,
    filename : (req , file , cb) => cb(null ,file.originalname)
})

app.use(multer({storage:multerStorage}).single('imageFile'))

mongoose.connect('mongodb://localhost/landmarkDB' , {useNewUrlParser:true , useUnifiedTopology: true}).then(() => console.log('Mongoose Connnected'));

app.use('/posts' , postRouter);
app.use('/emails' , mailRouter);
app.use('/callbacks' , callbacksRouter);
app.use('/users' , userRouter);

app.get('/sight' , async (req , res) => {
    let id = req.query.id;
     
    let post = await Post.findOne({id : id});

    let place = post.place;

    
    let url='https://api.openweathermap.org/data/2.5/weather?appid='+ process.env.API_WEATHER +'&q=' + place + '&units=metric';
    https.get(url , function(response) {
        response.on('data' , function(data) {
            let weatherData = JSON.parse(data);
            let main = weatherData.weather[0].main;
            let desc = weatherData.weather[0].description;
            let  icon = weatherData.weather[0].icon;
            let temp = weatherData.main.temp;
            let weatherImage = 'http://openweathermap.org/img/wn/'+ icon + '@2x.png';
            res.render('sight' , { 
                title: post.title,
                date: post.date,
                text: post.text,
                place : post.place ,
                imageUrl: post.image ,
                main : main,
                desc : desc ,
                temp : temp ,
                weatherImage : weatherImage
        });
    })

    });
  
})
app.get('/admin' , (req , res) => {
    let token = req.cookies['auth_token'];
    if(token && auth.checkToken(token)) {
        res.render('admin');
    }else {
        res.redirect('/login')
    }
    
});
app.get('/login' , (req , res) => {
    res.render('login');
})


app.listen(3000 , function(){
    console.log('Server Started listening to port 3000')
})

