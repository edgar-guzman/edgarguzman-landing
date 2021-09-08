const express = require('express'), router = express.Router();
const createError = require('http-errors');

// Index page
router.get('/', (req, res) => {
    res.render('landing', {
        title: 'Edgar Guzman'
    })
});

// Catch 404 Handler Router
router.use((req, res, next) => {
    next(createError(404))
});

// 404 Error page
router.use('/', (req, res) => {
    // res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500).render('error', {
        title: '404 : Edgar Guzman',
        message: 'not found'
    })
});

module.exports = router;