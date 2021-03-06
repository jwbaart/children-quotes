import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import NextLink from 'next/link';
import Copyright from '../src/Copyright';
import Layout from '../components/Layout';
import { useFetchUser } from '../utils/user';
import { ExchangeRates } from '../components/ExchangeRates';
import { Viewer } from '../components/Viewer';

const Index: React.FC = (): JSX.Element => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Viewer></Viewer>
          <ExchangeRates></ExchangeRates>
          <NextLink href="/about">To about</NextLink>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
};

export default Index;
