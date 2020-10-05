import React from 'react';
import DayNightSwitcher from "./components/day-night-switcher";
import './App.css';

function App({ theme }) {
  return (
    <>
      <DayNightSwitcher />
      <code>
        {theme}
      </code>
    </>
  );
}

export default App;
