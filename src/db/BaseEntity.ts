import { Model, DataTypes } from "sequelize";

class BaseEntity<T> extends Model {
  id: T;
  createdBy: string;
  isDeleted: boolean;
  deletedBy: string;
  dateCreated: Date;
  dateUpdated: Date;
  
  static getBaseModelAttributes(): any{
    return {
        createdBy:{
            type: DataTypes.STRING,
            allowNull: true
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        deletedBy: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dateUpdated: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }
  }
}

export default BaseEntity
