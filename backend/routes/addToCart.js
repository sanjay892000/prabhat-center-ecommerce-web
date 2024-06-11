const express = require('express');
const router = express.Router();
const productSchema = require('../schema/AddToCart');
const upload = require('../middleware/multer');
const middleware = require('../middleware/authmiddleware')

router.post('/addtocart', middleware ,upload.single("image"), async (req, res) => {
    try {
        const image = req.file ? req.file.filename : null;
        const { name, price, quantity } = req.body;
        const product = new productSchema({
            name , price, quantity, image,
            user: req.user.id
        });
        const saveProduct = await product.save();
        res.json(saveProduct);
    } catch (error) {
      console.log(error)
    }
})

//Router 2: Get all notes using: GET 'api/notes/getnates' login required
router.get('/getproduct', middleware ,async (req, res) => {
    try {
        const product = await productSchema.find({ user: req.user.id });
        res.json(product);
    } catch (error) {
        console.log(error.massage);
        return res.status(400).send("there are server error")
    }

})

module.exports = router;

