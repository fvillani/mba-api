import express from "express";
import getTypeController from "../controllers/type.controllers.js";

const routerType = express.Router();

routerType.get("/:theme/:type", getTypeController);

export default routerType;
