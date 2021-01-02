import { NextPage } from 'next';
import { css } from '@emotion/react';
import PageHeading from '@/components/partials/PageHeading';

/** アバウトページ */
const AboutPage: NextPage = () => {
  return (
    <div css={style.container}>
      <PageHeading title="About Page" />
    </div>
  );
};

export default AboutPage;

const style = {
  container: css``,
};
