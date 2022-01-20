import React from 'react';
import './App.css';
import {MainPage} from './components/MainPage/MainPage';
import { Sidebar } from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="App">
      <section id='profileSidebar'>
        <Sidebar />
      </section>
      <section id='landingPage'>
        <MainPage />
      </section>
    </div>
  );
}

export default App;
