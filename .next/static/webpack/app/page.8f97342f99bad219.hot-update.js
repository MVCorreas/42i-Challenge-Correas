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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_twoNumberSum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/twoNumberSum */ \"(app-pages-browser)/./src/Components/twoNumberSum.js\");\n/* harmony import */ var _Components_twoNumberSum__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Components_twoNumberSum__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [companyPayments, setCompanyPayments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array(5).fill(0));\n    const [totalSum, setTotalSum] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [highlightedPayments, setHighlightedPayments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleCalculate = ()=>{\n        const numbers = companyPayments;\n        const targetSum = parseInt(totalSum);\n        // Validate inputs\n        if (isNaN(targetSum) || targetSum < 1 || targetSum > 20 || numbers.some((num)=>num < 0 || num > 10)) {\n            setErrorMessage(\"Please enter valid numbers: 1) Total investment between 1 and 20, 2) Company payments between 0 and 10.\");\n            setSuccessMessage(\"\");\n            return;\n        }\n        // Call twoNumberSum function\n        const pair = (0,_Components_twoNumberSum__WEBPACK_IMPORTED_MODULE_3__.twoNumberSum)(numbers, targetSum);\n        if (pair.length === 2) {\n            // Count occurrences of each number\n            const occurrences = {};\n            numbers.forEach((num)=>{\n                occurrences[num] = occurrences[num] ? occurrences[num] + 1 : 1;\n            });\n            // Initialize an array to keep track of numbers that have been highlighted\n            const highlightedNumbers = [];\n            // Iterate through each number in the pair\n            for (const num of pair){\n                // Find the index of the first occurrence of the number in the companyPayments array\n                const index = numbers.indexOf(num);\n                // Highlight the number if it hasn't been highlighted before\n                if (!highlightedNumbers.includes(index)) {\n                    highlightedNumbers.push(index);\n                }\n                // If the number appears more than once and it's the second occurrence in the pair, highlight it again\n                if (occurrences[num] >= 2) {\n                    const secondIndex = numbers.indexOf(num, index + 1);\n                    if (!highlightedNumbers.includes(secondIndex)) {\n                        highlightedNumbers.push(secondIndex);\n                    }\n                }\n            }\n            // Set the highlightedPayments state with the indices of the highlighted numbers\n            setHighlightedPayments(highlightedNumbers);\n            setSuccessMessage(\"The pair of payments highlighted above successfully sum up to the target amount for investment. If two amounts are repeated, you may choose the one that fit best according to your needs.\");\n            setErrorMessage(\"\");\n        } else {\n            setHighlightedPayments([]);\n            setSuccessMessage(\"\");\n            setErrorMessage(\"No pair of payments found that sum up to the target amount.\");\n        }\n    };\n    // Update company payments array\n    const handlePaymentChange = (index, value)=>{\n        const newPayments = [\n            ...companyPayments\n        ];\n        newPayments[index] = parseInt(value);\n        setCompanyPayments(newPayments);\n    };\n    // Calculate total account balance\n    const totalBalance = companyPayments.reduce((acc, curr)=>acc + curr, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-b1585ffb7fdf680b\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"Investment Simulation\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border border-gray-200 rounded-lg overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"text-xl font-bold px-4 py-2 bg-gray-200\",\n                        children: \"Total Account Balance:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                        lineNumber: 80,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"px-4 py-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"text-2.5xl font-bold\",\n                                children: \"$\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                lineNumber: 82,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"account-balance\",\n                                children: totalBalance\n                            }, void 0, false, {\n                                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                lineNumber: 83,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                        lineNumber: 81,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                htmlFor: \"companyPayments\",\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"Company Payments:\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"table-auto border-collapse w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"jsx-b1585ffb7fdf680b\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"jsx-b1585ffb7fdf680b\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border bg-gray-200 px-4 py-2\",\n                                    children: \"Date\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border bg-gray-200 px-4 py-2\",\n                                    children: \"Company name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border bg-gray-200 px-4 py-2\",\n                                    children: \"Amount Received\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                            lineNumber: 92,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                        lineNumber: 91,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"jsx-b1585ffb7fdf680b\",\n                        children: [\n                            ...Array(companyPayments.length)\n                        ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"jsx-b1585ffb7fdf680b\" + \" \" + ((index % 2 === 0 ? \"bg-gray-100\" : \"bg-white\") || \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border px-4 py-2 text-center\",\n                                        children: \"02/22/2024\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border px-4 py-2 text-center\",\n                                        children: \"Company \".concat(String.fromCharCode(65 + index))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"border px-4 py-2 text-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"number\",\n                                            placeholder: \"Payment\",\n                                            min: \"0\",\n                                            max: \"10\",\n                                            value: companyPayments[index],\n                                            onChange: (e)=>handlePaymentChange(index, e.target.value),\n                                            className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"w-full \".concat(highlightedPayments.includes(index) ? \"highlight\" : \"\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 11\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                                lineNumber: 100,\n                                columnNumber: 7\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                        lineNumber: 98,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 90,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"investmentAmount\",\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"How much do you want to invest?\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                id: \"investmentAmount\",\n                min: \"1\",\n                max: \"20\",\n                value: totalSum,\n                onChange: (e)=>setTotalSum(e.target.value),\n                required: true,\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 129,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 129,\n                columnNumber: 15\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleCalculate,\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"Calculate\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"error-message\",\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 133,\n                columnNumber: 24\n            }, this),\n            successMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"success-message\",\n                children: successMessage\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 134,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b1585ffb7fdf680b\",\n                children: \".highlight.jsx-b1585ffb7fdf680b{background-color:yellow}.error-message.jsx-b1585ffb7fdf680b{color:red}.success-message.jsx-b1585ffb7fdf680b{color:green}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"LOrQtwxMcBRDuMAo2f9FhfvWy28=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQztnQkFBT0MsU0FBU3BEOzswQkFBaUI7Ozs7OztZQUVqQ0osOEJBQWdCLDhEQUFDeUQ7MERBQVk7MEJBQWlCekQ7Ozs7OztZQUM5Q0UsZ0NBQWtCLDhEQUFDdUQ7MERBQVk7MEJBQW1CdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlekQ7R0FoSndCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0d29OdW1iZXJTdW0gfSBmcm9tICcuLi9Db21wb25lbnRzL3R3b051bWJlclN1bSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjb21wYW55UGF5bWVudHMsIHNldENvbXBhbnlQYXltZW50c10gPSB1c2VTdGF0ZShBcnJheSg1KS5maWxsKDApKTtcbiAgY29uc3QgW3RvdGFsU3VtLCBzZXRUb3RhbFN1bV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtoaWdobGlnaHRlZFBheW1lbnRzLCBzZXRIaWdobGlnaHRlZFBheW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3N1Y2Nlc3NNZXNzYWdlLCBzZXRTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIFxuICBjb25zdCBoYW5kbGVDYWxjdWxhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbnVtYmVycyA9IGNvbXBhbnlQYXltZW50cztcbiAgICBjb25zdCB0YXJnZXRTdW0gPSBwYXJzZUludCh0b3RhbFN1bSk7XG4gIFxuICAgIC8vIFZhbGlkYXRlIGlucHV0c1xuICAgIGlmIChpc05hTih0YXJnZXRTdW0pIHx8IHRhcmdldFN1bSA8IDEgfHwgdGFyZ2V0U3VtID4gMjAgfHwgbnVtYmVycy5zb21lKG51bSA9PiBudW0gPCAwIHx8IG51bSA+IDEwKSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2UgZW50ZXIgdmFsaWQgbnVtYmVyczogMSkgVG90YWwgaW52ZXN0bWVudCBiZXR3ZWVuIDEgYW5kIDIwLCAyKSBDb21wYW55IHBheW1lbnRzIGJldHdlZW4gMCBhbmQgMTAuJyk7XG4gICAgICBzZXRTdWNjZXNzTWVzc2FnZSgnJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICAvLyBDYWxsIHR3b051bWJlclN1bSBmdW5jdGlvblxuICAgIGNvbnN0IHBhaXIgPSB0d29OdW1iZXJTdW0obnVtYmVycywgdGFyZ2V0U3VtKTtcbiAgXG4gICAgaWYgKHBhaXIubGVuZ3RoID09PSAyKSB7XG4gICAgICAvLyBDb3VudCBvY2N1cnJlbmNlcyBvZiBlYWNoIG51bWJlclxuICAgICAgY29uc3Qgb2NjdXJyZW5jZXMgPSB7fTtcbiAgICAgIG51bWJlcnMuZm9yRWFjaChudW0gPT4ge1xuICAgICAgICBvY2N1cnJlbmNlc1tudW1dID0gb2NjdXJyZW5jZXNbbnVtXSA/IG9jY3VycmVuY2VzW251bV0gKyAxIDogMTtcbiAgICAgIH0pO1xuICBcbiAgICAgIC8vIEluaXRpYWxpemUgYW4gYXJyYXkgdG8ga2VlcCB0cmFjayBvZiBudW1iZXJzIHRoYXQgaGF2ZSBiZWVuIGhpZ2hsaWdodGVkXG4gICAgICBjb25zdCBoaWdobGlnaHRlZE51bWJlcnMgPSBbXTtcbiAgXG4gICAgICAvLyBJdGVyYXRlIHRocm91Z2ggZWFjaCBudW1iZXIgaW4gdGhlIHBhaXJcbiAgICAgIGZvciAoY29uc3QgbnVtIG9mIHBhaXIpIHtcbiAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgdGhlIG51bWJlciBpbiB0aGUgY29tcGFueVBheW1lbnRzIGFycmF5XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbnVtYmVycy5pbmRleE9mKG51bSk7XG4gIFxuICAgICAgICAvLyBIaWdobGlnaHQgdGhlIG51bWJlciBpZiBpdCBoYXNuJ3QgYmVlbiBoaWdobGlnaHRlZCBiZWZvcmVcbiAgICAgICAgaWYgKCFoaWdobGlnaHRlZE51bWJlcnMuaW5jbHVkZXMoaW5kZXgpKSB7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWROdW1iZXJzLnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBJZiB0aGUgbnVtYmVyIGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UgYW5kIGl0J3MgdGhlIHNlY29uZCBvY2N1cnJlbmNlIGluIHRoZSBwYWlyLCBoaWdobGlnaHQgaXQgYWdhaW5cbiAgICAgICAgaWYgKG9jY3VycmVuY2VzW251bV0gPj0gMikge1xuICAgICAgICAgIGNvbnN0IHNlY29uZEluZGV4ID0gbnVtYmVycy5pbmRleE9mKG51bSwgaW5kZXggKyAxKTtcbiAgICAgICAgICBpZiAoIWhpZ2hsaWdodGVkTnVtYmVycy5pbmNsdWRlcyhzZWNvbmRJbmRleCkpIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkTnVtYmVycy5wdXNoKHNlY29uZEluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyBTZXQgdGhlIGhpZ2hsaWdodGVkUGF5bWVudHMgc3RhdGUgd2l0aCB0aGUgaW5kaWNlcyBvZiB0aGUgaGlnaGxpZ2h0ZWQgbnVtYmVyc1xuICAgICAgc2V0SGlnaGxpZ2h0ZWRQYXltZW50cyhoaWdobGlnaHRlZE51bWJlcnMpO1xuICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoYFRoZSBwYWlyIG9mIHBheW1lbnRzIGhpZ2hsaWdodGVkIGFib3ZlIHN1Y2Nlc3NmdWxseSBzdW0gdXAgdG8gdGhlIHRhcmdldCBhbW91bnQgZm9yIGludmVzdG1lbnQuIElmIHR3byBhbW91bnRzIGFyZSByZXBlYXRlZCwgeW91IG1heSBjaG9vc2UgdGhlIG9uZSB0aGF0IGZpdCBiZXN0IGFjY29yZGluZyB0byB5b3VyIG5lZWRzLmApO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SGlnaGxpZ2h0ZWRQYXltZW50cyhbXSk7XG4gICAgICBzZXRTdWNjZXNzTWVzc2FnZSgnJyk7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ05vIHBhaXIgb2YgcGF5bWVudHMgZm91bmQgdGhhdCBzdW0gdXAgdG8gdGhlIHRhcmdldCBhbW91bnQuJyk7XG4gICAgfVxuICB9O1xuICBcbiAgLy8gVXBkYXRlIGNvbXBhbnkgcGF5bWVudHMgYXJyYXlcbiAgY29uc3QgaGFuZGxlUGF5bWVudENoYW5nZSA9IChpbmRleCwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdQYXltZW50cyA9IFsuLi5jb21wYW55UGF5bWVudHNdO1xuICAgIG5ld1BheW1lbnRzW2luZGV4XSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICBzZXRDb21wYW55UGF5bWVudHMobmV3UGF5bWVudHMpO1xuICB9O1xuXG4gIC8vIENhbGN1bGF0ZSB0b3RhbCBhY2NvdW50IGJhbGFuY2VcbiAgY29uc3QgdG90YWxCYWxhbmNlID0gY29tcGFueVBheW1lbnRzLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLCAwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+SW52ZXN0bWVudCBTaW11bGF0aW9uPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHB4LTQgcHktMiBiZy1ncmF5LTIwMFwiPlRvdGFsIEFjY291bnQgQmFsYW5jZTo8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yLjV4bCBmb250LWJvbGRcIj4kPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhY2NvdW50LWJhbGFuY2VcIj57dG90YWxCYWxhbmNlfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cblxuICAgICAgPGgyIGh0bWxGb3I9XCJjb21wYW55UGF5bWVudHNcIj5Db21wYW55IFBheW1lbnRzOjwvaDI+XG48dGFibGUgY2xhc3NOYW1lPVwidGFibGUtYXV0byBib3JkZXItY29sbGFwc2Ugdy1mdWxsXCI+XG4gIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWdyYXktMjAwIHB4LTQgcHktMlwiPkRhdGU8L3RoPlxuICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlciBiZy1ncmF5LTIwMCBweC00IHB5LTJcIj5Db21wYW55IG5hbWU8L3RoPlxuICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlciBiZy1ncmF5LTIwMCBweC00IHB5LTJcIj5BbW91bnQgUmVjZWl2ZWQ8L3RoPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgICB7Wy4uLkFycmF5KGNvbXBhbnlQYXltZW50cy5sZW5ndGgpXS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICA8dHIga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtpbmRleCAlIDIgPT09IDAgPyAnYmctZ3JheS0xMDAnIDogJ2JnLXdoaXRlJ30+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yIHRleHQtY2VudGVyXCI+MDIvMjIvMjAyNDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yIHRleHQtY2VudGVyXCI+e2BDb21wYW55ICR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGluZGV4KX1gfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGF5bWVudFwiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjEwXCJcbiAgICAgICAgICAgIHZhbHVlPXtjb21wYW55UGF5bWVudHNbaW5kZXhdfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVQYXltZW50Q2hhbmdlKGluZGV4LCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgJHtoaWdobGlnaHRlZFBheW1lbnRzLmluY2x1ZGVzKGluZGV4KSA/ICdoaWdobGlnaHQnIDogJyd9YH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApKX1cbiAgPC90Ym9keT5cbjwvdGFibGU+XG5cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnZlc3RtZW50QW1vdW50XCI+SG93IG11Y2ggZG8geW91IHdhbnQgdG8gaW52ZXN0PzwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIGlkPVwiaW52ZXN0bWVudEFtb3VudFwiXG4gICAgICAgIG1pbj1cIjFcIlxuICAgICAgICBtYXg9XCIyMFwiXG4gICAgICAgIHZhbHVlPXt0b3RhbFN1bX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb3RhbFN1bShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPjxiciAvPjxiciAvPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNhbGN1bGF0ZX0+Q2FsY3VsYXRlPC9idXR0b24+XG5cbiAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPntlcnJvck1lc3NhZ2V9PC9wPn1cbiAgICAgIHtzdWNjZXNzTWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9XCJzdWNjZXNzLW1lc3NhZ2VcIj57c3VjY2Vzc01lc3NhZ2V9PC9wPn1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Y2Nlc3MtbWVzc2FnZSB7XG4gICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidHdvTnVtYmVyU3VtIiwiSG9tZSIsImNvbXBhbnlQYXltZW50cyIsInNldENvbXBhbnlQYXltZW50cyIsIkFycmF5IiwiZmlsbCIsInRvdGFsU3VtIiwic2V0VG90YWxTdW0iLCJoaWdobGlnaHRlZFBheW1lbnRzIiwic2V0SGlnaGxpZ2h0ZWRQYXltZW50cyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJoYW5kbGVDYWxjdWxhdGUiLCJudW1iZXJzIiwidGFyZ2V0U3VtIiwicGFyc2VJbnQiLCJpc05hTiIsInNvbWUiLCJudW0iLCJwYWlyIiwibGVuZ3RoIiwib2NjdXJyZW5jZXMiLCJmb3JFYWNoIiwiaGlnaGxpZ2h0ZWROdW1iZXJzIiwiaW5kZXgiLCJpbmRleE9mIiwiaW5jbHVkZXMiLCJwdXNoIiwic2Vjb25kSW5kZXgiLCJoYW5kbGVQYXltZW50Q2hhbmdlIiwidmFsdWUiLCJuZXdQYXltZW50cyIsInRvdGFsQmFsYW5jZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJkaXYiLCJoMSIsImgyIiwic3BhbiIsImh0bWxGb3IiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiXyIsInRkIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJtaW4iLCJtYXgiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJsYWJlbCIsImlkIiwicmVxdWlyZWQiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});