const express = require('express')
const router = express.Router()
const uploadMulter = require('../utils/multer')


const { getProductsController, getProductController, createProductController, updateProductController, deleteProductController, getProductsControllerRealTime } = require ('../controllers/products')


router.get('/', getProductsController)
router.get('/realtimeproducts', getProductsControllerRealTime)
router.get("/products", getProductsController)
router.get("/products/:pid", getProductController)
router.post("/products", uploadMulter.single('thumbnail'),createProductController)
router.put("/products/:pid", uploadMulter.single('thumbnail'), updateProductController)
router.delete("/products/:pid", deleteProductController )



module.exports = router;