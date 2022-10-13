const router = require ('express').Router()
const productsServices = require ('./products.services')



//? Este es el prefijo /api/v1/movies


router.get ('/', productsServices.getAllProducts)
router.post ('/', productsServices.postProduct)

router.get('/:id', productsServices.getProductById)
router.delete('/:id', productsServices.deleteProduct)
router.patch('/:id', productsServices.patchProduct)
router.put('/:id', productsServices.putProduct)


module.exports = router