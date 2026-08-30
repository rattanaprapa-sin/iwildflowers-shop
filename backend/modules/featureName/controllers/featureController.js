const featureService = require('../services/featureService');

// Controller มีหน้าที่รับ Request จาก Routes และส่ง Response กลับไปให้ Frontend

const getFeatures = async (req, res, next) => {
  try {
    // โยนงานประมวลผลไปให้ Service
    const data = await featureService.getFeaturesLogic();
    
    // ส่งข้อมูลกลับไปที่ Frontend
    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    // ถ้า Error ให้ส่งต่อให้ Global Error Handler จัดการ
    next(error);
  }
};

const createFeature = async (req, res, next) => {
  try {
    const data = await featureService.createFeatureLogic(req.body);
    
    res.status(201).json({
      success: true,
      data: data
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFeatures,
  createFeature
};
