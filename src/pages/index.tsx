import FirstSection from '@/component/FirstSection'
import Footer from '@/component/Footer'
import Hero from '@/component/Hero'
import Nav from '@/component/Nav'
import { Box } from '@chakra-ui/react'

import React from 'react'

const index = () => {
  return (
  <Box bg={"#f5f5f5"} h={"full"} paddingX={""} paddingY={""}>
    <Nav />
    <Hero />
    <FirstSection />
    <Footer />
  </Box>
  )
}

export default index
