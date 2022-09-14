import React from 'react'
import ContactSection from '../ContactSection'
import FeaturesSection from '../FeaturesSection'
import HeroSection from '../HeroSection'
import ServicesSection from '../ServicesSection'
import TeamsPage from '../TeamsPage/TeamsPage'
import CaseStudiesPage from '../CaseStudiesPage/CaseStudiesPage'
import TestimonialPage from '../TestimonialPage/TestimonialPage'
import VideoSection from '../VideoSection'
function HomePage() {
  return (
    <>
        <HeroSection />
        {/* <FeaturesSection /> */}
        <ServicesSection />
        <TeamsPage />
        <VideoSection />
        <CaseStudiesPage />
        <TestimonialPage />
        <ContactSection />
        
    </>
  )
}

export default HomePage