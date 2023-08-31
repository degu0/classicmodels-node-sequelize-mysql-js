const officesModel = require('../models/officeModel');


const getAllOffices = async () => {
    const offices = await officesModel.findAll();
    return offices;
}

const getOfficeByOfficeCode = async (officeCode) => {
    const office = await officesModel.findByPk(officeCode);
    return office;
}

const createOffice = async (office) => {
    const newOffice = await officesModel.create(office);
    return newOffice;
}

const updateOffice = async (officeCode, office) => {
    const updateOffice = await officesModel.update(office, {
        where: { officeCode: officeCode }
    });
    return updateOffice;
}

const deleteOffice = async (officeCode, office) => {
    const deleteOffice = await officesModel.destroy({
        where: { officeCode: officeCode }
    });
}

module.exports = {
    getAllOffices,
    getOfficeByOfficeCode,
    createOffice,
    updateOffice,
    deleteOffice
}