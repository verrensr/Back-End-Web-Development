const http = require('http')
const members = require('./members.js')
const moment = require('moment')

const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json', 'text/plain')
    res.write(JSON.stringify({
        'Status': 'success',
        'Message': 'response success',
        'Description': 'Exercise #03',
    }));
    res.write(moment().format())
    res.write('\n');
    res.write(members.id());
    res.write('\n');
    res.write(members.nim());
    res.write('\n');
    res.write(members.name());
    res.write('\n');
    res.write(members.notlp());
    res.end()
})

const hostname = '127.0.0.1';
const port = 3001;
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = 'Hello World';