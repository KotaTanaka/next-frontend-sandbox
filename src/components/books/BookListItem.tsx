import React from 'react';
import Link from 'next/link';
import { PAGE_URL } from '@/constants';
import { IBookListElement } from '@/interfaces/response/book';

interface Props {
  book: IBookListElement;
}

/** 書籍リスト要素 */
const BookListItem: React.FC<Props> = (props) => {
  const { book } = props;

  return (
    <div>
      <Link
        key={book.id}
        href={PAGE_URL.BOOK}
        as={PAGE_URL.BOOK.replace('[id]', book.id)}
      >
        <a className="cursor-pointer m-4">{book.name}</a>
      </Link>
    </div>
  );
};

export default BookListItem;
