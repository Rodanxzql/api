const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const LoginAdmin = require ("./routes/AdminRouter.js");
const user = require ("./routes/UserRouter.js");
const db = require ("./config/database.js");
const session = require ('express-session');


const app = express();

try {
  db.authenticate();
  console.log('đã kết nối Database...');
} catch (error) {
  console.error('kết nối bị lỗi:', error);
}
app.use(session({
  secret: 'secretttttkeyy', 
  resave: false,
  saveUninitialized: false
}));

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/upload', express.static('upload/images'));

app.use(cors())
 app.listen(8000, function () {
  console.log('CORS-enabled web server listening on port 8000')
})

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// require("./routes/product.routes")(app);
// const router = require('./routes/product.routes.js');



app.use(express.json());
app.use(cors());
const router = require('./routes/router.js');
app.use('/api', router);
app.use(user);
app.use(LoginAdmin);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


