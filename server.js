const koa = require('koa2');
const app = new koa();
const routers = require('./src/routers');
var serve = require('koa-static-server')

var port = 8080; //setar a porta em que o app deve rodar.

//configuração de rotas.... todas rotas vão ser apartir da url http://localhost:8080/nomedarota
app.use(routers.routes());

//static html
app.use(serve({rootDir: './src/views/', index: 'index.html'}));

//porta em que o app está rodando
app.listen(port,function(){
    console.log("Rodando na porta "+port);
});
