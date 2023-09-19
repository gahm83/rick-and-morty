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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Homepage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_store_rickStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/store/rickStore */ \"(app-pages-browser)/./src/store/rickStore.js\");\n/* harmony import */ var _hooks_useBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useBackground */ \"(app-pages-browser)/./app/hooks/useBackground.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header */ \"(app-pages-browser)/./app/components/header/index.js\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card/card */ \"(app-pages-browser)/./app/components/card/card.js\");\n/* harmony import */ var _components_paginate_paginate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/paginate/paginate */ \"(app-pages-browser)/./app/components/paginate/paginate.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Homepage() {\n    _s();\n    const currAPIPage = (0,_src_store_rickStore__WEBPACK_IMPORTED_MODULE_2__.useRickStore)((state)=>state.currentPage);\n    const nextAPIPAge = (0,_src_store_rickStore__WEBPACK_IMPORTED_MODULE_2__.useRickStore)((state)=>state.incrementPage);\n    const characterList = (0,_src_store_rickStore__WEBPACK_IMPORTED_MODULE_2__.useRickStore)((state)=>state.characters);\n    const getCharacters = (0,_src_store_rickStore__WEBPACK_IMPORTED_MODULE_2__.useRickStore)((state)=>state.fetchCharacters);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [postsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6);\n    const indexOfLastPost = currentPage * postsPerPage;\n    const indexOfFirstPost = indexOfLastPost - postsPerPage;\n    const currentCharacters = characterList.slice(indexOfFirstPost, indexOfLastPost);\n    const totalPosts = characterList.length;\n    const totalPages = Math.ceil(totalPosts / postsPerPage);\n    const actualPages = totalPosts % postsPerPage !== 0 ? totalPages - 1 : totalPages;\n    const randomBG = (0,_hooks_useBackground__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getCharacters();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentPage === actualPages) {\n            getCharacters(currAPIPage);\n        }\n    }, [\n        currentPage\n    ]);\n    const paginate = (pageNumber)=>{\n        if (pageNumber === actualPages) {\n            nextAPIPAge();\n        }\n        setCurrentPage(pageNumber);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-\".concat(randomBG),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/macpro/Sites/rickandmorty/app/page.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-10/12 mx-auto space-y-6\",\n                    children: [\n                        currentCharacters ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6\",\n                            children: currentCharacters && currentCharacters.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    data: item\n                                }, item.id, false, {\n                                    fileName: \"/Users/macpro/Sites/rickandmorty/app/page.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 68\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/macpro/Sites/rickandmorty/app/page.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"loading\",\n                            children: \"Loading...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macpro/Sites/rickandmorty/app/page.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_paginate_paginate__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            actualPages: actualPages,\n                            currentPage: currentPage,\n                            paginate: paginate\n                        }, void 0, false, {\n                            fileName: \"/Users/macpro/Sites/rickandmorty/app/page.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macpro/Sites/rickandmorty/app/page.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macpro/Sites/rickandmorty/app/page.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macpro/Sites/rickandmorty/app/page.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Homepage, \"fOQsX9DcU2tJ/jfLhdWreNvNGKc=\", false, function() {\n    return [\n        _src_store_rickStore__WEBPACK_IMPORTED_MODULE_2__.useRickStore,\n        _src_store_rickStore__WEBPACK_IMPORTED_MODULE_2__.useRickStore,\n        _src_store_rickStore__WEBPACK_IMPORTED_MODULE_2__.useRickStore,\n        _src_store_rickStore__WEBPACK_IMPORTED_MODULE_2__.useRickStore,\n        _hooks_useBackground__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Homepage;\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ1M7QUFDSDtBQUNUO0FBQ0M7QUFDWTtBQUV2QyxTQUFTTzs7SUFFdEIsTUFBTUMsY0FBY04sa0VBQVlBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsV0FBVztJQUM3RCxNQUFNQyxjQUFjVCxrRUFBWUEsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNRyxhQUFhO0lBQy9ELE1BQU1DLGdCQUFnQlgsa0VBQVlBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUssVUFBVTtJQUM5RCxNQUFNQyxnQkFBZ0JiLGtFQUFZQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1PLGVBQWU7SUFDbkUsTUFBTSxDQUFDTixhQUFhTyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNrQixhQUFhLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUNoQyxNQUFNbUIsa0JBQWtCVCxjQUFjUTtJQUN0QyxNQUFNRSxtQkFBbUJELGtCQUFrQkQ7SUFDM0MsTUFBTUcsb0JBQW9CUixjQUFjUyxLQUFLLENBQUNGLGtCQUFrQkQ7SUFDaEUsTUFBTUksYUFBYVYsY0FBY1csTUFBTTtJQUN2QyxNQUFNQyxhQUFhQyxLQUFLQyxJQUFJLENBQUNKLGFBQWFMO0lBQzFDLE1BQU1VLGNBQWMsYUFBY1YsaUJBQWlCLElBQUtPLGFBQWEsSUFBSUE7SUFDekUsTUFBTUksV0FBVzFCLGdFQUFhQTtJQUU5QkYsZ0RBQVNBLENBQUM7UUFDUmM7SUFDRixHQUFHLEVBQUU7SUFFTGQsZ0RBQVNBLENBQUM7UUFDUixJQUFJUyxnQkFBZ0JrQixhQUFhO1lBQy9CYixjQUFjUDtRQUNoQjtJQUNGLEdBQUc7UUFBQ0U7S0FBWTtJQUVoQixNQUFNb0IsV0FBVyxDQUFDQztRQUNoQixJQUFJQSxlQUFlSCxhQUFhO1lBQzlCakI7UUFDRjtRQUNBTSxlQUFlYztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFXLE1BQWUsT0FBVEo7OzBCQUNyQiw4REFBQ3pCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUM4QjswQkFDQyw0RUFBQ0M7b0JBQUlGLFdBQVU7O3dCQUViWixrQ0FDRSw4REFBQ2M7NEJBQUlGLFdBQVU7c0NBRVhaLHFCQUFxQkEsa0JBQWtCZSxHQUFHLENBQUNDLENBQUFBLHFCQUFRLDhEQUFDaEMsNkRBQUlBO29DQUFlaUMsTUFBTUQ7bUNBQWZBLEtBQUtFLEVBQUU7Ozs7Ozs7OztpREFHekUsOERBQUNKOzRCQUFJRixXQUFVO3NDQUFVOzs7Ozs7c0NBRTNCLDhEQUFDM0IscUVBQVFBOzRCQUNQc0IsYUFBYUE7NEJBQ2JsQixhQUFhQTs0QkFDYm9CLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtHQXZEd0J2Qjs7UUFFRkwsOERBQVlBO1FBQ1pBLDhEQUFZQTtRQUNWQSw4REFBWUE7UUFDWkEsOERBQVlBO1FBU2pCQyw0REFBYUE7OztLQWRSSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSaWNrU3RvcmUgfSBmcm9tICdAL3NyYy9zdG9yZS9yaWNrU3RvcmUnO1xuaW1wb3J0IHVzZUJhY2tncm91bmQgZnJvbSAnLi9ob29rcy91c2VCYWNrZ3JvdW5kJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkJztcbmltcG9ydCBQYWdpbmF0ZSBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGUvcGFnaW5hdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSgpIHtcblxuICBjb25zdCBjdXJyQVBJUGFnZSA9IHVzZVJpY2tTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmN1cnJlbnRQYWdlKTtcbiAgY29uc3QgbmV4dEFQSVBBZ2UgPSB1c2VSaWNrU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5pbmNyZW1lbnRQYWdlKTtcbiAgY29uc3QgY2hhcmFjdGVyTGlzdCA9IHVzZVJpY2tTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmNoYXJhY3RlcnMpO1xuICBjb25zdCBnZXRDaGFyYWN0ZXJzID0gdXNlUmlja1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUuZmV0Y2hDaGFyYWN0ZXJzKTtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3Bvc3RzUGVyUGFnZV0gPSB1c2VTdGF0ZSg2KTtcbiAgY29uc3QgaW5kZXhPZkxhc3RQb3N0ID0gY3VycmVudFBhZ2UgKiBwb3N0c1BlclBhZ2U7XG4gIGNvbnN0IGluZGV4T2ZGaXJzdFBvc3QgPSBpbmRleE9mTGFzdFBvc3QgLSBwb3N0c1BlclBhZ2U7XG4gIGNvbnN0IGN1cnJlbnRDaGFyYWN0ZXJzID0gY2hhcmFjdGVyTGlzdC5zbGljZShpbmRleE9mRmlyc3RQb3N0LCBpbmRleE9mTGFzdFBvc3QpO1xuICBjb25zdCB0b3RhbFBvc3RzID0gY2hhcmFjdGVyTGlzdC5sZW5ndGg7XG4gIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWxQb3N0cyAvIHBvc3RzUGVyUGFnZSk7XG4gIGNvbnN0IGFjdHVhbFBhZ2VzID0gKHRvdGFsUG9zdHMgJSBwb3N0c1BlclBhZ2UgIT09IDApID8gdG90YWxQYWdlcyAtIDEgOiB0b3RhbFBhZ2VzO1xuICBjb25zdCByYW5kb21CRyA9IHVzZUJhY2tncm91bmQoKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q2hhcmFjdGVycygpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY3VycmVudFBhZ2UgPT09IGFjdHVhbFBhZ2VzKSB7XG4gICAgICBnZXRDaGFyYWN0ZXJzKGN1cnJBUElQYWdlKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50UGFnZV0pO1xuXG4gIGNvbnN0IHBhZ2luYXRlID0gKHBhZ2VOdW1iZXIpID0+IHtcbiAgICBpZiAocGFnZU51bWJlciA9PT0gYWN0dWFsUGFnZXMpIHtcbiAgICAgIG5leHRBUElQQWdlKCk7XG4gICAgfVxuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpO1xuICB9O1xuICBcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e2BiZy0ke3JhbmRvbUJHfWB9PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBteC1hdXRvIHNwYWNlLXktNlwiPlxuICAgICAgICB7XG4gICAgICAgICAgY3VycmVudENoYXJhY3RlcnNcbiAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtMiBtZDpnYXAtNCBsZzpnYXAtNlwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY3VycmVudENoYXJhY3RlcnMgJiYgY3VycmVudENoYXJhY3RlcnMubWFwKGl0ZW0gPT4gPENhcmQga2V5PXtpdGVtLmlkfSBkYXRhPXtpdGVtfT48L0NhcmQ+KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICAgIDxQYWdpbmF0ZVxuICAgICAgICAgICAgYWN0dWFsUGFnZXM9e2FjdHVhbFBhZ2VzfVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgICAgcGFnaW5hdGU9e3BhZ2luYXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSaWNrU3RvcmUiLCJ1c2VCYWNrZ3JvdW5kIiwiSGVhZGVyIiwiQ2FyZCIsIlBhZ2luYXRlIiwiSG9tZXBhZ2UiLCJjdXJyQVBJUGFnZSIsInN0YXRlIiwiY3VycmVudFBhZ2UiLCJuZXh0QVBJUEFnZSIsImluY3JlbWVudFBhZ2UiLCJjaGFyYWN0ZXJMaXN0IiwiY2hhcmFjdGVycyIsImdldENoYXJhY3RlcnMiLCJmZXRjaENoYXJhY3RlcnMiLCJzZXRDdXJyZW50UGFnZSIsInBvc3RzUGVyUGFnZSIsImluZGV4T2ZMYXN0UG9zdCIsImluZGV4T2ZGaXJzdFBvc3QiLCJjdXJyZW50Q2hhcmFjdGVycyIsInNsaWNlIiwidG90YWxQb3N0cyIsImxlbmd0aCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImFjdHVhbFBhZ2VzIiwicmFuZG9tQkciLCJwYWdpbmF0ZSIsInBhZ2VOdW1iZXIiLCJtYWluIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImRpdiIsIm1hcCIsIml0ZW0iLCJkYXRhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});