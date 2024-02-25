const {Router} = require('express');
const router = Router();


const  { getCars, getCarById, getBucketId, getId2,getId1 } = require('../controllers/index.controller')
router.get('/get/all', getCars);
router.get('/get/:id', getCarById);
router.get('/get/s3/', getBucketId);
router.get('/get/s2/', getId2);
router.get('/get/s1/', getId1);

module.exports = router;