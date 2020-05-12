/** 書籍登録ミューテーションのパラメータ */
export interface ICreateBookBody {
  name: string;
  outline: string;
  author: string;
  publisher: string;
  category: string;
  price: number;
  releasedAt: string;
}
