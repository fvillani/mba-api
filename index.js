import express from "express";
import cors from "cors";
import routerClient from "./routes/client.route.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/client", routerClient);

app.use((err, req, res, next) => {
    res.status(400).send({ error: err.message });
});

app.listen(3000, () => {
    console.log("API Started!");
});
