const res = require('express/lib/response')
const { Car } = require('../models')

class carController {
    static async get(req,res){
        try{
            const response = await Car.findAll()

            return res.status(200).json(response)
        }
        catch(error){
            return res.status(500).json(error)
        }
    }
    static async create(req,res){
        try{
            let payload = {
                name: req.body.name,
                type: req.body.type,
                year: +req.body.year,
                brand: req.body.brand
            }
            const response = await Car.create(payload)
            return res.status(201).json(response)
        }
        catch(error){
            return res.status(500).json(error)
        }
    }
    static async getDataById(req,res){
        try{
            const id = +req.params.id
            const response = await Car.findAll({
                where: {
                    id
                }
            })
            return res.status(200).json({
                message: 'Data Deleted!'
            })
        }
        catch(error){
            return res.status(500).json(error)
        }
    }
    static async delete(req,res){
        try{
            const id = +req.params.id

            const response = await Car.destroy({
                where: {
                    id
                }
            })
            return res.status(200).json(response)
        }
        catch(error){
            return res.status(500).json(error)
        }
    }
    static async update(req,res){
        try{
            const id = +req.params.id
            let payload = {
                name: req.body.name,
                type: req.body.type,
                year: +req.body.year,
                brand: req.body.brand
            }
            const response = await Car.update(payload,{
                where:{
                    id
                }
            })
            return res.status(201).json(response)
        }
        catch(error){
            return res.status(500).json(response)
        }
    }
}
module.exports = carController