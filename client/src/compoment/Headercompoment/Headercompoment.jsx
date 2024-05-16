import React from 'react'
import './Style.scss'
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdEditSquare } from "react-icons/md";
export default function Headercompoment() {
  return (
    <div className='header'>
      <div className="headertop">
        <div className="container">
          <div className="headertop_left">
            <img style={{ width: '70%' }} src="https://muaban.net/images/logo/muaban.svg" alt="" />
          </div>
          <div className="headertop_right">
            <div className="row" >
              <ul >
                <li className='col-md-4'><a href=""><FaRegNewspaper style={{fontSize:23,paddingRight: 5 }} /> Quản lý tin </a></li>
                <li className='col-md-4'><a href=""><IoIosNotifications style={{fontSize:23,paddingRight: 5 }} /> Thông báo</a></li>
                <li className='col-md-4'><a href=""><RxAvatar style={{fontSize:23,paddingRight: 5 }} /> Đăng nhập</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="headerbottom">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ul className='d-flex'>
                <li style={{ marginLeft: -25 }}><a href="">Trang chủ | </a></li>
                <li><a href=""> Bất động sản</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <input type="text" style={{width:'80%'}}/>
              <button><CiSearch /></button>
            </div>
            <div className="col-md-3">
              <button className=''><MdEditSquare /> Đăng tin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
