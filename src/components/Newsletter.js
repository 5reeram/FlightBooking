import { Box, Input, Button, Text } from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi';

const Newsletter = () => {
  return (
    <Box p={4} bg="gray.100" borderRadius="md" textAlign="center" mt={8}>
      <Text fontSize="lg" mb={2}>Want to receive exclusive discounts and updates straight to your inbox?</Text>
      <Input placeholder="Your Email" size="lg" mb={2} />
      <Button colorScheme="teal" size="lg" leftIcon={<BiMailSend />}>
        Sign me up
      </Button>
    </Box>
  );
};

export default Newsletter;