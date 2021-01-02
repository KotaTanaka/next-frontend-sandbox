import React from 'react';
import styled from '@emotion/styled';
import BookListItem from '@/components/books/BookListItem';
import { IBookListElement } from '@/interfaces/response/book';

interface Props {
  books: IBookListElement[];
}

/** 書籍リスト */
const BookList: React.FC<Props> = (props) => {
  const { books } = props;

  return (
    <Container>
      {books.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </Container>
  );
};

export default BookList;

// style
const Container = styled.div`
  margin-top: 64px;
`;
