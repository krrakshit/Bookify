/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ancestors";
exports.ids = ["vendor-chunks/ancestors"];
exports.modules = {

/***/ "(ssr)/./node_modules/ancestors/index.js":
/*!*****************************************!*\
  !*** ./node_modules/ancestors/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("module.exports = parents\n\nfunction parents(node, filter) {\n  var out = []\n\n  filter = filter || noop\n\n  do {\n    out.push(node)\n    node = node.parentNode\n  } while(node && node.tagName && filter(node))\n\n  return out.slice(1)\n}\n\nfunction noop(n) {\n  return true\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYW5jZXN0b3JzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2std2Vic2l0ZS1uZXh0anMvLi9ub2RlX21vZHVsZXMvYW5jZXN0b3JzL2luZGV4LmpzP2U5MjAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBwYXJlbnRzXG5cbmZ1bmN0aW9uIHBhcmVudHMobm9kZSwgZmlsdGVyKSB7XG4gIHZhciBvdXQgPSBbXVxuXG4gIGZpbHRlciA9IGZpbHRlciB8fCBub29wXG5cbiAgZG8ge1xuICAgIG91dC5wdXNoKG5vZGUpXG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICB9IHdoaWxlKG5vZGUgJiYgbm9kZS50YWdOYW1lICYmIGZpbHRlcihub2RlKSlcblxuICByZXR1cm4gb3V0LnNsaWNlKDEpXG59XG5cbmZ1bmN0aW9uIG5vb3Aobikge1xuICByZXR1cm4gdHJ1ZVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ancestors/index.js\n");

/***/ })

};
;