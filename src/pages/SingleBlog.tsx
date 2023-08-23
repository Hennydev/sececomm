import { Box, Button, Flex, HStack, Image, Stack, Text, Textarea, Tooltip, VStack } from '@chakra-ui/react'
import React, { useState,FC } from 'react'
import { MdComment } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '@/redux/commentSlice'
import { useRouter } from 'next/router'


type Props = {
  item: any
}

const SingleBlog : FC<Props> = ({ item }) => {
  const [text, setText] = useState<boolean>(false)
  const [list, setList] = useState([])
  const [Textcomment, setTextComment] = useState<string>("")
  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector((state:any) => (state.login.user))
  const comment = useSelector((state:any) => (state.comment.comment))
  console.log(user)
  const AddComment = (e:any) => {
    e.preventDefault()

    if (user.email.length > 0 ){
      const formData = {

        user: user.email,
        comment: Textcomment,
      }
      dispatch(addComment({ comment: formData }))
      setTextComment("")
      setText(false)
    }else{
     return  router.push("Login")
    }
 }
  return (
    <Box display={"flex"} flexDir={["column","column","row","row"]} mx={"4"} p={"6"}>
      <Stack w={["100%", "100%", "55%"]} mx={"6"}>
        <Image src={item.url} alt="blog"></Image>
        <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eaque asperiores quos sed doloribus hic accusantium eveniet tenetur aspernatur similique? Blanditiis voluptatibus laborum et dolorem vel, culpa sequi impedit nulla!</Text>
        <HStack my={"2"} >
          <Tooltip label='Click to add comment' fontSize='md'>
            <span onClick={() => setText(true)}><MdComment /></span>
          </Tooltip>
          <Text>{comment.length}</Text></HStack>
        {text && <Textarea value={Textcomment} onChange={(e) => setTextComment(e.target.value)}></Textarea>}
        {text && <Button onClick={AddComment} mt={"3"}>Submit Comment</Button>}

      </Stack>
      <VStack w={["100%","100%","40%"]} justifyContent={""}>
        <HStack>
          <Text fontWeight={"bold"} fontSize={"2xl"}>Comments</Text>
          <Text fontWeight={"bold"} fontSize={"2xl"}>({comment.length})</Text>
        </HStack>

        <Box>

          <VStack display={"flex"} flexDir={"column"} alignItems={"flex-end"} >{comment.map((item:any) => <Stack key={item.id}>
            <Box bg={"gray.100"} p={"2"} roundedBottomLeft={"lg"} pl={"2"} roundedTop={"lg"}> <Text fontSize={"sm"}>{item.Comment}</Text></Box>
            <Text fontSize={"xs"} mb={"4"} lineHeight={"0"} textAlign={"right"}>{item.user}</Text>

          </Stack>)}</VStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default SingleBlog
