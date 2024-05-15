import React from 'react'
import { IoMdArrowDropdownCircle } from "react-icons/io";

export default function Postnews() {
  return (
    <div style={{ backgroundColor: '#F5F7F9' }}>
      <div className="container" style={{ width: '45%', margin: 'auto' }}>
        <h2 style={{ fontWeight: 700, fontSize: 24, lineHeight: '28px', textAlign: 'center', paddingTop: 15 }}>Tạo tin đăng mới</h2>
        {/* <div className="mt-3" style={{ backgroundColor: '#ECF6FE', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <label htmlFor="">Chọn chuyên mục đăng tin</label>
          </div>
          <div>
            <span><IoMdArrowDropdownCircle /></span>
          </div>
        </div> */}

        <div className="mt-3" style={{ backgroundColor: '#ECF6FE'}}>
            <select name="" id="">Chọn chuyên mục đăng tin</select>
            <option value="">Danh mục</option>
            <option value="">Danh mục</option>
            <option value="">Danh mục</option>
        </div>
      </div>
    </div>
  )
}
