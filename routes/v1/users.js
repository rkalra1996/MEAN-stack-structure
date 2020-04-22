var express = require('./../../middlewares/middlewares').express;
var router = express.Router();
const logger = require('./../../middlewares/middlewares').logger.default;
/* GET users listing. */
router.get('/', function(req, res) {
  logger.info('sending response from /users api');
  res.send('respond with a resource');
});

module.exports = router;
