// routes/user.routes.js
const express = require('express');
const userController = require('../controller/user.controller');
const { updateUserRole } = require('../controller/user.controller')
const router = express.Router();

// Lấy tất cả người dùng
router.get('/users', userController.getAllUsers);

// Tạo người dùng mới
router.post('/users', userController.createUser);

// Cập nhật người dùng
router.put('/users/:id', userController.updateUser);

// Cập nhật quyền người dùng

router.put('/users/:id/role', updateUserRole);


// Xóa người dùng
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
