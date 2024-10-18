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
router.put('/items', async (req, res)=>{
    const { id, name, description } = req.body
    const item = await ItemModel.findByPk(id)
    if(item){
        item.name = name
        item.description = description
        await item.save()
        res.json(item)
    }else{
     res.status(404).send('item not found')   
    }
})
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