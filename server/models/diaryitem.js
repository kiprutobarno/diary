"use strict";
module.exports = (sequelize, DataTypes) => {
  const DiaryItem = sequelize.define("DiaryItem", {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  DiaryItem.associate = models => {
    DiaryItem.belongsTo(models.Diary, {
      foreignKey: "diaryId",
      onDelete: "CASCADE"
    });
  };
  return DiaryItem;
};
