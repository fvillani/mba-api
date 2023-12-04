import express from "express";
import getTypeController from "../controllers/type.controllers.js";

const routerType = express.Router();

routerType.get("/", getTypeController);

export default routerType;
