const {Router} = require('express');
const router = Router();


const  { getCars, getCarById, getBucketId } = require('../controllers/index.controller')
router.get('/get/all', getCars);
router.get('/get/:id', getCarById);
router.get('/get/s3/:id', getBucketId)

module.exports = router;