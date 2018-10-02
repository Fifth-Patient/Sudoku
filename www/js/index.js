/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/core/toolkit.js":
/*!********************************!*\
  !*** ./src/js/core/toolkit.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 矩阵和数据相关的功能
 */
var matrixToolkit = {
  // 初始化生成9个元素的一维数组
  makeRow: function makeRow() {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var array = new Array(9);
    array.fill(v);
    return array;
  },
  // 初始化生成9*9的二维数组
  makeMatrix: function makeMatrix() {
    var _this = this;

    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return Array.from({
      length: 9
    }, function () {
      return _this.makeRow(v);
    });
  },

  /**
   * Fisher-Yates 洗牌算法
   */
  shuffle: function shuffle(array) {
    var endIndex = array.length - 2;

    for (var i = 0; i < endIndex; i++) {
      var j = i + Math.floor(Math.random() * (array.length - i));
      var _ref = [array[j], array[i]];
      array[i] = _ref[0];
      array[j] = _ref[1];
    }

    return array;
  }
};
/**
 * 宫坐标系工具
 */

var boxToolit = {} // Todo
// 工具集
;

module.exports =
/*#__PURE__*/
function () {
  function Tookit() {
    _classCallCheck(this, Tookit);
  }

  _createClass(Tookit, null, [{
    key: "materix",

    /**
     * 矩阵和数据相关的功能
     */
    get: function get() {
      return matrixToolkit;
    }
    /**
     * 宫坐标系工具
     */

  }, {
    key: "box",
    get: function get() {
      return boxToolit;
    }
  }]);

  return Tookit;
}();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Grid = __webpack_require__(/*! ./ui/grid */ "./src/js/ui/grid.js");

var grid = new Grid($('#container'));
grid.build();
grid.layout();

/***/ }),

/***/ "./src/js/ui/grid.js":
/*!***************************!*\
  !*** ./src/js/ui/grid.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 生成九宫格
var Toolkit = __webpack_require__(/*! ../core/toolkit */ "./src/js/core/toolkit.js");

var Grid =
/*#__PURE__*/
function () {
  function Grid(container) {
    _classCallCheck(this, Grid);

    this._$container = container;
  }

  _createClass(Grid, [{
    key: "build",
    value: function build() {
      var matrix = Toolkit.materix.makeMatrix();
      var rowGroupClasses = ["row_g_top", "row_g_middle", "row_g_bottom"];
      var colGroupClasses = ["col_g_left", "col_g_center", "col_g_right"];
      var $cells = matrix.map(function (rowValues) {
        return rowValues.map(function (cellValue, colIndex) {
          return $("<span>").addClass(colGroupClasses[colIndex % 3]).text(cellValue);
        });
      });
      $divArray = $cells.map(function ($spanArray, rowIndex) {
        return $("<div>").addClass("row").addClass(rowGroupClasses[rowIndex % 3]).append($spanArray);
      });

      this._$container.append($divArray);
    }
  }, {
    key: "layout",
    value: function layout() {
      var width = $("span:first", this._$container).width();
      $("span", this._$container).height(width).css({
        "line-height": "".concat(width, "px"),
        "font-size": width < 32 ? "".concat(width / 2, "px") : ""
      });
    }
  }]);

  return Grid;
}();

module.exports = Grid;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map