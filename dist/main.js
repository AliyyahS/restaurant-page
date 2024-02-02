/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createAboutPage = () => {\r\n    const aboutPage = document.createElement('div')\r\n    aboutPage.id = 'about-page'\r\n\r\n    const header = document.createElement('h1')\r\n    header.textContent = 'Come dine with us'\r\n\r\n    const openingTimes = document.createElement('h2')\r\n    openingTimes.textContent = 'Opening times'\r\n\r\n    const para1 = document.createElement('p')\r\n    para1.textContent = 'Monday - Saturday: 8:00am - 3:00pm'\r\n\r\n    const para2 = document.createElement('p')\r\n    para2.textContent = 'Sunday: 10:00am - 3:00pm'\r\n\r\n    const address = document.createElement('h2')\r\n    address.textContent = 'Address'\r\n\r\n    const para3 = document.createElement('p')\r\n    para3.textContent = '27 High Street CF10 8JQ Cardiff'\r\n\r\n    const reservations = document.createElement('h2')\r\n    reservations.textContent = 'Reservations'\r\n\r\n    const para4 = document.createElement('p')\r\n    para4.textContent = 'For group of 5 or more, contact +44 720 1012030'\r\n\r\n    const elements = [header, openingTimes, para1, para2, address, para3, reservations, para4]\r\n\r\n    elements.forEach((element) => {\r\n        aboutPage.appendChild(element)\r\n    })\r\n\r\n    return aboutPage\r\n}\r\n\r\nconst loadAboutPage = () => {\r\n    const contentDiv = document.querySelector('#content')\r\n    contentDiv.textContent = ''\r\n    contentDiv.appendChild(createAboutPage())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutPage);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHomepage = () => {\r\n    const homepage = document.createElement('div')\r\n    homepage.id = 'homepage-content'\r\n\r\n    const img = document.createElement('img')\r\n    img.id = 'homepage-img'\r\n    img.src = '../assets/brunch.jpg'\r\n    img.alt = 'Brunch food on a table'\r\n\r\n    const header = document.createElement('h1')\r\n    header.textContent = 'Cosy Corner Cardiff'\r\n\r\n    const description = document.createElement('p')\r\n    description.textContent = 'Cosy Corner, a brunch haven in the heart of the city, \\\r\n        invites you to enjoy a delightful menu featuring classic and innovative brunch options. \\\r\n        Our cafe exudes a cozy charm with inviting decor, comfortable seating, and a touch of rustic elegance. \\\r\n        Whether indoors or on our outdoor patio, Cosy Corner is the perfect spot for a leisurely brunch any day of the week. \\\r\n        Join us for a comforting and flavorful experience where every bite is a delight.'\r\n    \r\n    homepage.appendChild(img)\r\n    homepage.appendChild(header)\r\n    homepage.appendChild(description)\r\n\r\n    return homepage\r\n}\r\n\r\nconst loadHomepage = () => {\r\n    const contentDiv = document.querySelector('#content')\r\n    contentDiv.textContent = ''\r\n    contentDiv.appendChild(createHomepage())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomepage);\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nconst reset = () => {\r\n    const header = document.querySelector('header')\r\n    const headerBtns = header.querySelectorAll('button')\r\n    headerBtns.forEach((btn) => {\r\n        btn.classList.remove('active')\r\n    })\r\n};\r\n\r\n(() => {\r\n    const homeBtn = document.querySelector('#homeBtn')\r\n    const menuBtn = document.querySelector('#menuBtn')\r\n    const aboutBtn = document.querySelector('#aboutBtn')\r\n\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n      homeBtn.classList.add('active')\r\n      ;(0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()  \r\n    })\r\n\r\n    homeBtn.addEventListener('click', (e) => {\r\n        reset()\r\n        e.target.classList.add('active')\r\n        ;(0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    })\r\n\r\n    menuBtn.addEventListener('click', (e) => {\r\n        reset()\r\n        e.target.classList.add('active')\r\n        ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    })\r\n\r\n    aboutBtn.addEventListener('click', (e) => {\r\n        reset()\r\n        e.target.classList.add('active')\r\n        ;(0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    })\r\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenuDisplay = () => {\r\n    const menuDisplay = document.createElement('div')\r\n    menuDisplay.id = 'menu-page'\r\n\r\n    const menu = [\r\n        {\r\n            name: 'Pancakes',\r\n            description: 'A stack of 6 pancakes served with blueberries, raspberries, cream and syrup',\r\n            price: '£4.95',\r\n            imgSrc: '../assets/pancakes.jpg'\r\n        },\r\n        {\r\n            name: 'Avocado on Toast',\r\n            description: 'Mashed avocado on two slices of sourdough bread topped with tomato salsa',\r\n            price: '£4.95',\r\n            imgSrc: '../assets/avocado-toast.jpg'\r\n        },\r\n        {\r\n            name: 'Eggs Benedict',\r\n            description: 'Ham and poached egg on two English muffins topped with Hollandaise sauce',\r\n            price: '£5.95',\r\n            imgSrc: '../assets/eggs-benedict.jpg'\r\n        },\r\n        {\r\n            name: 'Eggs Royale',\r\n            description: 'Smoked salmon and poached egg two English muffins topped with Hollandaise sauce',\r\n            price: '£5.95',\r\n            imgSrc: '../assets/eggs-royale.jpg'\r\n        },\r\n        {\r\n            name: 'English Breakfast',\r\n            description: 'Two sausages, bacon, fried eggs, hash browns plus tomatoes, mushrooms, beans and toast',\r\n            price: '£6.95',\r\n            imgSrc: '../assets/english-breakfast.jpg'\r\n        },\r\n        {\r\n            name: 'Garden Breakfast',\r\n            description: 'Two vegetarian sausages and hash browns plus sliced avocado, tomatoes, mushrooms, beans and toast',\r\n            price: '£6.95',\r\n            imgSrc: '../assets/garden-breakfast.jpg'\r\n        }\r\n    ]\r\n\r\n    menu.forEach((item) => {\r\n        const container = document.createElement('div')\r\n        container.classList.add('menu-item')\r\n\r\n        const img = document.createElement('img')\r\n        img.src = item.imgSrc\r\n        img.alt = item.name\r\n\r\n        const itemName = document.createElement('h2')\r\n        itemName.textContent = item.name\r\n\r\n        const itemDesc = document.createElement('p')\r\n        itemDesc.textContent = item.description\r\n\r\n        const itemPrice = document.createElement('h3')\r\n        itemPrice.textContent = item.price\r\n\r\n        container.appendChild(img)\r\n        container.appendChild(itemName)\r\n        container.appendChild(itemDesc)\r\n        container.appendChild(itemPrice)\r\n\r\n        menuDisplay.appendChild(container)\r\n    })\r\n\r\n    return menuDisplay\r\n}\r\n\r\nconst loadMenu = () => {\r\n    const contentDiv = document.querySelector('#content')\r\n    contentDiv.textContent = ''\r\n    contentDiv.appendChild(createMenuDisplay())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;