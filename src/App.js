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
    <div className="App">
        <Header />
        <MainSlider />
        <Categories />
      <div className="grid gap-y-6 py-6 pb-14 container mx-auto">
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
