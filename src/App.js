import React from 'react';
import './App.css';
import Info from './sections/info';
import Skills from './sections/skills';
import Footer from './sections/footer.js';
import Animation from './sections/header/animation.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render (){
    return (
      <>
        <div className = "home">
          <Animation/>
        </div>
        <div className = "info">
          <Info/>
        </div>
        <div className = "skills-container">
          <Skills/>
        </div>
        <div className = "footer">
          <Footer/>
        </div>
      </>
    );
  }
}

export default App;
