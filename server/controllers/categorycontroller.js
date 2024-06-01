const cateservice = require('../services/Categoryservice')

const getallcategory =async (req,res)=>{
      try {
        const response = await cateservice.getallcate();
        return res.status(200).json(response.data)
      } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller: ' + error
        })
      }
}

module.exports = { getallcategory }