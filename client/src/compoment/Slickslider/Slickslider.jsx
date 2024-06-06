import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Slickslider({ settings, datahomepageproduct = [] }) {
  return (
    <Slider {...settings}>
      {
        datahomepageproduct.map((dataproduct, index) => (
          <div key={index} className="col-md-2 mt-3 d-flex">   
            <Link 
              style={{ textDecoration: 'none' }} 
              to={`/${dataproduct.Category.namecategory}/${dataproduct.title}`}
            >            
              <div className="border-radius-5 news_outstanding_card border-radius-3" 
                style={{ 
                  marginLeft: 0,
                  marginRight: 20,
                  borderRadius: 7,
                  width: 170,
                  backgroundColor: 'white',
                  border: '1px solid gray',
                  color:'black'
                }}
              >
                <div style={{ 
                  position: 'relative',
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                  textAlign: 'center' ,
                  color:'black'
                }}>
                  <img 
                    style={{ display: 'inline-block', width: 170, height: 130 }} 
                    src={dataproduct.img} 
                    alt={dataproduct.title} 
                  />
                  <p 
                    style={{ 
                      position: 'absolute',
                      top: 5,
                      left: 10,
                      backgroundColor: '#BF1D28',
                      color: 'white',
                      fontWeight: 650,
                      fontSize: 12,
                      borderRadius: 4,
                      width: 57,
                      textAlign: 'center',
                      color:'black'
                    }}
                  >
                    {dataproduct.loaidv}
                  </p>
                  <p style={{ position: 'absolute', top: 0, right: 10 }}>
                    <FaRegHeart />
                  </p>
                </div>
                <div className="information">
                  <p className='line-clamp'>
                    {dataproduct.title}
                  </p>
                  <p className='text-danger' style={{ fontWeight: 650, fontSize: 14 }}>
                    8 Tỷ 500 triệu
                  </p>
                </div>
                <div className="address">
                  <p><IoMdClock /> {dataproduct.createdAt}</p>
                  <p className='address_place'><MdOutlinePlace /> {dataproduct.diachi}</p>
                </div>
              </div>
            </Link>
          </div>
        ))
      }
    </Slider>
  );
}
