import BaseEntity from "../BaseEntity";
import { DataTypes } from "sequelize";
import { BookStatus } from "../../models/enums/BookStatus";
import { Sequelize } from "sequelize-typescript";

export class Book extends BaseEntity<string> {
  bookName: string;
  authorName: string;
  description: string;
  status: BookStatus;
  frontPagePicUrl: string;
}

export const initBookTable = (sequelize: Sequelize) => {
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
      modelName: 'Books',
    }
  );
}