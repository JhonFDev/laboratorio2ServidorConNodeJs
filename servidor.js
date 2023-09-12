const http = require("http");
const chalk = require("chalk");
const { stringify } = require("querystring");
const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
  res.setHeader('content-Type', 'package/json');
  res.statusCode = 200;
  const responseData = {
    nombre: "John",
    mensaje: "hola te saludo desde el servidor",
  };
  res.end(JSON, stringify(responseData));
});

server.listen(port, host,()=>{
        console.log(chalk.green(`el servidor esta escuchando en http://localhost:8000`))
})