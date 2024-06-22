const { Productservicevips } = require('../services/Productservice');

const homecontrollerproduct = async (req, res) => {
  try {
    const result = await Productservicevips();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  homecontrollerproduct,
};
