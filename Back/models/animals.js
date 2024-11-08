module.exports = (sequelize, type) => {
    return sequelize.define(
      "animals",
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: type.STRING,
          allowNull: false,
        },
        description: {
          type: type.STRING,
          allowNull: false,
        },
        url: {
          type: type.STRING,
          allowNull: false,
        },
        urlImage: {
          type: type.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false, 
        tableName: "animals",
      }
    );
  };