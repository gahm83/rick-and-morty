"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/header/index.js":
/*!****************************************!*\
  !*** ./app/components/header/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"(app-pages-browser)/./app/components/header/styles.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-10/12 mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/\",\n            onClick: ()=>drawerToggle(false),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/images/rick-and-morty.png\",\n                width: \"750\",\n                height: \"229\",\n                alt: \"Rick & Morty\"\n            }, void 0, false, {\n                fileName: \"/Users/macpro/Sites/rickandmorty/app/components/header/index.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/macpro/Sites/rickandmorty/app/components/header/index.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/macpro/Sites/rickandmorty/app/components/header/index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ1Q7QUFDRjtBQUNSO0FBRXJCLE1BQU1JLFNBQVM7SUFDYixxQkFDRSw4REFBQ0M7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNILGtEQUFJQTtZQUNISSxNQUFLO1lBQ0xDLFNBQVMsSUFBTUMsYUFBYTtzQkFDNUIsNEVBQUNQLG1EQUFLQTtnQkFBQ1EsS0FBSTtnQkFBNkJDLE9BQU07Z0JBQU1DLFFBQU87Z0JBQU1DLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0U7S0FWTVQ7QUFZTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanM/MjQ4MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcydcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPSd3LTEwLzEyIG14LWF1dG8nPlxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBkcmF3ZXJUb2dnbGUoZmFsc2UpfT5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvcmljay1hbmQtbW9ydHkucG5nXCIgd2lkdGg9XCI3NTBcIiBoZWlnaHQ9XCIyMjlcIiBhbHQ9XCJSaWNrICYgTW9ydHlcIi8+XG4gICAgICA8L0xpbms+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJMaW5rIiwiSGVhZGVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm9uQ2xpY2siLCJkcmF3ZXJUb2dnbGUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/header/index.js\n"));

/***/ })

});