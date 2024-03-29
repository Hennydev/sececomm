import { Box, Button, HStack, Image, Input, Text, VStack } from '@chakra-ui/react';
import React,{useState, FC} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from '@/redux/cartSlice';
import { useRouter } from 'next/router';

type Props = {
  item: any,
  setItemModal:any
}
const SingleProduct : FC<Props> = ({ item , setItemModal}) => {
  const router = useRouter()

  const dispatch = useDispatch()
  const user = useSelector((state:any) => (state.login.user))
  console.log(user,"user")
  const [Qty, setQty] = useState(0)
  const AddToCart = ()=>{
    
     if (user.email ){
      const formData={
        id:item.id,
        img:item.img,
        Price:item.Price,
        quantity:Qty,
        user:user.email
      }
      dispatch(AddItem({cart:formData}))
      setQty(0)
      setItemModal(false)

     }else {
      return router.push("Login")
     }
  }

  
//     
  return (
    <Box m={"auto"} py={"8"}>
    <Image src={item.img} alt="productImg"/>
    <Text>{item.title}</Text>
    <Text>${item.Price}</Text>
    <HStack>
    <Text> Qty : </Text><Input w={"18%"} py={"0"} value={Qty} onChange={(e:any)=>setQty(e.target.value)}></Input>
    </HStack>
    <Button onClick={AddToCart} my={"4"} bg={"blue.300"} textColor={"white"}>Add to cart</Button>
    </Box>
  )
}

export default SingleProduct
