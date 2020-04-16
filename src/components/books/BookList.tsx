import { NextComponentType } from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';

// from app
import { PAGE_URL } from '@/constants';

interface Props {
  books: any;
}

/** 書籍リスト */
const BookList: NextComponentType<{}, {}, Props> = (props: Props) => {
  const { books } = props;

  return (
    <Container>
      <ul>
        {books.map(({ id, name }) => (
          <li>
            <Link
              key={id}
              href={PAGE_URL.BOOK}
              as={PAGE_URL.BOOK.replace('[id]', id)}
            >
              <LinkText>{name}</LinkText>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default BookList;

// style
const Container = styled.div`
  margin-top: 64px;
`;
const LinkText = styled.a`
  cursor: pointer;
  margin: 16px;
`;
