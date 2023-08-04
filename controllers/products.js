const Product = require('../models/product')

const getProducts = async (req, res) => {
    const { featured, company, name } = req.query
    const queryObject = {}

    if(featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if(company) {
        queryObject.company = company
    }

    if(name) {
        queryObject.name = {$regex: name, $options: 'i'}
    }
    
    const products = await Product.find(queryObject)
    res.status(200).json({success: true, products, nbHits: products.length })
}


module.exports = { getProducts }