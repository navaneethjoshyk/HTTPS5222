// import required modules
import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 8888;
const __dirname = import.meta.dirname;

// 1) View engine + views path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// 2) Static files
app.use(express.static(path.join(__dirname, "public")));

// 3) Simple site-wide locals 
app.use((req, res, next) => {
  res.locals.site = {
    name: "NovaNest",
    tagline: "Clever home gadgets that just work.",
  };
  next();
});

// 4) Routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    products: [
      {
        name: "NovaLight Pro",
        price: 49.99,
        img: "/images/novalight.jpg",
        desc: "Motion-sensing LED strip with app control.",
      },
      {
        name: "BrewMate Kettle",
        price: 79.0,
        img: "/images/brewmate.jpg",
        desc: "Precision gooseneck kettle with temperature hold.",
      },
      {
        name: "AirQuiet Mini",
        price: 59.0,
        img: "/images/airquiet.jpg",
        desc: "Compact air purifier for desks and nightstands.",
      },
      {
        name: "SnapScale",
        price: 29.0,
        img: "/images/snapsale.jpg",
        desc: "Magnetic kitchen scale with 0.1g accuracy.",
      },
    ],
    categories: [
      { slug: "lighting", label: "Smart Lighting" },
      { slug: "kitchen", label: "Kitchen Tech" },
      { slug: "air", label: "Air & Care" },
      { slug: "accessories", label: "Accessories" },
    ],
    features: [
      { title: "Fast Shipping", text: "Ships in 24–48 hours across Canada." },
      { title: "2-Year Warranty", text: "Hassle-free replacements." },
      { title: "Secure Checkout", text: "Your data stays private." },
    ],
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// 5) 404
app.use((req, res) => {
  res.status(404).render("about", { title: "Not Found" });
});

// 6) Start server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
