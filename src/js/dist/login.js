/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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

            _this.m_target = null;
            _this.m_protect = null;
            _this.m_conts = {};

            _this.target(tgt);
            _this.protect(false);
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
                    return this.m_target;
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
                    return this.rget();
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
                    return this.m_protect;
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(36);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);

__webpack_require__(1);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(1);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(20);

__webpack_require__(23);
__webpack_require__(24);

__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);

__webpack_require__(9);
__webpack_require__(12);
__webpack_require__(11);
__webpack_require__(10);
__webpack_require__(13);
module.exports = mofron;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(37);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(26);
__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(25);
__webpack_require__(27);
module.exports = ttrg;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


try {
    ttrg.init.addLoadEvt(function () {
        alert("init");
    });
} catch (e) {
    console.error(e.stack);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["app"] = __webpack_require__(35);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
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
            this.m_param = null;
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
                if ('string' !== typeof nm) {
                    throw new Error('invalid parameter');
                }
                this.m_name.push(nm);
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
        key: 'prmOpt',
        value: function prmOpt(prm_opt) {
            try {
                if (undefined === prm_opt || null === prm_opt) {
                    return;
                }
                if ('object' === (typeof prm_opt === 'undefined' ? 'undefined' : _typeof(prm_opt))) {
                    if (undefined !== _typeof(prm_opt[0]) && 'function' === typeof prm_opt['name']) {
                        this.m_param = prm_opt;
                        return;
                    }
                } else {
                    this.m_param = prm_opt;
                    return;
                }
                /* prm is option */
                var opt = prm_opt;
                if (null !== opt && 'object' === (typeof opt === 'undefined' ? 'undefined' : _typeof(opt))) {
                    /* option */
                    for (var opt_idx in opt) {
                        if ('param' === opt_idx) {
                            this.m_param = opt[opt_idx];
                        } else if ('function' === typeof this[opt_idx]) {
                            if ('option' === this[opt_idx] || 'name' === this[opt_idx]) {
                                throw new Error('invalid option');
                            }
                            if (true === mofron.func.isObject(opt[opt_idx], 'Param')) {
                                opt[opt_idx].call(this, opt_idx);
                            } else {
                                this[opt_idx](opt[opt_idx]);
                            }
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

/***/ }),
/* 7 */
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
                _this.m_param.push(arguments[idx]);
            }

            if (1 >= _this.m_param.length || 5 <= _this.m_param.length) {
                throw new Error('invalid parameter');
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
                if (2 === prm.length) {
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @file function.js
 * @brief util functions
 * @author simpart
 */

/**
 * get unique id
 *
 * @param tgt : (object) target mofron object
 * @return (string) unique id
 */
mofron.func.getId = function (tgt) {
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
        throw new e();
    }
};

mofron.func.getCamel = function (sty) {
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
};

mofron.func.getColor = function (sty) {
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
        throw new Error();
    }
};

mofron.func.getLength = function (val) {
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
        throw new Error();
    }
};

mofron.func.getStyleConts = function (sel, cnt) {
    try {
        var ret_val = sel + '{';
        for (var idx in cnt) {
            ret_val += idx + ':' + cnt[idx] + ';';
        }
        return ret_val + '}';
    } catch (e) {
        console.error(e.stack);
        throw new Error();
    }
};

mofron.func.isInclude = function (obj, nm) {
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
        var name_lst = obj.getNameList();
        for (var idx in name_lst) {
            if (nm === name_lst[idx]) {
                return true;
            }
        }
        return false;
    } catch (e) {
        console.error(e.stack);
        throw new Error();
    }
};

mofron.func.isObject = function (obj, nm) {
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
        throw new Error();
    }
};
/* end of file */

/***/ }),
/* 9 */
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
     * initialize member, vdom
     *
     * @param prm_opt : (object) component parameter / option (not require)
     */
    function _class(prm_opt) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Component');

            /* initialize member */
            _this.m_parent = null;
            _this.m_child = new Array();
            _this.m_vdom = null;
            _this.m_conf = new Array(new Array(), /* layout */
            new Array(), /* effect */
            new Array() /* event */
            );
            _this.m_target = new Array(null, /* child */
            null, /* style */
            null /* event */
            );
            _this.m_theme = null;

            _this.prmOpt(prm_opt);
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
                    this.vdom();
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
         * @param tgt : (object) dom/vdom object
         * @param idx : (number) set index
         * @return (object) dom/vdom object
         */

    }, {
        key: 'target',
        value: function target(tgt, idx) {
            try {
                var _idx = undefined === idx ? 0 : idx;
                if (undefined === tgt) {
                    /* getter */
                    if (0 === _idx && null === this.m_target[_idx]) {
                        if (0 === this.vdom().child().length) {
                            return null;
                        }
                        this.target(this.vdom().child()[0]);
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
         * get style target vdom
         *
         * @param tgt : (object) dom/vdom object
         * @return (object) dom/vdom object
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
         * get event target vdom
         *
         * @param tgt : (object) dom/vdom object
         * @return (object) dom/vdom object
         */

    }, {
        key: 'eventTgt',
        value: function eventTgt(tgt) {
            try {
                if (undefined === tgt) {
                    /* getter */
                    if (this.target().getId() === this.vdom().getId()) {
                        this.target(this.vdom().child()[0], 2);
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
         * @paran disp : (boolean) child display flag
         * @return (array) : childlen object
         */

    }, {
        key: 'child',
        value: function child(chd, disp) {
            try {
                if (undefined === chd) {
                    /* getter */
                    var ret_val = new Array();
                    for (var idx in this.m_child) {
                        ret_val.push(this.m_child[idx][0]);
                    }
                    return ret_val;
                }
                /* setter */
                if ('object' !== (typeof chd === 'undefined' ? 'undefined' : _typeof(chd))) {
                    throw new Error('invalid parameter');
                }

                if (undefined !== chd[0]) {
                    /* set child array */
                    for (var idx in chd) {
                        this.addChild(chd[idx], disp);
                    }
                    return;
                }

                this.addChild(chd, disp);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addChild',
        value: function addChild(chd, disp) {
            try {
                if (false === mofron.func.isInclude(chd, 'Component')) {
                    throw new Error('invalid parameter');
                }

                /* setting parent-child relation */
                chd.parent(this); // child's parent is me
                this.target().addChild(chd.vdom());
                this.m_child.push([chd, disp]);

                /* set theme to child */
                chd.theme(this.theme());

                /* init child */
                if (true === this.vdom().isPushed()) {
                    chd.render(disp);
                    for (var idx in this.m_layout) {
                        this.m_layout[idx].layout();
                    }
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
         * parent getter / setter
         *
         * @param pnt : (object) parent component
         */

    }, {
        key: 'parent',
        value: function parent(pnt) {
            try {
                if (undefined === pnt) {
                    return this.m_parent;
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
                if (undefined === kv) {
                    /* getter */
                    return undefined === kv ? this.styleTgt().style() : this.styleTgt().style(kv);
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
                return this.config(2, evt);
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
                return this.config(0, lo);
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
        value: function effect(eff, flg) {
            try {
                return this.config(1, eff, flg);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addEffect',
        value: function addEffect(eff, flg) {
            try {
                this.addConfig(1, eff, flg);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'config',
        value: function config(idx, cnf, prm) {
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
                    for (var cnf_idx in cnf) {
                        /* set child array */
                        this.addConfig(idx, cnf[cnf_idx], undefined === prm[cnf_idx] ? null : prm[cnf_idx]);
                    }
                    return;
                }

                this.addConfig(idx, cnf, prm);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'addConfig',
        value: function addConfig(idx, cnf, prm) {
            try {
                if (undefined === this.m_conf[idx] || false === mofron.func.isInclude(cnf, 'CompConf')) {
                    throw new Error('invalid parameter');
                }
                this.m_conf[idx].push(new Array(cnf, prm));
                cnf.target(this);
                if (true === this.vdom().isPushed()) {
                    cnf.execute(prm);
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
                    if (null === this.m_theme) {
                        this.m_theme = new mofron.Theme();
                        this.m_theme.target(this);
                    }
                    return this.m_theme;
                }
                /* setter */
                this.theme().setTheme(thm);
                var chd = this.child();
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
         * @param disp (bool) : initial visible flag. default is true
         */

    }, {
        key: 'render',
        value: function render(disp) {
            try {
                /* setting component visible */
                if (false === disp) {
                    this.vdom().style({ 'display': 'none' });
                }
                for (var idx in this.m_child) {
                    if (false === this.m_child[idx][1]) {
                        this.m_child[idx].vdom().style({ 'display': 'none' });
                    }
                }

                /* push contents to DOM */
                if (null === this.parent()) {
                    mofron.root.push(this);
                }
                this.vdom().pushDom(null === this.parent() ? null : this.parent().target());
                this.rendered();
                this.initConfig();
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'rendered',
        value: function rendered() {}
    }, {
        key: 'initConfig',
        value: function initConfig() {
            try {
                /* set child config */
                var chd = this.child();
                for (var idx in chd) {
                    chd[idx].initConfig();
                }

                for (var idx_1 in this.m_conf) {
                    for (var idx_2 in this.m_conf[idx_1]) {
                        this.m_conf[idx_1][idx_2][0].execute(this.m_conf[idx_1][idx_2][1]);
                    }
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
                if (null === this.m_vdom) {
                    throw new Error('not initialized yet');
                }
                var del_tgt = this.vdom().child();
                for (var idx_del in del_tgt) {
                    del_tgt[idx_del].getRawDom().remove();
                }
                if (null !== this.parent()) {
                    var chd = this.parent().child();
                    for (var idx in chd) {
                        if (chd[idx].getId() === this.getId()) {
                            chd[idx].delChild(idx);
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
                if (null === this.m_vdom) {
                    this.vdom(new mofron.Vdom());
                    this.initDomConts(this.m_param);
                }
                for (var idx in this.chd) {
                    chd[idx].initDomContsCtl();
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
                this.target(new mofron.Dom('string' === typeof prm ? prm : 'div', this));
                this.vdom().addChild(this.target());
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'visible',
        value: function visible(flg, eff) {
            try {
                if (undefined === flg) {
                    /* getter */
                    return null === this.m_vdom || 'none' === this.vdom().style('display') ? false : true;
                }
                /* setter */
                if ('boolean' !== typeof flg) {
                    throw new Error('invalid parameter');
                }

                /* initialize component */
                if (false === this.vdom().isPushed()) {
                    this.render(flg);
                }

                if (undefined !== eff && true === mofron.func.isObject(eff, 'Effect')) {
                    /* set effect */
                    eff.speed(1);
                    this.execute(eff, flg);
                } else {
                    if (true === flg) {
                        this.vdom().style({ 'display': null }, 'none' === this.vdom().style('display') ? undefined : true);
                    } else {
                        this.vdom().style({ 'display': 'none' });
                    }
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * virtual dom setter / getter
         * 
         * @return (object) vdom object
         */

    }, {
        key: 'vdom',
        value: function vdom(vd) {
            try {
                if (undefined === vd) {
                    /* getter */
                    if (null === this.m_vdom) {
                        this.initDomContsCtl();
                    }
                    return this.m_vdom;
                }
                /* setter */
                if (false === mofron.func.isInclude(vd, 'Dom')) {
                    throw new Error('invalid parameter : ' + (typeof vd === 'undefined' ? 'undefined' : _typeof(vd)));
                }
                this.m_vdom = vd;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Base);

/***/ }),
/* 10 */
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

    function _class(prm) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Effect');

            _this.m_speed = 0;
            _this.m_cb = new Array(null, /* function */
            null /* parameter */
            );

            _this.prmOpt(prm);
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
                var _flg = flg === undefined ? true : flg;
                if ('boolean' !== typeof _flg) {
                    throw new Error('invalid paramter');
                }

                if (0 === this.speed()) {
                    var exec = true === _flg ? this.enable : this.disable;
                    exec(this.target());
                } else {
                    /* init exec */
                    var init = true === _flg ? this.disable : this.enable;
                    init(this.target());

                    this.setConf(true);

                    setTimeout(function (eff, flg) {
                        try {
                            var exec = true === flg ? eff.enable : eff.disable;
                            exec(eff.target());
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    }, 200, this, flg);
                }

                setTimeout(function (eff) {
                    try {
                        if (null != eff.callback()[0]) {
                            eff.callback()[0](eff.callback()[1]);
                        }
                        eff.setConf(false);
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }, 1000 * this.speed() - 200, this);
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

                var vdom = this.target().vdom();
                if (true === en) {
                    vdom.style({
                        '-webkit-transition': 1000 * this.speed() - 200 + 'ms all linear 0s',
                        '-moz-transition': 'all ' + (1000 * this.speed() - 200) + 'ms',
                        '-ms-transition': 'all ' + (1000 * this.speed() - 200) + 'ms',
                        '-o-transition': 'all ' + (1000 * this.speed() - 200) + 'ms',
                        'transtion': 1000 * this.speed() - 200 + 'ms all linear 0s'
                    });
                } else {
                    vdom.style({
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
        key: 'speed',
        value: function speed(spd) {
            try {
                if (undefined === spd) {
                    /* getter */
                    return this.m_speed;
                }
                /* setter */
                if ('number' != typeof spd) {
                    throw new Error('invalid parameter');
                }
                this.m_speed = spd < 0.5 ? 0 : spd;
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

/***/ }),
/* 11 */
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

            if (undefined !== fnc) {
                _this.handler(fnc, prm);
            } else {
                _this.prmOpt(fnc);
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
                this.eventConts(this.target().eventTgt());
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

/***/ }),
/* 12 */
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

    function _class(prm_opt) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Layout');

            /* member */
            _this.m_execnt = 0;

            _this.prmOpt(prm_opt);
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
                var tgt_chd = this.target().child();
                for (var idx in tgt_chd) {
                    if (idx < this.m_execnt) {
                        continue;
                    }
                    this.layoutConts(idx, tgt_chd[idx]);
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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file template.js
 */

mofron.Template = function (_mofron$Base) {
    _inherits(_class, _mofron$Base);

    function _class(prm) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Template');

            /* initialize member */
            _this.m_base = null;
            _this.m_title = new Array(null, false);
            _this.m_theme = null;
            _this.base(new mofron.Component());

            _this.prmOpt(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'base',
        value: function base(bs) {
            try {
                if (undefined === bs) {
                    /* getter */
                    return this.m_base;
                }
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
                    return this.m_title[0];
                }
                /* setter */
                if ('string' !== typeof val) {
                    throw new Error('invalid parameter');
                }
                var hc = new mofron.HeadConts('title');
                hc.contents(val);
                hc.pushTag();
                this.m_title[0] = val;
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
                if (undefined === flg && undefined === eff) {
                    return this.base().visible();
                }
                var _eff = eff === undefined ? null : eff;
                if (false === this.base().isRendered()) {
                    this.initTmplConts(this.m_param);
                }

                this.base().visible(true, _eff);
                this.base().vdom().attr('template', this.name());
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

/***/ }),
/* 15 */
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
                var hc = new mofron.HeadConts('style');

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
                hc.contents(mofron.func.getStyleConts('@font-face', style));
                hc.pushTag();
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
                var hc = new mofron.HeadConts('style');
                var style = {
                    'font-family': this.getFamilyStyle()
                };
                hc.contents(mofron.func.getStyleConts('.' + this.m_class, { 'font-family': this.getFamilyStyle() }));
                hc.pushTag();
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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file HeadConts.js
 * @author simpart
 */

/**
 * @class HeadConts
 * @brief head tag contents
 */
mofron.HeadConts = function (_mofron$Base) {
    _inherits(_class, _mofron$Base);

    function _class(tag) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('HeadConts');

            _this.m_tag = null;
            _this.m_attr = {};
            _this.m_conts = '';

            _this.tag(tag);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'tag',
        value: function tag(tg) {
            try {
                if (undefined === tg) {
                    /* getter */
                    return this.m_tag;
                }
                /* setter */
                if ('string' != typeof tg) {
                    throw new Error('invalid parameter');
                }
                this.m_tag = tg;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'attr',
        value: function attr(key, val) {
            try {
                if (undefined === key) {
                    /* getter */
                    return this.m_attr;
                } else {
                    if ('string' !== typeof key) {
                        throw new Error('invalid parameter');
                    }
                    if (undefined === val) {
                        /* getter */
                        if (undefined === this.m_attr[key]) {
                            return null;
                        }
                        return this.m_attr[key];
                    }
                    /* setter */
                    if ('string' !== typeof val) {
                        throw new Error('invalid parameter');
                    }
                    this.m_attr[key] = val;
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'contents',
        value: function contents(txt) {
            try {
                if (undefined === txt) {
                    /* getter */
                    return this.m_conts;
                }
                if ('string' !== typeof txt) {
                    throw new Error('invalid parameter');
                }
                this.m_conts = txt;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'pushTag',
        value: function pushTag() {
            try {
                var set_conts = '';
                var attr_conts = '';
                var attr = this.attr();
                for (var key in attr) {
                    attr_conts += key;
                    if (null != attr[key]) {
                        attr_conts += '="' + attr[key] + '" ';
                    }
                }

                if (false === this.isSimpleTag(this.tag())) {
                    set_conts += '<' + this.tag() + ' ' + attr_conts + '>' + this.contents() + '</' + this.tag() + '>';
                } else {
                    set_conts += '<' + this.tag() + ' ' + attr_conts + '>' + this.contents();
                }

                document.head.insertAdjacentHTML('beforeend', set_conts);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'isSimpleTag',
        value: function isSimpleTag(tag) {
            try {
                if ('link' === tag || 'meta' === tag || 'base' === tag) {
                    return true;
                }
                return false;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Base);

/***/ }),
/* 17 */
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
    function _class() {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Theme');

            _this.m_target = null;
            _this.m_conts = {};
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
                    return this.m_target;
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

        /**
         * set theme contents
         * 
         * @param thm : (mofron.theme object) theme
         */

    }, {
        key: 'setTheme',
        value: function setTheme(thm, ovr) {
            try {
                if (false === mofron.func.isObject(thm, 'Theme')) {
                    throw new Error('invalid parameter');
                }
                var _ovr = undefined === ovr ? false : ovr;
                var thm_cnt = thm.get();
                var set_flg = false;
                for (var cnt_key in thm_cnt) {
                    for (var idx in thm_cnt[cnt_key]) {
                        var _idx = parseInt(idx);
                        if (null === thm_cnt[cnt_key][_idx]) {
                            /* skip null contents */
                            continue;
                        }

                        if (false === _ovr && null !== this.get(cnt_key, _idx)) {
                            continue;
                        }

                        this.set(cnt_key, thm_cnt[cnt_key][_idx], _idx, false);
                        set_flg = true;
                    }
                }
                if (null !== this.target() && true === set_flg) {
                    this.target().themeConts();
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * set font theme
         *
         * @param fnt : (object) Font object
         * @param idx : (number) set index (option)
         */

    }, {
        key: 'setFont',
        value: function setFont(fnt, idx) {
            try {
                if (false === mofron.func.isObject(fnt, 'Font')) {
                    throw new Error('invalid parameter');
                }
                fnt.pushTheme();
                this.set(fnt.name(), fnt, idx === undefined ? 0 : idx);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getFont',
        value: function getFont(idx) {
            try {
                return this.get('Font', idx === undefined ? 0 : idx);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * set color theme
         *
         * @param clr : (object) Color object
         * @param idx : (number) set index (option)
         */

    }, {
        key: 'setColor',
        value: function setColor(clr, idx, bind) {
            try {
                if (false === mofron.func.isObject(clr, 'Color')) {
                    throw new Error('invalid parameter');
                }
                this.set(clr.name(), clr, idx === undefined ? 0 : idx);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getColor',
        value: function getColor(idx) {
            try {
                return this.get('Color', idx === undefined ? 0 : idx);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'setComp',
        value: function setComp(cmp, idx, bind) {
            try {
                if ('object' !== (typeof cmp === 'undefined' ? 'undefined' : _typeof(cmp))) {
                    throw new Error('invalid parameter');
                }
                var cmp_obj = new cmp();
                if (false === mofron.func.isInclude(cmp_obj, 'Component')) {
                    throw new Error('invalid parameter');
                }
                this.set(cmp_obj.name(), cmp_obj, idx === undefined ? 0 : idx);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getComp',
        value: function getComp(cmp_nm, idx) {
            try {
                return this.get(cmp_nm === undefined ? null : cmp_nm, idx === undefined ? 0 : idx);
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
         * @param bind : (boolean) notify flag
         */

    }, {
        key: 'set',
        value: function set(key, val, idx, noti) {
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
                if (null !== this.target() && false !== noti) {
                    this.target().themeConts();
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

/***/ }),
/* 18 */
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
     * @param tgt : (object) target vdom object
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
                    ret_val += idx + '="' + this.m_conts[idx] + '"';
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
/* 19 */
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
     * @param tgt : (object) target vdom object
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
/* 20 */
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

    function _class(prm_opt) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('CompConf');

            /* member */
            _this.m_target = null;
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
                    return this.m_target;
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
    }]);

    return _class;
}(mofron.Base);
/* end of file */

/***/ }),
/* 21 */
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
/* 22 */
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
     * @param tgt : (object) target vdom object
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
/* 23 */
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

            _this.m_id = null;
            _this.m_comp = null;
            _this.m_tag = null;
            _this.m_classnm = new mofron.ClassName(_this);
            _this.m_parent = null;
            _this.m_child = new Array();
            _this.m_style = new mofron.Style(_this);
            _this.m_attr = new mofron.Attr(_this);
            _this.m_prop = new mofron.Prop(_this);
            _this.m_text = '';
            _this.m_value = null;
            _this.m_rawdom = null;

            /* check tag */
            if ('string' === typeof tg) {
                _this.tag(tg);
            }

            /* check component */
            if (undefined !== cmp) {
                _this.component(cmp);
            }

            /* check option */
            _this.prmOpt(tg);
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
                    return this.m_tag;
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
                    return this.m_comp;
                }
                /* setter */
                if (false === mofron.func.isInclude(cmp, 'Component')) {
                    throw new Error('invalid parameter');
                }
                this.m_comp = cmp;
                this.attr('component', cmp.name());
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * get tag id
         * 
         * @return (string) tag id
         */

    }, {
        key: 'getId',
        value: function getId() {
            try {
                if (null === this.m_id) {
                    this.m_id = mofron.func.getId();
                }
                return this.m_id;
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
         * add child vdom
         *
         * @param chd : (object) child vdom
         */

    }, {
        key: 'addChild',
        value: function addChild(chd) {
            try {
                if (false === mofron.func.isInclude(chd, 'Dom')) {
                    throw new Error('invalid parameter');
                }
                chd.parent(this);
                this.m_child.push(chd);
                this.value(null);
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
                if (true === los) {
                    this.m_style.protect(true);
                    this.m_style.set(kv);
                    this.m_style.protect(false);
                } else if ('object' === (typeof kv === 'undefined' ? 'undefined' : _typeof(kv))) {
                    this.m_style.set(kv);
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
                if ('string' === typeof kv) {
                    var set_obj = {};
                    set_obj[kv] = val;
                    this.m_attr.set(set_obj);
                } else {
                    this.m_attr.set(kv);
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
                if ('string' === typeof kv) {
                    var set_obj = {};
                    set_obj[kv] = val;
                    this.m_prop.set(set_obj);
                } else {
                    this.m_prop.set(kv);
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
                    return this.m_text;
                }
                /* setter */
                if ('string' !== typeof txt) {
                    throw new Error('invalid parameter');
                }
                this.m_text = txt;
                if (true === this.isPushed()) {
                    this.getRawDom().innerHTML = txt;
                }
                this.value(null);
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
                    if (null !== this.m_value) {
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

                    /* set buff */
                    this.value(ret_val);

                    /* set child value */
                    var child = this.child();
                    for (var chd_idx in child) {
                        ret_val += child[chd_idx].value();
                    }

                    if (false === this.isSimpleTag()) {
                        ret_val += '</' + this.tag() + '>';
                    }
                    return ret_val;
                }
                /* setter */
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

                if (true === this.isPushed()) {
                    throw new Error('already pushed');
                }

                this.parent(tgt);

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
         * get vdom status
         *
         * @return (boolean) true : this vdom had pushed
         * @return (boolean) false : this vdom had not pushed
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
         * update vdom status
         * 
         * @note update status also child vdom
         */

    }, {
        key: 'setPushed',
        value: function setPushed() {
            try {
                /* set rawdom */
                if (null === this.parent()) {
                    this.m_rawdom = document.querySelector('#' + this.getId());
                } else {
                    this.m_rawdom = this.parent().getRawDom().querySelector('#' + this.getId());
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
         * @return (boolean) true  : this vdom is simple tag
         * @return (boolean) false : this vdom is not simple tag
         */

    }, {
        key: 'isSimpleTag',
        value: function isSimpleTag() {
            try {
                if ('br' == this.m_tag || 'hr' == this.m_tag || 'input' == this.m_tag || 'img' == this.m_tag) {
                    return true;
                }
                return false;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * parent vdom setter / getter
         * 
         * @param pnt : (object) parent vdom
         * @return (object) parant vdom
         */

    }, {
        key: 'parent',
        value: function parent(pnt) {
            try {
                if (undefined === pnt) {
                    /* getter */
                    return this.m_parent;
                }
                /* setter */
                if ('object' !== (typeof pnt === 'undefined' ? 'undefined' : _typeof(pnt))) {
                    throw new Error('invalid parameter');
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
                    throw new Error('this dom is not rendered yet');
                }
                return this.m_rawdom;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Base);

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
 * @file Vdom.js
 * @author simpart
 */

/**
 * @class Vdom
 * @brief virtual dom class
 */
mofron.Vdom = function (_mofron$Dom) {
    _inherits(_class, _mofron$Dom);

    /**
     * initialize member
     *
     * @param tag : (string) tag name
     * @param cmp : (object) component object
     */
    function _class(prm_opt) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this.name('Vdom');

            _this.m_style = {};
            _this.m_classnm = {};
            _this.m_attr = {};
            _this.m_prop = {};

            _this.prmOpt(prm_opt);
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
                    return this.m_tag;
                }
                /* setter */
                if ('string' != typeof tg) {
                    throw new Error('invalid parameter');
                } else if (0 === chd.length) {
                    throw new Error('there is no child in this vdom');
                }

                var chd = this.child();
                /* setter */
                for (var idx in chd) {
                    chd[idx].tag(tg);
                }
                this.m_tag = tg;
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
                    return m_style;
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
                    return this.m_text;
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
         * update vdom status
         * 
         * @note update status also child vdom
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
                    throw new Error('this vdom is not rendered yet');
                }
                return this.m_rawdom;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Dom);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

ttrg.arry.Keyval = function () {
    function _class(dat) {
        _classCallCheck(this, _class);

        try {
            if (null === dat) {
                throw new Error('invalid parameter');
            }
            this.data = dat;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    _createClass(_class, [{
        key: 'getValue',
        value: function getValue(key) {
            try {
                if (null === key || '' == key) {
                    throw new Error('invalid parameter');
                }
                if (false === this.isKeyExists(key)) {
                    return null;
                }
                return this.data[key];
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'isKeyExists',
        value: function isKeyExists(key) {
            try {
                if (null === key || '' == key) {
                    throw new Error('invalid parameter');
                }
                for (var data_key in this.data) {
                    if (data_key === key) {
                        return true;
                    }
                }
                return false;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }, {
        key: 'getCount',
        value: function getCount() {
            try {
                var ret = 0;
                for (var data_key in this.data) {
                    ret++;
                }
                return ret;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


ttrg.debg.dumpObj = function (obj) {
    try {
        var ret_str = "";
        for (var i in obj) {
            ret_str += i + "=" + obj[i] + "\n";
        }
        return ret_str;
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


ttrg.init.addLoadEvt = function (fnc) {
    try {
        if (null === fnc || 'function' !== typeof fnc) {
            throw new Error('invalid parameter');
        }

        if (window.addEventListener) {
            window.addEventListener('load', fnc, false);
        } else if (window.attachEvent) {
            window.attachEvent('onload', fnc);
        } else {
            window.onload = fnc;
        }
    } catch (e) {
        console.log(e.stack);
        throw e;
    }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

ttrg.load.JsPara = function () {
    /**
     * initialize js loader
     *
     */
    function _class(bp) {
        _classCallCheck(this, _class);

        try {
            this.base_path = bp || './';
            this.load_path = new Array();
            this.callback = new Array(null, null);
            this.load_cnt = 0;
            this.loading = false;
            this.timeout = 1000;
            this.load_intvl = 200;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }

    _createClass(_class, [{
        key: 'addPath',
        value: function addPath(path) {
            try {
                if ('string' != typeof path) {
                    throw new Error('invalid parameter');
                }
                if (true === this.loading) {
                    throw new Error('Loader is busy');
                }
                /* check duplex */
                for (var load_path_idx in this.load_path) {
                    if (path == this.load_path[load_path_idx][0]) {
                        /* already  added */
                        return;
                    }
                }
                /* add load target path */
                this.load_path.push(new Array(path, false));
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
    }, {
        key: 'load',
        value: function load(cb_func, cb_prm, force) {
            try {
                /* check busy */
                if (true === this.loading) {
                    throw new Error('Loader is busy');
                }
                this.loading = true;

                /* set callback function */
                if (null !== cb_func) {
                    this.callback[0] = cb_func;
                    this.callback[1] = cb_prm;
                }
                var p_force = force || false;

                for (var load_path_idx in this.load_path) {
                    /* check loaded */
                    if (true === this.load_path[load_path_idx][1]) {
                        /* already loaded */
                        if (false === p_force) {
                            /* skip load */
                            continue;
                        }
                    }

                    /* load javascript */
                    var own_loader = this;
                    $.getScript(this.base_path + this.load_path[load_path_idx][0], function () {
                        try {
                            own_loader.loadedElem();
                        } catch (e) {
                            console.error(e.stack);
                        }
                    });
                }
                this.chkLoad(0);
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
    }, {
        key: 'loadedElem',
        value: function loadedElem() {
            try {
                this.load_cnt++;
                if (this.load_cnt === this.load_path.length) {
                    /* finished load */
                    /* update loaded flag */
                    for (var load_path_idx in this.load_path) {
                        this.load_path[load_path_idx][1] = true;
                    }
                    /* check callback function */
                    if (null !== this.callback[0]) {
                        var cb_func = this.callback[0];
                        var cb_parm = this.callback[1];
                        setTimeout(function () {
                            try {
                                cb_func(cb_parm);
                            } catch (e) {
                                console.error(e.stack);
                            }
                        }, this.load_intvl);
                        this.callback[0] = null;
                        this.callback[1] = null;
                    }
                    this.loading = false;
                }
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
    }, {
        key: 'chkLoad',
        value: function chkLoad(idx) {
            try {
                var load_flg = true;
                for (var load_path_idx in this.load_path) {
                    if (false === this.load_path[load_path_idx][1]) {
                        load_flg = false;
                        break;
                    }
                }
                if (false === load_flg) {
                    if (idx * 100 > this.timeout) {
                        throw new Error('timeout load js : ' + this.base_path + this.load_path[load_path_idx][0]);
                    }
                    var own_loader = this;
                    setTimeout(function () {
                        try {
                            own_loader.chkLoad(idx + 1);
                        } catch (e) {
                            console.error(e.stack);
                        }
                    }, 100);
                }
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
    }]);

    return _class;
}();

ttrg.load.JsSeri = function () {
    /**
     * initialize js loader
     *
     */
    function _class2(bp) {
        _classCallCheck(this, _class2);

        try {
            this.base_path = bp || './';
            this.load_path = new Array();
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }

    _createClass(_class2, [{
        key: 'addPath',
        value: function addPath(path) {
            try {
                if ('string' != typeof path) {
                    throw new Error('invalid parameter');
                }
                if (true === this.loading) {
                    throw new Error('Loader is busy');
                }
                /* check duplex */
                for (var load_path_idx in this.load_path) {
                    if (path == this.load_path[load_path_idx][0]) {
                        /* already  added */
                        return;
                    }
                }
                /* add load target path */
                this.load_path.push(path);
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
    }, {
        key: 'load',
        value: function load(force) {
            try {
                /* check stock */
                this.loadElm();
            } catch (e) {
                throw new Error(e.stack);
            }
        }
    }, {
        key: 'loadElm',
        value: function loadElm(idx) {
            try {
                var _idx = idx || 0;
                var own_obj = this;
                $.ajax({
                    url: this.base_path + this.load_path[_idx],
                    type: 'GET',
                    cache: false,
                    dataType: 'script',
                    async: false
                }).done(function (jqXHR, textStatus, errorThrown) {
                    try {
                        if (_idx < own_obj.load_path.length - 1) {
                            own_obj.loadElm(_idx + 1);
                        }
                    } catch (e) {
                        console.error(e.stack);
                    }
                }).fail(function (jqXHR, textStatus, errorThrown) {
                    throw new Error(textStatus);
                }).always(function (data, textStatus, errorThrown) {});
            } catch (e) {
                throw new Error(e.stack);
            }
        }
    }]);

    return _class2;
}();

/**
 * load css
 *
 * @param path to target css
 */
ttrg.load.css = function (path) {
    try {
        $('head').append('<link>');
        css = $('head').children(':last');
        css.attr({
            rel: 'stylesheet',
            type: 'text/css',
            href: path
        });
    } catch (e) {
        throw new Error(e.stack);
    }
};

/**
 * brief load html
 * 
 * @param hpath : (string) path to html file
 * @param h_id : (string) insert the destination 'id' attribute of html tag
 */
ttrg.load.html = function (h_path, h_id) {
    try {
        $.ajax({
            url: h_path,
            type: 'GET',
            cache: false,
            dataType: 'html',
            async: false
        }).done(function (jqXHR, textStatus, errorThrown) {
            $('#' + h_id).html(jqXHR);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            throw new Error();
        }).always(function (data, textStatus, errorThrown) {});
    } catch (e) {
        throw new Error(e.stack);
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


ttrg.rest.private = {};
ttrg.rest.get = function (uri, data, func, prm) {
    try {
        ttrg.rest.private.request(uri, 'GET', data, func, prm);
    } catch (e) {
        throw new Error(e.stack + '\n');
    }
};

ttrg.rest.post = function (uri, data, func, prm) {
    try {
        if (null == data) {
            throw new Error('invalid parameter');
        }
        ttrg.rest.private.request(uri, 'POST', data, func, prm);
    } catch (e) {
        throw new Error(e.stack + '\n');
    }
};

ttrg.rest.private.request = function (uri, type, data, func, prm) {
    try {
        $.ajax({
            url: uri,
            type: type,
            dataType: 'json',
            data: data
        }).done(function (jqXHR, textStatus, errorThrown) {
            try {
                if (null != func) {
                    if (null == prm) {
                        func(jqXHR);
                    } else {
                        func(jqXHR, prm);
                    }
                }
            } catch (e) {
                console.error(e.stack);
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.error('send request is failed');
        }).always(function (data, textStatus, errorThrown) {});
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


ttrg.time.getDate = function () {
    try {
        var date = new Date();
        return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    } catch (e) {
        throw new Error(e.stack + '\n');
    }
};

ttrg.time.getTime = function () {
    try {
        var time = new Date();
        return time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    } catch (e) {
        throw new Error(e.stack + '\n');
    }
};

ttrg.time.getUnix = function () {
    try {
        var start = new Date();
        return start.getTime();
    } catch (e) {
        throw new Error(e.stack + '\n');
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


ttrg.url.getParam = function () {
    try {
        var ret_val = new Array();
        var prm = document.location.search;
        if ("" == prm) {
            return null;
        }
        prm = prm.substring(1);
        var ret_flg = false;
        var prm_array = prm.split('&');
        for (var prm_array_idx in prm_array) {
            var key_val = prm_array[prm_array_idx].split('=');
            if (2 != key_val.length) {
                continue;
            }
            ret_flg = true;
            ret_val[decodeURIComponent(key_val[0])] = decodeURIComponent(key_val[1]);
        }
        if (false === ret_flg) {
            return null;
        }
        return new tetraring.array.Keyval(ret_val);
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(5);
__webpack_require__(4);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 */
//( function( global, factory ) {
//    "use strict";
//    if ( //(typeof module         === "object") && 
//         (typeof module.exports === "object") ) {
//        module.exports = global.document ?factory( global, true ) :
//                         function( w ) {
//                             if ( !w.document ) {
//                                 throw new Error( "mofron requires a window with a document" );
//                             }
//                             return factory( w );
//                         };
//	} else {
//		factory( global );
//	}
//
// Pass this if window is not defined yet
//} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
//    "use strict";
module.exports = {
    comp: {},
    layout: {},
    event: {},
    effect: {},
    tmpl: {},
    func: {},
    theme: null,
    root: new Array()
};
//});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
    "use strict";

    if (_typeof(module.exports) === "object") {
        module.exports = global.document ? factory(global, true) : function (w) {
            if (!w.document) {
                throw new Error("requires a window with a document");
            }
            return factory(w);
        };
    } else {
        factory(global);
    }
})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {
    "use strict";

    return {
        arry: {}, /* array */
        debg: {}, /* debug */
        init: {}, /* init */
        load: {}, /* loader */
        rest: {}, /* rest */
        time: {}, /* time */
        url: {} /* url */
    };
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    init: {},
    define: {},
    func: {}
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["mofron"] = __webpack_require__(33);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["ttrg"] = __webpack_require__(34);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);