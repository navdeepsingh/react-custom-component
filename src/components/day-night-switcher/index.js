import React from "react";
import "./style.scss";

export default function DayNightSwitcher() {

  //const parentElem = document.querySelector(".react-toggle")
  const keyCode = Object.freeze({
    'RETURN': 13,
    'SPACE': 32
  });

  const handleKeyUp = (e) => {
    e.preventDefault();
    var flag = false;

    switch (e.keyCode) {
      case keyCode.SPACE:
        console.log('Toggle Now')
        //toggleCheckbox();
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
      <div className="react-toggle"
        onClick={handleFocus}
        onKeyUp={handleKeyUp}
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
          type="checkbox"
          aria-label="Dark mode toggle"
          aria-checked="true"
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="react-toggle-screenreader-only"
        />
      </div>
    </>
  )
}

