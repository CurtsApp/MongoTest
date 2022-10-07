import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './css/App.css';
import { AboutView } from './js/views/AboutView';
import { CustomQueryView } from './js/views/CustomQueryView';
import { HomeView } from './js/views/HomeView';

function App() {
  const [activeView, setView] = useState(ViewType.HOME);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tool Usage Reporter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setView(ViewType.HOME)}>Home</Nav.Link>
            <Nav.Link onClick={() => setView(ViewType.CUSTOM_QUERY)}>Custom Query</Nav.Link>
            <Nav.Link onClick={() => setView(ViewType.ABOUT)}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {getActiveView()}
    </div>
  );

  function getActiveView() {
    switch (activeView) {
      case ViewType.CUSTOM_QUERY:
        return <CustomQueryView></CustomQueryView>

      case ViewType.ABOUT:
        return <AboutView></AboutView>

      default:
      case ViewType.HOME:
        return <HomeView></HomeView>
    }
  }
}

enum ViewType {
  HOME = 'Home',
  CUSTOM_QUERY = "CustomQuery",
  ABOUT = 'About'
}

export default App;
