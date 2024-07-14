const path = require("path");
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const compression = require("compression");
const cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const jobRouter = require("./routes/jobRoutes");

const app = express();

app.set("trust proxy", 3);
// app.get('/ip', (req, res) => res.json({ ip: req.ip }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/src/views"));

// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors());

// Serving static files
app.use(express.static(path.join(__dirname, `src`)));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit requests from the same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
}); // 100 requests per 1 hour on the same IP address

app.use("/api", limiter);

// Body parser, reading data from the body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS = Cross-Site Scripting Attacks
app.use(xss());

// Compression middleware for text sent as response to client
app.use(compression());

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; worker-src 'self' blob:"
  );
  next();
});

// 3) ROUTES
app.use("/", jobRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
