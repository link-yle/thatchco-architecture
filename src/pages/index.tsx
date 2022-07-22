import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/home/layout';
import { GettingStarted } from '../components/home/getting-started';
import { PinnedBoard } from '../components/home/pinned-board';
import { Subscriptions } from '../components/home/subscriptions';
import { APP_NAME } from 'src/constants';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          {`Home | ${APP_NAME}`}
        </title>
      </Head>
      <main>
        <GettingStarted />
        <PinnedBoard />
        <Subscriptions />
      </main>
    </>
  );
};

Home.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default Home;
