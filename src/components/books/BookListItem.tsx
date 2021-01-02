import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { PAGE_URL } from '@/constants';
import { IBookListElement } from '@/interfaces/response/book';

interface Props {
  book: IBookListElement;
}

/** 書籍リスト要素 */
const BookListItem: React.FC<Props> = (props) => {
  const { book } = props;

  return (
    <Container>
      <Link
        key={book.id}
        href={PAGE_URL.BOOK}
        as={PAGE_URL.BOOK.replace('[id]', book.id)}
      >
        <LinkText>{book.name}</LinkText>
      </Link>
    </Container>
  );
};

export default BookListItem;

// style
const Container = styled.div``;
const LinkText = styled.a`
  cursor: pointer;
  margin: 16px;
`;
