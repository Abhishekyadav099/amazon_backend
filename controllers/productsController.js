const productModel = require('../models/productsModel')

const getAllProducts = async (req, res) => {
    const { sort = 'price', page = 1, pageSize = 3, ...q } = req.query;
    const sortStr = sort.split(',').join(',');
    // const q = req.query;
    let query = productModel.find(q);
    query = query.sort(sortStr);

    const skip = page * (page - 1);
    query = query.skip(skip).limit(pageSize);

    query = query.select('title');

    // query = query.skip(skip).limit(limit);

    
    // query = query.sort();
    // console.log(q);
    // const products = await productModel.find(q);
    // console.log(req.url);
    const products = await query;
    res.json({
        status: 'success',
        results: products.length,
        data: {
            products: products,
        }
    })

}




const adProduct = async (req, res) => {
    try {
        const { _id, ...reqData } = req.body;
        const data = await productModel.create(reqData);
        console.log(data);
        res.json({
            status: 'success',
            results: 1,
            data: {
                products: data,
            }
        });
    }
    catch (err) {
        res.status(403);
        console.log(err);

        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { _id, ...reqData } = req.body;
        const data = await productModel.deleteOne({ _id: reqId });
        console.log(data);
        res.json({
            status: 'success',
            results: 1,
        });
    }
    catch (err) {
        res.status(403);
        console.log(err);

        res.json({
            status: 'fail',
            message: err.message
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { _id, ...reqData } = req.body;
        const data = await productModel.findOneAndUpdate({ _id: reqId });
        console.log(data);
        res.json({
            status: 'success',
            results: 1,
        });
    }
    catch (err) {
        res.status(403);
        console.log(err);

        res.json({
            status: 'fail',
            message: err.message
        })
    }
}

const getOneProduct = async (req, res) => {
    try {
        const { _id, ...reqData } = req.body;
        const data = await productModel.findOne({ _id: req.params.id });
        console.log(data);
        console.log(req.url);
        res.json({
            status: 'success',
            results: 1,
            data: {
                products: data,
            }
        });
    }
    catch (err) {
        res.status(403);
        console.log(err);

        res.json({
            status: 'fail',
            message: err.message
        })
    }
}

const replaceProduct = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, _id: reqId };
        const result = await productModel.findOneAndReplace({ _id: reqId }, data);
        console.log(result);

        res.json({
            status: "success",
            result: 1,
            data: {
                products: data,
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(400);
        res.json({
            status: "fail",
            message: JSON.stringify(err),
        });
    }
}

module.exports = {
    getAllProducts,
    adProduct,
    replaceProduct,
    deleteProduct,
    getOneProduct,
    updateProduct
}
