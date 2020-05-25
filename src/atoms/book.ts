import { atom } from 'recoil';

// from app
import { ICreateBookBody } from '@/interfaces/request/book';

const initialCreateBookParams: ICreateBookBody = {
  name: '',
  outline: '',
  author: '',
  publisher: '',
  category: '',
  price: 0,
  releasedAt: '2020-04-01',
};

export const createBookParamsState = atom({
  key: 'createBookParams',
  default: initialCreateBookParams,
});
