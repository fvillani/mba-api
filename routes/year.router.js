import express from "express";
import getYearController from "../controllers/year.controller.js";

const routerYear = express.Router();

routerYear.get("/", getYearController);

export default routerYear;
