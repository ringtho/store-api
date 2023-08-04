
const getProducts = async (req, res) => {
    res.status(200).json({success: true, products: "products"})
}


module.exports = { getProducts }