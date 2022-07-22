import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout } from '../components/home/layout';
import { GettingStarted } from '../components/home/getting-started';
import { PinnedBoard } from '../components/home/pinned-board';
import { Subscriptions } from '../components/home/subscriptions';
import { APP_NAME } from 'src/constants';

const Home: NextPage = () => {
  const router = useRouter;

  return (
    <>
      <Head>
        <title>
          {`Home | ${APP_NAME}`}
        </title>
        <meta property="og:url" content="/" key="ogurl" />
        <meta property="og:image" content="/static/logo.jpg" key="ogimage" />
        <meta property="og:site_name" content={APP_NAME} key="ogsitename" />
        <meta property="og:title" content="Home" key="ogtitle" />
        <meta property="og:description" content="Thatch is where travel creators go from passion to paid. Set up your travel shop and sell your travel knowledge today." key="ogdesc" />
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
