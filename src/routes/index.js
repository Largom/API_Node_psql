const {Router} = require('express');
const router = Router();


const  { getCars, getCarById } = require('../controllers/index.controller')
router.get('/getALL', getCars);
router.get('/get/:id', getCarById);

module.exports = router;