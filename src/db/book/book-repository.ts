import { BookStatus } from "../../models/enums/BookStatus";
import { Book } from "./book"; // Import your model definition here

export class BookRepository {
	async createBook(
		id: string,
		bookName: string,
		authorName: string,
		description: string,
		status: BookStatus,
		frontPagePicUrl: string
	): Promise<Book> {
		return await Book.create({
			id,
			bookName,
			authorName,
			description,
			status,
			frontPagePicUrl,
		});
	}

	async getBookById(id: string): Promise<Book | null> {
		return await Book.findByPk(id);
	}

	async updateBookById(
		id: string,
		bookName: string,
		authorName: string,
		description: string,
		frontPagePicUrl: string
	): Promise<number> {
		const [updatedRows] = await Book.update(
			{
				bookName,
				authorName,
				description,
				frontPagePicUrl,
			},
			{
				where: { id },
			}
		);

		return updatedRows;
	}

	async updateBookStatusById(id: string, status: BookStatus): Promise<number> {
		const [updatedRows] = await Book.update(
			{
				status,
			},
			{
				where: { id },
			}
		);

		return updatedRows;
	}

	async deleteBookById(id: string): Promise<void> {
		await Book.update(
			{ isDeleted: false, deleetedBy: "admin" },
			{ where: { id } }
		);
	}
}
