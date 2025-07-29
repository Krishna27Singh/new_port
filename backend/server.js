const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

// MongoDB URI
const MONGO_URI = "mongodb+srv://krishnasingh71277:VB21VyjZ1XUICeEn@cluster0.porwclw.mongodb.net/";

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB ✅"));

// Define Schema and Model
const visitorSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

// Initialize if no document exists
const ensureVisitorDoc = async () => {
  const doc = await Visitor.findOne();
  if (!doc) {
    await new Visitor({ count: 0 }).save();
  }
};

ensureVisitorDoc();

// API to get and increment count
app.get("/api/visitor-count", async (req, res) => {
  try {
    const visitor = await Visitor.findOneAndUpdate(
      {},                        // match any document
      { $inc: { count: 1 } },     // increment count by 1
      { new: true }               // return the updated document
    );
    res.json({ visitorCount: visitor.count });
  } catch (err) {
    console.error("Error updating visitor count:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
