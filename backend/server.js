import express from "express";
import getTimeTableData from "./index.js";
import path from "path";
const app = express();
app.use(express.json());
app.get("/api/timetable", async (req, res) => {
  try {
    const priceFeed = await getTimeTableData();
    return res.status(201).json({
      result: priceFeed,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.toString(),
    });
  }
});
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("scheduler/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "scheduler", "build", "index.html"));
  });
}
app.listen(process.env.PORT || 5000, () => {
  console.log("running on port 5000");
});
