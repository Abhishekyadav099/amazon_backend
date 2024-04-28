const  express = require("express");
const productsController = require('../controllers/productsController.js');
const productRouter = express.Router();

productRouter.route('/')
    .get(productsController.getAllProducts)
    .post(productsController.adProduct);
productRouter.route('/:id')
    .put(productsController.replaceProduct)
    .delete(productsController.deleteProduct)
    .get(productsController.getOneProduct)
    .patch(productsController.updateProduct)


module.exports = productRouter;