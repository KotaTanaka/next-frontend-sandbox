import Link from 'next/link';

import { PAGE_URL } from '@/constants';
import { IBook } from '@/interfaces/response/book';

interface Props {
  book: IBook;
}

/** 書籍リスト要素 */
const BookListItem: React.FC<Props> = (props) => {
  const { book } = props;

  return (
    <Link
      key={book.id}
      href={PAGE_URL.BOOK}
      as={PAGE_URL.BOOK.replace('[id]', book.id)}
    >
      <a className="flex justify-center items-center h-16 hover:bg-green-50 rounded border transform hover:scale-105">
        {book.name}
      </a>
    </Link>
  );
};

export default BookListItem;
