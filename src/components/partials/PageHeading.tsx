import React from 'react';
import { css } from '@emotion/react';

interface Props {
  title: string;
}

/** ページ見出し */
const PageHeading: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <div css={style.container}>
      <h1 css={style.heading}>{title}</h1>
    </div>
  );
};

export default PageHeading;

const style = {
  container: css`
    text-align: center;
    margin: 64px 0;
  `,
  heading: css`
    font-size: 24px;
    color: #0000df;
  `,
};
