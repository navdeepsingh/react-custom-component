import React from 'react';
import { useSelector } from 'react-redux'
import DayNightSwitcher from "./components/day-night-switcher";
import './App.css';

function App() {
  const theme = useSelector(state => state.themeReducer.theme)
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
