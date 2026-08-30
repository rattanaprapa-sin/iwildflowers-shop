const express = require('express');
const router = express.Router();
const featureController = require('../controllers/featureController');
const { requireAuth } = require('../../../middlewares/authMiddleware'); // ถ้าต้องการบังคับให้ Login

// กำหนดเส้นทาง (Routes) และส่งต่อให้ Controller ทำงาน

// [GET] /api/features
router.get('/', featureController.getFeatures);

// [POST] /api/features (ตัวอย่างการป้องกันด้วย requireAuth)
router.post('/', requireAuth, featureController.createFeature);

module.exports = router;
