import express from "express";
import getCityController from "../controllers/city.controller.js";

const routerCity = express.Router();

routerCity.get("/:theme/:year", getCityController);

export default routerCity;
