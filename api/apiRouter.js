const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({api: 'api running'});
});

module.exports = router;