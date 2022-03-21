import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';

import thumbFlutter from '../public/images/work/flutter.png';
import thumbAndroid from '../public/images/work/android.png';

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Navigate & Open Dialog without Context in Flutter (2.5k+ Views)"
            thumbnail={thumbFlutter}
            href="https://medium.com/@theKanha/navigate-open-dialog-without-context-in-flutter-5e1d2620317d"
          />
          <GridItem
            title="What's inside an Android Application? ( < 100 Views)"
            thumbnail={thumbAndroid}
            href="https://medium.com/@theHandyHunk/whats-inside-an-android-application-3165bb51f688"
          />
        </SimpleGrid>
      </Section>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Android App Saying Hello! Your First Android Application || Learn How to build Android Applications. (< 100 Views)"
            thumbnail={thumbAndroid}
            href="https://medium.com/@theHandyHunk/android-app-saying-hello-your-first-android-application-learn-how-to-build-android-applications-747d609f425a"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
export { getServerSideProps } from '../components/chakra';
