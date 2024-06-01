'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        title: 'Cần Tuyển 25NV Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, LĐPT Tại ST Coop',
        img: 'https://cloud.muaban.net/images/thumb-detail/2024/05/16/552/aa95df9a3101464482aaa27568446000.jpg',
        diachi: 'Quận Gò Vấp, TP.HCM',
        descripts: `Cần Tuyển Nhân Viên Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, Lao Động Phổ Thông Siêu Thị Coo.p Gò Vấp
Nơi làm việc:
Khu vực Gò Vấp :
- Siêu Thị Phan Văn Trị
- Siêu Thị Quang Trung
- Siêu Thị Nguyễn Kiệm
- Siêu Thị Nguyễn Văn Lượng
- Siêu Thị Phan Huy Ích
….
Mức Lương
- Ca 4 tiếng: 4.200.000VNĐ/ Tháng + Phụ Cấp
- Ca 8 tiếng: 8.400.000VNĐ/ Tháng + Phụ Cấp
- Ca 10 tiếng: 10.500.000VNĐ/Tháng + Phụ Cấp
- Ca 12 Tiếng: 12.500.000VNĐ/ Tháng + Phụ Cấp
Part time 35-40.000đ/h
Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Mô tả công việc
- Bán hàng, giới thiệu sản phẩm cho khách hàng
- Sắp xếp, trưng bày hàng hóa từ kho lên kệ
- Kiểm tra hàng hư hỏng, thời hạn sử dụng hàng hóa
- Bảo quản hàng hóa theo đúng yêu cầu của siêu thị
- Quản lý, giữ gìn vệ sinh quầy kệ
- Kiểm kê kho hàng
- Bán hàng cho các quầy hàng như: Quầy hàng tiêu dùng; hóa mỹ phẩm; thời trang🛍️

*Quyền lợi:
+ Được kí hợp đồng, tham gia BHYT, BHXH, BHTN,...
+ Được tăng lương theo năng lực và thái độ làm việc
+ Được khám sức khỏe định kỳ
+ Được nghỉ 1 ngày/tuần ; 12 ngày phép/năm

*Yêu cầu:
- Đủ 18 tuổi - 58 tuổi
- Nhanh nhẹn, hoạt bát, có sức khỏe tốt, cẩn thận
- Có tinh thần trách nhiệm cao

*Hồ sơ xin việc:
+ 1 đơn xin việc
+ 2 sơ yếu lý lịch
+ 2 Căn cước công dân photo

Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Lưu ý: Ưu tiên cho những ai liên hệ sớm, bên mình tuyển dụng miễn phí.`,
         nhatuyendung:'Cá nhân đăng tuyển',
         loaihinhcv:'Toàn thời gian',
         luongtoithieu:'8.500.000 đ',
         kinhnghiem:'Không yêu cầu',
         tencty:'không có',
         hocvantoithieu:'trung học',
         nganhnghe:'Lao động phôt thông',
         hinhthuctraluong:'theo tháng',
         luongtoida:'12.500.000 đ',
         gioitinh:'không yêu cầu',
         dotuoi:'25 -28 tuổi',
         category_child_id: 2,
         category_id: 2,
         loaidv:"VIP S",
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        title: 'Cần Tuyển 25NV Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, LĐPT Tại ST Coop',
        img: 'https://cloud.muaban.net/images/thumb-detail/2024/05/16/552/aa95df9a3101464482aaa27568446000.jpg',
        diachi: 'Quận Gò Vấp, TP.HCM',
        descripts: `Cần Tuyển Nhân Viên Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, Lao Động Phổ Thông Siêu Thị Coo.p Gò Vấp
Nơi làm việc:
Khu vực Gò Vấp :
- Siêu Thị Phan Văn Trị
- Siêu Thị Quang Trung
- Siêu Thị Nguyễn Kiệm
- Siêu Thị Nguyễn Văn Lượng
- Siêu Thị Phan Huy Ích
….
Mức Lương
- Ca 4 tiếng: 4.200.000VNĐ/ Tháng + Phụ Cấp
- Ca 8 tiếng: 8.400.000VNĐ/ Tháng + Phụ Cấp
- Ca 10 tiếng: 10.500.000VNĐ/Tháng + Phụ Cấp
- Ca 12 Tiếng: 12.500.000VNĐ/ Tháng + Phụ Cấp
Part time 35-40.000đ/h
Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Mô tả công việc
- Bán hàng, giới thiệu sản phẩm cho khách hàng
- Sắp xếp, trưng bày hàng hóa từ kho lên kệ
- Kiểm tra hàng hư hỏng, thời hạn sử dụng hàng hóa
- Bảo quản hàng hóa theo đúng yêu cầu của siêu thị
- Quản lý, giữ gìn vệ sinh quầy kệ
- Kiểm kê kho hàng
- Bán hàng cho các quầy hàng như: Quầy hàng tiêu dùng; hóa mỹ phẩm; thời trang🛍️

*Quyền lợi:
+ Được kí hợp đồng, tham gia BHYT, BHXH, BHTN,...
+ Được tăng lương theo năng lực và thái độ làm việc
+ Được khám sức khỏe định kỳ
+ Được nghỉ 1 ngày/tuần ; 12 ngày phép/năm

*Yêu cầu:
- Đủ 18 tuổi - 58 tuổi
- Nhanh nhẹn, hoạt bát, có sức khỏe tốt, cẩn thận
- Có tinh thần trách nhiệm cao

*Hồ sơ xin việc:
+ 1 đơn xin việc
+ 2 sơ yếu lý lịch
+ 2 Căn cước công dân photo

Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Lưu ý: Ưu tiên cho những ai liên hệ sớm, bên mình tuyển dụng miễn phí.`,
         nhatuyendung:'Cá nhân đăng tuyển',
         loaihinhcv:'Toàn thời gian',
         luongtoithieu:'8.500.000 đ',
         kinhnghiem:'Không yêu cầu',
         tencty:'không có',
         hocvantoithieu:'trung học',
         nganhnghe:'Lao động phôt thông',
         hinhthuctraluong:'theo tháng',
         luongtoida:'12.500.000 đ',
         gioitinh:'không yêu cầu',
         dotuoi:'25 -28 tuổi',
         category_child_id: 2,
         category_id: 2,
         loaidv:"VIP S",
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        title: 'fxghdfgjdghjygthjyCần Tuyển 25NV Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, LĐPT Tại ST Coop',
        img: 'https://cloud.muaban.net/images/thumb-detail/2024/05/16/552/aa95df9a3101464482aaa27568446000.jpg',
        diachi: 'Quận Gò Vấp, TP.HCMjfghjfghjfghjfghjfhdghjdghn',
        descripts: `Cần Tuyển Nhân Viên Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, Lao Động Phổ Thông Siêu Thị Coo.p Gò Vấp
Nơi làm việc:
Khu vực Gò Vấp :
- Siêu Thị Phan Văn Trị
- Siêu Thị Quang Trung
- Siêu Thị Nguyễn Kiệm
- Siêu Thị Nguyễn Văn Lượng
- Siêu Thị Phan Huy Ích
….
Mức Lương
- Ca 4 tiếng: 4.200.000VNĐ/ Tháng + Phụ Cấp
- Ca 8 tiếng: 8.400.000VNĐ/ Tháng + Phụ Cấp
- Ca 10 tiếng: 10.500.000VNĐ/Tháng + Phụ Cấp
- Ca 12 Tiếng: 12.500.000VNĐ/ Tháng + Phụ Cấp
Part time 35-40.000đ/h
Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Mô tả công việc
- Bán hàng, giới thiệu sản phẩm cho khách hàng
- Sắp xếp, trưng bày hàng hóa từ kho lên kệ
- Kiểm tra hàng hư hỏng, thời hạn sử dụng hàng hóa
- Bảo quản hàng hóa theo đúng yêu cầu của siêu thị
- Quản lý, giữ gìn vệ sinh quầy kệ
- Kiểm kê kho hàng
- Bán hàng cho các quầy hàng như: Quầy hàng tiêu dùng; hóa mỹ phẩm; thời trang🛍️

*Quyền lợi:
+ Được kí hợp đồng, tham gia BHYT, BHXH, BHTN,...
+ Được tăng lương theo năng lực và thái độ làm việc
+ Được khám sức khỏe định kỳ
+ Được nghỉ 1 ngày/tuần ; 12 ngày phép/năm

*Yêu cầu:
- Đủ 18 tuổi - 58 tuổi
- Nhanh nhẹn, hoạt bát, có sức khỏe tốt, cẩn thận
- Có tinh thần trách nhiệm cao

*Hồ sơ xin việc:
+ 1 đơn xin việc
+ 2 sơ yếu lý lịch
+ 2 Căn cước công dân photo

Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Lưu ý: Ưu tiên cho những ai liên hệ sớm, bên mình tuyển dụng miễn phí.`,
         nhatuyendung:'Cá nhân đăng tuyểnsfgdhsfghfg',
         loaihinhcv:'Toàn thời gian',
         luongtoithieu:'8.500.000 đ',
         kinhnghiem:'Không yêu cầu',
         tencty:'không có',
         hocvantoithieu:'trung học',
         nganhnghe:'Lao động phôt thông',
         hinhthuctraluong:'theo tháng',
         luongtoida:'12.500.000 đ',
         gioitinh:'không yêu cầu',
         dotuoi:'25 -28 tuổi',
         category_child_id: 2,
         category_id: 2,
         loaidv:"VIP S",
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        title: 'nguyễn minh hoàn 3 Cần Tuyển 25NV Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, LĐPT Tại ST Coop',
        img: 'https://cloud.muaban.net/images/thumb-detail/2024/05/16/552/aa95df9a3101464482aaa27568446000.jpg',
        diachi: 'nguyễn minh hoàn 3 Cần TuyQuận Gò Vấp, TP.HCM',
        descripts: `Cần Tuyển Nhân Viên Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, Lao Động Phổ Thông Siêu Thị Coo.p Gò Vấp
Nơi làm việc:
Khu vực Gò Vấp :
- Siêu Thị Phan Văn Trị
- Siêu Thị Quang Trung
- Siêu Thị Nguyễn Kiệm
- Siêu Thị Nguyễn Văn Lượng
- Siêu Thị Phan Huy Ích
….
Mức Lương
- Ca 4 tiếng: 4.200.000VNĐ/ Tháng + Phụ Cấp
- Ca 8 tiếng: 8.400.000VNĐ/ Tháng + Phụ Cấp
- Ca 10 tiếng: 10.500.000VNĐ/Tháng + Phụ Cấp
- Ca 12 Tiếng: 12.500.000VNĐ/ Tháng + Phụ Cấp
Part time 35-40.000đ/h
Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Mô tả công việc
- Bán hàng, giới thiệu sản phẩm cho khách hàng
- Sắp xếp, trưng bày hàng hóa từ kho lên kệ
- Kiểm tra hàng hư hỏng, thời hạn sử dụng hàng hóa
- Bảo quản hàng hóa theo đúng yêu cầu của siêu thị
- Quản lý, giữ gìn vệ sinh quầy kệ
- Kiểm kê kho hàng
- Bán hàng cho các quầy hàng như: Quầy hàng tiêu dùng; hóa mỹ phẩm; thời trang🛍️

*Quyền lợi:
+ Được kí hợp đồng, tham gia BHYT, BHXH, BHTN,...
+ Được tăng lương theo năng lực và thái độ làm việc
+ Được khám sức khỏe định kỳ
+ Được nghỉ 1 ngày/tuần ; 12 ngày phép/năm

*Yêu cầu:
- Đủ 18 tuổi - 58 tuổi
- Nhanh nhẹn, hoạt bát, có sức khỏe tốt, cẩn thận
- Có tinh thần trách nhiệm cao

*Hồ sơ xin việc:
+ 1 đơn xin việc
+ 2 sơ yếu lý lịch
+ 2 Căn cước công dân photo

Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Lưu ý: Ưu tiên cho những ai liên hệ sớm, bên mình tuyển dụng miễn phí.`,
         nhatuyendung:'Cá nhân đăng tuyểnnguyễn minh hoàn 3 Cần Tuy',
         loaihinhcv:'Toàn thời gian',
         luongtoithieu:'8.500.000 đ',
         kinhnghiem:'Không yêu cầu',
         tencty:'không có',
         hocvantoithieu:'trung học',
         nganhnghe:'Lao động phôt thông',
         hinhthuctraluong:'theo tháng',
         luongtoida:'12.500.000 đ',
         gioitinh:'không yêu cầu',
         dotuoi:'25 -28 tuổi',
         category_child_id: 2,
         category_id: 2,
         loaidv:"VIP S",
        createdAt: new Date(),
        updatedAt: new Date()
      },




      {
        title: 'nguyễn minh hoàn 4 Cần TuyCần Tuyển 25NV Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, LĐPT Tại ST Coop',
        img: 'https://cloud.muaban.net/images/thumb-detail/2024/05/16/552/aa95df9a3101464482aaa27568446000.jpg',
        diachi: 'Quận Gò Vấp, TP.HCMnguyễn minh hoàn 4',
        descripts: `Cần Tuyển Nhân Viên Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, Lao Động Phổ Thông Siêu Thị Coo.p Gò Vấp
Nơi làm việc:
Khu vực Gò Vấp :
- Siêu Thị Phan Văn Trị
- Siêu Thị Quang Trung
- Siêu Thị Nguyễn Kiệm
- Siêu Thị Nguyễn Văn Lượng
- Siêu Thị Phan Huy Ích
….
Mức Lương
- Ca 4 tiếng: 4.200.000VNĐ/ Tháng + Phụ Cấp
- Ca 8 tiếng: 8.400.000VNĐ/ Tháng + Phụ Cấp
- Ca 10 tiếng: 10.500.000VNĐ/Tháng + Phụ Cấp
- Ca 12 Tiếng: 12.500.000VNĐ/ Tháng + Phụ Cấp
Part time 35-40.000đ/h
Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Mô tả công việc
- Bán hàng, giới thiệu sản phẩm cho khách hàng
- Sắp xếp, trưng bày hàng hóa từ kho lên kệ
- Kiểm tra hàng hư hỏng, thời hạn sử dụng hàng hóa
- Bảo quản hàng hóa theo đúng yêu cầu của siêu thị
- Quản lý, giữ gìn vệ sinh quầy kệ
- Kiểm kê kho hàng
- Bán hàng cho các quầy hàng như: Quầy hàng tiêu dùng; hóa mỹ phẩm; thời trang🛍️

*Quyền lợi:
+ Được kí hợp đồng, tham gia BHYT, BHXH, BHTN,...
+ Được tăng lương theo năng lực và thái độ làm việc
+ Được khám sức khỏe định kỳ
+ Được nghỉ 1 ngày/tuần ; 12 ngày phép/năm

*Yêu cầu:
- Đủ 18 tuổi - 58 tuổi
- Nhanh nhẹn, hoạt bát, có sức khỏe tốt, cẩn thận
- Có tinh thần trách nhiệm cao

*Hồ sơ xin việc:
+ 1 đơn xin việc
+ 2 sơ yếu lý lịch
+ 2 Căn cước công dân photo

Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Lưu ý: Ưu tiên cho những ai liên hệ sớm, bên mình tuyển dụng miễn phí.`,
         nhatuyendung:'nguyễn minh hoàn 4Cá nhân đăng tuyển',
         loaihinhcv:'Toàn thời gian',
         luongtoithieu:'8.500.000 đ',
         kinhnghiem:'Không yêu cầu',
         tencty:'không có',
         hocvantoithieu:'trung học',
         nganhnghe:'Lao động phôt thông',
         hinhthuctraluong:'theo tháng',
         luongtoida:'12.500.000 đ',
         gioitinh:'không yêu cầu',
         dotuoi:'25 -28 tuổi',
         category_child_id: 2,
         category_id: 2,
         loaidv:"VIP 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },




      {
        title: 'Cdfgvdfgdgnguyễn minh hoàn 4ần Tuyển 25NV Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, LĐPT Tại ST Coop',
        img: 'https://cloud.muaban.net/images/thumb-detail/2024/05/16/552/aa95df9a3101464482aaa27568446000.jpg',
        diachi: 'Quận Gò Vấp, TP.HCM',
        descripts: `Cần Tuyển Nhân Viên Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, Lao Động Phổ Thông Siêu Thị Coo.p Gò Vấp
Nơi làm việc:
Khu vực Gò Vấp :
- Siêu Thị Phan Văn Trị
- Siêu Thị Quang Trung
- Siêu Thị Nguyễn Kiệm
- Siêu Thị Nguyễn Văn Lượng
- Siêu Thị Phan Huy Ích
….
Mức Lương
- Ca 4 tiếng: 4.200.000VNĐ/ Tháng + Phụ Cấp
- Ca 8 tiếng: 8.400.000VNĐ/ Tháng + Phụ Cấp
- Ca 10 tiếng: 10.500.000VNĐ/Tháng + Phụ Cấp
- Ca 12 Tiếng: 12.500.000VNĐ/ Tháng + Phụ Cấp
Part time 35-40.000đ/h
Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Mô tả công việc
- Bán hàng, giới thiệu sản phẩm cho khách hàng
- Sắp xếp, trưng bày hàng hóa từ kho lên kệ
- Kiểm tra hàng hư hỏng, thời hạn sử dụng hàng hóa
- Bảo quản hàng hóa theo đúng yêu cầu của siêu thị
- Quản lý, giữ gìn vệ sinh quầy kệ
- Kiểm kê kho hàng
- Bán hàng cho các quầy hàng như: Quầy hàng tiêu dùng; hóa mỹ phẩm; thời trang🛍️

*Quyền lợi:
+ Được kí hợp đồng, tham gia BHYT, BHXH, BHTN,...
+ Được tăng lương theo năng lực và thái độ làm việc
+ Được khám sức khỏe định kỳ
+ Được nghỉ 1 ngày/tuần ; 12 ngày phép/năm

*Yêu cầu:
- Đủ 18 tuổi - 58 tuổi
- Nhanh nhẹn, hoạt bát, có sức khỏe tốt, cẩn thận
- Có tinh thần trách nhiệm cao

*Hồ sơ xin việc:
+ 1 đơn xin việc
+ 2 sơ yếu lý lịch
+ 2 Căn cước công dân photo

Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Lưu ý: Ưu tiên cho những ai liên hệ sớm, bên mình tuyển dụng miễn phí.`,
         nhatuyendung:'Cá nhân đăng tuyển',
         loaihinhcv:'Toàn thời gian',
         luongtoithieu:'8.500.000 đ',
         kinhnghiem:'Không yêu cầu',
         tencty:'không có',
         hocvantoithieu:'trung học',
         nganhnghe:'Lao động phôt thông',
         hinhthuctraluong:'theo tháng',
         luongtoida:'12.500.000 đ',
         gioitinh:'không yêu cầu',
         dotuoi:'25 -28 tuổi',
         category_child_id: 2,
         category_id: 2,
         loaidv:"VIP 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        title: 'Cần Tuyển 25NV Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, LĐPT Tại ST Coop',
        img: 'https://cloud.muaban.net/images/thumb-detail/2024/05/16/552/aa95df9a3101464482aaa27568446000.jpg',
        diachi: 'Quận Gò Vấp, TP.HCM',
        descripts: `Cần Tuyển Nhân Viên Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, Lao Động Phổ Thông Siêu Thị Coo.p Gò Vấp
Nơi làm việc:
Khu vực Gò Vấp :
- Siêu Thị Phan Văn Trị
- Siêu Thị Quang Trung
- Siêu Thị Nguyễn Kiệm
- Siêu Thị Nguyễn Văn Lượng
- Siêu Thị Phan Huy Ích
….
Mức Lương
- Ca 4 tiếng: 4.200.000VNĐ/ Tháng + Phụ Cấp
- Ca 8 tiếng: 8.400.000VNĐ/ Tháng + Phụ Cấp
- Ca 10 tiếng: 10.500.000VNĐ/Tháng + Phụ Cấp
- Ca 12 Tiếng: 12.500.000VNĐ/ Tháng + Phụ Cấp
Part time 35-40.000đ/h
Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Mô tả công việc
- Bán hàng, giới thiệu sản phẩm cho khách hàng
- Sắp xếp, trưng bày hàng hóa từ kho lên kệ
- Kiểm tra hàng hư hỏng, thời hạn sử dụng hàng hóa
- Bảo quản hàng hóa theo đúng yêu cầu của siêu thị
- Quản lý, giữ gìn vệ sinh quầy kệ
- Kiểm kê kho hàng
- Bán hàng cho các quầy hàng như: Quầy hàng tiêu dùng; hóa mỹ phẩm; thời trang🛍️

*Quyền lợi:
+ Được kí hợp đồng, tham gia BHYT, BHXH, BHTN,...
+ Được tăng lương theo năng lực và thái độ làm việc
+ Được khám sức khỏe định kỳ
+ Được nghỉ 1 ngày/tuần ; 12 ngày phép/năm

*Yêu cầu:
- Đủ 18 tuổi - 58 tuổi
- Nhanh nhẹn, hoạt bát, có sức khỏe tốt, cẩn thận
- Có tinh thần trách nhiệm cao

*Hồ sơ xin việc:
+ 1 đơn xin việc
+ 2 sơ yếu lý lịch
+ 2 Căn cước công dân photo

Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Lưu ý: Ưu tiên cho những ai liên hệ sớm, bên mình tuyển dụng miễn phí.`,
         nhatuyendung:'Cá nhân đănnguyễn minh hoàn 4g tuyển',
         loaihinhcv:'Toàn thời gian',
         luongtoithieu:'8.500.000 đ',
         kinhnghiem:'Không yêu cầu',
         tencty:'không có',
         hocvantoithieu:'trung học',
         nganhnghe:'Lao động phôt thông',
         hinhthuctraluong:'theo tháng',
         luongtoida:'12.500.000 đ',
         gioitinh:'không yêu cầu',
         dotuoi:'25 -28 tuổi',
         category_child_id: 2,
         category_id: 2,
         loaidv:"VIP 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        title: 'Cần Tdfgrdfghdfhfgnguyễn minh hoàn 4nguyễn minh hoàn 4uyển 25NV Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, LĐPT Tại ST Coop',
        img: 'https://cloud.muaban.net/images/thumb-detail/2024/05/16/552/aa95df9a3101464482aaa27568446000.jpg',
        diachi: 'Quận Gò Vấp, TP.HCM',
        descripts: `Cần Tuyển Nhân Viên Trưng Bày, Đóng Gói ,Tạp Vụ , Bảo Vệ, Lao Động Phổ Thông Siêu Thị Coo.p Gò Vấp
Nơi làm việc:
Khu vực Gò Vấp :
- Siêu Thị Phan Văn Trị
- Siêu Thị Quang Trung
- Siêu Thị Nguyễn Kiệm
- Siêu Thị Nguyễn Văn Lượng
- Siêu Thị Phan Huy Ích
….
Mức Lương
- Ca 4 tiếng: 4.200.000VNĐ/ Tháng + Phụ Cấp
- Ca 8 tiếng: 8.400.000VNĐ/ Tháng + Phụ Cấp
- Ca 10 tiếng: 10.500.000VNĐ/Tháng + Phụ Cấp
- Ca 12 Tiếng: 12.500.000VNĐ/ Tháng + Phụ Cấp
Part time 35-40.000đ/h
Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Mô tả công việc
- Bán hàng, giới thiệu sản phẩm cho khách hàng
- Sắp xếp, trưng bày hàng hóa từ kho lên kệ
- Kiểm tra hàng hư hỏng, thời hạn sử dụng hàng hóa
- Bảo quản hàng hóa theo đúng yêu cầu của siêu thị
- Quản lý, giữ gìn vệ sinh quầy kệ
- Kiểm kê kho hàng
- Bán hàng cho các quầy hàng như: Quầy hàng tiêu dùng; hóa mỹ phẩm; thời trang🛍️

*Quyền lợi:
+ Được kí hợp đồng, tham gia BHYT, BHXH, BHTN,...
+ Được tăng lương theo năng lực và thái độ làm việc
+ Được khám sức khỏe định kỳ
+ Được nghỉ 1 ngày/tuần ; 12 ngày phép/năm

*Yêu cầu:
- Đủ 18 tuổi - 58 tuổi
- Nhanh nhẹn, hoạt bát, có sức khỏe tốt, cẩn thận
- Có tinh thần trách nhiệm cao

*Hồ sơ xin việc:
+ 1 đơn xin việc
+ 2 sơ yếu lý lịch
+ 2 Căn cước công dân photo

Liên hệ trực tiếp Quản lý để biết thêm chỉ tiêu tại Chi nhánh mình muốn đăng ký và hẹn lịch nộp hồ sơ.
Hotline/Zalo: 097211****
Hiện số: Anh Đạt ( Quản Lý)

*Lưu ý: Ưu tiên cho những ai liên hệ sớm, bên mình tuyển dụng miễn phí.`,
         nhatuyendung:'Cá nhân đăng tuyển',
         loaihinhcv:'Toàn thời gian',
         luongtoithieu:'8.500.000 đ',
         kinhnghiem:'Không yêu cầu',
         tencty:'không có',
         hocvantoithieu:'trung học',
         nganhnghe:'Lao động phôt thông',
         hinhthuctraluong:'theo tháng',
         luongtoida:'12.500.000 đ',
         gioitinh:'không yêu cầu',
         dotuoi:'25 -28 tuổi',
         category_child_id: 2,
         category_id: 2,
         loaidv:"VIP S",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
