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

/***/ "./components/trending.items.tsx":
/*!***************************************!*\
  !*** ./components/trending.items.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _front_page_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front-page-item.component */ \"./components/front-page-item.component.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data */ \"./data/data.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _round_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./round-button */ \"./components/round-button.tsx\");\n/* harmony import */ var _styles_FrontImage_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/FrontImage.module.css */ \"./styles/FrontImage.module.css\");\n/* harmony import */ var _styles_FrontImage_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_FrontImage_module_css__WEBPACK_IMPORTED_MODULE_8__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  justify-content: center;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: block;\\n  background-color: lightgreen;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  gap: 3px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 1300px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  gap: 10px;\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  height: 700px;\\n  z-index: 3;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 0;\\n  margin: 0;\\n  position: relative;\\n  height: 450px;\\n  width: 1300px;\\n  overflow: hidden;\\n  transition: transform 250ms ease-in;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  height: 30px;\\n  width: 50px;\\n  z-index: 20;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TrendingSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"trending.items__TrendingSectionContainer\",\n    componentId: \"sc-2998864f-0\"\n})(_templateObject());\n_c = TrendingSectionContainer;\nconst TrendingItemsContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"trending.items__TrendingItemsContainer\",\n    componentId: \"sc-2998864f-1\"\n})(_templateObject1());\n_c1 = TrendingItemsContainer;\nconst ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"trending.items__ButtonContainer\",\n    componentId: \"sc-2998864f-2\"\n})(_templateObject2());\n_c2 = ButtonContainer;\nconst NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"trending.items__NavContainer\",\n    componentId: \"sc-2998864f-3\"\n})(_templateObject3());\n_c3 = NavContainer;\nconst SlidesContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"trending.items__SlidesContainer\",\n    componentId: \"sc-2998864f-4\"\n})(_templateObject4());\n_c4 = SlidesContainer;\nconst CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"trending.items__CarouselContainer\",\n    componentId: \"sc-2998864f-5\"\n})(_templateObject5());\n_c5 = CarouselContainer;\nconst TestButton = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].button.withConfig({\n    displayName: \"trending.items__TestButton\",\n    componentId: \"sc-2998864f-6\"\n})(_templateObject6());\nconst TrendingItems = ()=>{\n    _s();\n    const track = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const containerOne = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const containerTwo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    let slides;\n    let slideWidth;\n    const setContainerPosition = (slide, index)=>{\n        slide.style.left = \"\".concat(slideWidth * index, \"px\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        slides = Array.from(track.current.children);\n        setCurrentSlide(slides[0]);\n        slideWidth = slides[0].getBoundingClientRect().width;\n        slides.forEach(setContainerPosition);\n        console.log(track);\n    }, [\n        track\n    ]);\n    const handleForwardButtonClick = ()=>{\n        const nextContainer = currentSlide.nextElementSibling;\n        const amountToMove = nextContainer.style.left;\n        track.current.style.transform = \"translateX(-\".concat(amountToMove, \")\");\n        console.log(nextContainer, amountToMove);\n        setCurrentSlide(slides[1]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TrendingSectionContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                onClick: ()=>console.log(slides),\n                children: \"Trending now\"\n            }, void 0, false, {\n                fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TrendingItemsContainer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CarouselContainer, {\n                    ref: track,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SlidesContainer, {\n                            ref: containerOne,\n                            children: _data_data__WEBPACK_IMPORTED_MODULE_4__.data.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_front_page_item_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    ...item\n                                }, key, false, {\n                                    fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 64\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SlidesContainer, {\n                            ref: containerTwo,\n                            children: _data_data__WEBPACK_IMPORTED_MODULE_4__.dataTwo.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_front_page_item_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    ...item\n                                }, key, false, {\n                                    fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 67\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: \"/icons/arrow-back.svg\",\n                        alt: \"pointer-back\",\n                        width: 36,\n                        height: 36\n                    }, void 0, false, {\n                        fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_round_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                mainColor: \"green\",\n                                secondaryColor: \"transparent\",\n                                borderColor: \"green\",\n                                isPrimary: true\n                            }, void 0, false, {\n                                fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_round_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                mainColor: \"green\",\n                                secondaryColor: \"transparent\",\n                                borderColor: \"green\",\n                                isPrimary: true\n                            }, void 0, false, {\n                                fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_round_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                mainColor: \"green\",\n                                secondaryColor: \"transparent\",\n                                borderColor: \"green\",\n                                isPrimary: true\n                            }, void 0, false, {\n                                fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: \"/icons/arrow-forward.svg\",\n                        alt: \"pointer-forward\",\n                        width: 36,\n                        height: 36,\n                        onClick: handleForwardButtonClick,\n                        className: (_styles_FrontImage_module_css__WEBPACK_IMPORTED_MODULE_8___default().z)\n                    }, void 0, false, {\n                        fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oliver/Desktop/e-commerce_demo_app/components/trending.items.tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TrendingItems, \"APg/+fdrMP8x510bmij8/WoT7TQ=\");\n_c6 = TrendingItems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrendingItems);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"TrendingSectionContainer\");\n$RefreshReg$(_c1, \"TrendingItemsContainer\");\n$RefreshReg$(_c2, \"ButtonContainer\");\n$RefreshReg$(_c3, \"NavContainer\");\n$RefreshReg$(_c4, \"SlidesContainer\");\n$RefreshReg$(_c5, \"CarouselContainer\");\n$RefreshReg$(_c6, \"TrendingItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyZW5kaW5nLml0ZW1zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUY7QUFDbEI7QUFDMUI7QUFDRztBQUVYO0FBQ2dCO0FBQ0s7QUFFcEQsTUFBTVUsMkJBQTJCTix3RUFBVTs7OztLQUFyQ007QUFRTixNQUFNRSx5QkFBeUJSLHdFQUFVOzs7O01BQW5DUTtBQUtOLE1BQU1DLGtCQUFrQlQsd0VBQVU7Ozs7TUFBNUJTO0FBS04sTUFBTUMsZUFBZVYsd0VBQVU7Ozs7TUFBekJVO0FBTU4sTUFBTUMsa0JBQWtCWCx3RUFBVTs7OztNQUE1Qlc7QUFZTixNQUFNQyxvQkFBb0JaLHdFQUFVOzs7O01BQTlCWTtBQVNOLE1BQU1DLGFBQWFiLDJFQUFhOzs7O0FBTWhDLE1BQU1lLGdCQUFtQyxJQUFvQjs7SUFDekQsTUFBTUMsUUFBUW5CLDZDQUFNQSxDQUFNLElBQUk7SUFDOUIsTUFBTW9CLGVBQWVwQiw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUNoRCxNQUFNcUIsZUFBZXJCLDZDQUFNQSxDQUFpQixJQUFJO0lBQ2hELE1BQU0sQ0FBQ3NCLGNBQWNDLGdCQUFnQixHQUFHdEIsK0NBQVFBLENBQU0sSUFBSTtJQUMxRCxJQUFJdUI7SUFDSixJQUFJQztJQUVKLE1BQU1DLHVCQUF1QixDQUFDQyxPQUF1QkMsUUFBa0I7UUFDbkVELE1BQU1FLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEdBQXNCLE9BQW5CTCxhQUFhRyxPQUFNO0lBQzdDO0lBRUE3QixnREFBU0EsQ0FBQyxJQUFLO1FBQ1h5QixTQUFTTyxNQUFNQyxJQUFJLENBQUMsTUFBT0MsT0FBTyxDQUFvQkMsUUFBUTtRQUM5RFgsZ0JBQWdCQyxNQUFNLENBQUMsRUFBRTtRQUN6QkMsYUFBYUQsTUFBTSxDQUFDLEVBQUUsQ0FBQ1cscUJBQXFCLEdBQUdDLEtBQUs7UUFDcERaLE9BQU9hLE9BQU8sQ0FBQ1g7UUFDZlksUUFBUUMsR0FBRyxDQUFDcEI7SUFDaEIsR0FBRztRQUFDQTtLQUFNO0lBRVYsTUFBTXFCLDJCQUEyQixJQUFNO1FBQ25DLE1BQU1DLGdCQUFnQm5CLGFBQWFvQixrQkFBa0I7UUFDckQsTUFBTUMsZUFBZUYsY0FBY1osS0FBSyxDQUFDQyxJQUFJO1FBQzdDWCxNQUFNYyxPQUFPLENBQUNKLEtBQUssQ0FBQ2UsU0FBUyxHQUFHLGVBQTRCLE9BQWJELGNBQWE7UUFDNURMLFFBQVFDLEdBQUcsQ0FBQ0UsZUFBZUU7UUFDM0JwQixnQkFBZ0JDLE1BQU0sQ0FBQyxFQUFFO0lBQzdCO0lBSUEscUJBQ0ksOERBQUNmOzswQkFDRyw4REFBQ29DO2dCQUFHQyxTQUFTLElBQUlSLFFBQVFDLEdBQUcsQ0FBQ2Y7MEJBQVM7Ozs7OzswQkFDdEMsOERBQUNiOzBCQUNHLDRFQUFDSTtvQkFBa0JnQyxLQUFLNUI7O3NDQUNwQiw4REFBQ0w7NEJBQWdCaUMsS0FBSzNCO3NDQUVkaEIsZ0RBQVEsQ0FBQyxDQUFDNkMsTUFBaUJDLG9CQUFRLDhEQUFDaEQsa0VBQXNCQTtvQ0FBWSxHQUFHK0MsSUFBSTttQ0FBYkM7Ozs7Ozs7Ozs7c0NBR3hFLDhEQUFDcEM7NEJBQWdCaUMsS0FBSzFCO3NDQUVkaEIsbURBQVcsQ0FBQyxDQUFDNEMsTUFBaUJDLG9CQUFRLDhEQUFDaEQsa0VBQXNCQTtvQ0FBWSxHQUFHK0MsSUFBSTttQ0FBYkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNbkYsOERBQUNyQzs7a0NBQ0csOERBQUNQLG1EQUFLQTt3QkFBQzZDLEtBQUk7d0JBQXdCQyxLQUFJO3dCQUFlaEIsT0FBTzt3QkFBSWlCLFFBQVE7Ozs7OztrQ0FDekUsOERBQUN6Qzs7MENBQ0csOERBQUNMLHFEQUFpQkE7Z0NBQUMrQyxXQUFVO2dDQUFRQyxnQkFBZTtnQ0FDakNDLGFBQVk7Z0NBQVFDLFdBQVcsSUFBSTs7Ozs7OzBDQUN0RCw4REFBQ2xELHFEQUFpQkE7Z0NBQUMrQyxXQUFVO2dDQUFRQyxnQkFBZTtnQ0FBY0MsYUFBWTtnQ0FBUUMsV0FBVyxJQUFJOzs7Ozs7MENBQ3JHLDhEQUFDbEQscURBQWlCQTtnQ0FBQytDLFdBQVU7Z0NBQVFDLGdCQUFlO2dDQUFjQyxhQUFZO2dDQUFRQyxXQUFXLElBQUk7Ozs7Ozs7Ozs7OztrQ0FFekcsOERBQUNuRCxtREFBS0E7d0JBQUM2QyxLQUFJO3dCQUEyQkMsS0FBSTt3QkFBa0JoQixPQUFPO3dCQUFJaUIsUUFBUTt3QkFDdkVQLFNBQVNOO3dCQUEwQmtCLFdBQVdsRCx3RUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlFO0dBN0RNVTtNQUFBQTtBQStETiwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RyZW5kaW5nLml0ZW1zLnRzeD8zOTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnVuY3Rpb25Db21wb25lbnQsIFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGcm9udFBhZ2VJdGVtQ29tcG9uZW50IGZyb20gXCIuL2Zyb250LXBhZ2UtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge2RhdGEsIGRhdGFUd299IGZyb20gJy4uL2RhdGEvZGF0YSdcbmltcG9ydCB7SURhdGFJdGVtfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBDdXN0b21Sb3VuZEJ1dHRvbiBmcm9tIFwiLi9yb3VuZC1idXR0b25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Gcm9udEltYWdlLm1vZHVsZS5jc3NcIlxuXG5jb25zdCBUcmVuZGluZ1NlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuXG5jb25zdCBUcmVuZGluZ0l0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG5gXG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3B4O1xuYFxuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMzAwcHg7XG5gXG5jb25zdCBTbGlkZXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDcwMHB4O1xuICB6LWluZGV4OiAzO1xuYFxuXG5jb25zdCBDYXJvdXNlbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQ1MHB4O1xuICB3aWR0aDogMTMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbjtcbmBcbmNvbnN0IFRlc3RCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICB6LWluZGV4OiAyMDtcbmBcblxuY29uc3QgVHJlbmRpbmdJdGVtczogRnVuY3Rpb25Db21wb25lbnQgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcbiAgICBjb25zdCB0cmFjayA9IHVzZVJlZjxhbnk+KG51bGwpO1xuICAgIGNvbnN0IGNvbnRhaW5lck9uZSA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgY29udGFpbmVyVHdvID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGU8YW55PihudWxsKTtcbiAgICBsZXQgc2xpZGVzOiBhbnlbXTtcbiAgICBsZXQgc2xpZGVXaWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3Qgc2V0Q29udGFpbmVyUG9zaXRpb24gPSAoc2xpZGU6IEhUTUxEaXZFbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNsaWRlLnN0eWxlLmxlZnQgPSBgJHtzbGlkZVdpZHRoICogaW5kZXh9cHhgXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICBzbGlkZXMgPSBBcnJheS5mcm9tKCh0cmFjay5jdXJyZW50IGFzIEhUTUxEaXZFbGVtZW50KS5jaGlsZHJlbik7XG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShzbGlkZXNbMF0pO1xuICAgICAgICBzbGlkZVdpZHRoID0gc2xpZGVzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBzbGlkZXMuZm9yRWFjaChzZXRDb250YWluZXJQb3NpdGlvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRyYWNrKTtcbiAgICB9LCBbdHJhY2tdKTtcblxuICAgIGNvbnN0IGhhbmRsZUZvcndhcmRCdXR0b25DbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dENvbnRhaW5lciA9IGN1cnJlbnRTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IGFtb3VudFRvTW92ZSA9IG5leHRDb250YWluZXIuc3R5bGUubGVmdDtcbiAgICAgICAgdHJhY2suY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHthbW91bnRUb01vdmV9KWA7XG4gICAgICAgIGNvbnNvbGUubG9nKG5leHRDb250YWluZXIsIGFtb3VudFRvTW92ZSk7XG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShzbGlkZXNbMV0pO1xuICAgIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VHJlbmRpbmdTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgICAgICAgPGgxIG9uQ2xpY2s9eygpPT5jb25zb2xlLmxvZyhzbGlkZXMpfT5UcmVuZGluZyBub3c8L2gxPlxuICAgICAgICAgICAgPFRyZW5kaW5nSXRlbXNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17dHJhY2t9PlxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVzQ29udGFpbmVyIHJlZj17Y29udGFpbmVyT25lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoaXRlbTogSURhdGFJdGVtLCBrZXkpID0+IDxGcm9udFBhZ2VJdGVtQ29tcG9uZW50IGtleT17a2V5fSB7Li4uaXRlbX0vPilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXNDb250YWluZXIgcmVmPXtjb250YWluZXJUd299PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUd28ubWFwKChpdGVtOiBJRGF0YUl0ZW0sIGtleSkgPT4gPEZyb250UGFnZUl0ZW1Db21wb25lbnQga2V5PXtrZXl9IHsuLi5pdGVtfS8+KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlc0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxuXG4gICAgICAgICAgICA8L1RyZW5kaW5nSXRlbXNDb250YWluZXI+XG4gICAgICAgICAgICA8TmF2Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaWNvbnMvYXJyb3ctYmFjay5zdmdcIiBhbHQ9XCJwb2ludGVyLWJhY2tcIiB3aWR0aD17MzZ9IGhlaWdodD17MzZ9Lz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tUm91bmRCdXR0b24gbWFpbkNvbG9yPVwiZ3JlZW5cIiBzZWNvbmRhcnlDb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiZ3JlZW5cIiBpc1ByaW1hcnk9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVJvdW5kQnV0dG9uIG1haW5Db2xvcj1cImdyZWVuXCIgc2Vjb25kYXJ5Q29sb3I9XCJ0cmFuc3BhcmVudFwiIGJvcmRlckNvbG9yPVwiZ3JlZW5cIiBpc1ByaW1hcnk9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVJvdW5kQnV0dG9uIG1haW5Db2xvcj1cImdyZWVuXCIgc2Vjb25kYXJ5Q29sb3I9XCJ0cmFuc3BhcmVudFwiIGJvcmRlckNvbG9yPVwiZ3JlZW5cIiBpc1ByaW1hcnk9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ljb25zL2Fycm93LWZvcndhcmQuc3ZnXCIgYWx0PVwicG9pbnRlci1mb3J3YXJkXCIgd2lkdGg9ezM2fSBoZWlnaHQ9ezM2fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRm9yd2FyZEJ1dHRvbkNsaWNrfSBjbGFzc05hbWU9e3N0eWxlcy56fS8+XG4gICAgICAgICAgICA8L05hdkNvbnRhaW5lcj5cbiAgICAgICAgPC9UcmVuZGluZ1NlY3Rpb25Db250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVuZGluZ0l0ZW1zIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRnJvbnRQYWdlSXRlbUNvbXBvbmVudCIsInN0eWxlZCIsImRhdGEiLCJkYXRhVHdvIiwiSW1hZ2UiLCJDdXN0b21Sb3VuZEJ1dHRvbiIsInN0eWxlcyIsIlRyZW5kaW5nU2VjdGlvbkNvbnRhaW5lciIsImRpdiIsIlRyZW5kaW5nSXRlbXNDb250YWluZXIiLCJCdXR0b25Db250YWluZXIiLCJOYXZDb250YWluZXIiLCJTbGlkZXNDb250YWluZXIiLCJDYXJvdXNlbENvbnRhaW5lciIsIlRlc3RCdXR0b24iLCJidXR0b24iLCJUcmVuZGluZ0l0ZW1zIiwidHJhY2siLCJjb250YWluZXJPbmUiLCJjb250YWluZXJUd28iLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJzbGlkZXMiLCJzbGlkZVdpZHRoIiwic2V0Q29udGFpbmVyUG9zaXRpb24iLCJzbGlkZSIsImluZGV4Iiwic3R5bGUiLCJsZWZ0IiwiQXJyYXkiLCJmcm9tIiwiY3VycmVudCIsImNoaWxkcmVuIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUZvcndhcmRCdXR0b25DbGljayIsIm5leHRDb250YWluZXIiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhbW91bnRUb01vdmUiLCJ0cmFuc2Zvcm0iLCJoMSIsIm9uQ2xpY2siLCJyZWYiLCJtYXAiLCJpdGVtIiwia2V5Iiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwibWFpbkNvbG9yIiwic2Vjb25kYXJ5Q29sb3IiLCJib3JkZXJDb2xvciIsImlzUHJpbWFyeSIsImNsYXNzTmFtZSIsInoiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/trending.items.tsx\n"));

/***/ })

});