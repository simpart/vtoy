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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);
__webpack_require__(12);
__webpack_require__(13);
mofron.func = __webpack_require__(14);

__webpack_require__(4);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(4);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);

__webpack_require__(20);
__webpack_require__(21);

__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);

__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
module.exports = mofron;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file   Text.js
 * @author simpart
 */
var mf = __webpack_require__(0);
/**
 * @class Text
 * @brief text component for mofron
 */
mf.comp.Text = function (_mf$Component) {
    _inherits(_class, _mf$Component);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.m_defsiz = true;
            _this.name('Text');
            _this.prmOpt(po);;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * initialize vdom
     * 
     * @param prm : (string) text contents
     */


    _createClass(_class, [{
        key: 'initDomConts',
        value: function initDomConts(prm) {
            try {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initDomConts', this).call(this);

                /* set contents */
                this.text(null === prm ? '' : prm);
                /* set default size */
                this.size(24);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'themeConts',
        value: function themeConts() {
            try {
                var fnt = this.theme().font(0);
                if (null !== fnt && null === this.font()) {
                    this.font(fnt, true);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * text contents setter / getter
         *
         * @param val : (string) text contents
         * @return (string) text contents
         * @note do not specify parameters, if use as getter
         */

    }, {
        key: 'text',
        value: function text(val) {
            try {
                if (undefined === val) {
                    /* getter */
                    return this.target().text();
                }
                /* setter */
                this.target().text(val);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * text size setter / getter
         *
         * @param val : (number) font size (px)
         * @param val : (string,null) font size (manual)
         * @return (string) font size
         * @note do not specify parameters, if use as getter
         */

    }, {
        key: 'size',
        value: function size(val) {
            try {
                if (undefined === val) {
                    /* getter */
                    var ret_siz = mf.func.getLength(this.style('font-size'));
                    if (null !== ret_siz && 'number' === typeof ret_siz) {
                        return ret_siz + ret_siz / 2;
                    }
                    return ret_siz;
                }
                /* setter */
                if ('number' === typeof val) {
                    var buf = 2 * val;
                    val = buf / 3 + 'px';
                }
                this.style({ 'font-size': val });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'height',
        value: function height(val) {
            try {
                if (undefined === val) {
                    /* getter */
                    return this.size();
                }
                /* setter */
                this.size(val);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * text color setter / getter
         * 
         * @param clr : (mofron.Color) color object
         * @return (string) color
         * @note do not specify parameters, if use as getter
         */

    }, {
        key: 'color',
        value: function color(clr) {
            try {
                if (undefined === clr) {
                    /* getter */
                    return mf.func.getColorObj(this.style('color'));
                }
                /* setter */
                if (false === mf.func.isInclude(clr, 'Color')) {
                    throw new Error('invalid parameter');
                }
                this.style({ 'color': clr.getStyle() });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * text font setter / getter
         * 
         * @param fnt : (object) mofron.util.Font object
         * @param thm : (boolean) theme flag
         *                        true  : set font as theme
         *                        false : set font (default)
         * @return (object) mofron.util.Font object
         * @note do not specify parameters, if use as getter
         */

    }, {
        key: 'font',
        value: function font(fnt, thm) {
            try {
                if (undefined === fnt) {
                    /* getter */
                    return this.style('font-family');
                }
                /* setter */
                var _thm = undefined === thm ? false : thm;
                if (false === mf.func.isInclude(fnt, 'Font') || 'boolean' !== typeof _thm) {
                    throw new Error('invalid parameter');
                }
                if (false === _thm) {
                    this.style({ 'font-family': fnt.getFamilyStyle() });
                } else {
                    var clnm = this.target().className();
                    for (var idx in clnm) {
                        if (clnm[idx] === fnt.className()) {
                            return;
                        }
                    }
                    this.target().className(fnt.className());
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'space',
        value: function space(val) {
            try {
                if (undefined === val) {
                    /* getter */
                    return mf.func.getLength(this.style('letter-spacing'));
                }
                /* setter */
                if ('number' !== typeof val) {
                    throw new Error('invalid parameter');
                }
                this.style({
                    'letter-spacing': val + 'px'
                });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mf.Component);
module.exports = mofron.comp.Text;
/* end of file */

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file Click.js
 * @author simpart
 */

/**
 * @class mofron.event.Click
 * @brief click event class for component
 */
mofron.event.Click = function (_mofron$Event) {
    _inherits(_class, _mofron$Event);

    function _class(fnc, prm) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Click');

            /* font theme */
            _this.m_pointer = true;

            if ('object' === fnc) {
                _this.prmOpt(fnc);
            } else {
                _this.handler(fnc, prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * add click event to target component.
     */


    _createClass(_class, [{
        key: 'eventConts',
        value: function eventConts(tgt_dom) {
            try {
                var evt_func = this.handler();
                if (true === this.pointer()) {
                    this.target().style({
                        'cursor': 'pointer'
                    });
                }
                var tgt = this.target();
                tgt_dom.getRawDom().addEventListener('click', function () {
                    try {
                        if (null != evt_func[0]) {
                            evt_func[0](tgt, evt_func[1]);
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }, false);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'pointer',
        value: function pointer(flg) {
            try {
                if (undefined === flg) {
                    return this.m_pointer;
                }

                if ('boolean' !== typeof flg) {
                    throw new Error('invalid parameter');
                }
                this.m_pointer = flg;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Event);
module.exports = mofron.event.Click;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file DomConf.js
 * @author simpart
 */

/**
 * @class DomConf
 * @brief key-val manage for dom object
 */
mofron.DomConf = function (_mofron$Base) {
    _inherits(_class, _mofron$Base);

    function _class(tgt) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('DomConf');
            _this.m_conts = {};
            _this.target(tgt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'target',
        value: function target(tgt) {
            try {
                if (undefined === tgt) {
                    /* getter */
                    return undefined === this.m_target ? null : this.m_target;
                }
                /* setter */
                if (false === mofron.func.isInclude(tgt, 'Dom')) {
                    throw new Error('invalid parameter');
                }
                this.m_target = tgt;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'set',
        value: function set(kv) {
            try {
                if (undefined === kv || 'object' !== (typeof kv === 'undefined' ? 'undefined' : _typeof(kv))) {
                    throw new Error('invalid parameter');
                }

                for (var idx in kv) {
                    if (true === this.protect() && undefined !== this.m_conts[idx]) {
                        return;
                    }
                    this.m_conts[idx] = kv[idx];
                    if (true === this.target().isPushed()) {
                        /* target is already rendered */
                        this.rset(idx, kv[idx]);
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'get',
        value: function get(key) {
            try {
                if (false === this.target().isPushed()) {
                    if (undefined === key) {
                        return this.m_conts;
                    }
                    return undefined === this.m_conts[key] ? null : this.m_conts[key];
                } else {
                    /* target is already rendered */
                    return undefined == this.rget(key) ? null : this.rget(key);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'rset',
        value: function rset() {
            try {
                console.warn('not implement');
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'rget',
        value: function rget() {
            try {
                console.warn('not implement');
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'protect',
        value: function protect(prt) {
            try {
                if (undefined === prt) {
                    /* getter */
                    return undefined === this.m_protect ? false : this.m_protect;
                }
                /* setter */
                if ('boolean' !== typeof prt) {
                    throw new Error('invalid parameter');
                }
                this.m_protect = prt;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Base);
/* end of file */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file index.js
 * @author simpart
 */

/**
 * @class layout.Horizon
 * @brief horizon layout class
 */
mofron.layout.Horizon = function (_mofron$Layout) {
    _inherits(_class, _mofron$Layout);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Horizon');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'layoutConts',
        value: function layoutConts() {
            try {
                if (0 === this.m_execnt++) {
                    this.target().style(_defineProperty({
                        'display': '-webkit-flex'
                    }, 'display', 'flex'));
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Layout);
module.exports = mofron.layout.Horizon;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file   mofron-comp-frame/index.js
 * @author simpart
 */
var mf = __webpack_require__(0);
var Radius = __webpack_require__(35);
var Shadow = __webpack_require__(7);

/**
 * @class Frame
 * @brief frame component class
 */
mf.comp.Frame = function (_mf$Component) {
    _inherits(_class, _mf$Component);

    function _class(xo, y) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Frame');
            _this.prmOpt(xo, y);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * initialize contents
     * 
     * @param disp : (bool) visible flag
     */


    _createClass(_class, [{
        key: 'initDomConts',
        value: function initDomConts(x, y) {
            try {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initDomConts', this).call(this);

                /* configure style */
                var bd_clr = this.theme().color(0);
                this.style({
                    'border': 'solid',
                    'border-color': null === bd_clr ? new mofron.Color(190, 190, 190).getStyle() : bd_clr.getStyle(),
                    'border-width': '1px'
                });

                /* size setting */
                if (undefined !== x) {
                    this.size(x, y);
                } else {
                    /* this size is default size */
                    this.size(100, 100);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'themeConts',
        value: function themeConts() {
            try {
                var clr = this.theme().color(0);
                if (null !== clr && null === this.color()) {
                    this.color(clr);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'color',
        value: function color(clr) {
            try {
                if (undefined === clr) {
                    /* getter */
                    return mf.func.getColor(this.style('background'));
                }
                /* setter */
                if (false === mf.func.isObject(clr, 'Color')) {
                    throw new Error('invalid parameter');
                }
                this.style({ 'background': clr.getStyle() });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'radius',
        value: function radius(val) {
            try {
                this.addEffect(new Radius(val));
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'shadow',
        value: function shadow(val) {
            try {
                this.addEffect(new Shadow(val));
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'width',
        value: function width(val) {
            try {
                return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'width', this).call(this, 'number' === typeof val ? val - 2 : val);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'height',
        value: function height(val) {
            try {
                return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'height', this).call(this, 'number' === typeof val ? val - 2 : val);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mf.Component);
module.exports = mofron.comp.Frame;
/* end of file */

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file shadow.js
 * @author simpart
 */
var mf = __webpack_require__(0);

/**
 * @class Shadow
 * @brief Shadow class for mofron effect
 */
mofron.effect.Shadow = function (_mofron$Effect) {
    _inherits(_class, _mofron$Effect);

    function _class(prm) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Shadow');
            _this.prmOpt('number' !== typeof prm ? prm : { value: prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'value',
        value: function value(val) {
            try {
                if (undefined === val) {
                    return undefined === this.m_value ? 50 : this.m_value;
                }

                if ('number' !== typeof val || 0 > val) {
                    throw new Error('invalid parameter');
                }
                this.m_value = val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'color',
        value: function color(clr) {
            try {
                if (undefined === clr) {
                    /* getter */
                    if (undefined === this.m_color) {
                        this.color(new mf.Color(128, 128, 128));
                    }
                    return this.m_color;
                }
                /* setter */
                if (false === mf.func.isInclude(clr, 'Color')) {
                    throw new Error('invalid parameter');
                }
                this.m_color = clr;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'enable',
        value: function enable(tgt) {
            try {
                tgt.style({
                    'box-shadow': '0px ' + this.value() / 2 + 'px ' + this.value() + 'px ' + '0px ' + this.color().getStyle()
                });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'disable',
        value: function disable(tgt) {
            try {
                tgt.style({ 'box-shadow': null });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Effect);
module.exports = mofron.effect.Shadow;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file mofron-comp-form/index.js
 * @author simpart
 */
var mf = __webpack_require__(0);
var Button = __webpack_require__(37);
var Message = __webpack_require__(38);
var Margin = __webpack_require__(39);
var Center = __webpack_require__(40);

/**
 * @class Form
 * @brief form component for mofron
 */
mf.comp.Form = function (_mf$Component) {
    _inherits(_class, _mf$Component);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Form');
            _this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'initDomConts',
        value: function initDomConts(prm) {
            try {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initDomConts', this).call(this);

                this.layout([new Margin('top', 25), new Center({ rate: 70 })]);

                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'addChild', this).call(this, this.message(), false);
                var sub = this.submitComp();
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'addChild', this).call(this, sub.parent().parent());
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'callback',
        value: function callback(func, prm) {
            try {
                if (undefined === func) {
                    /* getter */
                    return undefined === this.m_callback ? new Array(null, null) : this.m_callback;
                }
                /* setter */
                if ('function' !== typeof func) {
                    throw new Error('invalid parameter');
                }
                if (undefined === this.m_callback) {
                    this.m_callback = new Array(null, null);
                }
                this.m_callback[0] = func;
                this.m_callback[1] = undefined === prm ? null : prm;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'send',
        value: function send(url) {
            try {
                if (0 === this.child().length) {
                    return {
                        index: -1,
                        cause: 'form is no element'
                    };
                }
                var ret_chk = this.checkValue();
                if (null !== ret_chk) {
                    return ret_chk;
                }

                var cb = this.callback();
                var xhr = new XMLHttpRequest();
                var form = this;
                xhr.addEventListener('load', function (event) {
                    if (null != cb[0]) {
                        cb[0](JSON.parse(this.response), form, cb[1]);
                    }
                });
                var send_uri = undefined === this.uri() ? this.m_param : this.uri();
                if (null === send_uri) {
                    throw new Error('invalid parameter');
                }
                xhr.open('POST', send_uri);
                var send_val = this.value();

                xhr.send(JSON.stringify(send_val));
                return null;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'uri',
        value: function uri(u) {
            try {
                if (undefined === u) {
                    /* getter */
                    return undefined === this.m_uri ? null : this.m_uri;
                }
                /* setter */
                if ('string' !== typeof u) {
                    throw new Error('invalid parameter');
                }
                this.m_uri = u;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'checkValue',
        value: function checkValue() {
            try {
                this.message(null);
                var chd = this.child();
                var ret_chk = null;
                var form_idx = 0;
                for (var idx in chd) {
                    if (true !== mf.func.isInclude(chd[idx], 'Form')) {
                        continue;
                    }

                    /* null check */
                    if (true === chd[idx].require() && (null === chd[idx].value() || undefined === chd[idx].value())) {
                        return {
                            index: form_idx,
                            cause: 'emply value'
                        };
                    }
                    ret_chk = chd[idx].checkValue();
                    if (null !== ret_chk) {
                        return {
                            index: form_idx,
                            cause: ret_chk
                        };
                    }

                    form_idx++;
                }
                return null;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'value',
        value: function value() {
            try {
                var ret_val = {};
                var chd = this.child();
                var val_nm = null;
                for (var idx in chd) {
                    if (true !== mf.func.isInclude(chd[idx], 'Form')) {
                        continue;
                    }
                    val_nm = chd[idx].setKey();
                    if (null === val_nm) {
                        val_nm = 'prm_' + idx;
                    }
                    ret_val[val_nm] = chd[idx].value();
                }
                return ret_val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'setKey',
        value: function setKey(nm) {
            try {
                if (undefined === nm) {
                    /* getter */
                    return undefined === this.m_form_key ? null : this.m_form_key;
                }
                /* setter */
                if ('string' !== typeof nm) {
                    throw new Error('invalid parameter');
                }
                this.m_form_key = nm;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'require',
        value: function require(flg) {
            try {
                if (undefined === flg) {
                    /* getter */
                    return undefined === this.m_req ? false : this.m_req;
                }
                /* setter */
                if ('boolean' !== typeof flg) {
                    throw new Error('invalid parameter');
                }
                this.m_req = flg;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'message',
        value: function message(msg) {
            try {
                if (undefined === msg) {
                    /* getter */
                    if (undefined === this.m_message) {
                        this.message(new Message({
                            text: '',
                            color: new mf.Color(200, 60, 60),
                            visible: false
                        }));
                    }
                    return this.m_message;
                }
                /* setter */
                if (true === mf.func.isInclude(msg, 'Message')) {
                    this.m_message = msg;
                } else if ('string' === typeof msg) {
                    this.message().text(msg);
                    this.message().visible('' === msg ? false : true);
                } else if (null === msg) {
                    this.message().visible(false);
                } else {
                    throw new Error('invalid parameter');
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'submitComp',
        value: function submitComp(sub) {
            try {
                if (undefined === sub) {
                    /* getter */
                    if (undefined === this.m_submit) {
                        this.submitComp(new Button('Send'));
                    }
                    return this.m_submit;
                }
                /* setter */
                if (true === mf.func.isInclude(sub, 'Button')) {
                    if (undefined !== this.m_submit) {
                        sub.color(this.m_submit.color());
                        sub.size(this.m_submit.size()[0], this.m_submit.size()[1]);
                        this.m_submit.parent().updChild(this.m_submit, sub);
                        return;
                    }
                    new mf.Component({
                        addChild: new mf.Component({
                            addChild: sub,
                            style: {
                                width: null === sub.width() ? '100px' : sub.width() + 'px',
                                'margin-left': 'auto'
                            }
                        })
                    });
                    sub.width(null === sub.width() ? 100 : undefined);
                    sub.clickEvent(function (tgt, frm) {
                        try {
                            var ret = frm.send();
                            if (null !== ret) {
                                frm.message(ret['cause']);
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    }, this);
                    this.m_submit = sub;
                } else if ('string' === typeof sub) {
                    this.submitComp().text(sub);
                } else {
                    throw new Error('invalid parameter');
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addChild',
        value: function addChild(chd, idx, flg) {
            try {
                if (false !== flg) {
                    _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'addChild', this).call(this, chd, undefined === idx ? this.child().length - 1 : idx);
                } else {
                    _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'addChild', this).call(this, chd, idx);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mf.Component);
module.exports = mofron.comp.Form;
/* end of file */

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file login.js
 * @brief login page initialization
 */
var mf = __webpack_require__(0);
var Login = __webpack_require__(30);
var Shadow = __webpack_require__(7);
var Fade = __webpack_require__(43);

/* app ctrl */
var theme = __webpack_require__(44);

/**
 * page init function
 * 
 * @param rt : root component
 */
var start = function start(rt) {
    try {
        var login = new Login({
            title: 'ULTOY',
            color: new mf.Color(200, 200, 230),
            authConf: new mf.Param('./mng/login', function (ret, form) {
                try {
                    if (false === ret.result || false === ret.message) {
                        form.message('Invalid Username or Password.');
                    }
                } catch (e) {
                    console.error(e.stack);
                }
            })
        });
        login.header().addEffect(new Shadow(20));
        login.frame().width(500);
        login.frame().effect([new Shadow(20), new Fade()]);
        rt.addChild(login);
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
};

try {
    __webpack_require__(45);
    theme.theme(app.root.theme());
    start(app.root);

    app.root.visible(true);
} catch (e) {
    console.error(e.stack);
}
/* end of file */

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["mofron"] = __webpack_require__(11);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file namespace.js
 * @author simpart
 */
module.exports = {
    comp: {},
    layout: {},
    event: {},
    effect: {},
    func: {},
    theme: null,
    root: new Array(),
    debug: false
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @file Base.js
 * @author simpart
 */

/**
 * @class Base
 * @brief top of mofron parent class
 */
mofron.Base = function () {
    function _class() {
        _classCallCheck(this, _class);

        try {
            this.m_name = new Array();
            this.name('Base');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * component name setter / getter
     *
     * @param nm : (string) component name
     * @return (string) component name
     * @note parameter syntax
     */


    _createClass(_class, [{
        key: 'name',
        value: function name(nm) {
            try {
                if (undefined === nm) {
                    if (0 === this.m_name.length) {
                        return null;
                    }
                    return this.m_name[this.m_name.length - 1];
                }
                if (!('string' === typeof nm || 'object' === (typeof nm === 'undefined' ? 'undefined' : _typeof(nm)) && undefined !== nm[0])) {
                    throw new Error('invalid parameter');
                }
                if ('object' === (typeof nm === 'undefined' ? 'undefined' : _typeof(nm))) {
                    for (var idx in nm) {
                        this.m_name.push(nm[idx]);
                    }
                } else {
                    this.m_name.push(nm);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'data',
        value: function data(key, val) {
            try {
                if (undefined === val) {
                    /* getter */
                    if (undefined === this.m_data) {
                        return null;
                    }
                    return undefined === this.m_data[key] ? null : this.m_data[key];
                }
                /* setter */
                if ('string' !== typeof key) {
                    throw new Error('invalid parameter');
                }
                if (undefined === this.m_data) {
                    this.m_data = {};
                }
                this.m_data[key] = val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getNameList',
        value: function getNameList() {
            try {
                return this.m_name;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getId',
        value: function getId() {
            try {
                if (undefined === this.m_id) {
                    this.m_id = mofron.func.getId();
                }
                return this.m_id;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'param',
        value: function param(prm) {
            try {
                if (undefined === prm) {
                    /* getter */
                    return undefined === this.m_param ? null : this.m_param;
                }
                /* setter */
                this.m_param = prm;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getOption',
        value: function getOption() {
            try {
                return undefined === this.m_opt ? null : this.m_opt;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addOption',
        value: function addOption(opt) {
            try {
                if ('object' !== (typeof opt === 'undefined' ? 'undefined' : _typeof(opt))) {
                    throw new Error('invalid parameter');
                }
                if (undefined === this.m_opt) {
                    this.m_opt = {};
                }
                for (var oidx in opt) {
                    this.m_opt[oidx] = opt[oidx];
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'setPrmOpt',
        value: function setPrmOpt(po, p2, p3, p4, p5) {
            try {
                var prm_cnt = 0;
                for (var pidx in arguments) {
                    if (undefined !== arguments[pidx]) {
                        prm_cnt++;
                    }
                }
                if (0 === prm_cnt) {
                    return;
                } else if (1 === prm_cnt) {
                    if ('object' === (typeof po === 'undefined' ? 'undefined' : _typeof(po))) {
                        if ("undefined" === typeof po[0]) {
                            if (true === mofron.func.isInclude(po, 'Base')) {
                                /* this is parameter */
                                this.param(new mofron.Param(po));
                                return;
                            }

                            for (var pidx2 in po) {
                                if ('string' !== typeof pidx2) {
                                    /* this is paramter */
                                    this.param(new mofron.Param(po));
                                    return;
                                }
                            }
                            /* this is option */
                            this.addOption(po);
                        } else {
                            /* this is paramter */
                            this.param(new mofron.Param(po));
                        }
                    } else {
                        /* this is paramter */
                        this.param(new mofron.Param(po, p2, p3, p4, p5));
                    }
                } else {
                    this.param(new mofron.Param(po, p2, p3, p4, p5));
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'prmOpt',
        value: function prmOpt(po, p1, p2, p3, p4) {
            try {
                this.setPrmOpt(po, p1, p2, p3, p4);
                var opt = this.getOption();
                if (null !== opt) {
                    this.execOption();
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'delOption',
        value: function delOption(key) {
            try {
                if ('string' !== typeof key) {
                    throw new Error('invalid parameter');
                }
                delete this.m_opt[key];
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'execOption',
        value: function execOption(opt) {
            try {
                if (undefined !== opt) {
                    this.addOption(opt);
                } else {
                    opt = this.getOption();
                }

                if (null === opt) {
                    return;
                }

                for (var opt_idx in opt) {
                    if ('function' === typeof this[opt_idx]) {
                        if ('name' === this[opt_idx]) {
                            throw new Error('invalid option name');
                        }
                        if (true === mofron.func.isObject(opt[opt_idx], 'Param')) {
                            opt[opt_idx].call(this, opt_idx);
                        } else {
                            this[opt_idx](opt[opt_idx]);
                        }
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}();
/* end of file */

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file Param.js
 * @author simpart
 */

/**
 * @class Param
 * @brief option paramter for mofron object
 */
mofron.Param = function (_mofron$Base) {
    _inherits(_class, _mofron$Base);

    function _class() {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Param');

            _this.m_param = new Array();
            for (var idx in arguments) {
                if (undefined === arguments[idx]) {
                    continue;
                }
                _this.m_param.push(arguments[idx]);
            }

            if (0 === _this.m_param.length) {
                throw new Error('too few parameter');
            } else if (5 <= _this.m_param.length) {
                throw new Error('too many parameters');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'getParam',
        value: function getParam() {
            try {
                return this.m_param;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'call',
        value: function call(obj, func) {
            try {
                if (null === obj || 'object' !== (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) {
                    throw new Error('invalid paramter');
                }
                if ('string' !== typeof func) {
                    throw new Error('invalid parameter');
                }
                var prm = this.getParam();
                if (1 === prm.length) {
                    console.warn('you shuld call ' + func + '() without mofron.Param object');
                    obj[func](prm[0]);
                } else if (2 === prm.length) {
                    obj[func](prm[0], prm[1]);
                } else if (3 === prm.length) {
                    obj[func](prm[0], prm[1], prm[2]);
                } else if (4 === prm.length) {
                    obj[func](prm[0], prm[1], prm[2], prm[3]);
                } else {
                    obj[func](prm[0], prm[1], prm[2], prm[3], prm[4]);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Base);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @file function.js
 * @brief util functions
 * @author simpart
 */

module.exports = {
    /**
     * get unique id
     *
     * @param tgt : (object) target mofron object
     * @return (string) unique id
     */
    getId: function getId(tgt) {
        try {
            var _tgt = tgt === undefined ? null : tgt;
            var ipf = "aid";
            if (null !== _tgt) {
                ipf = _tgt.name();
            }
            var ret_id = ipf + '-' + new Date().getTime() + '-';
            var loop = 0;
            var val = 0;
            for (loop = 0; loop < 8; loop++) {
                val = Math.random() * 16 | 0;
                ret_id += (loop == 12 ? 4 : loop == 16 ? val & 3 | 8 : val).toString(16);
            }
            return ret_id;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },

    getCamel: function getCamel(sty) {
        try {
            if ('string' !== typeof sty) {
                throw new Error('invalid parameter');
            }

            if (sty.length - 1 === sty.lastIndexOf('-')) {
                throw new Error('invalid parameter');
            }

            var skip = false;
            if (0 === sty.indexOf('-')) {
                skip = true;
            }

            var ret_val = sty;
            var ret_buf = null;
            var up_str = null;
            var idx = null;
            while (true) {
                idx = ret_val.indexOf('-');
                if (-1 === idx) {
                    break;
                }
                up_str = ret_val.charAt(idx + 1).toUpperCase();
                ret_buf = ret_val.substr(0, idx);
                if (true === skip) {
                    skip = false;
                    ret_val = ret_buf + ret_val.substr(idx + 1);
                } else {
                    ret_val = ret_buf + up_str + ret_val.substr(idx + 2);
                }
            }
            return ret_val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },

    getColor: function getColor(sty) {
        try {
            if ('none' === sty) {
                return new mofron.Color();
            } else if (null === sty) {
                return null;
            }

            var color = null;
            if (-1 !== sty.indexOf('rgba(')) {
                color = sty.substring(5);
            } else if (-1 !== sty.indexOf('rgb(')) {
                color = sty.substring(4);
            } else {
                return null;
            }

            color = color.substring(0, color.length - 1);
            color = color.split(',');
            if (3 === color.length) {
                return new mofron.Color(parseInt(color[0]), parseInt(color[1]), parseInt(color[2]));
            } else if (4 === color.length) {
                return new mofron.Color(parseInt(color[0]), parseInt(color[1]), parseInt(color[2]), parseInt(color[3]));
            } else {
                return null;
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },

    getLength: function getLength(val) {
        try {
            if ('string' !== typeof val) {
                return null;
            }
            if (val.length - 2 === val.indexOf('px')) {
                return parseInt(val.split('px')[0]);
            }
            return val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },

    getCompSize: function getCompSize(cmp) {
        try {
            if (false === mofron.func.isInclude(cmp, 'Component')) {
                throw new Error('invalid parameter');
            }
            var wid = null;
            var hei = null;

            /* get x-value */
            if ('function' === typeof cmp.width) {
                wid = cmp.width();
            } else if ('function' === typeof cmp.size) {
                wid = cmp.size().width;
            } else {
                wid = mofron.func.getLength(cmp.style('width'));
            }

            /* get y-value */
            if ('function' === typeof cmp.height) {
                hei = cmp.height();
            } else if ('function' === typeof cmp.size) {
                hei = cmp.size().height;
            } else {
                hei = mofron.func.getLength(cmp.style('height'));
            }

            return {
                width: wid,
                height: hei
            };
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },

    getStyleConts: function getStyleConts(sel, cnt) {
        try {
            var ret_val = sel + '{';
            for (var idx in cnt) {
                ret_val += idx + ':' + cnt[idx] + ';';
            }
            return ret_val + '}';
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },

    isInclude: function isInclude(obj, nm) {
        try {
            if (null === obj || 'object' !== (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) {
                return false;
            }
            if ('function' !== typeof obj.name) {
                return false;
            }
            var chk_nm = 'string' === typeof nm ? [nm] : nm;
            var chk_idx = 0;
            var name_lst = obj.getNameList();
            for (var idx in name_lst) {
                if (chk_nm[chk_idx] === name_lst[idx]) {
                    chk_idx++;
                    if (chk_nm.length === chk_idx) {
                        return true;
                    }
                    continue;
                }
                if (0 < chk_idx) {
                    break;
                }
            }
            return false;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },

    isObject: function isObject(obj, nm) {
        try {
            if (null === obj || 'object' !== (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) {
                return false;
            }
            if ('function' !== typeof obj.name) {
                return false;
            }
            if ('string' !== typeof nm) {
                throw new Error('invalid parameter');
            }

            if (nm === obj.name()) {
                return true;
            }
            return false;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },

    addHeadConts: function addHeadConts(opt) {
        try {
            if ('object' !== (typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) || null === opt) {
                throw new Error('invalid parameter');
            }

            var tag = opt.tag;
            var contents = undefined === opt.contents ? '' : opt.contents;
            if (undefined === tag || 'string' !== typeof tag) {
                throw new Error("invalid parameter");
            }

            /* get attr contents */
            var set_conts = '';
            var attr_conts = '';
            var attr = undefined === opt.attr ? null : opt.attr;
            for (var key in attr) {
                attr_conts += key;
                if (null != attr[key]) {
                    attr_conts += '="' + attr[key] + '" ';
                }
            }

            /* check simple tag */
            var simple = false;
            if (undefined === opt.simple) {
                simple = 'link' === tag || 'meta' === tag || 'base' === tag ? true : false;
            } else {
                simple = opt.simple;
            }

            /* init contents string */
            var conts_str = '';
            if ('object' === (typeof contents === 'undefined' ? 'undefined' : _typeof(contents))) {
                for (var cidx in contents) {
                    if ('string' !== typeof contents[cidx]) {
                        throw new Error('invalid parameter');
                    }
                    conts_str += contents[cidx];
                }
            } else if ('string' === typeof contents) {
                conts_str = contents;
            } else {
                throw new Error('invalid parameter');
            }

            /* add tag */
            if (false === simple) {
                var add_conts = '<' + tag + ' ' + attr_conts + '>' + conts_str + '</' + tag + '>';
            } else {
                var add_conts = '<' + tag + ' ' + attr_conts + '>' + conts_str;
            }
            document.head.insertAdjacentHTML('beforeend', add_conts);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },

    addResizeWin: function addResizeWin(func, prm, tlag) {
        try {
            var que_buf = null;
            var param = prm;
            var time_lag = undefined === tlag ? 200 : tlag;
            if ('function' !== typeof func || 'number' !== typeof time_lag) {
                throw new Error('invalid parameter');
            }
            window.addEventListener('resize', function () {
                try {
                    clearTimeout(que_buf);
                    que_buf = setTimeout(func, time_lag, param);
                } catch (e) {
                    console.error(e.stack);
                    throw new Error();
                }
            }, false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },

    getTemp: function getTemp(key) {
        try {
            return undefined === mofron.temp[key] ? null : mofron.temp[key];
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },

    setTemp: function setTemp(key, val) {
        try {
            mofron.temp[key] = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
};
/* end of file */

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file Attr.js
 * @author simpart
 */

/**
 * @class Attr
 * @brief tag attribute object
 */
mofron.Attr = function (_mofron$DomConf) {
    _inherits(_class, _mofron$DomConf);

    /**
     * initialize member
     *
     * @param tgt : (object) target adom object
     */
    function _class(tgt) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, tgt));

            _this.name('Attr');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * set style
     *
     * @param key : (string) style key
     * @param val : (string) style value
     */


    _createClass(_class, [{
        key: 'rset',
        value: function rset(key, val) {
            try {
                this.target().getRawDom().setAttribute(key, val);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get attribute value from rawdom
         *
         * @param key : (string) style key
         * @return (object) style contents
         * @return (string) style contents value
         */

    }, {
        key: 'rget',
        value: function rget(key) {
            try {
                var val = this.target().getRawDom().getAttribute(key);
                return '' === val ? null : val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getString',
        value: function getString() {
            try {
                var ret_val = '';
                for (var idx in this.m_conts) {
                    if ('' !== ret_val) {
                        ret_val += ' ';
                    }
                    ret_val += null === this.m_conts[idx] ? idx : idx + '="' + this.m_conts[idx] + '"';
                }
                return ret_val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.DomConf);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file ClassName.js
 * @author simpart
 */

/**
 * @class ClassName
 * @brief classname for tag object
 */
mofron.ClassName = function (_mofron$DomConf) {
    _inherits(_class, _mofron$DomConf);

    /**
     * initialize member
     *
     * @param tgt : (object) target adom object
     */
    function _class(tgt) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, tgt));

            _this.name('ClassName');
            _this.protect(true);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'add',
        value: function add(nm) {
            try {
                var set_obj = {};
                set_obj[nm] = null;
                this.set(set_obj);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'get',
        value: function get() {
            try {
                var ret_val = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'get', this).call(this);
                if (null === ret_val) {
                    return null;
                } else if (undefined === ret_val[0]) {
                    var ret_obj = new Array();
                    for (var idx in ret_val) {
                        ret_obj.push(idx);
                    }
                    return ret_obj;
                } else {
                    return ret_val;
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * set class name to rowdom
         *
         * @param key : (string) style key
         * @param val : (string) style value
         */

    }, {
        key: 'rset',
        value: function rset(key, val) {
            try {
                this.target().getRawDom().classList.add(key);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get class name from rawdom
         *
         * @param key : unused
         * @return (object) style contents
         * @return (string) style contents value
         */

    }, {
        key: 'rget',
        value: function rget(key) {
            try {
                var clnm = this.target().getRawDom().className;
                if (undefined === clnm || null === clnm || '' === clnm) {
                    return null;
                }
                return clnm.split(' ');
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getString',
        value: function getString() {
            try {
                var ret_val = '';
                var conts = this.get();
                for (var idx in conts) {
                    if ('' !== ret_val) {
                        ret_val += ' ';
                    }
                    ret_val += conts[idx];
                }
                if ('' === ret_val) {
                    return '';
                }
                return 'class="' + ret_val + '"';
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.DomConf);
/* end of file */

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file Prop.js
 * @author simpart
 */

/**
 * @class Prop
 * @brief dom property object
 */
mofron.Prop = function (_mofron$DomConf) {
    _inherits(_class, _mofron$DomConf);

    /**
     * initialize member
     *
     * @param tgt : (object) target dom object
     */
    function _class(tgt) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, tgt));

            _this.name('Prop');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * set property
     *
     * @param key : (string) property key
     * @param val : (string) property value
     */


    _createClass(_class, [{
        key: 'rset',
        value: function rset(key, val) {
            try {
                if (undefined === this.target().getRawDom()[key]) {
                    throw new Error(key + ' is unknown property');
                }
                this.target().getRawDom()[key] = val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get property value from rawdom
         *
         * @param key : (string) property key
         * @return (string) property value
         */

    }, {
        key: 'rget',
        value: function rget(key) {
            try {
                return this.target().getRawDom()[key];
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.DomConf);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file Style.js
 * @author simpart
 */

/**
 * @class Style
 * @brief component style class
 */
mofron.Style = function (_mofron$DomConf) {
    _inherits(_class, _mofron$DomConf);

    /**
     * initialize member
     *
     * @param tgt : (object) target adom object
     */
    function _class(tgt) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, tgt));

            _this.name('Style');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * set style
     *
     * @param key : (string) style key
     * @param val : (string) style value
     */


    _createClass(_class, [{
        key: 'rset',
        value: function rset(key, val) {
            try {
                this.target().getRawDom().style[mofron.func.getCamel(key)] = val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get style value from rawdom
         *
         * @param key : (string) style key
         * @return (object) style contents
         * @return (string) style contents value
         */

    }, {
        key: 'rget',
        value: function rget(key) {
            try {
                var val = this.target().getRawDom().style[key];
                return undefined === val ? null : val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getString',
        value: function getString() {
            try {
                var ret_val = '';
                for (var idx in this.m_conts) {
                    ret_val += idx + ':' + this.m_conts[idx] + ';';
                }
                if ('' === ret_val) {
                    return '';
                }
                return 'style="' + ret_val + '"';
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.DomConf);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file CompConf.js
 * @author simpart
 */
/**
 * @class CompConf
 * @brief Interface of Component Config
 */
mofron.CompConf = function (_mofron$Base) {
    _inherits(_class, _mofron$Base);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, po));

            _this.name('CompConf');
            _this.m_func = new Array(null, null);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'target',
        value: function target(tgt) {
            try {
                if (undefined === tgt) {
                    /* getter */
                    return undefined === this.m_target ? null : this.m_target;
                }
                /* setter */
                if (false === mofron.func.isInclude(tgt, 'Component')) {
                    throw new Error('invalid parameter');
                }
                this.m_target = tgt;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'execute',
        value: function execute() {
            console.warn('not implement');
        }
    }, {
        key: 'confFunc',
        value: function confFunc(fnc, prm) {
            try {
                if (undefined === fnc) {
                    /* getter */
                    return this.m_func;
                }
                /* setter */
                if ('function' !== typeof fnc) {
                    throw new Error('invalid parameter');
                }
                this.m_func[0] = fnc;
                this.m_func[1] = undefined === prm ? null : prm;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'ignore',
        value: function ignore(flg) {
            try {
                if (undefined === flg) {
                    /* getter */
                    return undefined === this.m_cpcf_ign ? false : this.m_cpcf_ign;
                }
                /* setter */
                if ('boolean' !== typeof flg) {
                    throw new Error('invalid parameter');
                }
                this.m_cpcf_ign = flg;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Base);
/* end of file */

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file Dom.js
 * @author simpart
 */
/**
 * @class Dom
 * @brief Dom class
 */
mofron.Dom = function (_mofron$Base) {
    _inherits(_class, _mofron$Base);

    /**
     * initialize member
     *
     * @param tag : (string) tag name
     * @param cmp : (object) component object
     */
    function _class(tg, cmp) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Dom');

            _this.m_classnm = new mofron.ClassName(_this);
            _this.m_child = new Array();
            _this.m_style = new mofron.Style(_this);
            _this.m_attr = new mofron.Attr(_this);
            _this.m_prop = new mofron.Prop(_this);
            _this.m_cnflis = new Array();
            _this.m_rawdom = null;

            _this.prmOpt(tg, cmp);
            if (null !== _this.param()) {
                _this.tag(tg);
                _this.component(cmp);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * tag name setter / getter
     *
     * @param tg : (string) tag name (option)
     * @return (string) tag name
     */


    _createClass(_class, [{
        key: 'tag',
        value: function tag(tg) {
            try {
                if (undefined === tg) {
                    /* getter */
                    return undefined === this.m_tag ? null : this.m_tag;
                }
                /* setter */
                if ('string' !== typeof tg) {
                    throw new Error('invalid parameter');
                }
                this.m_tag = tg;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * component getter / setter
         * 
         * @param cmp (object) mofron.Component
         * @return (object) mofron.Component
         */

    }, {
        key: 'component',
        value: function component(cmp) {
            try {
                if (undefined === cmp) {
                    /* getter */
                    return undefined === this.m_comp ? null : this.m_comp;
                }
                /* setter */
                if (false === mofron.func.isInclude(cmp, 'Component')) {
                    throw new Error('invalid parameter');
                }
                this.m_comp = cmp;

                /* set component attribute */
                if (true === mofron.debug) {
                    var nm = cmp.name().toLowerCase();
                    if ('Component' !== nm) {
                        cmp.adom().attr({ 'component': 'mofron-comp-' + nm });
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'child',
        value: function child(chd) {
            try {
                if (undefined === chd) {
                    /* getter */
                    return this.m_child;
                }
                /* setter */
                if ('object' !== (typeof chd === 'undefined' ? 'undefined' : _typeof(chd))) {
                    throw new Error('invalid parameter');
                }

                if (undefined !== chd[0]) {
                    for (var idx in chd) {
                        this.addChild(chd[idx]);
                    }
                    return;
                }
                this.addChild(chd);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * add child adom
         *
         * @param chd : (object) child adom
         */

    }, {
        key: 'addChild',
        value: function addChild(chd, idx) {
            try {
                if (false === mofron.func.isInclude(chd, 'Dom')) {
                    throw new Error('invalid parameter');
                }
                chd.parent(this);

                if (undefined === idx || 0 === this.m_child.length) {
                    this.m_child.push(chd);
                } else {
                    this.m_child.splice(idx, 0, chd);
                }
                this.value(null);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'updChild',
        value: function updChild(chd, idx) {
            try {
                if ('number' !== typeof idx || undefined === this.child()[idx]) {
                    throw new Error('invalid parameter');
                }
                this.m_child[idx].destroy();
                this.addChild(chd, idx);
                if (true === mofron.func.isObject(this, 'Adom') && 1 === this.child().length) {
                    this.component().target(chd);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'delChild',
        value: function delChild(idx) {
            try {
                if ('number' !== typeof idx || undefined === this.child()[idx]) {
                    throw new Error('invalid parameter');
                }
                this.m_child.splice(idx, 1);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * style setter / getter
         *
         * @param kv : (object) key-value object
         * @return (string) : value of style
         * @return (object) : style object
         */

    }, {
        key: 'style',
        value: function style(kv, los) {
            try {
                if (undefined === kv || 'string' === typeof kv) {
                    /* getter */
                    return this.m_style.get(kv);
                }
                /* setter */
                var chgcnf = {};
                for (var kv_idx in kv) {
                    if (kv[kv_idx] !== this.style(kv_idx)) {
                        chgcnf[kv_idx] = kv[kv_idx];
                    }
                }

                if (true === los) {
                    this.m_style.protect(true);
                    this.m_style.set(kv);
                    this.m_style.protect(false);
                } else if ('object' === (typeof kv === 'undefined' ? 'undefined' : _typeof(kv))) {
                    this.m_style.set(kv);
                }

                if (0 !== chgcnf.length) {
                    this.execConfListener('style', chgcnf);
                }
                this.value(null);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * tag attribute setter / getter
         *
         * @param kv  : (object/string) key-value object / key of attribute
         * @param val : (object) value of attribute
         * @return
         */

    }, {
        key: 'attr',
        value: function attr(kv, val) {
            try {
                if (undefined === val && 'object' !== (typeof kv === 'undefined' ? 'undefined' : _typeof(kv))) {
                    /* getter */
                    return this.m_attr.get(kv);
                }
                /* setter */
                var chgcnf = {};
                for (var kv_idx in kv) {
                    if (kv[kv_idx] !== this.attr(kv_idx)) {
                        chgcnf[kv_idx] = kv[kv_idx];
                    }
                }

                if ('string' === typeof kv) {
                    var set_obj = {};
                    set_obj[kv] = val;
                    this.m_attr.set(set_obj);
                } else {
                    this.m_attr.set(kv);
                }

                if (0 !== chgcnf.length) {
                    this.execConfListener('attr', chgcnf);
                }
                this.value(null);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * dom property setter / getter
         * 
         * @param kv  : (object/string) key-value object / key of
         * @param val : (object)  value of property
         */

    }, {
        key: 'prop',
        value: function prop(kv, val) {
            try {
                if (undefined === val && 'object' !== (typeof kv === 'undefined' ? 'undefined' : _typeof(kv))) {
                    /* getter */
                    return this.m_prop.get(kv);
                }
                /* setter */
                var chgcnf = {};
                for (var kv_idx in kv) {
                    if (kv[kv_idx] !== this.prop(kv_idx)) {
                        chgcnf[kv_idx] = kv[kv_idx];
                    }
                }

                if ('string' === typeof kv) {
                    var set_obj = {};
                    set_obj[kv] = val;
                    this.m_prop.set(set_obj);
                } else {
                    this.m_prop.set(kv);
                }

                if (0 !== chgcnf.length) {
                    this.execConfListener('prop', chgcnf);
                }
                this.value(null);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * tag class name setter / getter
         * 
         * @param name : (string) class name
         */

    }, {
        key: 'className',
        value: function className(name) {
            try {
                if (undefined === name) {
                    /* getter */
                    return this.m_classnm.get();
                }
                /* setter */
                this.m_classnm.add(name);
                this.execConfListener('className', name);
                this.value(null);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * tag contents text setter / getter
         * 
         * @param cnt : (string) tag contents (option)
         * @return (string) tag contents
         */

    }, {
        key: 'text',
        value: function text(txt) {
            try {
                if (undefined === txt) {
                    /* getter */
                    return undefined === this.m_text ? '' : this.m_text;
                }
                /* setter */
                if ('string' !== typeof txt) {
                    throw new Error('invalid parameter');
                }

                var chgcnf = null;
                if (txt !== this.text()) {
                    chgcnf = txt;
                }
                this.m_text = txt;
                if (true === this.isPushed()) {
                    this.getRawDom().innerHTML = txt;
                }

                if (null !== chgcnf) {
                    this.execConfListener('text', txt);
                }
                this.value(null);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addConfListener',
        value: function addConfListener(fnc, prm) {
            try {
                if ('function' !== typeof fnc) {
                    throw new Error('invalid parameter');
                }
                this.m_cnflis.push([fnc, prm]);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'execConfListener',
        value: function execConfListener(type, prm) {
            try {
                for (var idx in this.m_cnflis) {
                    this.m_cnflis[idx][0](type, prm, this.m_cnflis[idx][1]);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * dom string setter / getter
         *
         * @return (string) dom string
         */

    }, {
        key: 'value',
        value: function value(val) {
            try {
                if (undefined === val) {
                    /* getter */
                    if (undefined !== this.m_value && 'string' === typeof this.m_value) {
                        return this.m_value;
                    }

                    var ret_val = '';
                    ret_val += '<' + this.tag() + ' ';

                    /* set id attribute */
                    ret_val += 'id="' + this.getId() + '" ';

                    /* set dom config */
                    var cnf_lst = [this.m_classnm, this.m_style, this.m_attr];
                    var cnf_cnt = null;
                    for (var idx in cnf_lst) {
                        cnf_cnt = cnf_lst[idx].getString();
                        if ('' !== cnf_cnt) {
                            ret_val += cnf_cnt;
                        }
                    }

                    /* close tag */
                    ret_val += '>';

                    /* set tag contents */
                    ret_val += this.text();

                    /* set child value */
                    var child = this.child();
                    for (var chd_idx in child) {
                        ret_val += child[chd_idx].value();
                    }

                    if (false === this.isSimple()) {
                        ret_val += '</' + this.tag() + '>';
                    }

                    /* set buff */
                    this.value(ret_val);

                    return ret_val;
                }
                /* setter */
                if (null === val && null !== this.parent()) {
                    this.parent().value(null);
                } else if (null !== val && 'string' !== typeof val) {
                    throw new Error('invalid parameter');
                }
                this.m_value = val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * draw dom to target dom
         * 
         * @param tgt : (object) target dom
         * @param upd : (boolean) update flag
         */

    }, {
        key: 'pushDom',
        value: function pushDom(tgt, upd) {
            try {
                var _upd = undefined === upd ? false : upd;
                if ('boolean' !== typeof _upd) {
                    throw new Error('invalid parameter');
                }

                if (false === _upd && true === this.isPushed()) {
                    throw new Error('already pushed');
                }

                this.parent(tgt);

                if (true === mofron.ssr) {
                    return;
                }

                var tgt_dom = null === this.parent() ? document.body : this.parent().getRawDom();
                if (false === _upd) {
                    tgt_dom.insertAdjacentHTML('beforeend', this.value());
                } else {
                    tgt_dom.innerHTML = this.value();
                }
                this.setPushed();
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get adom status
         *
         * @return (boolean) true : this adom had pushed
         * @return (boolean) false : this adom had not pushed
         */

    }, {
        key: 'isPushed',
        value: function isPushed() {
            try {
                return null === this.m_rawdom ? false : true;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * update adom status
         * 
         * @note update status also child adom
         */

    }, {
        key: 'setPushed',
        value: function setPushed() {
            try {
                /* set rawdom */
                var tgt_pnt = this.parent();
                while (tgt_pnt) {
                    if (true === tgt_pnt.isSimple()) {
                        tgt_pnt = tgt_pnt.parent();
                    } else {
                        break;
                    }
                }
                if (null === tgt_pnt) {
                    this.m_rawdom = document.querySelector('#' + this.getId());
                } else {
                    this.m_rawdom = tgt_pnt.getRawDom().querySelector('#' + this.getId());
                }

                if (null === this.m_rawdom) {
                    throw new Error('could not find rawdom');
                }

                /* set property */
                var prop = this.m_prop.get();
                for (var idx in prop) {
                    this.prop(idx, prop[idx]);
                }

                if (0 != this.m_child.length) {
                    for (var chd_idx in this.m_child) {
                        this.m_child[chd_idx].setPushed();
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * check whether tag name is simple tag
         *
         * @return (boolean) true  : this adom is simple tag
         * @return (boolean) false : this adom is not simple tag
         */

    }, {
        key: 'isSimple',
        value: function isSimple(flg) {
            try {
                if (undefined === flg) {
                    /* getter */
                    if (undefined === this.m_simple) {
                        return 'br' == this.tag() || 'hr' == this.tag() || 'input' == this.tag() || 'img' == this.tag() ? true : false;
                    } else {
                        return this.m_simple;
                    }
                }
                /* setter */
                if ('boolean' !== typeof flg) {
                    throw new Error('invalid parameter');
                }
                this.m_simple = flg;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * parent adom setter / getter
         * 
         * @param pnt : (object) parent dom/adom object
         * @return (object) parant dom/adom object
         */

    }, {
        key: 'parent',
        value: function parent(pnt) {
            try {
                if (undefined === pnt) {
                    /* getter */
                    return undefined === this.m_parent ? null : this.m_parent;
                }
                /* setter */
                if (null !== pnt && false === mofron.func.isInclude(pnt, 'Dom')) {
                    throw new Error('invalid parameter');
                }
                if (undefined !== this.m_parent) {
                    this.destroy();
                }
                this.m_parent = pnt;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get pushed dom object from blowser
         *
         * @return (object) raw dom object
         */

    }, {
        key: 'getRawDom',
        value: function getRawDom() {
            try {
                if (false === this.isPushed()) {
                    throw new Error('this dom is not pushed yet');
                }
                return this.m_rawdom;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            try {
                if (true === this.isPushed() && true === mofron.func.isObject(this, 'Dom')) {
                    this.getRawDom().remove();
                    this.m_rawdom = null;
                }
                //let chd = this.child();
                //for (let cidx in chd) {
                //    chd[cidx].destroy();
                //}
                //if ( (null !== this.parent()) &&
                //     (true === mofron.func.isInclude(this.parent(), 'Dom')) ) {
                //    var pnt_chd = this.parent().child();
                //    for (var idx in pnt_chd) {
                //        if (pnt_chd[idx].getId() === this.getId()) {
                //            this.parent().delChild(parseInt(idx));
                //            break;
                //        }
                //    }
                //}
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Base);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file Adom.js
 * @author simpart
 */

/**
 * @class Adom
 * @brief agent dom class
 */
mofron.Adom = function (_mofron$Dom) {
    _inherits(_class, _mofron$Dom);

    /**
     * initialize member
     *
     * @param tag : (string) tag name
     * @param cmp : (object) component object
     */
    function _class() {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Adom');
            _this.m_style = {};
            _this.m_classnm = {};
            _this.m_attr = {};
            _this.m_prop = {};
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * tag name setter / getter to(from) children
     * 
     * @param tg : (string) tag name (option)
     * @return (string,null) tag name
     */


    _createClass(_class, [{
        key: 'tag',
        value: function tag(tg) {
            try {
                if (undefined === tg) {
                    /* getter */
                    return null === this.parent() ? null : this.parent().tag();
                }
                throw new Error('tag set is not supported at adom');
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addChild',
        value: function addChild(chd, idx) {
            try {
                if (true === mofron.func.isObject(chd, 'Dom')) {
                    /* set config */
                    chd.attr(this.attr());
                    chd.style(this.style());
                    chd.prop(this.prop());
                    chd.className('' === this.className() ? undefined : this.className());
                    chd.text('' === this.text() ? undefined : this.text());
                }
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'addChild', this).call(this, chd, idx);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * style setter / getter to(from) children
         *
         * @param kv : (object) key value object
         * @param los : (boolean) loose flag (not require)
         * @return (string) : style value
         * @return (object) : style object
         */

    }, {
        key: 'style',
        value: function style(kv, los) {
            try {
                if (undefined === kv) {
                    /* getter */
                    return this.m_style;
                }
                if ('string' === typeof kv) {
                    /* getter */
                    return undefined === this.m_style[kv] ? null : this.m_style[kv];
                }
                /* setter */
                var chd = this.child();
                for (var idx in chd) {
                    chd[idx].style(kv, los);
                }
                for (var idx in kv) {
                    this.m_style[idx] = kv[idx];
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * tag attribute setter / getter
         *
         * @param kv : (object) key value object
         * @return (string,null) attribute value 
         */

    }, {
        key: 'attr',
        value: function attr(kv, val) {
            try {
                if ('object' === (typeof kv === 'undefined' ? 'undefined' : _typeof(kv))) {
                    for (var idx in kv) {
                        this.m_attr[idx] = kv[idx];
                    }
                    var chd = this.child();
                    for (var idx in chd) {
                        chd[idx].attr(kv, val);
                    }
                } else {
                    if (undefined === kv) {
                        return this.m_attr;
                    }
                    return undefined === this.m_attr[kv] ? null : this.m_attr[kv];
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * dom property setter / getter
         * 
         * @param kv (object) key value object
         * @param val (mix) property value
         */

    }, {
        key: 'prop',
        value: function prop(kv) {
            try {
                if ('object' === (typeof kv === 'undefined' ? 'undefined' : _typeof(kv))) {
                    for (var idx in kv) {
                        this.m_prop[idx] = kv[idx];
                    }
                    var chd = this.child();
                    for (var idx in chd) {
                        chd[idx].prop(kv);
                    }
                } else {
                    if (undefined === kv) {
                        return this.m_prop;
                    }
                    return undefined === this.m_prop[kv] ? null : this.m_prop[kv];
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * add tag class name
         * 
         * @param name : (string) class name
         */

    }, {
        key: 'className',
        value: function className(name) {
            try {
                if (undefined === name) {
                    /* getter */
                    var ret_val = '';
                    for (var idx in this.m_classnm) {
                        if ('' === ret_val) {
                            ret_val += ' ';
                        }
                        ret_val += this.m_classnm[idx];
                    }
                    return ret_val;
                }
                /* setter */
                if ('string' !== typeof name) {
                    throw new Error('invalid parameter');
                }
                var chd = this.child();
                for (var idx in chd) {
                    chd[idx].className(name);
                }
                this.m_classnm[name] = null;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * tag contents text setter / getter
         * 
         * @param cnt : (string) tag contents (option)
         * @return (string) tag contents
         */

    }, {
        key: 'text',
        value: function text(txt) {
            try {
                if (undefined === txt) {
                    /* getter */
                    return undefined === this.m_text ? '' : this.m_text;
                }
                /* setter */
                if ('string' !== typeof txt) {
                    throw new Error('invalid parameter');
                }
                var chd = this.child();
                for (var idx in chd) {
                    chd[idx].text(txt);
                }
                this.m_text = txt;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get dom string
         *
         * @return (string) dom string
         */

    }, {
        key: 'value',
        value: function value(val) {
            try {
                if (undefined !== val) {
                    return;
                }

                var ret_val = '';
                /* get child value */
                if (0 != this.child().length) {
                    var chd = this.child();
                    for (var idx in chd) {
                        ret_val += chd[idx].value();
                    }
                }
                return ret_val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * update adom status
         * 
         * @note update status also child adom
         */

    }, {
        key: 'setPushed',
        value: function setPushed() {
            try {
                /* set rawdom */
                this.m_rawdom = null === this.parent() ? document.body : this.parent().getRawDom();

                /* set property */
                var prop = this.m_prop;
                for (var idx in prop) {
                    this.prop(idx, prop[idx]);
                }

                if (0 != this.child().length) {
                    var chd = this.child();
                    for (var idx in chd) {
                        chd[idx].setPushed();
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get parent's  pushed dom object from blowser
         *
         * @return (object) raw dom object
         */

    }, {
        key: 'getRawDom',
        value: function getRawDom() {
            try {
                if (false === this.isPushed()) {
                    throw new Error('this adom is not rendered yet');
                }
                return this.m_rawdom;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            try {
                var chd = this.child();
                for (var idx in chd) {
                    chd[idx].destroy(); // delete rawdom
                }

                // delete parent relating
                if (true === mofron.func.isObject(this.parent(), 'Dom')) {
                    var pchd = this.parent().child();
                    for (var pidx in pchd) {
                        if (pchd[pidx].getId() === this.getId()) {
                            this.parent().delChild(parseInt(pidx));
                        }
                    }
                }
                this.m_rawdom = null;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Dom);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file  Color.js
 * @author simpart
 */

/**
 * @class Color
 * @brief Color Defined Class
 */
mofron.Color = function (_mofron$Base) {
    _inherits(_class, _mofron$Base);

    /**
     * initialize member
     *
     * @param r : (number 0-255) red value (option)
     * @param g : (number 0-255) green value (option)
     * @param b : (number 0-255) blue alue (option)
     * @param a : (number 0-1)   alpha value (option)
     */
    function _class(r, g, b, a) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Color');

            _this.m_rgba = new Array(null, /* red */
            null, /* green */
            null, /* blue */
            null /* alpha */
            );
            _this.rgba(r, g, b, a);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * get rgba value
     * 
     * @return (object) rgba array object
     *   [0] -> (number) red value
     *   [1] -> (number) green value
     *   [2] -> (number) blue value
     *   [3] -> (number) alpha value
     */


    _createClass(_class, [{
        key: 'rgba',
        value: function rgba(red, green, blue, alpha) {
            try {
                if (undefined === red) {
                    /* getter */
                    return this.m_rgba;
                }
                /* setter */
                var _red = red === undefined ? null : red;
                var _green = green === undefined ? null : green;
                var _blue = blue === undefined ? null : blue;
                var _alpha = alpha === undefined ? 1 : alpha;

                if (null === _red && null === _green && null === _blue) {} else if (null !== _red && null !== _green && null !== _blue) {
                    if ('number' !== typeof _red || 'number' !== typeof _green || 'number' !== typeof _blue) {
                        throw new Error('invalid parameter');
                    }
                } else {
                    throw new Error('invalid parameter');
                }

                if ('number' !== typeof _alpha) {
                    throw new Error('invalid parameter');
                }

                this.m_rgba[0] = _red;
                this.m_rgba[1] = _green;
                this.m_rgba[2] = _blue;
                this.m_rgba[3] = _alpha;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get coloe style value
         *
         * @return (string) rgba(x,x,x,x)
         * @return (string) none
         * @note return 'none' if rgb is null.
         */

    }, {
        key: 'getStyle',
        value: function getStyle() {
            try {
                var rgba = this.rgba();
                var red = rgba[0];
                var green = rgba[1];
                var blue = rgba[2];
                var alpha = rgba[3];

                if (null === red && null === green && null === blue) {
                    return 'none';
                }
                return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Base);
/* end of file */

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file  Font.js
 * @author simpart
 */

/**
 * @class Font
 * @brief Font Defined Class
 */
mofron.Font = function (_mofron$Base) {
    _inherits(_class, _mofron$Base);

    /**
     * initialize font
     *
     * @param fnt : (string) font name
     */
    function _class(fnt, pth) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Font');

            /* check parameter */
            var _pth = pth === undefined ? null : pth;
            if ('string' !== typeof fnt) {
                throw new Error('invalid parameter');
            }

            /* initialize member */
            _this.m_family = {};
            _this.m_class = 'mofron-theme-' + mofron.func.getId(_this);
            _this.m_theme = false;

            /* initialize function */
            _this.family(fnt);
            if (null !== _pth) {
                _this.setFace(fnt, _pth);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * set @font-face
     * 
     * @param fnt : (string) font name
     * @param pth : (string) path to font file
     */


    _createClass(_class, [{
        key: 'setFace',
        value: function setFace(fnt, pth) {
            try {
                if ('string' !== typeof pth || 'string' !== typeof fnt) {
                    throw new Error('invalid parameter');
                }

                /* format */
                var pth_spt = pth.split('.');
                var format = '';
                if ('woff' === pth_spt[pth_spt.length - 1]) {
                    format = "format('woff')";
                } else if ('ttf' === pth_spt[pth_spt.length - 1]) {
                    format = "format('truetype')";
                } else if ('otf' === pth_spt[pth_spt.length - 1]) {
                    format = "format('opentype')";
                } else if ('eot' === pth_spt[pth_spt.length - 1]) {
                    format = "format('embedded-opentype')";
                } else if ('svg' === pth_spt[pth_spt.length - 1] || 'svgz' === pth_spt[pth_spt.length - 1]) {
                    format = "format('svg')";
                }

                var style = {
                    'font-family': fnt,
                    'src': "url('" + pth + "') " + format
                };
                mofron.func.addHeadConts({
                    tag: 'style',
                    contents: mofron.func.getStyleConts('@font-face', style)
                });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'family',
        value: function family(fm) {
            try {
                if (undefined === fm) {
                    /* getter */
                    var ret_val = new Array();
                    for (var idx in this.m_family) {
                        ret_val.push(idx);
                    }
                    return ret_val;
                }
                /* setter */
                if ('string' !== typeof fm) {
                    throw new Error('invalid parameter');
                }
                this.m_family[fm] = null;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getFamilyStyle',
        value: function getFamilyStyle() {
            try {
                var fm = this.family();
                var fm_str = '';
                for (var idx in fm) {
                    if ('' !== fm_str) {
                        fm_str += ',';
                    }
                    fm_str += fm[idx];
                }
                return fm_str;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * set own font style to style tag.
         */

    }, {
        key: 'pushTheme',
        value: function pushTheme() {
            try {
                if (true === this.m_theme) {
                    return;
                }
                var style = {
                    'font-family': this.getFamilyStyle()
                };
                mofron.func.addHeadConts({
                    tag: 'style',
                    contents: mofron.func.getStyleConts('.' + this.m_class, { 'font-family': this.getFamilyStyle() })
                });
                this.m_theme = true;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'className',
        value: function className(cls) {
            try {
                if (undefined === cls) {
                    /* getter */
                    return this.m_class;
                }
                /* setter */
                if ('string' !== typeof cls) {
                    throw new Error('invalid parameter');
                }
                this.m_class = cls;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * set font-family style to target component
         * 
         * @param (object) : target object
         */

    }, {
        key: 'setFont',
        value: function setFont(tgt) {
            try {
                var _tgt = tgt === undefined ? null : tgt;
                if (null === _tgt || 'object' !== (typeof _tgt === 'undefined' ? 'undefined' : _typeof(_tgt))) {
                    throw new Error('invalid parameter');
                }

                if (true === this.m_theme) {
                    tgt.target().className(this.className());
                } else {
                    tgt.style('font-family', this.getFamilyStyle());
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Base);
mofron.font = {};
/* end of file */

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file theme.js
 * @author simpart
 */
/**
 * @class mofron.theme
 * @brief theme defined class
 */
mofron.Theme = function (_mofron$Base) {
    _inherits(_class, _mofron$Base);

    /**
     * initialize member
     */
    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, po));

            _this.name('Theme');
            _this.m_conts = {};
            _this.execOption();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'target',
        value: function target(tgt) {
            try {
                if (undefined === tgt) {
                    /* getter */
                    return undefined === this.m_target ? null : this.m_target;
                }
                /* setter */
                if (false === mofron.func.isInclude(tgt, 'Component')) {
                    throw new Error('invalid parameter');
                }
                this.m_target = tgt;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'override',
        value: function override(flg) {
            try {
                if (undefined === flg) {
                    /* getter */
                    return undefined === this.m_over ? true : this.m_over;
                }
                /* setter */
                if ('boolean' !== typeof flg) {
                    throw new Error('invalid parameter');
                }
                this.m_over = flg;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * set theme contents
         * 
         * @param thm : (mofron.theme object) theme
         */

    }, {
        key: 'setTheme',
        value: function setTheme(thm) {
            try {
                if (false === mofron.func.isObject(thm, 'Theme')) {
                    throw new Error('invalid parameter');
                }
                var thm_cnt = thm.get();
                var set_flg = false;
                for (var cnt_key in thm_cnt) {
                    for (var idx in thm_cnt[cnt_key]) {
                        var _idx = parseInt(idx);
                        if (null === thm_cnt[cnt_key][_idx]) {
                            /* skip null contents */
                            continue;
                        }

                        if (false === this.override() && null !== this.get(cnt_key, _idx)) {
                            continue;
                        }

                        this.set(cnt_key, thm_cnt[cnt_key][_idx], _idx);
                        set_flg = true;
                    }
                }
                if (null === this.target()) {
                    throw new Error('could not find target component');
                }
                this.target().themeConts(this);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'style',
        value: function style(kv, idx) {
            try {
                if (undefined === kv || 'number' === typeof kv) {
                    /* getter */
                    return this.get('Style', kv);
                }
                /* setter */
                if ('object' !== (typeof kv === 'undefined' ? 'undefined' : _typeof(kv))) {
                    throw new Error('invalid parameter');
                }
                var style = this.get('Style');
                for (var kv_idx in kv) {
                    style[kv_idx] = kv[kv_idx];
                }
                this.set('Style', style, idx, false);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'color',
        value: function color(clr, idx) {
            try {
                if (undefined === clr || 'number' === typeof clr) {
                    /* getter */
                    return this.get('Color', clr);
                }
                /* setter */
                if (false === mofron.func.isObject(clr, 'Color')) {
                    if ('object' === (typeof clr === 'undefined' ? 'undefined' : _typeof(clr)) && undefined !== clr[0]) {
                        for (var clr_idx in clr) {
                            this.color(clr[clr_idx], parseInt(clr_idx));
                        }
                        return;
                    }
                    throw new Error('invalid parameter');
                }
                this.set('Color', clr, idx);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'component',
        value: function component(key, cmp, po) {
            try {
                if (undefined === cmp) {
                    /* getter */
                    var thm_cmp = this.get(key, 0);
                    if (null !== thm_cmp) {
                        return undefined === thm_cmp[1] ? new thm_cmp[0]() : new thm_cmp[0](thm_cmp[1]);
                    }
                    return null;
                }
                /* setter */
                if ('function' !== typeof cmp) {
                    throw new Error('invalid parameter');
                }
                this.set(key, [cmp, po], 0);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'font',
        value: function font(fnt, idx) {
            try {
                if (undefined === fnt || 'number' == typeof fnt) {
                    /* getter */
                    return this.get('Font', fnt);
                }
                /* setter */
                if (false === mofron.func.isInclude(fnt, 'Font')) {
                    if ('object' === (typeof fnt === 'undefined' ? 'undefined' : _typeof(fnt)) && undefined !== fnt[0]) {
                        for (var fnt_idx in fnt) {
                            this.font(fnt[fnt_idx], parseInt(fnt_idx));
                        }
                        return;
                    }
                    throw new Error('invalid parameter');
                }
                fnt.pushTheme();
                this.set('Font', fnt, idx);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get theme contents
         * 
         * @param key : (string) theme identify key (option)
         * @param idx : (number) get index (option)
         * @return (object) theme value
         */

    }, {
        key: 'get',
        value: function get(key, idx) {
            try {
                if (undefined === key) {
                    return this.m_conts;
                } else if ('string' !== typeof key) {
                    throw new Error('invalid parameter');
                }

                var _idx = undefined === idx ? null : idx;
                if (null === _idx) {
                    return undefined === this.m_conts[key] ? null : this.m_conts[key];
                } else {
                    if (undefined === this.m_conts[key]) {
                        return null;
                    }
                    return undefined === this.m_conts[key][_idx] ? null : this.m_conts[key][_idx];
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * set theme contents
         * 
         * @param key  : (string) theme contetent key
         * @param val  : (object) theme element
         * @param idx  : (number) set index
         */

    }, {
        key: 'set',
        value: function set(key, val, idx) {
            try {
                var _val = val === undefined ? null : val;
                var _idx = idx === undefined ? 0 : idx;

                if ('string' !== typeof key || null === _val || 'number' !== typeof _idx || 0 > _idx) {
                    throw new Error('invalid parameter');
                }

                if (undefined === this.m_conts[key]) {
                    this.m_conts[key] = new Array();
                }

                var loop = 0;
                var set_flg = false;
                for (; loop < 10; loop++) {
                    if (_idx === this.m_conts[key].length) {
                        this.m_conts[key].push(val);
                        set_flg = true;
                        break;
                    } else if (_idx < this.m_conts[key].length) {
                        this.m_conts[key][_idx] = val;
                        set_flg = true;
                        break;
                    } else {
                        this.m_conts[key].push(null);
                    }
                }
                if (false === set_flg) {
                    throw new Error('invalid parameter');
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * remove theme value
         *
         * @param key : (string) theme identify key
         * @param idx : (number) remove index
         */

    }, {
        key: 'del',
        value: function del(key, idx) {
            try {
                if (undefined === this.m_conts[key][idx]) {
                    throw new Error('invalid parameter');
                }

                var cnt = 0;
                for (var cnt_key in this.m_conts) {
                    if (cnt_key === key) {
                        this.m_conts[cnt_key].splice(idx, 1);
                        if (0 === this.m_conts[cnt_key].length) {
                            this.m_conts.splice(cnt, 1);
                        }
                        return;
                    }
                    cnt++;
                }

                throw new Error('invalid parameter');
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Base);
/* end of file */

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file   Component.js
 * @author simpart
 */

/**
 * @class Base
 * @brief base component class
 */
mofron.Component = function (_mofron$Base) {
    _inherits(_class, _mofron$Base);

    /**
     * initialize member, adom
     *
     * @param po : (object) component parameter / option (not require)
     */
    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Component');

            /* initialize member */
            _this.m_child = new Array();
            _this.m_adom = null;
            _this.m_conf = new Array(new Array(), /* layout */
            new Array(), /* effect */
            new Array() /* event */
            );
            _this.m_target = new Array(null, /* child */
            null, /* style */
            null /* event */
            );
            _this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /*** method ***/

    _createClass(_class, [{
        key: 'name',
        value: function name(nm) {
            try {
                if (undefined === nm) {
                    return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'name', this).call(this);
                }
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'name', this).call(this, nm);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * child target setter / getter
         * 
         * @param tgt : (object) dom/adom object
         * @param idx : (number) set index
         * @return (object) dom/adom object
         */

    }, {
        key: 'target',
        value: function target(tgt, idx) {
            try {
                this.adom();
                var _idx = undefined === idx ? 0 : idx;
                if (undefined === tgt) {
                    /* getter */
                    if (0 === _idx && null === this.m_target[_idx]) {
                        if (0 === this.adom().child().length) {
                            return null;
                        }
                        this.target(this.adom().child()[0]);
                    }
                    return this.m_target[_idx];
                }
                /* setter */
                if (null === tgt || 'object' !== (typeof tgt === 'undefined' ? 'undefined' : _typeof(tgt))) {
                    throw new Error('invalid parameter');
                }
                this.m_target[_idx] = tgt;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get style target adom
         *
         * @param tgt : (object) dom/adom object
         * @return (object) dom/adom object
         */

    }, {
        key: 'styleTgt',
        value: function styleTgt(tgt) {
            try {
                if (undefined === tgt) {
                    /* getter */
                    if (null === this.m_target[1]) {
                        if (null === this.target()) {
                            return null;
                        }
                        this.target(this.target(), 1);
                    }
                    return this.m_target[1];
                }
                /* setter */
                this.target(tgt, 1);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get event target adom
         *
         * @param tgt : (object) dom/adom object
         * @return (object) dom/adom object
         */

    }, {
        key: 'eventTgt',
        value: function eventTgt(tgt) {
            try {
                if (undefined === tgt) {
                    /* getter */
                    if (this.target().getId() === this.adom().getId()) {
                        this.target(this.adom().child()[0], 2);
                    } else if (null === this.m_target[2]) {
                        return this.target();
                    }
                    return this.m_target[2];
                }
                /* setter */
                return this.target(tgt, 2);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * child component setter / getter
         * 
         * @param chd : (object) child component
         * @param chd : (object) child component array
         * @return (array) : childlen object
         */

    }, {
        key: 'child',
        value: function child(chd) {
            try {
                if (undefined === chd) {
                    /* getter */
                    this.adom(); // for before initDomConts()
                    return this.m_child;
                }
                /* setter */
                if ('object' !== (typeof chd === 'undefined' ? 'undefined' : _typeof(chd))) {
                    this.addChild(chd);
                    return;
                }

                var set_chd = null;
                var set_disp = true;
                for (var idx in chd) {
                    this.addChild(chd[idx]);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addChild',
        value: function addChild(chd, idx) {
            try {
                if (false === mofron.func.isInclude(chd, 'Component')) {
                    throw new Error('invalid parameter');
                }

                /* configure child */
                chd.theme(null === this.theme() ? undefined : this.theme());

                /* setting parent-child relation */
                chd.parent(this); // child's parent is me
                this.target().addChild(chd.adom(), idx); // parent relate to child at dom level

                if (undefined === idx || 0 === this.m_child.length) {
                    this.m_child.push(chd);
                } else {
                    this.m_child.splice(idx, 0, chd);
                }

                if (null !== this.m_adom && this.adom().isPushed()) {
                    /* render child */
                    var lo = this.layout();
                    for (var lo_idx in lo) {
                        lo[lo_idx].execute();
                    }
                    chd.render();
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'updChild',
        value: function updChild(o_chd, n_chd) {
            try {
                if (false === mofron.func.isInclude(o_chd, 'Component') || false === mofron.func.isInclude(n_chd, 'Component')) {
                    throw new Error('invalid parameter');
                }

                /* search index of old-child */
                var chd = this.child();
                var upd_idx = null;
                for (var chd_idx in chd) {
                    if (chd[chd_idx].getId() === o_chd.getId()) {
                        upd_idx = chd_idx;
                        break;
                    }
                }
                if (null === upd_idx) {
                    throw new Error('invalid parameter');
                }

                var old_tgt = chd[upd_idx].adom().parent();
                var buf_tgt = this.target();

                /* replace child */
                var upd_disp = this.child()[upd_idx].visible();
                this.child()[upd_idx].destroy();

                this.target(old_tgt);
                this.addChild(n_chd, upd_disp, upd_idx);
                this.target(buf_tgt);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /* for destroy */

    }, {
        key: 'delChild',
        value: function delChild(idx) {
            try {
                if ('number' !== typeof idx || undefined === this.child()[idx]) {
                    throw new Error('invalid parameter');
                }
                this.m_child.splice(idx, 1);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * parent getter / setter
         *
         * @param pnt : (object) parent component
         */

    }, {
        key: 'parent',
        value: function parent(pnt) {
            try {
                if (undefined === pnt) {
                    return undefined === this.m_parent ? null : this.m_parent;
                }
                if (null !== pnt && false === mofron.func.isInclude(pnt, 'Component')) {
                    throw new Error('invalid parameter');
                }

                if (null !== pnt && null !== this.parent() || null !== this.m_adom && true === this.target().isPushed()) {
                    /* rewrite parent */
                    this.destroy();
                }
                this.m_parent = pnt;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * style getter / setter
         *
         * @param kv (object) 
         * @param los (boolean) loose flag
         * @return (object) style object
         */

    }, {
        key: 'style',
        value: function style(kv, los) {
            try {
                if ('string' === typeof kv || undefined === kv) {
                    /* getter */
                    return this.styleTgt().style(kv);
                }
                /* setter */
                this.styleTgt().style(kv, los);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'event',
        value: function event(evt) {
            try {
                if (undefined === evt) {
                    /* getter */
                    return this.config(2);
                }
                /* setter */
                if ('object' !== (typeof evt === 'undefined' ? 'undefined' : _typeof(evt))) {
                    this.addEvent(evt);
                    return;
                }
                for (var eidx in evt) {
                    this.addEvent(evt[eidx]);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * add component event 
         *
         * @param evt : (object) event object
         */

    }, {
        key: 'addEvent',
        value: function addEvent(evt) {
            try {
                this.addConfig(2, evt);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'layout',
        value: function layout(lo) {
            try {
                if (undefined === lo) {
                    /* getter */
                    return this.config(0);
                }
                /* setter */
                if ('object' !== (typeof lo === 'undefined' ? 'undefined' : _typeof(lo))) {
                    this.addLayout(lo);
                    return;
                }
                for (var lidx in lo) {
                    this.addLayout(lo[lidx]);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * add component layout
         *
         * @param lo : (object) layout object
         */

    }, {
        key: 'addLayout',
        value: function addLayout(lo) {
            try {
                this.addConfig(0, lo);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'effect',
        value: function effect(eff) {
            try {
                if (undefined === eff) {
                    /* getter */
                    return this.config(1);
                }
                /* setter */
                if ('object' !== (typeof eff === 'undefined' ? 'undefined' : _typeof(eff))) {
                    this.addEffect(eff);
                    return;
                }
                for (var eidx in eff) {
                    this.addEffect(eff[eidx]);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getConfig',
        value: function getConfig(tp, nm) {
            try {
                if ('layout' !== tp && 'effect' !== tp && 'event' !== tp) {
                    throw new Error('invalid type');
                }
                var cnf = this[tp]();
                if (undefined !== nm) {
                    for (var cidx in cnf) {
                        if (cnf[cidx].name() === nm) {
                            return cnf[cidx];
                        }
                    }
                } else {
                    return cnf;
                }
                return null;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addEffect',
        value: function addEffect(eff, flg) {
            try {
                if (undefined !== eff.speed()) {
                    /* update effect speed */
                    var eff_lst = this.effect();
                    for (var eidx in eff_lst) {
                        eff_lst[eidx].speed(eff.speed());
                    }
                } else {
                    if (0 !== this.effect().length && undefined !== this.effect()[0].speed()) {
                        eff.speed(this.effect()[0].speed());
                    }
                }
                if (undefined !== flg) {
                    eff.defStatus(flg);
                }
                this.addConfig(1, eff);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'config',
        value: function config(idx, cnf) {
            try {
                if (undefined === cnf) {
                    /* getter */
                    return undefined === this.m_conf[idx] ? null : this.m_conf[idx];
                }
                /* setter */
                if ('object' !== (typeof cnf === 'undefined' ? 'undefined' : _typeof(cnf))) {
                    throw new Error('invalid parameter');
                }
                if (undefined !== cnf[0]) {
                    for (var cidx in cnf) {
                        /* set child array */
                        this.addConfig(idx, cnf[cidx]);
                    }
                    return;
                }
                this.addConfig(idx, cnf);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addConfig',
        value: function addConfig(idx, cnf) {
            try {
                if (undefined === this.m_conf[idx] || false === mofron.func.isInclude(cnf, 'CompConf')) {
                    throw new Error('invalid parameter');
                }
                this.m_conf[idx].push(cnf);
                cnf.target(this);
                if (true === this.adom().isPushed()) {
                    if (1 === idx && false === cnf.defStatus()) {
                        return;
                    }
                    cnf.execute();
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * theme setter / getter
         *
         * @param thm : (object) theme object
         * @return (object) theme object
         */

    }, {
        key: 'theme',
        value: function theme(thm) {
            try {
                if (undefined === thm) {
                    /* getter */
                    if (undefined === this.m_theme) {
                        this.m_theme = new mofron.Theme({});
                        this.m_theme.target(this);
                    }
                    return this.m_theme;
                }
                /* setter */
                this.theme().setTheme(thm);
                var chd = this.m_child;
                for (var idx in chd) {
                    chd[idx].theme(thm);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'themeConts',
        value: function themeConts() {}

        /**
         * create componrnt DOM
         * 
         */

    }, {
        key: 'render',
        value: function render() {
            try {
                /* push contents to DOM */
                if (null === this.parent()) {
                    mofron.root.push(this);
                }

                /* set child config */
                this.initConfig(0); // layout
                this.initConfig(1); // effect

                /* before push event */
                this.beforeRender();
                this.adom().pushDom(null === this.parent() ? null : this.parent().target());
                /* after push event */
                this.afterRender();

                this.initConfig(2); // event
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'beforeRender',
        value: function beforeRender() {
            try {
                var chd = this.child();
                for (var idx in chd) {
                    chd[idx].beforeRender();
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'afterRender',
        value: function afterRender() {
            try {
                var chd = this.child();
                for (var idx in chd) {
                    chd[idx].afterRender();
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'initConfig',
        value: function initConfig(tgt_idx) {
            try {
                /* set child config */
                var chd = this.child();
                for (var cidx in chd) {
                    chd[cidx].initConfig(tgt_idx);
                }

                /* set config */
                var cnf = this.config(tgt_idx);
                for (var cfidx in cnf) {
                    cnf[cfidx].execute(1 === tgt_idx ? cnf[cfidx].defStatus() : undefined);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            try {
                if (null === this.m_adom) {
                    throw new Error('not initialized yet');
                }
                /* delete at dom level */
                this.adom().destroy();

                /* delete at component level */
                if (null !== this.parent()) {
                    var chd = this.parent().child(); // children from parent
                    for (var idx in chd) {
                        if (chd[idx].adom().getId() === this.adom().getId()) {
                            this.parent().delChild(parseInt(idx)); // separated from parent
                            break;
                        }
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'initDomContsCtl',
        value: function initDomContsCtl() {
            try {
                console.log();
                if (false === this.isInitDom()) {
                    this.adom(new mofron.Adom());
                    this.adom().component(this);
                    /*** initialize dom contents ***/
                    if (null === this.param()) {
                        /* this component is no parameter */
                        this.initDomConts();
                    } else {
                        var cmp_p = this.param().getParam();
                        /* call init function with parameters specified */
                        if (1 === cmp_p.length) {
                            this.initDomConts(cmp_p[0]);
                        } else if (2 === cmp_p.length) {
                            this.initDomConts(cmp_p[0], cmp_p[1]);
                        } else if (3 === cmp_p.length) {
                            this.initDomConts(cmp_p[0], cmp_p[1], cmp_p[2]);
                        } else {
                            throw new Error('too many component parameters');
                        }
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'initDomConts',
        value: function initDomConts(prm) {
            try {
                this.adom().addChild(new mofron.Dom('string' === typeof prm ? prm : 'div', this));
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'isInitDom',
        value: function isInitDom() {
            try {
                return null === this.m_adom ? false : true;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'visible',
        value: function visible(flg) {
            try {
                if (undefined === flg) {
                    /* getter */
                    return false === this.isInitDom() || 'none' === this.adom().style('display') ? false : true;
                }
                /* setter */
                if ('boolean' !== typeof flg) {
                    throw new Error('invalid parameter');
                }

                if (true === flg) {
                    if ('none' === this.adom().style('display')) {
                        this.adom().style({ 'display': null });
                    }
                } else {
                    this.adom().style({ 'display': 'none' });
                }

                if (null === this.parent()) {
                    if (false === this.adom().isPushed()) {
                        this.render();
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'vdom',
        value: function vdom(vd) {
            return this.adom(vd);
        }

        /**
         * agent dom setter / getter
         * 
         * @return (object) adom object
         */

    }, {
        key: 'adom',
        value: function adom(ad, rdf) {
            try {
                if (undefined === ad) {
                    /* getter */
                    if (null === this.m_adom) {
                        this.initDomContsCtl();
                    }
                    return this.m_adom;
                }
                /* setter */
                if (false === mofron.func.isInclude(ad, 'Dom')) {
                    throw new Error('invalid parameter : ' + (typeof ad === 'undefined' ? 'undefined' : _typeof(ad)));
                }
                this.m_adom = ad;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'size',
        value: function size(x, y) {
            try {
                if (undefined === x) {
                    /* getter */
                    return [this.width(), this.height()];
                }
                /* setter */
                this.width(x);
                this.height(y);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'width',
        value: function width(x) {
            try {
                if (undefined === x) {
                    /* getter */
                    return mofron.func.getLength(this.style('width'));
                }
                /* setter */
                this.style({
                    'width': 'number' === typeof x ? x + 'px' : x
                });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'height',
        value: function height(y) {
            try {
                if (undefined === y) {
                    /* getter */
                    return mofron.func.getLength(this.style('height'));
                }
                /* setter */
                this.style({
                    'height': 'number' === typeof y ? y + 'px' : y
                });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'execOption',
        value: function execOption(opt) {
            try {
                this.adom();
                opt = undefined === opt ? this.getOption() : opt;
                if (null === opt) {
                    return;
                }
                if (undefined !== opt.theme) {
                    this.theme(opt.theme);
                    delete opt.theme;
                }
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'execOption', this).call(this, opt);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Base);
/* end of file */

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file layout/Base.js
 * @brief Base class of layout
 */

mofron.Layout = function (_mofron$CompConf) {
    _inherits(_class, _mofron$CompConf);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, po));

            _this.name('Layout');
            _this.m_execnt = 0;

            var opt = _this.getOption();
            if (null !== opt) {
                _this.execOption(opt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'execute',
        value: function execute() {
            try {
                if (true === this.ignore()) {
                    return;
                }
                var tgt_chd = this.target().child();
                var _idx = null;
                for (var idx in tgt_chd) {
                    _idx = parseInt(idx);
                    if (_idx < this.m_execnt) {
                        continue;
                    }

                    this.layoutConts(_idx, tgt_chd[_idx]);
                    this.m_execnt++;
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'layoutConts',
        value: function layoutConts(idx, tgt) {
            try {
                console.warn('layout is not implements');
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.CompConf);
/* end of file */

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file event.js
 * @author simpart
 */

/**
 * @class mofron.event.Base
 * @brief base class of event
 */
mofron.Event = function (_mofron$CompConf) {
    _inherits(_class, _mofron$CompConf);

    /**
     * initialize member
     *
     * @param fnc : (option) function for event listener
     * @param prm : (option) function parameter
     */
    function _class(fnc, prm) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Event');

            if ('function' === typeof fnc) {
                _this.handler(fnc, prm);
            } else {
                _this.setPrmOpt(fnc);
                _this.execOption(undefined === fnc || null === fnc ? {} : fnc);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * set function for event listener
     *
     * @param fnc : (function) function for event listener
     * @param prm : (mixed) function parameter (option)
     */


    _createClass(_class, [{
        key: 'handler',
        value: function handler(fnc, prm) {
            try {
                return this.confFunc(fnc, prm);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'execute',
        value: function execute() {
            try {
                if (true !== this.ignore()) {
                    this.eventConts(this.target().eventTgt());
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * this is interface function.
         * extend class needs to implement this function.
         */

    }, {
        key: 'eventConts',
        value: function eventConts(tgt) {
            try {
                console.warn('not implement');
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.CompConf);
/* end of file */

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file effect/Base.js
 */

mofron.Effect = function (_mofron$CompConf) {
    _inherits(_class, _mofron$CompConf);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, po));

            _this.name('Effect');
            _this.m_cb = new Array(null, /* function */
            null /* parameter */
            );
            _this.execOption(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'execute',
        value: function execute(flg) {
            try {
                if (true === this.ignore()) {
                    return;
                }

                var _flg = flg === undefined ? true : flg;
                if ('boolean' !== typeof _flg) {
                    throw new Error('invalid paramter');
                }

                if (0 === this.speed()) {
                    if (true === _flg) {
                        this.enable(this.target());
                        this.status(true);
                    } else {
                        this.disable(this.target());
                        this.status(false);
                    }
                } else {
                    /* init exec */
                    if (true === _flg) {
                        this.disable(this.target());
                        this.status(false);
                    } else {
                        this.enable(this.target());
                        this.status(true);
                    }

                    this.setConf(true);

                    setTimeout(function (eff) {
                        try {
                            if (true === _flg) {
                                eff.enable(eff.target());
                                eff.status(true);
                            } else {
                                eff.disable(eff.target());
                                eff.status(false);
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    }, 200, this);
                }

                setTimeout(function (eff) {
                    try {
                        if (0 < eff.speed() && eff.getId() === eff.target().effect()[0].getId()) {
                            eff.setConf(false);
                        }
                        if (null != eff.callback()[0]) {
                            eff.callback()[0](eff.callback()[1]);
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }, this.speed() * 1000, this);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'setConf',
        value: function setConf(en) {
            try {
                if ('boolean' !== typeof en) {
                    throw new Error('invalid paramter');
                }
                var adom = this.target().adom();
                if (true === en) {
                    adom.style({
                        '-webkit-transition': 1000 * this.speed() + 'ms all linear 0s',
                        '-moz-transition': 'all ' + 1000 * this.speed() + 'ms',
                        '-ms-transition': 'all ' + 1000 * this.speed() + 'ms',
                        '-o-transition': 'all ' + 1000 * this.speed() + 'ms',
                        'transtion': 1000 * this.speed() + 'ms all linear 0s'
                    });
                } else {
                    adom.style({
                        '-webkit-transition': null,
                        '-moz-transition': null,
                        '-ms-transition': null,
                        '-o-transition': null,
                        'transtion': null
                    });
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'enable',
        value: function enable(tgt) {
            console.warn('not implement');
        }
    }, {
        key: 'disable',
        value: function disable(tgt) {
            console.warn('not implement');
        }
    }, {
        key: 'status',
        value: function status(sts) {
            try {
                if (undefined === sts) {
                    /* getter */
                    return undefined === this.m_sts ? false : this.m_sts;
                }
                /* setter */
                if ('boolean' !== typeof sts) {
                    throw new Error('invalid parameter');
                }
                this.m_sts = sts;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'defStatus',
        value: function defStatus(sts) {
            try {
                if (undefined === sts) {
                    /* getter */
                    return undefined === this.m_defsts ? true : this.m_defsts;
                }
                /* setter */
                if ('boolean' !== typeof sts) {
                    throw new Error('invalid parameter');
                }
                this.m_defsts = sts;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'speed',
        value: function speed(spd) {
            try {
                if (undefined === spd) {
                    /* getter */
                    return undefined === this.m_speed ? 0 : this.m_speed;
                }
                /* setter */
                if ('number' != typeof spd) {
                    throw new Error('invalid parameter');
                }
                this.m_speed = spd;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'callback',
        value: function callback(fnc, prm) {
            try {
                return this.confFunc(fnc, prm);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.CompConf);
/* end of file */

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file Template.js
 * @author simpart
 */

mofron.Template = function (_mofron$Base) {
    _inherits(_class, _mofron$Base);

    function _class(prm) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            var bs_cmp = function (_mofron$Component) {
                _inherits(bs_cmp, _mofron$Component);

                function bs_cmp() {
                    _classCallCheck(this, bs_cmp);

                    return _possibleConstructorReturn(this, (bs_cmp.__proto__ || Object.getPrototypeOf(bs_cmp)).apply(this, arguments));
                }

                _createClass(bs_cmp, [{
                    key: 'initTmplConts',
                    value: function initTmplConts(p) {
                        try {
                            p[0].initTmplConts(p[1]);
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    }
                }]);

                return bs_cmp;
            }(mofron.Component);
            _this.base(new bs_cmp());
            _this.name('Template');
            _this.base().initTmplConts([_this, prm]);

            var tmp = _this.getNameList();
            var tmp_str = 'mofron-tmpl-';
            for (var tidx in tmp) {
                if (0 == tidx) {
                    continue;
                } else if (1 != tidx) {
                    tmp_str += '-';
                }
                if ('i' !== 'I'.toLowerCase()) {
                    tmp_str += tmp[tidx].replace(/[A-Z]/g, function (ch) {
                        return String.fromCharCode(ch.charCodeAt(0) | 32);
                    });
                } else {
                    tmp_str += tmp[tidx].toLowerCase();
                }
            }
            if ('mofron-tmpl-' !== tmp_str) {
                _this.base().target().attr({ 'template': tmp_str });
            }

            _this.setPrmOpt(prm);
            _this.execOption();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'name',
        value: function name(nm) {
            try {
                if (undefined === nm) {
                    return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'name', this).call(this);
                }
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'name', this).call(this, nm);
                var tmp_atr = this.base().target().attr('template');
                var set_nm = null;
                if (null !== tmp_atr) {
                    if ('i' !== 'I'.toLowerCase()) {
                        set_nm = nm.replace(/[A-Z]/g, function (ch) {
                            return String.fromCharCode(ch.charCodeAt(0) | 32);
                        });
                    } else {
                        set_nm = nm.toLowerCase();
                    }
                    this.base().target().attr({ 'template': tmp_atr + '-' + set_nm });
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'base',
        value: function base(bs) {
            try {
                if (undefined === bs) {
                    /* getter */
                    return undefined === this.m_base ? null : this.m_base;
                }
                /* setter */
                if (false === mofron.func.isInclude(bs, 'Component')) {
                    throw new Error('invalid parameter');
                }
                this.m_base = bs;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'title',
        value: function title(val) {
            try {
                if (undefined === val) {
                    /* getter */
                    return undefined === this.m_title ? null : this.m_title;
                }
                /* setter */
                mofron.func.addHeadConts({
                    tag: 'title',
                    contents: val
                });
                this.m_title = val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'theme',
        value: function theme(thm) {
            try {
                if (undefined === thm) {
                    /* getter */
                    return this.base().theme();
                }
                /* setter */
                this.base().theme(thm);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'initTmplConts',
        value: function initTmplConts(prm) {
            try {
                console.log('not implements');
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'visible',
        value: function visible(flg, eff) {
            try {
                return this.base().visible(flg, eff);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Base);
/* end of file */

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file   mofron-comp-login/index.js
 * @author simpart
 */
var mf = __webpack_require__(0);
/* component */
var Appbase = __webpack_require__(31);
var Frame = __webpack_require__(6);
var LoginForm = __webpack_require__(36);
/* event */
var Click = __webpack_require__(2);
/* effect */
var Center = __webpack_require__(42);

/**
 * @class mofron.comp.Login
 * @brief login component for mofron
 */
mf.comp.Login = function (_Appbase) {
    _inherits(_class, _Appbase);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Login');
            _this.prmOpt(po);
            _this.adom();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * initialize vdom
     * 
     * @param prm : (string) text contents
     */


    _createClass(_class, [{
        key: 'initDomConts',
        value: function initDomConts(prm) {
            try {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initDomConts', this).call(this, prm);

                /* add frame */
                this.contents(this.frame());

                /* set form */
                this.frame().addChild(this.form());

                this.size(50);

                mf.func.addResizeWin(this.resizeEvent, this);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'themeConts',
        value: function themeConts() {
            try {
                /* set wrap color */
                var thm_clr = this.theme().color();
                if (null !== thm_clr) {
                    this.color(thm_clr);
                }

                /* set frame */
                var frm = this.theme().component('mofron-comp-frame');
                if (null !== frm) {
                    this.frame(frm);
                }

                /* set form */
                var fom = this.theme().component('mofron-comp-form');
                if (null !== fom) {
                    this.form(fom);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'resizeEvent',
        value: function resizeEvent(base) {
            try {
                var center = base.frame().getConfig('effect', 'Center');
                if (null !== center) {
                    center.execute(true);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'frame',
        value: function frame(frm) {
            try {
                if (undefined === frm) {
                    /* getter */
                    if (undefined === this.m_frame) {
                        this.frame(new Frame({
                            color: new mf.Color(240, 240, 240)
                        }));
                    }
                    return this.m_frame;
                }
                /* setter */
                if (false === mofron.func.isInclude(frm, 'Frame')) {
                    throw new Error('invalid parameter');
                }
                frm.execOption({
                    addEffect: new Center()
                });
                this.m_frame = frm;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'form',
        value: function form(fom) {
            try {
                if (undefined === fom) {
                    /* getter */
                    if (undefined === this.m_form) {
                        this.form(new LoginForm());
                    }
                    return this.m_form;
                }
                /* setter */
                if (false === mf.func.isInclude(fom, 'Form')) {
                    throw new Error('invalid parameter');
                }
                this.addFormResizeEvent(fom);
                this.m_form = fom;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'submit',
        value: function submit(btn) {
            try {
                if (undefined === btn) {
                    /* getter */
                    return this.form().submitComp();
                }
                /* setter */
                btn.text('Login');
                this.form().submitComp(btn);
                this.addFormResizeEvent(this.form());
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addFormResizeEvent',
        value: function addFormResizeEvent(fom) {
            try {
                var login = this;
                fom.submitComp().addEvent(new Click(function (tgt, p) {
                    try {
                        //let msg = 
                        if (true === p.visible()) {
                            var size = login.frame().size();
                            login.frame().size(size[0], login.form().height());
                            login.resizeEvent(login, false);
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }, fom.message()));
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'authConf',
        value: function authConf(uri, func) {
            try {
                var ret = this.form().uri(uri);
                this.form().callback(func, this);
                return ret;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'size',
        value: function size(val) {
            try {
                var ret = this.form().size(val); // login form size
                if (undefined !== val) {
                    this.header().height(val + 15); // header size
                    var hei = this.form().height();
                    this.frame().size(420, hei); // frame size
                }
                return ret;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'color',
        value: function color(clr) {
            try {
                var ret = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'color', this).call(this, clr);
                if (undefined !== ret) {
                    return ret;
                }
                /* set submit color */
                this.submit().color(clr);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(Appbase);
module.exports = mofron.comp.Login;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file   mofron-comp-appbase/index.js
 * @brief  common application component for mofron
 * @author simpart
 */
var mf = __webpack_require__(0);
var Header = __webpack_require__(32);

/**
 * @class mofron.comp.AppBase
 * @brief common application component class
 */
mf.comp.AppBase = function (_mf$Component) {
    _inherits(_class, _mf$Component);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('AppBase');
            _this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * initialize dom contents
     * 
     * @param prm (text, mofron-comp-Text) title
     */


    _createClass(_class, [{
        key: 'initDomConts',
        value: function initDomConts(prm) {
            try {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initDomConts', this).call(this);

                this.addChild(this.header());

                var hei = window.innerHeight - this.header().height();
                /* background */
                var bg = new mf.Component({
                    style: { 'position': 'fixed' },
                    height: hei
                });
                this.addChild(bg);

                /* contents */
                var conts = new mf.Component({ height: hei });
                this.addChild(conts);
                this.target(conts.target());

                mf.func.addResizeWin(function (p) {
                    try {
                        var _hei = window.innerHeight - p.header().height();
                        bg.height(_hei);
                        conts.height(_hei);
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }, this);

                if (undefined !== prm) {
                    this.title(prm);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'themeConts',
        value: function themeConts() {
            try {
                var hdr = this.theme().component('mofron-comp-apphdr');
                if (null !== hdr) {
                    this.header(hdr);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'title',
        value: function title(ttl) {
            try {
                return this.header().title(ttl);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'header',
        value: function header(hdr) {
            try {
                if (undefined === hdr) {
                    /* getter */
                    if (undefined === this.m_header) {
                        this.header(new Header());
                    }
                    return this.m_header;
                }
                /* setter */
                if (true !== mf.func.isInclude(hdr, 'Ttlhdr')) {
                    throw new Error('invalid parameter');
                }
                hdr.url(null === hdr.url() ? './' : undefined);
                if (true === this.target().isPushed() && undefined !== this.m_header) {
                    this.updChild(this.header(), hdr);
                }
                this.m_header = hdr;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'contents',
        value: function contents(cnt) {
            try {
                if (undefined === cnt) {
                    /* getter */
                    return this.child()[2].child();
                }
                /* setter */
                this.addChild(cnt);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'background',
        value: function background(val) {
            try {
                if (undefined === val) {
                    /* getter */
                    return this.child()[1];
                }
                /* setter */
                if (true !== mf.func.isInclude(val, 'Component')) {
                    throw new Error('invalid parameter');
                }
                val.size('100%', '100%');
                this.child()[1].addChild(val);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'color',
        value: function color(clr) {
            try {
                if (undefined === clr) {
                    /* getter */
                    return this.header().color();
                }
                /* set header color */
                this.header().color(clr);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mf.Component);
module.exports = mofron.comp.AppBase;
/* end of file */

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file   mofron-comp-apphdr/index.js
 * @author simpart
 */
var mf = __webpack_require__(0);
var Header = __webpack_require__(33);

mf.comp.Apphdr = function (_Header) {
    _inherits(_class, _Header);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Apphdr');
            _this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'initDomConts',
        value: function initDomConts(prm) {
            try {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initDomConts', this).call(this, prm);

                /* set index area */
                this.addChild(this.indexBase(), undefined, false);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addChild',
        value: function addChild(val, idx, flg) {
            try {
                if (false === flg) {
                    _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'addChild', this).call(this, val, idx);
                } else {
                    _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'addChild', this).call(this, val, this.child().length - 1);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'logo',
        value: function logo(img) {
            try {
                var chd = this.child();
                if (undefined === img) {
                    /* getter */
                    return 0 !== chd.length || true === mf.func.isInclude(chd[0], 'Image') ? chd[0] : null;
                }
                /* setter */
                if (true !== mf.func.isInclude(img, 'Image')) {
                    throw new Error('invalid parameter');
                }
                this.title(img, 0);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'indexBase',
        value: function indexBase(val) {
            try {
                if (undefined === val) {
                    /* getter */
                    if (undefined === this.m_idxbs) {
                        this.indexBase(new mf.Component());
                    }
                    return this.m_idxbs;
                }
                /* setter */
                if (true !== mf.func.isInclude(val, 'Component')) {
                    throw new Error('invalid parameter');
                }
                val.style({
                    'display': 'flex',
                    'align-items': 'center',
                    'margin-right': '20px',
                    'margin-left': 'auto'
                });
                this.m_idxbs = val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'indexConts',
        value: function indexConts(val) {
            try {
                var idxbs = this.indexBase();
                if (undefined === val) {
                    /* getter */
                    return idxcnt.child();
                }
                /* setter */
                if (true !== mf.func.isInclude(val, 'Component')) {
                    throw new Error('invalid parameter');
                }
                val.style({
                    'margin-right': '20px',
                    'margin-left': 'auto'
                });
                if (0 === idxbs.child().length) {
                    idxbs.addChild(val);
                } else {
                    idxbs.updChild(idxbs.child()[0], val);
                }

                this.url(null === this.url() ? './' : undefined);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(Header);
module.exports = mf.comp.Apphdr;
/* end of file */

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file   mofron-comp-ttlhdr/index.js
 * @brief  title header component for mofron
 * @author simpart
 */
var mf = __webpack_require__(0);
var Header = __webpack_require__(34);
var Text = __webpack_require__(1);
var Click = __webpack_require__(2);
var Horizon = __webpack_require__(5);

mf.comp.Ttlhdr = function (_Header) {
    _inherits(_class, _Header);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Ttlhdr');
            _this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }
    /**
     * initialize dom contents
     *
     * @param prm : (string, mofron-comp-text) title
     */


    _createClass(_class, [{
        key: 'initDomConts',
        value: function initDomConts(prm) {
            try {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initDomConts', this).call(this);

                this.target().style({
                    'align-items': 'center'
                });
                var ttl_base = new mf.Component({
                    addLayout: new Horizon(),
                    style: {
                        'align-items': 'center',
                        'margin-left': '20px'
                    }
                });
                this.addChild(ttl_base);

                /* set header title area */
                if (null !== prm) {
                    this.title(prm);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'title',
        value: function title(val, idx) {
            try {
                var ttl = this.child()[0];
                if (undefined === val) {
                    /* getter */
                    return 0 === ttl.child().length ? null : ttl.child();
                }
                /* setter */
                if ('string' === typeof val) {
                    val = new Text(val);
                } else if (true !== mf.func.isInclude(val, 'Component')) {
                    throw new Error('invalid parameter');
                }

                if (true === mf.func.isInclude(val, 'Text')) {
                    val.size(this.height() - 10);
                } else if (true === mf.func.isInclude(val, 'Component')) {
                    val.height(this.height());
                } else {
                    throw new Error('invalid parameter');
                }

                this.setTitleEvent(val);
                this.setTitleColor(val);

                ttl.addChild(val, idx);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'setTitleEvent',
        value: function setTitleEvent(val) {
            try {
                var clk_fnc = function clk_fnc(tgt, ttl) {
                    try {
                        location.href = null === ttl.url() ? './' : ttl.url();
                    } catch (e) {
                        console.log(e.stack);
                    }
                };
                /* set click event */
                val.addEvent(new Click(clk_fnc, this));
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'setTitleColor',
        value: function setTitleColor(ttl) {
            try {
                if (null === this.color()) {
                    return;
                }
                var rgb = this.color().rgba();
                var clr = 290 > rgb[0] + rgb[1] + rgb[2] ? new mf.Color(255, 255, 255) : new mf.Color(0, 0, 0);

                if (true === mf.func.isInclude(ttl, 'Text')) {
                    ttl.color(clr);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'color',
        value: function color(clr) {
            try {
                var ret = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'color', this).call(this, clr);
                if (undefined !== ret) {
                    if (null === ret) {
                        this.color(new mf.Color(255, 255, 255));
                        return this.color();
                    }
                    return ret;
                }
                var ttl = this.title();
                if (null !== ttl) {
                    for (var tidx in ttl) {
                        this.setTitleColor(ttl[tidx]);
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'url',
        value: function url(ul) {
            try {
                if (undefined === ul) {
                    /* getter */
                    return undefined === this.m_url ? null : this.m_url;
                }
                /* setter */
                if ('string' !== typeof ul) {
                    throw new Error('invalid prameter');
                }
                this.m_url = ul;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'height',
        value: function height(val) {
            try {
                var ret = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'height', this).call(this, val);
                if (undefined !== ret) {
                    /* getter */
                    return ret;
                }
                /* setter */
                if ('number' !== typeof val) {
                    throw new Error('invalid parameter');
                }
                var ttl = this.child();
                for (var idx in ttl) {
                    if (true === mf.func.isInclude(ttl[idx], 'Text')) {
                        if (val < ttl[idx].size() - 10) {
                            ttl[idx].size(val - 10);
                        }
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(Header);
module.exports = mf.comp.Ttlhdr;
/* end of file */

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file   index.js
 * @brief  header component for mofron
 * @author simpart
 */
var mf = __webpack_require__(0);
var Horizon = __webpack_require__(5);

/**
 * @class mofron.comp.Header
 * @brief header component class
 */
mf.comp.Header = function (_mf$Component) {
    _inherits(_class, _mf$Component);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Header');
            _this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'initDomConts',
        value: function initDomConts(prm) {
            try {

                /* set header dom contents */
                var hdr = new mf.Dom({
                    tag: 'div',
                    component: this,
                    style: { 'border-bottom': 'solid 1px lightgray',
                        'float': 'left' }
                });
                var pad = new mf.Dom({
                    tag: 'div',
                    component: this,
                    style: { 'float': 'none',
                        'position': 'static' }
                });

                /* set dom contents */
                this.adom().child([hdr, pad]);
                this.target(hdr);

                /* set default size */
                this.size('100%', 50);
                this.bind(true);

                /* child comp is added at horizon layout */
                this.addLayout(new Horizon());

                /* set child component */
                if (true === mf.func.isInclude(prm, 'Component')) {
                    this.addChild(prm);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'themeConts',
        value: function themeConts(thm) {
            try {
                if (null !== thm.color(0) && null === this.color()) {
                    this.color(thm.color(0));
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * set/get header height
         *
         * @param hei : (int,string) height
         */

    }, {
        key: 'height',
        value: function height(val) {
            try {
                var ret = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'height', this).call(this, val);
                if (undefined !== ret) {
                    return ret;
                }
                this.adom().child()[1].style({
                    'height': 'number' === typeof val ? val + 'px' : px
                });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * header background color setter / getter
         *
         * clr : (object) color
         */

    }, {
        key: 'color',
        value: function color(clr) {
            try {
                if (undefined === clr) {
                    /* getter */
                    return mf.func.getColor(this.style('background'));
                }
                /* setter */
                if (false === mf.func.isObject(clr, 'Color')) {
                    throw new Error('invalid parameter');
                }
                this.style({ 'background': clr.getStyle() });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'bind',
        value: function bind(flg) {
            try {
                if (undefined === flg) {
                    /* getter */
                    return 'fixed' === this.style('position') ? true : false;
                }
                /* setter */
                if ('boolean' !== typeof flg) {
                    throw new Error('invalid parameter');
                }

                if (true === flg) {
                    this.style({
                        position: 'fixed',
                        'z-index': 999
                    });
                } else {
                    this.style({ position: null }, 'fixed' === this.style('position') ? false : true);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mf.Component);
module.exports = mofron.comp.Header;
/* end of file */

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file mofron-effect-radius/index.js
 * @author simpart
 */

/**
 * @class Radius
 * @brief radius style effect class
 */
mofron.effect.Radius = function (_mofron$Effect) {
    _inherits(_class, _mofron$Effect);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Radius');

            if ('number' === typeof po) {
                _this.value(po);
            } else {
                _this.setPrmOpt(po);
                _this.execOption();
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'value',
        value: function value(val) {
            try {
                if (undefined === val) {
                    return undefined === this.m_value ? 50 : this.m_value;
                }

                if ('number' !== typeof val || 0 > val) {
                    throw new Error('invalid parameter');
                }
                this.m_value = val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'enable',
        value: function enable() {
            try {
                this.target().style({
                    'webkit-border-radius': this.value() + 'px',
                    '-moz-border-radius': this.value() + 'px',
                    'border-radius': this.value() + 'px'
                });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'disable',
        value: function disable() {
            try {
                this.target().style({
                    'webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px'
                });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Effect);
module.exports = mofron.effect.Radius;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file mofron-comp-form-login/index.js
 * @author simpart
 */
var mf = __webpack_require__(0);
var Form = __webpack_require__(8);
var Input = __webpack_require__(41);
/**
 * @class LoginForm
 * @brief login form component for mofron
 */
mf.comp.LoginForm = function (_Form) {
    _inherits(_class, _Form);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('LoginForm');
            if (null === po) {
                _this.adom();
            } else {
                _this.prmOpt(po);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'initDomConts',
        value: function initDomConts(prm) {
            try {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initDomConts', this).call(this, prm);

                this.addChild(new Input({
                    label: 'Username',
                    setKey: 'username',
                    require: true
                }));

                this.addChild(new Input({
                    label: 'Password',
                    setKey: 'password',
                    require: true,
                    secret: true
                }));
                this.size(this.size());
                this.submitComp().text('Login');
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'themeConts',
        value: function themeConts() {
            try {
                var inp = this.theme().component('mofron-comp-input');
                if (null !== inp) {
                    //this.input(inp);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'size',
        value: function size(siz) {
            try {
                if (undefined === siz) {
                    /* getter */
                    if (undefined === this.m_size) {
                        this.size(20);
                    }
                    return this.m_size;
                }
                /* setter */
                if ('number' !== typeof siz) {
                    throw new Error('invalid paramter');
                }
                this.m_size = siz;

                var chd = this.child();
                for (var cidx in chd) {
                    if (this.child().length - 1 == cidx && true === mf.func.isObject(chd[cidx], 'Component')) {
                        this.submitComp().height(siz - siz / 3);
                    } else {
                        chd[cidx].height(siz);
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'height',
        value: function height() {
            try {
                var hei = 0;
                var buf = null;
                var chd = this.child();
                for (var cidx in chd) {
                    if (true === mf.func.isInclude(chd[cidx], 'Message') && true !== chd[cidx].visible()) {
                        /* noting to do */
                        continue;
                    } else if (this.child().length - 1 == cidx && true === mf.func.isObject(chd[cidx], 'Component')) {
                        hei += this.submitComp().height();
                    } else {
                        buf = null;
                        buf = chd[cidx].height();
                        if ('number' === typeof buf) {
                            hei += buf;
                        }
                    }
                    hei += this.getConfig('layout', 'Margin').value();
                }
                hei += this.getConfig('layout', 'Margin').value();
                return hei;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(Form);
module.exports = mofron.comp.LoginForm;
/* end of file */

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file   mofron-comp-button/index.js
 * @author simpart
 */
var mf = __webpack_require__(0);
var Text = __webpack_require__(1);
var Click = __webpack_require__(2);
/**
 * @class Button
 * @brief button component class
 */
mf.comp.Button = function (_mf$Component) {
    _inherits(_class, _mf$Component);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Button');
            _this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }
    /**
     * initialize DOM contents
     *
     * @param prm : (string) button contents
     * @param prm : (object) component object of button contents
     */


    _createClass(_class, [{
        key: "initDomConts",
        value: function initDomConts(prm) {
            try {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "initDomConts", this).call(this, 'button');

                /* set contents */
                if (true === mf.func.isInclude(prm, 'Text')) {
                    this.addChild(prm);
                } else if (undefined === prm) {
                    this.addChild(new Text(''));
                } else if ('string' === typeof prm) {
                    this.addChild(new Text(prm));
                }
                /* set style */
                this.style({ 'cursor': 'pointer' });
                this.height(25);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: "themeConts",
        value: function themeConts() {
            try {
                /* set text component */
                var txt = this.theme().component('mofron-comp-text');
                if (null !== txt) {
                    txt.execOption(this.text().getOption());
                    this.text(txt);
                }
                /* set color */
                var clr = this.theme().color(0);
                if (null !== clr) {
                    this.color(clr);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * button click event setter / getter
         * 
         * @param func : (function) function for click event listener
         * @param prm : (mixed) function parameter (not required)
         * @return (object) [0] -> event function
         *                  [1] -> function parameter
         * @note do not specify parameters, if use as getter
         */

    }, {
        key: "clickEvent",
        value: function clickEvent(func, prm) {
            try {
                if (undefined === func) {
                    /* getter */
                    var evt = this.event();
                    for (var idx in evt) {
                        if ('Click' === evt[idx].name()) {
                            return evt[idx].eventFunc();
                        }
                    }
                    return new Array(null, null);
                }
                /* setter */
                if (null === func || 'function' !== typeof func) {
                    throw new Error('invalid parameter');
                }
                this.addEvent(new Click(func, prm === undefined ? null : prm));
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * button color setter / getter
         *
         * @param clr : (object) mofron.util.Color object
         * @return (null) no setting color
         * @return (object) mofron.util.Color object
         * @note do not specify parameters, if use as getter
         */

    }, {
        key: "color",
        value: function color(clr) {
            try {
                if (undefined === clr) {
                    /* getter */
                    return mf.func.getColor(this.style('background'));
                }
                /* setter */
                if (false === mf.func.isObject(clr, 'Color')) {
                    throw new Error('invalid parameter');
                }

                var rgb = clr.rgba();
                if (290 > rgb[0] + rgb[1] + rgb[2]) {
                    this.child()[0].color(new mf.Color(255, 255, 255));
                }

                this.style({ 'background': clr.getStyle() });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: "text",
        value: function text(txt) {
            try {
                if (undefined === txt) {
                    /* getter */
                    return this.child()[0];
                }
                /* setter */
                if (true === mf.func.isInclude(txt, 'Text')) {
                    if (0 === this.m_child.length) {
                        this.addChild(txt);
                    } else {
                        this.updChild(this.child()[0], txt);
                    }
                } else if ('string' === typeof txt) {
                    this.text().text(txt);
                } else {
                    throw new Error('invalid parameter');
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: "height",
        value: function height(val, tflg) {
            try {
                var ret = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "height", this).call(this, val);
                if (undefined === ret) {
                    this.text().size(val * 0.7);
                }
                return ret;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mf.Component);
module.exports = mofron.comp.Button;
/* end of file */

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file   mofron-comp-message/index.js
 * @author simpart
 */
var mf = __webpack_require__(0);
var Frame = __webpack_require__(6);
var Text = __webpack_require__(1);
/**
 * @class Message
 * @brief text component for mofron
 */
mf.comp.Message = function (_mf$Component) {
    _inherits(_class, _mf$Component);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Message');
            _this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * initialize vdom
     * 
     * @param prm : (string) text contents
     */


    _createClass(_class, [{
        key: 'initDomConts',
        value: function initDomConts(prm) {
            try {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initDomConts', this).call(this);
                this.addChild(this.frame());
                this.target(this.frame().target());

                this.text(null === prm ? '' : prm);
                this.addChild(this.text());

                /* frame setting */
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addChild',
        value: function addChild(chd, idx) {
            try {
                //chd.style({
                //    margin : '10px'
                //});
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'addChild', this).call(this, chd, idx);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'frame',
        value: function frame(frm) {
            try {
                if (undefined === frm) {
                    /* getter */
                    if (undefined === this.m_msg_frm) {
                        this.frame(new Frame());
                    }
                    return this.m_msg_frm;
                }
                /* setter */
                if (true !== mf.func.isInclude(frm, 'Frame')) {
                    throw new Error('invalid parameter');
                }
                frm.size(null, null);
                frm.style({
                    'display': 'flex',
                    'align-items': 'center'
                });
                this.m_msg_frm = frm;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'text',
        value: function text(txt) {
            try {
                if (undefined === txt) {
                    /* getter */
                    if (undefined === this.m_msg_txt) {
                        this.text('');
                    }
                    return this.m_msg_txt;
                }
                /* setter */
                if (undefined !== this.m_msg_txt) {
                    /* update message text */
                    if ('string' === typeof txt) {
                        this.m_msg_txt.text(txt);
                    } else if (true === mf.func.isInclude(txt, 'Text')) {
                        this.updChild(this.m_msg_txt, txt);
                    } else {
                        throw new Error('invalid parameter');
                    }
                } else {
                    var set_txt = txt;
                    if ('string' === typeof set_txt) {
                        set_txt = new Text(txt);
                        set_txt.style({
                            'margin-left': '10px'
                        });
                    }
                    if (true === mf.func.isInclude(set_txt, 'Text')) {
                        this.m_msg_txt = set_txt;
                    } else {
                        throw new Error('invalid parameter');
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * text color setter / getter
         * 
         * @param clr : (mofron.Color) color object
         * @return (string) color
         * @note do not specify parameters, if use as getter
         */

    }, {
        key: 'color',
        value: function color(clr) {
            try {
                if (undefined === clr) {
                    /* getter */
                    return mf.func.getColor(this.style('border-color'));
                }
                /* setter */
                if (false === mf.func.isObject(clr, 'Color')) {
                    throw new Error('invalid parameter');
                }
                /* set border color */
                this.style({
                    'border-color': clr.getStyle()
                });
                /* set frame color */
                var val = clr.rgba();
                clr.rgba(val[0] > 85 ? 255 : val[0] + 170, val[1] > 85 ? 255 : val[1] + 170, val[2] > 85 ? 255 : val[2] + 170, val[3]);
                this.frame().color(clr);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'height',
        value: function height(val) {
            try {
                if (40 < val) {
                    this.text().size(val - 20);
                }
                return this.frame().height(val);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mf.Component);
mofron.comp.message = {};
module.exports = mofron.comp.Message;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file mofron-layout-margin/index.js
 * @brief margin layout of mofron
 * @author simpart
 */

mofron.layout.Margin = function (_mofron$Layout) {
    _inherits(_class, _mofron$Layout);

    function _class(tp, val) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Margin');

            _this.m_type = null;
            _this.m_value = null;

            if ('object' === (typeof tp === 'undefined' ? 'undefined' : _typeof(tp))) {
                _this.prmOpt(tp);
            } else {
                _this.type(tp);
                _this.value(val);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'layoutConts',
        value: function layoutConts(idx, tgt) {
            try {
                var mg = 'margin';
                if ('' !== this.type()) {
                    mg += '-' + this.type();
                }
                var setmgn = {};
                setmgn[mg] = this.value() + 'px';
                tgt.vdom().style(setmgn);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'type',
        value: function type(tp) {
            try {
                if (undefined === tp) {
                    return this.m_type;
                }
                if ('string' != typeof tp || '' != tp && 'top' != tp && 'right' != tp && 'bottom' != tp && 'left' != tp) {
                    throw new Error('invalid parameter');
                }
                this.m_type = tp;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'value',
        value: function value(val) {
            try {
                if (undefined === val) {
                    return this.m_value;
                }
                if (null === val || 'number' !== typeof val) {
                    throw new Error('invalid parameter');
                }
                this.m_value = val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Layout);
mofron.layout.margin = {};
module.exports = mofron.layout.Margin;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file mofron-layout-hrzcenter/index.js
 * @author simpart
 */

/**
 * @class HrzCenter
 * @brief horizon center layout
 */
mofron.layout.HrzCenter = function (_mofron$Layout) {
    _inherits(_class, _mofron$Layout);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('HrzCenter');
            'number' === typeof po ? _this.rate(po) : _this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'layoutConts',
        value: function layoutConts(idx, tgt) {
            try {
                if (null !== this.rate()) {
                    var type = this.type();
                    if (null === type) {
                        tgt.adom().style({
                            position: 'relative',
                            left: (100 - this.rate()) / 2 + '%'
                        });
                    } else {
                        var set_style = {};
                        set_style[type + '-left'] = (100 - this.rate()) / 2 + '%';
                        tgt.adom().style(set_style);
                    }
                    if ('function' === typeof tgt.width) {
                        tgt.width(this.rate() + '%');
                    } else {
                        tgt.adom().style({
                            width: this.rate() + '%'
                        });
                    }
                } else if (null !== this.width()) {
                    tgt.style({
                        position: 'relative',
                        'margin-left': 'auto',
                        'margin-right': 'auto'
                    });
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'rate',
        value: function rate(rt) {
            try {
                if (undefined === rt) {
                    /* getter */
                    return undefined === this.m_rate ? null : this.m_rate;
                }
                /* setter */
                if ('number' !== typeof rt || 0 > rt) {
                    throw new Error('invalid parameter');
                }
                this.m_rate = rt;
                if (null !== this.target() && true === this.target().adom().isPushed()) {
                    this.execute();
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'width',
        value: function width(wid) {
            try {
                if (undefined === wid) {
                    /* getter */
                    return undefined === this.m_width ? null : this.m_width;
                }
                /* setter */
                if ('number' !== typeof wid && 'string' !== typeof wid) {
                    throw new Error('invalid parameter');
                }
                this.m_width = wid;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'type',
        value: function type(tp) {
            try {
                if (undefined === tp) {
                    /* getter */
                    return undefined === this.m_type ? null : this.m_type;
                }
                /* setter */
                if ('string' !== typeof tp || !('padding' === tp || 'margin' === tp)) {
                    throw new Error('invalid parameter');
                }
                this.m_type = tp;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Layout);
mofron.layout.hrzcenter = {};
module.exports = mofron.layout.HrzCenter;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file   mofron-comp-input/index.js
 * @brief  input component class
 * @author simpart
 */
var mf = __webpack_require__(0);
var Form = __webpack_require__(8);
var Text = __webpack_require__(1);

mf.comp.Input = function (_Form) {
    _inherits(_class, _Form);

    /**
     * initialize inputtext component
     *
     * @param po : (string) default value
     * @param po : (object) option
     */
    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.m_defsiz = true;
            _this.name('Input');
            _this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'addChild',
        value: function addChild(chd, idx) {
            try {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'addChild', this).call(this, chd, idx, false);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'initDomConts',
        value: function initDomConts(prm) {
            try {
                /* set wrap dom */
                this.adom().addChild(new mf.Dom('div', this));
                var inp = new mofron.Dom({
                    tag: 'input',
                    target: this,
                    attr: { 'type': 'text' }
                });
                if (null !== prm) {
                    this.label(prm);
                }
                /* add label */
                this.addChild(this.label());
                /* add input */
                this.target().addChild(inp);

                this.target(inp);
                /* default size */
                this.size(150, 30, true);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'size',
        value: function size(x, y, f) {
            _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'size', this).call(this, x, y);
            if (undefined === f) {
                this.m_defsiz = false;
            }
        }
    }, {
        key: 'width',
        value: function width(val) {
            try {
                if (undefined === val) {
                    /* getter */
                    return mofron.func.getLength(this.style('width'));
                }
                this.adom().style({
                    'width': 'number' === typeof val ? val - 6 + 'px' : val
                });
                /* setter */
                this.style({
                    'width': '100%'
                });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'height',
        value: function height(val) {
            try {
                var lbl_flg = '' === this.label().text() ? false : true;
                if (undefined === val) {
                    /* getter */
                    return undefined === this.m_height ? null : this.m_height;
                }
                /* setter */
                if ('number' !== typeof val) {
                    throw new Error('invalid parameter');
                }

                this.adom().style({ 'height': val + 'px' });

                var inp_siz = val;
                if (true === lbl_flg) {
                    /* exists label */
                    this.label().size(val / 2);
                    inp_siz = val / 2;
                }

                this.style({
                    'height': inp_siz - 6 + 'px'
                });

                this.m_height = val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'text',
        value: function text(val) {
            try {
                if (undefined === val) {
                    /* getter */
                    return this.target().prop('value');
                }
                /* setter */
                if ('string' !== typeof val) {
                    throw new Error('invalid parameter');
                }
                this.target().prop({ value: val });
                this.target().attr({ value: val });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'checkValue',
        value: function checkValue() {
            try {
                if (true === this.require()) {
                    if ('' === this.value()) {
                        return '' === this.label().text() ? 'empty value' : this.label().text() + ' is required';
                    }
                }
                return null;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'value',
        value: function value(val) {
            try {
                if (undefined === val) {
                    /* getter */
                    return this.text(val);
                }
                /* setter */
                this.text(val);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'maxLength',
        value: function maxLength(len) {
            try {
                if (undefined === len) {
                    /* getter */
                    return this.target().attr('maxlength');
                }
                /* setter */
                if ('number' !== typeof len) {
                    throw new Error('invalid parameter');
                }
                this.target().attr({ maxlength: len });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'secret',
        value: function secret(flg) {
            try {
                if (undefined === flg) {
                    /* getter */
                    return 'password' === this.target().attr('type') ? true : false;
                }
                /* setter */
                if ('boolean' !== typeof flg) {
                    throw new Error('invalid parameter');
                }
                this.target().attr({ type: 'password' });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'label',
        value: function label(lbl) {
            try {
                if (undefined === lbl) {
                    /* getter */
                    if (undefined === this.m_label) {
                        this.label('');
                    }
                    return this.m_label;
                }
                /* setter */
                if (!('string' === typeof lbl || true === mofron.func.isInclude(lbl, 'Text'))) {
                    throw new Error('invalid parameter');
                }

                if ('string' === typeof lbl) {
                    if (undefined === this.m_label) {
                        this.m_label = new Text(lbl);
                    } else {
                        this.m_label.text(lbl);
                    }
                } else {
                    if (0 !== this.child().length) {
                        this.target(this.vdom().child()[0].child()[0]);
                        this.updChild(0, lbl);
                        this.target(this.vdom().child()[0].child()[1]);
                        this.vdom().child()[0].child()[0].child().pop();
                    }
                    this.m_label = lbl;
                }
                if ('' !== this.label().text() && true === this.m_defsiz) {
                    this.height(this.height() * 2);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(Form);
mofron.comp.input = {};
module.exports = mofron.comp.Input;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file mofron-effect-center/index.js
 * @author simpart
 */
var mf = __webpack_require__(0);

/**
 * @class mofron.effect.Center
 * @brief center effect class
 */
mf.effect.Center = function (_mf$Effect) {
    _inherits(_class, _mf$Effect);

    function _class(p_xflg, yflg) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, p_xflg));

            _this.name('Center');

            if ('boolean' === typeof p_xflg) {
                _this.xflag(p_xflg);
            }
            if ('boolean' === typeof yflg) {
                _this.yflag(yflg);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'xflag',
        value: function xflag(flg) {
            try {
                if (undefined === flg) {
                    /* getter */
                    return undefined === this.m_xflag ? true : this.m_xflag;
                }
                /* setter */
                if ('boolean' !== typeof flg) {
                    throw new Error('invalid parameter');
                }
                this.m_xflag = flg;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'yflag',
        value: function yflag(flg) {
            try {
                if (undefined === flg) {
                    /* getter */
                    return undefined === this.m_yflag ? true : this.m_yflag;
                }
                /* setter */
                if ('boolean' !== typeof flg) {
                    throw new Error('invalid parameter');
                }
                this.m_yflag = flg;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'enable',
        value: function enable(tgt) {
            try {
                var info = this.getInfo();
                if (true === this.xflag()) {
                    tgt.style({
                        'margin-left': 'auto',
                        'margin-right': 'auto'
                    });
                }

                if (true === this.yflag()) {
                    var phei = info.parent.height;
                    var thei = info.target.height;
                    if (null === phei || null === thei) {
                        throw new Error('could not get size value');
                    }

                    if (phei > thei) {
                        tgt.style({
                            position: 'relative',
                            top: (phei - thei) / 2 + 'px'
                        });
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'disable',
        value: function disable(tgt) {
            try {
                if (true === this.xflag()) {
                    tgt.style({
                        'margin-left': null,
                        'margin-right': null
                    });
                }

                if (true === this.yflag()) {
                    tgt.style({
                        'top': null
                    });
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getInfo',
        value: function getInfo() {
            try {
                var ret_val = {
                    parent: {},
                    target: null
                };
                var pnt = this.target().parent();

                /* get parent info */
                if (null === pnt) {
                    var size = [null, null];
                    var style = document.body.style;
                    ret_val.parent.width = undefined === style['width'] || '' === style['width'] ? window.innerWidth : mofron.func.getLength(style['width']);
                    ret_val.parent.height = undefined === style['height'] || '' === style['height'] ? window.innerHeight : mofron.func.getLength(style['height']);
                } else {
                    ret_val.parent = mofron.func.getCompSize(pnt);
                }

                /* get target info */
                ret_val.target = mofron.func.getCompSize(this.target());

                return ret_val;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mf.Effect);
module.exports = mofron.effect.Center;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file mofron-effect-fade/index.js
 * @author simpart
 */

/**
 * @class Fade
 * @brief fade effect class
 */
mofron.effect.Fade = function (_mofron$Effect) {
    _inherits(_class, _mofron$Effect);

    function _class(po) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Fade');

            _this.prmOpt(po);
            if (null !== _this.param()) {
                _this.speed(po);
            }

            /* set default speed */
            if (0 === _this.speed()) {
                _this.speed(0.7);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * fade in
     */


    _createClass(_class, [{
        key: 'enable',
        value: function enable(tgt) {
            try {
                tgt.vdom().style({ 'opacity': '1' });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * fade out
         */

    }, {
        key: 'disable',
        value: function disable(tgt) {
            try {
                tgt.vdom().style({ 'opacity': '0' });
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Effect);
module.exports = mofron.effect.Fade;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file theme.js
 * @brief app theme
 */
var mf = __webpack_require__(0);

module.exports = {
    theme: function theme(thm) {
        try {
            // please define app theme here
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
};
/* end of file */

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["app"] = __webpack_require__(46);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file namesp.js
 * @brief define namespace
 */
var mf = __webpack_require__(0);
module.exports = {
  root: new mf.Component(),
  conf: {}
};
/* end of file */

/***/ })
/******/ ]);