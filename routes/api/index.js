const router = require('express').Router();

const thoughtRoutes = require('./thought-routes');
router.use('/thoughts', thoughtRoutes);

const userRoutes = require('./user-routes');
router.use('/users', userRoutes);

module.exports = router;