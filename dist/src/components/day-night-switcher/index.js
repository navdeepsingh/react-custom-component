"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("./redux/actions");

require("./style.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DayNightSwitcher(_ref) {
  var dispatch = _ref.dispatch,
      state = _ref.state;
  var inputCheckbox = (0, _react.useRef)(null);
  var parentElement = (0, _react.useRef)(null);
  var keyCode = Object.freeze({
    'RETURN': 13,
    'SPACE': 32
  });
  var theme = (0, _reactRedux.useSelector)(function (state) {
    return state.themeReducer.theme;
  });

  var toggleCheckbox = function toggleCheckbox() {
    // Handle State of Checkbox    
    if (theme === 'dark') {
      parentElement.current.classList.remove('react-toggle--checked');
      inputCheckbox.current.setAttribute('aria-checked', 'false');
      dispatch((0, _actions.changeThemeAction)());
    } else {
      parentElement.current.classList.add('react-toggle--checked');
      inputCheckbox.current.setAttribute('aria-checked', 'true');
      dispatch((0, _actions.changeThemeAction)());
    }
  };

  var handleKeyUp = function handleKeyUp(e) {
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
  };

  var handleFocus = function handleFocus(e) {
    e.preventDefault();
    document.querySelector(".react-toggle").classList.add('react-toggle--focus');
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    document.querySelector(".react-toggle").classList.add('react-toggle--focus');
    inputCheckbox.current.focus();
    toggleCheckbox();
  };

  var handleBlur = function handleBlur(e) {
    e.preventDefault();
    document.querySelector(".react-toggle").classList.remove('react-toggle--focus');
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "react-toggle react-toggle--checked",
    onClick: handleClick,
    ref: parentElement
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "react-toggle-track"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "react-toggle-track-check"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "toggle_icon moon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "react-toggle-track-x"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "toggle_icon sun"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "react-toggle-thumb"
  }), /*#__PURE__*/_react.default.createElement("input", {
    ref: inputCheckbox,
    type: "checkbox",
    "aria-label": "Dark mode toggle",
    "aria-checked": "false",
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyUp: handleKeyUp,
    className: "react-toggle-screenreader-only"
  })));
} // Map Redux state to React component props


var mapStateToProps = function mapStateToProps(state) {
  return {
    theme: state.theme
  };
}; // Connect Redux to React


var _default = (0, _reactRedux.connect)(mapStateToProps)(DayNightSwitcher);

exports.default = _default;

//# sourceMappingURL=index.js.map