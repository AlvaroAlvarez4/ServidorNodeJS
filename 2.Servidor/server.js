/*
Servidor: servidor fisico donde se almacena un servidor web
Servidor Web: Es el software con la logica de nuestra web
*/

//Cargar modulo/libreria de http
const http = require('http');

//PASO 1 ------------------------
//request -> Peticion;
//respond -> Respuesta;

function serverConfig(request, response) {
    console.log('Peticion Rebida');
    //RESPUESTA del servidor
    // console.log(response)
    response.writeHead(200, { "Content-Type": "text-plain" })
        //STATUS 200 -> Todo correcto, todo OK.
    response.write("Mi primer servidor con Nodejs")
    response.end()
};
let server = http.createServer(serverConfig);
server.listen(8080);


//localhost: PUERTO -> 8080, 3000, 3001, etc;
// 127.0.0.1:

//PASO 2 -----------
