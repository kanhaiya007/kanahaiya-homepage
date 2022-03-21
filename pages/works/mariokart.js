import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Mariokart = () => (
  <Layout title="Mariokart">
    <Container>
      <Title>
        Mario Kart <Badge>2020</Badge>
      </Title>
      <P>
        A friendly Mario Kart Game Competetion app where user can store the
        score and generate a detail analysis of there performances.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          N/A
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, NodeJS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/work/mariokart.png" alt="Mario Kart" />
    </Container>
  </Layout>
);

export default Mariokart;
export { getServerSideProps } from '../../components/chakra';
