import express from "express";
import getThemeController from "../controllers/theme.controller.js";

const routerTheme = express.Router();

routerTheme.get("/", getThemeController);

export default routerTheme;
