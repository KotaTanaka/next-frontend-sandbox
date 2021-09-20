import { Table, Tbody, Td, Th, Tr } from '@chakra-ui/react';

import { IBook } from '@/interfaces/response/book';
import { toJPDate, toPrice } from '@/utils/StringUtils';

interface Props {
  book: IBook;
}

/** 書籍詳細テーブル */
const BookDetailTable: React.FC<Props> = (props) => {
  const { book } = props;
  const { name, outline, author, publisher, category, price, releasedAt } =
    book;

  return (
    <Table variant="simple">
      <Tbody>
        <Tr>
          <Th>タイトル</Th>
          <Td>{name}</Td>
        </Tr>
        <Tr>
          <Th>あらすじ</Th>
          <Td>{outline}</Td>
        </Tr>
        <Tr>
          <Th>著者</Th>
          <Td>{author}</Td>
        </Tr>
        <Tr>
          <Th>出版社</Th>
          <Td>{publisher}</Td>
        </Tr>
        <Tr>
          <Th>カテゴリ</Th>
          <Td>{category}</Td>
        </Tr>
        <Tr>
          <Th>価格</Th>
          <Td>{toPrice(price)}</Td>
        </Tr>
        <Tr>
          <Th>発売日</Th>
          <Td>{toJPDate(releasedAt)}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default BookDetailTable;
