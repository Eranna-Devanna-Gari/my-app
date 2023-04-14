module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        code : {
            type: DataTypes.STRING
        },
        status : {
            type: DataTypes.STRING
        },
        price : {
            type: DataTypes.DOUBLE
        }
    })

    return Product
}