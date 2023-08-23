import { Box, Grid, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdRadioButtonChecked } from "react-icons/md"
const Footer = () => {
  return (
    <Box bg={"gray.200"} py={["44", "32"]}>
      <Box w={["100%", "100%", "90%", "73%"]} mx={"auto"}>
        <Box bg={"white"} marginTop={["-72", "-48"]} p={["6", "6", "4"]} boxShadow={"lg"} display={"flex"} flexDir={["column", "column", "row"]} alignItems={"center"} justifyContent={"space-evenly"}>
          <Image src='./Asset/logo1.webp' alt="logo"></Image>
          <Image src='./Asset/logo2.webp' alt="logo"></Image>
          <Image src='./Asset/logo3.webp' alt="logo"></Image>
          <Image src='./Asset/logo4.webp' alt="logo"></Image>
        </Box>
        {/* 
     <Grid templateColumns='repeat(4, 1fr)' gap={"8"} marginTop={"12"}> */}
        <Box display={"flex"} flexDir={["column", "column","column", "row"]} alignItems={["center","center", "flex-start"]} marginTop={"12"} justifyContent={["center", "center", "space-evenly"]}>
         <Stack  w={"full"} display={"flex"} flexDir={["column","column", "row","row"]} justifyContent={["center", "space-evenly", "space-around"]}  alignItems={["center", "flex-start"]}>
          <VStack textAlign={"start"} display={"flex"} flexDir={"column"} justifyContent={["center","center","flex-start"]} alignItems={["center", "flex-start"]}>
            <Text fontSize={"2xl"} fontWeight={"semibold"}>CONTACT US</Text>
            <Box w={"9"} h={"0.5"} bg={"red.700"}></Box>
            <HStack><Text>Address:</Text> <Text>Plot 31, Ifelodun Street, Gasline, Sango</Text></HStack>
            <HStack><Text>Phone-Number:</Text> <Text>08105019251</Text></HStack>
            <HStack><Text>Email:</Text> <Text>adewunmienitan1755@gmail.com</Text></HStack>
          </VStack>
          <VStack textAlign={"start"} display={"flex"} flexDir={"column"} justifyContent={"flex-start"} my={["8", "0"]} alignItems={["center", "flex-start"]}>
            <Text fontSize={"2xl"} fontWeight={"semibold"}>ACCOUNTS</Text>
            <Box w={"9"} h={"0.5"} bg={"red.700"}></Box>
            <HStack><Text><MdRadioButtonChecked /></Text> <Text>My Account</Text></HStack>
            <HStack><Text><MdRadioButtonChecked /></Text> <Text>My Wishlist</Text></HStack>
            <HStack><Text><MdRadioButtonChecked /></Text> <Text>My Cart</Text></HStack>
            <HStack><Text><MdRadioButtonChecked /></Text> <Text>Sign In</Text></HStack>
            <HStack><Text><MdRadioButtonChecked /></Text> <Text>Check out</Text></HStack>
          </VStack>
          </Stack>
          <Stack  w={"full"} display={"flex"} flexDir={["column","column", "row","row"]} justifyContent={["center", "space-evenly", "space-around"]} alignItems={["center", "flex-start"]}>
          <VStack textAlign={"start"} display={"flex"} flexDir={"column"} justifyContent={"flex-start"} my={["8", "0"]} alignItems={["center", "flex-start"]}>
            <Text fontSize={"2xl"} fontWeight={"semibold"}>SHIPPING</Text>
            <Box w={"9"} h={"0.5"} bg={"red.700"}></Box>
            <HStack><Text><MdRadioButtonChecked /></Text> <Text>New Products</Text></HStack>
            <HStack><Text><MdRadioButtonChecked /></Text> <Text>Top Sellers</Text></HStack>
            <HStack><Text><MdRadioButtonChecked /></Text> <Text>Manufacturers</Text></HStack>
            <HStack><Text><MdRadioButtonChecked /></Text> <Text>Suppliers</Text></HStack>
            <HStack><Text><MdRadioButtonChecked /></Text> <Text>Specials</Text></HStack>
          </VStack>
          <VStack textAlign={"start"} display={"flex"} flexDir={"column"} justifyContent={"flex-star"} alignItems={["center", "flex-start"]}>
            <Text fontSize={"2xl"} fontWeight={"semibold"}>EMAIL NEWSLETTERS</Text>
            <Box w={"9"} h={"0.5"} bg={"red.700"}></Box>
            <Input bg={"white"} placeholder='Email Address' />
            <Input bg={"white"} placeholder='Subscribe' />
          </VStack>
          </Stack>
        </Box>
        {/* </Grid> */}
      </Box>
    </Box>
  )
}

export default Footer
