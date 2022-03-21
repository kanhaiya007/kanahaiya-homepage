import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  Image as CImage,
  Link,
  List,
  ListItem,
  Tooltip,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  IoCode,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoMedium
} from 'react-icons/io5';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Paragraph from '../components/paragraph';
import Section from '../components/section';

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mt={3}
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Hey! I&apos;m a Frontend developer based in
        <Tooltip label="India">
          <CImage
            src="/images/flag.png"
            width="20px"
            height="20px"
            display="inline-block"
            ml={2}
          />
        </Tooltip>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kanahaiya (कन्हैया)
          </Heading>
          <p>
            Engineer ⚙️ / Developer 👨‍💻 / Pool Player 🎱 <br /> Foodie 🍛 / Biker
            🏍
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src={'/images/kanhaiya.jpg'}
              width={'100%'}
              height={'100%'}
              alt="Kanahaiya"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          I'm
        </Heading>
        <Paragraph>
          A Frontend Developer majorly focused on ReactJS and its frameworks
          like NextJs & Gatsby. I&apos;m currently employed at{' '}
          <NextLink href="https://www.springworks.in/" scroll={false}>
            <Link>Springworks </Link>
          </NextLink>
          as a Software Development Engineer, where my day-to-day work includes
          developing Frontend Applications in React. My technical domain
          includes Angular, Flutter, Saas Sanity CMS, and BaaS Firebase. In the
          early days, I have also worked with Android and have released some
          private Apps for Local E-commerce firms. I have also created a
          document scanner{' '}
          <NextLink
            href="https://play.google.com/store/apps/details?id=com.techkets_scan_docs"
            scroll={false}
            target="_blank"
          >
            <Link>Scandocs</Link>
          </NextLink>{' '}
          with Flutter and released it on Playstore for free, which got nearly
          1k+ downloads.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Checkout my work!
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Bahjoi (बहजोई), India.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed Schooling
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Took Engineering 💻
        </BioSection>
        <BioSection>
          <BioYear>Oct 2020 - Present</BioYear>
          Working as a Software Developer Engineer @ Springworks
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Graduated in B.Tech CSE from{' '}
          <NextLink
            href="https://www.gla.ac.in/"
            scroll={false}
            target="_blank"
          >
            <Link>GLA University</Link>
          </NextLink>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Taking a long bike ride, spicy food, exploring new things, and
          adventure.
        </Paragraph>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Technical Domain 🛠
        </Heading>
        <List>
          <ListItem>
            <Heading as={'h5'} size="sm">
              React💗 / Angular / NextJS / Gatsby / Sanity
            </Heading>
          </ListItem>
          <ListItem>
            <Heading as={'h5'} size="sm">
              Javascript💗 / Java🧡 / Dart
            </Heading>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me on!
        </Heading>
        <List>
          <Tooltip label="Github">
            <ListItem>
              <Link href="https://github.com/kanhaiya007" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @kanhaiya007
                </Button>
              </Link>
            </ListItem>
          </Tooltip>

          <Tooltip label="Leetcode">
            <ListItem>
              <Link href="https://leetcode.com/theHandyHunk/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoCode />}
                >
                  @leetcode (theHandyHunk)
                </Button>
              </Link>
            </ListItem>
          </Tooltip>

          <Tooltip label="Instagram">
            <ListItem>
              <Link
                href="https://www.instagram.com/varshney_kanhaiya_"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @varshney_kanhaiya_
                </Button>
              </Link>
            </ListItem>
          </Tooltip>

          <Tooltip label="Medium">
            <ListItem>
              <Link href="https://medium.com/@theHandyHunk" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoMedium />}
                >
                  @theHandyHunk
                </Button>
              </Link>
            </ListItem>
          </Tooltip>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from '../components/chakra';
