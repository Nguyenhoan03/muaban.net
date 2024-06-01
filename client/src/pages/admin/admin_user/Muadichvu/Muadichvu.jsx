import React, { useState } from 'react'
import './Style.scss'
import { ImNotification } from "react-icons/im";
import { FaAngleDoubleRight } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";
import { IoMdCloseCircle } from "react-icons/io";

export default function Muadichvu() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleFormToggle = (e) => {
      e.preventDefault();
      setIsFormVisible(!isFormVisible);
    }

    const [selectedDays, setSelectedDays] = useState(10);
    const [startDate, setStartDate] = useState('');
    const [servicePrice, setServicePrice] = useState(100000);
    const [discount, setDiscount] = useState(5000);
    const [promotion, setPromotion] = useState(0);

    const dayOptions = [
        { days: 3, price: 30000, discount: 0 },
        { days: 7, price: 67900, discount: 3 },
        { days: 10, price: 95000, discount: 5 },
        { days: 15, price: 139500, discount: 7 },
        { days: 30, price: 270000, discount: 10 },
        { days: 60, price: 540000, discount: 10 },
        { days: 90, price: 810000, discount: 10 },
    ];

    const handleDaySelection = (option) => {
        setSelectedDays(option.days);
        setServicePrice(option.price);
        setDiscount((option.price * option.discount) / 100);
    };
    return (
        <div style={{ backgroundColor: '#F5F5F5', }}>
            <div className="container " style={{ width: '50%', margin: 'auto', marginTop: 20, backgroundColor: '#F5F5F5', }}>
                <div className="muadichvu_header bg-white my-3 px-3">
                    <h4 style={{ fontStyle: 'normal ', fontWeight: 700, fontSize: 24, lineHeight: '28px', textAlign: 'center', borderBottom: '1px solid gray', paddingBottom: 15 }}> Mua dịch vụ</h4>
                    <div className="" style={{ height: 95, display: 'flex', paddingBottom: 5 }}>
                        <img style={{ borderRadius: 8 }} src="https://cloud.muaban.net/images/thumb-glist/2024/05/15/402/a6cc91d76b984615b1bbef40aea17461.jpg" alt="" />
                        <div className="mx-3 mt-2 muadichvu_header_news">
                            <p>Bán yasuo full trang phục</p>
                            <p style={{ fontSize: 15, fontWeight: 700 }}>12.000 đ</p>
                            <p><span style={{ width: 150, backgroundColor: '#FDE9EB', fontWeight: 700, borderRadius: 5, color: 'red', height: 20, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Chưa hiển thị <ImNotification style={{ marginLeft: 12 }} /></span></p>
                        </div>
                    </div>
                </div>
                <div className="muadichvu_header_body mt-4 bg-white">
                    <div className="row">
                        <div className="col-md-6  align-items-center">
                            <div className="d-flex mx-3 my-3">
                                <h5 style={{ fontSize: 15, fontWeight: 700, color: 'rgb(7, 137, 89)', margin: 0, }}>
                                    Tối ưu hiệu quả
                                </h5>
                                <p style={{ paddingLeft: 5, borderRadius: 4, margin: 0, height: 28, backgroundColor: 'red', color: 'white', fontWeight: 700, marginLeft: 20, textAlign: 'center', alignContent: 'center', fontSize: 14 }}>
                                    Top 10 chuyên mục
                                </p>
                            </div>
                            <div className="mx-3" style={{ border: '1px solid gray', borderRadius: 15, height: 150 }}>
                                <div className="" >
                                    <div className="d-flex justify-content-between px-3 pt-2" style={{}}>
                                        <p style={{ fontSize: 14, fontWeight: 700 }}>VIP 3</p>
                                        <p><FaAngleDoubleRight /></p>
                                    </div>
                                    <div className="px-3 " style={{ marginTop: -12 }} >
                                        <p style={{ color: 'tomato' }}>chỉ 10.000 đ/ngày</p>
                                        <li style={{ marginTop: -12, fontWeight: 400, fontSize: 12 }}>Đề xuất gói dịch vụ giúp tin đăng nằm vị trí 1-10. Tiết kiệm chi phí mà vẫn hiệu quả cao</li>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6  align-items-center">
                            <div className="d-flex mx-3 my-3">
                                <h5 style={{ fontSize: 15, fontWeight: 700, color: 'rgb(7, 137, 89)', margin: 0, }}>
                                    VIP đặc biệt
                                </h5>
                                <p style={{ paddingLeft: 5, borderRadius: 4, margin: 0, height: 28, backgroundColor: 'red', color: 'white', fontWeight: 700, marginLeft: 20, textAlign: 'center', alignContent: 'center', fontSize: 14 }}>
                                    Tiếp cận nhanh hơn
                                </p>
                            </div>
                            <div className="mx-3" style={{ border: '1px solid gray', borderRadius: 15, height: 150 }}>
                                <div className="" >
                                    <div className="d-flex justify-content-between px-3 pt-2" style={{}}>
                                        <p style={{ fontSize: 14, fontWeight: 700 }}>VIP S</p>
                                        <p><FaAngleDoubleRight /></p>
                                    </div>
                                    <div className="px-3 " style={{ marginTop: -12 }} >
                                        <p style={{ color: 'tomato' }}>chỉ 10.000 đ/ngày</p>
                                        <li style={{ marginTop: -12, fontWeight: 400, fontSize: 12 }}>Đề xuất gói dịch vụ giúp tin đăng nằm vị trí 1-10. Tiết kiệm chi phí mà vẫn hiệu quả cao</li>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>



                <div className="muadichvu_header_body2 mt-4 bg-white">
                    <div className="row">
                        <div className="col-md-6  align-items-center">
                            <div className="d-flex mx-3 my-3">
                                <h5 style={{ fontSize: 15, fontWeight: 700, color: 'rgb(7, 137, 89)', margin: 0, }}>
                                    Các gói dịch vụ đăng tin khác
                                </h5>
                              
                            </div>
                            <div className="mx-3" style={{ border: '1px solid gray', borderRadius: 15, height: 150 }}>
                                <div className="" >
                                    <div className="d-flex justify-content-between px-3 pt-2" style={{}}>
                                        <p style={{ fontSize: 14, fontWeight: 700 }}>VIP 1</p>
                                        <p><FaAngleDoubleRight /></p>
                                    </div>
                                    <div className="px-3 " style={{ marginTop: -12 }} >
                                        <p style={{ color: 'tomato' }}>chỉ 30.000 đ/ngày</p>
                                        <li style={{ marginTop: -12, fontWeight: 400, fontSize: 12 }}>Đề xuất gói dịch vụ giúp tin đăng nằm vị trí 1-10. Tiết kiệm chi phí mà vẫn hiệu quả cao</li>
                                    </div>
                                </div>

                            </div>

                            <div className="mx-3 mt-3" style={{ border: '1px solid gray', borderRadius: 15, height: 150 }}>
                                <div className="" >
                                    <div className="d-flex justify-content-between px-3 pt-2" style={{}}>
                                        <p style={{ fontSize: 14, fontWeight: 700 }}>Tin thường</p>
                                        <p><FaAngleDoubleRight /></p>
                                    </div>
                                    <div className="px-3 " style={{ marginTop: -12 }} >
                                        <p style={{ color: 'tomato' }}>chỉ 2.000 đ/ngày</p>
                                        <li style={{ marginTop: -12, fontWeight: 400, fontSize: 12 }}>Đề xuất gói dịch vụ giúp tin đăng nằm vị trí 1-10. Tiết kiệm chi phí mà vẫn hiệu quả cao</li>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-6  align-items-center">
                            <div className="d-flex mx-3 my-3">
                            <h5 style={{ float:'right',fontSize: 15, fontWeight: 700, color: 'black', margin: 0, }}>
                            So sánh dịch vụ <GrStatusUnknown />
                                </h5>
                             
                            </div>
                            <div className="mx-3" style={{ border: '1px solid gray', borderRadius: 15, height: 150 }}>
                                <div className="" >
                                    <div className="d-flex justify-content-between px-3 pt-2" style={{}}>
                                        <p style={{ fontSize: 14, fontWeight: 700 }}>VIP 2</p>
                                        <p><FaAngleDoubleRight /></p>
                                    </div>
                                    <div className="px-3 " style={{ marginTop: -12 }} >
                                        <p style={{ color: 'tomato' }}>chỉ 15.000 đ/ngày</p>
                                        <li style={{ marginTop: -12, fontWeight: 400, fontSize: 12 }}>Đề xuất gói dịch vụ giúp tin đăng nằm vị trí 1-10. Tiết kiệm chi phí mà vẫn hiệu quả cao</li>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>


                <div className="chitietdkdv bg-white p-4 rounded shadow-sm" style={{  }}>
    <form action="">
    <div className="container mt-4">
            <div className="bg-white p-4 rounded shadow-sm" style={{ width: '50%', margin: '0 auto' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="m-0 text-center w-100" style={{ fontWeight: 700 }}>Chi tiết dịch vụ</p>
                    <button type="button" className="btn btn-link p-0">
                        <IoMdCloseCircle size={24} />
                    </button>
                </div>
                <div className="mb-3">
                    <p className="font-weight-bold">Chọn số ngày đăng tin</p>
                    <div className="d-flex flex-wrap">
                        {dayOptions.map((option) => (
                            <div
                                key={option.days}
                                className={`p-2 m-2 border rounded ${selectedDays === option.days ? 'border-primary' : ''}`}
                                style={{ cursor: 'pointer', width: '90px', textAlign: 'center' }}
                                onClick={() => handleDaySelection(option)}
                            >
                                <p className="m-0">{option.days} ngày</p>
                                <p className="m-0">{option.price.toLocaleString()} đ</p>
                                {option.discount > 0 && <span className="text-danger">-{option.discount}%</span>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="startDate" className="form-label">Chọn ngày bắt đầu</label>
                    <input
                        type="date"
                        id="startDate"
                        className="form-control"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                    <p className="font-weight-bold">Khuyến mãi</p>
                    <button className="btn btn-link">Chọn khuyến mãi &gt;</button>
                </div>
                <div className="bg-light p-3 rounded">
                    <p className="font-weight-bold">Chi tiết thanh toán</p>
                    <div className="d-flex justify-content-between">
                        <span>Loại dịch vụ</span>
                        <span>VIP 3</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Số ngày hiển thị</span>
                        <span>{selectedDays} ngày</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Tổng tiền dịch vụ</span>
                        <span>{servicePrice.toLocaleString()} đ</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Chiết khấu (theo số ngày mua)</span>
                        <span>- {discount.toLocaleString()} đ</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Khuyến mãi</span>
                        <span>{promotion.toLocaleString()} đ</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between font-weight-bold">
                        <span>Tổng tiền</span>
                        <span>{(servicePrice - discount).toLocaleString()} đ</span>
                    </div>
                   
                         <button type='submit' className='btn mt-3' style={{fontSize:16,fontWeight:700,color:'white',position:'sticky',bottom:0,width:'100%',backgroundColor:'tomato',textAlign:'center',justifyContent:'center'}}>Thanh toán 69.700 đ</button>
                   
                </div>
            </div>
        </div>
    </form>
</div>
            </div>
        </div>
    )
}
