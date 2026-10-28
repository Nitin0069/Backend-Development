const http = require('http')
const fs = require('fs');




const mServer = http.createServer((req,res) => {
const log = `${Date.now()}: ${req.url} New Req Recieved\n`;
fs.appendFile('log.txt', log , (err, data) => {
    switch(req.url) {
        case '/': res.end('homepage')
        break;
        case '/about': res.end(" i am nitin");
        break;
        default: 
        res.end('404 Not found');
    }
})

});

mServer.listen(8001, () => {
    console.log('server started chl pdaa')
} )