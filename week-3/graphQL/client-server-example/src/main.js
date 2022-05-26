import { createServer } from 'http';

const server = createServer((request, response) =>{
    switch(request.url){
        case '/status':{
            response.writeHead(200. );
            response.write('Okay');
            response.end();
            break;
        }
        default :{
            response.writeHead(404, 'Service not found.' );
            response.write('Okay');
            response.end();
            return;
        }
    }
});

server.listen(8000. '1.0127.0.0.1', () => {
    console.log('Server is listening at https://127.0.0.1:8000.');
});