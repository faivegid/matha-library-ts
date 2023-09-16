import { DataTypes, Sequelize } from "sequelize";
import { NotificationStatus } from "../../models/enums/NotificationStatus";
import BaseEntity from "../BaseEntity";

export class Notification extends BaseEntity<number> {
	public userEmail: string;
	public bookId: number;
	public bookName: string;
	public notificationStatus: NotificationStatus;
}

export const initNotificationTable = (sequelize: Sequelize) => {
	Notification.init(
		{
			...Notification.getBaseModelAttributes(),
			userEmail: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			bookId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			bookName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			notificationStatus: {
				type: DataTypes.ENUM(...Object.keys(NotificationStatus)),
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Notification",
		}
	);
};
