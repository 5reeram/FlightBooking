// src/components/Header.js
import { Box, Flex, Text, Button, HStack, Image, Center } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import FilghtLogo from './photos/FlightLogo.jpeg';

const Header = () => {
  return (
    <Box bg="blue.600" p={4} color="white" position="fixed" top="0" width="100%" zIndex="1000">
      <Flex justify="space-between" align="center">
        <HStack spacing={4}>
          <Image src={FilghtLogo} alt="Logo" boxSize="50px" />
          <Text fontSize="xl" fontWeight="bold" align="center">SkyChev</Text>
        </HStack>
        <HStack spacing={4}>
          <Button variant="outline">Sign In</Button>
          <Button variant="outline">Sign Up</Button>
          <Button leftIcon={<FaUser />} variant="solid">Log In</Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
