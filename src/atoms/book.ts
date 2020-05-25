import { atom } from 'recoil';

// from app
import { ICreateBookBody } from '@/interfaces/request/book';
import { IGetBookListResponse } from '@/interfaces/response/book';

const initialCreateBookParams: ICreateBookBody = {
  name: '',
  outline: '',
  author: '',
  publisher: '',
  category: '',
  price: 0,
  releasedAt: '2020-04-01',
};

const initialBookList: IGetBookListResponse = {
  books: [],
};

/** 書籍登録パラメータ */
export const createBookParamsState = atom({
  key: 'createBookParams',
  default: initialCreateBookParams,
});

/** 書籍一覧取得レスポンス */
export const bookListState = atom({
  key: 'bookList',
  default: initialBookList,
});
