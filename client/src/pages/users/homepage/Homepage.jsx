import React, { useEffect, useRef } from 'react'
import './Style.scss'
import { RiInformation2Fill } from "react-icons/ri";
import { FaRegHeart, FaChevronRight, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import { IoMdClock } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { useState } from 'react';
import { getallcate } from '../../../service/categoryservice.js'
import {gethomepageproduct} from '../../../service/productservice.js'

import Slickslider from '../../../compoment/Slickslider/Slickslider.jsx';
export default function Homepage() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`next-arrow ${className}`}
        style={{
          ...style, display: "flex",
          alignItems: "center",
          justifyContent: "center", backgroundColor: "red", alignItems: 'center', cursor: 'pointer', marginRight: 35, width: 40, height: 40, justifyContent: 'center', opacity: 0.5, zIndex: 2
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`prev-arrow ${className}`}
        style={{
          ...style, display: "flex",
          alignItems: "center",
          justifyContent: "center", backgroundColor: "green", alignItems: 'center', cursor: 'pointer', marginLeft: 35, width: 40, height: 40, justifyContent: 'center', opacity: 0.5, zIndex: 2
        }}
        onClick={onClick}
      />
    );
  }

  const handlemore = () => {

  }


  const ref = useRef(null);

  const [danhmuccate, setdanhmuccate] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cate = await getallcate();
        // Kiểm tra nếu cate là một mảng trước khi gán vào state
        if (Array.isArray(cate)) {
          setdanhmuccate(cate);
        } else {
          console.error('Error: categories is not an array');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };


    fetchCategories();
  }, []);
  const [productpostvips,setproductpostvips] = useState([]);
  useEffect(() => {
    const fetchproductvips = async () => {
        try {
            const response = await gethomepageproduct();
            setproductpostvips(response.response);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    fetchproductvips();
}, []);
console.log(productpostvips)  



const [productbdsvct,setproductbdsvct] = useState([]);
  useEffect(() => {
    const fetchproductvips = async () => {
        try {
            const response = await gethomepageproduct();
            setproductbdsvct(response.bdsvct);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    fetchproductvips();
}, []);

const [productvlnb,setproductvlnb] = useState([]);
  useEffect(() => {
    const fetchproductvlnb = async () => {
        try {
            const response = await gethomepageproduct();
            setproductvlnb(response.vieclamnoibat);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    fetchproductvlnb();
}, []);


const [productotobanvachothue,setproductotobanvachothue] = useState([]);
  useEffect(() => {
    const fetchproductotbvct = async () => {
        try {
            const response = await gethomepageproduct();
            setproductotobanvachothue(response.otobanvachothue);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    fetchproductotbvct();
}, []);


const [productxmbvct,setproductxmbvct] = useState([]);
  useEffect(() => {
    const fetchproductxmbvct = async () => {
        try {
            const response = await gethomepageproduct();
            setproductxmbvct(response.xemaybanvachothue);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    fetchproductxmbvct();
}, []);


  return (
    <div className="container-homepage">
      <div className='bodyhomepage'>
        <div className="bodyhomepage_header mt-2">
          <div className="row">
            {danhmuccate.slice(0, 5).map((cateall) => (
              <div className="bodyhomepage_header_img col-md-2">
                  <Link>
                  <img className='img-fluid' src={cateall.image} alt="" />
                  <p>{cateall.namecategory}</p>
              </Link>
                </div>
            ))}
          </div>
          <div className="row">
            {danhmuccate.slice(5).map((cateall) => (
              <div className="bodyhomepage_header_img col-md-2">
                  <Link>
                  <img className='img-fluid' src={cateall.image} alt="" />
                  <p>{cateall.namecategory}</p>
              </Link>
                </div>
            ))}
          </div>
        </div>

        <div className="carousel-container mt-3" >
          <Slider {...settings}>
            <div>
              <img style={{ borderRadius: 10, height: 250, width: '100%' }} src="https://cloud.muaban.net/banners/2024/04/23/076/2ac35ef5a58c4c3785481758786b43c1.jpg" alt="" />
            </div>
            <div>
              <img style={{ borderRadius: 10, height: 250, width: '100%' }} src="https://cloud.muaban.net/banners/2023/11/07/518/a751598760c041ee8fb8bba41748b12a.png" alt="" />
            </div>
            <div>
              <img style={{ borderRadius: 10, height: 250, width: '100%' }} src="https://cloud.muaban.net/banners/2023/11/07/476/0772ac229f374d48b7ad7664d4e929a6.png" alt="" />
            </div>

          </Slider>
        </div>

        <div className="news_outstanding mt-3" style={{ border: '1px solid tomato' }}>
          <h2 className='pt-3 pb-3 px-2'>Tin đăng nổi bật <RiInformation2Fill style={{ textAlign: 'center', alignItems: 'center' }} /></h2>

          <div className="row" style={{ width: '85%', margin: 'auto' }}>
            {productpostvips.map((pvips, index) => (
                 <div key={index} className="col-md-20 mt-3">
                  <Link style={{textDecoration:'none',color:'black'}} to={`/${pvips.Category.namecategory}/${pvips.title}`}>
                    <div className="mx-2 border-radius-5 news_outstanding_card border-radius-3" style={{ width: 190, backgroundColor: 'white' }}>
                        <div style={{ position: 'relative', alignItems: 'center', textAlign: 'center' }}>
                            <img style={{ display: 'inline-block', width: 165, height: 130 }} src={pvips.img} alt="" />
                            <p style={{ position: 'absolute', top: 5, left: 10, backgroundColor: '#BF1D28', color: 'white', fontWeight: 650, fontSize: 12, borderRadius: 4, width: 57, textAlign: 'center' }}>
                                {pvips.loaidv}
                            </p>
                            <p style={{ position: 'absolute', top: 0, right: 10 }}>
                                <FaRegHeart />
                            </p>
                        </div>
                        <div className="information">
                            <p className="line-clamp">
                                <Link to={`/${pvips.Category.namecategory}/${pvips.title}`}>{pvips.title}</Link>
                            </p>
                            <p className="text-danger" style={{ fontWeight: 650, fontSize: 14 }}>
                                {pvips.luongtoithieu} - {pvips.luongtoida}
                            </p>
                        </div>
                        <div className="address">
                            <p><IoMdClock /> {pvips.createdAt}</p>
                            <p className="address_place"><MdOutlinePlace /> {pvips.diachi}</p>
                        </div>
                    </div>
                    </Link>
                </div>
            ))}
          </div>
          <button onClick={() => handlemore()} className='btn btn-secondary my-3 d-flex' style={{ backgroundColor: '#ECF6FE', color: '#0671CA', margin: 'auto', alignItems: 'center' }}>Xen thêm tin <FaChevronRight className='mx-2' /></button>
        </div>


        {/* Bất động sản và cho thuê */}
        <div className="real_estate mt-4" style={{ borderRadius: 10, border: '1px solid white', backgroundColor: 'white', }}>
          <h2 className='mt-3 px-2 ' style={{ fontWeight: 400, paddingRight: 15, fontSize: 24, fontWeight: 400, }}>Bất động sản bán và cho thuê</h2>
          <div className="real_estate_content" >
            <div className="real_estate_content_card" style={{ alignItems: 'center', position: 'relative' }}>
              <div className="row">
                <Slickslider ref={ref} settings={settings2} datahomepageproduct={productbdsvct} />
              </div>
            </div>
          </div>
          <button onClick={() => handlemore()} className='btn btn-secondary my-3 d-flex' style={{ backgroundColor: '#ECF6FE', color: '#0671CA', margin: 'auto', alignItems: 'center' }}>Xen thêm tin <FaChevronRight className='mx-2' /></button>
        </div>

        {/* Việc làm nổi bật */}
        <div className="real_estate mt-4" style={{ borderRadius: 10, border: '1px solid white', backgroundColor: 'white', }}>
          <h2 className='mt-3 px-2 ' style={{ fontWeight: 400, paddingRight: 15, fontSize: 24, fontWeight: 400, }}>Việc làm nổi bật</h2>
          <div className="real_estate_content" >
            <div className="real_estate_content_card" style={{ alignItems: 'center', position: 'relative' }}>
              <div className="row">
                <Slickslider ref={ref} settings={settings2} datahomepageproduct={productvlnb}/>
              </div>
            </div>
          </div>
          <button onClick={() => handlemore()} className='btn btn-secondary my-3 d-flex' style={{ backgroundColor: '#ECF6FE', color: '#0671CA', margin: 'auto', alignItems: 'center' }}>Xen thêm tin <FaChevronRight className='mx-2' /></button>
        </div>

        {/* Ô tô bán và cho thuê */}
        <div className="real_estate mt-4" style={{ borderRadius: 10, border: '1px solid white', backgroundColor: 'white', }}>
          <h2 className='mt-3 px-2 ' style={{ fontWeight: 400, paddingRight: 15, fontSize: 24, fontWeight: 400, }}> Ô tô bán và cho thuê </h2>
          <div className="real_estate_content" >
            <div className="real_estate_content_card" style={{ alignItems: 'center', position: 'relative' }}>
              <div className="row">
                <Slickslider ref={ref} settings={settings2} datahomepageproduct={productotobanvachothue}/>
              </div>
            </div>
          </div>
          <button onClick={() => handlemore()} className='btn btn-secondary my-3 d-flex' style={{ backgroundColor: '#ECF6FE', color: '#0671CA', margin: 'auto', alignItems: 'center' }}>Xen thêm tin <FaChevronRight className='mx-2' /></button>
        </div>

        {/* Xe máy bán và cho thuê */}
        <div className="real_estate mt-4" style={{ borderRadius: 10, border: '1px solid white', backgroundColor: 'white', }}>
          <h2 className='mt-3 px-2 ' style={{ fontWeight: 400, paddingRight: 15, fontSize: 24, fontWeight: 400, }}> Xe máy bán và cho thuê </h2>
          <div className="real_estate_content" >
            <div className="real_estate_content_card" style={{ alignItems: 'center', position: 'relative' }}>
              <div className="row">
                <Slickslider ref={ref} settings={settings2} datahomepageproduct={productxmbvct}/>
              </div>
            </div>
          </div>
          <button onClick={() => handlemore()} className='btn btn-secondary my-3 d-flex' style={{ backgroundColor: '#ECF6FE', color: '#0671CA', margin: 'auto', alignItems: 'center' }}>Xen thêm tin <FaChevronRight className='mx-2' /></button>
        </div>

      </div>
    </div>
  )
}