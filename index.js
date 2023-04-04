/** @format */

const app = require("./app");

// console.log(express);

const port = 4000;

app.listen(port, () => {
  console.log(`starting server o port ${port}`);
});

app.use("/", (req, res) => {
  res.json({
    message: "Hey There !! This is my angry bird Eccomerce app Backend",
  });
});
