import { Flex, Stack, Link, Box } from '@chakra-ui/react'
import NextLink from 'next/link'

const Navbar = () => (
  <Box p={4} borderBottom='1px'>
    <Stack direction='row' justifyContent='space-between'>
      <NextLink href='/' passHref>
        <Link>VENTERY</Link>
      </NextLink>
      <Flex>
        <NextLink href='/login' passHref>
          <Link px={2}>Login</Link>
        </NextLink>
        <NextLink href='/login' passHref>
          <Link px={2}>Signup</Link>
        </NextLink>
      </Flex>
    </Stack>
  </Box>
);

export default Navbar;