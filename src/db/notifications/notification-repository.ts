import { Op, DataTypes, FindOptions } from "sequelize";
import { NotificationStatus } from "../../models/enums/NotificationStatus";
import { Notification } from "./notification";

export class NotificationRepository {
	async createNotification(
		userEmail: string,
		bookId: number,
		bookName: string
	): Promise<Notification> {
		return Notification.create({
			userEmail,
			bookId,
			bookName,
			notificationStatus: NotificationStatus.UnNotified,
		});
	}

	async getUnnotifiedUsersForBook(bookId: number): Promise<Notification[]> {
		return Notification.findAll({
			where: {
				bookId,
				notificationStatus: NotificationStatus.UnNotified,
			},
		});
	}

	async getNotifiedUsersWithSearch(search: string): Promise<Notification[]> {
		const options = {
			where: {
				[Op.or]: [
					{ bookName: { [Op.iLike]: `%${search}%` } },
					{ authorName: { [Op.iLike]: `%${search}%` } },
				],
				notificationStatus: NotificationStatus.Notified,
			},
		};
		return Notification.findAll(options);
	}
}
