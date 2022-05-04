const router = require('express').Router();
const travellersRoute = require('./travellersRoute');

router.use('/travellers', travellersRoute);

module.exports = router;
