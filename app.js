const   express                 = require("express"),
        mongoose                = require("mongoose"),
        passport                = require("passport"),
        bodyParser              = require("body-parser"),
        User                    = require("./models/user"),
        LocalStrategy           = require("passport-local"),
        passportLocalMongoose   = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/user-auth", {useNewUrlParser: true});

var app = express();
app.set("view engine", "ejs");

app.use(require("express-session")(
    {
        secret: "pineappple Marshall Colorado Odin lamp",
        resave: false,
        saveUninitialized: false
    }
));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

passport.serializeUser(User.serializeUser());       // encoding data, serializing that data, and putting it back in the session     
passport.deserializeUser(User.deserializeUser());   // reading session, taking data from session, and decoding it

// Routes =============================================================
// root route
app.get("/", (req, res) => {
    res.render("home");
});

// secret route
app.get("/secret", (req, res) => {
    res.render("secret");
});

// auth routes
// register
app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    req.body.username;
    req.body.password;
});
// ====================================================================
// start the server
app.listen(3000, () => {
    console.log("server started...");
});