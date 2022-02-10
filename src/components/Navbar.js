import { Flex, Stack,  Heading, Box, Button, Divider } from '@chakra-ui/react'
import NextLink from 'next/link'

const Navbar = () => (
  <>
    <Box p={2}>
      <Stack direction='row' justifyContent='space-between' align='center'>
        <Button colorScheme='teal' variant='ghost'>
          <Heading as='h4' size='md'>
            VENTERY
          </Heading>
        </Button>
        <Flex>
          <Button colorScheme='teal' variant='ghost'>
            Login
          </Button>
          <Button colorScheme='teal' variant='ghost'>
            Signup
          </Button>
        </Flex>
      </Stack>
    </Box>
    <Divider />
  </>
);

export default Navbar;