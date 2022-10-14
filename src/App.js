import React from 'react';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="header-block">
        <div className="slice-box">
          <span className="slice slice-top">Dictionary</span>
          <span className="slice slice-bottom">Dictionary</span>
        </div>
      </header>

      <Dictionary />

      <footer className="footer-block">
        This project was coded by{" "}
        <a 
         className="link"
         href="https://www.linkedin.com/in/anna-shapovalova-63116b238/" 
         target="_blank" 
         rel="noreferrer">
          Anna Shapovalova
        </a> 
        {" "}and is open-sourced on{" "}
        <a
         className="link"
         href="https://github.com/hannashapovalova/dictionary-react" 
         target="_blank" 
         rel="noreferrer">GitHub</a> 
        {" "}and hosted on{" "}
        <a
         className="link"
         href="https://resilient-frangollo-ffa520.netlify.app" 
         target="_blank" 
         rel="noreferrer">Netlify</a>
        .
      </footer>
    </div>
  );
}

export default App;
