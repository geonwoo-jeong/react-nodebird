module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      nickName: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },
    {
      charset: "utf8",
      collate: "utf-_general_ci"
    }
  );

  User.assoicate = db => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
  };

  return User;
};
