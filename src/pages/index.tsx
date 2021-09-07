import { NextPage } from 'next';
import Link from 'next/link';
import { PAGE_URL } from '@/constants';

/** ホーム */
const HomePage: NextPage = () => {
  return (
    <div>
      <div className="font-bold mt-32 text-2xl">本棚</div>
      <div className="mt-16">
        <Link href={PAGE_URL.BOOKS}>
          <a>書籍一覧</a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;