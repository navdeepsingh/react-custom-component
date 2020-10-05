import React, { useRef, useEffect } from "react";
import { connect } from 'react-redux'

import { changeThemeAction, getThemeAction } from "../../redux/actions"
import "./style.scss";

function DayNightSwitcher({ dispatch, theme }) {

  // const [theme, setTheme] = useState('dark');

  //const parentElem = document.querySelector(".react-toggle")
  const inputCheckbox = useRef(null);
  const parentElement = useRef(null);
  const keyCode = Object.freeze({
    'RETURN': 13,
    'SPACE': 32
  });

  const toggleCheckbox = () => {
    let theme = dispatch(getThemeAction());
    console.log(theme);

    // Handle State of Checkbox
    // let currentTheme = dispatch(getTheme());
    // console.log(currentTheme.theme);
    // currentTheme.then(theme => {
    //   console.log(theme);
    //   if (theme === 'dark') {
    //     parentElement.current.classList.remove('react-toggle--checked')
    //     inputCheckbox.current.setAttribute('aria-checked', 'false')
    //     dispatch(changeThemeAction());
    //   } else {
    //     parentElement.current.classList.add('react-toggle--checked')
    //     inputCheckbox.current.setAttribute('aria-checked', 'true')
    //     dispatch(changeThemeAction());
    //   }
    // })
  }

  useEffect((state) => {
    // Check State after updating state
    dispatch(getThemeAction())
  }, [dispatch]);

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

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  theme: state.theme
})

// Connect Redux to React
export default connect(mapStateToProps)(DayNightSwitcher);

