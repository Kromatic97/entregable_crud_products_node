const { restart } = require('nodemon')
//!Importando los controladores//
const productsControllers = require ('./products.controller')

//!Servicio para obtener todos los products//
const getAllProducts = (req, res) => {
    productsControllers.getAllProducts()
    .then( data => {
        res.status(200).json(data)
    })

    .catch(err => {
        res.status(400).json({message:err.message})
    })
}

//!para crear un producto nuevo
const postProduct = (req, res) => {
    const data = req.body
    if(data.name && data.category && data.price && data.isAvailable){
        productsControllers.createProduct(data)
        .then( response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({message:err.message})
        })
    }else{
        res.status(400).json({message:'Missin data'})
    }
};

//!Para obtener pasado por parametro//
const getProductById = (req, res) => {
    const id=req.params.id;

    productsControllers.getProductById(id)

    .then(data => {
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({message:'Invalid ID'})
        }
    })
    .catch(err => {
        res.status(404).json({message:err})
    })
}

//!Servicio de PACTH UPDATE parcial//
const patchProduct = (req, res) => {
    const id = req.params.id
    const {name, category, price, isAvailable} = req.body;


    productsControllers.editProduct(id, {name, category, price, isAvailable})
    .then((response) => {

        if(response[0]){
            res.status(200).json({message:`Product whit id: ${id}, edited succesfully`}) 
         } else {
            res.status(400).json({message:err.message})
         }
        })
        .catch(error => {
            res.status(400).json({message:error.message})
        })
}

//!Servicio de PUT UPDATE total//

const putProduct = (req, res) => {
    const id = req.params.id;
    const {name, category, price, isAvailable}=req.body
    //?if para validar los datos, y generar error si no vienen todos los datos necesarios
    if(name && category && price && isAvailable){
        productsControllers.editProduct(id, {name, category, price, isAvailable})
           .then((response) => {
            //? Este if valida si un producto existe o no (Valid or Invalid ID)
            if(response[0]){
                res.status(200).json({message:`Product whit ID: ${id}, edited succesfully!`})
            }else{
                res.status(404).json({mesagge: 'Invalid ID'})
            }
        })
        .catch (err => {
            res.status(400).json({message:err.message})
        })
    }else {
        res.status(400).json({message:'Missing data', fields : {
            name:'string',
            category:'string',
            price:'integer',
            isAvailable:'boolean'
        }})
    }
}



//!Servicio para el DELETE//
const  deleteProduct = (req, res) => {
    const id = req.params.id
    productsControllers.deleteProduct(id)
    .then((response) => {
        if(response){
            res.status(204).json(response)
        }else {
            res.status(400).json({message: 'Invalid ID'})
        }
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    patchProduct,
    putProduct,
    deleteProduct

}