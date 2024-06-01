const { Product } = require('../models');
const { Op } = require('sequelize');
const { Category } = require('../models');

const Productservicevips = () => new Promise(async (resolve, reject) => {
    try {
        const response = await Product.findAll({
            include: {
                model: Category,
                required: true,
                attributes: ['namecategory']
            },
            where: { loaidv: 'VIP S' },
            attributes: [
                'title', 'img', 'diachi', 'luongtoithieu', 'luongtoida','createdAt'
            ]
        });

        const bdsvct = await Product.findAll({
            include: {
                model: Category,
                required: true,
                attributes: ['namecategory']
            },
            where: { category_id: 1 },
            attributes: [
                'title', 'img', 'diachi', 'luongtoithieu', 'luongtoida','createdAt'
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
                'title', 'img', 'diachi', 'luongtoithieu', 'luongtoida','createdAt'
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
                'title', 'img', 'diachi', 'luongtoithieu', 'luongtoida','createdAt'
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
                'title', 'img', 'diachi', 'luongtoithieu', 'luongtoida','createdAt'
            ]
        });

        const data = {
            response,
            bdsvct,
            vieclamnoibat,
            otobanvachothue,
            xemaybanvachothue
        };

        resolve({
            err: response.length ? 0 : 1,
            msg: response.length ? 'OK' : 'Failed to get categories.',
            data
        });
    } catch (error) {
        reject({
            err: -1,
            msg: 'Failed to retrieve VIP products: ' + error.message
        });
    }
});

module.exports = { Productservicevips };
