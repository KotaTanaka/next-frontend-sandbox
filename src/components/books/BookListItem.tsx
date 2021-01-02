import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { PAGE_URL } from '@/constants';
import { IBookListElement } from '@/interfaces/response/book';

interface Props {
  book: IBookListElement;
}

/** 書籍リスト要素 */
const BookListItem: React.FC<Props> = (props) => {
  const { book } = props;

  return (
    <div css={style.container}>
      <Link
        key={book.id}
        href={PAGE_URL.BOOK}
        as={PAGE_URL.BOOK.replace('[id]', book.id)}
      >
        <a css={style.link}>{book.name}</a>
      </Link>
    </div>
  );
};

export default BookListItem;

const style = {
  container: css``,
  link: css`
    cursor: pointer;
    margin: 16px;
  `,
};
