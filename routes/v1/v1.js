const {express} = require('./../../middlewares/middlewares');
const auth = require('./../../dependencies/dependedncies').auth;
const router = express.Router();

const healthRouter = require('./health');
const usersRouter = require('./users');

router.use('/health/', healthRouter);
router.use('/users/', auth.keycloak.protect(), usersRouter);

module.exports = router;