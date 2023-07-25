var express = require('express');
var router = express.Router();
// var resgi = require("../model/resgtions");
const { datarestions } = require('../controller/resgitions');
const { login } = require('../controller/login');
const { addpro } = require('../controller/addproduct');
const { findone } = require('../controller/findone')


router.post('/resgitions', datarestions)
router.get('/login', login)
router.post('/addproduct', addpro)
router.get('/findone' , findone)


module.exports = router;
