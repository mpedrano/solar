/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./src/styles/Home.module.css":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./src/styles/Home.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Home_header__ZUWxe {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    width: 90%;\\n}\\n\\n.Home_input__gFHfg {\\n    border: 1px solid black;\\n    border-radius: 10px;\\n    padding-left: 1rem;\\n}\\n\\n.Home_data__qHLXF {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 2rem;\\n}\\n\\n.Home_current__Ph_ON {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 3rem;\\n    gap: 10rem;\\n    background: rgba(255, 255, 255, 0.2);\\n    border-radius: 15px;\\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\\n    border: 1px solid rgba(255, 255, 255, 0.3);\\n}\\n\\n.Home_city__lViGx {\\n    font-weight: bold;\\n    font-size: 2rem;\\n}\\n\\n.Home_celsius__MO3Bo {\\n    font-weight: bold;\\n    font-size: 4rem;\\n}\\n\\n.Home_forecast__II8u5 {\\n    display: flex;\\n    flex-wrap: wrap;\\n    gap: 1rem;\\n}\\n\\n.Home_card__HIlp_ {\\n    background: rgba(255, 255, 255, 0.2);\\n    border-radius: 15px;\\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\\n    border: 1px solid rgba(255, 255, 255, 0.3);\\n    padding: 2rem;\\n}\\n\\n.Home_icon__cxK0Z {\\n    padding: 20px;\\n}\\n\\n.Home_footer__wJNRn {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 3rem;\\n    width: 100%;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/Home.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,UAAU;IACV,oCAAoC;IACpC,mBAAmB;IACnB,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;AACb;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,yCAAyC;IACzC,0CAA0C;IAC1C,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,WAAW;AACf\",\"sourcesContent\":[\".header {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    width: 90%;\\n}\\n\\n.input {\\n    border: 1px solid black;\\n    border-radius: 10px;\\n    padding-left: 1rem;\\n}\\n\\n.data {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 2rem;\\n}\\n\\n.current {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 3rem;\\n    gap: 10rem;\\n    background: rgba(255, 255, 255, 0.2);\\n    border-radius: 15px;\\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\\n    border: 1px solid rgba(255, 255, 255, 0.3);\\n}\\n\\n.city {\\n    font-weight: bold;\\n    font-size: 2rem;\\n}\\n\\n.celsius {\\n    font-weight: bold;\\n    font-size: 4rem;\\n}\\n\\n.forecast {\\n    display: flex;\\n    flex-wrap: wrap;\\n    gap: 1rem;\\n}\\n\\n.card {\\n    background: rgba(255, 255, 255, 0.2);\\n    border-radius: 15px;\\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\\n    border: 1px solid rgba(255, 255, 255, 0.3);\\n    padding: 2rem;\\n}\\n\\n.icon {\\n    padding: 20px;\\n}\\n\\n.footer {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 3rem;\\n    width: 100%;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"Home_header__ZUWxe\",\n\t\"input\": \"Home_input__gFHfg\",\n\t\"data\": \"Home_data__qHLXF\",\n\t\"current\": \"Home_current__Ph_ON\",\n\t\"city\": \"Home_city__lViGx\",\n\t\"celsius\": \"Home_celsius__MO3Bo\",\n\t\"forecast\": \"Home_forecast__II8u5\",\n\t\"card\": \"Home_card__HIlp_\",\n\t\"icon\": \"Home_icon__cxK0Z\",\n\t\"footer\": \"Home_footer__wJNRn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLCtEQUErRCxvQkFBb0IsMEJBQTBCLHFDQUFxQyxpQkFBaUIsR0FBRyx3QkFBd0IsOEJBQThCLDBCQUEwQix5QkFBeUIsR0FBRyx1QkFBdUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRywwQkFBMEIsb0JBQW9CLHFDQUFxQywwQkFBMEIsb0JBQW9CLGlCQUFpQiwyQ0FBMkMsMEJBQTBCLGdEQUFnRCxpREFBaUQsR0FBRyx1QkFBdUIsd0JBQXdCLHNCQUFzQixHQUFHLDBCQUEwQix3QkFBd0Isc0JBQXNCLEdBQUcsMkJBQTJCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLEdBQUcsdUJBQXVCLDJDQUEyQywwQkFBMEIsZ0RBQWdELGlEQUFpRCxvQkFBb0IsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcseUJBQXlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixvQkFBb0Isa0JBQWtCLEdBQUcsT0FBTywyRkFBMkYsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLGtDQUFrQyxvQkFBb0IsMEJBQTBCLHFDQUFxQyxpQkFBaUIsR0FBRyxZQUFZLDhCQUE4QiwwQkFBMEIseUJBQXlCLEdBQUcsV0FBVyxvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLGNBQWMsb0JBQW9CLHFDQUFxQywwQkFBMEIsb0JBQW9CLGlCQUFpQiwyQ0FBMkMsMEJBQTBCLGdEQUFnRCxpREFBaUQsR0FBRyxXQUFXLHdCQUF3QixzQkFBc0IsR0FBRyxjQUFjLHdCQUF3QixzQkFBc0IsR0FBRyxlQUFlLG9CQUFvQixzQkFBc0IsZ0JBQWdCLEdBQUcsV0FBVywyQ0FBMkMsMEJBQTBCLGdEQUFnRCxpREFBaUQsb0JBQW9CLEdBQUcsV0FBVyxvQkFBb0IsR0FBRyxhQUFhLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixvQkFBb0Isa0JBQWtCLEdBQUcsbUJBQW1CO0FBQzlvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzYyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Ib21lX2hlYWRlcl9fWlVXeGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5Ib21lX2lucHV0X19nRkhmZyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi5Ib21lX2RhdGFfX3FITFhGIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uSG9tZV9jdXJyZW50X19QaF9PTiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgZ2FwOiAxMHJlbTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4uSG9tZV9jaXR5X19sVmlHeCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5Ib21lX2NlbHNpdXNfX01PM0JvIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLkhvbWVfZm9yZWNhc3RfX0lJOHU1IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5Ib21lX2NhcmRfX0hJbHBfIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uSG9tZV9pY29uX19jeEswWiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5Ib21lX2Zvb3Rlcl9fd0pOUm4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi5kYXRhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uY3VycmVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgZ2FwOiAxMHJlbTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4uY2l0eSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jZWxzaXVzIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcIkhvbWVfaGVhZGVyX19aVVd4ZVwiLFxuXHRcImlucHV0XCI6IFwiSG9tZV9pbnB1dF9fZ0ZIZmdcIixcblx0XCJkYXRhXCI6IFwiSG9tZV9kYXRhX19xSExYRlwiLFxuXHRcImN1cnJlbnRcIjogXCJIb21lX2N1cnJlbnRfX1BoX09OXCIsXG5cdFwiY2l0eVwiOiBcIkhvbWVfY2l0eV9fbFZpR3hcIixcblx0XCJjZWxzaXVzXCI6IFwiSG9tZV9jZWxzaXVzX19NTzNCb1wiLFxuXHRcImZvcmVjYXN0XCI6IFwiSG9tZV9mb3JlY2FzdF9fSUk4dTVcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19ISWxwX1wiLFxuXHRcImljb25cIjogXCJIb21lX2ljb25fX2N4SzBaXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX3dKTlJuXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./src/styles/Home.module.css\n"));

/***/ })

});