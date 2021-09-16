import { atom } from 'recoil';

import { ICreateBookBody } from '@/interfaces/request/book';
import {
  IGetBookListResponse,
  IGetBookOneResponse,
} from '@/interfaces/response/book';

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

const initialBookOne: IGetBookOneResponse = {
  book: {
    id: '',
    name: '',
    outline: '',
    author: '',
    publisher: '',
    category: '',
    price: 0,
    releasedAt: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

/** 書籍登録パラメータ */
export const createBookParamsState = atom({
  key: 'createBookParams',
  default: initialCreateBookParams,
});

/** 書籍一覧取得レスポンス */
export const bookListState = atom<IGetBookListResponse>({
  key: 'bookList',
  default: initialBookList,
});

/** 書籍詳細取得レスポンス */
export const bookOneState = atom<IGetBookOneResponse>({
  key: 'bookOne',
  default: initialBookOne,
});
