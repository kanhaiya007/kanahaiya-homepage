import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Vybo = () => (
  <Layout title="Vybo by Nextempo">
    <Container>
      <Title>
        Vybo <Badge>2021 - Present</Badge>
      </Title>
      <P>
        A secondary concert ticket market place, built on top of blockchain with
        NFT&apos;s. The only marketplace which provides the ticket reselling by
        converting the tickets into the NFT&apos;s.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.vybo.live/">
            https://www.vybo.live/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, NodeJS, Blockchain, Web3</span>
        </ListItem>
      </List>

      <WorkImage src="/images/work/vybo.png" alt="Vybo" />
    </Container>
  </Layout>
);

export default Vybo;
export { getServerSideProps } from '../../components/chakra';
