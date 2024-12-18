const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
