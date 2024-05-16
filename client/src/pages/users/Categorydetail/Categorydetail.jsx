import React from 'react'
import { Link } from 'react-router-dom'
import './Style.scss'
import Slickslider from '../../../compoment/Slickslider/Slickslider.jsx';
import { IoMdClock } from "react-icons/io";
import { FaDotCircle } from "react-icons/fa";

import { MdOutlinePlace } from "react-icons/md";
export default function Categorydetail() {
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
  return (
    <div style={{backgroundColor:'#F5F7F9'}}>
        <div className="container" style={{width:'75%'}}>
            <div className="pt-3 headercategorydetail">
                <span><Link style={{color:'grey'}}>Trang chủ  </Link> > Việc làm </span>
                <h1 style={{marginTop:12,fontSize: '18px', lineHeight: '30px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', fontWeight: '700', color: 'var(--cement-darkest)'}}>Mua bán, cho thuê Oto cũ, mới giá rẻ, chính chủ T5/2024</h1>
            </div>
            <div className="bodycategorydetail">
                <div className="row">
                    <div className="col-md-8">
                         <div className="bodycategorydetail_header d-flex bg-white" style={{width:'100%',height:140,borderRadius:20,}}>
                            <div className="bodycategorydetail_header_card">
                              <img src="/Screenshot 2024-05-11 151519.png" alt="" />
                              <p>Bán Ô tô</p>
                              </div>
                              <div className="bodycategorydetail_header_card ">
                              <img src="Screenshot 2024-05-11 151528.png" alt="" />
                              <p>Cho thuê</p>
                              </div>
                              <div className="bodycategorydetail_header_card">
                              <img src="Screenshot 2024-05-11 151537.png" alt="" />
                              <p>Dịch vụ</p>
                              </div>
                         </div>
                         <div className="bodycategorydetail_body">
                              <div className="">
                              <Slickslider settings={settings2} />
                              </div>
                              <div className="">
                                  <div className="mt-3" style={{height:150,border:'1px solid white',textAlign:'center',justifyContent:'center'}}>
                                    <Link style={{listStyle:'none',textDecoration:'none'}} to="">
                                  <div className="row" style={{alignItems:'center'}}>
                                    <div className="col-md-4">
                                    <img style={{height:135,marginTop:7,alignItems:'center'}} src="https://agencyvn.com/wp-content/uploads/2022/07/hinh-anh-tuyen-dung-dep-chuyen-nghiep-an-tuong.jpg" alt="" />
                                    </div>
                                    <div className="col-md-8 bodycategorydetail_body_p">
                                        <p>Chi nhánh mới khai trương cần tuyển gấp Nam Nữ</p>
                                        <p><b style={{color: 'red'}}>7,8 - 9 triệu/tháng</b></p>
                                        <div className="address" style={{justifyContent:'start'}}>
                                        <p><IoMdClock /> Hôm nay</p>
                                        <p className='px-3'><MdOutlinePlace /> Quận 6, Thủ đức,HCM</p>
                                        </div>
                                    </div>
                                    </div>
                                    </Link>
                                  </div>
                              </div>

                              <div className="">
                                  <div className="mt-3" style={{height:150,border:'1px solid white',textAlign:'center',justifyContent:'center'}}>
                                    <Link style={{listStyle:'none',textDecoration:'none'}} to="">
                                  <div className="row" style={{alignItems:'center'}}>
                                    <div className="col-md-4">
                                    <img style={{height:135,marginTop:7,alignItems:'center'}} src="https://agencyvn.com/wp-content/uploads/2022/07/hinh-anh-tuyen-dung-dep-chuyen-nghiep-an-tuong.jpg" alt="" />
                                    </div>
                                    <div className="col-md-8 bodycategorydetail_body_p">
                                        <p>Chi nhánh mới khai trương cần tuyển gấp Nam Nữ</p>
                                        <p><b style={{color: 'red'}}>7,8 - 9 triệu/tháng</b></p>
                                        <div className="address" style={{justifyContent:'start'}}>
                                        <p><IoMdClock /> Hôm nay</p>
                                        <p className='px-3'><MdOutlinePlace /> Quận 6, Thủ đức,HCM</p>
                                        </div>
                                    </div>
                                    </div>
                                    </Link>
                                  </div>
                              </div>

                              <div className="">
                                  <div className="mt-3" style={{height:150,border:'1px solid white',textAlign:'center',justifyContent:'center'}}>
                                    <Link style={{listStyle:'none',textDecoration:'none'}} to="">
                                  <div className="row" style={{alignItems:'center'}}>
                                    <div className="col-md-4">
                                    <img style={{height:135,marginTop:7,alignItems:'center'}} src="https://agencyvn.com/wp-content/uploads/2022/07/hinh-anh-tuyen-dung-dep-chuyen-nghiep-an-tuong.jpg" alt="" />
                                    </div>
                                    <div className="col-md-8 bodycategorydetail_body_p">
                                        <p>Chi nhánh mới khai trương cần tuyển gấp Nam Nữ</p>
                                        <p><b style={{color: 'red'}}>7,8 - 9 triệu/tháng</b></p>
                                        <div className="address" style={{justifyContent:'start'}}>
                                        <p><IoMdClock /> Hôm nay</p>
                                        <p className='px-3'><MdOutlinePlace /> Quận 6, Thủ đức,HCM</p>
                                        </div>
                                    </div>
                                    </div>
                                    </Link>
                                  </div>
                              </div>

                              <div className="">
                                  <div className="mt-3" style={{height:150,border:'1px solid white',textAlign:'center',justifyContent:'center'}}>
                                    <Link style={{listStyle:'none',textDecoration:'none'}} to="">
                                  <div className="row" style={{alignItems:'center'}}>
                                    <div className="col-md-4">
                                    <img style={{height:135,marginTop:7,alignItems:'center'}} src="https://agencyvn.com/wp-content/uploads/2022/07/hinh-anh-tuyen-dung-dep-chuyen-nghiep-an-tuong.jpg" alt="" />
                                    </div>
                                    <div className="col-md-8 bodycategorydetail_body_p">
                                        <p>Chi nhánh mới khai trương cần tuyển gấp Nam Nữ</p>
                                        <p><b style={{color: 'red'}}>7,8 - 9 triệu/tháng</b></p>
                                        <div className="address" style={{justifyContent:'start'}}>
                                        <p><IoMdClock /> Hôm nay</p>
                                        <p className='px-3'><MdOutlinePlace /> Quận 6, Thủ đức,HCM</p>
                                        </div>
                                    </div>
                                    </div>
                                    </Link>
                                  </div>
                              </div>

                         </div>
                    </div>
                    <div className="col-md-4">
                        <div className="">
                            <div className="eqeqr_top" style={{height: 150,backgroundColor:'white',borderRadius:20}}>
                                <ul>
                                    <li>
                                        <Link><FaDotCircle /> Tìm việc</Link>
                                    </li>
                                    <li>
                                        <Link><FaDotCircle /> Bán Ô tô</Link>
                                    </li>
                                    <li>
                                        <Link><FaDotCircle /> Tuyển dụng</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="eqeqrbottom mt-4" style={{backgroundColor:'white',borderRadius:20}}>
                                <p className='pt-3 '><b style={{fontSize:15,paddingLeft:20}}>Tỉnh/Thành</b></p>
                                <ul style={{marginTop:-10}}>
                                    <li>
                                        <Link><FaDotCircle /> TP HCM</Link>
                                    </li>
                                    <li>
                                        <Link><FaDotCircle /> Hà Nội</Link>
                                    </li>
                                    <li>
                                        <Link><FaDotCircle /> Đà Nẵng</Link>
                                    </li>
                                    <li>
                                        <Link><FaDotCircle /> Hải Phòng </Link>
                                    </li>
                                    <li>
                                        <Link><FaDotCircle /> Cần Thơ</Link>
                                    </li>
                                    <li>
                                        <Link><FaDotCircle /> Đồng Nai</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footercategorydetail">
                <h2>Tìm Hiểu Thị Trường Việc làm Mới Nhất T5/2024</h2>
                <p>Hiện nay, với sự tăng cao về nhu cầu đi lại của mọi người. Cùng với đó là sự phát triển về kinh tế và xã hội đã phần nào ảnh hưởng lớn đến nhu cầu sử dụng Oto. Do dó thị trường chợ Oto chưa bao giờ hạ nhiệt và đang nhận được nhiều sự quan tâm hơn. Không giống như xe máy, xe Oto là phương tiện rất có giá trị, không phải ai cũng đủ khả năng tài chính để sắm xe mới. Vì vậy, nhiều người có xu hướng tìm mua xe đã qua sử dụng. Nếu bạn cũng có cùng mối quan tâm này, đừng bỏ qua thông tin về thị trường mua bán tại Chợ Oto sau đây nhé.</p>
                <h2>Thị trường Chợ Oto</h2>
                <p>Hiện nay, thị trường chợ Oto phát triển và đa dạng nhiều hình thức khác nhau. Bởi không chỉ xoay quanh về vấn đề việc mua bán xe Oto cũ hoặc mới thì hình thức thuê xe tự lái cũng đang nhận được sự quan tâm. Do đó, có thể thấy rằng việc nhu cầu sử dụng Oto để có thể di chuyển đang dần phát triển tại đây. Và nhờ đó thị trường chợ Oto đang có sự phát triển ở từng các tỉnh và các vùng lân cận khác.</p>
                <h2>Các phân khúc giá tại Chợ Oto</h2>
                <p>Chợ Oto hiện nay rất nhộn nhịp với sự có mặt của hàng chục hãng xe và hàng trăm dòng xe khác nhau. Từ thương hiệu bình dân như Kia, Mazda, Honda, Huyndai đến các hãng xe sang như BMW, Audi, Mercedes, Lexus…Từ xe 4 chỗ, 7 chỗ, 16 chỗ tới xe tải, bán tải, xe đầu kéo; từ xe đời mới, sản xuất gần đây đến những chiếc xe đã ra mắt khá lâu, tất cả những phân loại xe bạn đang tìm kiếm đều được rao bán và cập nhật mỗi ngày tại Chợ Oto .

Bạn lo lắng về chi phí mua xe đắt đỏ? Hãy yên tâm vì giá xe Oto cũ cũng vô cùng phong phú. Đắt có, rẻ có, tầm trung cũng không thiếu. Tùy thuộc vào khả năng tài chính, nhu cầu sử dụng mà bạn có thể dễ dàng mua Oto cũ đáp ứng những tiêu chí đặt ra với giá khá hợp lý. Với khoảng 200 - 300 triệu đồng, bạn đã có thể sở hữu các xe của hãng Hyundai với các dòng cụ thể là Hyundai Porter, Mighty,...

</p>
            </div>
        </div>
    </div>
  )
}
