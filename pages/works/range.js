import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Range = () => (
  <Layout title="Range by range.co">
    <Container>
      <Title>
        Vybo <Badge>2021</Badge>
      </Title>
      <P>
        Range is the place for remote & hybrid teams to check in with each
        other, both async and real-time. Feel like a team, wherever you are.
        <br />
        Worked at renovating the website UI and made it Sanity Driven.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.range.co/">
            https://www.range.co/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Gatsby JS, Sanity JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/work/range2.png" alt="Range" />
      <WorkImage src="/images/work/range3.png" alt="Range" />
      <WorkImage src="/images/work/range4.png" alt="Range" />
    </Container>
  </Layout>
);

export default Range;
export { getServerSideProps } from '../../components/chakra';
