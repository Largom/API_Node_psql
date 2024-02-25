const {Router} = require('express');
const router = Router();


const  { getCars, getCarById, getBucketId, getId2 } = require('../controllers/index.controller')
router.get('/get/all', getCars);
router.get('/get/rds/:id', getCarById);
router.get('/get/s3', getBucketId);
router.get('/get/s2', getId2);

module.exports = router;