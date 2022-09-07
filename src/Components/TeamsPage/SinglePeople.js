import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Container,
  } from "@chakra-ui/react";
  import { AiFillLinkedin } from 'react-icons/ai';
function SinglePeople({member}) {
  return (
    <Box
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
            >
              <Avatar
                size={"xl"}
                // src={
                //   "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                // }

                src={`/TeamImages/${member.imagename}.jpeg`}
                alt={"Avatar Alt"}
                mb={4}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
               {member.name}
              </Heading>
              <a className='LinkedinLink' href={`https://www.linkedin.com/in/${member.linkedin}/`} target="_blank">

              <Text fontWeight={600} color="#43ada5" mb={4}>
                <AiFillLinkedin />{member.linkedin}
              </Text>
              </a>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={1}
                py={2}
              >
                {/* Actress, musician, songwriter and artist. PM for work inquires
                or{" "}
                <Link href={"#"} color={"blue.400"}>
                  #tag
                </Link>{" "}
                me in your posts */}

                {member.description}
              </Text>

              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                {/* <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #art
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #photography
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #music
                </Badge> */}
              </Stack>

              <Stack direction={"row"} spacing={4}>
                <Link href={'#Contact'}  flex={1}
                  fontSize={"sm"} style={{ textDecoration: 'none'}}
                  rounded={"full"}
                 >
                <Button
                    // leftIcon={<EmailIcon />}
                  
                bg="#d2d2d2"
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  Email
                </Button>
                </Link>
                <Link href={'#Contact'}  flex={1}
                  fontSize={"sm"} style={{ textDecoration: 'none'}}
                  rounded={"full"}
                  >
                <Button
                // rightIcon={<PhoneIcon />}
                 
                  className='btn_yellow'
                  // bg={"blue.400"}
                  color={"black"}
                  boxShadow={
                    "0px 1px 25px -5px #fcca647a, 0 10px 10px -5px #fcca64ad"
                  }
                  // _hover={{
                  //   bg: "blue.500",
                  // }}
                  // _focus={{
                  //   bg: "blue.500",
                  // }}
                >
                  Call
                </Button>
                </Link>
              </Stack>
            </Box>
  )
}

export default SinglePeople