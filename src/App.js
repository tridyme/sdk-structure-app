import React, { Component } from 'react';
import {
  Container,
  Row,
} from 'reactstrap';
import './App.css';
import NavBar from './Components/NavBar';
import MyApp from './MyApp/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <NavBar />
            <MyApp />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
