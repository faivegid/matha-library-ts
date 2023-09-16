import { DataTypes } from "sequelize";
import BaseEntity from "../BaseEntity";
import { Sequelize } from "sequelize-typescript";
import { TransactionType } from "../../models/enums/TransactionType";

export class BookTransactionLog extends BaseEntity<number> {
  transactionType: TransactionType;
  userEmail: string;
  bookId: string;
  bookName: string;
  returnDate: Date;
}

export const initUserTable = (sequelize: Sequelize) => {
BookTransactionLog.init(
    {
    ...BookTransactionLog.getBaseModelAttributes(),
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    transactionType: {
        type: DataTypes.ENUM(...Object.keys(TransactionType)),
        allowNull: false,
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bookId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bookName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    returnDate:{
        type: DataTypes.DATE,
        allowNull: true
    }
    },
    {
    sequelize,
    modelName: "BookTransactionLogs",
    }
)};
