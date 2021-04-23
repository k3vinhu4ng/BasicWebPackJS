/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/AlertMe.js":
/*!***************************!*\
  !*** ./src/js/AlertMe.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ alertMe)
/* harmony export */ });
function alertMe(message) {
    let development = false;
    if(development === true) {
        alert('Hello ' + message);
    }
}



/***/ }),

/***/ "./src/js/ConsoleLog.js":
/*!******************************!*\
  !*** ./src/js/ConsoleLog.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLog)
/* harmony export */ });
function ConsoleLog(message) {
    let development = true;
    if(development === true) {
        console.log(message);
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConsoleLog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleLog.js */ "./src/js/ConsoleLog.js");
/* harmony import */ var _AlertMe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertMe */ "./src/js/AlertMe.js");




(function(){
    (0,_AlertMe__WEBPACK_IMPORTED_MODULE_1__.default)('Keith');
    (0,_ConsoleLog_js__WEBPACK_IMPORTED_MODULE_0__.default)(document);
    window.onload = function() {

        // create a couple of elements in an otherwise empty HTML page
        const heading = document.createElement("h1");
        const heading_text = document.createTextNode("Click here to make Boxes disappear.");
        const heading2 = document.createElement("h1");
        const heading_text2 = document.createTextNode("Click Here to Reset Boxes");
        heading.appendChild(heading_text);
        heading.style.color = "green";
        document.body.appendChild(heading);
        heading2.appendChild(heading_text2);
        document.body.appendChild(heading2);
        heading2.style.color = "red";
        heading2.style.border = "solid 1px black";
        heading2.onclick = function () {
            heading2.innerText = "Boxes are Reset!";
            heading2.style.border = "solid 1px blue";
            box1.style.backgroundColor = "aliceblue";
            box2.style.backgroundColor = "aliceblue";
            box3.style.backgroundColor = "aliceblue";
            box1.style.display = "block";
            box2.style.display = "block";
            box3.style.display = "block";
            heading.innerText = "Click here to make Boxes disappear."


        };

        heading.onclick = function(){

            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "none";
            heading.innerText = "Boxes are gone!";
            heading2.innerText = "Click Here to Reset Boxes";
        }
        const box1 = document.getElementById("box1");
        const box2 = document.getElementById("box2");
        const box3 = document.getElementById("box3");

        box1.onclick = function (){
            box1.style.backgroundColor = "red";
            heading2.innerText = "Click Here to Reset Boxes";
        }

        box2.onclick = function (){
            box2.style.backgroundColor = "green";
            heading2.innerText = "Click Here to Reset Boxes";
        }

        box3.onclick = function (){
            box3.style.backgroundColor = "blue";
            heading2.innerText = "Click Here to Reset Boxes";
        }




    }
})();
/*


 */


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0FsZXJ0TWUuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy8uL3NyYy9qcy9Db25zb2xlTG9nLmpzIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05hO0FBQzRCO0FBQ1Q7O0FBRWhDO0FBQ0EsSUFBSSxpREFBTztBQUNYLElBQUksdURBQVU7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGVydE1lKG1lc3NhZ2UpIHtcclxuICAgIGxldCBkZXZlbG9wbWVudCA9IGZhbHNlO1xyXG4gICAgaWYoZGV2ZWxvcG1lbnQgPT09IHRydWUpIHtcclxuICAgICAgICBhbGVydCgnSGVsbG8gJyArIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25zb2xlTG9nKG1lc3NhZ2UpIHtcclxuICAgIGxldCBkZXZlbG9wbWVudCA9IHRydWU7XHJcbiAgICBpZihkZXZlbG9wbWVudCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IENvbnNvbGVMb2cgZnJvbSAnLi9Db25zb2xlTG9nLmpzJztcclxuaW1wb3J0IGFsZXJ0TWUgZnJvbSBcIi4vQWxlcnRNZVwiO1xyXG5cclxuKGZ1bmN0aW9uKCl7XHJcbiAgICBhbGVydE1lKCdLZWl0aCcpO1xyXG4gICAgQ29uc29sZUxvZyhkb2N1bWVudCk7XHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIGNvdXBsZSBvZiBlbGVtZW50cyBpbiBhbiBvdGhlcndpc2UgZW1wdHkgSFRNTCBwYWdlXHJcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBjb25zdCBoZWFkaW5nX3RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNsaWNrIGhlcmUgdG8gbWFrZSBCb3hlcyBkaXNhcHBlYXIuXCIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmdfdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNsaWNrIEhlcmUgdG8gUmVzZXQgQm94ZXNcIik7XHJcbiAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZChoZWFkaW5nX3RleHQpO1xyXG4gICAgICAgIGhlYWRpbmcuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgICAgICBoZWFkaW5nMi5hcHBlbmRDaGlsZChoZWFkaW5nX3RleHQyKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRpbmcyKTtcclxuICAgICAgICBoZWFkaW5nMi5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgaGVhZGluZzIuc3R5bGUuYm9yZGVyID0gXCJzb2xpZCAxcHggYmxhY2tcIjtcclxuICAgICAgICBoZWFkaW5nMi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBoZWFkaW5nMi5pbm5lclRleHQgPSBcIkJveGVzIGFyZSBSZXNldCFcIjtcclxuICAgICAgICAgICAgaGVhZGluZzIuc3R5bGUuYm9yZGVyID0gXCJzb2xpZCAxcHggYmx1ZVwiO1xyXG4gICAgICAgICAgICBib3gxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYWxpY2VibHVlXCI7XHJcbiAgICAgICAgICAgIGJveDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJhbGljZWJsdWVcIjtcclxuICAgICAgICAgICAgYm94My5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImFsaWNlYmx1ZVwiO1xyXG4gICAgICAgICAgICBib3gxLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIGJveDIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgYm94My5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiQ2xpY2sgaGVyZSB0byBtYWtlIEJveGVzIGRpc2FwcGVhci5cIlxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaGVhZGluZy5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIGJveDEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBib3gyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgYm94My5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJCb3hlcyBhcmUgZ29uZSFcIjtcclxuICAgICAgICAgICAgaGVhZGluZzIuaW5uZXJUZXh0ID0gXCJDbGljayBIZXJlIHRvIFJlc2V0IEJveGVzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJveDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveDFcIik7XHJcbiAgICAgICAgY29uc3QgYm94MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm94MlwiKTtcclxuICAgICAgICBjb25zdCBib3gzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3gzXCIpO1xyXG5cclxuICAgICAgICBib3gxLm9uY2xpY2sgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgYm94MS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICBoZWFkaW5nMi5pbm5lclRleHQgPSBcIkNsaWNrIEhlcmUgdG8gUmVzZXQgQm94ZXNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJveDIub25jbGljayA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBib3gyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgaGVhZGluZzIuaW5uZXJUZXh0ID0gXCJDbGljayBIZXJlIHRvIFJlc2V0IEJveGVzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib3gzLm9uY2xpY2sgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgYm94My5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcclxuICAgICAgICAgICAgaGVhZGluZzIuaW5uZXJUZXh0ID0gXCJDbGljayBIZXJlIHRvIFJlc2V0IEJveGVzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxufSkoKTtcclxuLypcclxuXHJcblxyXG4gKi9cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=