const db = require('../model')

const Product = db.products;


const addProduct = async (req,res) => {
    let add = {
        name: req.body.name,
        code: req.body.code,
        price: req.body.price,
        status: req.body.status
    }

    await Product.sync();
    const product = await Product.create(add);
    res.status(200).send(product);
    console.log(product);
}

const getAllProducts = async (req, res) => {

    let products = await Product.findAll();
    res.status(200).send(products);
}

const getAllActiveProducts = async (req, res) => {

    let products = Product.findAll({where: {status: "active"}});
    res.status(200).send(products);
}

// const getActiveProducts = async (req, res) => {
//     try {
//         let products = await Product.findAll({where: {status: "active"}});
//     console.log("pr.... ", products)
//     res.status(200).send(products);
//     } catch (error) {
//      console.log("err...... ", error.message)   
//     }
// }

const getOneProduct = async (req, res) => {
    let id = req.params.id;
    let product = await Product.findOne({where: {id:id}});
    res.status(200).send(product);
}

const updateProduct = async (req, res) => {
    try {
        let id = req.params.id;
        const  updateproduct = await Product.update(req.body, {where: {id: id}});
        res.status(200).send({message:updateproduct[0]} + 'Product is updated successfully');   
    } catch (error) {
        console.log("er....... ", error.message)
    }
}

const deleteProduct = async (req,res) => {
    let id = req.params.id;
    await Product.destroy({where: {id: id}});
    res.status(200).send('Product is deleted successfully');
}

const setInactiveProduct = async (req, res) => {
    let id = req.params.id;
    const inactiveProduct = await Product.update({status: "inactive"}, {where: {id: id}});
    res.status(200).send({message: inactiveProduct[0]} + 'product status is set it as inactive');
}



module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getAllActiveProducts,
    setInactiveProduct
}