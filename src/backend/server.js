const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

let visitorCount = 0;

app.get("/api/visitor-count", (req, res) => {
  visitorCount++;
  res.json({ visitorCount });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
