module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: 1,
                msg: "Enter A burger name"
            }
        }
    },
    devoured: DataTypes.BOOLEAN
    });
    return Burger;
  };