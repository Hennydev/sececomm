import { Box, Button, Center, HStack, Heading, IconButton, Image, Stack, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { Container, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Carousel from './Carousel';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import Slider from "react-slick"

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
  100% { transform: scale(1.3) rotate(0); border-radius: 20%; }`

const animation = `${animationKeyframes} 3s ease-in-out infinite`;

const Hero = () => {

    const [slider, setSlider] = React.useState<Slider | null>(null)
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '40px' })
    const cards = [
        {
            title: 'Design Projects 1',
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
            title: 'Design Projects 2',
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
        },
        {
            title: 'Design Projects 3',
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
    ]
    return (
        <Box py={["0.5","0.5","8"]} bg={"#EDEADE"} h={{
        
        }}>



            <Carousel />

          

        </Box>
    )
}

export default Hero


