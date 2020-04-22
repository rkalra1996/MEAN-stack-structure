const {express} = require('./../middlewares/middlewares');
const router = express.Router();
const v1Router = require('./v1/v1');

router.use('/v1', v1Router);

module.exports = router;