var addproduct = require('../model/addproduct')

const addpro = async  (req , res) => {

    var data = await addproduct.create(req.body)

    res.status(200).json({
        status: " Success",
        data
    })

}

module.exports = {
    addpro
}