import { NextPage } from 'next';
import { useEffect } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { PAGE_URL } from '@/constants';

interface Props {
  userAgent: string;
}

/** ホーム */
const HomePage: NextPage<Props> = (props) => {
  const { userAgent } = props;

  useEffect(() => console.log('User Agent:', userAgent), []);

  return (
    <div css={style.container}>
      <h1 css={style.title}>本棚</h1>
      <div css={style.contents}>
        <Link href={PAGE_URL.BOOKS}>
          <a css={style.link}>書籍一覧</a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

const style = {
  container: css`
    position: absolute;
    top: 40vh;
    width: 100%;
  `,
  title: css``,
  contents: css`
    margin-top: 64px;
  `,
  link: css`
    cursor: pointer;
    margin: 16px;
  `,
};
