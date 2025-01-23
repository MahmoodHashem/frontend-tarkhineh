import About from '../components/layout/website/About';
import Carousel from '../components/layout/website/Carousel';
import MenuSection from '../components/layout/website/MenuSection';

function Home() {
  return (
    <>
      <Carousel />
      <MenuSection />
      <About />
    </>
  );
}

export default Home;
