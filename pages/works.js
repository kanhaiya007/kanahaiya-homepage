import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbVybo from '../public/images/work/vybo.png';
import thumbRange from '../public/images/work/range.png';
import thumbMario from '../public/images/work/mariokart.png';
import thumbScandocs from '../public/images/work/scandocs.png';

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        @ Springworks
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="vybo" title="Vybo" thumbnail={thumbVybo}>
            Vybo the only secondary concert ticket market using the power of
            blockchain to bring fans closer to artists.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="range" title="Range" thumbnail={thumbRange}>
            Range is the place for remote & hybrid teams to check in with each
            other, both async and real-time. Feel like a team, wherever you are.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="mariokart"
            title="Mario Kart"
            thumbnail={thumbMario}
          ></WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Personal Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="scandocs"
            thumbnail={thumbScandocs}
            title="Scandocs"
          >
            A lightweight android document scanner without watermark, built in
            Flutter.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from '../components/chakra';
