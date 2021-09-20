import { NextPage } from 'next';
import Link from 'next/link';

import PageHeading from '@/components/partials/PageHeading';
import { PAGE_URL } from '@/constants';

/** ホーム */
const HomePage: NextPage = () => {
  return (
    <div>
      <PageHeading title="ホーム" />
      <div className="flex justify-center mt-48">
        <Link href={PAGE_URL.BOOKS}>
          <a className="flex justify-center items-center w-48 h-48 text-xl hover:bg-gray-50 rounded border">
            書籍一覧
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
