var express = require('express');
var router = express.Router();
const logger = require('./../middlewares/middlewares').logger.winston;
/* GET users listing. */
router.get('/', function(req, res, next) {
  logger.info('sending response from /users api');
  res.status(200).send('respond with a resource');
  next();
});

module.exports = router;
