import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function Slickslider({ settings }) {

  return (
    <Slider {...settings } >
         <div className="col-md-2 mt-3 d-flex">               
            <div key="1" className=" border-radius-5 news_outstanding_card border-radius-3" style={{marginLeft:0,marginRight:20,borderRadius:7,width:170,backgroundColor:'white',border:'1px solid grey'}}>
              <div className="" style={{ position: 'relative',alignItems:'center',alignContent:'center',justifyContent:'center',textAlign:'center' }}>
                <img style={{ display: 'inline-block', width: 170, height: 130 }} src="https://cloud.muaban.net/images/thumb-detail/2024/02/19/034/9fab57e6a5674be2848b0b08d70b5ca0.jpg" alt="" />
                <p style={{ position: 'absolute', top: 5, left: 10, backgroundColor: '#BF1D28', color: 'white', fontWeight: 650, fontSize: 12, borderRadius: 4, width: 57, textAlign: 'center' }}>VIP S</p>
                <p style={{ position: 'absolute', top: 0, right: 10 }}><FaRegHeart /></p>
              </div>

              <div className="information ">
                <p className='line-clamp'><Link> Công ty BB Giấy Kiến An cần tuyển lao động phổ thông </Link></p>
                <p className='text-danger ' style={{ fontWeight: 650, fontSize: 14 }}>8 Tỷ 500 triệu</p>

              </div>
              <div className="address">
                <p><IoMdClock /> Hôm nay</p>
                <p className='address_place'><MdOutlinePlace /> Quận 6, Thủ đức,HCM</p>
              </div>
            </div>
            </div>

         

            <div className="col-md-2 mt-3 d-flex">               
            <div key="1" className=" border-radius-5 news_outstanding_card border-radius-3" style={{marginLeft:0,marginRight:20,borderRadius:7,width:170,backgroundColor:'white',border:'1px solid grey'}}>
              <div className="" style={{ position: 'relative',alignItems:'center',alignContent:'center',justifyContent:'center',textAlign:'center' }}>
                <img style={{ display: 'inline-block', width: 170, height: 130 }} src="https://cloud.muaban.net/images/thumb-detail/2024/02/19/034/9fab57e6a5674be2848b0b08d70b5ca0.jpg" alt="" />
                <p style={{ position: 'absolute', top: 5, left: 10, backgroundColor: '#BF1D28', color: 'white', fontWeight: 650, fontSize: 12, borderRadius: 4, width: 57, textAlign: 'center' }}>VIP S</p>
                <p style={{ position: 'absolute', top: 0, right: 10 }}><FaRegHeart /></p>
              </div>

              <div className="information ">
                <p className='line-clamp'><Link> Công ty BB Giấy Kiến An cần tuyển lao động phổ thông </Link></p>
                <p className='text-danger ' style={{ fontWeight: 650, fontSize: 14 }}>8 Tỷ 500 triệu</p>

              </div>
              <div className="address">
                <p><IoMdClock /> Hôm nay</p>
                <p className='address_place'><MdOutlinePlace /> Quận 6, Thủ đức,HCM</p>
              </div>
            </div>
            </div>

            <div className="col-md-2 mt-3 d-flex">               
            <div key="1" className=" border-radius-5 news_outstanding_card border-radius-3" style={{marginLeft:0,marginRight:20,borderRadius:7,width:170,backgroundColor:'white',border:'1px solid grey'}}>
              <div className="" style={{ position: 'relative',alignItems:'center',alignContent:'center',justifyContent:'center',textAlign:'center' }}>
                <img style={{ display: 'inline-block', width: 170, height: 130 }} src="https://cloud.muaban.net/images/thumb-detail/2024/02/19/034/9fab57e6a5674be2848b0b08d70b5ca0.jpg" alt="" />
                <p style={{ position: 'absolute', top: 5, left: 10, backgroundColor: '#BF1D28', color: 'white', fontWeight: 650, fontSize: 12, borderRadius: 4, width: 57, textAlign: 'center' }}>VIP S</p>
                <p style={{ position: 'absolute', top: 0, right: 10 }}><FaRegHeart /></p>
              </div>

              <div className="information ">
                <p className='line-clamp'><Link> Công ty BB Giấy Kiến An cần tuyển lao động phổ thông </Link></p>
                <p className='text-danger ' style={{ fontWeight: 650, fontSize: 14 }}>8 Tỷ 500 triệu</p>

              </div>
              <div className="address">
                <p><IoMdClock /> Hôm nay</p>
                <p className='address_place'><MdOutlinePlace /> Quận 6, Thủ đức,HCM</p>
              </div>
            </div>
            </div>

            <div className="col-md-2 mt-3 d-flex">               
            <div key="1" className=" border-radius-5 news_outstanding_card border-radius-3" style={{marginLeft:0,marginRight:20,borderRadius:7,width:170,backgroundColor:'white',border:'1px solid grey'}}>
              <div className="" style={{ position: 'relative',alignItems:'center',alignContent:'center',justifyContent:'center',textAlign:'center' }}>
                <img style={{ display: 'inline-block', width: 170, height: 130 }} src="https://cloud.muaban.net/images/thumb-detail/2024/02/19/034/9fab57e6a5674be2848b0b08d70b5ca0.jpg" alt="" />
                <p style={{ position: 'absolute', top: 5, left: 10, backgroundColor: '#BF1D28', color: 'white', fontWeight: 650, fontSize: 12, borderRadius: 4, width: 57, textAlign: 'center' }}>VIP S</p>
                <p style={{ position: 'absolute', top: 0, right: 10 }}><FaRegHeart /></p>
              </div>

              <div className="information ">
                <p className='line-clamp'><Link> Công ty BB Giấy Kiến An cần tuyển lao động phổ thông </Link></p>
                <p className='text-danger ' style={{ fontWeight: 650, fontSize: 14 }}>8 Tỷ 500 triệu</p>

              </div>
              <div className="address">
                <p><IoMdClock /> Hôm nay</p>
                <p className='address_place'><MdOutlinePlace /> Quận 6, Thủ đức,HCM</p>
              </div>
            </div>
            </div>

            <div className="col-md-2 mt-3 d-flex">               
            <div key="1" className=" border-radius-5 news_outstanding_card border-radius-3" style={{marginLeft:0,marginRight:20,borderRadius:7,width:170,backgroundColor:'white',border:'1px solid grey'}}>
              <div className="" style={{ position: 'relative',alignItems:'center',alignContent:'center',justifyContent:'center',textAlign:'center' }}>
                <img style={{ display: 'inline-block', width: 170, height: 130 }} src="https://cloud.muaban.net/images/thumb-detail/2024/02/19/034/9fab57e6a5674be2848b0b08d70b5ca0.jpg" alt="" />
                <p style={{ position: 'absolute', top: 5, left: 10, backgroundColor: '#BF1D28', color: 'white', fontWeight: 650, fontSize: 12, borderRadius: 4, width: 57, textAlign: 'center' }}>VIP S</p>
                <p style={{ position: 'absolute', top: 0, right: 10 }}><FaRegHeart /></p>
              </div>

              <div className="information ">
                <p className='line-clamp'><Link> Công ty BB Giấy Kiến An cần tuyển lao động phổ thông </Link></p>
                <p className='text-danger ' style={{ fontWeight: 650, fontSize: 14 }}>8 Tỷ 500 triệu</p>

              </div>
              <div className="address">
                <p><IoMdClock /> Hôm nay</p>
                <p className='address_place'><MdOutlinePlace /> Quận 6, Thủ đức,HCM</p>
              </div>
            </div>
            </div>

            <div className="col-md-2 mt-3 d-flex">               
            <div key="1" className=" border-radius-5 news_outstanding_card border-radius-3" style={{marginLeft:0,marginRight:20,borderRadius:7,width:170,backgroundColor:'white',border:'1px solid grey'}}>
              <div className="" style={{ position: 'relative',alignItems:'center',alignContent:'center',justifyContent:'center',textAlign:'center' }}>
                <img style={{ display: 'inline-block', width: 170, height: 130 }} src="https://cloud.muaban.net/images/thumb-detail/2024/02/19/034/9fab57e6a5674be2848b0b08d70b5ca0.jpg" alt="" />
                <p style={{ position: 'absolute', top: 5, left: 10, backgroundColor: '#BF1D28', color: 'white', fontWeight: 650, fontSize: 12, borderRadius: 4, width: 57, textAlign: 'center' }}>VIP S</p>
                <p style={{ position: 'absolute', top: 0, right: 10 }}><FaRegHeart /></p>
              </div>

              <div className="information ">
                <p className='line-clamp'><Link> Công ty BB Giấy Kiến An cần tuyển lao động phổ thông </Link></p>
                <p className='text-danger ' style={{ fontWeight: 650, fontSize: 14 }}>8 Tỷ 500 triệu</p>

              </div>
              <div className="address">
                <p><IoMdClock /> Hôm nay</p>
                <p className='address_place'><MdOutlinePlace /> Quận 6, Thủ đức,HCM</p>
              </div>
            </div>
            </div>

             <div className="col-md-2 mt-3 d-flex">               
            <div key="1" className=" border-radius-5 news_outstanding_card border-radius-3" style={{marginLeft:0,marginRight:20,borderRadius:7,width:170,backgroundColor:'white',border:'1px solid grey'}}>
              <div className="" style={{ position: 'relative',alignItems:'center',alignContent:'center',justifyContent:'center',textAlign:'center' }}>
                <img style={{ display: 'inline-block', width: 170, height: 130 }} src="https://cloud.muaban.net/images/thumb-detail/2024/02/19/034/9fab57e6a5674be2848b0b08d70b5ca0.jpg" alt="" />
                <p style={{ position: 'absolute', top: 5, left: 10, backgroundColor: '#BF1D28', color: 'white', fontWeight: 650, fontSize: 12, borderRadius: 4, width: 57, textAlign: 'center' }}>VIP S</p>
                <p style={{ position: 'absolute', top: 0, right: 10 }}><FaRegHeart /></p>
              </div>

              <div className="information ">
                <p className='line-clamp'><Link> Công ty BB Giấy Kiến An cần tuyển lao động phổ thông </Link></p>
                <p className='text-danger ' style={{ fontWeight: 650, fontSize: 14 }}>8 Tỷ 500 triệu</p>

              </div>
              <div className="address">
                <p><IoMdClock /> Hôm nay</p>
                <p className='address_place'><MdOutlinePlace /> Quận 6, Thủ đức,HCM</p>
              </div>
            </div>
            </div>
    </Slider>
  );
}
