import React, { useRef } from "react";
import { connect, useSelector } from 'react-redux'

import { changeThemeAction } from "../../redux/actions"
import "./style.scss";

function DayNightSwitcher({ dispatch, state }) {

  const inputCheckbox = useRef(null);
  const parentElement = useRef(null);
  const keyCode = Object.freeze({
    'RETURN': 13,
    'SPACE': 32
  });

  const theme = useSelector(state => state.themeReducer.theme)

  const toggleCheckbox = () => {
    // Handle State of Checkbox    
    if (theme === 'dark') {
      parentElement.current.classList.remove('react-toggle--checked')
      inputCheckbox.current.setAttribute('aria-checked', 'false')
      dispatch(changeThemeAction());
    } else {
      parentElement.current.classList.add('react-toggle--checked')
      inputCheckbox.current.setAttribute('aria-checked', 'true')
      dispatch(changeThemeAction());
    }
  }

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

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector(".react-toggle").classList.add('react-toggle--focus');
    inputCheckbox.current.focus();
    toggleCheckbox();

  }

  const handleBlur = (e) => {
    e.preventDefault();
    console.log('Blur');
    document.querySelector(".react-toggle").classList.remove('react-toggle--focus');
  }

  return (
    <>
      <div className="react-toggle react-toggle--checked"
        onClick={handleClick}
        ref={parentElement}
      >
        <div className="react-toggle-track">
          <div className="react-toggle-track-check">
            <span className="toggle_icon moon"></span>
          </div>
          <div className="react-toggle-track-x">
            <span className="toggle_icon sun"></span>
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
          onKeyUp={handleKeyUp}
          className=""
        />
      </div>
    </>
  )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  theme: state.theme
})

// Connect Redux to React
export default connect(mapStateToProps)(DayNightSwitcher);

