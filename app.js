//imports
const http = require('http');
const express = require('express')
const app = express()
const { Client, LocalAuth, Buttons, List } = require("whatsapp-web.js");
const port = 3003
const QRCode = require('qrcode')
const qrCodeURL = 'https://api.whatsapp.com/message/SKKUWGXIP5SEM1' ;
const qrCodeScan = '';

const qr = require('qr-image');  


 
 
var qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
const svg_string = qr.imageSync('I love QR!', { type: 'svg' });

console.log('svg_string  ===> ' + svg_string );

// Static Files
app.use(express.static('public'));
// Specific folder example
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))



// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');
/*

app.get('/', function(req, res) {  
    var code = qr.image(new Date().toString(), { type: 'svg' });
    res.type('svg');
    code.pipe(res);

    console.log("Client is Started ==> 1 "  );
    //console.log("Client is Started ==>  2 " + code.pipe(res) );

  });
  */


//Initilizations
console.log("Client is Started ==> ");

const client = new Client({
  puppeteer: {
		args: ['--no-sandbox'],
	},
  authStrategy: new LocalAuth(),
});

console.log("Client is Ended ==> ");


QRCode.toString(qrCodeURL,{type:'terminal'},
                    function (err, QRcode) {
 
    if(err) return console.log("error occurred")
 
    // Printing the generated code
    //console.log(QRcode)
    // qrCodeScan = QRcode ;

})


// Navigation
app.get('', (req, res) => {
    res.render('index', { text:  'hi' , test1 : 'asdasd', qrsvg: qrCodeURL })
})




//Listen on Port 
app.listen(port, () => console.info('App listening on port ${port}'))