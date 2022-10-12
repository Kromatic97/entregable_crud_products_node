
//?1ero importa el modelo de la BD
const Products = require ('../models/products.models')

//?importar uuid//
const uuid = require ('uuid')

//!FUNCION PARA TRAER TODOS LOS DATOS
const getAllProducts = async () => {
    const data = await Products.findAll()
    return data
}

//!CONTROLLADOR PARA RESOLVER LA PROMESA QUE SE EJECUTE 1 VEZ NADA MAS//
// getAllProducts()
// .then((response) => console.log(response))
// .catch((err) => console.log(err))

//?FUNCION PARA INSERTAR LOS DATOS//
const createProduct = async (data) => {
    const newProduct = await Products.create({
        id:uuid.v4(),
        name:data.name,
        category:data.category,
        price:data.price,
        isAvailable:data.isAvailable
    })
    return newProduct
}

//?Insertando un producto en la BD//
// createProduct ({
//     name:'Budweiser',
//     category:'Beer',
//     price:500,
//     isAvailable:true
// })
// .then((response) => console.log(response))
// .catch((err) => console.log(err))

//!CONSULTA POR ID//
const getProductById =  async (id) => {
    const data = await Products.findOne({
        where: {
            id: id,
           
        },
    });
return data
}

// getProductById('ed62fdec-4854-4d24-9b67-842f5ff3573d')
// .then((response) => console.log(response))
// .catch((err) => console.log(err))

//!UPDate products//
const editProduct = async (id, data) => {
    const response = await Products.update(data, {
        where: {
            id: id
        },
    })
    return response
}

//?prueba de edit de Product//
editProduct('a7ac0419-c8d5-4657-8b0f-512c2e2f55ae', {
    name:'Miller Drift',
    price:240
}).then((response) => {
    console.log(response);
})
.catch ((err) => {
    console.log(err)
});


//!DELETE product//
const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id:id
        }
    })
    return data
}


//?Exportando los metodos y funciones//

module.exports={
    getAllProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct
}