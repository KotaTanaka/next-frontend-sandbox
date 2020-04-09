import { NextPage } from 'next';

// from app
import Layout from '@/layout/Layout';
import PageHeading from '@/components/partials/PageHeading';

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <PageHeading title="About Page" />
    </Layout>
  );
};

export default AboutPage;
