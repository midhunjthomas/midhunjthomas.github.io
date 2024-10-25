import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import hero from'./static/IMG_2925.jpg';

import Container from 'react-bootstrap/Container';
import Header from './header';
import Navigation from './Navigation';

function App() {
  return (
      <Container fluid className='App'>
        <Navigation></Navigation>
        <main>
          <img src={hero} width={'100%'}></img>
        </main>
      </Container>
    );
}

export default App;
