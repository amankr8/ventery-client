import { Heading, Flex, Container, Text, Box } from '@chakra-ui/react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Container maxW='container.lg'>
        <Navbar />
        <Flex justifyContent='center'>
          <Box py={8}>
            <Heading as='h4'>India First Online Community Marketplace</Heading>
          </Box>
        </Flex>
        <Box borderTop='1px' align='center'>
          <Text py={4} fontSize='2xl'>Recent Listings</Text>
        </Box>
        <Container maxW='container.lg'>
          <Card />
        </Container>
      </Container>
    </>
  )
}
