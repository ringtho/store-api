const Product = require('../models/product')

const getProducts = async (req, res) => {
    const {featured} = req.query
    const queryObject = {}

    if(featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    const products = await Product.find(queryObject)
    res.status(200).json({success: true, products, nbHits: products.length })
}


module.exports = { getProducts }