const { Product } = require('../models');
const { Op, col } = require('sequelize'); // Import 'col' từ 'sequelize'
const { Category } = require('../models');

const Productservicevips = async () => {
    try {
      
        const response = await Product.findAll({
            include: [
              { model: Category, as: 'ChildCategory', raw: true },
              { model: Category, as: 'ParentCategory', raw: true }
            ],
            where: { loaidv: 'VIP S' },
            attributes: [
              'ChildCategory', 'ParentCategory', 'title', 'img', 'diachi', 'luongtoithieu', 'luongtoida', 'createdAt'
            ],
            raw: true // Fetch raw data
          });
          
         
        
        const bdsvct = await Product.findAll({
            include: {
                model: Category,
                required: true,
                attributes: ['namecategory']
            },
            where: { category_id: 1 },
            attributes: [
                'category_child_id', 'title', 'img', 'diachi', 'luongtoithieu', 'luongtoida', 'createdAt'
            ]
        });

        const vieclamnoibat = await Product.findAll({
            include: {
                model: Category,
                required: true,
                attributes: ['namecategory']
            },
            where: { category_id: 2 },
            attributes: [
                'category_child_id', 'title', 'img', 'diachi', 'luongtoithieu', 'luongtoida', 'createdAt'
            ]
        });

        const otobanvachothue = await Product.findAll({
            include: {
                model: Category,
                required: true,
                attributes: ['namecategory']
            },
            where: {
                category_id: 3,
                [Op.or]: [
                    { category_child_id: 19 },
                    { category_child_id: 20 }
                ]
            },
            attributes: [
                'category_child_id', 'title', 'img', 'diachi', 'luongtoithieu', 'luongtoida', 'createdAt'
            ]
        });

        const xemaybanvachothue = await Product.findAll({
            include: {
                model: Category,
                required: true,
                attributes: ['namecategory']
            },
            where: {
                category_id: 4,
                category_child_id: {
                    [Op.or]: [22, 23]
                }
            },
            attributes: [
                'category_child_id', 'title', 'img', 'diachi', 'luongtoithieu', 'luongtoida', 'createdAt'
            ]
        });

        const data = {
            response,
            bdsvct,
            vieclamnoibat,
            otobanvachothue,
            xemaybanvachothue
        };

        return {
            err: response.length ? 0 : 1,
            msg: response.length ? 'OK' : 'Failed to get categories.',
            data
        };
    } catch (error) {
        return {
            err: -1,
            msg: 'Failed to retrieve VIP products: ' + error.message
        };
    }
};

module.exports = { Productservicevips };
