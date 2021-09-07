import React from 'react';
import BookListItem from '@/components/books/BookListItem';
import { IBookListElement } from '@/interfaces/response/book';

interface Props {
  books: IBookListElement[];
}

/** 書籍リスト */
const BookList: React.FC<Props> = (props) => {
  const { books } = props;

  return (
    <div className="mt-16">
      {books.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;

