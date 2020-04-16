import { NextComponentType } from 'next';
import styled from '@emotion/styled';

// from app
import BookListItem from '@/components/books/BookListItem';

interface Props {
  books: any;
}

/** 書籍リスト */
const BookList: NextComponentType<{}, {}, Props> = (props: Props) => {
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
