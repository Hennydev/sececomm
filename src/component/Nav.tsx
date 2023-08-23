import { Box, Button, Center, HStack, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { HiShoppingCart } from "react-icons/hi"
import { VStack } from "@chakra-ui/react"
import { Link } from '@chakra-ui/next-js'
import { useSelector } from 'react-redux'
import Payment from "./Payment"

const Nav = () => {
 const [cartQty, setCartQty] = useState<number>(0)
 const [totalPrice, setTotalPrice] = useState(0)
 const cart = useSelector(state=>(state.Cart))
 const user = useSelector(state=>(state.login.user))
 console.log(cart , "cart")
    useEffect(() => {
        const getTotal = () => {
          let total = 0
          
         cart.cart.forEach(item => {
            total += item.quantity
            
          });
          setCartQty(total)
          
        }
        getTotal()
      }, [cart])
      useEffect(() => {
        const getTotal = () => {
          
          let totalPrice = 0
          cart.cart.forEach(item => {
          
            totalPrice += item.Price * item.quantity
          });
          
          setTotalPrice(totalPrice)
        }
        getTotal()
      }, [cart])
    
     const handleSubmit =()=>{
    
        setTimeout(() => {
      
           setCartQty(0)
            
           }, 1000)
        }

     }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [menu, setmenu] = useState<boolean>(false)
    return (
        <Box w={"100%"} margin={"auto"} alignItems={""} shadow={"2xl"} paddingY={"8"}>

            <HStack w={"85%"} mx={"auto"} display={"flex"} flexDirection={"row"} justifyContent={'space-between'} >
                <Heading fontSize={"3xl"} cursor={"pointer"}><RxHamburgerMenu onClick={() => setmenu(true)} /></Heading>
                <Heading fontSize={"3xl"} color={"#808080"}>Henny</Heading>
                <Heading fontSize={"3xl"}>  <HiShoppingCart onClick={onOpen} ></HiShoppingCart></Heading>

            </HStack>
            {
                menu && <VStack onMouseLeave={() => setmenu(false)} bg={"#F5F5F5"} my={"6"} mx={""} py={"4"}>
                    <Link textDecor={"none"} href={"Profile"}><Text>Profile</Text></Link>
                    <Text>Logout</Text>
                </VStack>
            }
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>You have {cart.cart.length} items in your shopping cart</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight={"bold"} fontSize={"2xl"} >Welcome {user.email}</Text>
                       <Stack  display={"flex"} flexDir={"column"} alignItems={"flex-start"} >
                           { cart.cart.length > 0 ? cart.cart.map((item)=>( <VStack key={item.id}>
                            <HStack> {item.title}
                            <Image h="36" w="40" src={item.url} alt='cart'></Image>
                            
                            <Text>Price: ${item.Price} * </Text>
                            <Text> {item.quantity}</Text>
                            
                            
                            </HStack>
                            
                            
                            
                           
                           </VStack>)) : <Text>No item in cart</Text>}
                           <Text fontWeight={"bold"} fontSize={"2xl"} textAlign={"center"} mt={"3"}>SubTotal: {totalPrice}</Text>
                           <Text fontSize={"sm"}>Thanks for your patronage</Text>
                           </Stack>
                           
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleSubmit} ><Payment totalPrice={totalPrice}/></Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>
    )
}

export default Nav

