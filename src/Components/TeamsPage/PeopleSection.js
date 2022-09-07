import React from "react";
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
import SinglePeople from "./SinglePeople";

function PeopleSection() {
  const teamMembers = [
    {
      name: "Pratik Khandelwal",
      imagename:'pratik',
      linkedin:'pratik-khandelwal-0945a118',
      email: "pratik@epowerx.ai",
      phone: "918494954808",
      description:
        "Applied ML & Deep Learning \n Exit ZO Rooms (SeriB | $30 Mn) \n IIT BHU '12",
    },
    {
      name: "Abhijeet Singh",
      imagename:'abhijeet',
      linkedin:'abhijeet-singh-318a591ba',
      email: "abhijeet@epowerx.ai",
      phone: "919582206907",
      description:
        "Python, Automation, Algorithms \n Exit ZO Rooms (SeriB | $30 Mn) \n IIT BHU '12",
    },
  ];
  return (
    <div>
      <Container py={16} maxW={"7xl"} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Who Are We</Heading>
          <Text color="#43ada5">12+ years of combined experience in Productionizing AI Models</Text>
        </Stack>
        <Center py={6}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            {
              teamMembers.map((member, i)=>{
                return(
                  <SinglePeople key={i} member={member} />
                )
              })
            }
             
          </Stack>
        </Center>
      </Container>
    </div>
  );
}

export default PeopleSection;
