import express from "express";
import router from "./routers/notifications";

const app = express();

app.use(express.json());

app.use("/notifications", router);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(8000, () => console.log("Server has started"));
