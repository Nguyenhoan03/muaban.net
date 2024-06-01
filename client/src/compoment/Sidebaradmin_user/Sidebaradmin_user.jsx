import React from 'react'
import { FaCamera } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { RiProfileLine } from "react-icons/ri";
import { MdAddCard } from "react-icons/md";
import { TbPremiumRights } from "react-icons/tb";
import { PiNewspaperBold } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import './Style.scss'
import { BsPostcardHeartFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { CiLock } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

export default function Sidebaradmin_user() {
  return (
    <div className='mt-3 col-md-3'>
      <div className="container " >
        <div className="bg-white" style={{ width: 300, }}>
          <div className="info_admin_user d-flex " style={{ height: 55, borderBottom: '1px solid gray', }}>
            <div className="">
              <img style={{ width: 55, height: 55, borderRadius: '50%', objectFit: 'cover', alignItems: 'center', }} src="https://cloud.muaban.net/avatars/thumb-avatar/2024/05/17/519/3c29dde8b86f42168476c138684d9985.jpg" alt="" />
              <FaCamera style={{ position: 'relative', right: 8, bottom: -15 }} />
            </div>
            <div className="" style={{ marginLeft: 10,}}>
              <p style={{ fontSize: 13, fontWeight: 700, marginTop: 5 }}>Hoàn Nguyễn</p>
              <p style={{ marginTop: -13, }}>Tham gia từ 02/2024</p>
            </div>
          </div>
          <div className="danhmucadmin_user" style={{  }}>
    <p className="danhmucadmin_title">Tiện ích</p>
    <ul className="danhmucadmin_list">
        <li className="danhmucadmin_item">
            <Link className="danhmucadmin_link"><FaRegNewspaper /> Quản lý tin <FaAngleRight /></Link>
        </li>
        <li className="danhmucadmin_item">
            <Link className="danhmucadmin_link"><ImProfile /> Hồ sơ của tôi <FaAngleRight /></Link>
        </li>
        <li className="danhmucadmin_item">
            <Link className="danhmucadmin_link"><RiProfileLine /> Quản lý ứng viên <FaAngleRight /></Link>
        </li>
        <li className="danhmucadmin_item">
            <Link className="danhmucadmin_link"><MdAddCard /> Nạp tiền <FaAngleRight /></Link>
        </li>
        <li className="danhmucadmin_item">
            <Link className="danhmucadmin_link"><TbPremiumRights /> Mã thưởng <FaAngleRight /></Link>
        </li>
        <li className="danhmucadmin_item">
            <Link className="danhmucadmin_link"><PiNewspaperBold /> Quản lý hóa đơn <FaAngleRight /></Link>
        </li>
        <li className="danhmucadmin_item">
            <Link className="danhmucadmin_link"><MdHistory /> Lịch sử giao dịch <FaAngleRight /></Link>
        </li>
    </ul>
</div>

<div className="danhmucadmin_user " style={{  }}>
    <p className="danhmucadmin_title">Cá nhân</p>
    <ul className="danhmucadmin_list">
        <li className="danhmucadmin_item">
            <Link className="danhmucadmin_link"><BsPostcardHeartFill />Tin yêu thích <FaAngleRight /></Link>
        </li>
        <li className="danhmucadmin_item">
            <Link className="danhmucadmin_link"><CiSearch  /> Tìm kiếm đã lưu <FaAngleRight /></Link>
        </li>
        <li className="danhmucadmin_item">
            <Link className="danhmucadmin_link"><RxAvatar  /> Thông tin tài khoản <FaAngleRight /></Link>
        </li>
        <li className="danhmucadmin_item">
            <Link className="danhmucadmin_link"><CiLock  /> Thay đổi mật khẩu <FaAngleRight /></Link>
        </li>
        <li className="danhmucadmin_item">
            <Link className="danhmucadmin_link"><IoIosLogOut  /> Đăng xuất <FaAngleRight /></Link>
        </li>
      
    </ul>
    <p style={{fontSize:16,fontWeight:700,marginTop:10}}>Thêm nhân viên chăm sóc</p>
    <div className="">
      <input type="text" name="" id="" style={{height:35,borderRadius:7}} placeholder='nhập mã nhân viên'/>
      <button className='btn btn-primary mx-1'  style={{}}>Thêm</button>
    </div>
</div>

        </div>
      </div>
    </div>
  )
}
