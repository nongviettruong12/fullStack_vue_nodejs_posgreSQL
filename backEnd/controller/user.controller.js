// controllers/user.controller.js
const User = require('../model/userModel');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const JWT_SECRET = 'JWT_SECRET_KEY'
// Lấy tất cả người dùng
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
};

// Tạo người dùng mới
exports.createUser = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ userName, email, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

// Cập nhật thông tin người dùng
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { userName, email, password } = req.body;
    try {
        const user = await User.findByPk(id);
        if (user) {
            user.userName = userName;
            user.email = email;
            user.password = password;
            await user.save();
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
};

// Xóa người dùng
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            res.json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};
exports.updateUserRole = async (req, res) => {
    const { id } = req.params
    const { role } = req.body
    try{
        const user = await User.findByPk(id)
        if(!user){
            user.role = role
            await user.save()
            res.json({message:'cap nhat role thanh cong',user})
        }else{
            res.status(404).json({error: 'User not found'})
        }
    }catch(error){
        res.status(500).json({error: 'da xay ra loi',error})
    }
}