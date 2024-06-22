const { Category } = require('../models'); 

const getallcate = () => new Promise(async (resolve, reject) => {
    try {
        const response = await Category.findAll({
            where: {
                parent_category: null // Fixed typo: should be `parent_category`
            }
        });
        console.log(response);
        resolve({
            err: response.length ? 0 : 1,
            msg: response.length ? 'OK' : 'Failed to get categories.',
            data: response // Changed `response` to `data` for clarity
        });
        
    } catch (error) {
        reject({
            err: 1,
            msg: 'lỗi category dfsgdsg',
            error: error.message
        });
    }
});

module.exports = { getallcate };
