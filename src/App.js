import React from 'react'
import { Container, Alert } from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {listProducts, sliderImages} from './redux/actions/home'





function App(props) {
  const dispatch = useDispatch() 
  React.useEffect(() => {   
    dispatch(sliderImages())
    dispatch(listProducts()) 

}, [])

  return (
    <Router>
    
      <Header {...props} />
      {/* <Container> */}
     
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route  path="/login" component={LoginScreen} />
          <Route  path="/register" component={RegisterScreen} />
        </Switch>
      {/* </Container> */}
      <Footer />
    </Router>
  );
}

export default App;
