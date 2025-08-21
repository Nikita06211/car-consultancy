import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CarListing from '@/components/CarListing';
import CarListingsWrapper from '@/components/CarListingsWrapper';

const HomePage = () => (
  <>
    <Navbar />
    <HeroSection />
    {/* Car Listing section will go here next */}
    {/* <CarListing/> */}
    <CarListingsWrapper/>
  </>
);

export default HomePage;
