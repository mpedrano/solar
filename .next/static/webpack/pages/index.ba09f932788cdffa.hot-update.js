"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentData, setCurrentData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [forecastData, setForecastData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const apiKey = \"c6ffe31e6f5570f80aa895592abfad1b\";\n    const currentUrl = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&appid=\").concat(apiKey);\n    const forecastUrl = \"https://api.openweathermap.org/data/2.5/forecast?q=\".concat(location, \"&appid=\").concat(apiKey);\n    const handleSearch = async ()=>{\n        try {\n            const currentRes = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(currentUrl);\n            const forecastRes = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(forecastUrl);\n            setCurrentData(currentRes.data);\n            setForecastData(forecastRes.data);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const currentDate = (timestamp)=>{\n        const date = new Date(timestamp * 1000);\n        return date.toLocaleDateString(\"en-US\", {\n            month: \"long\",\n            day: \"numeric\",\n            year: \"numeric\"\n        });\n    };\n    const forecastDate = (dateString)=>{\n        const date = new Date(Date.parse(dateString));\n        return date.toLocaleDateString(\"en-US\", {\n            month: \"long\",\n            day: \"numeric\",\n            year: \"numeric\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"OpenWeather\"\n                    }, void 0, false, {\n                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                                type: \"text\",\n                                placeholder: \"Enter Location\",\n                                value: location,\n                                onChange: (e)=>setLocation(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSearch,\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().data),\n                children: [\n                    currentData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().current),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().celsius),\n                                        children: [\n                                            Math.round(currentData.main.temp - 273.15).toFixed(1),\n                                            \"\\xb0C\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().city),\n                                        children: currentData.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().info),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Weather: \",\n                                            currentData.weather[0].main\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Wind speed: \",\n                                            currentData.wind.speed\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Last Updated: \",\n                                            currentDate(currentData.dt)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this),\n                    forecastData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().forecast),\n                        children: forecastData.list.filter((_, index)=>index % 8 === 0).slice(0, 6).map((forecast)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: forecastDate(forecast.dt_txt)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            Math.round(forecast.main.temp - 273.15),\n                                            \"\\xb0C\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: forecast.weather[0].main\n                                    }, void 0, false, {\n                                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Wind: \",\n                                            forecast.wind.speed\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, forecast.dt_txt, true, {\n                                fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Created by Mariela\"\n                    }, void 0, false, {\n                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"2022 - 2024\"\n                    }, void 0, false, {\n                        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marielapedrano/Desktop/weather-app-2024/src/pages/index.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"w9k9uGlAJpIVFkT8JxBv7atgczw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDeEI7Z0NBQTBCSCxXQUFXakMscUVBQVc7O2tEQUMvQyw4REFBQytDO2tEQUFHbEIsYUFBYStCLFNBQVNRLE1BQU07Ozs7OztrREFDaEMsOERBQUNyQjs7NENBQUdFLEtBQUtDLEtBQUssQ0FBQ1UsU0FBUzVCLElBQUksQ0FBQ21CLElBQUksR0FBRzs0Q0FBUTs7Ozs7OztrREFDNUMsOERBQUNKO2tEQUFHYSxTQUFTSixPQUFPLENBQUMsRUFBRSxDQUFDeEIsSUFBSTs7Ozs7O2tEQUM1Qiw4REFBQ2U7OzRDQUFFOzRDQUFPYSxTQUFTSCxJQUFJLENBQUNDLEtBQUs7Ozs7Ozs7OytCQUpyQkUsU0FBU1EsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OzswQkFXbkMsOERBQUNDO2dCQUFPcEMsV0FBV2pDLHVFQUFhOztrQ0FDOUIsOERBQUNtQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDWTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVg7R0FqR3dCOUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZTxJQ3VycmVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZm9yZWNhc3REYXRhLCBzZXRGb3JlY2FzdERhdGFdID0gdXNlU3RhdGU8SUZvcmVjYXN0IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xuICBjb25zdCBjdXJyZW50VXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHthcGlLZXl9YDtcbiAgY29uc3QgZm9yZWNhc3RVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHthcGlLZXl9YDtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRSZXMgPSBhd2FpdCBheGlvcy5nZXQoY3VycmVudFVybCk7XG4gICAgICBjb25zdCBmb3JlY2FzdFJlcyA9IGF3YWl0IGF4aW9zLmdldChmb3JlY2FzdFVybCk7XG5cbiAgICAgIHNldEN1cnJlbnREYXRhKGN1cnJlbnRSZXMuZGF0YSk7XG4gICAgICBzZXRGb3JlY2FzdERhdGEoZm9yZWNhc3RSZXMuZGF0YSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gKHRpbWVzdGFtcDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCAqIDEwMDApO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIlxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZvcmVjYXN0RGF0ZSA9IChkYXRlU3RyaW5nOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRlU3RyaW5nKSk7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiXG4gICAgfSk7XG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuYH1cbiAgICA+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxoMT5PcGVuV2VhdGhlcjwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTG9jYXRpb25cIlxuICAgICAgICAgICAgdmFsdWU9e2xvY2F0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2NhdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0+U2VhcmNoPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YX0+XG4gICAgICAgIHtjdXJyZW50RGF0YSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNlbHNpdXN9PntNYXRoLnJvdW5kKGN1cnJlbnREYXRhLm1haW4udGVtcCAtIDI3My4xNSkudG9GaXhlZCgxKX3CsEM8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNpdHl9PntjdXJyZW50RGF0YS5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgICAgICAgPHA+V2VhdGhlcjoge2N1cnJlbnREYXRhLndlYXRoZXJbMF0ubWFpbn08L3A+XG4gICAgICAgICAgICAgIDxwPldpbmQgc3BlZWQ6IHtjdXJyZW50RGF0YS53aW5kLnNwZWVkfTwvcD5cbiAgICAgICAgICAgICAgPHA+TGFzdCBVcGRhdGVkOiB7Y3VycmVudERhdGUoY3VycmVudERhdGEuZHQpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtmb3JlY2FzdERhdGEgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZWNhc3R9PlxuICAgICAgICAgICAge2ZvcmVjYXN0RGF0YS5saXN0XG4gICAgICAgICAgICAgIC5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCAlIDggPT09IDApXG4gICAgICAgICAgICAgIC5zbGljZSgwLCA2KVxuICAgICAgICAgICAgICAubWFwKChmb3JlY2FzdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmb3JlY2FzdC5kdF90eHR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgICAgICAgPHA+e2ZvcmVjYXN0RGF0ZShmb3JlY2FzdC5kdF90eHQpfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPntNYXRoLnJvdW5kKGZvcmVjYXN0Lm1haW4udGVtcCAtIDI3My4xNSl9wrBDPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+e2ZvcmVjYXN0LndlYXRoZXJbMF0ubWFpbn08L3A+XG4gICAgICAgICAgICAgICAgICA8cD5XaW5kOiB7Zm9yZWNhc3Qud2luZC5zcGVlZH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGgxPkNyZWF0ZWQgYnkgTWFyaWVsYTwvaDE+XG4gICAgICAgIDxwPjIwMjIgLSAyMDI0PC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIb21lIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJmb3JlY2FzdERhdGEiLCJzZXRGb3JlY2FzdERhdGEiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiY3VycmVudFVybCIsImZvcmVjYXN0VXJsIiwiaGFuZGxlU2VhcmNoIiwiY3VycmVudFJlcyIsImdldCIsImZvcmVjYXN0UmVzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImN1cnJlbnREYXRlIiwidGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtb250aCIsImRheSIsInllYXIiLCJmb3JlY2FzdERhdGUiLCJkYXRlU3RyaW5nIiwicGFyc2UiLCJtYWluIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaDEiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImN1cnJlbnQiLCJwIiwiY2Vsc2l1cyIsIk1hdGgiLCJyb3VuZCIsInRlbXAiLCJ0b0ZpeGVkIiwiY2l0eSIsIm5hbWUiLCJpbmZvIiwid2VhdGhlciIsIndpbmQiLCJzcGVlZCIsImR0IiwiZm9yZWNhc3QiLCJsaXN0IiwiZmlsdGVyIiwiXyIsImluZGV4Iiwic2xpY2UiLCJtYXAiLCJjYXJkIiwiZHRfdHh0IiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});