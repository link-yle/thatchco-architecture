import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/explore/layout';
import { getMaps } from '../slices/map';
import { useDispatch, useSelector } from '../store';
import { MapButton } from '../components/map-button';
import { APP_NAME } from 'src/constants';

const Explore: NextPage = () => {
  const dispatch = useDispatch();
  const { maps } = useSelector((state) => state.map);

  console.log('maps=', maps)

  useEffect(
    () => {
      if (!maps) {
        // @ts-ignore
        dispatch(getMaps());
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <Head>
        <title>
          {`Explore | ${APP_NAME}`}
        </title>
      </Head>
      <main>
        <Container maxWidth="xs">
          <Grid container spacing={1}>
            {maps?.map((map, i) => (
              <Grid key={i} item xs={6}>
                <MapButton map={map} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

Explore.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default Explore;
