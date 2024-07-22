// src/components/PopularDestinations.js
import { Box, Image, Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import canada from './photos/canada.jpeg';
import delhi from './photos/delhi.jpeg';
import sydney from './photos/sydney.jpeg';
import switzerland from './photos/switzerland.jpeg';

const destinations = [
  { city: 'Delhi', country: 'India', price: '$110', image: delhi },
  { city: 'Alberta', country: 'Canada', price: '$110', image: canada },
  { city: 'Sydney', country: 'Australia', price: '$110', image: sydney },
  { city: 'Amsterdam', country: 'Netherlands', price: '$110', image: switzerland },
];

const PopularDestinations = () => {
  return (
    <Box p={8}>
      <Text fontSize="2xl" align="center" fontWeight="bold" mb={4}>Popular right now</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {destinations.map((destination, index) => (
          <GridItem key={index} bg="white" p={4} borderRadius="md" boxShadow="md">
            <Image src={destination.image} alt={destination.city} borderRadius="md" mb={2} />
            <VStack align="start">
              <Text fontSize="lg">{destination.city}</Text>
              <Text color="gray.500">{destination.country}</Text>
              <Text fontWeight="bold">{destination.price}</Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularDestinations;
