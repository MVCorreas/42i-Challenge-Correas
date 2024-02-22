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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_twoNumberSum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/twoNumberSum */ \"(app-pages-browser)/./src/Components/twoNumberSum.js\");\n/* harmony import */ var _Components_twoNumberSum__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Components_twoNumberSum__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [companyPayments, setCompanyPayments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array(5).fill(0));\n    const [totalSum, setTotalSum] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [highlightedPayments, setHighlightedPayments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleCalculate = ()=>{\n        const numbers = companyPayments;\n        const targetSum = parseInt(totalSum);\n        // Validate inputs\n        if (isNaN(targetSum) || targetSum < 1 || targetSum > 20 || numbers.some((num)=>num < 0 || num > 10)) {\n            setErrorMessage(\"Please enter valid numbers: 1) Total investment between 1 and 20, 2) Company payments between 0 and 10.\");\n            setSuccessMessage(\"\");\n            return;\n        }\n        // Call twoNumberSum function\n        const pair = (0,_Components_twoNumberSum__WEBPACK_IMPORTED_MODULE_3__.twoNumberSum)(numbers, targetSum);\n        if (pair.length === 2) {\n            // Initialize an array to keep track of numbers that have been highlighted\n            const highlightedNumbers = [];\n            // Iterate through each number in the pair\n            for (const num of pair){\n                // Find the index of the first occurrence of the number in the companyPayments array\n                const index = numbers.indexOf(num);\n                // Highlight the number if it hasn't been highlighted before\n                if (!highlightedNumbers.includes(index)) {\n                    highlightedNumbers.push(index);\n                }\n                // If the number appears more than once and it's the second occurrence in the pair, highlight it again\n                if (numbers.indexOf(num, index + 1) !== -1) {\n                    const secondIndex = numbers.indexOf(num, index + 1);\n                    if (!highlightedNumbers.includes(secondIndex)) {\n                        highlightedNumbers.push(secondIndex);\n                    }\n                }\n            }\n            // Set the highlightedPayments state with the indices of the highlighted numbers\n            setHighlightedPayments(highlightedNumbers);\n            setSuccessMessage(\"The pair of payments highlighted above successfully sum up to the target amount for investment.\");\n            setErrorMessage(\"\");\n        } else {\n            setHighlightedPayments([]);\n            setSuccessMessage(\"\");\n            setErrorMessage(\"No pair of payments found that sum up to the target amount.\");\n        }\n    };\n    // Update company payments array\n    const handlePaymentChange = (index, value)=>{\n        const newPayments = [\n            ...companyPayments\n        ];\n        newPayments[index] = parseInt(value);\n        setCompanyPayments(newPayments);\n    };\n    // Calculate total account balance\n    const totalBalance = companyPayments.reduce((acc, curr)=>acc + curr, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-b1585ffb7fdf680b\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"Investment Simulation\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"accountBalance\",\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"Total Account Balance:\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                id: \"accountBalance\",\n                value: totalBalance,\n                readOnly: true,\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 76,\n                columnNumber: 80\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 76,\n                columnNumber: 86\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"companyPayments\",\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"Company Payments:\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 78,\n                columnNumber: 65\n            }, this),\n            [\n                ...Array(companyPayments.length)\n            ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"company-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"jsx-b1585ffb7fdf680b\",\n                            children: \"Company \".concat(String.fromCharCode(65 + index))\n                        }, void 0, false, {\n                            fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            placeholder: \"Payment\",\n                            min: \"0\",\n                            max: \"10\",\n                            value: companyPayments[index],\n                            onChange: (e)=>handlePaymentChange(index, e.target.value),\n                            className: \"jsx-b1585ffb7fdf680b\" + \" \" + ((highlightedPayments.includes(index) ? \"highlight\" : \"\") || \"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                    lineNumber: 80,\n                    columnNumber: 11\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"investmentAmount\",\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"How much do you want to invest?\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                id: \"investmentAmount\",\n                min: \"1\",\n                max: \"20\",\n                value: totalSum,\n                onChange: (e)=>setTotalSum(e.target.value),\n                required: true,\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-b1585ffb7fdf680b\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 103,\n                columnNumber: 15\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleCalculate,\n                className: \"jsx-b1585ffb7fdf680b\",\n                children: \"Calculate\"\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"error-message\",\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 107,\n                columnNumber: 24\n            }, this),\n            successMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-b1585ffb7fdf680b\" + \" \" + \"success-message\",\n                children: successMessage\n            }, void 0, false, {\n                fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n                lineNumber: 108,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b1585ffb7fdf680b\",\n                children: \".highlight.jsx-b1585ffb7fdf680b{background-color:yellow}.error-message.jsx-b1585ffb7fdf680b{color:red}.success-message.jsx-b1585ffb7fdf680b{color:green}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vickycorreas/Desktop/Programacion/Job Hunt/42i-Challenge-Correas/src/app/page.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"LOrQtwxMcBRDuMAo2f9FhfvWy28=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWhDQyxPQUFPQyxZQUFZLENBQUMsS0FBS3pCOzs7Ozs7c0NBQ3pDLDhEQUFDZ0I7NEJBQ0NDLE1BQUs7NEJBQ0xTLGFBQVk7NEJBQ1pDLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0p0QixPQUFPNUIsZUFBZSxDQUFDc0IsTUFBTTs0QkFDN0I2QixVQUFVLENBQUNDLElBQU16QixvQkFBb0JMLE9BQU84QixFQUFFQyxNQUFNLENBQUN6QixLQUFLO3VFQUMvQ3RCLENBQUFBLG9CQUFvQmtCLFFBQVEsQ0FBQ0YsU0FBUyxjQUFjLEVBQUM7Ozs7Ozs7bUJBVDVCQTs7Ozs7MEJBYzVDLDhEQUFDYztnQkFBTUMsU0FBUTs7MEJBQW1COzs7Ozs7MEJBQ2xDLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsSUFBRztnQkFDSFMsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSnRCLE9BQU94QjtnQkFDUCtDLFVBQVUsQ0FBQ0MsSUFBTS9DLFlBQVkrQyxFQUFFQyxNQUFNLENBQUN6QixLQUFLO2dCQUMzQzBCLFFBQVE7Ozs7Ozs7MEJBQ1IsOERBQUNaOzs7Ozs7OzBCQUFLLDhEQUFDQTs7Ozs7OzswQkFFVCw4REFBQ2E7Z0JBQU9DLFNBQVM1Qzs7MEJBQWlCOzs7Ozs7WUFFakNKLDhCQUFnQiw4REFBQ2lEOzBEQUFZOzBCQUFpQmpEOzs7Ozs7WUFDOUNFLGdDQUFrQiw4REFBQytDOzBEQUFZOzBCQUFtQi9DOzs7Ozs7Ozs7Ozs7Ozs7O0FBZXpEO0dBdEh3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdHdvTnVtYmVyU3VtIH0gZnJvbSAnLi4vQ29tcG9uZW50cy90d29OdW1iZXJTdW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY29tcGFueVBheW1lbnRzLCBzZXRDb21wYW55UGF5bWVudHNdID0gdXNlU3RhdGUoQXJyYXkoNSkuZmlsbCgwKSk7XG4gIGNvbnN0IFt0b3RhbFN1bSwgc2V0VG90YWxTdW1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaGlnaGxpZ2h0ZWRQYXltZW50cywgc2V0SGlnaGxpZ2h0ZWRQYXltZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzdWNjZXNzTWVzc2FnZSwgc2V0U3VjY2Vzc01lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZUNhbGN1bGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBudW1iZXJzID0gY29tcGFueVBheW1lbnRzO1xuICAgIGNvbnN0IHRhcmdldFN1bSA9IHBhcnNlSW50KHRvdGFsU3VtKTtcbiAgXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gICAgaWYgKGlzTmFOKHRhcmdldFN1bSkgfHwgdGFyZ2V0U3VtIDwgMSB8fCB0YXJnZXRTdW0gPiAyMCB8fCBudW1iZXJzLnNvbWUobnVtID0+IG51bSA8IDAgfHwgbnVtID4gMTApKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ1BsZWFzZSBlbnRlciB2YWxpZCBudW1iZXJzOiAxKSBUb3RhbCBpbnZlc3RtZW50IGJldHdlZW4gMSBhbmQgMjAsIDIpIENvbXBhbnkgcGF5bWVudHMgYmV0d2VlbiAwIGFuZCAxMC4nKTtcbiAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKCcnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIC8vIENhbGwgdHdvTnVtYmVyU3VtIGZ1bmN0aW9uXG4gICAgY29uc3QgcGFpciA9IHR3b051bWJlclN1bShudW1iZXJzLCB0YXJnZXRTdW0pO1xuICBcbiAgICBpZiAocGFpci5sZW5ndGggPT09IDIpIHtcbiAgICAgIC8vIEluaXRpYWxpemUgYW4gYXJyYXkgdG8ga2VlcCB0cmFjayBvZiBudW1iZXJzIHRoYXQgaGF2ZSBiZWVuIGhpZ2hsaWdodGVkXG4gICAgICBjb25zdCBoaWdobGlnaHRlZE51bWJlcnMgPSBbXTtcbiAgXG4gICAgICAvLyBJdGVyYXRlIHRocm91Z2ggZWFjaCBudW1iZXIgaW4gdGhlIHBhaXJcbiAgICAgIGZvciAoY29uc3QgbnVtIG9mIHBhaXIpIHtcbiAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgdGhlIG51bWJlciBpbiB0aGUgY29tcGFueVBheW1lbnRzIGFycmF5XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbnVtYmVycy5pbmRleE9mKG51bSk7XG4gIFxuICAgICAgICAvLyBIaWdobGlnaHQgdGhlIG51bWJlciBpZiBpdCBoYXNuJ3QgYmVlbiBoaWdobGlnaHRlZCBiZWZvcmVcbiAgICAgICAgaWYgKCFoaWdobGlnaHRlZE51bWJlcnMuaW5jbHVkZXMoaW5kZXgpKSB7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWROdW1iZXJzLnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBJZiB0aGUgbnVtYmVyIGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UgYW5kIGl0J3MgdGhlIHNlY29uZCBvY2N1cnJlbmNlIGluIHRoZSBwYWlyLCBoaWdobGlnaHQgaXQgYWdhaW5cbiAgICAgICAgaWYgKG51bWJlcnMuaW5kZXhPZihudW0sIGluZGV4ICsgMSkgIT09IC0xKSB7XG4gICAgICAgICAgY29uc3Qgc2Vjb25kSW5kZXggPSBudW1iZXJzLmluZGV4T2YobnVtLCBpbmRleCArIDEpO1xuICAgICAgICAgIGlmICghaGlnaGxpZ2h0ZWROdW1iZXJzLmluY2x1ZGVzKHNlY29uZEluZGV4KSkge1xuICAgICAgICAgICAgaGlnaGxpZ2h0ZWROdW1iZXJzLnB1c2goc2Vjb25kSW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIFNldCB0aGUgaGlnaGxpZ2h0ZWRQYXltZW50cyBzdGF0ZSB3aXRoIHRoZSBpbmRpY2VzIG9mIHRoZSBoaWdobGlnaHRlZCBudW1iZXJzXG4gICAgICBzZXRIaWdobGlnaHRlZFBheW1lbnRzKGhpZ2hsaWdodGVkTnVtYmVycyk7XG4gICAgICBzZXRTdWNjZXNzTWVzc2FnZShgVGhlIHBhaXIgb2YgcGF5bWVudHMgaGlnaGxpZ2h0ZWQgYWJvdmUgc3VjY2Vzc2Z1bGx5IHN1bSB1cCB0byB0aGUgdGFyZ2V0IGFtb3VudCBmb3IgaW52ZXN0bWVudC5gKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEhpZ2hsaWdodGVkUGF5bWVudHMoW10pO1xuICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoJycpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdObyBwYWlyIG9mIHBheW1lbnRzIGZvdW5kIHRoYXQgc3VtIHVwIHRvIHRoZSB0YXJnZXQgYW1vdW50LicpO1xuICAgIH1cbiAgfTtcbiAgXG4gIFxuXG4gIC8vIFVwZGF0ZSBjb21wYW55IHBheW1lbnRzIGFycmF5XG4gIGNvbnN0IGhhbmRsZVBheW1lbnRDaGFuZ2UgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3UGF5bWVudHMgPSBbLi4uY29tcGFueVBheW1lbnRzXTtcbiAgICBuZXdQYXltZW50c1tpbmRleF0gPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgc2V0Q29tcGFueVBheW1lbnRzKG5ld1BheW1lbnRzKTtcbiAgfTtcblxuICAvLyBDYWxjdWxhdGUgdG90YWwgYWNjb3VudCBiYWxhbmNlXG4gIGNvbnN0IHRvdGFsQmFsYW5jZSA9IGNvbXBhbnlQYXltZW50cy5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3VyciwgMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkludmVzdG1lbnQgU2ltdWxhdGlvbjwvaDE+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImFjY291bnRCYWxhbmNlXCI+VG90YWwgQWNjb3VudCBCYWxhbmNlOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiYWNjb3VudEJhbGFuY2VcIiB2YWx1ZT17dG90YWxCYWxhbmNlfSByZWFkT25seSAvPjxiciAvPjxiciAvPlxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbXBhbnlQYXltZW50c1wiPkNvbXBhbnkgUGF5bWVudHM6PC9sYWJlbD48YnIgLz5cbiAgICAgICAge1suLi5BcnJheShjb21wYW55UGF5bWVudHMubGVuZ3RoKV0ubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueS1jb250YWluZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxoMz57YENvbXBhbnkgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaW5kZXgpfWB9PC9oMz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXltZW50XCJcbiAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgIG1heD1cIjEwXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlQYXltZW50c1tpbmRleF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlUGF5bWVudENoYW5nZShpbmRleCwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2hpZ2hsaWdodGVkUGF5bWVudHMuaW5jbHVkZXMoaW5kZXgpID8gJ2hpZ2hsaWdodCcgOiAnJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImludmVzdG1lbnRBbW91bnRcIj5Ib3cgbXVjaCBkbyB5b3Ugd2FudCB0byBpbnZlc3Q/PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgaWQ9XCJpbnZlc3RtZW50QW1vdW50XCJcbiAgICAgICAgbWluPVwiMVwiXG4gICAgICAgIG1heD1cIjIwXCJcbiAgICAgICAgdmFsdWU9e3RvdGFsU3VtfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvdGFsU3VtKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+PGJyIC8+PGJyIC8+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2FsY3VsYXRlfT5DYWxjdWxhdGU8L2J1dHRvbj5cblxuICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCI+e2Vycm9yTWVzc2FnZX08L3A+fVxuICAgICAge3N1Y2Nlc3NNZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cInN1Y2Nlc3MtbWVzc2FnZVwiPntzdWNjZXNzTWVzc2FnZX08L3A+fVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAuc3VjY2Vzcy1tZXNzYWdlIHtcbiAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ0d29OdW1iZXJTdW0iLCJIb21lIiwiY29tcGFueVBheW1lbnRzIiwic2V0Q29tcGFueVBheW1lbnRzIiwiQXJyYXkiLCJmaWxsIiwidG90YWxTdW0iLCJzZXRUb3RhbFN1bSIsImhpZ2hsaWdodGVkUGF5bWVudHMiLCJzZXRIaWdobGlnaHRlZFBheW1lbnRzIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwic3VjY2Vzc01lc3NhZ2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsImhhbmRsZUNhbGN1bGF0ZSIsIm51bWJlcnMiLCJ0YXJnZXRTdW0iLCJwYXJzZUludCIsImlzTmFOIiwic29tZSIsIm51bSIsInBhaXIiLCJsZW5ndGgiLCJoaWdobGlnaHRlZE51bWJlcnMiLCJpbmRleCIsImluZGV4T2YiLCJpbmNsdWRlcyIsInB1c2giLCJzZWNvbmRJbmRleCIsImhhbmRsZVBheW1lbnRDaGFuZ2UiLCJ2YWx1ZSIsIm5ld1BheW1lbnRzIiwidG90YWxCYWxhbmNlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImRpdiIsImgxIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZWFkT25seSIsImJyIiwibWFwIiwiXyIsImgzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGxhY2Vob2xkZXIiLCJtaW4iLCJtYXgiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});