import React from "react";
import {
  Box,
  Heading,
  Link,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Center, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import basket from "../../Images/BasketImages/basket.png";

import CaseTags from "./CaseTags";

function BasketCaseStudy() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"base"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("gray.50", "gray.900")}
              p={2}
              px={3}
              color={"green.500"}
              rounded={"full"}
            >
              Service
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"} fontWeight={200} color={"gray.500"}>
                {" "}
                Next basket recomendation
              </Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Predicts time and products in the next basket of user of a
                retail chain.
              </ListItem>
            </List>

            <Button
            onClick={onOpen} className="btn_yellow"
              mt={10}
              w={"full"}
            
              color={"black"}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(217 203 34 / 43%)"}
             
            >
              Read More
            </Button>
            
            <Modal onClose={onClose} isOpen={isOpen} size={"full"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Next basket recomendations </ModalHeader>
                <ModalCloseButton />
                <ModalBody className="ModalBody">
                  <img src={basket} />
                </ModalBody>
                <ModalFooter>
                  <Button className="modal_closeBtn" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Center>

     
    </>
  );
}

export default BasketCaseStudy;
