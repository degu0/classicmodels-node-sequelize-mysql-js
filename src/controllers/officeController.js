const officeRepository = require('../repositories/officeRepository');

const getAllOffices = async (req, res) => {
    const offices = await officeRepository.getAllOffices();
    res.json(offices);
}


const getOfficeByOfficeCode = async (req, res) => {
    const office = await officeRepository.getOfficeByOfficeCode(req.params.office);
    res.json(office);
}


const createOffice = async (req, res) => {
    const office = await officeRepository.createOffice(req.body);
    res.json(office);
}


const updateOffice = async (req, res) => {
    const office = await officeRepository.updateOffice(req.params.officeCode,req.body);
    res.json(office);
}

const deleteOffice = async (req, res) => {
    const office = await officeRepository.deleteOffice(req.params.officeCode);
    res.json({ sucess: true });
}

module.exports = {
    getAllOffices,
    getOfficeByOfficeCode, 
    createOffice,
    updateOffice,
    deleteOffice
}

