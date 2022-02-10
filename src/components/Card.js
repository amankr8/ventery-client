import * as React from "react";
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";

function Card() {
    return (
        <Box p={5} borderWidth="1px" borderRadius='md'>
            <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
            <Flex align="baseline" mt={4}>
                <Badge colorScheme="pink">Books</Badge>
            </Flex>
            <Text mt={2} fontWeight="semibold" lineHeight="short" isTruncated>
                Modern, Chic Penthouse with Mountain, City & Sea Views
            </Text>
            <Text mt={2}>₹500</Text>
        </Box>
    )
}

export default Card