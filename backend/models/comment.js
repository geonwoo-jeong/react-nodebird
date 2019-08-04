module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      conetnt: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci"
    }
  );

  Comment.assoicate = db => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };

  return Comment;
};
