import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'react-bootstrap';

import AppHeader from './components/header';
import AppHero from './components/hero';
import Appsecond from './components/second';
import Appcat from './components/category';
import Appcon from './components/content';
import Appcont2 from './components/content2';
import Appcont3 from './components/content3';
import Appcont4 from './components/content4';
import Appcont5 from './components/content5';
import Appfooter from './components/footer';
function App() {
  return (
    <div className="App " >
      <header>
        <AppHeader />
      </header>
     
      <main >
      <Container fluid> 
        <AppHero />
        <Appsecond />
        <Appcat />
        <Appcon />
        <Appcont2 />
        <Appcont3 />
        <Appcont4 />
        <Appcont5 />
      </Container> 
      </main>
        <Appfooter />
      
    </div>
  );
}

export default App;
