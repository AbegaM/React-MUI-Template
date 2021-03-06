const express = require("express");
const cors = require("cors")
require("dotenv").config();

const env = require("./server/utils/environment")
const router = require("./server")

const app = express();

app.use(cors())
app.use(express.json())
app.use("/api", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client", "build", "index.html"));
  });
}

const PORT = env.server.port ;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));








