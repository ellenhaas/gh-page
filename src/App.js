import React from 'react';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/pers_css.css';

import Head from './components/head'
import Header from './components/header'
import Navigation from './components/navigation'
import Introduction from './components/introduction'
import Story from './components/story'
import Techs from './components/techs'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
      <div className="App bg-app">
        <Head></Head>
        <Navigation></Navigation>
        <Header></Header>
        <Introduction></Introduction>
        <Techs></Techs>
        <Story></Story>
        <Footer></Footer>
      </div>

  );
}

export default App;
