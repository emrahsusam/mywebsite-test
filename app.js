const mongoose       =require('mongoose'),
      express        =require('express'),
      app            =express(),
      port           = process.env.PORT || 3000;

//Routes
const indexRoutes = require('./routes/indexRoutes');

//App Config
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Routes Using
app.use(indexRoutes);




//PORT======================================//
app.listen(port, (err)=>{
    if(err){
        console.log(err);
    } console.log('Running on port: '+port);
});