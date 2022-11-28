require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
import projectRouter from "./src/routes/project";
import { connect } from "./src/schemas";
import { Request, Response } from "express";

const express = require("express");
const logger = require("morgan");
connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.get("/", (req: Request, res: Response) => {
	res.render("index");
});
app.use("/api/v1/project", projectRouter);

app.listen(process.env.PORT, () => {
	console.log("Environment:----- ", process.env.NODE_ENV);
	console.log("Server started successfully --- Port:", process.env.PORT);
});
