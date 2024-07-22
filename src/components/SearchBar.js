// src/components/SearchBar.js
import { Box, Button, HStack, Input, Select } from '@chakra-ui/react';
import { FaPlane } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <Box p={4} bg="gray.100" borderRadius="md" textAlign="center" mt="80px" boxShadow="md">
      <HStack spacing={4}>
        <Input placeholder="From" size="lg" />
        <Input placeholder="To" size="lg" />
        <Input placeholder="Depart" size="lg" type="date" icon={<AiOutlineCalendar />} />
        <Select size="lg">
          <option>1 Passenger, Economy</option>
          <option>2 Passengers, Economy</option>
          <option>1 Passenger, Business</option>
        </Select>
        <Button colorScheme="teal" size="lg" leftIcon={<FaPlane />}>Search</Button>
      </HStack>
    </Box>
  );
};

export default SearchBar;
