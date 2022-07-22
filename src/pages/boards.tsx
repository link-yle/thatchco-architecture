import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/board/layout';
import { APP_NAME } from 'src/constants';

const Boards: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          {`Your Library | ${APP_NAME}`}
        </title>
      </Head>
      <main>
      </main>
    </>
  );
};

Boards.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default Boards;
