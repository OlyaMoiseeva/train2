webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Place.js":
/*!*****************************!*\
  !*** ./components/Place.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Place; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/olasinani/Desktop/train2/components/Place.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar handler = function handler(to) {\n  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({\n    pathname: '/point',\n    query: {\n      to: to\n    }\n  });\n};\n\nfunction Place(props, aas) {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    onClick: function onClick() {\n      return handler(props.to.to);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, props.to.title), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: {\n      pathname: '/point',\n      query: {\n        to: props.to.to\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 12\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 76\n    }\n  }, props.to.title))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/point\",\n    as: aas.aas + '/point',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 12\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 57\n    }\n  }, \"Point\"))));\n}\n_c = Place;\n\nvar _c;\n\n$RefreshReg$(_c, \"Place\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BsYWNlLmpzP2QyMmUiXSwibmFtZXMiOlsiaGFuZGxlciIsInRvIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJQbGFjZSIsInByb3BzIiwiYWFzIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxFQUFELEVBQVE7QUFDdEJDLG9EQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNWQyxZQUFRLEVBQUUsUUFEQTtBQUVWQyxTQUFLLEVBQUU7QUFBRUosUUFBRSxFQUFGQTtBQUFGO0FBRkcsR0FBWjtBQUlELENBTEQ7O0FBT2UsU0FBU0ssS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN4QyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFdBQU8sRUFBRztBQUFBLGFBQU1SLE9BQU8sQ0FBQ08sS0FBSyxDQUFDTixFQUFOLENBQVNBLEVBQVYsQ0FBYjtBQUFBLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOENNLEtBQUssQ0FBQ04sRUFBTixDQUFTUSxLQUF2RCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU7QUFBRUwsY0FBUSxFQUFFLFFBQVo7QUFBc0JDLFdBQUssRUFBRTtBQUFFSixVQUFFLEVBQUVNLEtBQUssQ0FBQ04sRUFBTixDQUFTQTtBQUFmO0FBQTdCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlNLEtBQUssQ0FBQ04sRUFBTixDQUFTUSxLQUFiLENBQWhFLENBQUwsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBb0IsTUFBRSxFQUFHRCxHQUFHLENBQUNBLEdBQUosR0FBVSxRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBN0MsQ0FBTCxDQUhGLENBREY7QUFPRDtLQVJ1QkYsSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGxhY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBoYW5kbGVyID0gKHRvKSA9PiB7XG4gIFJvdXRlci5wdXNoKHtcbiAgICBwYXRobmFtZTogJy9wb2ludCcsXG4gICAgcXVlcnk6IHsgdG8gfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGFjZShwcm9wcywgYWFzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVyKHByb3BzLnRvLnRvKSB9Pntwcm9wcy50by50aXRsZX08L3NwYW4+XG4gICAgICA8ZGl2PjxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcG9pbnQnLCBxdWVyeTogeyB0bzogcHJvcHMudG8udG8gfSB9fT48YT57cHJvcHMudG8udGl0bGV9PC9hPjwvTGluaz48L2Rpdj5cbiAgICAgIDxkaXY+PExpbmsgaHJlZj0nL3BvaW50JyBhcz17IGFhcy5hYXMgKyAnL3BvaW50J30+PGE+UG9pbnQ8L2E+PC9MaW5rPjwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Place.js\n");

/***/ })

})