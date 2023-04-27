const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('Hello from JavaSript\n');
});
server.listen(4242, () =>{
    console.log('Server is running...');
});
/* ghjkll  */