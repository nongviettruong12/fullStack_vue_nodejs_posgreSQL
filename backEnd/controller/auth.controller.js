const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

exports.register = async (req, res) => {
    const { userName, email, password } = req.body
    try{
        const existingUser = await User.findOne({ where: { email} })
        if(existingUser) {
            return res.status(400).json({ error: 'Email already exists' })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        userName,
        email,
        password: hashedPassword,
        role:1
    
    })
    const token = jwt.sign({ userId: newUser.id, role: newUser.role }, JWT_SECRET, { expiresIn:'7d'})
    return res.status(200).json({message:'Successfully registered',user: newUser, token}
    )
}catch(error){
    return res.status(500).json({message:'da xay ra loi duma',error})
}
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'khong tim thay nguoi dung' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'sai mat khau hoac tai khoan' });
        }
        const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
        return res.status(200).json({ message: 'dang nhap thanh cong', token });
    } catch (error) {
        // Sửa lỗi ở đây
        return res.status(500).json({ message: 'da xay ra loi', error: error.message }); // Thay đổi ở đây
    }
};
