import { NextPage } from 'next';
import Link from 'next/link';

import PageHeading from '@/components/partials/PageHeading';
import { PAGE_URL } from '@/constants';

/** ホーム */
const HomePage: NextPage = () => {
  return (
    <div>
      <PageHeading title="Home" />
      <div>
        <Link href={PAGE_URL.BOOKS}>
          <a>書籍一覧</a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
