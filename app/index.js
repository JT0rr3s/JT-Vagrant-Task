import express from "express";
// import router from "./routes/students.js";
import bodyParser from "body-parser";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3010;

app.use(express.static('public'))
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(database || "mongodb://localhost:27017/students");
    console.log(`Connected to Prod DB`);
  } else {
    mongoose.connect(testDatabase || "mongodb://localhost:27017/students_test");
    console.log(`Connected to Test DB`);
  }

app.use("/cicd", (req, res ) => {
    res.sendFile('pages/index.html', {root: __dirname })
  });

app.get("*", (req, res) =>
  res.status(404).send("There is no content at this route.")
);

app.listen(port, () => console.log(`Server is listening on port ${port}, Environment = ${process.env.NODE_ENV}`));

export default app;