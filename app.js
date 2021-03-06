const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
// const Swal = require("sweetalert2");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const menuRouter = require("./routes/menu");
const cadastroRouter = require("./routes/cadastro");
const carrinhoRouter = require("./routes/carrinho");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "dh-burguer",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/menu", menuRouter);
app.use("/cadastro", cadastroRouter);
app.use("/carrinho", carrinhoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.render("error404", { url: req.url });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
