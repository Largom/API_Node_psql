const {Router} = require('express');
const router = Router();


const  { getCars, getCarById, getBucketId, getBucketId2 } = require('../controllers/index.controller')
router.get('/get/all', getCars);
router.get('/get/:id', getCarById);
router.get('/get/s3', getBucketId);
router.get('/get/s2', getBucketId2);

module.exports = router;