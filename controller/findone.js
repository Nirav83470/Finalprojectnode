var addproduct = require("../model/addproduct");

const findone = async (req, res) => {
    var data = await addproduct.find(req.body)

    var total = addproduct.length;
    var skip = await addproduct.find().skip(4).count();
    var limit = await addproduct.find().limit(4).count();


    res.status(200).json({
        status: " Success",
        data,
        total,
        limit,
        skip

    })
}

module.exports = {
    findone
}