import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import PageHeading from '@/components/partials/PageHeading';

/** 書籍詳細ページ */
const BooksDetailPage: NextPage = () => {
  const router = useRouter();
  
  /** 書籍ID */
  const bookId = useMemo<string>(() => {
    const { id } = router.query;

    return Array.isArray(id) ? id[0] : id;
  }, [router.query]);

  return (
    <div>
      <PageHeading title={bookId} />
    </div>
  );
};

export default BooksDetailPage;
