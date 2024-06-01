const { Productservicevips } = require('../services/Productservice');

const homecontrollerproduct = async (req, res) => {
    try {
        const response = await Productservicevips();
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller: ' + error.msg
        });
    }
};

module.exports = { homecontrollerproduct };
