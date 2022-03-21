import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../footer';
import NavBar from '../navbar';

// const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />
// });

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kanahaiya's homepage" />
        <meta name="author" content="Kanahaiya" />
        <meta name="author" content="theHandyHunk" />
        <title>@theHandyHunk</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelDog /> */}

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
