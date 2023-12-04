import express from "express";
import getTypeController from "../controllers/type.controllers.js";

const routerType = express.Router();

routerType.post("/", getTypeController);

export default routerType;
