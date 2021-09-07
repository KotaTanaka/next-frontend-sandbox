/** 書籍一覧取得レスポンス */
export interface IGetBookListResponse {
  books: IBookListItem[];
}

/** 書籍リスト要素 */
export interface IBookListItem {
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
