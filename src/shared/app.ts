import "reflect-metadata";
import express from "express";
import routes from "./routes";
import cors from "cors";
import "./containers";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

export default app;
