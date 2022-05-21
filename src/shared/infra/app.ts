import "reflect-metadata";
import "../container";

import express from "express";
import { createConnection } from "typeorm";

import { router } from "./routes/router";

const app = express();

createConnection();

app.use(express.json());
app.use(router);

export { app };
