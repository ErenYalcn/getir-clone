import Header from 'components/Header';
import Categories from 'components/Categories';
import Campaigns from 'components/Campaigns';
import Favorites from 'components/Favorites';
import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';
import MainSlider from 'components/MainSlider';
import { useWindowWidth } from '@react-hook/window-size'




function App() {
  const windowWidth = useWindowWidth()

  return (
    <div className="App bg-mainbg">
      <Header />
      {windowWidth < 768 && <Campaigns />}
      <MainSlider />
      <Categories />
        <div className='max-w-7xl mx-auto'>
              
              {windowWidth > 768 && <Campaigns />}
              <Favorites />
              <MobileApp />
              <Cards />
              
        </div>
        <Footer />


    </div>
  );
}

export default App;
