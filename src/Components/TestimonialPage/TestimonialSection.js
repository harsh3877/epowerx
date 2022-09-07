import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
  } from '@chakra-ui/react';
import SingleTestimonial from './SingleTestimonial';
 
function TestimonialSection() {
  const TestimonialList = [
                            {
                              name:'Jane Cooper',
                              title:'CEO at ABC Corporation',
                              heading:'Mindblowing Service',
                              text:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
                              avatarSrc:'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                            },
                            {
                              name:'Jane Cooper',
                              title:'CEO at ABC Corporation',
                              heading:'Mindblowing Service',
                              text:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
                              avatarSrc:'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                            },
                            {
                              name:'Jane Cooper',
                              title:'CEO at ABC Corporation',
                              heading:'Mindblowing Service',
                              text:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
                              avatarSrc:'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                            }
                          ]
  return (
    <div>
         <Box  py={12}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text color="#43ada5">We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
            {TestimonialList.map(item=>{
              return(
                <SingleTestimonial data={item} />
              )
            })}
        </Stack>
      </Container>
    </Box>
    </div>
  )
}

export default TestimonialSection