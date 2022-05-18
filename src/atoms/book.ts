import { atom } from 'recoil';

import type {
  ICreateBookBody,
  IUpdateBookBody,
} from '@/interfaces/request/book';
import type { IBook } from '@/interfaces/response/book';

const initialCreateBookParams: ICreateBookBody = {
  name: '',
  outline: '',
  author: '',
  publisher: '',
  category: '',
  price: 0,
  releasedAt: '2020-04-01',
};

const initialUpdateBookParams: IUpdateBookBody = {};

const initialBookList: IBook[] = [];

const initialBookOne: IBook = {
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
};

/** 書籍登録パラメータ */
export const createBookParamsState = atom({
  key: 'createBookParams',
  default: initialCreateBookParams,
});

/** 書籍編集パラメータ */
export const updateBookParamsState = atom({
  key: 'updateBookParams',
  default: initialUpdateBookParams,
});

/** 書籍一覧データ */
export const bookListState = atom<IBook[]>({
  key: 'bookList',
  default: initialBookList,
});

/** 書籍詳細データ */
export const bookOneState = atom<IBook>({
  key: 'bookOne',
  default: initialBookOne,
});
