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

/***/ "(app-pages-browser)/./src/store/rickStore.js":
/*!********************************!*\
  !*** ./src/store/rickStore.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useRickStore: function() { return /* binding */ useRickStore; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"(app-pages-browser)/./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand/middleware */ \"(app-pages-browser)/./node_modules/zustand/esm/middleware.mjs\");\n\n\nlet store = (set)=>({\n        currentPage: 1,\n        characters: [],\n        incrementPage: ()=>set((state)=>({\n                    currentPage: state.currentPage + 1\n                })),\n        fetchCharacters: async function() {\n            let page = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;\n            const withPage = page ? \"?page=\".concat(page) : \"\";\n            await fetch(\"/api/characters\".concat(withPage)).then((response)=>response.json()).then((data)=>{\n                const characters = data.data.results;\n                if (page) {\n                    set((state)=>{\n                        var _state_characters, _state;\n                        return {\n                            characters: (_state = state) === null || _state === void 0 ? void 0 : (_state_characters = _state.characters) === null || _state_characters === void 0 ? void 0 : _state_characters.concat(characters)\n                        };\n                    });\n                } else {\n                    set({\n                        characters\n                    });\n                }\n            });\n        },\n        activeSearch: false,\n        currentSearchPage: 1,\n        results: [],\n        incrementSearchPage: ()=>set((state)=>({\n                    currentSearchPage: state.currentSearchPage + 1\n                })),\n        searchCharacters: async function(name) {\n            let page = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;\n            let params = new URLSearchParams();\n            name && params.set(\"name\", name);\n            page && params.set(\"page\", page);\n            await fetch(\"/api/search?\".concat(params.toString())).then((response)=>response.json()).then((data)=>{\n                // console.log(data);\n                const results = data.data.results;\n                // if (page) {\n                //   set((state) => ({ searchResults: state?.searchResults?.concat(searchResults) }));\n                // } else {\n                set({\n                    results\n                });\n            // }\n            });\n        }\n    });\nstore = (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_0__.devtools)(store);\nconst useRickStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)(store);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9yaWNrU3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBQ2E7QUFHOUMsSUFBSUUsUUFBUyxDQUFDQyxNQUFTO1FBQ3JCQyxhQUFhO1FBQ2JDLFlBQVksRUFBRTtRQUNkQyxlQUFlLElBQU1ILElBQUksQ0FBQ0ksUUFBVztvQkFBRUgsYUFBYUcsTUFBTUgsV0FBVyxHQUFHO2dCQUFFO1FBQzFFSSxpQkFBaUI7Z0JBQVFDLHdFQUFPO1lBQzlCLE1BQU1DLFdBQVdELE9BQU8sU0FBYyxPQUFMQSxRQUFTO1lBQzFDLE1BQU1FLE1BQU0sa0JBQTJCLE9BQVRELFdBQzdCRSxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUE7Z0JBQ0osTUFBTVYsYUFBYVUsS0FBS0EsSUFBSSxDQUFDQyxPQUFPO2dCQUNwQyxJQUFJUCxNQUFNO29CQUNSTixJQUFJLENBQUNJOzRCQUF5QkEsbUJBQUFBOytCQUFkOzRCQUFFRixVQUFVLEdBQUVFLFNBQUFBLG1CQUFBQSw4QkFBQUEsb0JBQUFBLE9BQU9GLFVBQVUsY0FBakJFLHdDQUFBQSxrQkFBbUJVLE1BQU0sQ0FBQ1o7d0JBQVk7O2dCQUN0RSxPQUFPO29CQUNMRixJQUFJO3dCQUFFRTtvQkFBVztnQkFDbkI7WUFDRjtRQUNGO1FBQ0FhLGNBQWM7UUFDZEMsbUJBQW1CO1FBQ25CSCxTQUFTLEVBQUU7UUFDWEkscUJBQXFCLElBQU1qQixJQUFJLENBQUNJLFFBQVc7b0JBQUVZLG1CQUFtQlosTUFBTVksaUJBQWlCLEdBQUc7Z0JBQUU7UUFDNUZFLGtCQUFrQixlQUFPQztnQkFBTWIsd0VBQU87WUFFcEMsSUFBSWMsU0FBUyxJQUFJQztZQUNqQkYsUUFBUUMsT0FBT3BCLEdBQUcsQ0FBQyxRQUFRbUI7WUFDM0JiLFFBQVFjLE9BQU9wQixHQUFHLENBQUMsUUFBUU07WUFFM0IsTUFBTUUsTUFBTSxlQUFpQyxPQUFsQlksT0FBT0UsUUFBUSxLQUN2Q2IsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBO2dCQUNKLHFCQUFxQjtnQkFDckIsTUFBTUMsVUFBVUQsS0FBS0EsSUFBSSxDQUFDQyxPQUFPO2dCQUNqQyxjQUFjO2dCQUNkLHNGQUFzRjtnQkFDdEYsV0FBVztnQkFDWGIsSUFBSTtvQkFBRWE7Z0JBQVE7WUFDaEIsSUFBSTtZQUNOO1FBQ0Y7SUFDRjtBQUVBZCxRQUFRRCw0REFBUUEsQ0FBQ0M7QUFDVixNQUFNd0IsZUFBZTFCLCtDQUFNQSxDQUFDRSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9yaWNrU3RvcmUuanM/ZmFlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tICd6dXN0YW5kJztcbmltcG9ydCB7IGRldnRvb2xzIH0gZnJvbSAnenVzdGFuZC9taWRkbGV3YXJlJztcblxuXG5sZXQgc3RvcmUgPSAoKHNldCkgPT4gKHtcbiAgY3VycmVudFBhZ2U6IDEsXG4gIGNoYXJhY3RlcnM6IFtdLFxuICBpbmNyZW1lbnRQYWdlOiAoKSA9PiBzZXQoKHN0YXRlKSA9PiAoeyBjdXJyZW50UGFnZTogc3RhdGUuY3VycmVudFBhZ2UgKyAxIH0pKSxcbiAgZmV0Y2hDaGFyYWN0ZXJzOiBhc3luYyAoIHBhZ2UgPSBudWxsICkgPT4ge1xuICAgIGNvbnN0IHdpdGhQYWdlID0gcGFnZSA/IGA/cGFnZT0ke3BhZ2V9YCA6ICcnO1xuICAgIGF3YWl0IGZldGNoKGAvYXBpL2NoYXJhY3RlcnMke3dpdGhQYWdlfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc3QgY2hhcmFjdGVycyA9IGRhdGEuZGF0YS5yZXN1bHRzO1xuICAgICAgaWYgKHBhZ2UpIHtcbiAgICAgICAgc2V0KChzdGF0ZSkgPT4gKHsgY2hhcmFjdGVyczogc3RhdGU/LmNoYXJhY3RlcnM/LmNvbmNhdChjaGFyYWN0ZXJzKSB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXQoeyBjaGFyYWN0ZXJzIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgYWN0aXZlU2VhcmNoOiBmYWxzZSxcbiAgY3VycmVudFNlYXJjaFBhZ2U6IDEsXG4gIHJlc3VsdHM6IFtdLFxuICBpbmNyZW1lbnRTZWFyY2hQYWdlOiAoKSA9PiBzZXQoKHN0YXRlKSA9PiAoeyBjdXJyZW50U2VhcmNoUGFnZTogc3RhdGUuY3VycmVudFNlYXJjaFBhZ2UgKyAxIH0pKSxcbiAgc2VhcmNoQ2hhcmFjdGVyczogYXN5bmMgKG5hbWUsIHBhZ2UgPSBudWxsKSA9PiB7XG4gICAgXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBuYW1lICYmIHBhcmFtcy5zZXQoXCJuYW1lXCIsIG5hbWUpO1xuICAgIHBhZ2UgJiYgcGFyYW1zLnNldChcInBhZ2VcIiwgcGFnZSk7XG5cbiAgICBhd2FpdCBmZXRjaChgL2FwaS9zZWFyY2g/JHtwYXJhbXMudG9TdHJpbmcoKX1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZGF0YS5kYXRhLnJlc3VsdHM7XG4gICAgICAgIC8vIGlmIChwYWdlKSB7XG4gICAgICAgIC8vICAgc2V0KChzdGF0ZSkgPT4gKHsgc2VhcmNoUmVzdWx0czogc3RhdGU/LnNlYXJjaFJlc3VsdHM/LmNvbmNhdChzZWFyY2hSZXN1bHRzKSB9KSk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIHNldCh7IHJlc3VsdHMgfSk7XG4gICAgICAvLyB9XG4gICAgfSlcbiAgfSxcbn0pKVxuXG5zdG9yZSA9IGRldnRvb2xzKHN0b3JlKTtcbmV4cG9ydCBjb25zdCB1c2VSaWNrU3RvcmUgPSBjcmVhdGUoc3RvcmUpOyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJkZXZ0b29scyIsInN0b3JlIiwic2V0IiwiY3VycmVudFBhZ2UiLCJjaGFyYWN0ZXJzIiwiaW5jcmVtZW50UGFnZSIsInN0YXRlIiwiZmV0Y2hDaGFyYWN0ZXJzIiwicGFnZSIsIndpdGhQYWdlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInJlc3VsdHMiLCJjb25jYXQiLCJhY3RpdmVTZWFyY2giLCJjdXJyZW50U2VhcmNoUGFnZSIsImluY3JlbWVudFNlYXJjaFBhZ2UiLCJzZWFyY2hDaGFyYWN0ZXJzIiwibmFtZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwidXNlUmlja1N0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/rickStore.js\n"));

/***/ })

});