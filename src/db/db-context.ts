import { Sequelize } from "sequelize-typescript";
import {initUserTable} from "./user/user";
import {initBookTable} from "./book/book";

const sequelize = new Sequelize("testDb", "sa", "Anything11.", {
  host: "localhost",
  port: 55467,
  dialect: 'mssql'
});

initUserTable(sequelize);
initBookTable(sequelize);

export default sequelize;