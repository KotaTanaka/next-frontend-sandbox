import { NextPage } from 'next';
import { useRouter } from 'next/router';

// from app
import Layout from '@/layout/Layout';
import PageHeading from '@/components/partials/PageHeading';

/** 書籍詳細ページ */
const BooksDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const bookId = Array.isArray(id) ? id[0] : id;

  return (
    <Layout>
      <PageHeading title={bookId} />
    </Layout>
  );
};

export default BooksDetailPage;
