const router = require("express").Router();

router.use('/users',
  require('./resources/users')
);

module.exports = router;
