import Server from "./server/server";
import router from "./routes/router";
import cors = require("cors");
const server = new Server(3000);
const options:cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false
  };
server.app.use(cors(options)); 
server.app.use(router)
router.options("*", cors(options));

server.start(()=>{
    console.log("Servidor corriendo en el puerto 3000: http://localhost:3000");
})