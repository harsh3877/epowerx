import React from "react";
import { Heading, Stack, Container, Spacer } from "@chakra-ui/react";
import HedgeCaseStudy from "./HedgeCaseStudy";
import TruckCaseStudy from "./TruckCaseStudy";
import SensorCaseStudy from "./SensorCaseStudy";
import BuyerCaseStudy from "./BuyerCaseStudy";
import CreditCaseStudy from "./CreditCaseStudy";
import BasketCaseStudy from "./BasketCaseStudy";
import SeoCaseStudy from "./SeoCaseStudy";
import SpamCaseStudy from "./SpamCaseStudy";
import ContactSection from '../ContactSection';
function CaseStudiesPage() {
  return (
    <>
      <Container maxW={"7xl"} p="12" as={Stack} spacing={12}>
        <Heading as="h1">Case studies by Epowerx</Heading>
        <HedgeCaseStudy />
        <TruckCaseStudy />
        <SensorCaseStudy />
        <BuyerCaseStudy />
        <CreditCaseStudy />
        <BasketCaseStudy />
        <SeoCaseStudy />
        <SpamCaseStudy />
      </Container>
        <ContactSection />
    </>
  );
}

export default CaseStudiesPage;
