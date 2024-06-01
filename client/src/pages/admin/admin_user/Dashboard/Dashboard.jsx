import React, { useState } from 'react';
import './Style.scss';
import { FaAngleDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { MdPlace } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { ImNotification } from "react-icons/im";
import { FaEyeSlash } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { GoHistory } from "react-icons/go";
export default function Dashboard() {
  const [filterdanhmuc, setfilterdanhmuc] = useState(false);
  const handlefilterdanhmuc = () => {
    setfilterdanhmuc(!filterdanhmuc);
  }

  const [filterdichvu, setfilterdichvu] = useState(false);
  const handlefilterdichvu = () => {
    setfilterdichvu(!filterdichvu);
  }
  const [contentchilddetail,setcontentchilddetail] = useState(false);
  const handlecontentchilddetail = ()=>{
    setcontentchilddetail(!contentchilddetail);
  }
  return (
    <div className='col-md-9 mx-5 mt-3  '>
      <div className="container mx-3 my-3">
        <div className="dashboard_adminuser_header bg-white" style={{ height: 125, }}>
          <div className="d-flex align-items-center pt-3 mx-3" style={{}}>
            <span onClick={handlefilterdanhmuc} className="header-item" >Tất cả danh mục <FaAngleDown /></span>
            <span onClick={handlefilterdichvu} className="header-item">Loại dịch vụ <FaAngleDown /></span>
            <div className="search-container">
              <input type="text" placeholder='Nhập mã tin hoặc điện thoại' className="search-input" />
              <button className="search-button"><IoIosSearch /></button>
            </div>
          </div>
          {
            filterdanhmuc && (

              <div className="dashboard_adminuser_header_choose bg-white" style={{ width: 600, }}>
                <div className="d-flex" style={{ width: '100%' }}>
                  <p style={{ fontSize: 24, fontWeight: 700, textAlign: 'center', justifyContent: 'center', margin: 'auto' }}>Quản lý danh mục</p>
                  {/* onClick={(e) => handleFormToggle(e)} */}
                  <button type="button" className="btn" onClick={handlefilterdanhmuc} style={{ marginRight: 15 }} ><IoMdCloseCircle /></button>
                </div>

                <div className="dashboard_adminuser_header_choose_danhmuc mt-3">
                  <ul>
                    <li>
                      <Link>Bất động sản</Link>
                    </li>
                    <li>
                      <Link>Việc làm</Link>
                    </li>
                    <li>
                      <Link>Ô tô</Link>
                    </li>
                    <li>
                      <Link>Xe máy</Link>
                    </li>
                    <li>
                      <Link>Dịch vụ</Link>
                    </li>
                    <li>
                      <Link>Đồ điện tử</Link>
                    </li>
                    <li>
                      <Link>Điện máy, Đồ gia dụng</Link>
                    </li>
                    <li>
                      <Link>Sở thích, Mặt hàng khác</Link>
                    </li>
                    <li>
                      <Link>Thời trang, Mỹ phẩm</Link>
                    </li>
                    <li>
                      <Link>Đối tác, Cộng đồng</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}

          {
            filterdichvu && (

              <div className="dashboard_adminuser_header_choose bg-white" style={{ width: 600, }}>
                <div className="d-flex" style={{ width: '100%' }}>
                  <p style={{ fontSize: 24, fontWeight: 700, textAlign: 'center', justifyContent: 'center', margin: 'auto' }}>Quản lý danh mục</p>
                  {/* onClick={(e) => handleFormToggle(e)} */}
                  <button type="button" className="btn" onClick={handlefilterdichvu} style={{ marginRight: 15 }} ><IoMdCloseCircle /></button>
                </div>

                <div className="dashboard_adminuser_header_choose_danhmuc mt-3">
                  <ul>
                    <li>
                      <Link>Đẩy tin nổi bật</Link>
                    </li>
                    <li>
                      <Link>Đẩy tin vip đặc biệt</Link>
                    </li>
                    <li>
                      <Link>Đẩy tin vip 1</Link>
                    </li>
                    <li>
                      <Link>Đẩy tin vip 2</Link>
                    </li>
                    <li>
                      <Link>Đẩy tin vip 3</Link>
                    </li>
                    <li>
                      <Link>Đẩy tin thường</Link>
                    </li>
                    <li>
                      <Link>Tin nổi bật</Link>
                    </li>
                    <li>
                      <Link>Vip đặc biệt</Link>
                    </li>
                    <li>
                      <Link>Vip 1</Link>
                    </li>
                    <li>
                      <Link>Vip 2</Link>
                    </li>
                    <li>
                      <Link>Vip 3</Link>
                    </li>
                    <li>
                      <Link>Tin thường</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}

          <div className="mt-4 ">
            <div className="adminuser_header_info">
              <Link style={{ backgroundColor: '#88CBF8' }}>Tất cả (0)</Link>
              <Link>Đang hiển thị</Link>
              <Link>Cần mua dịch vụ (1)</Link>
              <Link>Tin lỗi</Link>
              <Link>Khác</Link>

            </div>
          </div>

        </div>

        <div className="dashboard_adminuser_body mt-3 bg-white" style={{ border: '1px solid tomato' }}>
          <div className="dashboard_adminuser_body_thongbao mt-3 mx-3" style={{ border: '1px solid yellow', borderRadius: 15, backgroundColor: '#FEF8E9', }}>
            <p className='pt-2'><FaBell style={{ fontSize: 24 }} /> <span style={{ paddingLeft: 10, fontSize: 16, fontWeight: 700 }}>Bước 1: kết nối zalo</span> </p>
            <p>Kết nối và quan tâm Zalo Muaban để không bỏ lỡ liên hệ nào từ người xem tin</p>
            <p > <button className='btn' style={{ backgroundColor: '#03A5FA', fontSize: 13, fontWeight: 650 }}><SiZalo /> Kết nối</button></p>

          </div>
        <div className="" style={{width:550}}>
          <div className="dashboard_adminuser_body_content mt-3 mx-3" style={{height:190}}>
            <div className="" style={{ height: 132, display: 'flex' }}>
              <div className="">
                <img style={{ height: 132,borderRadius:10 }} src="https://cloud.muaban.net/images/thumb-glist/2024/05/15/402/a6cc91d76b984615b1bbef40aea17461.jpg" alt="" />
              </div>
              <div className="dashboard_adminuser_body_content_child mt-3 mx-3">

                <p>tên title</p>
                <p><span style={{ color: 'red', fontWeight: 700 }}> 12.000 đ </span> <span><MdPlace /> Huyện đan phượng ,Hà nội</span></p>
                <p>trạng thái: <span style={{ width: 150, backgroundColor: 'red', fontWeight: 700, borderRadius: 5, color: 'white', height: 28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Chưa hiển thị <ImNotification style={{ marginLeft: 12 }} /></span></p>
                <p>Loại dịch vụ: <span>Chưa có</span></p>
                <p>Ngày hết hạn: <span>không </span></p>

              </div>
            </div>
            <div className="mt-2 contentchild" style={{float:'right'}}>
             <button className='btn btn-primary'><FaShoppingCart /> Mua dịch vụ</button>
             <button className='btn btn-light'><FaEyeSlash /> Ẩn tin</button>
             <div style={{ display: 'inline-block', position: 'relative' }}>
        <button onClick={handlecontentchilddetail} className='btn btn-outline-dark'>...</button>
        {contentchilddetail && (
          <div className='contentchild_item' style={{ width: 170, position: 'absolute', top: '100%', left: 0, marginTop: 5,backgroundColor:'white' }}>
            <button className='btn'><GiNotebook /> Sửa tin</button>
            <button className='btn'><GoHistory /> Lịch sử dịch vụ</button>
          </div>
        )}
      </div>
          </div>
          </div>
          </div>

          

        </div>

      </div>
    </div>
  );
}
