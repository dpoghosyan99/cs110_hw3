const http = require('http');
const server = http.createServer(function(request, response) {
    if(request.url === '/home'){
        response.writeHead('200', {'Content-Type' : 'text/plain'});
        response.write('Welcome to the Home Page!');
        response.end();
    }
    else if (request.url === '/videos'){
      response.writeHead('203', {'Content-Type' : 'text/plain'});
      response.write('Here you can watch some videos');
      response.end();
    }
    else if(request.url === '/images'){
      response.writeHead('201', {'Content-Type' : 'text/plain'});
      response.write('Some beautiful pictures to see');
      response.end();
    }
    else if(request.url === '/FAQ'){
      response.writeHead('202');
      response.end('Here are some frequently asked questions');
    }
    else {
      response.writeHead('404', {'Content-Type' : 'text/plain'});
      response.write('Oops...');
      response.end();
    }
})
server.listen(9099, () => console.log('Made from port:9099'));