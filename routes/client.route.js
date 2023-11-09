import express from "express";
import getClientsController from "../controllers/client.controller.js";

const routerClient = express.Router();

routerClient.get("/", getClientsController);

export default routerClient;
