import specialistService from '../services/specialistService';

let handleSaveSpecialist = async (req, res) => {
    try {
        let data = await specialistService.handleSaveSpecialist(req.body);
        return res.status(200).json(data);
    } catch (e) {
        res.status(200).json({
            errCode: -1,
            message: 'Errow from server',
        });
    }
};

let getAllSpecialist = async (req, res) => {
    try {
        let limit = req.query.limit;
        if (!limit) {
            limit = 10;
        }
        let data = await specialistService.getAllSpecialist(limit);
        return res.status(200).json(data);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            message: 'Errow from server',
        });
    }
};

let getDoctorBelongToSpecialist = async (req, res) => {
    try {
        let id = req.query.id;

        let data = await specialistService.getDoctorBelongToSpecialist(id);
        return res.status(200).json(data);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            message: 'Errow from server',
        });
    }
};

let getSpecialist = async (req, res) => {
    try {
        let id = req.query.id;

        let data = await specialistService.getSpecialist(id);
        return res.status(200).json(data);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            message: 'Errow from server',
        });
    }
};

module.exports = {
    handleSaveSpecialist,
    getAllSpecialist,
    getDoctorBelongToSpecialist,
    getSpecialist,
};
