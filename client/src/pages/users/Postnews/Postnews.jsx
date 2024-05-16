import React, { useState } from 'react'
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

import './Style.scss'
export default function Postnews() {
  const [btndanhmuc,setbtndanhmuc] = useState(false);
 const handlebtndanhmuc = (e) =>{
  e.preventDefault();
  setbtndanhmuc(!btndanhmuc);
 }
  return (
    <div style={{ backgroundColor: '#F5F7F9' }}>
      <div className="" style={{ width: '45%', margin: 'auto' }}>
        <h2 style={{ fontWeight: 700, fontSize: 24, lineHeight: '28px', textAlign: 'center', paddingTop: 15 }}>Tạo tin đăng mới</h2>
      

<div class="mt-3 containerpostnews">
  <div className="">  
  <label htmlFor="" style={{color:'#0671CA',fontSize:16,fontWeight:700}}>Chọn chuyên mục đăng tin</label>
  <select onClick={(e) => handlebtndanhmuc(e)} class="select" name="" id="" >
    <option value="">Danh mục <span style={{backgroundColor:'red'}}>*</span> <IoMdArrowDropdownCircle /></option>
  </select>
  {  btndanhmuc && (
    <div className="danhmucdt bg-white">
        <h3 className='mt-3' style={{ fontWeight: 700, fontSize: 18, lineHeight: '24px',textAlign:'center'}}>Danh mục đăng tin</h3>
        <button type="button" className="btn" style={{ position: 'absolute', right: 10, top: 15 }} onClick={(e) => handlebtndanhmuc(e)}><IoMdCloseCircle /></button>
        <div className="d-flex dmdt" style={{justifyContent:'space-between'}}>
            <div className="d-flex" >
            <img className='img-fluid' style={{width:40,borderRadius:10}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzi1VRLFRTyd989y4S_3XP9rbUAkezZOtM3t-1fcfnw&s" alt="" />
            <p  style={{fontWeight:600,alignItems:'center',textAlign:'center',paddingLeft:15,marginTop:10}}>Bất động sản</p>
            </div>
            <div className="" style={{justifyContent:'center',alignContent:'center',alignItems:'center',paddingRight:15}}><IoMdArrowDropdownCircle /></div>
        </div>

        <div className="d-flex dmdt" style={{justifyContent:'space-between'}}>
            <div className="d-flex" >
            <img className='img-fluid' style={{width:40,borderRadius:10}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzi1VRLFRTyd989y4S_3XP9rbUAkezZOtM3t-1fcfnw&s" alt="" />
            <p  style={{fontWeight:600,alignItems:'center',textAlign:'center',paddingLeft:15,marginTop:10}}>Việc làm</p>
            </div>
            <div className="" style={{justifyContent:'center',alignContent:'center',alignItems:'center',paddingRight:15}}><IoMdArrowDropdownCircle /></div>
        </div>

        <div className="d-flex dmdt" style={{justifyContent:'space-between'}}>
            <div className="d-flex" >
            <img className='img-fluid' style={{width:40,borderRadius:10}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzi1VRLFRTyd989y4S_3XP9rbUAkezZOtM3t-1fcfnw&s" alt="" />
            <p  style={{fontWeight:600,alignItems:'center',textAlign:'center',paddingLeft:15,marginTop:10}}>Ô tô</p>
            </div>
            <div className="" style={{justifyContent:'center',alignContent:'center',alignItems:'center',paddingRight:15}}><IoMdArrowDropdownCircle /></div>
        </div>

        <div className="d-flex dmdt" style={{justifyContent:'space-between'}}>
            <div className="d-flex" >
            <img className='img-fluid' style={{width:40,borderRadius:10}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzi1VRLFRTyd989y4S_3XP9rbUAkezZOtM3t-1fcfnw&s" alt="" />
            <p  style={{fontWeight:600,alignItems:'center',textAlign:'center',paddingLeft:15,marginTop:10}}>Xe máy</p>
            </div>
            <div className="" style={{justifyContent:'center',alignContent:'center',alignItems:'center',paddingRight:15}}><IoMdArrowDropdownCircle /></div>
        </div>

        <div className="d-flex dmdt" style={{justifyContent:'space-between'}}>
            <div className="d-flex" >
            <img className='img-fluid' style={{width:40,borderRadius:10}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzi1VRLFRTyd989y4S_3XP9rbUAkezZOtM3t-1fcfnw&s" alt="" />
            <p  style={{fontWeight:600,alignItems:'center',textAlign:'center',paddingLeft:15,marginTop:10}}>Dịch vụ</p>
            </div>
            <div className="" style={{justifyContent:'center',alignContent:'center',alignItems:'center',paddingRight:15}}><IoMdArrowDropdownCircle /></div>
        </div>

        <div className="d-flex dmdt" style={{justifyContent:'space-between'}}>
            <div className="d-flex" >
            <img className='img-fluid' style={{width:40,borderRadius:10}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzi1VRLFRTyd989y4S_3XP9rbUAkezZOtM3t-1fcfnw&s" alt="" />
            <p  style={{fontWeight:600,alignItems:'center',textAlign:'center',paddingLeft:15,marginTop:10}}>Đồ điện tử</p>
            </div>
            <div className="" style={{justifyContent:'center',alignContent:'center',alignItems:'center',paddingRight:15}}><IoMdArrowDropdownCircle /></div>
        </div>

        <div className="d-flex dmdt" style={{justifyContent:'space-between'}}>
            <div className="d-flex" >
            <img className='img-fluid' style={{width:40,borderRadius:10}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzi1VRLFRTyd989y4S_3XP9rbUAkezZOtM3t-1fcfnw&s" alt="" />
            <p  style={{fontWeight:600,alignItems:'center',textAlign:'center',paddingLeft:15,marginTop:10}}>Điện máy,Đồ gia dụng</p>
            </div>
            <div className="" style={{justifyContent:'center',alignContent:'center',alignItems:'center',paddingRight:15}}><IoMdArrowDropdownCircle /></div>
        </div>

        <div className="d-flex dmdt" style={{justifyContent:'space-between'}}>
            <div className="d-flex" >
            <img className='img-fluid' style={{width:40,borderRadius:10}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzi1VRLFRTyd989y4S_3XP9rbUAkezZOtM3t-1fcfnw&s" alt="" />
            <p  style={{fontWeight:600,alignItems:'center',textAlign:'center',paddingLeft:15,marginTop:10}}>Sở thích,Mặt hàng khác</p>
            </div>
            <div className="" style={{justifyContent:'center',alignContent:'center',alignItems:'center',paddingRight:15}}><IoMdArrowDropdownCircle /></div>
        </div>

        <div className="d-flex dmdt" style={{justifyContent:'space-between'}}>
            <div className="d-flex" >
            <img className='img-fluid' style={{width:40,borderRadius:10}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzi1VRLFRTyd989y4S_3XP9rbUAkezZOtM3t-1fcfnw&s" alt="" />
            <p  style={{fontWeight:600,alignItems:'center',textAlign:'center',paddingLeft:15,marginTop:10}}>Thời trang, Mỹ phẩm</p>
            </div>
            <div className="" style={{justifyContent:'center',alignContent:'center',alignItems:'center',paddingRight:15}}><IoMdArrowDropdownCircle /></div>
        </div>

        <div className="d-flex dmdt" style={{justifyContent:'space-between'}}>
            <div className="d-flex" >
            <img className='img-fluid' style={{width:40,borderRadius:10}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzi1VRLFRTyd989y4S_3XP9rbUAkezZOtM3t-1fcfnw&s" alt="" />
            <p  style={{fontWeight:600,alignItems:'center',textAlign:'center',paddingLeft:15,marginTop:10}}>Đối tác, Cộng đồng</p>
            </div>
            <div className="" style={{justifyContent:'center',alignContent:'center',alignItems:'center',paddingRight:15}}><IoMdArrowDropdownCircle /></div>
        </div>
    </div>
  )
}
</div>
</div>

      </div>
    </div>
  )
}
