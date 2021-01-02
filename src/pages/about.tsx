import { NextPage } from 'next';
import Layout from '@/layout/Layout';
import PageHeading from '@/components/partials/PageHeading';

/** アバウトページ */
const AboutPage: NextPage = () => {
  return (
    <Layout>
      <PageHeading title="About Page" />
    </Layout>
  );
};

export default AboutPage;
