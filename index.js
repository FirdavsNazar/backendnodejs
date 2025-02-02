
// // const userDate= require(`./user`)
// const carDate= require(`./car`)

// console.log(userDate.user);
// userDate.loguser()

// console.log(carDate.car);
// carDate.logercar()



//for checking nodeman 

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) =>{
    // request - so'rov
    //response - javob
    if(req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'})

        if(req.url === '/'){
            fs.readFile(path.join(__dirname, 'template', 'index.html'), 'utf-8', (err, content) => {
                if(err) throw err
                res.end(content)
        })  
    }

        } else if (req.method === 'POST') {  // ✅ Checking if request is a POST request
            const body = [];  // ✅ Creating an empty array to store incoming data
        
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // ✅ Setting the response header
        
            req.on('data', data => {  // ✅ When data is received, push it into the array
                body.push(Buffer.from(data));  // ✅ Convert incoming data to a Buffer and store it
            });
        
            req.on('end', () => {  // ✅ Once all data is received
                const message = body.toString().split('=')[1];  // ✅ Convert buffer to string, extract data
                res.end(`Name successfully added: ${message}`);  // ✅ Send response back to client
            });
        }
        
    
})

server.listen(3000, () => {
    console.log('Server has been started on port: 3000');
    
})

