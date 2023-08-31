const express = require('express');
const router = express.Router();

const officeController = require('../controllers/officeController');

router.get('/', officeController.getAllOffices);
router.get('/:officeCode', officeController.getOfficeByOfficeCode);
router.post('/', officeController.createOffice);
router.put('/:officeCode', officeController.updateOffice);
router.delete('/:officeCode', officeController.deleteOffice);

module.exports = router;