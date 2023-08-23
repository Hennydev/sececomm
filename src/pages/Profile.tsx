import Footer from '@/component/Footer'
import Nav from '@/component/Nav'
import { Box, Button, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector(state=>(state.login.user))


  return (
    <><Nav></Nav>
    <Box bg={"#f5f5f5"} h={"vh"} textAlign={"center"} py={"32"}>
      <Text fontSize={"3xl"} fontWeight={"bold"}>Hello {user.email}</Text>

      <Text fontWeight={"semibold"} mt={"4"} fontSize={"xl"}> Are you done shopping?</Text>
      <Link href="Login"><Button  bg={"blue.100"}>Logout</Button></Link> 
      or <Button bg={"blue.100"} my={"6"}> <Link href={"/"}>Continue Shopping</Link></Button>
    </Box>
    <Footer></Footer>
    </>
  )
}

export default Profile
