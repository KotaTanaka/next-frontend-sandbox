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
    <div>
      <Link
        key={book.id}
        href={PAGE_URL.BOOK}
        as={PAGE_URL.BOOK.replace('[id]', book.id)}
      >
        <a className="m-4 cursor-pointer">{book.name}</a>
      </Link>
    </div>
  );
};

export default BookListItem;
