const express = require('./../middlewares/middlewares').express;
const router = express.Router();
const logger = require('./../middlewares/middlewares').logger.default;

router.get('/', function (req,res) {
    logger.info('/health API triggered, checking health of system');
    res.status(200).send({
        status: 200,
        code: 'OK',
        APIs: {status: 200, endpoint: '/api/v1/users', code: 'OK'},
    });
});

module.exports = router;