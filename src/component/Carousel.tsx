import { Link } from '@chakra-ui/next-js';
import { Box, keyframes, Button, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  100% { transform: scale(1.3) rotate(0); border-radius: 20%; }
//   50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
//   75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
//   100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 3s ease-in-out infinite`;

const Carousel = () => {
  return (
    <HStack w={["95%"]} m={["auto"]} px={["8", "8", "0"]} bg={""} display={"flex"} pb={["8"]} flexDirection={["column", "column", "row"]} alignItems={["flex-start","center"]} justifyContent={["flex-start","center"]} paddingTop={["2", "0", "0", "12"]} >
      <Box as={motion.div} animation={animation} w={"50%"} display={["hidden", "flex", "flex"]} justifyContent={"center"} >
        <Image src='./Asset/heroChair.png' alt={"antique"}></Image>
      </Box>


      <VStack w={["full", "full", "40%"]} display={"flex"} pt={["10"]} flexDir={["column"]} alignItems={["flex-start", "center", "flex-start"]} textAlign={"start"} bg={""} >
        <Text paddingY={["0","2","4"]} color={"#808080"} fontSize={["14pt", "16pt", "24pt"]}>WELCOME TO OUR</Text>
        <Heading fontWeight={"900"} fontSize={["18pt", "20pt", "40pt"]} lineHeight={["2","0","10"]} color={"#808080"}>Elegant</Heading>
        <Heading fontWeight={"900"} fontSize={["18pt", "20pt", "40pt"]} lineHeight={""} marginBottom={["","4"]} color={"#808080"}>Furniture</Heading>
        <Text color={"#808080"} fontSize={["14pt", "16pt", "24pt"]} lineHeight={["0","0","10"]}>Gallery 2021</Text>
        <Text w={"80%"} color={"#808080"} marginY={["0","2","2"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur c maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero quo porro?</Text>
        <Button color={"#808080"} bg='' marginTop={["1","4"]} border={"1px"} borderColor={"gray.400"}>
         <Link href={"#Shop"}>SHOP NOW</Link> 
        </Button>
      </VStack>

    </HStack>

  )
}

export default Carousel
