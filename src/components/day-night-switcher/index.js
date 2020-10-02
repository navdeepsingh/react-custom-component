import React, { useRef, useState, useEffect } from "react";
import { connect } from 'react-redux'
import "./style.scss";

export default function DayNightSwitcher({ }) {

  const [theme, setTheme] = useState('dark');

  //const parentElem = document.querySelector(".react-toggle")
  const inputCheckbox = useRef(null);
  const parentElement = useRef(null);
  const keyCode = Object.freeze({
    'RETURN': 13,
    'SPACE': 32
  });

  const toggleCheckbox = () => {
    // Handle State of Checkbox
    // if (theme === 'dark') {
    //   parentElement.current.classList.remove('react-toggle--checked')
    //   inputCheckbox.current.setAttribute('aria-checked', 'false')
    //   setTheme('bright');
    // } else {
    //   parentElement.current.classList.add('react-toggle--checked')
    //   inputCheckbox.current.setAttribute('aria-checked', 'true')
    //   setTheme('dark');
    // }
  }

  useEffect(() => {
    // Check State after updating state
    console.log("Check True:" + theme);
  })

  const handleKeyUp = (e) => {
    e.preventDefault();
    var flag = false;

    switch (e.keyCode) {
      case keyCode.SPACE:
        toggleCheckbox();
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      e.preventDefault();
    }
  }

  const handleFocus = (e) => {
    e.preventDefault();
    document.querySelector(".react-toggle").classList.add('react-toggle--focus');
  }

  const handleBlur = (e) => {
    e.preventDefault();
    document.querySelector(".react-toggle").classList.remove('react-toggle--focus');
  }

  return (
    <>
      <div className="react-toggle react-toggle--checked"
        onClick={handleFocus}
        onKeyUp={handleKeyUp}
        ref={parentElement}
      >
        <div className="react-toggle-track">
          <div className="react-toggle-track-check">
            <span className="toggle_keGJ moon_1gwN"></span>
          </div>
          <div className="react-toggle-track-x">
            <span className="toggle_keGJ sun_3CPA"></span>
          </div>
        </div>
        <div className="react-toggle-thumb"></div>
        <input
          ref={inputCheckbox}
          type="checkbox"
          aria-label="Dark mode toggle"
          aria-checked="false"
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="react-toggle-screenreader-only"
        />
      </div>
    </>
  )
}

