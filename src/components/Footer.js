// src/components/Footer.js
import { Box, Container, SimpleGrid, Stack, Text, Link, chakra, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('blue.900', 'gray.900')}
      color={useColorModeValue('white', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Text fontWeight={'bold'}>SkyChex</Text>
            <Text>Easy to Fly</Text>
            <Text>Whether you're planning a vacation, a business trip, or any other travel adventure, SkyChex offers a friendly and comprehensive solution to meet your flight booking needs.</Text>
            <Stack direction={'row'} spacing={6}>
              <Link href={'#'}><FaFacebook /></Link>
              <Link href={'#'}><FaTwitter /></Link>
              <Link href={'#'}><FaLinkedin /></Link>
              <Link href={'#'}><FaInstagram /></Link>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'bold'}>Book with us</Text>
            <Link href={'#'}>Airlines we ticket</Link>
            <Link href={'#'}>Buy now, pay later</Link>
            <Link href={'#'}>Pay the way you want</Link>
            <Link href={'#'}>You're protected</Link>
            <Link href={'#'}>Our customer service</Link>
            <Link href={'#'}>Travel agents</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'bold'}>My booking</Text>
            <Link href={'#'}>Manage my booking</Link>
            <Link href={'#'}>Help centre</Link>
            <Link href={'#'}>FAQs</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Travel advice</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'bold'}>Company</Text>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Reviews</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Media centre</Link>
            <Link href={'#'}>Careers</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Container as={Stack} maxW={'6xl'} spacing={4} justify={'center'} align={'center'}>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Privacy</Link>
            <Link href={'#'}>Terms</Link>
            <Link href={'#'}>Sitemap</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
