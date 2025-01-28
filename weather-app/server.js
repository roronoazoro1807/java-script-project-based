import express from "express";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv"; // Import dotenv

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = 3000;

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve the index.html on the root path
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

// Handle weather API requests
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).send({ error: "City is required" });
  }

  try {
    const apiKey = process.env.API_KEY; // Access the API key from environment variables
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(404).send({ error: "City not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Serve static files like script.js and styles.css
app.use(express.static(join(__dirname, ".")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
