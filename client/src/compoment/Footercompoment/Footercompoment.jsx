import React from 'react'
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './Style.scss'
export default function Footercompoment() {
  return (
    <div className='container bg-white pt-4' style={{width:'75%',}}>
      <div className="row">
        <div className="col-md-4 d-flex">
          <div className="" style={{}}>
            <img src="https://muaban.net/images/logo/muaban.svg" style={{width:163,height:24}} alt="" />
            <p className='mt-3'>CÔNG TY CỔ PHẦN ĐỊNH ANH</p>
            <p><FaPhoneFlip className='bg-white text-danger mx-3'/>028 1530 4589</p>
            <p><b>MST:</b>0125489625, cấp ngày 11/05/2021</p>
            <p><b>Trụ sở chính:</b>Khu - Hoàng Cương - Danh Ba - Phú Thọ - VN</p>
            <p><b>Email:</b>trogiup@muaban.net</p>
            <p>muaban.net có trách nghiệm truyền tải thông tin. Không chịu tất cả trách nghiệm nào từ các tin này. <Link style={{textDecoration:'none'}}>Xem chi tiết điều khoản</Link></p>
        </div>
        </div>
        <div className="col-md-8 px-3">
                <div className="footercompoment_top">
                    <div className="row">
                      <div className="col-md-4" style={{borderBottom:'1px solid gray',}}>
                         <p style={{fontSize:14,fontWeight:700}}>Về chúng tôi</p>
                         <ul className='ulfootercompoment'>
                          <li>
                            <Link>An toàn khi giao dịch</Link>
                          </li>
                          <li>
                            <Link>Liên hệ</Link>
                          </li>
                          <li>
                            <Link>Giới thiệu</Link>
                          </li>
                          <li>
                            <Link>Điều khoản sử dụng</Link>
                          </li>
                          <li>
                            <Link>Quy chế hoạt động</Link>
                          </li>
                         </ul>
                      </div>

                    
                      <div className="col-md-4">
                         <p style={{fontSize:14,fontWeight:700}}>Hỗ trợ mua bán</p>
                         <ul className='ulfootercompoment'>
                          <li>
                            <Link>Báo giá quảng cáo</Link>
                          </li>
                          <li>
                            <Link>Hỗ trợ đăng tin</Link>
                          </li>
                          <li>
                            <Link>Tin tức & Khuyến mãi</Link>
                          </li>
                          <li>
                            <Link>Câu hỏi thường gặp</Link>
                          </li>
                          <li>
                            <Link>Hướng dẫn thanh toán</Link>
                          </li>
                         </ul>
                      </div>

                      <div className="col-md-4">
                         <p style={{fontSize:14,fontWeight:700}}>Thông tin mua bán</p>
                         <ul className='ulfootercompoment'>
                          <li>
                            <Link>Môi giới bất động sản</Link>
                          </li>
                          <li>
                            <Link>Giá nhà đất</Link>
                          </li>
                          <li>
                            <Link>Cẩm nang Mua bán</Link>
                          </li>
                      
                         </ul>
                      </div>
                    </div>
                </div>
               <div className="footercompoment_bottom" style={{height: 200}}>
                     <p className='pt-3' style={{fontSize:14,fontWeight:700,}}>Ứng dụng & Kết nối  </p>
                     <ul style={{width:'100%',display:'flex'}}>
                      <li><img style={{width:100,height:100}} src="/4eacba6f465ee700be4f.jpg" alt="" /></li>
                      <li className='mx-2 ' style={{width:160,height:110,display:'blog'}}>
                         <img style={{width:135,height:45,marginLeft:7}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" />
                         <img style={{width:150,height:50}} src="https://freepngimg.com/save/67006-app-play-google-android-store-free-clipart-hd/4491x1552" alt="" />
                      </li>
                      <li className='footercompoment_botto' style={{width:300,display:'block'}}>
                        <img style={{width:60,height:45,borderRadius:20}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/640px-Facebook-icon-1.png" alt="" />
                        <img style={{width:60,height:45}} src="https://inkythuatso.com/uploads/thumbnails/800/2021/09/zalo-logo-inkythuatso-14-15-05-01.jpg" alt="" />
                      <img style={{width:60,height:45}} src="https://st2.depositphotos.com/1102480/6675/i/950/depositphotos_66757783-stock-photo-youtube-logotype-printed-on-paper.jpg" alt="" />
                      </li>
                     </ul>
               </div>
        </div>
      </div>
        
    </div>
  )
}
