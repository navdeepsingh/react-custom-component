"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeThemeAction = changeThemeAction;
exports.changeTheme = exports.CHANGE_THEME = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Action TYPES
 */
var CHANGE_THEME = 'CHANGE_THEME';
/**
 * Action Creators
 */

exports.CHANGE_THEME = CHANGE_THEME;

var changeTheme = function changeTheme() {
  return {
    type: CHANGE_THEME
  };
};

exports.changeTheme = changeTheme;

function changeThemeAction() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(disptach) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", disptach(changeTheme()));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

//# sourceMappingURL=index.js.map