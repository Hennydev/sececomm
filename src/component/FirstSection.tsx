import { Box, Button, Card, Center, Circle, Divider, Grid, HStack, Image, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { redirect } from 'next/dist/server/api-utils'

import React from 'react'
import { useEffect, useState } from 'react'
import { FiShoppingCart, FiZoomIn, FiZoomOut } from "react-icons/fi"
import SingleProduct from '../pages/SingleProduct'
import SingleBlog from '@/pages/SingleBlog'
import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { AddItem } from '@/redux/cartSlice'


const FirstSection = () => {
  // const { isOpen, onOpen, onClose } = useState(false)
  const [ShowButton, setShowButton] = useState<boolean>(false)
  const [cItem, setCItem] = useState({});
  const [cBlog, setCBlog] = useState({});
  const [ItemModal, setItemModal] = useState(false)
  const [BlogModal, setBlogModal] = useState(false)
  const [ModalSize, setModalSize] = React.useState("xl")
  const user = useSelector(state => (state.login.user))
  const [day, setDay] = useState(0)
  const [Hours, setHours] = useState(0)
  const [Seconds, setSeconds] = useState(0)
  const [min, setMin] = useState(0)
  const deadline = "February, 26, 2024"
  const [Price, setPrice] = useState(500)
  const dispatch = useDispatch()
  const AddToCart = ()=>{
    const formData={
      id:item.id,
      url:item.url,
      Price:Price,
      quantity:Qty
    }
    
    dispatch(AddItem({cart:formData}))
    console.log(Qty, "Qty")
    setQty(0)
  }


  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDay(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time / (1000 * 60 * 60)))%24)
    setMin(Math.floor((time / 1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))

  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval)
  }, [])



  const onItemClicked = (item) => {
    setCItem(item)
    setItemModal(true)
    // setModalSize(newsize)
    // onOpen();
  }
  const size = ["md", "xl"]

  const onBlogClicked = (item) => {
    console.log(item)
    setCBlog(item);
    setBlogModal(true)

  }

  const [blog, setBlog] = useState([{
    id: 1,
    url: "./Asset/blog1.webp",
    title: "DUMMY Blog"
  },
  {
    id: 2,
    url: "./Asset/blog2.webp",
    title: "DUMMY Blog"
  },
  {
    id: 3,
    url: "./Asset/blog3.webp",
    title: "DUMMY Blog"
  }])

  const [goods, setGoods] = useState([{
    id: 1,
    url: "./Asset/flex1.webp",
    title: "DUMMY PRODUCT",
    Price: 50
  },
  {
    id: 2,
    url: "./Asset/flexImg2.webp",
    title: "DUMMY PRODUCT",
    Price: 890
  },
  {
    id: 3,
    url: "./Asset/fleximg3.webp",
    title: "DUMMY PRODUCT",
    Price: 580
  },
  {
    id: 4,
    url: "./Asset/flexImg4.webp",
    title: "DUMMY PRODUCT",
    Price: 500
  },
  {
    id: 5,
    url: "./Asset/flexImg2.webp",
    title: "DUMMY PRODUCT",
    Price: 500
  },
  {
    id: 6,
    url: "./Asset/flex1.webp",
    title: "DUMMY PRODUCT",
    Price: 500
  },
  {
    id: 7,
    url: "./Asset/fleximg3.webp",
    title: "DUMMY PRODUCT",
    Price: 500
  },
  {
    id: 8,
    url: "./Asset/flexImg4.webp",
    title: "DUMMY PRODUCT",
    Price: 500
  },
  ]);


  return (
    <Box bg={"whitesmoke"} paddingY={"16"} w={["", "90%", "75%"]} m={"auto"}  >
      <Stack direction={['column', "column", 'row']} spacing='24px'>
        <Box w={["full", "full", "60%"]} marginRight={"10"} bg={"white"} paddingX={["0", "0", "3"]} position={"relative"} _hover={{ boxShadow: "dark-lg" }} >
          <Image src={"./Asset/img1.webp"} alt="product"></Image>
          <Box width={"full"} pos={"absolute"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} top={"0"} padding={"8"} >
            <Box color={"white"} bg={"gold"} paddingX={"3"} fontSize={"sm"} rounded={"md"}> New</Box>
            <Text>${Price}</Text>
          </Box>
          <Box width={"full"} fontSize={["xs", "sm", "sm"]} pos={"absolute"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} bottom={"0"} paddingX={"8"} marginBottom={"4"}  >
            <VStack><Text lineHeight={"0"}>Product Name</Text>
              <Text fontSize={""}>Furniture</Text></VStack>
            {(ShowButton) ? <Button  onMouseOver={() => setShowButton(false)} onClick={() => onItemClicked(cItem)} cursor={'pointer'} paddingX={"2"} paddingY={""} bg={"gold"} color={"white"} borderRadius={"0"} marginBottom={"1"}>
              Add to Cart
            </Button> :
              <Button onMouseEnter={() => setShowButton(true)} paddingX={"2"} paddingY={""} bg={"gold"} color={"white"} borderRadius={"0"} marginBottom={"1"}>
                Buy now
              </Button>}

          </Box>
        </Box>
        <Box w={"full"} bg={"white"} position={"relative"} _hover={{ boxShadow: "dark-lg" }}> <Image src={"./Asset/img2.webp"} alt="product"></Image>
          <Box pos={"absolute"} right={["4", "20", "32"]} top={["12", "20", "32"]}>  <Text width={["36", "50", "40"]} color={"#808080"} fontSize={["12pt", "14pt", "20pt"]} fontWeight={"bold"}>
            DESIGN BY HENNY MODERN
          </Text>
            <Text fontSize={["lg", "3xl"]} fontWeight={"bold"} color={"gold"}>
              -2021</Text></Box>

        </Box>
      </Stack>
      <Box marginY={"8"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
        <Center display={"flex"} flexDirection={"column"} >
          <Text fontSize={["xl", "2xl", "4xl"]} fontWeight={"bold"}>Featured Products</Text>
          <Box height={"1"} marginTop={"4"} width={"16"} bg={"red.700"} />
        </Center>
        <Grid templateColumns='repeat(8, 1fr)' marginY={["10", "12", "16"]} w='full' overflowX={"scroll"}>
          {goods.map((good) => (
            <Card key={good.id} bg={"white"} marginX={"3"} width={["180px", "285px"]} height={"full"} overflowY={"hidden"} paddingX={"4"} paddingY={"4"} _hover={{ boxShadow: "2xl" }}>
              <Box position={"relative"}>
                <Image src={good.url} alt="product"></Image>

                <Box width={"full"} pos={"absolute"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} top={"0"} padding={"4"} >
                  <Box color={"white"} bg={"gold"} paddingX={"3"} fontSize={"sm"} rounded={"md"}> New</Box>
                  <Text color={"red"}>$50.00</Text>
                </Box>
              </Box>

              <Text textAlign={"center"} fontWeight={"semibold"} paddingY={"4"}>{good.title}</Text>
              <HStack w={"full"} bg={"#f5f5f5"} p={"2"} px={"4"}>
                <Text onClick={() => onItemClicked(good)} cursor={'pointer'}><FiZoomIn /></Text>
                <Box w={"0.5"} h={"4"} bg={"black"} mx={"4"} ></Box>
                <Text onClick={() => onItemClicked(good)} cursor={'pointer'}><FiShoppingCart /></Text>
              </HStack>

            </Card>
          ))}


        </Grid>
        {/* <Button onClick={handleClick}>Next</Button> */}
        <Modal
          isCentered
          onClose={() => setItemModal(false)}
          isOpen={ItemModal}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{"Henny's Showroom"}</ModalHeader>
            <ModalCloseButton />
            <SingleProduct item={cItem} setItemModal={setItemModal}></SingleProduct></ModalContent>
        </Modal>
      </Box>
      <Box bg={""} display={"flex"} flexDirection={["column", "column", "row"]} alignItems={"center"} justifyContent={"center"}>

        <Box display={"flex"} w={["full", "full", "65%"]} mb={["8", "8", "0"]} marginRight={["0", "0", "8"]} bg={"white"} paddingY={["10", "16"]} > <Image src={"./Asset/secFlex1.webp"} alt="product"></Image>
          <Box padding={"6"}>  <Text width={""} color={"red.700"} fontSize={["18pt", "20pt", "40pt"]} mt={"3"} fontWeight={"semibold"}>
            Discount 50%
          </Text>
            <Text fontSize={["xs", "xs", "sm"]} fontWeight={""} color={""}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia impedit,
              dicta, reiciendis, labore at sint ab aliquid libero doloribus dolore earum omnis tenetur
              necessitatibus aperiam?</Text>
            <Link href={"#"} color={"red.700"} fontWeight={"semibold"}>GET DISCOUNT </Link>
          </Box>

        </Box>
        <Box bg={"white"} w={["full", "full", "30%"]} paddingX={"3"} paddingY={"4"}>
          <Box w={["full", "full"]} paddingX={"2"} mt={"0"}><Image w={["full", "full"]} src={"./Asset/secFlex2.webp"} alt='oroduct'></Image></Box>

          <Box textAlign={"center"} marginY={"8"}  >
            <VStack><Text lineHeight={"0"}>Indoor Furniture</Text>
              <Text marginBottom={"3"} fontSize={""}>$200.00</Text></VStack>
            <Center>
              <VStack>
                <Box w={"16"} h={"16"} textAlign={"center"} display={"flex"} alignItems={"center"} justifyContent={"center"} border={"1px"} borderRadius={"full"} borderColor={"red.700"}><Input focusBorderColor='none' ring={"none"} border={"none"} value={day} onChange={() => setDay(e.target.value)}></Input></Box>
                <Text>Days</Text>

              </VStack>


              <VStack>
                <Box w={"16"} mx={"4"} h={"16"} textAlign={"center"} display={"flex"} alignItems={"center"} justifyContent={"center"} border={"1px"} borderRadius={"full"} borderColor={"red.700"}><Input focusBorderColor='none' ring={"none"} border={"none"} value={Hours} onChange={() => setHours(e.target.value)}></Input></Box>
                <Text>Hours</Text>

              </VStack>
              <VStack>
                <Box w={"16"} h={"16"} textAlign={"center"} display={"flex"} alignItems={"center"} justifyContent={"center"} border={"1px"} borderRadius={"full"} borderColor={"red.700"}><Input focusBorderColor='none' ring={"none"} border={"none"} value={Seconds} onChange={() => setSeconds(e.target.value)}></Input></Box>
                <Text>Seconds</Text>

              </VStack>
            </Center>

          </Box>
        </Box>

      </Box>
      <Box id='Shop' marginY={"8"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
        <Center display={"flex"} flexDirection={"column"} >
          <Text fontSize={["xl", "2xl", "4xl"]} fontWeight={"bold"}><Link href='#Shop'>Purchase Online on Henny</Link> </Text>
          <Box height={"1"} marginTop={"4"} width={"16"} bg={"red.700"} />

        </Center>
        <Grid templateColumns='repeat(4, 1fr)' gap={"6"} marginY={"16"} w='full' overflowX={"hidden"}>
          {goods.map((good) => (
            <Card key={good.id} bg={"white"} width={["180px", "300px"]} height={"full"} overflowY={"hidden"} paddingX={"4"} paddingY={"4"} _hover={{ boxShadow: "2xl" }}>
              <Box position={"relative"}>
                <Image src={good.url} alt="product"></Image>

                <Box width={"full"} pos={"absolute"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} top={"0"} padding={"4"} >
                  <Box color={"white"} bg={"gold"} paddingX={"3"} fontSize={"sm"} rounded={"md"}> New</Box>
                  <Text color={"red"}>$50.00</Text>
                </Box>
              </Box>

              <Text textAlign={"center"} fontWeight={"semibold"} paddingY={"4"}>{good.title}</Text>
              <HStack w={"full"} bg={"#f5f5f5"} p={"2"} px={"4"}>
                <Text cursor={'pointer'} onClick={() => onItemClicked(good)}><FiZoomIn /></Text>
                <Box w={"0.5"} h={"4"} bg={"black"} mx={"4"} ></Box>
                <Text onClick={() => onItemClicked(good)} cursor={"pointer"}> <FiShoppingCart /></Text>
              </HStack>

            </Card>
          ))}


        </Grid>
        {/* <Button onClick={handleClick}>Next</Button> */}

      </Box>
      <Box marginY={"8"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
        <Center display={"flex"} flexDirection={"column"} >
          <Text fontSize={["xl", "2xl", "4xl"]} fontWeight={"bold"}>From The Blog</Text>
          <Box height={"1"} marginTop={"4"} width={"16"} bg={"red.700"} />

        </Center>
        <Grid templateColumns='repeat(3, 1fr)' gap={"4"} marginY={"16"} w='full' overflowX={["scroll", "hidden"]}>
          {blog.map((blog) => (
            <Card key={blog.id} bg={"white"} width={["300px", "410px"]} height={"full"} overflowY={"hidden"} paddingX={"4"} paddingY={"4"} _hover={{ boxShadow: "2xl" }}>
              <Box >
                <Image w={"95%"} marginLeft={"2"} alt='blog' src={blog.url}></Image>

                <HStack w={"full"} px={""} my={"4"}>

                  <Box w={"14"} h={"10"} bg={""} border={"1px"} color={"red.700"} borderColor={"red.700"} mx={"2"} display={"flex"} alignItems={"center"} justifyContent={"center"}>30</Box>

                  <VStack textAlign={"start"}>
                    <Text textAlign={"start"} lineHeight={"0"} color={"red.700"}>June, 2021 </Text>
                    <Text color={"red.700"}>Furniture BlogPost 2021</Text>
                  </VStack>

                </HStack>
              </Box>
              <Text fontSize={"sm"}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered If you are going to use a passage Lorem Ipsum, you alteration in some form.</Text>

              <Text onClick={

                () => onBlogClicked(blog)} cursor={'pointer'} color={"red.700"} mt={"2"}>Read more...</Text>

            </Card>

          ))}

        </Grid>

        <Modal
          isCentered
          onClose={() => setBlogModal(false)}
          isOpen={BlogModal}
          motionPreset='slideInBottom'
          size={"5xl"}

        >
          <ModalOverlay />
          <ModalContent  >
            <ModalHeader>{"Henny's Blog"}</ModalHeader>
            <ModalCloseButton />
            <SingleBlog item={cBlog} ></SingleBlog></ModalContent>
        </Modal>

      </Box>


    </Box>
  )
}

export default FirstSection


