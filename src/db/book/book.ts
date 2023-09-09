import sequelize from "../db-context";
import BaseEntity from "../BaseEntity";
import { DataTypes } from "sequelize";
import { BookStatus } from "../../models/enums/BookStatus";

class Book extends BaseEntity<string> {
  bookName: string;
  authorName: string;
  description: string;
  status: BookStatus;
  frontPagePicUrl: string;
}

Book.init(
    {
      ...Book.getBaseModelAttributes(),
      id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      bookName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authorName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      description:{
        type: DataTypes.STRING,
        allowNull: false
      },
      status:{
        type: DataTypes.ENUM(...Object.keys(BookStatus)),
        allowNull: false,
        defaultValue: BookStatus.Available,
      },
      frontPagePicUrl:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize, 
      modelName: 'Book',
    }
  );
