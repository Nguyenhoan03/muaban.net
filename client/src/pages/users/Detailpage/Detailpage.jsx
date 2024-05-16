import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import { IoMdClock } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";
import { BiSolidShoppingBags } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { PiMoneyFill } from "react-icons/pi";
import { MdOutlineEventNote } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaBookAtlas } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { MdOutlineReportProblem } from "react-icons/md";
import { ImDownload2 } from "react-icons/im";
import { FaChevronRight } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Slickslider from '../../../compoment/Slickslider/Slickslider.jsx';

import './Style.scss'
export default function Detailpage() {
  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

  const [imgurlavata, setimgurlavata] = useState('');
  const handleimgchange = (e) => {

    e.preventDefault();
    let reader = new FileReader()
    let file = e.target.files[0];

    reader.onloadend = () => {
      setimgurlavata(reader.result)
    }
    reader.readAsDataURL(file);
  }


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

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleFormToggle = (e) => {
    e.preventDefault();
    setIsFormVisible(!isFormVisible);
  }

  const [statecv, setstatecv] = useState(0);
  const handlestatecv = (e, k) => {
    e.preventDefault();
    setstatecv(k);  // Sử dụng setstatecv như một hàm
  }

  const [yex, setyex] = useState(0);
  const handleyex = (e, k) => {
    e.preventDefault();
    setyex(k);
    
  }
  const [hocvan, sethocvan] = useState(0);
  const handlehocvan = (e, k) => {
    e.preventDefault();
    sethocvan(k);
    
  }

  return (
    <div style={{ backgroundColor: '#F5F7F9' }}>
      <div className="container mt-3" style={{ width: '75%', }}>
        <span className='pt-5' style={{ marginTop: 8 }}><Link style={{ color: 'grey' }}>Trang chủ  </Link> > Việc làm > Cần tuyển nhân viên làm việc tại siêu thị </span>
        <div className="row">
          <div className="col-md-8">
            <div className="headerdetailpage mt-3">
              <Slider {...settings}>
                <div>
                  <img style={{ borderRadius: 10, height: 250, width: '100%', height: 450 }} src="https://cloud.muaban.net/banners/2024/04/23/076/2ac35ef5a58c4c3785481758786b43c1.jpg" alt="" />
                </div>
                <div>
                  <img style={{ borderRadius: 10, height: 250, width: '100%', height: 450 }} src="https://cloud.muaban.net/banners/2023/11/07/518/a751598760c041ee8fb8bba41748b12a.png" alt="" />
                </div>
                <div>
                  <img style={{ borderRadius: 10, height: 250, width: '100%', height: 450 }} src="https://cloud.muaban.net/banners/2023/11/07/476/0772ac229f374d48b7ad7664d4e929a6.png" alt="" />
                </div>

              </Slider>
            </div>
            <div className="headerdetailpage_title bg-white mt-3 " style={{ height: 160, }}>
              <h1 className='pt-3' style={{ fontSize: 20, fontWeight: 700 }}>Cần Tuyển nhân viên làm tại Siêu Thị đi làm liền</h1>
              <p style={{ marginTop: 0 }}><b style={{ fontSize: 20, color: 'red', lineHeight: 1.5, fontWeight: 700 }}>8 triệu - 13 triệu/tháng</b></p>
              <p style={{ marginTop: -10 }}><IoMdClock /> Ngày đăng: Hôm nay - Mã tin: 69245592</p>
              <p style={{ marginTop: -10 }}><MdOutlinePlace /> Quận Tân Phú, TP.HCM</p>
            </div>

            <div className="infordetailpage bg-white mt-3 ">
              <div className="">
                <p className='pt-3'>Cửa hàng cần tuyển gấp Nhân viên phụ đóng gói, bán hàng, nhân viên thu ngân bán hàng tại Cửa hàng bách hoá khu vực tphcm</p>
                <p>+ tính tình vui vẻ, hoà đồng, hoạt bát.
                  + Không yêu cầu kinh nghiệm, ngoại hình
                  + Ưu tiên nữ thích buôn bán
                  + Nhận 100℅ lương Không giam lương
                  + Được thưởng các ngày lễ, tết

                  + Được hưởng BHXH, BHYT sau 2 tháng
                  - Thời gian làm việc :
                  + Ca sáng : 7h45 - 11h30
                  + Ca chiều : 13h00 - 16h30 ( nghĩ trưa 1,5 tiếng )
                  Tuần được nghỉ ngày chủ nhật
                  - Lương ca 8 tiếng: 8.500.000 - 9.500.000 /tháng + phụ cấp.( có thưởng khi làm tốt)
                  Lương ca 12 tiếng: 11.500.000.+ phụ cấp
                  *** Có xoay ca dành cho sinh viên
                  Cuối tháng được thêm tiền chuyên cần.
                </p>
              </div>
            </div>

            <div className=" mt-4 bg-white">
              <p className='px-3 pt-3'><b style={{ fontSize: 18, fontWeight: 700, lineHeight: '22px' }}>Thông tin cơ bản</b></p>
              <div className="row">
                <div className="basic_infodetailpage_left col-md-6 px-4">
                  <p><BiSolidShoppingBags /> Nhà tuyển dụng: <span>Cá nhân đăng tuyển</span></p>
                  <p><CiClock2 /> Loại hình công việc: <span>Toàn thời gian</span></p>
                  <p><PiMoneyFill /> Lương tối thiểu: <span>8.000.000 đ</span></p>
                  <p><MdOutlineEventNote /> Kinh nghiệm: <span>Không yêu cầu</span></p>
                  <p><FaPeopleGroup /> Số lượng tuyển dụng: <span>30</span></p>
                </div>
                <div className="basic_infodetailpage_right col-md-6">
                  <p><FaUserTie /> Ngành nghề: <span>Bán hàng</span></p>
                  <p><FaAmazonPay /> Hình thức trả lương: <span>Theo tháng</span></p>
                  <p><PiMoneyFill /> Lương tối đa: <span>13.000.000 đ</span></p>
                  <p><RxAvatar /> Giới tính: <span>Không yêu cầu</span></p>
                  <p><FaBookAtlas /> Học vấn tối thiểu: <span>khác</span></p>


                </div>
              </div>
              <div className="" >
                <button className='btn btn-light mx-3' style={{ width: '25%' }}><CiHeart /> Lưu tin</button>
                <button className='btn btn-light mx-3' style={{ width: '25%' }}><FaShare /> Chia sẻ</button>
                <button className='btn btn-light mx-3' style={{ width: '25%' }}><MdOutlineReportProblem /> Báo vi phạm</button>
              </div>

            </div>

            <div className="real_estate mt-4" style={{ borderRadius: 10, border: '1px solid white', backgroundColor: 'white', paddingBottom: 20 }}>
              <h2 className='mt-3 px-2 ' style={{ fontWeight: 400, paddingRight: 15, fontSize: 24, fontWeight: 400, lineHeight: '32px' }}>Tin đăng tương tự</h2>
              <div className="real_estate_content" >
                <div className="real_estate_content_card" style={{ alignItems: 'center', position: 'relative' }}>
                  <div className="row">
                    <Slickslider settings={settings2} />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-4 " style={{ display: '' }}>
            <div className="bg-white sticky-col">
              <div className="topRecruitment pt-3 px-3 d-flex" style={{ borderBottom: '1px solid gray' }}>
                <img style={{ width: 56, height: 56 }} src="https://muaban.net/images/account/avatar-default.png" alt="" />
                <div className="mx-2" >
                  <p>Ngân</p>
                  <p style={{ marginTop: -15 }}><Link style={{ textDecoration: 'none', }}>Xem trang cá nhân</Link></p>
                </div>
              </div>
              <div className="bottomRecruitment d-block mt-2">
                <button className='btn btn-success' style={{ fontSize: 15, fontWeight: 700, borderRadius: 8, width: '100%' }} onClick={(e) => handleFormToggle(e)} ><ImDownload2 /> Ứng tuyển ngay</button>
                <button className='btn btn-outline-primary mt-2' style={{ width: '100%' }}><FaPhoneAlt /> 0354645646 </button>
              </div>
            </div>
          </div>
        </div>
        {
          isFormVisible && (
            <div className="form-alert">
              <form >
                <button type="button" className="btn" style={{ position: 'absolute', right: 10, top: 15 }} onClick={(e) => handleFormToggle(e)}><IoMdCloseCircle /></button>
                <div className="formungtuyen bg-white">
                  <p style={{ fontWeight: 700, fontSize: 19, lineHeight: '24px', color: 'rgb(33, 35, 37)', textAlign: 'center', justifyContent: 'center' }} >Ứng tuyển</p>
                  <div className="formungtuyen_content">
                    <div className="formungtuyen_content_imgavata">
                      <h3 style={{ fontWeight: 700, fontSize: 14, lineHeight: '150%' }}>Ảnh đại diện hồ sơ</h3>
                      <div className="file-upload">
                        <input type="file" name="avatar" id="file-avatar" style={{ height: 25 }} onChange={handleimgchange} />
                        <label style={{ fontSize: 14, textAlign: 'center', justifyContent: 'center' }} htmlFor="file-avatar">Chọn Ảnh</label>
                        {
                          imgurlavata && (
                            <img src={imgurlavata} alt="Avatar Preview" style={{ width: '150px', height: '150px', borderRadius: 7, marginTop: '10px', marginLeft: 15 }} />
                          )
                        }
                      </div>
                    </div>
                    <div className="formungtuyen_content_imgavata">
                      <h3 style={{ fontWeight: 700, fontSize: 14, lineHeight: '150%' }}>Một vài thông tin về bạn</h3>
                      <div className="">
                        <input className='mx-2' type="text" placeholder='Họ và tên *' />
                        <input className='mx-2' type="text" placeholder='Năm sinh *' />
                        <div class="mt-3 mx-2">
                          <label style={{ fontWeight: 700, fontSize: 14, lineHeight: '150%' }} htmlFor="">Giới tính</label>
                          <div class="radio-group">
                          <label for="male">
                            <input type="radio" name="gender" id="male" />
                            Nam
                          </label>
                          <label for="female">
                            <input type="radio" name="gender" id="female" />
                            Nữ
                          </label>
                        </div>

                        </div>

                        <div className="">
                          <h3 style={{ fontWeight: 700, fontSize: 14, lineHeight: '150%' }}>Tình trạng hiện tại của bạn là gì?*</h3>
                          <button onClick={(e) => handlestatecv(e, 0)} className='btn' style={{ backgroundColor: statecv === 0 ? 'rgb(255, 226, 198)' : '' }}>Sẵn sàng đi làm ngay</button>
                          <button onClick={(e) => handlestatecv(e, 1)} className='btn mx-2' style={{ backgroundColor: statecv === 1 ? 'rgb(255, 226, 198)' : '' }}>Cần thêm thời gian chuẩn bị</button>
                        </div>
                        <div className="mt-2">
                          <h3 style={{ fontWeight: 700, fontSize: 14, lineHeight: '150%' }}>Mô tả về kinh nghiệm làm việc</h3>
                          <div class="input-container">
                            <input type="text" class="custom-input" placeholder="Nhập thông tin" />
                            <label class="custom-label">Nhập thông tin</label>
                          </div>
                        </div>

                        <div className="mt-2">
                          <h3 style={{ fontWeight: 700, fontSize: 14, lineHeight: '150%' }}>Số năm kinh nghiệm *</h3>
                          <div className="">
                          <button onClick={(e) => handleyex(e, 0)} style={{ backgroundColor: yex === 0 ? 'rgb(255, 226, 198)' : '',borderRadius: '25px 25px' }} className='btn mx-1' >Không có kinh nghiệm</button>
                          <button onClick={(e) => handleyex(e, 1)} style={{ backgroundColor: yex === 1 ? 'rgb(255, 226, 198)' : '',borderRadius: '25px 25px' }} className='btn mx-1' >1 - 2 năm</button>
                          <button onClick={(e) => handleyex(e, 2)} style={{ backgroundColor: yex === 2 ? 'rgb(255, 226, 198)' : '',borderRadius: '25px 25px' }} className='btn mx-1' >2 - 3 năm</button>
                          <button onClick={(e) => handleyex(e, 3)} style={{ backgroundColor: yex === 3 ? 'rgb(255, 226, 198)' : '',borderRadius: '25px 25px' }} className='btn mx-1' >3 - 5 năm</button>
                          <button onClick={(e) => handleyex(e, 4)} style={{ backgroundColor: yex === 4 ? 'rgb(255, 226, 198)' : '',borderRadius: '25px 25px' }} className='btn mx-1' >5 - 10 năm</button>
                          <button onClick={(e) => handleyex(e, 5)} style={{ backgroundColor: yex === 5 ? 'rgb(255, 226, 198)' : '',borderRadius: '25px 25px' }} className='btn mx-1' >Hơn 10 năm</button>
                          </div>
                        </div>
                        <div className="mt-2">
                          <h3 style={{ fontWeight: 700, fontSize: 14, lineHeight: '150%' }}>Trình độ học vấn của bạn là gì? *</h3>
                          <div className="">
                            <button onClick={(e) => handlehocvan(e, 0)} type="button" className='btn btn-light mx-1' style={{backgroundColor: hocvan === 0 ? 'rgb(255, 226, 198)' : '', borderRadius: '25px 25px' }}>Trung học</button>
                            <button onClick={(e) => handlehocvan(e, 1)} type="button" className='btn btn-light mx-1' style={{backgroundColor: hocvan === 1 ? 'rgb(255, 226, 198)' : '', borderRadius: '25px 25px' }}>Trung cấp/Nghề</button>
                            <button onClick={(e) => handlehocvan(e, 2)} type="button" className='btn btn-light mx-1' style={{backgroundColor: hocvan === 2 ? 'rgb(255, 226, 198)' : '', borderRadius: '25px 25px' }}>Cao đẳng</button>
                            <button onClick={(e) => handlehocvan(e, 3)} type="button" className='btn btn-light mx-1' style={{backgroundColor: hocvan === 3 ? 'rgb(255, 226, 198)' : '', borderRadius: '25px 25px' }}>Đại học</button>
                            <button onClick={(e) => handlehocvan(e, 4)} type="button" className='btn btn-light mx-1' style={{backgroundColor: hocvan === 4 ? 'rgb(255, 226, 198)' : '', borderRadius: '25px 25px' }}>Sau đại học</button>
                            <button onClick={(e) => handlehocvan(e, 5)} type="button" className='btn btn-light mx-1' style={{backgroundColor: hocvan === 5 ? 'rgb(255, 226, 198)' : '', borderRadius: '25px 25px' }}>Khác</button>
                          </div>
                          <textarea className='mt-3' name="" id="" cols="30" rows="100%" style={{ width: '90%' }} placeholder='Mô tả thêm *'></textarea>
                        </div>

                        <div className="tt_employer">
                          <h3 style={{ fontWeight: 700, fontSize: 14, lineHeight: '150%' }}>Thông tin liên lạc của bạn *</h3>
                          <input style={{ width: '90%' }} type="text" placeholder='nhập email hoặc số điện thoại' />
                        </div>

                        <button className='btn btn-primary mt-3' type='submit'>Gửi CV</button>

                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )
        }

      </div>


    </div>
  )
}
