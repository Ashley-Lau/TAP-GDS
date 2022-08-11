let router = require('express').Router();
// Set default API response for the api route
router.get('/', function (req, res) {
  res.json({
    status: 'API is Working',
    message: 'Welcome to the /api route!'
  });
});

// Import url shortening controller
let urlShorteningController = require('./urlShorteningService/urlShorteningController');
// Contact routes
router.route('/shortenUrl')
  .post(urlShorteningController.shortenUrl);

// Export API routes
module.exports = router;