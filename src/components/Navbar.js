import { Flex, Container, HStack, Link, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

const Navbar = () => (
  <HStack justifyContent='space-between'>
    <NextLink href='/' passHref>
      <Link>VENTERY</Link>
    </NextLink>
    <Flex>
      <NextLink href='/login' passHref>
        <Button colorScheme='teal' variant='ghost'>
          Login
        </Button>
      </NextLink>
      <NextLink href='/login' passHref>
        <Button colorScheme='teal' variant='solid'>
          Signup
        </Button>
      </NextLink>
    </Flex>
  </HStack>
);

export default Navbar;