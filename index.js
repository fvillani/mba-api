import express from "express";
import cors from "cors";
import routerCity from "./routes/city.route.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/city", routerCity);

app.use((err, req, res, next) => {
    res.status(400).send({ error: err.message });
});

app.listen(3000, () => {
    console.log("API Started!");
});
