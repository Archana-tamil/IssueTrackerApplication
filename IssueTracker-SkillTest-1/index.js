import express from 'express';
import expressLayouts  from 'express-ejs-layouts';
import homeRouter from "./routes/home.routes.js";
import connect from "./config/mongoose.config.js"
const app = express();
connect();
app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', homeRouter);
app.listen(5000, (err) => {
  if (err) {
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is running on the port 5000`);
});