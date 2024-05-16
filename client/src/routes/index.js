import React from 'react'
import Homepage from '../pages/users/homepage/Homepage'
import Product from '.././pages/users/productpage/Productpage'
import Notfoundpage from '.././pages/users/Notfoundpage/Notfoundpage'
import Vieclam from '.././pages/users/Categorydetail/Categorydetail'
import Detailpage from '.././pages/users/Detailpage/Detailpage'
import Postnews from '.././pages/users/Postnews/Postnews'
export const routes = [
    {
        path:'/',
        page: Homepage,
        isShowHeader: true,
    },
    {
        path:'/product',
        page: Product,
        isShowHeader: true,

    },
    {
        path:'/*',
        page: Notfoundpage

    },
    {
        path:'/viec-lam',
        page: Vieclam,
        isShowHeader: true,

    },
    {
        path:'/category/title',
        page: Detailpage,
        isShowHeader: true,

    },
    {
        path:'/dang-tin',
        page: Postnews,
        isShowHeader: true,

    }
]
