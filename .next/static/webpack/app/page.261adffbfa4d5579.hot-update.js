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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_twoNumberSum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/twoNumberSum */ \"(app-pages-browser)/./src/Components/twoNumberSum.js\");\n/* harmony import */ var _Components_twoNumberSum__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Components_twoNumberSum__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [companyPayments, setCompanyPayments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array(5).fill(0));\n    const [totalSum, setTotalSum] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [highlightedPayments, setHighlightedPayments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleCalculate = ()=>{\n        const numbers = companyPayments;\n        const targetSum = parseInt(totalSum);\n        // Validate inputs\n        if (isNaN(targetSum) || targetSum < 1 || targetSum > 20 || numbers.some((num)=>num < 0 || num > 10)) {\n            setErrorMessage(\"Please enter valid numbers: 1) Total investment between 1 and 20, 2) Company payments between 0 and 10.\");\n            setSuccessMessage(\"\");\n            return;\n        }\n        // Call twoNumberSum function\n        const pair = (0,_Components_twoNumberSum__WEBPACK_IMPORTED_MODULE_3__.twoNumberSum)(numbers, targetSum);\n        if (pair.length === 2) {\n            // Count occurrences of each number\n            const occurrences = {};\n            numbers.forEach((num)=>{\n                occurrences[num] = occurrences[num] ? occurrences[num] + 1 : 1;\n            });\n            // Initialize an array to keep track of numbers that have been highlighted\n            const highlightedNumbers = [];\n            // Iterate through each number in the pair\n            for (const num of pair){\n                // Find the index of the first occurrence of the number in the companyPayments array\n                const index = numbers.indexOf(num);\n                // Highlight the number if it hasn't been highlighted before\n                if (!highlightedNumbers.includes(index)) {\n                    highlightedNumbers.push(index);\n                }\n                // If the number appears more than once and it's the second occurrence in the pair, highlight it again\n                if (occurrences[num] >= 2) {\n                    const secondIndex = numbers.indexOf(num, index + 1);\n                    if (!highlightedNumbers.includes(secondIndex)) {\n                        highlightedNumbers.push(secondIndex);\n                    }\n                }\n            }\n            // Set the highlightedPayments state with the indices of the highlighted numbers\n            setHighlightedPayments(highlightedNumbers);\n            setSuccessMessage(\"The pair of payments highlighted above successfully sum up to the target amount for investment. If two amounts are repeated, you may choose the one that fit best according to your needs.\");\n            setErrorMessage(\"\");\n        } else {\n            setHighlightedPayments([]);\n            setSuccessMessage(\"\");\n            setErrorMessage(\"No pair of payments found that sum up to the target amount.\");\n        }\n    };\n    // Update company payments array\n    const handlePaymentChange = (index, value)=>{\n        const newPayments = [\n            ...companyPayments\n        ];\n        newPayments[index] = parseInt(value);\n        setCompanyPayments(newPayments);\n    };\n    // Calculate total account balance\n    const totalBalance = companyPayments.reduce((acc, curr)=>acc + curr, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-b1585ffb7fdf680b\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"Investment Simulation\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border border-gray-200 rounded-lg overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"text-xl font-bold px-4 py-2 bg-gray-200\",\n                        children: \"Total Account Balance:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                        lineNumber: 80,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"px-4 py-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"text-2xl font-bold\",\n                            children: totalBalance\n                        }, void 0, false, {\n                            fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                            lineNumber: 82,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                        lineNumber: 81,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                htmlFor: \"companyPayments\",\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"Company Payments:\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"table-auto border-collapse w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"jsx-b1585ffb7fdf680b\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"jsx-b1585ffb7fdf680b\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border bg-gray-200 px-4 py-2\",\n                                    children: \"Date\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border bg-gray-200 px-4 py-2\",\n                                    children: \"Company name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border bg-gray-200 px-4 py-2\",\n                                    children: \"Amount Received\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                            lineNumber: 89,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                        lineNumber: 88,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"jsx-b1585ffb7fdf680b\",\n                        children: [\n                            ...Array(companyPayments.length)\n                        ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"jsx-b1585ffb7fdf680b\" + \" \" + ((index % 2 === 0 ? \"bg-gray-100\" : \"bg-white\") || \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border px-4 py-2 text-center\",\n                                        children: \"02/22/2024\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border px-4 py-2 text-center\",\n                                        children: \"Company \".concat(String.fromCharCode(65 + index))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border px-4 py-2 text-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"number\",\n                                            placeholder: \"Payment\",\n                                            min: \"0\",\n                                            max: \"10\",\n                                            value: companyPayments[index],\n                                            onChange: (e)=>handlePaymentChange(index, e.target.value),\n                                            className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"w-full \".concat(highlightedPayments.includes(index) ? \"highlight\" : \"\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 11\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                lineNumber: 97,\n                                columnNumber: 7\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                        lineNumber: 95,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 87,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"investmentAmount\",\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"How much do you want to invest?\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                id: \"investmentAmount\",\n                min: \"1\",\n                max: \"20\",\n                value: totalSum,\n                onChange: (e)=>setTotalSum(e.target.value),\n                required: true,\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 126,\n                columnNumber: 15\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleCalculate,\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"Calculate\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, this),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"error-message\",\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 130,\n                columnNumber: 24\n            }, this),\n            successMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"success-message\",\n                children: successMessage\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 131,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b1585ffb7fdf680b\",\n                children: \".highlight.jsx-b1585ffb7fdf680b{background-color:yellow}.error-message.jsx-b1585ffb7fdf680b{color:red}.success-message.jsx-b1585ffb7fdf680b{color:green}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"LOrQtwxMcBRDuMAo2f9FhfvWy28=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWpDSiw4QkFBZ0IsOERBQUN5RDswREFBWTswQkFBaUJ6RDs7Ozs7O1lBQzlDRSxnQ0FBa0IsOERBQUN1RDswREFBWTswQkFBbUJ2RDs7Ozs7Ozs7Ozs7Ozs7OztBQWV6RDtHQTdJd0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHR3b051bWJlclN1bSB9IGZyb20gJy4uL0NvbXBvbmVudHMvdHdvTnVtYmVyU3VtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NvbXBhbnlQYXltZW50cywgc2V0Q29tcGFueVBheW1lbnRzXSA9IHVzZVN0YXRlKEFycmF5KDUpLmZpbGwoMCkpO1xuICBjb25zdCBbdG90YWxTdW0sIHNldFRvdGFsU3VtXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2hpZ2hsaWdodGVkUGF5bWVudHMsIHNldEhpZ2hsaWdodGVkUGF5bWVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgXG4gIGNvbnN0IGhhbmRsZUNhbGN1bGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBudW1iZXJzID0gY29tcGFueVBheW1lbnRzO1xuICAgIGNvbnN0IHRhcmdldFN1bSA9IHBhcnNlSW50KHRvdGFsU3VtKTtcbiAgXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gICAgaWYgKGlzTmFOKHRhcmdldFN1bSkgfHwgdGFyZ2V0U3VtIDwgMSB8fCB0YXJnZXRTdW0gPiAyMCB8fCBudW1iZXJzLnNvbWUobnVtID0+IG51bSA8IDAgfHwgbnVtID4gMTApKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ1BsZWFzZSBlbnRlciB2YWxpZCBudW1iZXJzOiAxKSBUb3RhbCBpbnZlc3RtZW50IGJldHdlZW4gMSBhbmQgMjAsIDIpIENvbXBhbnkgcGF5bWVudHMgYmV0d2VlbiAwIGFuZCAxMC4nKTtcbiAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKCcnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIC8vIENhbGwgdHdvTnVtYmVyU3VtIGZ1bmN0aW9uXG4gICAgY29uc3QgcGFpciA9IHR3b051bWJlclN1bShudW1iZXJzLCB0YXJnZXRTdW0pO1xuICBcbiAgICBpZiAocGFpci5sZW5ndGggPT09IDIpIHtcbiAgICAgIC8vIENvdW50IG9jY3VycmVuY2VzIG9mIGVhY2ggbnVtYmVyXG4gICAgICBjb25zdCBvY2N1cnJlbmNlcyA9IHt9O1xuICAgICAgbnVtYmVycy5mb3JFYWNoKG51bSA9PiB7XG4gICAgICAgIG9jY3VycmVuY2VzW251bV0gPSBvY2N1cnJlbmNlc1tudW1dID8gb2NjdXJyZW5jZXNbbnVtXSArIDEgOiAxO1xuICAgICAgfSk7XG4gIFxuICAgICAgLy8gSW5pdGlhbGl6ZSBhbiBhcnJheSB0byBrZWVwIHRyYWNrIG9mIG51bWJlcnMgdGhhdCBoYXZlIGJlZW4gaGlnaGxpZ2h0ZWRcbiAgICAgIGNvbnN0IGhpZ2hsaWdodGVkTnVtYmVycyA9IFtdO1xuICBcbiAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIG51bWJlciBpbiB0aGUgcGFpclxuICAgICAgZm9yIChjb25zdCBudW0gb2YgcGFpcikge1xuICAgICAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiB0aGUgbnVtYmVyIGluIHRoZSBjb21wYW55UGF5bWVudHMgYXJyYXlcbiAgICAgICAgY29uc3QgaW5kZXggPSBudW1iZXJzLmluZGV4T2YobnVtKTtcbiAgXG4gICAgICAgIC8vIEhpZ2hsaWdodCB0aGUgbnVtYmVyIGlmIGl0IGhhc24ndCBiZWVuIGhpZ2hsaWdodGVkIGJlZm9yZVxuICAgICAgICBpZiAoIWhpZ2hsaWdodGVkTnVtYmVycy5pbmNsdWRlcyhpbmRleCkpIHtcbiAgICAgICAgICBoaWdobGlnaHRlZE51bWJlcnMucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIElmIHRoZSBudW1iZXIgYXBwZWFycyBtb3JlIHRoYW4gb25jZSBhbmQgaXQncyB0aGUgc2Vjb25kIG9jY3VycmVuY2UgaW4gdGhlIHBhaXIsIGhpZ2hsaWdodCBpdCBhZ2FpblxuICAgICAgICBpZiAob2NjdXJyZW5jZXNbbnVtXSA+PSAyKSB7XG4gICAgICAgICAgY29uc3Qgc2Vjb25kSW5kZXggPSBudW1iZXJzLmluZGV4T2YobnVtLCBpbmRleCArIDEpO1xuICAgICAgICAgIGlmICghaGlnaGxpZ2h0ZWROdW1iZXJzLmluY2x1ZGVzKHNlY29uZEluZGV4KSkge1xuICAgICAgICAgICAgaGlnaGxpZ2h0ZWROdW1iZXJzLnB1c2goc2Vjb25kSW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIFNldCB0aGUgaGlnaGxpZ2h0ZWRQYXltZW50cyBzdGF0ZSB3aXRoIHRoZSBpbmRpY2VzIG9mIHRoZSBoaWdobGlnaHRlZCBudW1iZXJzXG4gICAgICBzZXRIaWdobGlnaHRlZFBheW1lbnRzKGhpZ2hsaWdodGVkTnVtYmVycyk7XG4gICAgICBzZXRTdWNjZXNzTWVzc2FnZShgVGhlIHBhaXIgb2YgcGF5bWVudHMgaGlnaGxpZ2h0ZWQgYWJvdmUgc3VjY2Vzc2Z1bGx5IHN1bSB1cCB0byB0aGUgdGFyZ2V0IGFtb3VudCBmb3IgaW52ZXN0bWVudC4gSWYgdHdvIGFtb3VudHMgYXJlIHJlcGVhdGVkLCB5b3UgbWF5IGNob29zZSB0aGUgb25lIHRoYXQgZml0IGJlc3QgYWNjb3JkaW5nIHRvIHlvdXIgbmVlZHMuYCk7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRIaWdobGlnaHRlZFBheW1lbnRzKFtdKTtcbiAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKCcnKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnTm8gcGFpciBvZiBwYXltZW50cyBmb3VuZCB0aGF0IHN1bSB1cCB0byB0aGUgdGFyZ2V0IGFtb3VudC4nKTtcbiAgICB9XG4gIH07XG4gIFxuICAvLyBVcGRhdGUgY29tcGFueSBwYXltZW50cyBhcnJheVxuICBjb25zdCBoYW5kbGVQYXltZW50Q2hhbmdlID0gKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5ld1BheW1lbnRzID0gWy4uLmNvbXBhbnlQYXltZW50c107XG4gICAgbmV3UGF5bWVudHNbaW5kZXhdID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIHNldENvbXBhbnlQYXltZW50cyhuZXdQYXltZW50cyk7XG4gIH07XG5cbiAgLy8gQ2FsY3VsYXRlIHRvdGFsIGFjY291bnQgYmFsYW5jZVxuICBjb25zdCB0b3RhbEJhbGFuY2UgPSBjb21wYW55UGF5bWVudHMucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIsIDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5JbnZlc3RtZW50IFNpbXVsYXRpb248L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgcHgtNCBweS0yIGJnLWdyYXktMjAwXCI+VG90YWwgQWNjb3VudCBCYWxhbmNlOjwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dG90YWxCYWxhbmNlfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgICA8aDIgaHRtbEZvcj1cImNvbXBhbnlQYXltZW50c1wiPkNvbXBhbnkgUGF5bWVudHM6PC9oMj5cbjx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvIGJvcmRlci1jb2xsYXBzZSB3LWZ1bGxcIj5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXIgYmctZ3JheS0yMDAgcHgtNCBweS0yXCI+RGF0ZTwvdGg+XG4gICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWdyYXktMjAwIHB4LTQgcHktMlwiPkNvbXBhbnkgbmFtZTwvdGg+XG4gICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWdyYXktMjAwIHB4LTQgcHktMlwiPkFtb3VudCBSZWNlaXZlZDwvdGg+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5PlxuICAgIHtbLi4uQXJyYXkoY29tcGFueVBheW1lbnRzLmxlbmd0aCldLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgIDx0ciBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2luZGV4ICUgMiA9PT0gMCA/ICdiZy1ncmF5LTEwMCcgOiAnYmctd2hpdGUnfT5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTIgdGV4dC1jZW50ZXJcIj4wMi8yMi8yMDI0PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTIgdGV4dC1jZW50ZXJcIj57YENvbXBhbnkgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaW5kZXgpfWB9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXltZW50XCJcbiAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgbWF4PVwiMTBcIlxuICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlQYXltZW50c1tpbmRleF19XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVBheW1lbnRDaGFuZ2UoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCAke2hpZ2hsaWdodGVkUGF5bWVudHMuaW5jbHVkZXMoaW5kZXgpID8gJ2hpZ2hsaWdodCcgOiAnJ31gfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICkpfVxuICA8L3Rib2R5PlxuPC90YWJsZT5cblxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImludmVzdG1lbnRBbW91bnRcIj5Ib3cgbXVjaCBkbyB5b3Ugd2FudCB0byBpbnZlc3Q/PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgaWQ9XCJpbnZlc3RtZW50QW1vdW50XCJcbiAgICAgICAgbWluPVwiMVwiXG4gICAgICAgIG1heD1cIjIwXCJcbiAgICAgICAgdmFsdWU9e3RvdGFsU3VtfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvdGFsU3VtKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+PGJyIC8+PGJyIC8+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2FsY3VsYXRlfT5DYWxjdWxhdGU8L2J1dHRvbj5cblxuICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCI+e2Vycm9yTWVzc2FnZX08L3A+fVxuICAgICAge3N1Y2Nlc3NNZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cInN1Y2Nlc3MtbWVzc2FnZVwiPntzdWNjZXNzTWVzc2FnZX08L3A+fVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAuc3VjY2Vzcy1tZXNzYWdlIHtcbiAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ0d29OdW1iZXJTdW0iLCJIb21lIiwiY29tcGFueVBheW1lbnRzIiwic2V0Q29tcGFueVBheW1lbnRzIiwiQXJyYXkiLCJmaWxsIiwidG90YWxTdW0iLCJzZXRUb3RhbFN1bSIsImhpZ2hsaWdodGVkUGF5bWVudHMiLCJzZXRIaWdobGlnaHRlZFBheW1lbnRzIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwic3VjY2Vzc01lc3NhZ2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsImhhbmRsZUNhbGN1bGF0ZSIsIm51bWJlcnMiLCJ0YXJnZXRTdW0iLCJwYXJzZUludCIsImlzTmFOIiwic29tZSIsIm51bSIsInBhaXIiLCJsZW5ndGgiLCJvY2N1cnJlbmNlcyIsImZvckVhY2giLCJoaWdobGlnaHRlZE51bWJlcnMiLCJpbmRleCIsImluZGV4T2YiLCJpbmNsdWRlcyIsInB1c2giLCJzZWNvbmRJbmRleCIsImhhbmRsZVBheW1lbnRDaGFuZ2UiLCJ2YWx1ZSIsIm5ld1BheW1lbnRzIiwidG90YWxCYWxhbmNlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImRpdiIsImgxIiwiaDIiLCJzcGFuIiwiaHRtbEZvciIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJfIiwidGQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1pbiIsIm1heCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImxhYmVsIiwiaWQiLCJyZXF1aXJlZCIsImJyIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});