const router = require('express').router();
const travellersRoute = require('./travellersRoute');

router.use('/travellers', travellersRoute);

module.exports = router;
