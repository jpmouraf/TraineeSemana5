import dotenv from "dotenv";
import express, { Express } from "express";
import cors, { CorsOptions } from "cors";
import UserRouter from "../src/domains/User/controllers";
import AdminRouter from "../src/domains/Admin/controllers";
import ArtistRouter from "../src/domains/Artist/controllers";
import MusicRouter from "../src/domains/Music/controllers";
import cookieParser = require("cookie-parser");

dotenv.config();

export const app: Express = express();

const options: CorsOptions = {
	credentials: true,
	origin: process.env.APP_URL,
};

app.use(cors(options));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
	extended: true,
}));

//adicionar aqui as rotas das entidades
app.use("/api/users", UserRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/artists", ArtistRouter);
app.use("/api/musics", MusicRouter);
