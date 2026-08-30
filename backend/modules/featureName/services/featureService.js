// Service มีหน้าที่ประมวลผล Logic ซับซ้อน และคุยกับ Database

const getFeaturesLogic = async () => {
  // จำลองการประมวลผลหรือดึงข้อมูลจาก Database
  // const data = await FeatureModel.find();
  
  return [
    { id: 1, name: 'Feature A', description: 'This is feature A' },
    { id: 2, name: 'Feature B', description: 'This is feature B' }
  ];
};

const createFeatureLogic = async (data) => {
  // จำลองการตรวจสอบเงื่อนไขและบันทึกลง Database
  if (!data.name) {
    throw new Error('Name is required');
  }
  
  // const newFeature = await FeatureModel.create(data);
  return { id: 3, ...data, status: 'created' };
};

module.exports = {
  getFeaturesLogic,
  createFeatureLogic
};
