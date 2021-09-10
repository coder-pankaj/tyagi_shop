import { Container } from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      {/* <Container> */}
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </Switch>
      {/* </Container> */}
      <Footer />
    </Router>
  );
}

export default App;
