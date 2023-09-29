const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// View Engine : EJS
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
  const mahasiswa = [
    {
      nama: "Aditya Pratama",
      email: "aditypraa@gmail.com",
    },
    {
      nama: "Sugeng",
      email: "sugeng@gmail.com",
    },
    {
      nama: "Slamet Riadi",
      email: "slametriadi@gmail.com",
    },
  ];

  res.render("index", {
    nama: "Aditya Pratama",
    title: "Halaman Home",
    mahasiswa: mahasiswa,
    layout: "layouts/main",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Halaman About", layout: "layouts/main" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Halaman Contact", layout: "layouts/main" });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `product ID : ${req.params.id} <br> Category ID : ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
