'use client'

import { AddUser } from '@/redux/loginSlice';
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Spinner,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from 'react-redux';


interface IFormInput {
  UserName: string;
  Email: string;
  Password: number;
}


export default function SplitScreen() {
  const router = useRouter()
  const [email, setemail] = useState<string>("")
  const [Password, setPassword] = useState<string>("")
  const [username, setUsername] = useState<string>("")

  const dispatch = useDispatch()
  const [isloggedIn, setIsloggedIn] = useState<boolean>(false)
  const handleSignin = (e:any) => {
    e.preventDefault()
    dispatch(AddUser({ user: username, email: email, password: Password }))
    setIsloggedIn(true)
    setTimeout(() => {
      
      if (username && email && Password) {
        setIsloggedIn(false)
        router.push("/")
      } else {
        return alert("No login Credentials")
      }
      
      console.log(email, Password)
      setUsername("")
      setemail("")
      setPassword("")
      
     }, 1000)
  }
    
  
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>




          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="">
              <FormLabel>FirstName</FormLabel>
              <Input {...register("UserName", { required: true, maxLength: 20 })} type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl id="">
              <FormLabel>Email Address</FormLabel>
              <Input  {...register("Email", { pattern: /^[A-Za-z]+$/i })} type="email" value={email} onChange={(e) => setemail(e.target.value)} />
            </FormControl>
            <FormControl id="">
              <FormLabel>Password</FormLabel>
              <Input type="number" {...register("Password", { min: 0, max: 999 })} value={Password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.500'}>Forgot password?</Text>
              </Stack>
              <Button type='submit' onClick={handleSignin} colorScheme={'blue'} variant={'solid'}>
         
              {
                (isloggedIn) ? <Spinner /> :    <p>Sign in</p> 
              }
              </Button>
            </Stack>
          </form>
        </Stack>

      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}




