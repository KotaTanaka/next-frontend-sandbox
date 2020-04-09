import React from 'react';
import Link from 'next/link';

// from app
import { PAGE_URL } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      <Link href={PAGE_URL.ABOUT}>
        <a>About Page</a>
      </Link>
    </div>
  );
}

export default Home;
