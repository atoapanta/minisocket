import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import http from "http";
import { Server } from "socket.io";
import { socketController } from "./controllers/socket.controller";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Logica Socket.IO
io.on("connection", (socket) => socketController(socket));

export default server;
