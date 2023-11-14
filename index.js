import express from "express";
import cors from "cors";
import routerPG from "./routes/pg.route.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/pg", routerPG);

app.use((err, req, res, next) => {
    res.status(400).send({ error: err.message });
});

app.listen(3000, () => {
    console.log("API Started!");
});
