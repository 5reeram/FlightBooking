import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const deals = [
  'France', 'Italy', 'Germany', 'Poland', 'India',
  'Sweden', 'Denmark', 'Latvia', 'Croatia', 'Georgia',
  'Hungary', 'Finland', 'Czechia', 'Japan', 'Luxembourg'
];

const Deals = () => {
  return (
    <Box mt={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Great deals on plane tickets</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 5 }} spacing={4}>
        {deals.map((deal, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" bg="white" textAlign="center">
            <Text fontSize="lg" fontWeight="bold">{deal}</Text>
            <Text color="teal.500" fontWeight="bold">$110</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Deals;
