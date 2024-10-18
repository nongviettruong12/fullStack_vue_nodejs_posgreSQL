const express = require('express');
const router = express.Router();
const ItemModel = require('../model/itemModel')

router.get('/items', async (req, res)=>{
    const items = await ItemModel.findAll()
    res.json(items)
})
router.post('/items', async (req, res)=>{
    const { name, description } = req.body
    const newItem = await ItemModel.create({name, description})
    res.json(newItem)
})
router.put('/items/:id', async (req, res) => {
    const { id } = req.params; // Lấy ID từ params
    const { name, description } = req.body; // Lấy dữ liệu từ body
    const item = await Item.findByPk(id);
    
    if (item) {
      item.name = name;
      item.description = description;
      await item.save();
      res.json(item);
    } else {
      res.status(404).send('Item not found'); // Trả về 404 nếu không tìm thấy item
    }
  });
  
router.delete('/items', async (req, res)=>{
    const { id } = req.body
    const item = await ItemModel.findByPk(id)
    if(item){
        await item.destroy()
        res.json({ message: 'Item deleted' });
    }else{
        res.status(404).send('Item not found');
    }
})
module.exports = router