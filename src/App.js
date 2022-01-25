import Header from 'components/Header';
import Categories from 'components/Categories';
import Campaigns from 'components/Campaigns';
import Favorites from 'components/Favorites';
import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';
import MainSlider from 'components/MainSlider';



function App() {
  return (
    <div className="App bg-mainbg">
      <Header />
      <MainSlider />
      <Categories />
        <div className='max-w-7xl mx-auto'>
              
              <Campaigns />
              <Favorites />
              <MobileApp />
              <Cards />
              
        </div>
        <Footer />


    </div>
  );
}

export default App;
