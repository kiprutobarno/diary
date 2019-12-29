"use strict";
module.exports = (sequelize, DataTypes) => {
  const DiaryItem = sequelize.define(
    "DiaryItem",
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      complete: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      diaryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  DiaryItem.associate = function(models) {
    // associations can be defined here
    DiaryItem.belongsTo(models.Diary, {
      foreignKey: "diaryId",
      onDelete: "CASCADE"
    });
  };
  return DiaryItem;
};
