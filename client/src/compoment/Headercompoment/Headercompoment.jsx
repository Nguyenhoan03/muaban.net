import React from 'react';
import './Style.scss';
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdEditSquare } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Headercompoment() {
  return (
    <div className='header'>
      <div className="headertop">
        <div className="container">
          <div className="headertop_left">
            <Link to="/">
            <img className="logo" src="https://muaban.net/images/logo/muaban.svg" alt="Logo" />
            </Link>
          </div>
          <div className="headertop_right">
            <ul className="header_links">
              <li><Link to="/dashboard"><FaRegNewspaper className="icon" /> Quản lý tin</Link></li>
              <li><Link to=""><IoIosNotifications className="icon" /> Thông báo</Link></li>
              <li><Link to="/Login"><RxAvatar className="icon" /> Đăng nhập</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="headerbottom">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="nav_container">
            <ul className='nav_links'>
              <li><a href="#">Trang chủ</a> |</li>
              <li><a href="#">Bất động sản</a></li>
            </ul>
          </div>
          <div className="search_container d-flex">
            <input type="text" className="search_input" placeholder="Tìm kiếm..." />
            <button className="search_button"><CiSearch /></button>
          </div>
          <div className="post_container d-flex justify-content-end">
            <button className='post_button'><MdEditSquare /> Đăng tin</button>
          </div>
        </div>
      </div>
    </div>
  );
}
