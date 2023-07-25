const resgi = require('../model/resgtions');

const datarestions = async (req, res) => {

    try {
        var data = await resgi.create(req.body)

        res.status(200).json({
            status: "Success",
            data
        })
    }
    catch (error) {
        res.status(401).json({
            status: "error",
            data
        })
    }
}

module.exports = {
    datarestions
}