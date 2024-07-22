// src/components/FlightOptions.js
import { Box, Button, Flex, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';

const flightData = [
  {
    outbound: {
      time: '21:50',
      from: 'Gdansk Lech Walesa GDN',
      duration: '1h10m',
      to: 'Poznan - Lawica POZ',
      type: 'Direct',
      arrival: '23:00',
    },
    inbound: {
      time: '21:50',
      from: 'Poznan - Lawica POZ',
      duration: '1h10m',
      to: 'Gdansk Lech Walesa GDN',
      type: 'Direct',
      arrival: '23:00',
    },
    price: '$110',
    included: 'Included: 1 bag',
  },
  {
    outbound: {
      time: '08:30',
      from: 'Warsaw Chopin WAW',
      duration: '1h00m',
      to: 'Krakow KRK',
      type: 'Direct',
      arrival: '09:30',
    },
    inbound: {
      time: '17:00',
      from: 'Krakow KRK',
      duration: '1h00m',
      to: 'Warsaw Chopin WAW',
      type: 'Direct',
      arrival: '18:00',
    },
    price: '$120',
    included: 'Included: 1 bag',
  },
  {
    outbound: {
      time: '15:20',
      from: 'Berlin BER',
      duration: '2h00m',
      to: 'Munich MUC',
      type: 'Direct',
      arrival: '17:20',
    },
    inbound: {
      time: '20:30',
      from: 'Munich MUC',
      duration: '2h00m',
      to: 'Berlin BER',
      type: 'Direct',
      arrival: '22:30',
    },
    price: '$140',
    included: 'Included: 1 bag',
  },
  {
    outbound: {
      time: '07:45',
      from: 'Paris CDG',
      duration: '1h30m',
      to: 'Amsterdam AMS',
      type: 'Direct',
      arrival: '09:15',
    },
    inbound: {
      time: '19:00',
      from: 'Amsterdam AMS',
      duration: '1h30m',
      to: 'Paris CDG',
      type: 'Direct',
      arrival: '20:30',
    },
    price: '$130',
    included: 'Included: 1 bag',
  },
  {
    outbound: {
      time: '12:00',
      from: 'Madrid MAD',
      duration: '2h10m',
      to: 'Barcelona BCN',
      type: 'Direct',
      arrival: '14:10',
    },
    inbound: {
      time: '22:00',
      from: 'Barcelona BCN',
      duration: '2h10m',
      to: 'Madrid MAD',
      type: 'Direct',
      arrival: '00:10',
    },
    price: '$150',
    included: 'Included: 1 bag',
  },
];

const FlightOptions = () => {
  return (
    <Box mt={8}>
      <SimpleGrid columns={1} spacing={4}>
        {flightData.map((flight, index) => (
          <Flex key={index} borderWidth="1px" borderRadius="md" p={4} bg="white">
            <Box flex="1">
              <HStack spacing={4}>
                <VStack align="start">
                  <Text fontWeight="bold">Wed, Oct 18 • Outbound</Text>
                  <Text fontSize="lg">{flight.outbound.time}</Text>
                  <Text>{flight.outbound.from}</Text>
                  <Text>{flight.outbound.duration}</Text>
                  <Text color="teal.500">{flight.outbound.type}</Text>
                  <Text>{flight.outbound.arrival}</Text>
                </VStack>
                <VStack align="start">
                  <Text fontWeight="bold">Wed, Oct 20 • Inbound</Text>
                  <Text fontSize="lg">{flight.inbound.time}</Text>
                  <Text>{flight.inbound.from}</Text>
                  <Text>{flight.inbound.duration}</Text>
                  <Text color="teal.500">{flight.inbound.type}</Text>
                  <Text>{flight.inbound.arrival}</Text>
                </VStack>
              </HStack>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold">{flight.price}</Text>
              <Text>{flight.included}</Text>
              <Button colorScheme="teal" mt={2}>Book Now</Button>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FlightOptions;
