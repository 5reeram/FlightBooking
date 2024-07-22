// src/App.js
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PopularDestinations from './components/PopularDestinations';
import Deals from './components/Deals';
import Newsletter from './components/Newsletter';
import FlightOptions from './components/FlightOptions';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Box bg="blue.50" minH="100vh" p={4}>
        <Container maxW="container.xl">
          <Header />
          <SearchBar />
          <PopularDestinations />
          <Deals />
          <Newsletter />
          <FlightOptions />
          <Footer/>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
