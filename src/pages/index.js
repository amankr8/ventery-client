import { Heading, Flex, Container, Text } from '@chakra-ui/react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <Container maxW='container.lg'>
      <Navbar />
      <Flex justifyContent='center'>
      <Heading as='h1' size='4xl' isTruncated>Hello World!</Heading>
      </Flex>
      <Text fontSize='4xl'>Recent Listings</Text>
      <Flex>
        <Card />
      </Flex>
    </Container>
  )
}
