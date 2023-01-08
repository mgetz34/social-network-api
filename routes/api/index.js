const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const UserRoutes = require('./userRoutes');

router.use('./thought', thoughtRoutes);
router.use('users', UserRoutes);

module.exports = router;
