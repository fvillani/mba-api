import express from "express";
import cors from "cors";
import routerCity from "./routes/city.router.js";
import routerTheme from "./routes/theme.router.js";
import routerYear from "./routes/year.router.js";
import routerType from "./routes/type.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/city", routerCity);
app.use("/themes", routerTheme);
app.use("/years", routerYear);
app.use("/type", routerType);

app.use((err, req, res, next) => {
    res.status(400).send({ error: err.message });
});

app.listen(3000, () => {
    console.log("API Started!");
});
