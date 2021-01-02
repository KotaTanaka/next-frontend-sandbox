import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import PageHeading from '@/components/partials/PageHeading';

/** 書籍詳細ページ */
const BooksDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const bookId = Array.isArray(id) ? id[0] : id;

  return (
    <div css={style.container}>
      <PageHeading title={bookId} />
    </div>
  );
};

export default BooksDetailPage;

const style = {
  container: css``,
};
