const express = require('express'); 

const fs = require('fs');

// var CircularJSON = require('circular-json');

const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));

// app.set("view engine", 'html');

app.get('/',(req,res)=>{

    res.sendFile('/home/bijusrt/Desktop/biju/connect/views/front-end.html')
})

app.post('/posts',(req,res)=>{

    // const reqData = JSON.parse(CircularJSON.stringify(req));

    var read = fs.readFileSync('index.json');

    var convert = JSON.parse(read);
    
    let _dict = {

        "username" : req.body.UserName,

        "passwrod" : req.body.PassWord

    };

    convert.push(_dict);

    fs.writeFileSync('index.json',JSON.stringify(convert),null,4);
    
    res.send('Successful');

});

app.listen(8080);

console.log('ok');
