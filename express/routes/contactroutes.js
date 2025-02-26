const express = require('express')
const router = express.router('router')
const contact = require('../models/Contactmodel')

router.get('/all', async (req, res) => {
    try {
        const contacts = await contacts.find()
        return res.status(500).json({ message: error.message })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const newcontact = new Contacts(req.body)
        const { name, phone } = newcontact
        if (!phone || !name) {
            return res.status(400).json({ message: "all fields required" })
        }
        await newcontact.save()
        return res.status(200).json(newcontact)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
)


router.put('edit/:id', async(req,res)=>{
    try{
        const id=req.Params.id
    }
}