"use strict";
module.exports = (sequelize, DataTypes) => {
  const Diary = sequelize.define(
    "Diary",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Diary.associate = function(models) {
    // associations can be defined here
    Diary.hasMany(models.DiaryItem, {
      foreignKey: "diaryId",
      as: "diaryItems"
    });
  };
  return Diary;
};
