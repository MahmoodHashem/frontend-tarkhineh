import About from '../components/layout/website/About';
import BranchesSection from '../components/layout/website/Branches';
import Carousel from '../components/layout/website/Carousel';
import MenuSection from '../components/layout/website/MenuSection';
import Search from '../components/Search';

function Home() {
  return (
    <>
      <Carousel />
      <Search />
      <MenuSection />
      <About />
      <BranchesSection />
    </>
  );
}

export default Home;
