const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'This is a secure page that might show a list of all orders for the logged in user.',
        user: req.user
    });
});

router.get('/:id', (req, res) => {
    res.status(200).json({
        message: 'This is a secure page that might show the details of a specific order for the logged in user.',
        user: req.user,
        order_id: req.params.id
    });
});

module.exports = router;