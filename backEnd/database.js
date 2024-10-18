// Xóa dòng này vì không cần thiết:
// const { sequelize } = require('sequelize');

// Import Sequelize từ gói `sequelize`
const { Sequelize } = require('sequelize');

// Khởi tạo kết nối Sequelize
const sequelize = new Sequelize('postgreSQL_connect_vue', 'longtimenose3', '123456', {
    host: 'localhost',
    dialect: 'postgres',
});

// Kiểm tra kết nối với cơ sở dữ liệu
sequelize.authenticate()
    .then(() => console.log('Authentication successful'))
    .catch(err => console.log('Error: ' + err));

// Xuất module để sử dụng trong các file khác
module.exports = sequelize;
