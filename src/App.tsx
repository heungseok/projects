import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HyperTendril from './routes/HyperTendril';
import './App.css';
import Projects from './routes/Projects';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Projects} />
      <Route path="/hypertendril" component={HyperTendril} />
    </BrowserRouter>
  );
}

export default App;
