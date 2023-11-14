import express from "express";
import getPGController from "../controllers/pg.controller.js";

const routerPG = express.Router();

routerPG.get("/", getPGController);

export default routerPG;
