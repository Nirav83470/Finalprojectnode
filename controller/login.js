var resgi = require('../model/resgtions')


const login = async (req, res) => {

    try {
        var data = await resgi.find({ "email": req.body.email })


        if (data.length != 0) {
            if (data[0].password == req.body.password) {
                res.status(200).json({
                    status: " Success",
                    data
                })
            } else {
                res.status(200).json({
                    status: "Passowrd Not Match",
                })
            }
        } else {
            res.status(200).json({
                status: "Email Is Not Match",
        
            })
        }
    } catch (error) {
        res.status(200).json({
            status: "error",
            data
        })
    }
}

module.exports = {
    login
}