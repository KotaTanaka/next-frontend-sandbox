import { NextPage } from 'next';
import { useRouter } from 'next/router';

// from app
import Layout from '@/layout/Layout';
import PageHeading from '@/components/partials/PageHeading';

const BooksDetailPage: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const bookId = typeof id === 'string' ? id : id[0];

  return (
    <Layout>
      <PageHeading title={bookId} />
    </Layout>
  );
}

export default BooksDetailPage;
