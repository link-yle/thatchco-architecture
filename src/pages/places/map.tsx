import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../../components/home/layout';
import { GettingStarted } from '../../components/home/getting-started';
import { PinnedBoard } from '../../components/home/pinned-board';
import { APP_NAME } from 'src/constants';

const Map: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          {`Map | ${APP_NAME}`}
        </title>
      </Head>
      <main>
        <GettingStarted />
        <PinnedBoard />
      </main>
    </>
  );
};

Map.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default Map;
