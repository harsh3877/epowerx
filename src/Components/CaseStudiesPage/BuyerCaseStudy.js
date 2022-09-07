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
import buyer_one from "../../Images/BuyerImages/buyer1.png";
import buyer_two from "../../Images/BuyerImages/buyer2.png";
import buyer_three from "../../Images/BuyerImages/buyer3.png";
import CaseTags from "./CaseTags";
function BuyerCaseStudy() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Stack>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
          className="big_cont"
        >
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <CaseTags tags={["Service"]} />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Buyer supplier matchmaking for B2B Marketplace 
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
             Sellers of indiamrt pay subscription for relevant leads of their products. Matching leads to correct seller drives acquisition and retension.
            </Text>
            <Button onClick={onOpen} className="btn_yellow">
              Read more
            </Button>
            <Modal onClose={onClose} isOpen={isOpen} size={"full"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Buyer supplier matchmaking for B2B Marketplace </ModalHeader>
                <ModalCloseButton />
                <ModalBody className="ModalBody">
                  <img src={buyer_one} /><br />
                  <img src={buyer_two} /><br />
                  <img src={buyer_three} />
                </ModalBody>
                <ModalFooter>
                  <Button className="modal_closeBtn" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default BuyerCaseStudy;
