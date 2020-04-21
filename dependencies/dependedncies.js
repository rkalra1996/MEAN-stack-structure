const path = require('path');
// import middlewares
const middlewares = require('./../middlewares/middlewares');
// setup express dependencies
const app = middlewares.express();

// setup initials
app.use(middlewares.logger('dev'));
app.use(middlewares.express.json());
app.use(middlewares.express.urlencoded({ extended: false }));
app.use(middlewares.cookieParser());
app.use(middlewares.express.static(path.join(__dirname, './../public')));

module.exports = {
    app,
}