// import all the stuff we need
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";
import bookings from "./bookings.json" assert { type: "json" };

// initialise the server
const app = express();

app.use(express.json());
app.use(cors());

// Add other routes and logic as needed

// GET /bookings
app.get("/bookings", (req, res) => {
  res.json(bookings);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

// Render simple views for testing and exploring
// You can safely delete everything below if you wish

// Set EJS as the templating engine for the app
app.set("view engine", "ejs");
// Calculate __dirname in ES module
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set("views", path.join(__dirname, "views"));
// HERE WE MAKE ROUTES SAME AS ANY ENDPOINT, BUT USE RENDER INSTEAD OF SIMPLY RETURNING DATA
app.get("/", (req, res) => {
  // Use render to load up an ejs view file
  res.render("index", { title: "Hotel Booking Server" });
});
app.get("/guests", (req, res) => {
  res.render("guests", { bookings });
});
