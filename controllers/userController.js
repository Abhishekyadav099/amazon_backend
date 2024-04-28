const userModel = require('../models/userModel')

const getAllusers = async (req, res) => {
    const data = await userModel.find();
    console.log(data);
    console.log(req.url);
    res.json({
        status: 'success',
        results: 0,
        data: {
            users: data,
        }
    })
}


const aduser = async (req, res) => {
    try {
        const { _id, ...reqData } = req.body;
        const data = await userModel.create(reqData);
        console.log(data);
        res.json({
            status: 'success',
            results: 1,
            data: {
                users: data,
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

const deleteuser = async (req, res) => {
    try {
        const { _id, ...reqData } = req.body;
        const data = await userModel.deleteOne({ _id: reqId });
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

const updateuser = async (req, res) => {
    try {
        const { _id, ...reqData } = req.body;
        const data = await userModel.findOneAndUpdate({ _id: reqId });
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

const getOneuser = async (req, res) => {
    try {
        const { _id, ...reqData } = req.body;
        const data = await userModel.findOne({ _id: req.params.id });
        console.log(data);
        console.log(req.url);
        res.json({
            status: 'success',
            results: 1,
            data: {
                users: data,
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

const replaceuser = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, _id: reqId };
        const result = await userModel.findOneAndReplace({ _id: reqId }, data);
        console.log(result);

        res.json({
            status: "success",
            result: 1,
            data: {
                users: data,
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
    getAllusers,
    aduser,
    replaceuser,
    deleteuser,
    getOneuser,
    updateuser
}
