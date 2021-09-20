import BookListItem from '@/components/books/BookListItem';
import { IBook } from '@/interfaces/response/book';

interface Props {
  books: IBook[];
}

/** 書籍リスト */
const BookList: React.FC<Props> = (props) => {
  const { books } = props;

  return (
    <div className="mx-auto w-4/5">
      {books.map((book) => (
        <div key={book.id} className="mt-4 first:mt-0">
          <BookListItem book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
