'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        namecategory: 'Bất động sản',
        image: 'https://cloud.muaban.net/images/thumb-glist/2024/05/18/438/2660c5b7bf6d43d2bc6aca7f04b81a25.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Việc làm',
        image: 'https://cloud.muaban.net/images/thumb-glist/2024/05/18/438/2660c5b7bf6d43d2bc6aca7f04b81a25.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Ô tô',
        image: 'https://cloud.muaban.net/images/thumb-glist/2024/05/18/438/2660c5b7bf6d43d2bc6aca7f04b81a25.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Xe máy',
        image: 'https://cloud.muaban.net/images/thumb-glist/2024/05/18/438/2660c5b7bf6d43d2bc6aca7f04b81a25.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Dịch vụ',
        image: 'https://cloud.muaban.net/images/thumb-glist/2024/05/18/438/2660c5b7bf6d43d2bc6aca7f04b81a25.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Đồ điện tử',
        image: 'https://cloud.muaban.net/images/thumb-glist/2024/05/18/438/2660c5b7bf6d43d2bc6aca7f04b81a25.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Điện máy, Đồ gia dụng',
        image: 'https://cloud.muaban.net/images/thumb-glist/2024/05/18/438/2660c5b7bf6d43d2bc6aca7f04b81a25.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Sở thích, Mặt hàng khác',
        image: 'https://cloud.muaban.net/images/thumb-glist/2024/05/18/438/2660c5b7bf6d43d2bc6aca7f04b81a25.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Thời trang, Mỹ phẩm',
        image: 'https://cloud.muaban.net/images/thumb-glist/2024/05/18/438/2660c5b7bf6d43d2bc6aca7f04b81a25.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Đối tác, Cộng đồng',
        image: 'https://cloud.muaban.net/images/thumb-glist/2024/05/18/438/2660c5b7bf6d43d2bc6aca7f04b81a25.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        namecategory: 'Bán nhà đất',
        parent_category: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Cho thuê',
        parent_category: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Sang nhượng',
        parent_category: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Dịch vụ',
        parent_category: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        namecategory: 'Tuyển nhân viên',
        parent_category: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Tìm việc làm',
        parent_category: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Dịch vụ lao động',
        parent_category: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Tuyển sinh, Du học, Đào tạo',
        parent_category: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        namecategory: 'Bán ô tô',
        parent_category: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        namecategory: 'Cho thuê',
        parent_category: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        namecategory: 'Dịch vụ',
        parent_category: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        namecategory: 'Bán xe máy',
        parent_category: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Cho thuê xe máy',
        parent_category: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Dịch vụ xe máy',
        parent_category: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
//dịch vụ
      {
        namecategory: 'Xây dụng, Nội thất, Phong thủy',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Điện, Điện tử ,Điện lạnh',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Nước, Vệ sinh,Cầu cống',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Vận chuyển, dọn nhà, văn phòng',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'In ấn, dịch thuật',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Tổ chức sự kiện',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Tư vấn thuế, tài chính',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Thẩm mỹ, Y tế',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Thiết kế Web, phần mềm',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Du lịch, Khách sạn, Vé',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Cầm đồ',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Tư vấn luật, thủ tục',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Dịch vụ khác',
        parent_category: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  
      //đồ điện tử
      {
        namecategory: 'Điện thoại di động',
        parent_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Máy tính bảng',
        parent_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Máy vi tính, Laptop, Máy chủ',
        parent_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Máy ảnh, Máy quay',
        parent_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Tivi, Loa, Amply, Máy nghe nhạc',
        parent_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'SIM, thẻ điện thoại',
        parent_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Linh kiện, phụ kiện',
        parent_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Đồ điện tử khác',
        parent_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Cho thuê đồ điện tử',
        parent_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Cần mua đồ điện tử',
        parent_category: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //điện máy đồ gia dụng
      {
        namecategory: 'Đồ điện máy',
        parent_category: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Đồ nhà bếp',
        parent_category: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Nội thất, ngoại thất',
        parent_category: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Đồ dùng gia đình',
        parent_category: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Đồ dùng văn phòng',
        parent_category: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Cho thuê điện máy',
        parent_category: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Cần mua điện máy',
        parent_category: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // sở thích mặt hàng khác
      {
        namecategory: 'Thú nuôi, cây cảnh',
        parent_category: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Nhạc cụ, sách, đồ dùng học tập',
        parent_category: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Đồ thể thao, Xe đạp, Đồ chơi',
        parent_category: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Mẹ & Bé',
        parent_category: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Thuốc, Sức khỏe',
        parent_category: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Nông sản, thực phẩm, đặc sản',
        parent_category: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Đồ trang trí, tranh, ảnh',
        parent_category: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Đồ cổ, sưu tập, hàng hiếm',
        parent_category: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Mặt hàng còn lại',
        parent_category: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Cần mua khác',
        parent_category: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Cho thuê khác',
        parent_category: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // thời trang mỹ phẩm
      {
        namecategory: 'Quần áo, trang phục',
        parent_category: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Giầy dép, túi xách',
        parent_category: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Mỹ phẩm, nước hoa',
        parent_category: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Trang sức, Phụ kiện',
        parent_category: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Cần mua thời trang',
        parent_category: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Cho thuê thời trang',
        parent_category: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //đối tác công đồng
      {
        namecategory: 'Tìm đối tác',
        parent_category: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Bố cáo thành lập, giải thể',
        parent_category: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Thông báo, nhắn tin',
        parent_category: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Kết bạn, câu lạc bộ',
        parent_category: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Khác',
        parent_category: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },

// //subcategory type

//       {
//         namecategory: 'Bán Nhà',
//         subcategory_type: 11,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
      
//       {
//         namecategory: 'Bán căn hộ',
//         subcategory_type: 11,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Bán đất',
//         subcategory_type: 11,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
// //cho thuê nhà đất
//       {
//         namecategory: 'Nhà',
//         subcategory_type: 12,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Căn hộ, Chung cư , Khách sạn',
//         subcategory_type: 12,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Nhà trọ,Phòng trọ',
//         subcategory_type: 12,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Văn phòng,Mặt bằng',
//         subcategory_type: 12,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Nhà xưởng,Kho , Đất',
//         subcategory_type: 12,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       //sang nhượng
//       {
//         namecategory: 'Sạp chợ',
//         subcategory_type: 13,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Quán ăn, nhà hàng, khách sạn',
//         subcategory_type: 13,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Quán coffee , đồ uống',
//         subcategory_type: 13,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Shophouse',
//         subcategory_type: 13,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Shop thời trang , Tiệm tóc, Spa',
//         subcategory_type: 13,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Sang nhượng khác',
//         subcategory_type: 13,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       //việc làm 
//       //Tuyển nhân viên
      
//       {
//         namecategory: 'Công nhân',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Lái xe,phụ xe',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Giao chở hàng',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Giúp việc tạp vụ',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'An ninh bảo vệ',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Bán hàng',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Việc làm thời vụ',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Kế toán',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Kinh doanh',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'May mặc,giày da',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Nhân viên tư vấn',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Việc làm bán thời gian',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Hành chính nhân sự',
//         subcategory_type: 15,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
      
//       // tìm việc làm
//       {
//         namecategory: 'Bán hàng',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Người giúp việc tạp vụ',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Lái xe , phụ xe',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Kế toán',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'An ninh bảo vệ',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'May mặc , giày da',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Nhân viên tư vấn',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Giao chở hàng',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Hành chính nhân sự',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Thợ cắt tóc gội đầu',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Nhân viên khách sạn',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Thợ điện, nước',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Nhân viên massage',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Y dược',
//         subcategory_type: 16,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },

//       // ô tô
//       //bán ô tô
//       {
//         namecategory: 'Toyota',
//         subcategory_type: 19,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Ford',
//         subcategory_type: 19,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Mitsubishi',
//         subcategory_type: 19,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Hyundai',
//         subcategory_type: 19,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Honda',
//         subcategory_type: 19,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Kia',
//         subcategory_type: 19,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Mazda',
//         subcategory_type: 19,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Mercedes Benz',
//         subcategory_type: 19,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'BMW',
//         subcategory_type: 19,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         namecategory: 'Daewoo',
//         subcategory_type: 19,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },

//       //xe máy
//       //bán xe máy
     

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
