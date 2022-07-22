import ComponentShowcase from './ComponentShowcase';
import { Footer } from './Footer';
import NftCard from './NftCard/NftCard';
import "../styles/app.scss";

function App() {
  return (<div className='app'>
    <ComponentShowcase>
        <NftCard/>
    </ComponentShowcase>
    <Footer></Footer>
  </div>);
}

export default App;
