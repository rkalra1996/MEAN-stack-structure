const {express} = require('./../../middlewares/middlewares');
const router = express.Router();

const usersRouter = require('./users');

router.use('/users/', usersRouter);

module.exports = router;