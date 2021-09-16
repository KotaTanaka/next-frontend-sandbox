/** 書籍一覧取得レスポンス */
export interface IGetBookListResponse {
  books: IBook[];
}

/** 書籍詳細取得レスポンス */
export interface IGetBookOneResponse {
  book: IBook;
}

/** 書籍データ要素 */
export interface IBook {
  id: string;
  name: string;
  outline: string;
  author: string;
  publisher: string;
  category: string;
  price: number;
  releasedAt: string;
  createdAt: Date;
  updatedAt: Date;
}
