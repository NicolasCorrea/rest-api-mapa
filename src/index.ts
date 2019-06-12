import Server from "./server/server";
import router from "./routes/router";

const server = new Server(3000);

server.app.use(router)


server.start(()=>{
    console.log("Servidor corriendo en el puerto 3000: http://localhost:3000");
})