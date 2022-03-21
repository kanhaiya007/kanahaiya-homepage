import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Scandocs = () => (
  <Layout title="Scandocs">
    <Container>
      <Title>
        Scandocs <Badge>2020</Badge>
      </Title>
      <P>
        Scandocs is a lightweight document scanner that will group photos and
        convert them into high quality PDF&apos;s. It&apos;s a free forever
        application without watermark. It was built as a college project, later
        was released for public with multiple improvements and image enhancing
        feature.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.techkets_scan_docs">
            Play Store <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, Java, OpenCV C++ Library</span>
        </ListItem>
      </List>

      <WorkImage src="/images/work/scd1.webp" alt="Scandocs" />
      <WorkImage src="/images/work/scd2.webp" alt="Scandocs" />
      <WorkImage src="/images/work/scd3.webp" alt="Scandocs" />
      <WorkImage src="/images/work/scd4.webp" alt="Scandocs" />
      <WorkImage src="/images/work/scd5.webp" alt="Scandocs" />
    </Container>
  </Layout>
);

export default Scandocs;
export { getServerSideProps } from '../../components/chakra';
