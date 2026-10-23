const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const staticContent = {
  title: "Welcome to My Website",
  message: "This static content is served by a Node.js backend.",
};

// Backend endpoint
app.get("/api/content", (req, res) => {
  res.json(staticContent);
});

// Frontend files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
