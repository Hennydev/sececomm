import { Box, Button, Center, HStack, Heading, IconButton, Image, Stack, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { Container, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Carousel from './Carousel';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"


// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  100% { transform: scale(1.3) rotate(0); border-radius: 20%; }`;

const animation = `${animationKeyframes} 3s ease-in-out infinite`;

const Hero = () => {

    return (
        <Box py={["0.5","0.5","8"]} bg={"#EDEADE"} h={{
        
        }}>



            <Carousel />

          

        </Box>
    )
}

export default Hero


