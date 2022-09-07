import React, { useRef } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

function ContactSection() {
  const toast = useToast();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q7g6ml9",
        "template_igmlrwa",
        form.current,
        "79N2-x9y4EJKGCWu8"
      )
      .then(
        (result) => {
          e.target.reset();
          toast({
            title: "Email Sent",
            description: "We have received your email",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        },
        (error) => {
          toast({
            title: "Try later",
            description: "Email can not be sent currently",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Container
      bg={useColorModeValue("gray.100", "gray.900")}
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      id="Contact"
    >
      <Flex>
        <Box
          className="contact_container"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#fcca64">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        className="contanctFormLeftBtns"
                        _hover={{ border: "none" }}
                        leftIcon={<MdPhone size="20px" />}
                      >
                        +91-9582206907
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        className="contanctFormLeftBtns"
                        _hover={{ border: "none" }}
                        leftIcon={<MdEmail size="20px" />}
                      >
                        abhijeet@epowerx.ai
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        className="contanctFormLeftBtns address"
                        _hover={{ border: "none" }}
                        leftIcon={<MdLocationOn size="20px" />}
                      >
                        39, 2nd Floor, Suite #215,<br /> NGEF Lane, Indiranagar,<br /> First Stage, Bengaluru,<br /> Karnataka - 560038, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#fcca64" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#fcca64" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#fcca64" }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <form ref={form} onSubmit={sendEmail}>
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" name="user_name" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="email" size="md" name="user_email" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                            name="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            className="btn_yellow"
                            type="submit"
                            variant="solid"
                            // bg="#0D74FF"
                            color="#000"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default ContactSection;
