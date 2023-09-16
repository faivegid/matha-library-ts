import { TransactionType } from "../../models/enums/TransactionType";
import { BookTransactionLog } from "./bookTransactionLog";
import { FindOptions } from "sequelize";

export class BookTransactionLogRepository {
	// Create a new BookTransactionLog record
	static async create(
		transactionType: TransactionType,
		userEmail: string,
		bookId: string,
		bookName: string,
		returnDate: Date | null
	) {
		const transactionLog = await BookTransactionLog.create({
			transactionType,
			userEmail,
			bookId,
			bookName,
			returnDate,
		});

		return transactionLog;
	}

	static async getRecentTransactionsForBook(bookId: string, page: number) {
		const options: FindOptions = {
			limit: 10,
			offset: (page - 1) * page,
			where: { isDeleted: false, bookId },
			order: [["createdAt", "DESC"]],
		};

		const recentTransactions = await BookTransactionLog.findAll(options);
		return recentTransactions;
	}
}
