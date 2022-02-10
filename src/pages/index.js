import { Heading, Flex, Container, Text, Box, SimpleGrid, Divider } from '@chakra-ui/react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Container maxW='container.xl'>
        <Navbar />
        <Flex justifyContent='center'>
          <Box py={8}>
            <Heading as='h4'>India's First Community e-Marketplace</Heading>
          </Box>
        </Flex>
        <Box align='center'>
          <Text mb={4} fontSize='2xl'>Recent Listings</Text>
          <Divider mb={4} />
        </Box>
        <Container maxW='container.lg'>
          <SimpleGrid columns={3} spacing={4}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </SimpleGrid>
        </Container>
        <Footer />
      </Container>
    </>
  )
}
