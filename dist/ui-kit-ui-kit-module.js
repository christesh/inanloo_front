(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-kit-ui-kit-module"],{

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clipboardAction = __webpack_require__(1);

var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

var _tinyEmitter = __webpack_require__(3);

var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

var _goodListener = __webpack_require__(4);

var _goodListener2 = _interopRequireDefault(_goodListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */
var Clipboard = function (_Emitter) {
    _inherits(Clipboard, _Emitter);

    /**
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     * @param {Object} options
     */
    function Clipboard(trigger, options) {
        _classCallCheck(this, Clipboard);

        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

        _this.resolveOptions(options);
        _this.listenClick(trigger);
        return _this;
    }

    /**
     * Defines if attributes would be resolved using internal setter functions
     * or custom functions that were passed in the constructor.
     * @param {Object} options
     */


    _createClass(Clipboard, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = _typeof(options.container) === 'object' ? options.container : document.body;
        }

        /**
         * Adds a click event listener to the passed trigger.
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         */

    }, {
        key: 'listenClick',
        value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                return _this2.onClick(e);
            });
        }

        /**
         * Defines a new `ClipboardAction` on each click event.
         * @param {Event} e
         */

    }, {
        key: 'onClick',
        value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
                this.clipboardAction = null;
            }

            this.clipboardAction = new _clipboardAction2.default({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger: trigger,
                emitter: this
            });
        }

        /**
         * Default `action` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultAction',
        value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
        }

        /**
         * Default `target` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultTarget',
        value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
                return document.querySelector(selector);
            }
        }

        /**
         * Returns the support of the given action, or all actions if no action is
         * given.
         * @param {String} [action]
         */

    }, {
        key: 'defaultText',


        /**
         * Default `text` lookup function.
         * @param {Element} trigger
         */
        value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
        }

        /**
         * Destroy lifecycle.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
            }
        }
    }], [{
        key: 'isSupported',
        value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;

            actions.forEach(function (action) {
                support = support && !!document.queryCommandSupported(action);
            });

            return support;
        }
    }]);

    return Clipboard;
}(_tinyEmitter2.default);

/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */


function getAttributeValue(suffix, element) {
    var attribute = 'data-clipboard-' + suffix;

    if (!element.hasAttribute(attribute)) {
        return;
    }

    return element.getAttribute(attribute);
}

module.exports = Clipboard;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _select = __webpack_require__(2);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */
var ClipboardAction = function () {
    /**
     * @param {Object} options
     */
    function ClipboardAction(options) {
        _classCallCheck(this, ClipboardAction);

        this.resolveOptions(options);
        this.initSelection();
    }

    /**
     * Defines base properties passed from constructor.
     * @param {Object} options
     */


    _createClass(ClipboardAction, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText = '';
        }

        /**
         * Decides which selection strategy is going to be applied based
         * on the existence of `text` and `target` properties.
         */

    }, {
        key: 'initSelection',
        value: function initSelection() {
            if (this.text) {
                this.selectFake();
            } else if (this.target) {
                this.selectTarget();
            }
        }

        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         */

    }, {
        key: 'selectFake',
        value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = function () {
                return _this.removeFake();
            };
            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';

            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;

            this.container.appendChild(this.fakeElem);

            this.selectedText = (0, _select2.default)(this.fakeElem);
            this.copyText();
        }

        /**
         * Only removes the fake element after another click event, that way
         * a user can hit `Ctrl+C` to copy because selection still exists.
         */

    }, {
        key: 'removeFake',
        value: function removeFake() {
            if (this.fakeHandler) {
                this.container.removeEventListener('click', this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
            }
        }

        /**
         * Selects the content from element passed on `target` property.
         */

    }, {
        key: 'selectTarget',
        value: function selectTarget() {
            this.selectedText = (0, _select2.default)(this.target);
            this.copyText();
        }

        /**
         * Executes the copy operation based on the current selection.
         */

    }, {
        key: 'copyText',
        value: function copyText() {
            var succeeded = void 0;

            try {
                succeeded = document.execCommand(this.action);
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        }

        /**
         * Fires an event based on the copy operation result.
         * @param {Boolean} succeeded
         */

    }, {
        key: 'handleResult',
        value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        }

        /**
         * Moves focus away from `target` and back to the trigger, removes current selection.
         */

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this.trigger) {
                this.trigger.focus();
            }

            window.getSelection().removeAllRanges();
        }

        /**
         * Sets the `action` to be performed which can be either 'copy' or 'cut'.
         * @param {String} action
         */

    }, {
        key: 'destroy',


        /**
         * Destroy lifecycle.
         */
        value: function destroy() {
            this.removeFake();
        }
    }, {
        key: 'action',
        set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
        }

        /**
         * Gets the `action` property.
         * @return {String}
         */
        ,
        get: function get() {
            return this._action;
        }

        /**
         * Sets the `target` property using an element
         * that will be have its content copied.
         * @param {Element} target
         */

    }, {
        key: 'target',
        set: function set(target) {
            if (target !== undefined) {
                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                }
            }
        }

        /**
         * Gets the `target` property.
         * @return {String|HTMLElement}
         */
        ,
        get: function get() {
            return this._target;
        }
    }]);

    return ClipboardAction;
}();

module.exports = ClipboardAction;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(5);
var delegate = __webpack_require__(6);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(7);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/prismjs/components/prism-css.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-css.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': RegExp('url\\((?:' + string.source + '|.*?)\\)', 'i'),
		'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
		'important': /!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, markup.tag);
	}

}(Prism));


/***/ }),

/***/ "./node_modules/prismjs/components/prism-java.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-java.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var keywords = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/;

	// based on the java naming conventions
	var className = /\b[A-Z](?:\w*[a-z]\w*)?\b/;

	Prism.languages.java = Prism.languages.extend('clike', {
		'class-name': [
			className,

			// variables and parameters
			// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
			/\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/
		],
		'keyword': keywords,
		'function': [
			Prism.languages.clike.function,
			{
				pattern: /(\:\:)[a-z_]\w*/,
				lookbehind: true
			}
		],
		'number': /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
		'operator': {
			pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
			lookbehind: true
		}
	});

	Prism.languages.insertBefore('java', 'class-name', {
		'annotation': {
			alias: 'punctuation',
			pattern: /(^|[^.])@\w+/,
			lookbehind: true
		},
		'namespace': {
			pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
			lookbehind: true,
			inside: {
				'punctuation': /\./,
			}
		},
		'generics': {
			pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
			inside: {
				'class-name': className,
				'keyword': keywords,
				'punctuation': /[<>(),.:]/,
				'operator': /[?&|]/
			}
		}
	});
}(Prism));


/***/ }),

/***/ "./node_modules/prismjs/components/prism-javascript.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-javascript.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\${[^}]+}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;


/***/ }),

/***/ "./node_modules/prismjs/components/prism-markup.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-markup.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/***/ }),

/***/ "./node_modules/prismjs/components/prism-sass.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-sass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(Prism) {
	Prism.languages.sass = Prism.languages.extend('css', {
		// Sass comments don't need to be closed, only indented
		'comment': {
			pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
			lookbehind: true
		}
	});

	Prism.languages.insertBefore('sass', 'atrule', {
		// We want to consume the whole line
		'atrule-line': {
			// Includes support for = and + shortcuts
			pattern: /^(?:[ \t]*)[@+=].+/m,
			inside: {
				'atrule': /(?:@[\w-]+|[+=])/m
			}
		}
	});
	delete Prism.languages.sass.atrule;


	var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
	var operator = [
		/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
		{
			pattern: /(\s+)-(?=\s)/,
			lookbehind: true
		}
	];

	Prism.languages.insertBefore('sass', 'property', {
		// We want to consume the whole line
		'variable-line': {
			pattern: /^[ \t]*\$.+/m,
			inside: {
				'punctuation': /:/,
				'variable': variable,
				'operator': operator
			}
		},
		// We want to consume the whole line
		'property-line': {
			pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
			inside: {
				'property': [
					/[^:\s]+(?=\s*:)/,
					{
						pattern: /(:)[^:\s]+/,
						lookbehind: true
					}
				],
				'punctuation': /:/,
				'variable': variable,
				'operator': operator,
				'important': Prism.languages.sass.important
			}
		}
	});
	delete Prism.languages.sass.property;
	delete Prism.languages.sass.important;

	// Now that whole lines for other patterns are consumed,
	// what's left should be selectors
	Prism.languages.insertBefore('sass', 'punctuation', {
		'selector': {
			pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
			lookbehind: true
		}
	});

}(Prism));

/***/ }),

/***/ "./node_modules/prismjs/components/prism-scss.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-scss.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.scss = Prism.languages.extend('css', {
	'comment': {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: true
	},
	'atrule': {
		pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	// url, compassified
	'url': /(?:[-a-z]+-)*url(?=\()/i,
	// CSS selector regex is not appropriate for Sass
	// since there can be lot more things (var, @ directive, nesting..)
	// a selector must start at the end of a property or after a brace (end of other rules or nesting)
	// it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
	// the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
	// can "pass" as a selector- e.g: proper#{$erty})
	// this one was hard to do, so please be careful if you edit this one :)
	'selector': {
		// Initial look-ahead is used to prevent matching of blank selectors
		pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
		inside: {
			'parent': {
				pattern: /&/,
				alias: 'important'
			},
			'placeholder': /%[-\w]+/,
			'variable': /\$[-\w]+|#\{\$[-\w]+\}/
		}
	},
	'property': {
		pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
		inside: {
			'variable': /\$[-\w]+|#\{\$[-\w]+\}/
		}
	}
});

Prism.languages.insertBefore('scss', 'atrule', {
	'keyword': [
		/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
		{
			pattern: /( +)(?:from|through)(?= )/,
			lookbehind: true
		}
	]
});

Prism.languages.insertBefore('scss', 'important', {
	// var and interpolated vars
	'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});

Prism.languages.insertBefore('scss', 'function', {
	'placeholder': {
		pattern: /%[-\w]+/,
		alias: 'selector'
	},
	'statement': {
		pattern: /\B!(?:default|optional)\b/i,
		alias: 'keyword'
	},
	'boolean': /\b(?:true|false)\b/,
	'null': {
		pattern: /\bnull\b/,
		alias: 'keyword'
	},
	'operator': {
		pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
		lookbehind: true
	}
});

Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;


/***/ }),

/***/ "./node_modules/prismjs/components/prism-typescript.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-typescript.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.typescript = Prism.languages.extend('javascript', {
	// From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
	'keyword': /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
	'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});

Prism.languages.ts = Prism.languages.typescript;


/***/ }),

/***/ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){
	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	if (!Prism.plugins.toolbar) {
		console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');

		return;
	}

	var ClipboardJS = window.ClipboardJS || undefined;

	if (!ClipboardJS && "function" === 'function') {
		ClipboardJS = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
	}

	var callbacks = [];

	if (!ClipboardJS) {
		var script = document.createElement('script');
		var head = document.querySelector('head');

		script.onload = function() {
			ClipboardJS = window.ClipboardJS;

			if (ClipboardJS) {
				while (callbacks.length) {
					callbacks.pop()();
				}
			}
		};

		script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js';
		head.appendChild(script);
	}

	Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
		var linkCopy = document.createElement('a');
		linkCopy.textContent = 'Copy';

		if (!ClipboardJS) {
			callbacks.push(registerClipboard);
		} else {
			registerClipboard();
		}

		return linkCopy;

		function registerClipboard() {
			var clip = new ClipboardJS(linkCopy, {
				'text': function () {
					return env.code;
				}
			});

			clip.on('success', function() {
				linkCopy.textContent = 'Copied!';

				resetText();
			});
			clip.on('error', function () {
				linkCopy.textContent = 'Press Ctrl+C to copy';

				resetText();
			});
		}

		function resetText() {
			setTimeout(function () {
				linkCopy.textContent = 'Copy';
			}, 5000);
		}
	});
})();


/***/ }),

/***/ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/plugins/toolbar/prism-toolbar.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){
	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	var callbacks = [];
	var map = {};
	var noop = function() {};

	Prism.plugins.toolbar = {};

	/**
	 * @typedef ButtonOptions
	 * @property {string} text The text displayed.
	 * @property {string} [url] The URL of the link which will be created.
	 * @property {Function} [onClick] The event listener for the `click` event of the created button.
	 */

	/**
	 * Register a button callback with the toolbar.
	 *
	 * @param {string} key
	 * @param {ButtonOptions|Function} opts
	 */
	var registerButton = Prism.plugins.toolbar.registerButton = function (key, opts) {
		var callback;

		if (typeof opts === 'function') {
			callback = opts;
		} else {
			callback = function (env) {
				var element;

				if (typeof opts.onClick === 'function') {
					element = document.createElement('button');
					element.type = 'button';
					element.addEventListener('click', function () {
						opts.onClick.call(this, env);
					});
				} else if (typeof opts.url === 'string') {
					element = document.createElement('a');
					element.href = opts.url;
				} else {
					element = document.createElement('span');
				}

				element.textContent = opts.text;

				return element;
			};
		}

		if (key in map) {
			console.warn('There is a button with the key "' + key + '" registered already.');
			return;
		}

		callbacks.push(map[key] = callback);
	};

	/**
	 * Post-highlight Prism hook callback.
	 *
	 * @param env
	 */
	var hook = Prism.plugins.toolbar.hook = function (env) {
		// Check if inline or actual code block (credit to line-numbers plugin)
		var pre = env.element.parentNode;
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		// Autoloader rehighlights, so only do this once.
		if (pre.parentNode.classList.contains('code-toolbar')) {
			return;
		}

		// Create wrapper for <pre> to prevent scrolling toolbar with content
		var wrapper = document.createElement("div");
		wrapper.classList.add("code-toolbar");
		pre.parentNode.insertBefore(wrapper, pre);
		wrapper.appendChild(pre);

		// Setup the toolbar
		var toolbar = document.createElement('div');
		toolbar.classList.add('toolbar');

		if (document.body.hasAttribute('data-toolbar-order')) {
			callbacks = document.body.getAttribute('data-toolbar-order').split(',').map(function(key) {
				return map[key] || noop;
			});
		}

		callbacks.forEach(function(callback) {
			var element = callback(env);

			if (!element) {
				return;
			}

			var item = document.createElement('div');
			item.classList.add('toolbar-item');

			item.appendChild(element);
			toolbar.appendChild(item);
		});

		// Add our toolbar to the currently created wrapper of <pre> tag
		wrapper.appendChild(toolbar);
	};

	registerButton('label', function(env) {
		var pre = env.element.parentNode;
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		if (!pre.hasAttribute('data-label')) {
			return;
		}

		var element, template;
		var text = pre.getAttribute('data-label');
		try {
			// Any normal text will blow up this selector.
			template = document.querySelector('template#' + text);
		} catch (e) {}

		if (template) {
			element = template.content;
		} else {
			if (pre.hasAttribute('data-url')) {
				element = document.createElement('a');
				element.href = pre.getAttribute('data-url');
			} else {
				element = document.createElement('span');
			}

			element.textContent = text;
		}

		return element;
	});

	/**
	 * Register the toolbar with Prism.
	 */
	Prism.hooks.add('complete', hook);
})();


/***/ }),

/***/ "./node_modules/prismjs/prism.js":
/*!***************************************!*\
  !*** ./node_modules/prismjs/prism.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function deepClone(o, visited) {
			var clone, id, type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = {};
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					o.forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return clone;

				default:
					return o;
			}
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need an object and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		var insertHighlightedCode = function (highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};

_self.Prism = _;

function Token(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
}

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (Array.isArray(o)) {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (o.alias) {
		var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _;

})(_self);

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': RegExp('url\\((?:' + string.source + '|.*?)\\)', 'i'),
		'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
		'important': /!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, markup.tag);
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\${[^}]+}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	/**
	 * @param {Element} [container=document]
	 */
	self.Prism.fileHighlight = function(container) {
		container = container || document;

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
			// ignore if already loaded
			if (pre.hasAttribute('data-src-loaded')) {
				return;
			}

			// load current
			var src = pre.getAttribute('data-src');

			var language, parent = pre;
			var lang = /\blang(?:uage)?-([\w-]+)\b/i;
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (pre.className.match(lang) || [, ''])[1];
			}

			if (!language) {
				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
				language = Extensions[extension] || extension;
			}

			var code = document.createElement('code');
			code.className = 'language-' + language;

			pre.textContent = '';

			code.textContent = 'Loading…';

			pre.appendChild(code);

			var xhr = new XMLHttpRequest();

			xhr.open('GET', src, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {

					if (xhr.status < 400 && xhr.responseText) {
						code.textContent = xhr.responseText;

						Prism.highlightElement(code);
						// mark as loaded
						pre.setAttribute('data-src-loaded', '');
					}
					else if (xhr.status >= 400) {
						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
					}
					else {
						code.textContent = '✖ Error: File does not exist or is empty';
					}
				}
			};

			xhr.send(null);
		});

		if (Prism.plugins.toolbar) {
			Prism.plugins.toolbar.registerButton('download-file', function (env) {
				var pre = env.element.parentNode;
				if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-src') || !pre.hasAttribute('data-download-link')) {
					return;
				}
				var src = pre.getAttribute('data-src');
				var a = document.createElement('a');
				a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
				a.setAttribute('download', '');
				a.href = src;
				return a;
			});
		}

	};

	document.addEventListener('DOMContentLoaded', function () {
		// execute inside handler, for dropping Event as argument
		self.Prism.fileHighlight();
	});

})();


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/grids/grids.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/grids/grids.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header\">شبکه</div>\n  </div>\n</div>\n<!--Grid options Starts-->\n<section id=\"grid-option\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">گزینه های بوت استرپ شبکه</h4>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered table-striped\">\n                <thead>\n                  <tr>\n                    <th></th>\n                    <th> بسیار کوچک <small>(&lt;576px)</small> </th>\n                    <th> کوچک <small>(≥576px)</small> </th>\n                    <th> متوسط <small>(≥768px)</small> </th>\n                    <th> بزرگ <small>(≥992px)</small> </th>\n                    <th> خیلی بزرگ <small>(≥1200px)</small> </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <th class=\"text-nowrap\" scope=\"row\">حداکثر عرض کانتینر</th>\n                    <td>هیچ (خودکار)</td>\n                    <td>540px</td>\n                    <td>720px</td>\n                    <td>960px</td>\n                    <td>1140px</td>\n                  </tr>\n                  <tr>\n                    <th class=\"text-nowrap\" scope=\"row\">پیشوند کلاس</th>\n                    <td><code>.col-</code></td>\n                    <td><code>.col-sm-</code></td>\n                    <td><code>.col-md-</code></td>\n                    <td><code>.col-lg-</code></td>\n                    <td><code>.col-xl-</code></td>\n                  </tr>\n                  <tr>\n                    <th class=\"text-nowrap\" scope=\"row\"># ستون</th>\n                    <td colspan=\"5\">12</td>\n                  </tr>\n                  <tr>\n                    <th class=\"text-nowrap\" scope=\"row\">عرض </th>\n                    <td colspan=\"5\">30 پیکسل (15 پیکسل در هر طرف ستون)</td>\n                  </tr>\n                  <tr>\n                    <th class=\"text-nowrap\" scope=\"row\">غیر قابل انعطاف</th>\n                    <td colspan=\"5\">بله</td>\n                  </tr>\n                  <tr>\n                    <th class=\"text-nowrap\" scope=\"row\">سفارش ستون</th>\n                    <td colspan=\"5\">بله</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n<!--Grid options Ends-->\n\n<!-- Bootstrap Auto Layout Column Starts-->\n<section id=\"auto-layout-columns\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">ستون های طرح خودکار</h3>\n        <p>استفاده از ستون های ستون خاص برای اندازه آسان ستون بدون کلاس شماره صریح مانند\n          <code>.col-sm-6</code>.</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Bootstrap Auto Layout Column Ends-->\n\n<!--Equal-width Starts-->\n<section id=\"equal-width\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">عرض برابر</h4>\n        <p>به عنوان مثال، در اینجا دو طرح بندی شبکهای است که برای هر دستگاه و نمایشگر، از آن استفاده می شود<code>xs</code>\n          به <code>xl</code>هر تعداد کلاس های بدون واحد را برای هر نقطه پایانی که نیاز دارید اضافه کنید و هر ستون یکسان است.</p>\n      </div>\n      <div class=\"card-body collapse show\">\n        <div class=\"card-content\">\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    1 of 2\n                  </div>\n                  <div class=\"col\">\n                    2 of 2\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col\">\n                    1 of 3\n                  </div>\n                  <div class=\"col\">\n                    2 of 3\n                  </div>\n                  <div class=\"col\">\n                    3 of 3\n                  </div>\n                </div>\n              </div>\n            </div>\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n      &lt;div class=\"container\"&gt;\n          &lt;div class=\"row\"&gt;\n              &lt;div class=\"col\"&gt;\n                  1 of 2\n              &lt;/div&gt;\n              &lt;div class=\"col\"&gt;\n                  2 of 2\n              &lt;/div&gt;\n          &lt;/div&gt;\n          &lt;div class=\"row\"&gt;\n              &lt;div class=\"col\"&gt;\n                  1 of 3\n              &lt;/div&gt;\n              &lt;div class=\"col\"&gt;\n                  2 of 3\n              &lt;/div&gt;\n              &lt;div class=\"col\"&gt;\n                  3 of 3\n              &lt;/div&gt;\n          &lt;/div&gt;\n      &lt;/div&gt;\n  </code></pre>\n          </div>\n          <p>ستونهای عرض عرض را می توان به چندین خط تقسیم کرد اما یک وجود دارد <a href=\"https://github.com/philipwalton/flexbugs#11-min-and-max-size-declarations-are-ignored-when-wrapping-flex-items\">اشکال flexbox صافاری</a> that prevented this from working without an explicit <code>flex-basis</code>\n            یا <code>border</code>.</p>\n          <p>دو راه حل در یک گزارش مستند شده است<a href=\"https://output.jsbin.com/micohor\">درخواست آزمون کاهش یافته در خارج از Bootstrap\n          </a>، اگر چه مرورگر به روز است، این نباید لازم باشد.</p>\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col\">ستون</div>\n                  <div class=\"col\">ستون</div>\n                  <div class=\"w-100\"></div>\n                  <div class=\"col\">ستون</div>\n                  <div class=\"col\">ستون</div>\n                </div>\n              </div>\n            </div>\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n  &lt;div class=\"container\"&gt;\n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col\"&gt;Column&lt;/div&gt;\n          &lt;div class=\"col\"&gt;Column&lt;/div&gt;\n          &lt;div class=\"w-100\"&gt;&lt;/div&gt;\n          &lt;div class=\"col\"&gt;Column&lt;/div&gt;\n          &lt;div class=\"col\"&gt;Column&lt;/div&gt;\n      &lt;/div&gt;\n  &lt;/div&gt;\n  </code></pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Equal-width Ends-->\n\n<!--Setting one column width Starts-->\n<section id=\"setting-one-column-width\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">تنظیم یک ستون عرض</h4>\n        <p>\n            ستون بندی خودکار برای ستون های شبکه فلاکسکو نیز به این معنی است که شما می توانید عرض یک ستون را تنظیم کنید و ستون های خواهر و برادر را به طور خودکار در اطراف آن تغییر دهید. شما می توانید طبقات شبکه از پیش تعریف شده (همانطور که در زیر نشان داده شده است)، مخلوط های شبکه یا عرض های درون خطی استفاده کنید. توجه داشته باشید که ستون های دیگر بدون توجه به عرض ستون مرکز تغییر خواهند کرد.\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    1 of 3\n                  </div>\n                  <div class=\"col-6\">\n                    2 of 3 (wider)\n                  </div>\n                  <div class=\"col\">\n                    3 of 3\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col\">\n                    1 of 3\n                  </div>\n                  <div class=\"col-5\">\n                    2 of 3 (wider)\n                  </div>\n                  <div class=\"col\">\n                    3 of 3\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <pre class=\"language-markup my-3\">\n      <code class=\"language-markup\">\n          &lt;div class=\"container\"&gt;\n              &lt;div class=\"row\"&gt;\n                  &lt;div class=\"col\"&gt;\n                      1 of 3\n                  &lt;/div&gt;\n                  &lt;div class=\"col-6\"&gt;\n                      2 of 3 (wider)\n                  &lt;/div&gt;\n                  &lt;div class=\"col\"&gt;\n                      3 of 3\n                  &lt;/div&gt;\n              &lt;/div&gt;\n              &lt;div class=\"row\"&gt;\n                  &lt;div class=\"col\"&gt;\n                      1 of 3\n                  &lt;/div&gt;\n                  &lt;div class=\"col-5\"&gt;\n                      2 of 3 (wider)\n                  &lt;/div&gt;\n                  &lt;div class=\"col\"&gt;\n                  3 of 3\n                  &lt;/div&gt;\n              &lt;/div&gt;\n          &lt;/div&gt;\n      </code></pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Setting one column width Ends-->\n\n<!--Variable width content Starts-->\n<section id=\"variable-width-content\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">محتوای عرض متغیر</h4>\n        <p>استفاده از کلاس <code>col-&#123;breakpoint&#125;-auto</code> \n          به ستون های اندازه بر اساس عرض طبیعی محتوای آنها.\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row justify-content-md-center\">\n                  <div class=\"col col-lg-2\">\n                    1 of 3\n                  </div>\n                  <div class=\"col-md-auto\">\n                    محتوای عرض متغیر\n                  </div>\n                  <div class=\"col col-lg-2\">\n                    3 of 3\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col\">\n                    1 of 3\n                  </div>\n                  <div class=\"col-md-auto\">\n                      محتوای عرض متغیر\n                  </div>\n                  <div class=\"col col-lg-2\">\n                    3 of 3\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n      &lt;div class=\"container\"&gt;\n          &lt;div class=\"row justify-content-md-center\"&gt;\n              &lt;div class=\"col col-lg-2\"&gt;\n                  1 of 3\n              &lt;/div&gt;\n              &lt;div class=\"col-md-auto\"&gt;\n                  Variable width content\n              &lt;/div&gt;\n              &lt;div class=\"col col-lg-2\"&gt;\n                  3 of 3\n              &lt;/div&gt;\n          &lt;/div&gt;\n          &lt;div class=\"row\"&gt;\n              &lt;div class=\"col\"&gt;\n                  1 of 3\n              &lt;/div&gt;\n              &lt;div class=\"col-md-auto\"&gt;\n                  Variable width content\n              &lt;/div&gt;\n              &lt;div class=\"col col-lg-2\"&gt;\n                  3 of 3\n              &lt;/div&gt;\n          &lt;/div&gt;\n      &lt;/div&gt;\n  </code></pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Variable width content Ends-->\n\n<!--Equal-width multi-row Starts-->\n<section id=\"equal-width-multi-row\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">چند ردیف برابر عرض</h4>\n        <p>ایجاد ستونهای عرض برابر که چندین ردیف را با وارد کردن یک ردیف می کند <code>.w-100</code>\n          کجا ستون ها را می خواهید به یک خط جدید برسید. مخلوط کردن آن ها را پاسخ دهد <code>.w-100</code>\n          با برخی از<a href=\"https://getbootstrap.com/docs/4.3/utilities/display/\">آب و هوای صفحه نمایش پاسخگو</a>.</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col\">col</div>\n                  <div class=\"col\">col</div>\n                  <div class=\"w-100\"></div>\n                  <div class=\"col\">col</div>\n                  <div class=\"col\">col</div>\n                </div>\n              </div>\n            </div>\n            <pre class=\"language-markup my-3\">\n      <code class=\"language-markup\">\n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col\"&gt;col&lt;/div&gt;\n          &lt;div class=\"col\"&gt;col&lt;/div&gt;\n          &lt;div class=\"w-100\"&gt;&lt;/div&gt;\n          &lt;div class=\"col\"&gt;col&lt;/div&gt;\n          &lt;div class=\"col\"&gt;col&lt;/div&gt;\n      &lt;/div&gt;\n      </code>\n                          </pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Equal-width multi-row Ends-->\n\n<!--Responsive classes Starts-->\n<section id=\"responsive-classes\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">کلاس های پاسخگو</h3>\n        <p>\n            شبکه بوت استرپ شامل پنج سطر از کلاس های از پیش تعریف شده برای ساخت طرح های پاسخگو پاسخگو است. اندازه ستون های خود را بر روی دستگاه های کوچک کوچک، متوسط، بزرگ، و یا فوق العاده بزرگ سفارشی با این حال شما مناسب را انتخاب کنید.\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Responsive classes Ends-->\n\n<!--All breakpoints Starts-->\n<section id=\"all-breakpoints\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">همه نقطه های شکستن</h4>\n        <p>برای شبکه هایی که از کوچکترین دستگاه ها تا بزرگترین هستند، با استفاده از<code>.col</code>\n          و <code class=\"highlighter-rouge\">.col-*</code> \n          کلاس ها. وقتی یک ستون به اندازه خاص نیاز دارید، یک کلاس شماره را مشخص کنید در غیر این صورت، احساس راحتی کنید\n          <code class=\"highlighter-rouge\">.col</code>.</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"bd-example\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col\">col</div>\n                    <div class=\"col\">col</div>\n                    <div class=\"col\">col</div>\n                    <div class=\"col\">col</div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-8\">col-8</div>\n                    <div class=\"col-4\">col-4</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <pre class=\"language-markup my-3\">\n      <code class=\"language-markup\">\n          &lt;div class=\"row\"&gt;\n              &lt;div class=\"col\"&gt;col&lt;/div&gt;\n              &lt;div class=\"col\"&gt;col&lt;/div&gt;\n              &lt;div class=\"col\"&gt;col&lt;/div&gt;\n              &lt;div class=\"col\"&gt;col&lt;/div&gt;\n          &lt;/div&gt;\n          &lt;div class=\"row\"&gt;\n              &lt;div class=\"col-8\"&gt;col-8&lt;/div&gt;\n              &lt;div class=\"col-4\"&gt;col-4&lt;/div&gt;\n          &lt;/div&gt;\n      </code></pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--All breakpoints Ends-->\n\n<!--Stacked to horizontal Starts-->\n<section id=\"stacked-to-horizontal\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">تقسیم به افقی</h4>\n        <p>\n            نمی خواهم ستون های شما را به سادگی در برخی از سطوح شبکه بکشند؟ با استفاده از ترکیبی از کلاس های مختلف برای هر سطح در صورت نیاز. مثال زیر را برای درک بهتر این که چگونه همه کارها را انجام می دهد، مشاهده کنید.\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <!-- Stack the columns on mobile by making one full-width and the other half-width -->\n                <div class=\"row\">\n                  <div class=\"col-12 col-md-8\">.col-12 .col-md-8</div>\n                  <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n                </div>\n\n                <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->\n                <div class=\"row\">\n                  <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n                  <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n                  <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n                </div>\n\n                <!-- Columns are always 50% wide, on mobile and desktop -->\n                <div class=\"row\">\n                  <div class=\"col-6\">.col-6</div>\n                  <div class=\"col-6\">.col-6</div>\n                </div>\n              </div>\n            </div>\n\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n  &lt;!-- Stack the columns on mobile by making one full-width and the other half-width --&gt;\n  &lt;div class=\"row\"&gt;\n      &lt;div class=\"col-12 col-md-8\"&gt;.col-12 .col-md-8&lt;/div&gt;\n      &lt;div class=\"col-6 col-md-4\"&gt;.col-6 .col-md-4&lt;/div&gt;\n  &lt;/div&gt;\n  \n  &lt;!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --&gt;\n  &lt;div class=\"row\"&gt;\n      &lt;div class=\"col-6 col-md-4\"&gt;.col-6 .col-md-4&lt;/div&gt;\n      &lt;div class=\"col-6 col-md-4\"&gt;.col-6 .col-md-4&lt;/div&gt;\n      &lt;div class=\"col-6 col-md-4\"&gt;.col-6 .col-md-4&lt;/div&gt;\n  &lt;/div&gt;\n  \n  &lt;!-- Columns are always 50% wide, on mobile and desktop --&gt;\n  &lt;div class=\"row\"&gt;\n      &lt;div class=\"col-6\"&gt;.col-6&lt;/div&gt;\n      &lt;div class=\"col-6\"&gt;.col-6&lt;/div&gt;\n  &lt;/div&gt;\n  </code></pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Stacked to horizontal Ends-->\n\n<!--Vertical alignment-->\n<section id=\"vertical-alignment\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">چیدمان عمودی</h4>\n      </div>\n      <div class=\"card-body collapse show\">\n        <div class=\"card-content\">\n\n          <div class=\"bd-example-row bd-example-row-flex-cols\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row align-items-start\">\n                  <div class=\"col\">\n                   یکی از سه ستون\n                  </div>\n                  <div class=\"col\">\n                   یکی از سه ستون\n                  </div>\n                  <div class=\"col\">\n                   یکی از سه ستون\n                  </div>\n                </div>\n                <div class=\"row align-items-center\">\n                  <div class=\"col\">\n                   یکی از سه ستون\n                  </div>\n                  <div class=\"col\">\n                   یکی از سه ستون\n                  </div>\n                  <div class=\"col\">\n                   یکی از سه ستون\n                  </div>\n                </div>\n                <div class=\"row align-items-end\">\n                  <div class=\"col\">\n                   یکی از سه ستون\n                  </div>\n                  <div class=\"col\">\n                   یکی از سه ستون\n                  </div>\n                  <div class=\"col\">\n                   یکی از سه ستون\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n  &lt;div class=\"container\"&gt;\n      &lt;div class=\"row align-items-start\"&gt;\n          &lt;div class=\"col\"&gt;\n              One of three columns\n          &lt;/div&gt;\n          &lt;div class=\"col\"&gt;\n              One of three columns\n          &lt;/div&gt;\n          &lt;div class=\"col\"&gt;\n              One of three columns\n          &lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\"row align-items-center\"&gt;\n          &lt;div class=\"col\"&gt;\n              One of three columns\n          &lt;/div&gt;\n          &lt;div class=\"col\"&gt;\n              One of three columns\n          &lt;/div&gt;\n          &lt;div class=\"col\"&gt;\n              One of three columns\n          &lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\"row align-items-end\"&gt;\n          &lt;div class=\"col\"&gt;\n              One of three columns\n          &lt;/div&gt;\n          &lt;div class=\"col\"&gt;\n              One of three columns\n          &lt;/div&gt;\n          &lt;div class=\"col\"&gt;\n              One of three columns\n          &lt;/div&gt;\n      &lt;/div&gt;\n  &lt;/div&gt;\n  </code>\n                          </pre>\n          </div>\n\n          <div class=\"bd-example-row bd-example-row-flex-cols\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col align-self-start\">\n                   یکی از سه ستون\n                  </div>\n                  <div class=\"col align-self-center\">\n                   یکی از سه ستون\n                  </div>\n                  <div class=\"col align-self-end\">\n                   یکی از سه ستون\n                  </div>\n                </div>\n              </div>\n            </div>\n            <pre class=\"language-markup my-3\"><code class=\"language-markup\">\n      &lt;div class=\"container\"&gt;\n          &lt;div class=\"row\"&gt;\n              &lt;div class=\"col align-self-start\"&gt;\n                  One of three columns\n              &lt;/div&gt;\n              &lt;div class=\"col align-self-center\"&gt;\n                  One of three columns\n              &lt;/div&gt;\n              &lt;div class=\"col align-self-end\"&gt;\n                  One of three columns\n              &lt;/div&gt;\n          &lt;/div&gt;\n      &lt;/div&gt;\n              </code></pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Vertical alignment-->\n\n<!--Horizontal alignment-->\n<section id=\"horizontal-alignment\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">تراز افقی</h4>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row justify-content-start\">\n                  <div class=\"col-4\">\n                   یکی از دو ستون\n                  </div>\n                  <div class=\"col-4\">\n                   یکی از دو ستون\n                  </div>\n                </div>\n                <div class=\"row justify-content-center\">\n                  <div class=\"col-4\">\n                   یکی از دو ستون\n                  </div>\n                  <div class=\"col-4\">\n                   یکی از دو ستون\n                  </div>\n                </div>\n                <div class=\"row justify-content-end\">\n                  <div class=\"col-4\">\n                   یکی از دو ستون\n                  </div>\n                  <div class=\"col-4\">\n                   یکی از دو ستون\n                  </div>\n                </div>\n                <div class=\"row justify-content-around\">\n                  <div class=\"col-4\">\n                   یکی از دو ستون\n                  </div>\n                  <div class=\"col-4\">\n                   یکی از دو ستون\n                  </div>\n                </div>\n                <div class=\"row justify-content-between\">\n                  <div class=\"col-4\">\n                   یکی از دو ستون\n                  </div>\n                  <div class=\"col-4\">\n                   یکی از دو ستون\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <pre class=\"language-markup my-3\">\n      <code class=\"language-markup\">\n          &lt;div class=\"container\"&gt;\n              &lt;div class=\"row justify-content-start\"&gt;\n              &lt;div class=\"col-4\"&gt;\n                  One of two columns\n              &lt;/div&gt;\n              &lt;div class=\"col-4\"&gt;\n                  One of two columns\n              &lt;/div&gt;\n              &lt;/div&gt;\n              &lt;div class=\"row justify-content-center\"&gt;\n              &lt;div class=\"col-4\"&gt;\n                  One of two columns\n              &lt;/div&gt;\n              &lt;div class=\"col-4\"&gt;\n                  One of two columns\n              &lt;/div&gt;\n              &lt;/div&gt;\n              &lt;div class=\"row justify-content-end\"&gt;\n              &lt;div class=\"col-4\"&gt;\n                  One of two columns\n              &lt;/div&gt;\n              &lt;div class=\"col-4\"&gt;\n                  One of two columns\n              &lt;/div&gt;\n              &lt;/div&gt;\n              &lt;div class=\"row justify-content-around\"&gt;\n              &lt;div class=\"col-4\"&gt;\n                  One of two columns\n              &lt;/div&gt;\n              &lt;div class=\"col-4\"&gt;\n                  One of two columns\n              &lt;/div&gt;\n              &lt;/div&gt;\n              &lt;div class=\"row justify-content-between\"&gt;\n              &lt;div class=\"col-4\"&gt;\n                  One of two columns\n              &lt;/div&gt;\n              &lt;div class=\"col-4\"&gt;\n                  One of two columns\n              &lt;/div&gt;\n              &lt;/div&gt;\n          &lt;/div&gt;\n      </code>\n  </pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Horizontal alignment-->\n\n<!--No gutters-->\n<section id=\"no-gutters\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">بدون زاویه</h4>\n        <p>\n            زوایای بین ستونها در کلاسهای شبکه از پیش تعریف شده ما میتوانند با حذف شوند\n          <code class=\"highlighter-rouge\">.no-gutters</code>.\n          این منفی را حذف می کند <code class=\"highlighter-rouge\">margin</code>s از جانب <code class=\"highlighter-rouge\">.row</code>\n          و افقی <code class=\"highlighter-rouge\">padding</code> از تمام ستون های فرزند فوری</p>\n        <p>این کد منبع برای ایجاد این سبک هاست. توجه داشته باشید که لغو ستون به تنها ستون های فرزند اول محدود می شود و از طریق هدف قرار می گیرند\n           <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors\">ویژگی انتخاب\n          </a>.در حالی که این انتخاب کننده خاص تر را تولید می کند، می توان با استفاده از پلاگین های ستون هنوز هم سفارشی کرد\n           <a href=\"https://getbootstrap.com/docs/4.3/utilities/spacing/\">آب و هوا</a>.</p>\n        <p><strong>نیاز به طراحی لبه به لبه؟</strong> والدین <code class=\"highlighter-rouge\">.container</code>\n          یا <code class=\"highlighter-rouge\">.container-fluid</code>.</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n          <div class=\"bd-example-row\">\n            <pre class=\"language-css my-3\">\n  <code class=\"language-css\">\n      .no-gutters &#123;\n          margin-right: 0;\n          margin-left: 0;\n      \n          > .col,\n          > [class*=\"col-\"] &#123;\n          padding-right: 0;\n          padding-left: 0;\n          &#125;\n      &#125;\n  </code>\n  </pre>\n          </div>\n          <p>\n              در عمل، در اینجا این است که چگونه به نظر می رسد. توجه داشته باشید می توانید همچنان از این استفاده کنید با تمام دیگر کلاسهای شبکه از پیش تعریف شده (از جمله عرض ستون، سطوح پاسخگو، ترتیب و موارد دیگر).\n          </p>\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-12 col-sm-6 col-md-8\">.col-12 .col-sm-6 .col-md-8</div>\n                <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\n              </div>\n            </div>\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n      &lt;div class=\"row no-gutters\"&gt;\n          &lt;div class=\"col-12 col-sm-6 col-md-8\"&gt;.col-12 .col-sm-6 .col-md-8&lt;/div&gt;\n          &lt;div class=\"col-6 col-md-4\"&gt;.col-6 .col-md-4&lt;/div&gt;\n      &lt;/div&gt;\n  </code>\n  </pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--No gutters-->\n\n<!--Column wrapping-->\n<section id=\"column-wrapping\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">بسته شدن ستون</h4>\n        <p>\n            اگر بیش از 12 ستون در یک ردیف قرار گیرد، هر گروه از ستون های اضافی، به عنوان یک واحد، بر روی یک خط جدید قرار می گیرند.\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-9\">.col-9</div>\n                  <div class=\"col-4\">.col-4<br>از آنجا که 9 + 4 = 13 و 12، این دیو 4 ستون گسترده ای به یک خط جدید به عنوان یک واحد پیوندی پیچیده می شود.\n                  </div>\n                  <div class=\"col-6\">.col-6<br>ستون های بعدی در طول خط جدید ادامه می یابد.</div>\n                </div>\n              </div>\n            </div>\n\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col-9\"&gt;.col-9&lt;/div&gt;\n          &lt;div class=\"col-4\"&gt;.col-4&lt;br&gt;Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.&lt;/div&gt;\n          &lt;div class=\"col-6\"&gt;.col-6&lt;br&gt;Subsequent columns continue along the new line.&lt;/div&gt;\n      &lt;/div&gt;\n  </code>\n  </pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Column wrapping-->\n\n<!--Column breaks-->\n<section id=\"column-breaks\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">ستون می شکند</h4>\n        <p>شکستن ستون ها به یک خط جدید در flexbox، نیاز به یک هک کوچک دارد: یک عنصر با آن اضافه کنید<code class=\"highlighter-rouge\">width:\n            100%</code> \n            هر کجا که می خواهید ستون خود را به یک خط جدید اضافه کنید. معمولا این کار با چندین انجام می شود\n            <code class=\"highlighter-rouge\">.row</code>s,\n            اما هرگز روش پیاده سازی نمی تواند این را حساب کند.\n          </p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-6 col-sm-3\">.col-6 .col-sm-3</div>\n                  <div class=\"col-6 col-sm-3\">.col-6 .col-sm-3</div>\n\n                  <!-- Force next columns to break to new line -->\n                  <div class=\"w-100\"></div>\n\n                  <div class=\"col-6 col-sm-3\">.col-6 .col-sm-3</div>\n                  <div class=\"col-6 col-sm-3\">.col-6 .col-sm-3</div>\n                </div>\n              </div>\n            </div>\n\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col-6 col-sm-3\"&gt;.col-6 .col-sm-3&lt;/div&gt;\n          &lt;div class=\"col-6 col-sm-3\"&gt;.col-6 .col-sm-3&lt;/div&gt;\n      \n          &lt;!-- Force next columns to break to new line --&gt;\n          &lt;div class=\"w-100\"&gt;&lt;/div&gt;\n      \n          &lt;div class=\"col-6 col-sm-3\"&gt;.col-6 .col-sm-3&lt;/div&gt;\n          &lt;div class=\"col-6 col-sm-3\"&gt;.col-6 .col-sm-3&lt;/div&gt;\n      &lt;/div&gt;\n  </code>\n                          </pre>\n          </div>\n          <p>شما همچنین می توانید این شکست را در نقطه توقف خاص با ما اعمال کنید\n            <a href=\"https://getbootstrap.com/docs/4.3/utilities/display/\">آب و هوای صفحه نمایش پاسخگو</a>.</p>\n          <div class=\"bd-example-row\">\n\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-6 col-sm-4\">.col-6 .col-sm-4</div>\n                  <div class=\"col-6 col-sm-4\">.col-6 .col-sm-4</div>\n\n                  <!-- Force next columns to break to new line at md breakpoint and up -->\n                  <div class=\"w-100 d-none d-md-block\"></div>\n\n                  <div class=\"col-6 col-sm-4\">.col-6 .col-sm-4</div>\n                  <div class=\"col-6 col-sm-4\">.col-6 .col-sm-4</div>\n                </div>\n              </div>\n            </div>\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n  &lt;div class=\"row\"&gt;\n      &lt;div class=\"col-6 col-sm-4\"&gt;.col-6 .col-sm-4&lt;/div&gt;\n      &lt;div class=\"col-6 col-sm-4\"&gt;.col-6 .col-sm-4&lt;/div&gt;\n  \n      &lt;!-- Force next columns to break to new line at md breakpoint and up --&gt;\n      &lt;div class=\"w-100 d-none d-md-block\"&gt;&lt;/div&gt;\n  \n      &lt;div class=\"col-6 col-sm-4\"&gt;.col-6 .col-sm-4&lt;/div&gt;\n      &lt;div class=\"col-6 col-sm-4\"&gt;.col-6 .col-sm-4&lt;/div&gt;\n  &lt;/div&gt;\n  </code>\n                          </pre>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Column breaks-->\n\n\n<!--Reordering-->\n<section id=\"reordering\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">تنظیم مجدد</h3>\n        <h5 class=\"card-text mt-2\">کلاس های سفارش</h5>\n        <p>استفاده از کلاس <code>.order-</code>برای کنترل <strong>نظم بصری</strong> \n          از محتوای شما این کلاس پاسخگو است، بنابراین شما می توانید تنظیم کنید\n          <code>order</code>توسط نقطه توقف (e.g., <code>.order-1.order-md-2</code>).\n          شامل پشتیبانی برای<code>1</code> through <code>12</code>در تمام پنج سطح شبکه.</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                      اول، اما غیر ارادی\n                  </div>\n                  <div class=\"col order-12\">\n                      دوم، اما آخرین\n                  </div>\n                  <div class=\"col order-1\">\n                      سوم، اما اول\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n      &lt;div class=\"container\"&gt;\n          &lt;div class=\"row\"&gt;\n              &lt;div class=\"col\"&gt;\n                  First, but unordered\n              &lt;/div&gt;\n              &lt;div class=\"col order-12\"&gt;\n                  Second, but last\n              &lt;/div&gt;\n              &lt;div class=\"col order-1\"&gt;\n              Third, but first\n              &lt;/div&gt;\n          &lt;/div&gt;\n      &lt;/div&gt;\n  </code>\n                  </pre>\n          </div>\n\n          <p>یک پاسخ نیز وجود دارد<code>.order-first</code> \n            کلاس که به سرعت با استفاده از دستور یک عنصر تغییر می کند\n            <code>order: -1</code>. این کلاس همچنین می تواند با عدد صاف همخوانی داشته باشد <code>.order-*</code>\n            طبقات مورد نیاز</p>\n          <div class=\"bd-example-row\">\n\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                      اول، اما غیر ارادی\n                  </div>\n                  <div class=\"col\">\n                      دوم، اما غیر ارادی\n                  </div>\n                  <div class=\"col order-first\">\n                      سوم، اما اول\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n      &lt;div class=\"container\"&gt;\n          &lt;div class=\"row\"&gt;\n              &lt;div class=\"col\"&gt;\n                  First, but unordered\n              &lt;/div&gt;\n              &lt;div class=\"col\"&gt;\n                  Second, but unordered\n              &lt;/div&gt;\n              &lt;div class=\"col order-first\"&gt;\n                  Third, but first\n              &lt;/div&gt;\n          &lt;/div&gt;\n      &lt;/div&gt;\n  </code>\n                  </pre>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Reordering-->\n\n\n<!--Offsetting columns-->\n<section id=\"offsetting-columns\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">تعویض ستون</h3>\n        <h5 class=\"mt-2\">کلاس های افست</h5>\n        <p class=\"card-text\">شما می توانید ستون های شبکه را به دو صورت خنثی کنید: پاسخگو بودن ما<code>.offset-</code> \n          کلاس های شبکه و ما\n          <a href=\"https://getbootstrap.com/docs/4.3/utilities/spacing/\">margin حاشیه</a>\n          . کلاس های شبکه به اندازه ستون مطابقت دارند، در حالی که حاشیه ها برای طرح بندی سریع که عرض متغیر آن متغیر است مفیدتر است.\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n          <p>انتقال ستون به سمت راست با استفاده از <code>.offset-md-*</code> کلاس ها. این کلاس ها حاشیه چپ ستون را با\n            <code>*</code> ستون ها. مثلا،\n            <code>.offset-md-4</code> حرکت می کند <code>.col-md-4</code>\n            بیش از چهار ستون</p>\n\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">.col-md-4</div>\n                  <div class=\"col-md-4 offset-md-4\">.col-md-4 .offset-md-4</div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-3 offset-md-3\">.col-md-3 .offset-md-3</div>\n                  <div class=\"col-md-3 offset-md-3\">.col-md-3 .offset-md-3</div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">.col-md-6 .offset-md-3</div>\n                </div>\n              </div>\n            </div>\n\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col-md-4\"&gt;.col-md-4&lt;/div&gt;\n          &lt;div class=\"col-md-4 offset-md-4\"&gt;.col-md-4 .offset-md-4&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col-md-3 offset-md-3\"&gt;.col-md-3 .offset-md-3&lt;/div&gt;\n          &lt;div class=\"col-md-3 offset-md-3\"&gt;.col-md-3 .offset-md-3&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col-md-6 offset-md-3\"&gt;.col-md-6 .offset-md-3&lt;/div&gt;\n      &lt;/div&gt;\n  </code>\n                  </pre>\n          </div>\n\n          <p>\n              علاوه بر پاک کردن ستون در نقاط بازده پاسخ، ممکن است نیاز به بازنشانی جبران خسارت باشد. این را در عمل ببینید\n            <a href=\"https://getbootstrap.com/docs/4.3/layout/grid/\">مثال شبکه</a>.</p>\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"bd-example\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-5 col-md-6\">.col-sm-5 .col-md-6</div>\n                    <div class=\"col-sm-5 offset-sm-2 col-md-6 offset-md-0\">.col-sm-5 .offset-sm-2 .col-md-6\n                      .offset-md-0</div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 col-md-5 col-lg-6\">.col.col-sm-6.col-md-5.col-lg-6</div>\n                    <div class=\"col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0\">.col-sm-6 .col-md-5 .offset-md-2\n                      .col-lg-6 .offset-lg-0</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col-sm-5 col-md-6\"&gt;.col-sm-5 .col-md-6&lt;/div&gt;\n          &lt;div class=\"col-sm-5 offset-sm-2 col-md-6 offset-md-0\"&gt;.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0&lt;/div&gt;\n      &lt;/div&gt;\n      \n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col-sm-6 col-md-5 col-lg-6\"&gt;.col.col-sm-6.col-md-5.col-lg-6&lt;/div&gt;\n          &lt;div class=\"col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0\"&gt;.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0&lt;/div&gt;\n      &lt;/div&gt;\n  </code>\n                  </pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Offsetting columns-->\n\n<!--Margin utilities-->\n<section id=\"margin-utilities\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">Margin حاشیه</h4>\n        <p>با حرکت به flexbox در v4، می توانید از ابزارهای حاشیه ای مانند <code class=\"highlighter-rouge\">.mr-auto</code>\n          برای تحمیل ستون های خواهر و برادر از یکدیگر.</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">.col-md-4</div>\n                  <div class=\"col-md-4 ml-auto\">.col-md-4 .ml-auto</div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-3 ml-md-auto\">.col-md-3 .ml-md-auto</div>\n                  <div class=\"col-md-3 ml-md-auto\">.col-md-3 .ml-md-auto</div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-auto mr-auto\">.col-auto .mr-auto</div>\n                  <div class=\"col-auto\">.col-auto</div>\n                </div>\n              </div>\n            </div>\n\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col-md-4\"&gt;.col-md-4&lt;/div&gt;\n          &lt;div class=\"col-md-4 ml-auto\"&gt;.col-md-4 .ml-auto&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col-md-3 ml-md-auto\"&gt;.col-md-3 .ml-md-auto&lt;/div&gt;\n          &lt;div class=\"col-md-3 ml-md-auto\"&gt;.col-md-3 .ml-md-auto&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col-auto mr-auto\"&gt;.col-auto .mr-auto&lt;/div&gt;\n          &lt;div class=\"col-auto\"&gt;.col-auto&lt;/div&gt;\n      &lt;/div&gt;\n  </code>\n                          </pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Margin utilities-->\n\n<!--Nesting-->\n<section id=\"nesting\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">تودرتویی</h4>\n        <p>برای قرار دادن محتوای خود با شبکه پیش فرض، یک جدید اضافه کنید <code class=\"highlighter-rouge\">.row</code> \n          و مجموعه ای از\n          <code class=\"highlighter-rouge\">.col-sm-*</code> ستونها در یک موجود <code class=\"highlighter-rouge\">.col-sm-*</code>\n         \n          ستون رشته های مشتق شده باید مجموعه ای از ستون های اضافه شده را تا 12 یا کمتر (لازم نیست که شما از تمام 12 ستون موجود استفاده کنید).\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-content\">\n\n          <div class=\"bd-example-row\">\n            <div class=\"bd-example\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-sm-9\">\n                    سطوح 1: .col-sm-9\n                    <div class=\"row\">\n                      <div class=\"col-8 col-sm-6\">\n                        سطوح 2: .col-8 .col-sm-6\n                      </div>\n                      <div class=\"col-4 col-sm-6\">\n                        سطوح 2: .col-4 .col-sm-6\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <pre class=\"language-markup my-3\">\n  <code class=\"language-markup\">\n      &lt;div class=\"row\"&gt;\n          &lt;div class=\"col-sm-9\"&gt;\n          Level 1: .col-sm-9\n          &lt;div class=\"row\"&gt;\n              &lt;div class=\"col-8 col-sm-6\"&gt;\n              Level 2: .col-8 .col-sm-6\n              &lt;/div&gt;\n              &lt;div class=\"col-4 col-sm-6\"&gt;\n              Level 2: .col-4 .col-sm-6\n              &lt;/div&gt;\n          &lt;/div&gt;\n          &lt;/div&gt;\n      &lt;/div&gt;\n  </code>\n                          </pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/helper-classes/helper-classes.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/helper-classes/helper-classes.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header\">کلاس های کمک کننده</div>\n  </div>\n</div>\n<!-- Spacing -->\n<section id=\"spacing\" class=\"card\">\n  <div class=\"card-header\">\n    <h4 class=\"card-title\">فاصله      </h4>\n  </div>\n  <div class=\"card-content\">\n    <div class=\"card-body\">\n      <div class=\"card-text\">\n        <p>اختصاص دادن <code class=\"highlighter-rouge\">margin</code> یا <code class=\"highlighter-rouge\">padding</code> به\n          یک عنصر یا یک زیر مجموعه از طرف آن با کلاس های کوتاه. شامل پشتیبانی از خواص فردی، تمام خواص، و ویژگی های عمودی و افقی است. تمام کلاس ها بر روی مقدار پیش فرض جهانی چند برابر هستند\n          <code class=\"highlighter-rouge\">1rem</code>.</p>\n\n\n        <p>کلاس ها با استفاده از فرمت نامگذاری می شوند: <code class=\"highlighter-rouge\"><span class=\"p\">&#123;</span><span\n              class=\"err\">ویژگی</span><span class=\"p\">&#125;</span><span class=\"err\">-</span><span class=\"p\">&#123;</span><span\n              class=\"err\">طرف</span><span class=\"p\">&#125;</span><span class=\"err\">-</span><span class=\"p\">&#123;</span><span\n              class=\"err\">سایز</span><span class=\"p\">&#125;</span></code></p>\n        <ul>\n          <li><code class=\"highlighter-rouge\">m</code> - برای کلاس های تعیین شده<code class=\"highlighter-rouge\">margin</code></li>\n          <li><code class=\"highlighter-rouge\">p</code> - برای کلاس های تعیین شده <code class=\"highlighter-rouge\">padding</code></li>\n        </ul>\n\n        <p>این جدول حاوی کلاس برای اضافه کردن عناصر بالا، پایین، چپ، راست و حاشیه سمت همه است.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.mt-&#123;size&#125;</code></td>\n              <td>To set margin top use <code>.mt-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code> is\n                value between 0-5.</td>\n            </tr>\n            <tr>\n              <td><code>.mb-&#123;size&#125;</code></td>\n              <td>To set margin bottom use <code>.mb-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n            <tr>\n              <td><code>.ml-&#123;size&#125;</code></td>\n              <td>To set margin left use <code>.ml-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n            <tr>\n              <td><code>.mr-&#123;size&#125;</code></td>\n              <td>To set margin right use <code>.mr-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n            <tr>\n              <td><code>.mx-&#123;size&#125;</code></td>\n              <td>To set both margin left & right use <code>.mx-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n            <tr>\n              <td><code>.my-&#123;size&#125;</code></td>\n              <td>To set both margin top & bottom use <code>.my-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n            <tr>\n              <td><code>.m-&#123;size&#125;</code></td>\n              <td>To set margin 4 sides of the element use <code>.ma-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"card-text\">\n        <p>این جدول حاوی کلاس برای اضافه کردن عناصر به بالا، پایین، چپ، راست و تمام عرض جانبی است.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.pt-&#123;size&#125;</code></td>\n              <td>To set padding top use <code>.pt-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n            <tr>\n              <td><code>.pb-&#123;size&#125;</code></td>\n              <td>To set padding bottom use <code>.pb-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n            <tr>\n              <td><code>.pl-&#123;size&#125;</code></td>\n              <td>To set padding left use <code>.pl-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n            <tr>\n              <td><code>.pr-&#123;size&#125;</code></td>\n              <td>To set padding right use <code>.pr-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n            <tr>\n              <td><code>.px-&#123;size&#125;</code></td>\n              <td>To set both padding left & right use <code>.px-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n            <tr>\n              <td><code>.py-&#123;size&#125;</code></td>\n              <td>To set both padding top & bottom use <code>.py-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n            <tr>\n              <td><code>.p-&#123;size&#125;</code></td>\n              <td>To set padding 4 sides of the element use <code>.pa-&#123;size&#125;</code> class, where <code>&#123;size&#125;</code>\n                is value between 0-5.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"card-text\">\n        <p>جایی که <em>سایز</em>یکی از:</p>\n        <ul>\n          <li><code class=\"highlighter-rouge\">0</code> - for classes that eliminate the <code class=\"highlighter-rouge\">margin</code>\n            or <code class=\"highlighter-rouge\">padding</code> by setting it to <code class=\"highlighter-rouge\">0</code></li>\n          <li><code class=\"highlighter-rouge\">1</code> - (by default) for classes that set the <code class=\"highlighter-rouge\">margin</code>\n            or <code class=\"highlighter-rouge\">padding</code> to <code class=\"highlighter-rouge\">$spacer-x</code> or\n            <code class=\"highlighter-rouge\">$spacer-y</code></li>\n          <li><code class=\"highlighter-rouge\">2</code> - (by default) for classes that set the <code class=\"highlighter-rouge\">margin</code>\n            or <code class=\"highlighter-rouge\">padding</code> to <code class=\"highlighter-rouge\">$spacer-x * 1.5</code>\n            or <code class=\"highlighter-rouge\">$spacer-y * 1.5</code></li>\n          <li><code class=\"highlighter-rouge\">3</code> - (by default) for classes that set the <code class=\"highlighter-rouge\">margin</code>\n            or <code class=\"highlighter-rouge\">padding</code> to <code class=\"highlighter-rouge\">$spacer-x * 3</code>\n            or <code class=\"highlighter-rouge\">$spacer-y * 3</code></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Spacing -->\n\n<!-- Content helpers -->\n<section id=\"content-helpers\" class=\"card\">\n  <div class=\"card-header\">\n    <h4 class=\"card-title\">حامیان محتوا</h4>\n  </div>\n  <div class=\"card-content\">\n    <!--d-->\n    <div class=\"card-body\">\n      <div class=\"card-text\">\n        <h5 class=\"text-bold-600 my-1\">نمایش دادن</h5>\n        <p>کلاس های کمک کننده محتوا نمایش، موقعیت، Z-شاخص، لبه ها، تراز عمودی، مکان نما، گزینه های سرریز و لیست را فراهم می کند.</p>\n        <p>یکی از این کلاس ها را اضافه کنید تا خواص نمایش های الکترونیک را تغییر دهید.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.d-inline</code></td>\n              <td>عنصر را به عنوان یک عنصر درونی رفتار می کند.</td>\n            </tr>\n            <tr>\n              <td><code>.d-inline-block</code></td>\n              <td>عنصر را به عنوان عنصر inline-block رفتار می کند.</td>\n            </tr>\n            <tr>\n              <td><code>.d-block</code></td>\n              <td>نیروی عنصر را به عنوان یک عنصر بلوک رفتار می کند.</td>\n            </tr>\n            <tr>\n              <td><code>.d-none</code></td>\n              <td>نیروی عنصر را در همه نمایشگاه ها پنهان می کند.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--/d-->\n\n      <!--position-->\n      <div class=\"card-text\">\n        <h5 class=\"text-bold-600 my-1\">موقعیت</h5>\n        <p>یکی از این کلاس ها را برای تنظیم خواص موقعیت های Elemets اضافه کنید.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.position-fixed</code></td>\n              <td>تغییر موقعیت عنصر به ثابت.</td>\n            </tr>\n            <tr>\n              <td><code>.position-relative</code></td>\n              <td>تغییر موقعیت عنصر به نسبی.</td>\n            </tr>\n            <tr>\n              <td><code>.position-absolute</code></td>\n              <td>تغییر موقعیت عنصر به مطلق.</td>\n            </tr>\n            <tr>\n              <td><code>.position-static</code></td>\n              <td>تغییر موقعیت عنصر به استاتیک.</td>\n            </tr>\n            <tr>\n              <td><code>.position-sticky</code></td>\n              <td>تغییر موقعیت عنصر به چسبنده.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--/position-->\n\n      <!--vertical alignment-->\n      <div class=\"card-text\">\n        <h5 class=\"text-bold-600 my-1\">چیدمان عمودی</h5>\n        <p>یکی از این کلاسها را برای تغییر خواص ترازبندی عمودی elemets اضافه کنید.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.align-top</code></td>\n              <td>تغییر مقطع عمودی عنصر به بالا.</td>\n            </tr>\n            <tr>\n              <td><code>.align-middle</code></td>\n              <td>تغییر مقطع عمودی عنصر به وسط.</td>\n            </tr>\n            <tr>\n              <td><code>.align-bottom</code></td>\n              <td>تغییر مقطع عمودی عنصر به پایین.</td>\n            </tr>\n            <tr>\n              <td><code>.align-baseline</code></td>\n              <td>تغییر مقطع عمودی عنصر به خط مقدم.</td>\n            </tr>\n            <tr>\n              <td><code>.align-text-top</code></td>\n              <td>بالای عنصر با بالای فونت عنصر والدین قرار دارد.</td>\n            </tr>\n            <tr>\n              <td><code>.align-text-bottom</code></td>\n              <td>پایین عنصر با پایین فونت عنصر والدین هماهنگ است.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--/vertical alignment-->\n\n      <!--Edges-->\n      <div class=\"card-text\">\n        <h5 class=\"text-bold-600 my-1\">لبه ها</h5>\n        <p>\n            یکی از اینها را اضافه کنید تا لبه های عریض عناصر را حذف کنید، با عناصر مطلق، ثابت و نسبی موقعیت کار می کند\n          </p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.no-edge-top</code></td>\n              <td>لبه بالایی عنصر را حذف می کند.</td>\n            </tr>\n            <tr>\n              <td><code>.no-edge-bottom</code></td>\n              <td>لبه پایینی عنصر را حذف می کند.</td>\n            </tr>\n            <tr>\n              <td><code>.no-edge-left</code></td>\n              <td>لبه چپی عنصر را حذف می کند.</td>\n            </tr>\n            <tr>\n              <td><code>.no-edge-right</code></td>\n              <td>لبه راستی عنصر را حذف می کند.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--/Edges-->\n\n      <!--Overflow-->\n      <div class=\"card-text\">\n        <h5 class=\"text-bold-600 my-1\">سرریز</h5>\n        <p>اضافه کردن یکی از این به کلاس برای تغییر سرریز از عنصر.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.overflow-visible</code></td>\n              <td>پیش فرض سرریز قطع نشده است. این در خارج از جعبه عنصر ارائه می شود.</td>\n            </tr>\n            <tr>\n              <td><code>.overflow-hidden</code></td>\n              <td>سرریز قطع شده است و بقیه مطالب نامرئی هستند.</td>\n            </tr>\n            <tr>\n              <td><code>.overflow-auto</code></td>\n              <td>اگر سرریز کپی شده باشد، برای مشاهده بقیه محتوا، یک اسکرول اضافه می شود.</td>\n            </tr>\n            <tr>\n              <td><code>.overflow-scroll</code></td>\n              <td>سرریز کپی شده است، اما برای مشاهده بقیه محتوا، یک اسکرول اضافه شده است.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!--List-->\n      <div class=\"card-text my-1\">\n        <h5 class=\"text-bold-600 my-1\">لیست</h5>\n        <p>برای تغییر سبک لیست، یکی از اینها را به کلاس اضافه کنید.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table mb-0\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.list-unstyled</code></td>\n              <td>هیچ نشانگر در مورد لیست نمایش داده نمی شود.</td>\n            </tr>\n            <tr>\n              <td><code>.bullets-inside</code></td>\n              <td>مارکر و متن را کنار می گذارد. گلوله درون جریان محتوای نمایش داده می شود</td>\n            </tr>\n            <tr>\n              <td><code>.list-style-circle</code></td>\n              <td>نشانگر مورد لیست را به دایره تنظیم کنید.</td>\n            </tr>\n            <tr>\n              <td><code>.list-style-square</code></td>\n              <td>نشانگر مورد لیست را به مربع تنظیم کنید.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--List-->\n    </div>\n  </div>\n</section>\n<!--/ Content helpers-->\n\n<!-- Borders -->\n<section id=\"borders\" class=\"card\">\n  <div class=\"card-header\">\n    <h4 class=\"card-title\">مرز ها      </h4>\n  </div>\n  <div class=\"card-content\">\n    <!--Add borders-->\n    <div class=\"card-body\">\n      <div class=\"card-text my-1\">\n        <h5 class=\"text-bold-600\">مرز اضافه کنید</h5>\n        <p>یکی از اینها را به کلاس اضافه کنید تا مرز را در سمت مورد نیاز اضافه کنید.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.border</code></td>\n              <td>مرز یکپارچه را در هر طرف اضافه کنید.</td>\n            </tr>\n            <tr>\n              <td><code>.border-top</code></td>\n              <td>اضافه کردن مرز بالایی 1px</td>\n            </tr>\n            <tr>\n              <td><code>.border-bottom</code></td>\n              <td>پای مرزی 1px را اضافه کنید.</td>\n            </tr>\n            <tr>\n              <td><code>.border-left</code></td>\n              <td>حاشیه جامد سمت چپ 1px را اضافه کنید</td>\n            </tr>\n            <tr>\n              <td><code>.border-right</code></td>\n              <td>مرز راست را 1 px اضافه کنید.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--/Add borders-->\n\n      <!--Remove borders-->\n      <div class=\"card-text my-1\">\n        <h5 class=\"text-bold-600\">حذف مرز</h5>\n        <p>برای حذف مرز در سمت مورد نظر، یکی از اینها را به کلاس اضافه کنید.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>border-0</code></td>\n              <td>مرز را از هر طرف بردارید.</td>\n            </tr>\n            <tr>\n              <td><code>border-top-0</code></td>\n              <td>مرز را از قسمت بالا بردارید.</td>\n            </tr>\n            <tr>\n              <td><code>border-bottom-0</code></td>\n              <td>مرز را از قسمت پایین بردارید.</td>\n            </tr>\n            <tr>\n              <td><code>border-left-0</code></td>\n              <td>مرز را از قسمت چپ بردارید.</td>\n            </tr>\n            <tr>\n              <td><code>border-right-0</code></td>\n              <td>مرز را از قسمت راست بردارید.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--/Remove borders-->\n\n\n      <!--Border widths-->\n      <div class=\"card-text my-1\">\n        <h5 class=\"text-bold-600\">عرض مرز</h5>\n        <p>یکی از این ها را به کلاس اضافه کنید تا عرض عرض را در سمت مورد نظر تغییر دهید.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.border-2</code></td>\n              <td>تعویض عرض را به 2 پیکسل در هر طرف.</td>\n            </tr>\n            <tr>\n              <td><code>.border-top-2</code></td>\n              <td>تعویض عرض را به 2 پیکسل در سمت بالا.</td>\n            </tr>\n            <tr>\n              <td><code>.border-bottom-2</code></td>\n              <td>تعویض عرض را به 2 پیکسل در سمت پایین</td>\n            </tr>\n            <tr>\n              <td><code>.border-left-2</code></td>\n              <td>تعویض عرض را به 2 پیکسل در سمت چپ</td>\n            </tr>\n            <tr>\n              <td><code>.border-right-2</code></td>\n              <td>تعویض عرض را به 2 پیکسل در سمت راست</td>\n            </tr>\n            <tr>\n              <td><code>.border-3</code></td>\n              <td>تعویض عرض را به 3 پیکسل در هر طرف </td>\n            </tr>\n            <tr>\n              <td><code>.border-top-3</code></td>\n              <td>تعویض عرض را به 3 پیکسل در سمت بالا</td>\n            </tr>\n            <tr>\n              <td><code>.border-bottom-3</code></td>\n              <td>تعویض عرض را به 3 پیکسل در سمت پایین</td>\n            </tr>\n            <tr>\n              <td><code>.border-left-3</code></td>\n              <td>تعویض عرض را به 3 پیکسل در سمت چپ</td>\n            </tr>\n            <tr>\n              <td><code>.border-right-3</code></td>\n              <td>تعویض عرض را به 3 پیکسل در سمت راست</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--/Border width-->\n\n      <!--Remove border radius-->\n      <div class=\"card-text my-1\">\n        <h5 class=\"text-bold-600\">حذف شعاع مرزی</h5>\n        <p>یکی از اینها را به کلاس اضافه کنید تا شعاع مرزی را در قسمت مورد نظر حذف کنید.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table mb-0\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.no-border-top-radius</code></td>\n              <td>حذف شعاع مرزی از طرف بالا.</td>\n            </tr>\n            <tr>\n              <td><code>.no-border-bottom-radius</code></td>\n              <td>حذف شعاع مرزی از طرف پایین.</td>\n            </tr>\n            <tr>\n              <td><code>.no-border-top-left-radius</code></td>\n              <td>حذف شعاع مرزی از طرف بالا و چپ.</td>\n            </tr>\n            <tr>\n              <td><code>.no-border-top-right-radius</code></td>\n              <td>حذف شعاع مرزی از طرف بالا و راست.</td>\n            </tr>\n            <tr>\n              <td><code>.no-border-bottom-left-radius</code></td>\n              <td>حذف شعاع مرزی از طرف پایین و چپ.</td>\n            </tr>\n            <tr>\n              <td><code>.no-border-bottom-right-radius</code></td>\n              <td>حذف شعاع مرزی از طرف پایین و راست.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--/Remove borders-->\n    </div>\n  </div>\n</section>\n<!--/ Borders-->\n\n<!-- Size -->\n<section id=\"size\" class=\"card\">\n  <div class=\"card-header\">\n    <h4 class=\"card-title\">سایز</h4>\n  </div>\n  <div class=\"card-content\">\n    <div class=\"card-body\">\n      <!--Width & Height-->\n      <div class=\"card-text my-1\">\n        <h5 class=\"text-bold-600\">عرض و ارتفاع</h5>\n        <p>برای تنظیم عرض محتوا، یکی از اینها را به کلاس اضافه کنید.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.fit</code></td>\n              <td>محتوای حداکثر عرض 100٪ را تنظیم کنید.</td>\n            </tr>\n            <tr>\n              <td><code>.half-width</code></td>\n              <td>محتویات محتوا را 50٪ تنظیم کنید.</td>\n            </tr>\n            <tr>\n              <td><code>.full-width</code></td>\n              <td>محتویات محتوا را 100٪ تنظیم کنید.</td>\n            </tr>\n            <tr>\n              <td><code>.full-height</code></td>\n              <td>ارتفاع محتوا را 100٪ تنظیم کنید.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--/Width & Height-->\n\n\n      <!--Fixed Width-->\n      <div class=\"card-text my-1\">\n        <h5 class=\"text-bold-600\">عرض ثابت</h5>\n        <p>برای تنظیم پهنای ثابت محتوای، یکی از اینها را به کلاس اضافه کنید.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.width-&#123;size&#125;</code></td>\n              <td>مقدار محتوا ثابت در پیکسل اندازه انتخاب شده که در آن اندازه می تواند باشد\n                 50, 100, 150, 200, 250, 300,\n                350, 400, 450, 500, 550, 600, 650, 700, 750 and 800. i.e <code>.width-50</code></td>\n            </tr>\n            <tr>\n              <td><code>.width-&#123;size&#125;-per</code></td>\n              <td>محتویات ثابت محدوده ثابت در درصد اندازه انتخاب شده که اندازه آن می تواند باشد\n                 5%, 10%, 15%, 20%, 25%,\n                30%, 35%, 40%, 45%, 50%, 55%, 60%, 65%, 70%, 75% and 80%. i.e <code>.width-5-per</code></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--/Fixed Width-->\n\n      <!--Fixed Height-->\n      <div class=\"card-text my-1\">\n        <h5 class=\"text-bold-600\">ارتفاع ثابت</h5>\n        <p>برای تنظیم ارتفاع ثابت محتوای، یکی از اینها را به کلاس اضافه کنید.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.height-&#123;size&#125;</code></td>\n              <td>تنظیم ارتفاع ثابت در پیکسل اندازه انتخاب شده که اندازه آن می تواند باشد\n                 50, 100, 150, 200, 250, 300,\n                350, 400, 450, 500, 550, 600, 650, 700, 750 and 800. i.e <code>.height-50</code></td>\n            </tr>\n            <tr>\n              <td><code>.height-&#123;size&#125;-per</code></td>\n              <td>مقدار ثابت ارتفاع ثابت در درصد اندازه انتخاب شده که اندازه آن می تواند باشد\n                 5%, 10%, 15%, 20%, 25%,\n                30%, 35%, 40%, 45%, 50%, 55%, 60%, 65%, 70%, 75% and 80%. i.e <code>.height-5-per</code></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--/Fixed Height-->\n    </div>\n  </div>\n</section>\n<!-- Size -->\n\n<!--Image-->\n<section id=\"image\" class=\"card\">\n  <div class=\"card-header\">\n    <h4 class=\"card-title\">عکس</h4>\n  </div>\n  <div class=\"card-content\">\n    <div class=\"card-body\">\n      <div class=\"card-text\">\n        <p>برای تغییر اندازه تصویر و سایر ویژگی، یکی از اینها را به کلاس اضافه کنید.</p>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table mb-0\">\n          <thead>\n            <tr>\n              <th>کلاس</th>\n              <th>توضیح</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>.bg-cover</code></td>\n              <td>\n                  مقیاس تصویر پس زمینه را تا آنجا که ممکن است به طوری که منطقه پس زمینه به طور کامل توسط تصویر پس زمینه پوشیده شده است.\n              </td>\n            </tr>\n            <tr>\n              <td><code>.bg-repeat</code></td>\n              <td> تصویر پس زمینه را تکرار نکنید.                </td>\n            </tr>\n            <tr>\n              <td><code>.bg-no-repeat</code></td>\n              <td>تکرار تصویر پس زمینه</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/Image-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/icons/feather/feather.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/icons/feather/feather.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Feather icons section start -->\n<section id=\"feather-icons\">\n    <div class=\"row text-left\">\n        <div class=\"col-sm-12\">\n            <div class=\"content-header\">آیکن های قلم  </div>\n        </div>\n    </div>\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <div class=\"feather-icons overflow-hidden\">\n                          <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-activity\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-activity</label>\n                                <label class=\"fonticon-unit\">e900</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-airplay\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-airplay</label>\n                                <label class=\"fonticon-unit\">e901</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-alert-circle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-alert-circle</label>\n                                <label class=\"fonticon-unit\">e902</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-alert-octagon\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-alert-octagon</label>\n                                <label class=\"fonticon-unit\">e903</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-alert-triangle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-alert-triangle</label>\n                                <label class=\"fonticon-unit\">e904</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-align-center\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-align-center</label>\n                                <label class=\"fonticon-unit\">e905</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-align-justify\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-align-justify</label>\n                                <label class=\"fonticon-unit\">e906</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-align-left\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-align-left</label>\n                                <label class=\"fonticon-unit\">e907</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-align-right\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-align-right</label>\n                                <label class=\"fonticon-unit\">e908</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-anchor\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-anchor</label>\n                                <label class=\"fonticon-unit\">e909</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-aperture\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-aperture</label>\n                                <label class=\"fonticon-unit\">e90a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-arrow-down-left\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-arrow-down-left</label>\n                                <label class=\"fonticon-unit\">e90b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-arrow-down-right\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-arrow-down-right</label>\n                                <label class=\"fonticon-unit\">e90c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-arrow-down\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-arrow-down</label>\n                                <label class=\"fonticon-unit\">e90d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-arrow-left\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-arrow-left</label>\n                                <label class=\"fonticon-unit\">e90e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-arrow-right\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-arrow-right</label>\n                                <label class=\"fonticon-unit\">e90f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-arrow-up-left\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-arrow-up-left</label>\n                                <label class=\"fonticon-unit\">e910</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-arrow-up-right\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-arrow-up-right</label>\n                                <label class=\"fonticon-unit\">e911</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-arrow-up\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-arrow-up</label>\n                                <label class=\"fonticon-unit\">e912</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-at-sign\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-at-sign</label>\n                                <label class=\"fonticon-unit\">e913</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-award\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-award</label>\n                                <label class=\"fonticon-unit\">e914</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-bar-chart-2\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-bar-chart-2</label>\n                                <label class=\"fonticon-unit\">e915</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-bar-chart\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-bar-chart</label>\n                                <label class=\"fonticon-unit\">e916</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-battery-charging\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-battery-charging</label>\n                                <label class=\"fonticon-unit\">e917</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-battery\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-battery</label>\n                                <label class=\"fonticon-unit\">e918</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-bell-off\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-bell-off</label>\n                                <label class=\"fonticon-unit\">e919</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-bell\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-bell</label>\n                                <label class=\"fonticon-unit\">e91a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-bluetooth\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-bluetooth</label>\n                                <label class=\"fonticon-unit\">e91b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-bold\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-bold</label>\n                                <label class=\"fonticon-unit\">e9ea</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-book\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-book</label>\n                                <label class=\"fonticon-unit\">e91c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-bookmark\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-bookmark</label>\n                                <label class=\"fonticon-unit\">e91d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-box\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-box</label>\n                                <label class=\"fonticon-unit\">e91e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-briefcase\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-briefcase</label>\n                                <label class=\"fonticon-unit\">e91f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-calendar\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-calendar</label>\n                                <label class=\"fonticon-unit\">e920</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-camera-off\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-camera-off</label>\n                                <label class=\"fonticon-unit\">e921</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-camera\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-camera</label>\n                                <label class=\"fonticon-unit\">e922</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-cast\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-cast</label>\n                                <label class=\"fonticon-unit\">e923</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-check-circle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-check-circle</label>\n                                <label class=\"fonticon-unit\">e924</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-check-square\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-check-square</label>\n                                <label class=\"fonticon-unit\">e925</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-check\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-check</label>\n                                <label class=\"fonticon-unit\">e926</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-chevron-down\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-chevron-down</label>\n                                <label class=\"fonticon-unit\">e927</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-chevron-left\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-chevron-left</label>\n                                <label class=\"fonticon-unit\">e928</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-chevron-right\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-chevron-right</label>\n                                <label class=\"fonticon-unit\">e929</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-chevron-up\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-chevron-up</label>\n                                <label class=\"fonticon-unit\">e92a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-chevrons-down\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-chevrons-down</label>\n                                <label class=\"fonticon-unit\">e92b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-chevrons-left\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-chevrons-left</label>\n                                <label class=\"fonticon-unit\">e92c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-chevrons-right\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-chevrons-right</label>\n                                <label class=\"fonticon-unit\">e92d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-chevrons-up\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-chevrons-up</label>\n                                <label class=\"fonticon-unit\">e92e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-chrome\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-chrome</label>\n                                <label class=\"fonticon-unit\">e92f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-circle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-circle</label>\n                                <label class=\"fonticon-unit\">e930</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-clipboard\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-clipboard</label>\n                                <label class=\"fonticon-unit\">e931</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-clock\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-clock</label>\n                                <label class=\"fonticon-unit\">e932</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-cloud-drizzle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-cloud-drizzle</label>\n                                <label class=\"fonticon-unit\">e933</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-cloud-lightning\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-cloud-lightning</label>\n                                <label class=\"fonticon-unit\">e934</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-cloud-off\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-cloud-off</label>\n                                <label class=\"fonticon-unit\">e935</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-cloud-rain\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-cloud-rain</label>\n                                <label class=\"fonticon-unit\">e936</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-cloud-snow\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-cloud-snow</label>\n                                <label class=\"fonticon-unit\">e937</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-cloud\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-cloud</label>\n                                <label class=\"fonticon-unit\">e938</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-codepen\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-codepen</label>\n                                <label class=\"fonticon-unit\">e939</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-command\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-command</label>\n                                <label class=\"fonticon-unit\">e93a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-compass\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-compass</label>\n                                <label class=\"fonticon-unit\">e93b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-copy\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-copy</label>\n                                <label class=\"fonticon-unit\">e93c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-corner-down-left\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-corner-down-left</label>\n                                <label class=\"fonticon-unit\">e93d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-corner-down-right\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-corner-down-right</label>\n                                <label class=\"fonticon-unit\">e93e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-corner-left-down\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-corner-left-down</label>\n                                <label class=\"fonticon-unit\">e93f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-corner-left-up\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-corner-left-up</label>\n                                <label class=\"fonticon-unit\">e940</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-corner-right-down\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-corner-right-down</label>\n                                <label class=\"fonticon-unit\">e941</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-corner-right-up\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-corner-right-up</label>\n                                <label class=\"fonticon-unit\">e942</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-corner-up-left\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-corner-up-left</label>\n                                <label class=\"fonticon-unit\">e943</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-corner-up-right\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-corner-up-right</label>\n                                <label class=\"fonticon-unit\">e944</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-cpu\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-cpu</label>\n                                <label class=\"fonticon-unit\">e945</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-credit-card\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-credit-card</label>\n                                <label class=\"fonticon-unit\">e946</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-crop\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-crop</label>\n                                <label class=\"fonticon-unit\">e9eb</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-crosshair\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-crosshair</label>\n                                <label class=\"fonticon-unit\">e947</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-delete\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-delete</label>\n                                <label class=\"fonticon-unit\">e948</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-disc\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-disc</label>\n                                <label class=\"fonticon-unit\">e949</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-download-cloud\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-download-cloud</label>\n                                <label class=\"fonticon-unit\">e94a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-download\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-download</label>\n                                <label class=\"fonticon-unit\">e94b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-droplet\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-droplet</label>\n                                <label class=\"fonticon-unit\">e94c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-edit-2\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-edit-2</label>\n                                <label class=\"fonticon-unit\">e94d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-edit-3\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-edit-3</label>\n                                <label class=\"fonticon-unit\">e94e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-edit\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-edit</label>\n                                <label class=\"fonticon-unit\">e94f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-external-link\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-external-link</label>\n                                <label class=\"fonticon-unit\">e950</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-eye-off\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-eye-off</label>\n                                <label class=\"fonticon-unit\">e951</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-eye\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-eye</label>\n                                <label class=\"fonticon-unit\">e952</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-facebook\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-facebook</label>\n                                <label class=\"fonticon-unit\">e953</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-fast-forward\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-fast-forward</label>\n                                <label class=\"fonticon-unit\">e954</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-feather\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-feather</label>\n                                <label class=\"fonticon-unit\">e955</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-file-minus\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-file-minus</label>\n                                <label class=\"fonticon-unit\">e956</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-file-plus\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-file-plus</label>\n                                <label class=\"fonticon-unit\">e957</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-file-text\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-file-text</label>\n                                <label class=\"fonticon-unit\">e958</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-file\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-file</label>\n                                <label class=\"fonticon-unit\">e959</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-film\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-film</label>\n                                <label class=\"fonticon-unit\">e95a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-filter\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-filter</label>\n                                <label class=\"fonticon-unit\">e95b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-flag\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-flag</label>\n                                <label class=\"fonticon-unit\">e95c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-folder\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-folder</label>\n                                <label class=\"fonticon-unit\">e95d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-github\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-github</label>\n                                <label class=\"fonticon-unit\">e95e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-gitlab\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-gitlab</label>\n                                <label class=\"fonticon-unit\">e95f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-globe\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-globe</label>\n                                <label class=\"fonticon-unit\">e960</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-grid\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-grid</label>\n                                <label class=\"fonticon-unit\">e961</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-hash\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-hash</label>\n                                <label class=\"fonticon-unit\">e962</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-headphones\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-headphones</label>\n                                <label class=\"fonticon-unit\">e963</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-heart\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-heart</label>\n                                <label class=\"fonticon-unit\">e964</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-heart\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-heart</label>\n                                <label class=\"fonticon-unit\">e964</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-help-circle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-help-circle</label>\n                                <label class=\"fonticon-unit\">e9ec</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-image\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-image</label>\n                                <label class=\"fonticon-unit\">e966</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-inbox\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-inbox</label>\n                                <label class=\"fonticon-unit\">e967</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-info\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-info</label>\n                                <label class=\"fonticon-unit\">e968</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-instagram\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-instagram</label>\n                                <label class=\"fonticon-unit\">e969</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-italic\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-italic</label>\n                                <label class=\"fonticon-unit\">e9ed</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-layers\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-layers</label>\n                                <label class=\"fonticon-unit\">e96a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-layout\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-layout</label>\n                                <label class=\"fonticon-unit\">e96b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-life-buoy\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-life-buoy</label>\n                                <label class=\"fonticon-unit\">e96c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-link-2\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-link-2</label>\n                                <label class=\"fonticon-unit\">e96d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-link\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-link</label>\n                                <label class=\"fonticon-unit\">e96e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-list\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-list</label>\n                                <label class=\"fonticon-unit\">e96f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-loader\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-loader</label>\n                                <label class=\"fonticon-unit\">e970</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-lock\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-lock</label>\n                                <label class=\"fonticon-unit\">e971</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-log-in\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-log-in</label>\n                                <label class=\"fonticon-unit\">e972</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-log-out\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-log-out</label>\n                                <label class=\"fonticon-unit\">e973</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-mail\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-mail</label>\n                                <label class=\"fonticon-unit\">e974</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-map-pin\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-map-pin</label>\n                                <label class=\"fonticon-unit\">e975</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-map\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-map</label>\n                                <label class=\"fonticon-unit\">e976</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-maximize-2\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-maximize-2</label>\n                                <label class=\"fonticon-unit\">e977</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-maximize\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-maximize</label>\n                                <label class=\"fonticon-unit\">e978</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-menu\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-menu</label>\n                                <label class=\"fonticon-unit\">e979</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-message-circle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-message-circle</label>\n                                <label class=\"fonticon-unit\">e97a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-message-square\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-message-square</label>\n                                <label class=\"fonticon-unit\">e97b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-mic-off\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-mic-off</label>\n                                <label class=\"fonticon-unit\">e97c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-mic\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-mic</label>\n                                <label class=\"fonticon-unit\">e97d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-minimize-2\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-minimize-2</label>\n                                <label class=\"fonticon-unit\">e97e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-minimize\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-minimize</label>\n                                <label class=\"fonticon-unit\">e97f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-minus-circle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-minus-circle</label>\n                                <label class=\"fonticon-unit\">e980</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-minus-square\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-minus-square</label>\n                                <label class=\"fonticon-unit\">e981</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-minus\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-minus</label>\n                                <label class=\"fonticon-unit\">e982</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-monitor\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-monitor</label>\n                                <label class=\"fonticon-unit\">e983</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-moon\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-moon</label>\n                                <label class=\"fonticon-unit\">e984</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-more-horizontal\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-more-horizontal</label>\n                                <label class=\"fonticon-unit\">e985</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-more-vertical\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-more-vertical</label>\n                                <label class=\"fonticon-unit\">e986</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-move\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-move</label>\n                                <label class=\"fonticon-unit\">e987</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-music\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-music</label>\n                                <label class=\"fonticon-unit\">e988</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-navigation-2\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-navigation-2</label>\n                                <label class=\"fonticon-unit\">e989</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-navigation\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-navigation</label>\n                                <label class=\"fonticon-unit\">e98a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-octagon\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-octagon</label>\n                                <label class=\"fonticon-unit\">e98b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-package\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-package</label>\n                                <label class=\"fonticon-unit\">e98c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-paperclip\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-paperclip</label>\n                                <label class=\"fonticon-unit\">e98d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-pause-circle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-pause-circle</label>\n                                <label class=\"fonticon-unit\">e98e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-pause\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-pause</label>\n                                <label class=\"fonticon-unit\">e98f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-percent\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-percent</label>\n                                <label class=\"fonticon-unit\">e990</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-phone-call\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-phone-call</label>\n                                <label class=\"fonticon-unit\">e991</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-phone-forwarded\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-phone-forwarded</label>\n                                <label class=\"fonticon-unit\">e992</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-phone-incoming\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-phone-incoming</label>\n                                <label class=\"fonticon-unit\">e993</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-phone-missed\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-phone-missed</label>\n                                <label class=\"fonticon-unit\">e994</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-phone-off\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-phone-off</label>\n                                <label class=\"fonticon-unit\">e995</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-phone-outgoing\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-phone-outgoing</label>\n                                <label class=\"fonticon-unit\">e996</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-phone\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-phone</label>\n                                <label class=\"fonticon-unit\">e997</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-pie-chart\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-pie-chart</label>\n                                <label class=\"fonticon-unit\">e998</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-play-circle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-play-circle</label>\n                                <label class=\"fonticon-unit\">e999</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-play\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-play</label>\n                                <label class=\"fonticon-unit\">e99a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-plus-circle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-plus-circle</label>\n                                <label class=\"fonticon-unit\">e99b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-plus-square\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-plus-square</label>\n                                <label class=\"fonticon-unit\">e99c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-plus\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-plus</label>\n                                <label class=\"fonticon-unit\">e99d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-pocket\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-pocket</label>\n                                <label class=\"fonticon-unit\">e99e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-power\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-power</label>\n                                <label class=\"fonticon-unit\">e99f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-printer\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-printer</label>\n                                <label class=\"fonticon-unit\">e9a0</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-radio\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-radio</label>\n                                <label class=\"fonticon-unit\">e9a1</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-refresh-ccw\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-refresh-ccw</label>\n                                <label class=\"fonticon-unit\">e9a2</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-refresh-cw\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-refresh-cw</label>\n                                <label class=\"fonticon-unit\">e9a3</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-repeat\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-repeat</label>\n                                <label class=\"fonticon-unit\">e9a4</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-rewind\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-rewind</label>\n                                <label class=\"fonticon-unit\">e9a5</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-rotate-ccw\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-rotate-ccw</label>\n                                <label class=\"fonticon-unit\">e9a6</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-rotate-cw\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-rotate-cw</label>\n                                <label class=\"fonticon-unit\">e9a7</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-save\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-save</label>\n                                <label class=\"fonticon-unit\">e9a8</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-scissors\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-scissors</label>\n                                <label class=\"fonticon-unit\">e9a9</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-search\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-search</label>\n                                <label class=\"fonticon-unit\">e9aa</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-server\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-server</label>\n                                <label class=\"fonticon-unit\">e9ab</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-settings\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-settings</label>\n                                <label class=\"fonticon-unit\">e9ac</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-share-2\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-share-2</label>\n                                <label class=\"fonticon-unit\">e9ad</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-share\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-share</label>\n                                <label class=\"fonticon-unit\">e9ae</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-shield\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-shield</label>\n                                <label class=\"fonticon-unit\">e9af</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-shopping-cart\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-shopping-cart</label>\n                                <label class=\"fonticon-unit\">e9ee</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-shuffle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-shuffle</label>\n                                <label class=\"fonticon-unit\">e9b0</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-sidebar\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-sidebar</label>\n                                <label class=\"fonticon-unit\">e9b1</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-skip-back\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-skip-back</label>\n                                <label class=\"fonticon-unit\">e9b2</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-skip-forward\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-skip-forward</label>\n                                <label class=\"fonticon-unit\">e9b3</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-slack\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-slack</label>\n                                <label class=\"fonticon-unit\">e9b4</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-slash\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-slash</label>\n                                <label class=\"fonticon-unit\">e9b5</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-sliders\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-sliders</label>\n                                <label class=\"fonticon-unit\">e9b6</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-smartphone\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-smartphone</label>\n                                <label class=\"fonticon-unit\">e9b7</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-speaker\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-speaker</label>\n                                <label class=\"fonticon-unit\">e9b8</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-square\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-square</label>\n                                <label class=\"fonticon-unit\">e9b9</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-star\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-star</label>\n                                <label class=\"fonticon-unit\">e9ba</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-stop-circle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-stop-circle</label>\n                                <label class=\"fonticon-unit\">e9bb</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-sun\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-sun</label>\n                                <label class=\"fonticon-unit\">e9bc</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-sunrise\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-sunrise</label>\n                                <label class=\"fonticon-unit\">e9bd</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-sunset\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-sunset</label>\n                                <label class=\"fonticon-unit\">e9be</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-tablet\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-tablet</label>\n                                <label class=\"fonticon-unit\">e9bf</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-tag\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-tag</label>\n                                <label class=\"fonticon-unit\">e9c0</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-target\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-target</label>\n                                <label class=\"fonticon-unit\">e9c1</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-thermometer\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-thermometer</label>\n                                <label class=\"fonticon-unit\">e9c2</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-thumbs-down\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-thumbs-down</label>\n                                <label class=\"fonticon-unit\">e9c3</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-thumbs-up\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-thumbs-up</label>\n                                <label class=\"fonticon-unit\">e9c4</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-toggle-left\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-toggle-left</label>\n                                <label class=\"fonticon-unit\">e9c5</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-toggle-right\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-toggle-right</label>\n                                <label class=\"fonticon-unit\">e9c6</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-trash-2\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-trash-2</label>\n                                <label class=\"fonticon-unit\">e9c7</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-trash\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-trash</label>\n                                <label class=\"fonticon-unit\">e9c8</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-trending-down\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-trending-down</label>\n                                <label class=\"fonticon-unit\">e9c9</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-trending-up\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-trending-up</label>\n                                <label class=\"fonticon-unit\">e9ca</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-triangle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-triangle</label>\n                                <label class=\"fonticon-unit\">e9cb</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-tv\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-tv</label>\n                                <label class=\"fonticon-unit\">e9cc</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-twitter\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-twitter</label>\n                                <label class=\"fonticon-unit\">e9cd</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-type\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-type</label>\n                                <label class=\"fonticon-unit\">e9ce</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-umbrella\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-umbrella</label>\n                                <label class=\"fonticon-unit\">e9cf</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-underline\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-underline</label>\n                                <label class=\"fonticon-unit\">e9ef</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-unlock\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-unlock</label>\n                                <label class=\"fonticon-unit\">e9d0</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-upload-cloud\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-upload-cloud</label>\n                                <label class=\"fonticon-unit\">e9d1</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-upload\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-upload</label>\n                                <label class=\"fonticon-unit\">e9d2</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-user-check\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-user-check</label>\n                                <label class=\"fonticon-unit\">e9d3</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-user-minus\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-user-minus</label>\n                                <label class=\"fonticon-unit\">e9d4</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-user-plus\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-user-plus</label>\n                                <label class=\"fonticon-unit\">e9d5</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-user-x\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-user-x</label>\n                                <label class=\"fonticon-unit\">e9d6</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-user\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-user</label>\n                                <label class=\"fonticon-unit\">e9d7</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-users\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-users</label>\n                                <label class=\"fonticon-unit\">e9d8</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-video-off\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-video-off</label>\n                                <label class=\"fonticon-unit\">e9d9</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-video\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-video</label>\n                                <label class=\"fonticon-unit\">e9da</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-voicemail\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-voicemail</label>\n                                <label class=\"fonticon-unit\">e9db</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-volume-1\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-volume-1</label>\n                                <label class=\"fonticon-unit\">e9dc</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-volume-2\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-volume-2</label>\n                                <label class=\"fonticon-unit\">e9dd</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-volume-x\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-volume-x</label>\n                                <label class=\"fonticon-unit\">e9de</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-volume\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-volume</label>\n                                <label class=\"fonticon-unit\">e9df</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-watch\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-watch</label>\n                                <label class=\"fonticon-unit\">e9e0</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-wifi-off\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-wifi-off</label>\n                                <label class=\"fonticon-unit\">e9e1</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-wifi\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-wifi</label>\n                                <label class=\"fonticon-unit\">e9e2</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-wind\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-wind</label>\n                                <label class=\"fonticon-unit\">e9e3</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-x-circle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-x-circle</label>\n                                <label class=\"fonticon-unit\">e9e4</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-x-square\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-x-square</label>\n                                <label class=\"fonticon-unit\">e9e5</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-x\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-x</label>\n                                <label class=\"fonticon-unit\">e9e6</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-zap\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-zap</label>\n                                <label class=\"fonticon-unit\">e9e7</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-zoom-in\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-zoom-in</label>\n                                <label class=\"fonticon-unit\">e9e8</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"ft-zoom-out\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">ft-zoom-out</label>\n                                <label class=\"fonticon-unit\">e9e9</label>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- // Feather icons section end -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/icons/font-awesome/font-awesome.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/icons/font-awesome/font-awesome.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Font Awesome section start -->\n<section id=\"font-awesome-icons\">\n  <div class=\"row  text-left\">\n      <div class=\"col-sm-12\">\n          <div class=\"content-header\">Font Awesome آیکون</div>\n      </div>\n  </div>\n  <div class=\"row  text-left\">\n      <div class=\"col-12\">\n          <div class=\"card\">\n              <div class=\"card-header\">\n              </div>\n              <div class=\"card-content\">\n                  <div class=\"card-body\">\n                      <div class=\"feather-icons overflow-hidden\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-glass\"></i></div>\n                            <label class=\"fonticon-classname\">fa-glass</label>\n                            <label class=\"fonticon-unit\">f000</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-music\"></i></div>\n                            <label class=\"fonticon-classname\">fa-music</label>\n                            <label class=\"fonticon-unit\">f001</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-search\"></i></div>\n                            <label class=\"fonticon-classname\">fa-search</label>\n                            <label class=\"fonticon-unit\">f002</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-envelope-o\"></i></div>\n                            <label class=\"fonticon-classname\">fa-envelope-o</label>\n                            <label class=\"fonticon-unit\">f003</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-heart\"></i></div>\n                            <label class=\"fonticon-classname\">fa-heart</label>\n                            <label class=\"fonticon-unit\">f004</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-star\"></i></div>\n                            <label class=\"fonticon-classname\">fa-star</label>\n                            <label class=\"fonticon-unit\">f005</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-star-o\"></i></div>\n                            <label class=\"fonticon-classname\">fa-star-o</label>\n                            <label class=\"fonticon-unit\">f006</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-user\"></i></div>\n                            <label class=\"fonticon-classname\">fa-user</label>\n                            <label class=\"fonticon-unit\">f007</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-film\"></i></div>\n                            <label class=\"fonticon-classname\">fa-film</label>\n                            <label class=\"fonticon-unit\">f008</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-th-large\"></i></div>\n                            <label class=\"fonticon-classname\">fa-th-large</label>\n                            <label class=\"fonticon-unit\">f009</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-th\"></i></div>\n                            <label class=\"fonticon-classname\">fa-th</label>\n                            <label class=\"fonticon-unit\">f00a</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-th-list\"></i></div>\n                            <label class=\"fonticon-classname\">fa-th-list</label>\n                            <label class=\"fonticon-unit\">f00b</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-check\"></i></div>\n                            <label class=\"fonticon-classname\">fa-check</label>\n                            <label class=\"fonticon-unit\">f00c</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-times\"></i></div>\n                            <label class=\"fonticon-classname\">fa-times</label>\n                            <label class=\"fonticon-unit\">f00d</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-search-plus\"></i></div>\n                            <label class=\"fonticon-classname\">fa-search-plus</label>\n                            <label class=\"fonticon-unit\">f00e</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-search-minus\"></i></div>\n                            <label class=\"fonticon-classname\">fa-search-minus</label>\n                            <label class=\"fonticon-unit\">f010</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-power-off\"></i></div>\n                            <label class=\"fonticon-classname\">fa-power-off</label>\n                            <label class=\"fonticon-unit\">f011</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-signal\"></i></div>\n                            <label class=\"fonticon-classname\">fa-signal</label>\n                            <label class=\"fonticon-unit\">f012</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-cog\"></i></div>\n                            <label class=\"fonticon-classname\">fa-cog</label>\n                            <label class=\"fonticon-unit\">f013</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-trash-o\"></i></div>\n                            <label class=\"fonticon-classname\">fa-trash-o</label>\n                            <label class=\"fonticon-unit\">f014</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-home\"></i></div>\n                            <label class=\"fonticon-classname\">fa-home</label>\n                            <label class=\"fonticon-unit\">f015</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-file-o\"></i></div>\n                            <label class=\"fonticon-classname\">fa-file-o</label>\n                            <label class=\"fonticon-unit\">f016</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-clock-o\"></i></div>\n                            <label class=\"fonticon-classname\">fa-clock-o</label>\n                            <label class=\"fonticon-unit\">f017</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-road\"></i></div>\n                            <label class=\"fonticon-classname\">fa-road</label>\n                            <label class=\"fonticon-unit\">f018</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-download\"></i></div>\n                            <label class=\"fonticon-classname\">fa-download</label>\n                            <label class=\"fonticon-unit\">f019</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-arrow-circle-o-down\"></i></div>\n                            <label class=\"fonticon-classname\">fa-arrow-circle-o-down</label>\n                            <label class=\"fonticon-unit\">f01a</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-arrow-circle-o-up\"></i></div>\n                            <label class=\"fonticon-classname\">fa-arrow-circle-o-up</label>\n                            <label class=\"fonticon-unit\">f01b</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-inbox\"></i></div>\n                            <label class=\"fonticon-classname\">fa-inbox</label>\n                            <label class=\"fonticon-unit\">f01c</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-play-circle-o\"></i></div>\n                            <label class=\"fonticon-classname\">fa-play-circle-o</label>\n                            <label class=\"fonticon-unit\">f01d</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-repeat\"></i></div>\n                            <label class=\"fonticon-classname\">fa-repeat</label>\n                            <label class=\"fonticon-unit\">f01e</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-refresh\"></i></div>\n                            <label class=\"fonticon-classname\">fa-refresh</label>\n                            <label class=\"fonticon-unit\">f021</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-list-alt\"></i></div>\n                            <label class=\"fonticon-classname\">fa-list-alt</label>\n                            <label class=\"fonticon-unit\">f022</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-lock\"></i></div>\n                            <label class=\"fonticon-classname\">fa-lock</label>\n                            <label class=\"fonticon-unit\">f023</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-flag\"></i></div>\n                            <label class=\"fonticon-classname\">fa-flag</label>\n                            <label class=\"fonticon-unit\">f024</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-headphones\"></i></div>\n                            <label class=\"fonticon-classname\">fa-headphones</label>\n                            <label class=\"fonticon-unit\">f025</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-volume-off\"></i></div>\n                            <label class=\"fonticon-classname\">fa-volume-off</label>\n                            <label class=\"fonticon-unit\">f026</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-volume-down\"></i></div>\n                            <label class=\"fonticon-classname\">fa-volume-down</label>\n                            <label class=\"fonticon-unit\">f027</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-volume-up\"></i></div>\n                            <label class=\"fonticon-classname\">fa-volume-up</label>\n                            <label class=\"fonticon-unit\">f028</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-qrcode\"></i></div>\n                            <label class=\"fonticon-classname\">fa-qrcode</label>\n                            <label class=\"fonticon-unit\">f029</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-barcode\"></i></div>\n                            <label class=\"fonticon-classname\">fa-barcode</label>\n                            <label class=\"fonticon-unit\">f02a</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-tag\"></i></div>\n                            <label class=\"fonticon-classname\">fa-tag</label>\n                            <label class=\"fonticon-unit\">f02b</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-tags\"></i></div>\n                            <label class=\"fonticon-classname\">fa-tags</label>\n                            <label class=\"fonticon-unit\">f02c</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-book\"></i></div>\n                            <label class=\"fonticon-classname\">fa-book</label>\n                            <label class=\"fonticon-unit\">f02d</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-bookmark\"></i></div>\n                            <label class=\"fonticon-classname\">fa-bookmark</label>\n                            <label class=\"fonticon-unit\">f02e</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-print\"></i></div>\n                            <label class=\"fonticon-classname\">fa-print</label>\n                            <label class=\"fonticon-unit\">f02f</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-camera\"></i></div>\n                            <label class=\"fonticon-classname\">fa-camera</label>\n                            <label class=\"fonticon-unit\">f030</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-font\"></i></div>\n                            <label class=\"fonticon-classname\">fa-font</label>\n                            <label class=\"fonticon-unit\">f031</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-bold\"></i></div>\n                            <label class=\"fonticon-classname\">fa-bold</label>\n                            <label class=\"fonticon-unit\">f032</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-italic\"></i></div>\n                            <label class=\"fonticon-classname\">fa-italic</label>\n                            <label class=\"fonticon-unit\">f033</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-text-height\"></i></div>\n                            <label class=\"fonticon-classname\">fa-text-height</label>\n                            <label class=\"fonticon-unit\">f034</label>\n                          </div>\n                          <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                            <div class=\"fonticon-wrap\"><i class=\"fa fa-text-width\"></i></div>\n                            <label class=\"fonticon-classname\">fa-text-width</label>\n                            <label class=\"fonticon-unit\">f035</label>\n                          </div>\n                        </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"card-footer\">\n                <h5 class=\"text-right mt-2\">\n                  <a href=\"http://fontawesome.io/icons/\" target=\"_blank\">دریافت آیکن بسیار معروف قلم در اینجا</a>\n                </h5>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n<!-- // Font Awesome section end -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/icons/simple-line/simple-line.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/icons/simple-line/simple-line.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Feather icons section start -->\n<section id=\"simple-line-icons\">\n    <div class=\"row  text-left\">\n        <div class=\"col-sm-12\">\n            <div class=\"content-header\">آیکون خط ساده </div>\n        </div>\n    </div>\n    <div class=\"row  text-left\">\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <div class=\"simple-line-icons overflow-hidden\">\n                          <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-user-female\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-user-female</label>\n                                <label class=\"fonticon-unit\">e000</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-user-follow\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-user-follow</label>\n                                <label class=\"fonticon-unit\">e002</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-user-following\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-user-following</label>\n                                <label class=\"fonticon-unit\">e003</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-user-unfollow\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-user-unfollow</label>\n                                <label class=\"fonticon-unit\">e004</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-trophy\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-trophy</label>\n                                <label class=\"fonticon-unit\">e006</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-screen-smartphone\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-screen-smartphone</label>\n                                <label class=\"fonticon-unit\">e010</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-screen-desktop\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-screen-desktop</label>\n                                <label class=\"fonticon-unit\">e011</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-plane\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-plane</label>\n                                <label class=\"fonticon-unit\">e012</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-notebook\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-notebook</label>\n                                <label class=\"fonticon-unit\">e013</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-moustache\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-moustache</label>\n                                <label class=\"fonticon-unit\">e014</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-mouse\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-mouse</label>\n                                <label class=\"fonticon-unit\">e015</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-magnet\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-magnet</label>\n                                <label class=\"fonticon-unit\">e016</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-energy\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-energy</label>\n                                <label class=\"fonticon-unit\">e020</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-emoticon-smile\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-emoticon-smile</label>\n                                <label class=\"fonticon-unit\">e021</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-disc\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-disc</label>\n                                <label class=\"fonticon-unit\">e022</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-cursor-move\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-cursor-move</label>\n                                <label class=\"fonticon-unit\">e023</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-crop\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-crop</label>\n                                <label class=\"fonticon-unit\">e024</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-credit-card\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-credit-card</label>\n                                <label class=\"fonticon-unit\">e025</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-chemistry\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-chemistry</label>\n                                <label class=\"fonticon-unit\">e026</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-user\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-user</label>\n                                <label class=\"fonticon-unit\">e005</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-speedometer\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-speedometer</label>\n                                <label class=\"fonticon-unit\">e007</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-social-youtube\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-social-youtube</label>\n                                <label class=\"fonticon-unit\">e008</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-social-twitter\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-social-twitter</label>\n                                <label class=\"fonticon-unit\">e009</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-social-tumblr\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-social-tumblr</label>\n                                <label class=\"fonticon-unit\">e00a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-social-facebook\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-social-facebook</label>\n                                <label class=\"fonticon-unit\">e00b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-social-dropbox\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-social-dropbox</label>\n                                <label class=\"fonticon-unit\">e00c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-social-dribbble\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-social-dribbble</label>\n                                <label class=\"fonticon-unit\">e00d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-shield\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-shield</label>\n                                <label class=\"fonticon-unit\">e00e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-screen-tablet\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-screen-tablet</label>\n                                <label class=\"fonticon-unit\">e00f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-magic-wand\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-magic-wand</label>\n                                <label class=\"fonticon-unit\">e017</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-hourglass\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-hourglass</label>\n                                <label class=\"fonticon-unit\">e018</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-graduation\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-graduation</label>\n                                <label class=\"fonticon-unit\">e019</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-ghost\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-ghost</label>\n                                <label class=\"fonticon-unit\">e01a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-game-controller\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-game-controller</label>\n                                <label class=\"fonticon-unit\">e01b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-fire\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-fire</label>\n                                <label class=\"fonticon-unit\">e01c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-eyeglasses\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-eyeglasses</label>\n                                <label class=\"fonticon-unit\">e01d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-envelope-open\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-envelope-open</label>\n                                <label class=\"fonticon-unit\">e01e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-envelope-letter\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-envelope-letter</label>\n                                <label class=\"fonticon-unit\">e01f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-bell\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-bell</label>\n                                <label class=\"fonticon-unit\">e027</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-badge\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-badge</label>\n                                <label class=\"fonticon-unit\">e028</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-anchor\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-anchor</label>\n                                <label class=\"fonticon-unit\">e029</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-wallet\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-wallet</label>\n                                <label class=\"fonticon-unit\">e02a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-vector\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-vector</label>\n                                <label class=\"fonticon-unit\">e02b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-speech\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-speech</label>\n                                <label class=\"fonticon-unit\">e02c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-puzzle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-puzzle</label>\n                                <label class=\"fonticon-unit\">e02d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-printer\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-printer</label>\n                                <label class=\"fonticon-unit\">e02e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-present\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-present</label>\n                                <label class=\"fonticon-unit\">e02f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-playlist\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-playlist</label>\n                                <label class=\"fonticon-unit\">e030</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-pin\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-pin</label>\n                                <label class=\"fonticon-unit\">e031</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-picture\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-picture</label>\n                                <label class=\"fonticon-unit\">e032</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-map\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-map</label>\n                                <label class=\"fonticon-unit\">e033</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-layers\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-layers</label>\n                                <label class=\"fonticon-unit\">e034</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-handbag\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-handbag</label>\n                                <label class=\"fonticon-unit\">e035</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-globe-alt\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-globe-alt</label>\n                                <label class=\"fonticon-unit\">e036</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-globe\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-globe</label>\n                                <label class=\"fonticon-unit\">e037</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-frame\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-frame</label>\n                                <label class=\"fonticon-unit\">e038</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-folder-alt\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-folder-alt</label>\n                                <label class=\"fonticon-unit\">e039</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-film\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-film</label>\n                                <label class=\"fonticon-unit\">e03a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-feed\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-feed</label>\n                                <label class=\"fonticon-unit\">e03b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-earphones-alt\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-earphones-alt</label>\n                                <label class=\"fonticon-unit\">e03c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-earphones\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-earphones</label>\n                                <label class=\"fonticon-unit\">e03d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-drop\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-drop</label>\n                                <label class=\"fonticon-unit\">e03e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-drawer\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-drawer</label>\n                                <label class=\"fonticon-unit\">e03f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-docs\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-docs</label>\n                                <label class=\"fonticon-unit\">e040</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-directions\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-directions</label>\n                                <label class=\"fonticon-unit\">e041</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-direction\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-direction</label>\n                                <label class=\"fonticon-unit\">e042</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-diamond\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-diamond</label>\n                                <label class=\"fonticon-unit\">e043</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-cup\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-cup</label>\n                                <label class=\"fonticon-unit\">e044</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-compass\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-compass</label>\n                                <label class=\"fonticon-unit\">e045</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-call-out\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-call-out</label>\n                                <label class=\"fonticon-unit\">e046</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-call-in\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-call-in</label>\n                                <label class=\"fonticon-unit\">e047</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-call-end\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-call-end</label>\n                                <label class=\"fonticon-unit\">e048</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-calculator\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-calculator</label>\n                                <label class=\"fonticon-unit\">e049</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-bubbles\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-bubbles</label>\n                                <label class=\"fonticon-unit\">e04a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-briefcase\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-briefcase</label>\n                                <label class=\"fonticon-unit\">e04b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-book-open\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-book-open</label>\n                                <label class=\"fonticon-unit\">e04c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-basket-loaded\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-basket-loaded</label>\n                                <label class=\"fonticon-unit\">e04d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-basket\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-basket</label>\n                                <label class=\"fonticon-unit\">e04e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-bag\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-bag</label>\n                                <label class=\"fonticon-unit\">e04f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-action-undo\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-action-undo</label>\n                                <label class=\"fonticon-unit\">e050</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-action-redo\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-action-redo</label>\n                                <label class=\"fonticon-unit\">e051</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-wrench\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-wrench</label>\n                                <label class=\"fonticon-unit\">e052</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-umbrella\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-umbrella</label>\n                                <label class=\"fonticon-unit\">e053</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-trash\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-trash</label>\n                                <label class=\"fonticon-unit\">e054</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-tag\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-tag</label>\n                                <label class=\"fonticon-unit\">e055</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-support\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-support</label>\n                                <label class=\"fonticon-unit\">e056</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-size-fullscreen\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-size-fullscreen</label>\n                                <label class=\"fonticon-unit\">e057</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-size-actual\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-size-actual</label>\n                                <label class=\"fonticon-unit\">e058</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-shuffle\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-shuffle</label>\n                                <label class=\"fonticon-unit\">e059</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-share-alt\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-share-alt</label>\n                                <label class=\"fonticon-unit\">e05a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-share\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-share</label>\n                                <label class=\"fonticon-unit\">e05b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-rocket\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-rocket</label>\n                                <label class=\"fonticon-unit\">e05c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-question\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-question</label>\n                                <label class=\"fonticon-unit\">e05d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-pie-chart\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-pie-chart</label>\n                                <label class=\"fonticon-unit\">e05e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-pencil\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-pencil</label>\n                                <label class=\"fonticon-unit\">e05f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-note\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-note</label>\n                                <label class=\"fonticon-unit\">e060</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-music-tone-alt\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-music-tone-alt</label>\n                                <label class=\"fonticon-unit\">e061</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-music-tone\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-music-tone</label>\n                                <label class=\"fonticon-unit\">e062</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-microphone\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-microphone</label>\n                                <label class=\"fonticon-unit\">e063</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-loop\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-loop</label>\n                                <label class=\"fonticon-unit\">e064</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-logout\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-logout</label>\n                                <label class=\"fonticon-unit\">e065</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-login\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-login</label>\n                                <label class=\"fonticon-unit\">e066</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-list\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-list</label>\n                                <label class=\"fonticon-unit\">e067</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-like\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-like</label>\n                                <label class=\"fonticon-unit\">e068</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-home\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-home</label>\n                                <label class=\"fonticon-unit\">e069</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-grid\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-grid</label>\n                                <label class=\"fonticon-unit\">e06a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-graph\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-graph</label>\n                                <label class=\"fonticon-unit\">e06b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-equalizer\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-equalizer</label>\n                                <label class=\"fonticon-unit\">e06c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-dislike\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-dislike</label>\n                                <label class=\"fonticon-unit\">e06d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-cursor\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-cursor</label>\n                                <label class=\"fonticon-unit\">e06e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-control-start\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-control-start</label>\n                                <label class=\"fonticon-unit\">e06f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-control-rewind\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-control-rewind</label>\n                                <label class=\"fonticon-unit\">e070</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-control-play\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-control-play</label>\n                                <label class=\"fonticon-unit\">e071</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-control-pause\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-control-pause</label>\n                                <label class=\"fonticon-unit\">e072</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-control-forward\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-control-forward</label>\n                                <label class=\"fonticon-unit\">e073</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-control-end\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-control-end</label>\n                                <label class=\"fonticon-unit\">e074</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-calendar\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-calendar</label>\n                                <label class=\"fonticon-unit\">e075</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-bulb\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-bulb</label>\n                                <label class=\"fonticon-unit\">e076</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-bar-chart\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-bar-chart</label>\n                                <label class=\"fonticon-unit\">e077</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-arrow-up\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-arrow-up</label>\n                                <label class=\"fonticon-unit\">e078</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-arrow-right\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-arrow-right</label>\n                                <label class=\"fonticon-unit\">e079</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-arrow-left\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-arrow-left</label>\n                                <label class=\"fonticon-unit\">e07a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-arrow-down\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-arrow-down</label>\n                                <label class=\"fonticon-unit\">e07b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-ban\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-ban</label>\n                                <label class=\"fonticon-unit\">e07c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-bubble\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-bubble</label>\n                                <label class=\"fonticon-unit\">e07d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-camcorder\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-camcorder</label>\n                                <label class=\"fonticon-unit\">e07e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-camera\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-camera</label>\n                                <label class=\"fonticon-unit\">e07f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-check\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-check</label>\n                                <label class=\"fonticon-unit\">e080</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-clock\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-clock</label>\n                                <label class=\"fonticon-unit\">e081</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-close\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-close</label>\n                                <label class=\"fonticon-unit\">e082</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-cloud-download\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-cloud-download</label>\n                                <label class=\"fonticon-unit\">e083</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-cloud-upload\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-cloud-upload</label>\n                                <label class=\"fonticon-unit\">e084</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-doc\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-doc</label>\n                                <label class=\"fonticon-unit\">e085</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-envelope\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-envelope</label>\n                                <label class=\"fonticon-unit\">e086</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-eye\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-eye</label>\n                                <label class=\"fonticon-unit\">e087</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-flag\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-flag</label>\n                                <label class=\"fonticon-unit\">e088</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-folder\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-folder</label>\n                                <label class=\"fonticon-unit\">e089</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-heart\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-heart</label>\n                                <label class=\"fonticon-unit\">e08a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-info\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-info</label>\n                                <label class=\"fonticon-unit\">e08b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-key\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-key</label>\n                                <label class=\"fonticon-unit\">e08c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-link\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-link</label>\n                                <label class=\"fonticon-unit\">e08d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-lock\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-lock</label>\n                                <label class=\"fonticon-unit\">e08e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-lock-open\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-lock-open</label>\n                                <label class=\"fonticon-unit\">e08f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-magnifier\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-magnifier</label>\n                                <label class=\"fonticon-unit\">e090</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-magnifier-add\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-magnifier-add</label>\n                                <label class=\"fonticon-unit\">e091</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-magnifier-remove\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-magnifier-remove</label>\n                                <label class=\"fonticon-unit\">e092</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-paper-clip\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-paper-clip</label>\n                                <label class=\"fonticon-unit\">e093</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-paper-plane\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-paper-plane</label>\n                                <label class=\"fonticon-unit\">e094</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-plus\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-plus</label>\n                                <label class=\"fonticon-unit\">e095</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-pointer\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-pointer</label>\n                                <label class=\"fonticon-unit\">e096</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-power\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-power</label>\n                                <label class=\"fonticon-unit\">e097</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-refresh\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-refresh</label>\n                                <label class=\"fonticon-unit\">e098</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-reload\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-reload</label>\n                                <label class=\"fonticon-unit\">e099</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-settings\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-settings</label>\n                                <label class=\"fonticon-unit\">e09a</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-star\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-star</label>\n                                <label class=\"fonticon-unit\">e09b</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-symbol-female\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-symbol-female</label>\n                                <label class=\"fonticon-unit\">e09c</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-symbol-male\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-symbol-male</label>\n                                <label class=\"fonticon-unit\">e09d</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-target\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-target</label>\n                                <label class=\"fonticon-unit\">e09e</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-volume-1\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-volume-1</label>\n                                <label class=\"fonticon-unit\">e09f</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-volume-2\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-volume-2</label>\n                                <label class=\"fonticon-unit\">e0a0</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-volume-off\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-volume-off</label>\n                                <label class=\"fonticon-unit\">e0a1</label>\n                            </div>\n                            <div class=\"col-md-4 col-sm-6 col-12 fonticon-container\">\n                                <div class=\"fonticon-wrap\">\n                                    <i class=\"icon-users\"></i>\n                                </div>\n                                <label class=\"fonticon-classname\">icon-users</label>\n                                <label class=\"fonticon-unit\">e001</label>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- // Feather icons section end -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/syntax-highlighter/syntax-highlighter.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/syntax-highlighter/syntax-highlighter.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header text-left\">نشانه Syntax</div>\n  </div>\n</div>\n<!-- Basic Usage -->\n<section id=\"basic-usage\" class=\"row  text-left\">\n  <div class=\" col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">استفاده پایه</h4><a class=\"heading-elements-toggle\"></a>\n\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <p>ابتدا لازم است فایلهای prism.css و prism.js را وارد کنید<code>appearance-syntax-highlighter.jade</code>فایل شامل شده است</p>\n          <p>Prism بهترین کار را برای تشویق شیوه های نوشتن خوب انجام می دهد. بنابراین، آن فقط با کار می کند<code>&lt;code&gt;\n            </code>عناصر، از مارک کردن کد بدون یک<code>&lt;code&gt;\n            </code>عنصر از لحاظ معنایی نامعتبر است <a target=\"_blank\" href=\"http://www.w3.org/TR/html5/text-level-semantics.html#the-code-element\">با توجه به مشخصات HTML5</a>و\n            \n            روش توصیه شده برای تعریف یک زبان کد یک است <code>language-xxxx</code>\n            کلاس، که از Prism استفاده می کند. با این حال، Prism فرض می کند که این تعریف زبان به ارث برده می شود. بنابراین، اگر چند\n            <code>&lt;code&gt;\n            </code>عناصر یکسان هستند، شما می توانید اضافه کنید <code>language-xxxx</code>کلاس در یکی از اجداد مشترک آنها.\n            \n            به این ترتیب، می توانید یک زبان پیش فرض سند را با اضافه کردن یک کلاس <code>language-xxxx</code>\n            به بدنه <code>&lt;body&gt;\n            </code>یا المنت <code>&lt;html&gt;\n            </code></p>\n          <p>اگر میخواهید از برجسته کردن برای یک نفر خودداری کنید <code>&lt;code&gt;\n            </code>عنصر که یک نسل از عنصر با یک زبان کد اعلام شده است، می توانید کلاس را اضافه کنید\n            <code>language-none</code>به\n            آن (یا هر زبان غیر موجود، واقعا).</p>\n          <p> <a target=\"_blank\" href=\"https://www.w3.org/TR/html5/grouping-content.html#the-pre-element\">راه های توصیه شده برای علامت گذاری یک بلوک کد\n          </a>(هر دو برای معناشناسی و برای Prism) یک است <code>&lt;pre&gt;\n            </code>عنصر با a <code>&lt;code&gt;\n            </code>عنصر داخل، مانند:</p>\n          <p>کد:</p>\n          <pre class=\"language-markup  text-left\"><code class=\"language-markup\">&lt;pre&gt;\n    &lt;code class=\"language-css\"&gt;\n        p &#123;\n            color: red\n        &#125;\n\n    &lt;/code&gt;\n&lt;/pre&gt;\n</code></pre>\n          <p>خروجی</p>\n          <pre class=\"language-css  text-left\"><code class=\"language-css\">p &#123;\n    color: red\n&#125;\n\n</code></pre>\n          <p>اگر از این الگوی استفاده کنید، <code>&lt;pre&gt;\n            </code>به طور خودکار دریافت خواهد شد<code>language-xxxx</code>\n            کلاس (اگر آن را قبلا آن را ندارند) و به عنوان یک بلوک کد مدل می شود.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Basic Usage -->\n<!-- Examples -->\n<section id=\"examples\" class=\"row  text-left\">\n  <div class=\" col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">مثال</h4> <a class=\"heading-elements-toggle\"></a>\n\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">نشانه گذاری HTML</h5>\n          <p>از کد زیر استفاده کنید تا از نحوه نمایشگر نحوی HTML استفاده کنید.</p>\n          <p class=\"text-bold-800\">استفاده:</p>\n          <pre class=\"language-markup  text-left\"> <code class=\"language-markup\">&lt;pre&gt;\n    &lt;code class=\"language-markup\"&gt;\n    HTML CODE ... &lt;/code&gt;\n&lt;/pre&gt;\n</code> </pre>\n          <p class=\"text-bold-800\">مثال:</p>\n          <pre class=\"language-markup  text-left\"> <code class=\"language-markup\">&lt;div class=\"card\"&gt;\n    &lt;img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"&gt;\n    &lt;div class=\"card-body\"&gt;\n        &lt;h4 class=\"card-title\"&gt;\n        Card title&lt;/h4&gt;\n        &lt;p class=\"card-text\"&gt;\n        Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;\n    &lt;/div&gt;\n    &lt;ul class=\"list-group list-group-flush\"&gt;\n        &lt;li class=\"list-group-item\"&gt;\n        Cras justo odio&lt;/li&gt;\n        &lt;li class=\"list-group-item\"&gt;\n        Dapibus ac facilisis in&lt;/li&gt;\n        &lt;li class=\"list-group-item\"&gt;\n        Vestibulum at eros&lt;/li&gt;\n    &lt;/ul&gt;\n    &lt;div class=\"card-body\"&gt;\n        &lt;a class=\"card-link\"&gt;\n        Card link&lt;/a&gt;\n        &lt;a class=\"card-link\"&gt;\n        Another link&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code> </pre>\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">نشانه گذاری CSS</h5>\n          <p>از کد زیر استفاده کنید تا از نحوه نمایشگر نحوی HTML استفاده کنید.</p>\n          <p class=\"text-bold-800\">Usage:</p>\n          <pre class=\"language-markup  text-left\"> <code class=\"language-markup\">&lt;pre&gt;\n    &lt;code class=\"language-css\"&gt;\n    CSS CODE ... &lt;/code&gt;\n&lt;/pre&gt;\n</code> </pre>\n          <p class=\"text-bold-800\">مثال:</p>\n          <pre class=\"language-css  text-left\"><code class=\"language-css\"> a:active &#123;\n    outline: 0;\n&#125;\n\na:hover &#123;\n    outline: 0;\n&#125;\n\nabbr[title] &#123;\n    border-bottom: 1px dotted;\n&#125;\n\nb, strong &#123;\n    font-weight: bold;\n&#125;\n\ndfn &#123;\n    font-style: italic;\n&#125;\n\nh1 &#123;\n    font-size: 2em;\n    margin: 0.67em 0;\n&#125;\n\n</code> </pre>\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">نشانه گذاری JS</h5>\n          <p>از کد زیر استفاده کنید تا از نحوه نمایشگر نحوی HTML استفاده کنید.</p>\n          <p class=\"text-bold-800\">Usage:</p>\n          <pre class=\"language-markup  text-left\"> <code class=\"language-markup\">&lt;pre&gt;\n    &lt;code class=\"language-js\"&gt;\n    HTML CODE ... &lt;/code&gt;\n&lt;/pre&gt;\n</code> </pre>\n          <p class=\"text-bold-800\">مثال:</p>\n          <pre class=\"language-js  text-left\"> <code class=\"language-js\">init: function() &#123;\n    var scroll_theme=($('.main-menu').hasClass('menu-dark')) ? 'light': 'dark';\n    this.obj=$(\".main-menu-content\").perfectScrollbar( &#123;\n        suppressScrollX: true, theme: scroll_theme\n    &#125;\n    );\n&#125;\n\n, update: function() &#123;\n    if (this.obj) &#123;\n        $(\".main-menu-content\").perfectScrollbar('update');\n    &#125;\n&#125;\n\n, enable: function() &#123;\n    this.init();\n&#125;\n\n, </code> </pre>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Examples -->\n<!-- Line Numbers -->\n<section id=\"line-numbers\" class=\"row  text-left\">\n  <div class=\" col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">شماره خط</h4> <a class=\"heading-elements-toggle\"></a>\n\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <p>شماره خط در ابتدای خطوط کد</p>\n          <p>بدیهی است، این کار فقط برای بلوک های کد انجام می شود (<code>&lt;pre&gt;\n              &lt;code&gt;\n            </code>) و نه برای کد درون خطی. شماره خط کلاس را به دلخواه خود اضافه کنید <code>&lt;pre&gt;\n            </code>و افزونه شماره خط مراقبت خواهد کرد.</p>\n          <p>اختیاری: می توانید مشخصه data-start (Number) را در<code>&lt;pre&gt;\n            </code>عنصر این خط مقابله را تغییر خواهد داد.</p>\n          <p class=\"text-bold-800\">Usage:</p>\n          <pre class=\"language-markup  text-left\"> <code class=\"language-markup\">&lt;pre class=\"line-numbers\"&gt;\n    &lt;code class=\"language-css\"&gt;\n    p &#123;\n        color: red\n    &#125;\n\n    &lt;/code&gt;\n&lt;/pre&gt;\n</code> </pre>\n          <p class=\"text-bold-800\">مثال:</p>\n          <pre class=\"line-numbers\" class=\"language-js  text-left\"><code class=\"language-js\">(function() &#123;\n    if (typeof self==='undefined' || !self.Prism || !self.document) &#123;\n        return;\n    &#125;\n&#125;\n\n());\n</code> </pre>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Line Numbers -->\n<!-- Line highlight -->\n<section id=\"line-highlight\" class=\"row  text-left\">\n  <div class=\" col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">خط برجسته</h4>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <p>برجسته خطوط خاص و / یا محدوده خط.</p>\n          <p>شما خطوطی را که از طریق<em>data-line</em>ویژگی در <code>&lt;pre&gt;\n            </code> عنصر، در قالب ساده زیر:</p>\n          <ul>\n            <li>شماره یک به خط با آن شماره اشاره دارد</li>\n            <li>محدوده ها با دو عدد نشان داده شده اند، با یک خط (-)</li>\n            <li>تعداد خطوط چندگانه یا محدوده ها با کاما از هم جدا می شوند.</li>\n            <li>فضای خالی اجازه داده شده در هر کجا و از بین می رود.</li>\n          </ul>\n          <p class=\"text-bold-800\">استفاده:</p>\n          <pre class=\"language-markup  text-left\"><code class=\"language-markup\">&lt;pre data-line=\"2, 4, 8-10\"&gt;\n    &lt;code class=\"language-css\"&gt;\n    p &#123;\n        color: red\n    &#125;\n\n    &lt;/code&gt;\n&lt;/pre&gt;\n</code> </pre>\n          <p class=\"text-bold-800\">مثال:</p>\n          <pre data-line=\"2, 4, 7-9\" class=\"language-css  text-left\"><code class=\"language-css\">pre.line-numbers &#123;\n    position: relative;\n    padding-left: 3.8em;\n    counter-reset: linenumber;\n&#125;\n\npre.line-numbers > code &#123;\n    position: relative;\n&#125;\n\n.line-numbers .line-numbers-rows &#123;\n    position: absolute;\n    pointer-events: none;\n    top: 0;\n    font-size: 100%;\n    left: -3.8em;\n    width: 3em;\n    /* works for line-numbers below 1000 lines */\n    letter-spacing: -1px;\n    border-right: 1px solid #999;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n&#125;\n\n</code> </pre>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Line highlight -->\n<!-- Autolinker -->\n<section id=\"autolinker\" class=\"row  text-left\">\n  <div class=\" col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">لینک ها</h4> <a class=\"heading-elements-toggle\"></a>\n\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <p>URL ها و ایمیل ها را در کد به لینک های قابل کلیک تبدیل می کند. <a>بازده معامله</a> لینک ها در نظرات</p>\n          <p>\n\n              URL ها و ایمیل ها به طور خودکار پیوند داده می شوند، لازم نیست کاری انجام دهید. برای پیوند برخی از متن درون یک نظر به یک URL خاص، می توانید از نحو نشانه گذاری Markdown استفاده کنید:\n          </p>\n          <p class=\"text-bold-800\">Usage:</p>\n          <pre class=\"language-markup  text-left\"><code class=\"language-markup\">&lt;pre&gt;\n    &lt;code class=\"language-css\"&gt;\n    @font-face &#123;\n        src: url(http://lea.verou.me/logo.otf);\n    &#125;\n\n    &lt;/code&gt;\n&lt;/pre&gt;\n</code> </pre>\n          <p class=\"text-bold-800\">مثال:</p>\n          <pre class=\"language-js  text-left\"><code class=\"language-js\">@font-face &#123;\n    src: url(http://lea.verou.me/logo.otf);\n    font-family: 'LeaVerou';\n&#125;\n</code> </pre>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Autolinker -->\n<!-- Show Invisibles -->\n<section id=\"show-invisibles\" class=\"row  text-left\">\n  <div class=\" col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">نمایش غیرمستقیم</h4>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <p>نمایش شخصیت های پنهان مانند زبانه ها و شکست خط.</p>\n          <p class=\"text-bold-800\">مثال:</p>\n          <pre class=\"language-js  text-left\"><code class=\"language-js \">(function() &#123;\n    if ( typeof self !=='undefined' && !self.Prism || typeof global !=='undefined' && !global.Prism) &#123;\n        return;\n    &#125;\n    Prism.hooks.add('before-highlight', function(env) &#123;\n        var tokens=env.grammar;\n        tokens.tab=/\\t/g;\n        tokens.crlf=/\\r\\n/g;\n        tokens.lf=/\\n/g;\n        tokens.cr=/\\r/g;\n        tokens.space=/ /g;\n    &#125;\n    );\n&#125;\n\n)();\n</code> </pre>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Show Invisibles -->\n<!-- File Highlight -->\n<section id=\"file-highlight\" class=\"row  text-left\">\n  <div class=\" col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">برجسته سازی فایل</h4>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <p>فایلهای خارجی را بیرون بیاورید و با Prism آن را برجسته کنید. در وب سایت خود Prism استفاده می شود.</p>\n          <p>استفاده از <em>data-src</em> ویژگی خالی<code>&lt;pre&gt;\n            </code> elements, like so:</p>\n          <p class=\"text-bold-800\">استفاده:</p>\n          <pre class=\"language-markup  text-left\"> <code class=\"language-markup\">&lt;pre data-src=\"myfile.js\"&gt;\n&lt;/pre&gt;\n</code> </pre>\n          <p>شما لازم نیست زبان را مشخص کنید، به طور خودکار با فرمت فایل تعیین می شود. اگر، با این حال، زبان را نمی توان از پسوند فایل تعریف کرد یا فرمت فایل نادرست است، شما همچنین ممکن است یک زبان را مشخص کنید (با نام معمول نام کلاس).</p>\n          <p>\n              طفا توجه داشته باشید که فایل ها با XMLHttpRequest جمع آوری می شوند. این بدان معنی است که اگر فایل بر مبنای دیگری باشد، فیدبک آن را شکست خواهد داد، مگر اینکه CORS در آن وبسایت فعال باشد\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ File Highlight -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/text-utilities/text-utilities.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/text-utilities/text-utilities.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"content-header text-left\">نرم افزار متن</div>\n    </div>\n</div>\n<!-- Contextual colors -->\n<section id=\"contextual-colors\" class=\"card text-left\">\n    <div class=\"card-header\">\n        <h4 class=\"card-title\">رنگ متنی</h4>\n        <p>معنی را از طریق رنگ با تعداد انگشت شماری از کلاسهای ابزارهای تأکید انتقال دهید. این نیز ممکن است به لینک ها اعمال شود و در حوادث مشابه همانند سبک های پیشفرض پیش فرض تیره خواهد شد.</p>\n    </div>\n    <div class=\"card-content\">\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>مثال</th>\n                            <th>کلاس</th>\n                            <th>کد</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <p class=\"text-muted\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>\n                            </td>\n                            <td><code>.text-muted</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code> &lt;p class=\"text-muted\"&gt;Your Text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-primary\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>\n                            </td>\n                            <td><code>.text-primary</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code> &lt;p class=\"text-primary\"&gt;Your Text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-success\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>\n                            </td>\n                            <td><code>.text-success</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code> &lt;p class=\"text-success\"&gt;Your Text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-info\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>\n                            </td>\n                            <td><code>.text-info</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code> &lt;p class=\"text-info\"&gt;Your Text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-warning\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>\n                            </td>\n                            <td><code>.text-warning</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code> &lt;p class=\"text-warning\"&gt;Your Text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-danger\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>\n                            </td>\n                            <td><code>.text-danger</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code> &lt;p class=\"text-danger\"&gt;Your Text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!--/ Contextual colors -->\n\n<!-- Contextual background -->\n<section id=\"contextual-background\" class=\"card text-left\">\n    <div class=\"card-header\">\n        <h4 class=\"card-title\">پس زمینه متنی</h4>\n        <p>کلاس های متنی، به راحتی پس زمینه یک عنصر را به هر کلاس متنی تنظیم می کند. اجزاء لنگر در حوادث تار می کنند، درست مانند کلاس های متن.</p>\n    </div>\n    <div class=\"card-content\">\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>مثال</th>\n                            <th>کلاس</th>\n                            <th>کد</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <span class=\"bg-primary text-highlight white\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </span>\n                            </td>\n                            <td><code>.bg-primary</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"bg-primary\"&gt;Your Text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <span class=\"bg-success text-highlight white\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </span>\n                            </td>\n                            <td><code>.bg-success</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"bg-success\"&gt;Your Text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <span class=\"bg-info text-highlight white\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </span>\n                            </td>\n                            <td><code>.bg-info</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"bg-info\"&gt;Your Text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <span class=\"bg-warning text-highlight white\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </span>\n                            </td>\n                            <td><code>.bg-warning</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"bg-warning\"&gt;Your Text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <span class=\"bg-danger text-highlight white\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </span>\n                            </td>\n                            <td><code>.bg-danger</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"bg-danger\"&gt;Your Text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</section>\n<!--/ Contextual background -->\n\n<!-- Text alignment -->\n<section id=\"text-alignment\" class=\"card text-left\">\n    <div class=\"card-header\">\n        <h4 class=\"card-title\">تراز متن</h4>\n        <p>به راحتی متن را به اجزای با کلاس های هم ترازی متن اصلاح کنید.</p>\n    </div>\n    <div class=\"card-content\">\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table mb-0 table-responsive\">\n                    <thead>\n                        <tr>\n                            <th>مثال</th>\n                            <th>کلاس</th>\n                            <th>کد</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <p class=\"text-justify\">\n                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. \n                                </p>\n                            </td>\n                            <td><code>.text-justify</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"text-justify\"&gt;Justified text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-nowrap\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>\n                            </td>\n                            <td><code>.text-nowrap</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code class=\"language-markup\">&lt;p class=\"text-nowrap\"&gt;No wrap text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"card-text\">\n                <p>\n                        برای چپ، راست و هماهنگی مرکز، کلاس های پاسخگو در دسترس هستند که با استفاده از همان نقاط بازپرداخت عرض نمایش به عنوان سیستم شبکه استفاده می شود.\n                </p>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-white-space no-wrap table-middle mb-0\">\n                    <thead>\n                        <tr>\n                            <th>مثال</th>\n                            <th>کلاس</th>\n                            <th>کد</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <p class=\"text-left\">متن تراز چپ در تمام اندازه های نمای دید.</p>\n                            </td>\n                            <td><code>.text-left</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"text-left\"&gt;Left aligned text on all viewport sizes.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-center\">متن تراز متن در تمام اندازه های نمایش پرونده.</p>\n                            </td>\n                            <td><code>.text-center</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code class=\"language-markup\">&lt;p class=\"text-center\"&gt;Center aligned text on all viewport sizes.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-right\">متن راست راست در تمام اندازه های دید.</p>\n                            </td>\n                            <td><code>.text-right</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code class=\"language-markup\">&lt;p class=\"text-right\"&gt;Right aligned text on all viewport sizes.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</section>\n<!--/ Text alignment -->\n\n<!-- Text transform -->\n<section id=\"text-transform\" class=\"card text-left\">\n    <div class=\"card-header\">\n        <h4 class=\"card-title\">تبدیل متن</h4>\n        <p>تبدیل متن در اجزای با کلاس های سرمایه گذاری متن.</p>\n        <p>توجه داشته باشید که چگونه <code class=\"highlighter-rouge\">text-capitalize</code> تنها حرف اول هر کلمه را تغییر می دهد، و حروف هر نامه دیگر را تحت تاثیر قرار نمی دهد.</p>\n    </div>\n    <div class=\"card-content\">\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table mb-0\">\n                    <thead>\n                        <tr>\n                            <th>مثال</th>\n                            <th>کلاس</th>\n                            <th>کد</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <p class=\"text-lowercase\">متن پایین تر</p>\n                            </td>\n                            <td><code>.text-lowercase</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code>&lt;p class=\"text-lowercase\"&gt;Lowercased text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-uppercase\">متن بزرگتر</p>\n                            </td>\n                            <td><code>.text-uppercase</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code class=\"language-markup\">&lt;p class=\"text-uppercase\"&gt;Uppercased text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-capitalize\">متن CapiTaliZed</p>\n                            </td>\n                            <td><code>.text-capitalize</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code class=\"language-markup\">&lt;p class=\"text-capitalize\"&gt;CapiTaliZed text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</section>\n<!--/ Text transform -->\n\n<!-- Text option -->\n<section id=\"text-option\" class=\"card text-left\">\n    <div class=\"card-header\">\n        <h4 class=\"card-title\">گزینه متن</h4>\n    </div>\n    <div class=\"card-content\">\n        <div class=\"card-body\">\n            <div class=\"card-text\">\n                <h5 class=\"text-bold-600 mb-1\">سایز فونت</h5>\n                <p>Admin Apex ارائه فونت کلاس های بزرگ و کوچک برای کلاس تغییر اندازه فونت.</p>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table mb-0\">\n                    <thead>\n                        <tr>\n                            <th>مثال</th>\n                            <th>کلاس</th>\n                            <th>کد</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <p class=\"font-large-3\">اندازه متن بزرگ</p>\n                            </td>\n                            <td>\n                                <code>.font-large-3</code>\n                            </td>\n                            <td>\n                            <pre class=\"language-markup\"><code>    &lt;p class=\"font-large-3\" &gt;Large text size.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"font-large-2\">اندازه متن بزرگ</p>\n                            </td>\n                            <td>\n                                <code>.font-large-2</code>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"font-large-2\" &gt;Large text size.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"font-large-1\">اندازه متن بزرگ</p>\n                            </td>\n                            <td>\n                                <code>.font-large-1</code>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"font-large-1\" &gt;Large text size.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"font-medium-3\">اندازه متن متوسط</p>\n                            </td>\n                            <td>\n                                <code>.font-medium-3</code>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"font-medium-3\" &gt;Medium text size.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"font-medium-2\">اندازه متن متوسط</p>\n                            </td>\n                            <td>\n                                <code>.font-medium-2</code>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"font-medium-2\" &gt;Medium text size.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"font-medium-1\">اندازه متن متوسط</p>\n                            </td>\n                            <td>\n                                <code>.font-medium-1</code>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"font-medium-1\" &gt;Medium text size.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p>اندازه متن پایه عادی</p>\n                            </td>\n                            <td>\n                                N/A\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt;Normal base text size.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"font-small-3\">اندازه کوچک متن</p>\n                            </td>\n                            <td>\n                                <code>.font-small-3</code>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"font-small-3\" &gt;Small text size.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"font-small-2\">اندازه کوچک متن</p>\n                            </td>\n                            <td>\n                                <code>.font-small-2</code>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"font-small-2\" &gt;Small text size.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"font-small-1\">اندازه کوچک متن</p>\n                            </td>\n                            <td>\n                                <code>.font-small-1</code>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"font-small-1\" &gt;Small text size.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"card-text\">\n                <h5 class=\"text-bold-600 my-1\">وزن قلم</h5>\n                <p>Admin Apex کلاس وزن فونت را ارائه می دهد <code>.text-bold-&#123;weight&#125;</code>, where <code>&#123;weight&#125; value can be 100,200 ... 900.</code></p>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table mb-0\">\n                    <thead>\n                        <tr>\n                            <th>مثال</th>\n                            <th>کلاس</th>\n                            <th>کد</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <p class=\"text-bold-300\">وزن قلم 300</p>\n                            </td>\n                            <td><code>.text-bold-300</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"text-bold-300\"&gt;Font weight 300.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-bold-400\">وزن قلم 400</p>\n                            </td>\n                            <td><code>.text-bold-400</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"text-bold-400\"&gt;Font weight 400.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-bold-600\">وزن قلم 600</p>\n                            </td>\n                            <td><code>.text-bold-600</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"text-bold-600\"&gt;Font weight 600.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p class=\"text-bold-700\">وزن قلم 700</p>\n                            </td>\n                            <td><code>.text-bold-700</code></td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p class=\"text-bold-700\"&gt;Font weight 700.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"card-text\">\n                <h4 class=\"text-bold-600 my-1\">عناصر متن درونی</h4>\n                <p>یک ظاهر طراحی شده برای عناصر HTML5 معمولی درون خطی.</p>\n                <p><code class=\"highlighter-rouge\">.mark</code> و <code class=\"highlighter-rouge\">.small</code> \n                    کلاس ها نیز برای استفاده از سبک های مشابه در دسترس هستند\n                    <code class=\"highlighter-rouge\">&lt;mark&gt;</code> و\n                    <code\n                        class=\"highlighter-rouge\">&lt;small&gt;</code>در حالی که اجتناب از مفاهیم معنایی ناخواسته که برچسب ها را به ارمغان می آورد.</p>\n                <p class=\"\">در حالی که در بالا نشان داده نمی شود، برای استفاده راحت باشید <code class=\"highlighter-rouge\">&lt;b&gt;</code> و <code class=\"highlighter-rouge\">&lt;i&gt;</code>                    in HTML5. <code class=\"highlighter-rouge\">&lt;b&gt;</code> \n                    به معنای برجسته کردن واژه ها یا عبارات بدون انتقال اهمیت اضافی در حالی است که\n                    <code class=\"highlighter-rouge\">&lt;i&gt;</code> عمدتا برای صدا، اصطلاحات فنی و غیره است</p>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table mb-0\">\n                    <thead>\n                        <tr>\n                            <th>مثال</th>\n                            <th>کد</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <p>شما می توانید برچسب علامت را به\n                                    متن<mark>برجسته</mark> .</p>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt;You can use the mark tag to &lt;mark&gt;highlight&lt;/mark&gt; text.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p>\n                                    <del>این خط متن به عنوان متن حذف شده محسوب می شود.</del>\n                                </p>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt;&lt;del&gt;This line of text is meant to be treated as deleted text.&lt;/del&gt;&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p>\n                                    <s>این خط متن به معنای آن است که دیگر دقت نکنیم.</s>\n                                </p>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt;&lt;s&gt;This line of text is meant to be treated as no longer accurate.&lt;/s&gt;&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p>\n                                        این خط متن\n                                    <ins>به معنای آن است که علاوه بر سند نیز در نظر گرفته شود.</ins>\n                                </p>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt;&lt;ins&gt;This line of text is meant to be treated as an addition to the document.&lt;/ins&gt;&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p>\n                                    <u>این خط متن به صورت زیر نشان داده می شود</u>\n                                </p>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt;&lt;u&gt;This line of text will render as underlined.&lt;/u&gt;&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p><small>این خط از متن به عنوان چاپ خوب در نظر گرفته شده است.</small></p>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt;&lt;small&gt;This line of text is meant to be treated as fine print.&lt;/small&gt;&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p><strong>این خط به صورت bold نوشته شده است.</strong></p>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt;&lt;strong&gt;This line rendered as bold text.&lt;/strong&gt;&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p><em>این خط به صورت متن کلاسیک ارائه شده است.</em></p>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt;&lt;em&gt;This line rendered as italicized text.&lt;/em&gt;&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p>مثال\n                                    <abbr title=\"\" data-popup=\"tooltip\" data-original-title=\"Abbr title\">اختصار</abbr>\n                                </p>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt; Sample &lt;abbr&gt;Abbreviations.&lt;/abbr&gt;&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p>مثال\n                                    <abbr title=\"HyperText Markup Language\" class=\"initialism\">HTML</abbr> عنوان.</p>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt; Sample &lt;abbr title=\"HyperText Markup Language\" class=\"initialism\"&gt;HTML.&lt;/abbr&gt;&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <var>y</var> =\n                                <var>m</var>\n                                <var>x</var> +\n                                <var>b</var>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt; For indicating variables use the &lt;var&gt; tag.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <p>ویرایش تنظیمات، را فشار دهید\n                                    <kbd>\n                                        <kbd>ctrl</kbd> +\n                                    <kbd>,</kbd>\n                                    </kbd>\n                                </p>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt; Use the &lt;kbd&gt;  to indicate input that is typically entered via keyboard.&lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <samp>این متن به عنوان خروجی نمونه از یک برنامه کامپیوتری رفتار می شود.</samp>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt; For indicating sample output from a program use the  &lt;samp&gt;  tag. &lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <code>Inline code snippet</code>\n                            </td>\n                            <td>\n                                <pre class=\"language-markup\"><code>    &lt;p&gt; Wrap inline snippets of code with &lt;code&gt; tag. &lt;/p&gt;</code></pre>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</section>\n<!--/ Text option -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/typography/typography.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/typography/typography.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header text-left\">تایپوگرافی</div>\n  </div>\n</div>\n<!-- Headings -->\n<section id=\"html-headings-default\">\n  <div class=\"row\" matchHeight=\"card\">\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"card  text-left\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">عنوان های HTML <small class=\"text-muted\">پیش فرض</small></h4>\n          <p>همه عنوان های HTML<code class=\"highlighter-rouge\">&lt;h1&gt;</code> از طریق\n            <code class=\"highlighter-rouge\">&lt;h6&gt;</code>،در دسترس هستند.</p>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-content\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-borderless mb-0\">\n                <tbody>\n                  <tr>\n                    <td>\n                      <h1>H1. عنوان</h1>\n                    </td>\n                    <td class=\"type-info text-right\">مثال 2rem</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h2>H2. عنوان</h2>\n                    </td>\n                    <td class=\"type-info text-right\">مثال 74rem</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h3>H3. عنوان</h3>\n                    </td>\n                    <td class=\"type-info text-right\">مثال 1.51rem</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h4>H4. عنوان</h4>\n                    </td>\n                    <td class=\"type-info text-right\">مثال 1.32rem</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h5>H5. عنوان</h5>\n                    </td>\n                    <td class=\"type-info text-right\">مثال 1.14rem</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h6>H6. عنوان</h6>\n                    </td>\n                    <td class=\"type-info text-right\">مثال 1rem</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"card  text-left\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">کلاس های عنوان</h4>\n          <p><code class=\"highlighter-rouge\">.h1</code> از طریق<code class=\"highlighter-rouge\">.h6</code> \n            کلاس ها نیز در دسترس هستند، زیرا زمانی که می خواهید با یک ظاهر فونت یک عنوان مطابقت داشته باشید، می توانید از عنصر HTML مرتبط استفاده نکنید.\n          </p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-borderless mb-0\">\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"h1\">H1. عنوان</p>\n                    </td>\n                    <td class=\"type-info text-right\">مثال 2rem</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"h2\">H2. عنوان</p>\n                    </td>\n                    <td class=\"type-info text-right\">مثال 74rem</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"h3\">H3. عنوان</p>\n                    </td>\n                    <td class=\"type-info text-right\">مثال 1.51rem</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"h4\">H4. عنوان</p>\n                    </td>\n                    <td class=\"type-info text-right\">مثال 1.32rem</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"h5\">H5. عنوان</p>\n                    </td>\n                    <td class=\"type-info text-right\">مثال 1.14rem</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"h6\">H6. عنوان</p>\n                    </td>\n                    <td class=\"type-info text-right\">مثال 1rem</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Headings -->\n\n<!-- Customizing headings -->\n<section id=\"customizing-headings-default\">\n  <div class=\"row\" matchHeight=\"card\">\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"card  text-left\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">سرصفحه سفارشی<small class=\"text-muted\">پیش فرض</small></h4>\n          <p>از کلاسهای ابزار گنجانده شده برای نوشتن متن کوچک متن ثانوی استفاده کنید.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-borderless mb-0\">\n                <tbody>\n                  <tr>\n                    <td>\n                      <h1>نمایش عنوان <small class=\"text-muted\">متن ثانویه</small></h1>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h2>نمایش عنوان <small class=\"text-muted\">متن ثانویه</small></h2>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h3>نمایش عنوان <small class=\"text-muted\">متن ثانویه</small></h3>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h4>نمایش عنوان <small class=\"text-muted\">متن ثانویه</small></h4>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h5>نمایش عنوان <small class=\"text-muted\">متن ثانویه</small></h5>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h6>نمایش عنوان <small class=\"text-muted\">متن ثانویه</small></h6>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"card  text-left\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">رنگ سرآغاز</h4>\n          <p>\n              عناصر عنوان سنتی برای بهترین کار در گوشت محتوای صفحه طراحی شده اند. هنگامی که شما نیاز به یک عنوان به ایستادگی کردن، در نظر استفاده از یک\n            <strong>display heading</strong>—یکی از سبک های بزرگ تر، کمی بیشتر احترام.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-borderless mb-0\">\n                <tbody>\n                  <tr>\n                    <td>\n                      <h1 class=\"primary\">نمایش عنوان</h1>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h2 class=\"success\">نمایش عنوان</h2>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h3 class=\"info\">نمایش عنوان</h3>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h4 class=\"warning\">نمایش عنوان</h4>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h5 class=\"danger\">نمایش عنوان</h5>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h6 class=\"\">نمایش عنوان</h6>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Headings -->\n\n<!-- Blockquotes basic-->\n<section id=\"blockquotes\">\n  <div class=\"row\">\n    <div class=\"col-sm-12  text-left\">\n      <div class=\"content-header\">بلاک محتوا</div>\n      <p class=\"content-sub-header\">برای اشاره به بلوک های محتوا از منبع دیگری در سند خود. بسته بندی کردن <code\n          class=\"highlighter-rouge\">&lt;blockquote class=\"blockquote\"&gt;</code> در اطراف هر <abbr title=\"زبان نشانه گذاری HyperText\">HTML</abbr>\n          به عنوان نقل قول.</p>\n    </div>\n  </div>\n  <div class=\"row\" matchHeight=\"card\">\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">بلاک محتوا <small class=\"text-muted\">پیش فرض</small></h4>\n          <p>چپ تراز پایه</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text\">\n              <blockquote class=\"blockquote\">\n                <p class=\"mb-0\">طراحی فقط چیزی است که به نظر می رسد و احساس می کند. طراحی چگونگی کارکرد آن است.</p>\n              </blockquote>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">بلاک محتوا <small class=\"text-muted\">راست</small></h4>\n          <p>اضافه کردن <code class=\"highlighter-rouge\">.blockquote.text-right</code> برای یک  محتوای راست تراز.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text\">\n              <blockquote class=\"blockquote text-right\">\n                  <p class=\"mb-0\">طراحی فقط چیزی است که به نظر می رسد و احساس می کند. طراحی چگونگی کارکرد آن است.</p>\n              </blockquote>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Blockquotes basic -->\n\n<!-- Naming a source -->\n<section id=\"naming-a-source-default\">\n  <div class=\"row\" matchHeight=\"card\">\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">نام یک منبع <small class=\"text-muted\">پیش فرض</small></h4>\n          <p>اضافه کردن یک <code class=\"highlighter-rouge\">&lt;footer class=\"blockquote-footer\"&gt;</code>\n            \n            برای شناسایی منبع. نام منبع کار من را ببندید\n         <code class=\"highlighter-rouge\">&lt;cite&gt;</code>.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text\">\n              <blockquote class=\"blockquote\">\n                <p>\n                    داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.\n                </p>\n                <div class=\"blockquote-footer pl-0 pt-1\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">نام یک منبع <small class=\"text-muted\">راست</small></h4>\n          <p>اضافه کردن یک <code class=\"highlighter-rouge\">&lt;footer class=\"blockquote-footer\"&gt;</code> برای شناسایی منبع با\n            <code class=\"highlighter-rouge\">.blockquote.text-right</code> \n            برای یک مسابقه با محتوای راست تراز.\n          </p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text\">\n              <blockquote class=\"blockquote text-right\">\n                <p>\n                    داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.\n                </p>\n                <div class=\"blockquote-footer pt-1\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Naming a source -->\n\n<!-- Blockquotes styling -->\n<section id=\"blockquotes-styling-default\">\n  <div class=\"row\" matchHeight=\"card\">\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title  text-left\">متن محتوا یکنواخت <small class=\"text-muted\">پیش فرض</small></h4>\n          <p>اضافه کردن <code class=\"highlighter-rouge\">.border-left-&#123;color&#125; .border-right-3</code> \n            کلاس های کمکی، که در آن رنگ می تواند هر رنگ از Robuts Admin باشد\n            <a href=\"color-palettes\" target=\"_blank\">پالت رنگ</a>.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text\">\n              <blockquote class=\"blockquote border-left-primary border-left-3 pl-2\">\n                <p>داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.</p>\n                <div class=\"blockquote-footer pt-1 pl-0\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n              <blockquote class=\"blockquote border-left-danger border-left-3 pl-2 mt-1\">\n                <p>داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.</p>\n                <div class=\"blockquote-footer pt-1 pl-0\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">استایل متن محتوا <small class=\"text-muted\">راست</small></h4>\n          <p>اضافه کردن <code class=\"highlighter-rouge\">.border-right-&#123;color&#125; .border-right-3</code> \n            کلاس های کمکی با\n            <code>.blockquote.text-right</code>، که در آن رنگ می تواند هر رنگی از Robuts Admin باشد <a href=\"color-palettes\"\n              target=\"_blank\">پالت رنگ</a>.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text\">\n              <blockquote class=\"blockquote text-right border-right-info border-right-3 pr-2\">\n                <p>داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد./p>\n                <div class=\"blockquote-footer pt-1\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n              <blockquote class=\"blockquote text-right border-right-success border-right-3 pr-2 mt-1\">\n                <p>داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.</p>\n                <div class=\"blockquote-footer pt-1\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Blockquotes styling -->\n\n<!-- Blockquotes with avatar -->\n<section id=\"blockquotes-with-avatar\">\n  <div class=\"row\" matchHeight=\"card\">\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">متن محتوا با آواتار <small class=\"text-muted\">پیش فرض</small></h4>\n          <p>متن محتوا با نماد از شی رسانه استفاده کنید. شما می توانید نوع تصویر، تراز مرزی و سبک را سفارشی کنید.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text\">\n              <blockquote class=\"blockquote border-left-primary border-left-3 pl-2\">\n                <div class=\"media\">\n                  <div class=\"media-left\">\n                    <img class=\"media-object img-xl\" src=\"assets/img/portrait/small/avatar-s-5.png\" alt=\"Generic placeholder image\">\n                  </div>\n                  <div class=\"media-body\">\n                   داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.\n                  </div>\n                </div>\n                <div class=\"blockquote-footer no-border-top pl-0 pt-1\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n              <blockquote class=\"blockquote border-right-primary border-right-3 pr-2 no-border-left\">\n                <div class=\"media\">\n                  <div class=\"media-left\">\n                    <img class=\"media-object img-xl\" src=\"assets/img/portrait/small/avatar-s-4.png\" alt=\"Generic placeholder image\">\n                  </div>\n                  <div class=\"media-body\">\n                   داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.\n                  </div>\n                </div>\n                <div class=\"blockquote-footer no-border-top pl-0 pt-1\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n              <p class=\"mt-2  text-left\">متن حتوا با مثال نمونه گرد تصویر</p>\n              <blockquote class=\"blockquote border-left-danger border-left-3 pl-2 mt-1\">\n                <div class=\"media\">\n                  <div class=\"media-left\">\n                    <img class=\"media-object img-xl rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\" alt=\"Generic placeholder image\">\n                  </div>\n                  <div class=\"media-body\">\n                   داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.\n                  </div>\n                </div>\n                <div class=\"blockquote-footer no-border-top pl-0 pt-1\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n              <blockquote class=\"blockquote border-right-danger border-right-3 pr-2 no-border-left mt-1\">\n                <div class=\"media\">\n                  <div class=\"media-left\">\n                    <img class=\"media-object img-xl rounded-circle\" src=\"assets/img/portrait/small/avatar-s-1.png\" alt=\"Generic placeholder image\">\n                  </div>\n                  <div class=\"media-body\">\n                   داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.\n                  </div>\n                </div>\n                <div class=\"blockquote-footer no-border-top pl-0 pt-1\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">متن محتوا با اواتار<small class=\"text-muted\">راست</small></h4>\n          <p>\n              به ترتیب بلوکوت ها با نماد راست قرار دارد، همچنین از شی رسانه استفاده می کند. شما می توانید نوع تصویر، تراز مرزی و سبک را سفارشی کنید.\n          </p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text\">\n              <blockquote class=\"blockquote text-right border-right-info border-right-3 pr-2\">\n                <div class=\"media\">\n                  <div class=\"media-body\">\n                   داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.\n                  </div>\n                  <div class=\"media-right pl-2\">\n                    <img class=\"media-object img-xl\" src=\"assets/img/portrait/small/avatar-s-6.png\" alt=\"Generic placeholder image\">\n                  </div>\n                </div>\n                <div class=\"blockquote-footer no-border-top pt-1\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n              <blockquote class=\"blockquote text-right border-left-info border-left-3 pl-2 no-border-right\">\n                <div class=\"media\">\n                  <div class=\"media-body pl-1\">\n                   داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.\n                  </div>\n                  <div class=\"media-right pl-2\">\n                    <img class=\"media-object img-xl\" src=\"assets/img/portrait/small/avatar-s-7.png\" alt=\"Generic placeholder image\">\n                  </div>\n                </div>\n                <div class=\"blockquote-footer no-border-top pt-1\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n              <p class=\"mt-2  text-left\">راست به ترتیب متن محتوا با مثال آواتار گرد تصویر</p>\n              <blockquote class=\"blockquote text-right border-right-success border-right-3 pr-2 mt-1\">\n                <div class=\"media\">\n                  <div class=\"media-body\">\n                    داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.\n                  </div>\n                  <div class=\"media-right pl-2\">\n                    <img class=\"media-object img-xl rounded-circle\" src=\"assets/img/portrait/small/avatar-s-8.png\" alt=\"Generic placeholder image\">\n                  </div>\n                </div>\n                <div class=\"blockquote-footer no-border-top pt-1\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n              <blockquote class=\"blockquote text-right border-left-success border-left-3 pl-2 no-border-right mt-1\">\n                <div class=\"media\">\n                  <div class=\"media-body pl-1\">\n                    داشتن ثروتمندترین مرد در گورستان به من مهم نیست. رفتن به رختخواب در شب گفت: ما چیزی شگفت انگیز ساخته ایم، این چیزی است که برای من اهمیت دارد.\n                  </div>\n                  <div class=\"media-right pl-2\">\n                    <img class=\"media-object img-xl rounded-circle\" src=\"assets/img/portrait/small/avatar-s-9.png\" alt=\"Generic placeholder image\">\n                  </div>\n                </div>\n                <div class=\"blockquote-footer no-border-top pt-1\">استیو جابز\n                  <cite title=\"Source Title\">کارآفرین</cite>\n                </div>\n              </blockquote>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/ Blockquotes styling -->\n\n<!-- Lists -->\n<section id=\"lists\">\n  <div class=\"row\">\n    <div class=\"col-sm-12  text-left\">\n      <div class=\"content-header\">لیست ها</div>\n      <p class=\"content-sub-header\">برای اشاره به بلوک های محتوا از منبع دیگری در سند خود. بسته بندی کردن <code\n          class=\"highlighter-rouge\">&lt;blockquote class=\"blockquote\"&gt;</code>در اطراف هر <abbr title=\"HyperText Markup Language\">HTML</abbr>\n          به عنوان نقل قول.</p>\n    </div>\n  </div>\n  <div class=\"row\" matchHeight=\"card\">\n    <!-- Lists Unstyled -->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">لیست های نامعتبر</h4>\n          <p>استفاده از کلاس<code>.list-unstyled</code> برای لیست ها نامعتبر پیش فرض را حذف کنید <code class=\"highlighter-rouge\">list-style</code>\n            و حاشیه سمت چپ در موارد لیست (فقط فرزندان فوری). <strong>این فقط در مورد موارد فوری کودکان لیست شده است\n\n            </strong>، به این معنی که شما باید کلاس را برای هر لیست توشیبا اضافه کنید.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text  text-left\">\n              <ul class=\"list-unstyled\">\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی \n                  <ul>\n                    <li>تولید سادگی نامفهوم</li>\n                    <li>تولید سادگی نامفهوم</li>\n                    <li>تولید سادگی نامفهوم</li>\n                    <li>تولید سادگی نامفهوم</li>\n                  </ul>\n                </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Lists Unstyled -->\n    <!-- Lists Unordered -->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">فهرست غیر ارادی <small class=\"text-muted\">پیش فرض</small></h4>\n          <p>لیستی از مواردی که در آن سفارش صریحا مهم نیست.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text  text-left\">\n              <ul>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                  <li>لورم ایپسوم متن ساختگی \n                    <ul>\n                      <li>تولید سادگی نامفهوم</li>\n                      <li>تولید سادگی نامفهوم</li>\n                      <li>تولید سادگی نامفهوم</li>\n                      <li>تولید سادگی نامفهوم</li>\n                    </ul>\n                  </li>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/ Lists Unordered -->\n    <!-- Lists Ordered -->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">فهرست مرتب شده است <small class=\"text-muted\">پیش فرض</small></h4>\n          <p>فهرستی از مواردی که در آن سفارش صریحا مهم است.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text  text-left\">\n              <ol>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                  <li>لورم ایپسوم متن ساختگی \n                    <ul>\n                      <li>تولید سادگی نامفهوم</li>\n                      <li>تولید سادگی نامفهوم</li>\n                      <li>تولید سادگی نامفهوم</li>\n                      <li>تولید سادگی نامفهوم</li>\n                    </ul>\n                  </li>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                  <li>لورم ایپسوم متن ساختگی </li>\n                  <li>لورم ایپسوم متن ساختگی </li>\n              </ol>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/ Lists Ordered -->\n  </div>\n  <div class=\"row\" matchHeight=\"card\">\n    <!-- Lists Unordered Circle -->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">فهرست غیر ارادی <small class=\"text-muted\">دایره</small></h4>\n          <p>استفاده از کلاس <code>.list-style-circle</code> در فهرست غیر ارادی برای اضافه کردن نقاط گلوله دایره.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text  text-left\">\n              <ul class=\"list-style-circle\">\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی \n                  <ul class=\"list-style-circle\">\n                    <li>لورم ایپسوم متن ساختگی </li>\n                    <li>لورم ایپسوم متن ساختگی </li>\n                  </ul>\n                </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/ Lists Unordered Circle -->\n    <!-- Lists Unordered Square -->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">فهرست غیر ارادی <small class=\"text-muted\">مربع</small></h4>\n          <p>استفاده از کلاس <code>.list-style-square</code>در فهرست غیر ارادی برای اضافه کردن نقاط گلوله مربعی.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text  text-left\">\n              <ul class=\"list-style-square\">\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی \n                  <ul class=\"list-style-square\">\n                    <li>لورم ایپسوم متن ساختگی </li>\n                    <li>لورم ایپسوم متن ساختگی </li>\n                  </ul>\n                </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/ Lists Unordered Square -->\n    <!-- Lists Ordered Mixed -->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">فهرست مرتب شده است<small class=\"text-muted\">مخلوط</small></h4>\n          <p>ترکیب کردن <code>.list-style-square</code> و <code>.list-style-circle</code> \n            کلاس ها در فهرست غیر ارادی برای اضافه کردن نقاط گلوله ای مربع و دایره ای.\n          </p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text  text-left\">\n              <ul class=\"list-style-circle\">\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی \n                  <ul class=\"list-style-square\">\n                    <li>لورم ایپسوم متن ساختگی </li>\n                    <li>لورم ایپسوم متن ساختگی </li>\n                  </ul>\n                </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/ Lists Ordered Mixed -->\n  </div>\n  <div class=\"row\" matchHeight=\"card\">\n    <!-- Lists Ordered Type-->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">فهرست مرتب شده است <small class=\"text-muted\">نوع</small></h4>\n          <p>استفاده از کلاس <code>&lt;ol type=\"1|a|A|i|I\"&gt;</code>\n            ، Attribute type مشخص کننده نوع نشانگر برای استفاده در لیست است.\n          </p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text  text-left\">\n              <ol type=\"I\">\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی \n                  <ol type=\"I\">\n                    <li>لورم ایپسوم متن ساختگی </li>\n                    <li>لورم ایپسوم متن ساختگی </li>\n                  </ol>\n                </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n              </ol>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Lists Ordered Type-->\n    <!-- Lists Ordered Mixed -->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header  text-left\">\n          <h4 class=\"card-title\">فهرست مرتب شده است <small class=\"text-muted\">مخلوط</small></h4>\n          <p>شما همچنین می توانید نوع لیست دستور را مخلوط کنید، در زیر مثال I & I ترکیب نوع را نشان می دهد.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text  text-left\">\n              <ol type=\"I\">\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی \n                  <ol type=\"i\">\n                    <li>لورم ایپسوم متن ساختگی </li>\n                    <li>لورم ایپسوم متن ساختگی </li>\n                  </ol>\n                </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n                <li>لورم ایپسوم متن ساختگی </li>\n              </ol>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/ Lists Ordered Mixed -->\n    <!-- Lists icons -->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header text-left\">\n          <h4 class=\"card-title\">لیست آیکون ها</h4>\n          <p>لیست اصطلاحات با آیکون ها، استفاده کنید<code>.list-style-icons</code>\n            کلاس شما می توانید از هر آیکون از انواع Apex Admin آیکون استفاده کنید.\n          </p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text text-left\">\n              <ul class=\"list-style-icons\">\n                <li><i class=\"fa fa-folder-open-o\"></i> لورم ایپسوم متن ساختگی </li>\n                <li><i class=\"fa fa-folder-open-open-o\"></i> لورم ایپسوم متن ساختگی \n                  <ul class=\"list-style-icons\">\n                    <li><i class=\"fa fa-folder-open-o\"></i>لورم ایپسوم متن ساختگی </li>\n                    <li><i class=\"fa fa-folder-open-o\"></i> لورم ایپسوم متن ساختگی </li>\n                  </ul>\n                </li>\n                <li><i class=\"fa fa-folder-open-o\"></i> لورم ایپسوم متن ساختگی </li>\n                <li><i class=\"fa fa-folder-open-o\"></i> لورم ایپسوم متن ساختگی </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/ Lists icons -->\n  </div>\n  <div class=\"row\" matchHeight=\"card\">\n    <!-- Inline Lists-->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header text-left\">\n          <h4 class=\"card-title\">لیست های درونی<small class=\"text-muted\">پیش فرض</small></h4>\n          <p>گلوله های لیست را حذف کنید و برخی نورها را اعمال کنید<code class=\"highlighter-rouge\">margin</code>\n            با ترکیبی از دو کلاس\n            <code class=\"highlighter-rouge\">.list-inline</code> و <code class=\"highlighter-rouge\">.list-inline-item</code>.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text text-left\">\n              <ul class=\"list-inline\">\n                <li class=\"list-inline-item\">کتاب</li>\n                <li class=\"list-inline-item\">کتاب</li>\n                <li class=\"list-inline-item\">کتاب</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Inline Lists-->\n\n    <!-- Inline Lists-->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header text-left\">\n          <h4 class=\"card-title\">لیست های درونی <small class=\"text-muted\">مرتب شده</small></h4>\n          <p>استفاده از اعداد درون خطی، الفبای و غیره ... برای لیست خط درونی.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text text-left\">\n              <ul class=\"list-inline\">\n                <li class=\"list-inline-item\">1. کتاب</li>\n                <li class=\"list-inline-item\">2. کتاب</li>\n                <li class=\"list-inline-item\">3. کتاب</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Inline Lists-->\n\n    <!-- Inline Lists-->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header text-left\">\n          <h4 class=\"card-title\">لیست های درونی <small class=\"text-muted\">با آیکون ها</small></h4>\n          <p>شما همچنین می توانید از آیکون مدیریت Apex در لیست های درونی استفاده کنید.</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text text-left\">\n              <ul class=\"list-inline\">\n                <li class=\"list-inline-item\"><i class=\"fa fa-eur\"></i> زمان</li>\n                <li class=\"list-inline-item\"><i class=\"fa fa-gbp\"></i> زمان</li>\n                <li class=\"list-inline-item\"><i class=\"fa fa-usd\"></i> زمان</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Inline Lists-->\n  </div>\n</section>\n<!--/ Lists -->\n\n<!-- Description list alignment -->\n<section id=\"description-list-alignment\">\n  <div class=\"row text-left\">\n    <div class=\"col-sm-12\">\n      <div class=\"content-header \">تراز لیست شرح</div>\n      <p class=\"content-sub-header\">\n          اصطلاحات و توصیف ها را با استفاده از کلاس های از پیش تعریف شده سیستم شبکه (یا مخلوط های معنایی) به صورت افقی با هم تراز کنید. برای شرایط طولانی تر،\n        <code class=\"highlighter-rouge\">.text-truncate</code> \n        کلاس برای کوتاه کردن متن با یک بیضوی.\n      </p>\n    </div>\n  </div>\n  <div class=\"row\" matchHeight=\"card\">\n    <!-- Description lists horizontal -->\n    <div class=\"col-md-12 col-lg-8\">\n      <div class=\"card\">\n        <div class=\"card-header text-left\">\n          <h4 class=\"card-title\">توضیح لیست <small class=\"text-muted\">افقی</small></h4>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text text-left\">\n              <dl class=\"row\">\n                <dt class=\"col-sm-3\">توضیح لیست</dt>\n                <dd class=\"col-sm-9\">فهرست توصیفی مناسب برای تعریف شرایط است.</dd>\n              </dl>\n              <dl class=\"row\">\n                <dt class=\"col-sm-3\">کارایی</dt>\n                <dd class=\"col-sm-9\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</dd>\n              </dl>\n              <dl class=\"row\">\n                <dd class=\"col-sm-9 ml-sm-auto text-right\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</dd>\n              </dl>\n              <dl class=\"row\">\n                <dt class=\"col-sm-3\">کتاب</dt>\n                <dd class=\"col-sm-9\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</dd>\n              </dl>\n              <dl class=\"row\">\n                <dt class=\"col-sm-3 text-truncate\">اصطلاح خرد شده کوتاه است</dt>\n                <dd class=\"col-sm-9\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</dd>\n              </dl>\n              <dl class=\"row\">\n                <dt class=\"col-sm-3\">روزنامه</dt>\n                <dd class=\"col-sm-9\">\n                  <dl class=\"row\">\n                    <dt class=\"col-sm-4\">کتاب</dt>\n                    <dd class=\"col-sm-8\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</dd>\n                  </dl>\n                </dd>\n              </dl>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/ Description lists horizontal-->\n\n    <!-- Description lists vertical-->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-header text-left\">\n          <h4 class=\"card-title\">توضیح لیست <small class=\"text-muted\">عمودی</small></h4>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text text-left\">\n              <dl>\n                <dt>توضیح لیست</dt>\n                <dd>فهرست توصیفی مناسب برای تعریف شرایط است.</dd>\n                <dt>کارایی</dt>\n                <dd>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم\n                </dd>\n                <dd>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</dd>\n                <dt>لورم ایپسوم</dt>\n                <dd>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</dd>\n              </dl>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/ Description lists vertical-->\n  </div>\n  <div class=\"row\">\n    <!-- Description lists horizontal -->\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header text-left\">\n          <h4 class=\"card-title\">توضیح لیست <small class=\"text-muted\">افقی</small></h4>\n          <p>لیست ها را با متن راست تراز در <code>&lt;dt&gt;</code> برچسب استفاده کنید <code>.text-right</code></p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"card-text text-left\">\n              <dl class=\"row\">\n                <dt class=\"col-sm-3 text-right\">توضیح لیست</dt>\n                <dd class=\"col-sm-9\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</dd>\n              </dl>\n              <dl class=\"row\">\n                <dt class=\"col-sm-3 text-right\">کارایی</dt>\n                <dd class=\"col-sm-9\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</dd>\n              </dl>\n              <dl class=\"row\">\n                <dd class=\"col-sm-9 ml-sm-auto text-right\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</dd>\n              </dl>\n              <dl class=\"row\">\n                <dt class=\"col-sm-3 text-right\">دروازه ویتنام</dt>\n                <dd class=\"col-sm-9\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</dd>\n              </dl>\n              <dl class=\"row\">\n                <dt class=\"col-sm-3 text-right text-truncate\">اصطلاح خرد شده کوتاه است</dt>\n                <dd class=\"col-sm-9\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</dd>\n              </dl>\n              <dl class=\"row\">\n                <dt class=\"col-sm-3 text-right\">کتاب</dt>\n                <dd class=\"col-sm-9\">\n                  <dl class=\"row\">\n                    <dt class=\"col-sm-4\">ليست تعريف مضر</dt>\n                    <dd class=\"col-sm-8\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</dd>\n                  </dl>\n                </dd>\n              </dl>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/ Description lists horizontal-->\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/app/shared/services/highlight.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/highlight.service.ts ***!
  \******************************************************/
/*! exports provided: HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-java */ "./node_modules/prismjs/components/prism-java.js");
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-sass */ "./node_modules/prismjs/components/prism-sass.js");
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/components/prism-scss */ "./node_modules/prismjs/components/prism-scss.js");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_12__);













var HighlightService = /** @class */ (function () {
    function HighlightService() {
    }
    HighlightService.prototype.highlightAll = function () {
        Prism.highlightAll();
    };
    HighlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HighlightService);
    return HighlightService;
}());



/***/ }),

/***/ "./src/app/ui-kit/grids/grids.component.scss":
/*!***************************************************!*\
  !*** ./src/app/ui-kit/grids/grids.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#equal-width .bd-example .row [class^=col-],\n#equal-width .bd-example .row .col,\n#setting-one-column-width .bd-example .row [class^=col-],\n#setting-one-column-width .bd-example .row .col,\n#variable-width-content .bd-example .row [class^=col-],\n#variable-width-content .bd-example .row .col,\n#equal-width-multi-row .bd-example .row [class^=col-],\n#equal-width-multi-row .bd-example .row .col,\n#all-breakpoints .bd-example .row [class^=col-],\n#all-breakpoints .bd-example .row .col,\n#stacked-to-horizontal .bd-example .row [class^=col-],\n#stacked-to-horizontal .bd-example .row .col,\n#alignment .bd-example .row [class^=col-],\n#alignment .bd-example .row .col,\n#vertical-alignment .bd-example .row [class^=col-],\n#vertical-alignment .bd-example .row .col,\n#horizontal-alignment .bd-example .row [class^=col-],\n#horizontal-alignment .bd-example .row .col,\n#column-wrapping .bd-example .row [class^=col-],\n#column-wrapping .bd-example .row .col,\n#column-breaks .bd-example .row [class^=col-],\n#column-breaks .bd-example .row .col,\n#reordering .bd-example .row [class^=col-],\n#reordering .bd-example .row .col,\n#offsetting-columns .bd-example .row [class^=col-],\n#offsetting-columns .bd-example .row .col,\n#margin-utilities .bd-example .row [class^=col-],\n#margin-utilities .bd-example .row .col,\n#nesting .bd-example .row [class^=col-],\n#nesting .bd-example .row .col {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  background-color: rgba(86, 61, 124, 0.15);\n  border: 1px solid rgba(86, 61, 124, 0.2);\n}\n#equal-width .bd-example .row + .row,\n#setting-one-column-width .bd-example .row + .row,\n#variable-width-content .bd-example .row + .row,\n#equal-width-multi-row .bd-example .row + .row,\n#all-breakpoints .bd-example .row + .row,\n#stacked-to-horizontal .bd-example .row + .row,\n#alignment .bd-example .row + .row,\n#vertical-alignment .bd-example .row + .row,\n#horizontal-alignment .bd-example .row + .row,\n#column-wrapping .bd-example .row + .row,\n#column-breaks .bd-example .row + .row,\n#reordering .bd-example .row + .row,\n#offsetting-columns .bd-example .row + .row,\n#margin-utilities .bd-example .row + .row,\n#nesting .bd-example .row + .row {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkta2l0L2dyaWRzL0M6XFxVc2Vyc1xcTWFzaWhcXERlc2t0b3BcXGZyb250XFxhcGV4X3J0bC9zcmNcXGFwcFxcdWkta2l0XFxncmlkc1xcZ3JpZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLWtpdC9ncmlkcy9ncmlkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUVFLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHdDQUFBO0FDU1I7QURMSTs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsZ0JBQUE7QUNxQk4iLCJmaWxlIjoic3JjL2FwcC91aS1raXQvZ3JpZHMvZ3JpZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCb290c3RyYXAgR3JpZHNcblxuI2VxdWFsLXdpZHRoLFxuI3NldHRpbmctb25lLWNvbHVtbi13aWR0aCxcbiN2YXJpYWJsZS13aWR0aC1jb250ZW50LFxuI2VxdWFsLXdpZHRoLW11bHRpLXJvdyxcbiNhbGwtYnJlYWtwb2ludHMsXG4jc3RhY2tlZC10by1ob3Jpem9udGFsLFxuI2FsaWdubWVudCxcbiN2ZXJ0aWNhbC1hbGlnbm1lbnQsXG4jaG9yaXpvbnRhbC1hbGlnbm1lbnQsXG4jY29sdW1uLXdyYXBwaW5nLFxuI2NvbHVtbi1icmVha3MsXG4jcmVvcmRlcmluZyxcbiNvZmZzZXR0aW5nLWNvbHVtbnMsXG4jbWFyZ2luLXV0aWxpdGllcyxcbiNuZXN0aW5nIHtcbiAgLmJkLWV4YW1wbGUge1xuICAgIC5yb3cge1xuXG4gICAgICBbY2xhc3NePVwiY29sLVwiXSxcbiAgICAgIC5jb2wge1xuICAgICAgICBwYWRkaW5nLXRvcDogLjc1cmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg2LCA2MSwgMTI0LCAuMTUpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDg2LCA2MSwgMTI0LCAuMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJvdysucm93IHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuICB9XG59XG4iLCIjZXF1YWwtd2lkdGggLmJkLWV4YW1wbGUgLnJvdyBbY2xhc3NePWNvbC1dLFxuI2VxdWFsLXdpZHRoIC5iZC1leGFtcGxlIC5yb3cgLmNvbCxcbiNzZXR0aW5nLW9uZS1jb2x1bW4td2lkdGggLmJkLWV4YW1wbGUgLnJvdyBbY2xhc3NePWNvbC1dLFxuI3NldHRpbmctb25lLWNvbHVtbi13aWR0aCAuYmQtZXhhbXBsZSAucm93IC5jb2wsXG4jdmFyaWFibGUtd2lkdGgtY29udGVudCAuYmQtZXhhbXBsZSAucm93IFtjbGFzc149Y29sLV0sXG4jdmFyaWFibGUtd2lkdGgtY29udGVudCAuYmQtZXhhbXBsZSAucm93IC5jb2wsXG4jZXF1YWwtd2lkdGgtbXVsdGktcm93IC5iZC1leGFtcGxlIC5yb3cgW2NsYXNzXj1jb2wtXSxcbiNlcXVhbC13aWR0aC1tdWx0aS1yb3cgLmJkLWV4YW1wbGUgLnJvdyAuY29sLFxuI2FsbC1icmVha3BvaW50cyAuYmQtZXhhbXBsZSAucm93IFtjbGFzc149Y29sLV0sXG4jYWxsLWJyZWFrcG9pbnRzIC5iZC1leGFtcGxlIC5yb3cgLmNvbCxcbiNzdGFja2VkLXRvLWhvcml6b250YWwgLmJkLWV4YW1wbGUgLnJvdyBbY2xhc3NePWNvbC1dLFxuI3N0YWNrZWQtdG8taG9yaXpvbnRhbCAuYmQtZXhhbXBsZSAucm93IC5jb2wsXG4jYWxpZ25tZW50IC5iZC1leGFtcGxlIC5yb3cgW2NsYXNzXj1jb2wtXSxcbiNhbGlnbm1lbnQgLmJkLWV4YW1wbGUgLnJvdyAuY29sLFxuI3ZlcnRpY2FsLWFsaWdubWVudCAuYmQtZXhhbXBsZSAucm93IFtjbGFzc149Y29sLV0sXG4jdmVydGljYWwtYWxpZ25tZW50IC5iZC1leGFtcGxlIC5yb3cgLmNvbCxcbiNob3Jpem9udGFsLWFsaWdubWVudCAuYmQtZXhhbXBsZSAucm93IFtjbGFzc149Y29sLV0sXG4jaG9yaXpvbnRhbC1hbGlnbm1lbnQgLmJkLWV4YW1wbGUgLnJvdyAuY29sLFxuI2NvbHVtbi13cmFwcGluZyAuYmQtZXhhbXBsZSAucm93IFtjbGFzc149Y29sLV0sXG4jY29sdW1uLXdyYXBwaW5nIC5iZC1leGFtcGxlIC5yb3cgLmNvbCxcbiNjb2x1bW4tYnJlYWtzIC5iZC1leGFtcGxlIC5yb3cgW2NsYXNzXj1jb2wtXSxcbiNjb2x1bW4tYnJlYWtzIC5iZC1leGFtcGxlIC5yb3cgLmNvbCxcbiNyZW9yZGVyaW5nIC5iZC1leGFtcGxlIC5yb3cgW2NsYXNzXj1jb2wtXSxcbiNyZW9yZGVyaW5nIC5iZC1leGFtcGxlIC5yb3cgLmNvbCxcbiNvZmZzZXR0aW5nLWNvbHVtbnMgLmJkLWV4YW1wbGUgLnJvdyBbY2xhc3NePWNvbC1dLFxuI29mZnNldHRpbmctY29sdW1ucyAuYmQtZXhhbXBsZSAucm93IC5jb2wsXG4jbWFyZ2luLXV0aWxpdGllcyAuYmQtZXhhbXBsZSAucm93IFtjbGFzc149Y29sLV0sXG4jbWFyZ2luLXV0aWxpdGllcyAuYmQtZXhhbXBsZSAucm93IC5jb2wsXG4jbmVzdGluZyAuYmQtZXhhbXBsZSAucm93IFtjbGFzc149Y29sLV0sXG4jbmVzdGluZyAuYmQtZXhhbXBsZSAucm93IC5jb2wge1xuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODYsIDYxLCAxMjQsIDAuMTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDg2LCA2MSwgMTI0LCAwLjIpO1xufVxuI2VxdWFsLXdpZHRoIC5iZC1leGFtcGxlIC5yb3cgKyAucm93LFxuI3NldHRpbmctb25lLWNvbHVtbi13aWR0aCAuYmQtZXhhbXBsZSAucm93ICsgLnJvdyxcbiN2YXJpYWJsZS13aWR0aC1jb250ZW50IC5iZC1leGFtcGxlIC5yb3cgKyAucm93LFxuI2VxdWFsLXdpZHRoLW11bHRpLXJvdyAuYmQtZXhhbXBsZSAucm93ICsgLnJvdyxcbiNhbGwtYnJlYWtwb2ludHMgLmJkLWV4YW1wbGUgLnJvdyArIC5yb3csXG4jc3RhY2tlZC10by1ob3Jpem9udGFsIC5iZC1leGFtcGxlIC5yb3cgKyAucm93LFxuI2FsaWdubWVudCAuYmQtZXhhbXBsZSAucm93ICsgLnJvdyxcbiN2ZXJ0aWNhbC1hbGlnbm1lbnQgLmJkLWV4YW1wbGUgLnJvdyArIC5yb3csXG4jaG9yaXpvbnRhbC1hbGlnbm1lbnQgLmJkLWV4YW1wbGUgLnJvdyArIC5yb3csXG4jY29sdW1uLXdyYXBwaW5nIC5iZC1leGFtcGxlIC5yb3cgKyAucm93LFxuI2NvbHVtbi1icmVha3MgLmJkLWV4YW1wbGUgLnJvdyArIC5yb3csXG4jcmVvcmRlcmluZyAuYmQtZXhhbXBsZSAucm93ICsgLnJvdyxcbiNvZmZzZXR0aW5nLWNvbHVtbnMgLmJkLWV4YW1wbGUgLnJvdyArIC5yb3csXG4jbWFyZ2luLXV0aWxpdGllcyAuYmQtZXhhbXBsZSAucm93ICsgLnJvdyxcbiNuZXN0aW5nIC5iZC1leGFtcGxlIC5yb3cgKyAucm93IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ui-kit/grids/grids.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui-kit/grids/grids.component.ts ***!
  \*************************************************/
/*! exports provided: GridsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsComponent", function() { return GridsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/highlight.service */ "./src/app/shared/services/highlight.service.ts");



var GridsComponent = /** @class */ (function () {
    function GridsComponent(highlightService) {
        this.highlightService = highlightService;
        this.highlighted = false;
    }
    GridsComponent.prototype.ngAfterViewChecked = function () {
        this.highlightService.highlightAll();
    };
    GridsComponent.ctorParameters = function () { return [
        { type: app_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"] }
    ]; };
    GridsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grids',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grids.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/grids/grids.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grids.component.scss */ "./src/app/ui-kit/grids/grids.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"]])
    ], GridsComponent);
    return GridsComponent;
}());



/***/ }),

/***/ "./src/app/ui-kit/helper-classes/helper-classes.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ui-kit/helper-classes/helper-classes.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWtpdC9oZWxwZXItY2xhc3Nlcy9oZWxwZXItY2xhc3Nlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ui-kit/helper-classes/helper-classes.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-kit/helper-classes/helper-classes.component.ts ***!
  \*******************************************************************/
/*! exports provided: HelperClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperClassesComponent", function() { return HelperClassesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelperClassesComponent = /** @class */ (function () {
    function HelperClassesComponent() {
    }
    HelperClassesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'helper-classes',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./helper-classes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/helper-classes/helper-classes.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./helper-classes.component.scss */ "./src/app/ui-kit/helper-classes/helper-classes.component.scss")).default]
        })
    ], HelperClassesComponent);
    return HelperClassesComponent;
}());



/***/ }),

/***/ "./src/app/ui-kit/icons/feather/feather.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/ui-kit/icons/feather/feather.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWtpdC9pY29ucy9mZWF0aGVyL2ZlYXRoZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui-kit/icons/feather/feather.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui-kit/icons/feather/feather.component.ts ***!
  \***********************************************************/
/*! exports provided: FeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatherComponent", function() { return FeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeatherComponent = /** @class */ (function () {
    function FeatherComponent() {
    }
    FeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feather',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feather.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/icons/feather/feather.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feather.component.scss */ "./src/app/ui-kit/icons/feather/feather.component.scss")).default]
        })
    ], FeatherComponent);
    return FeatherComponent;
}());



/***/ }),

/***/ "./src/app/ui-kit/icons/font-awesome/font-awesome.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-kit/icons/font-awesome/font-awesome.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWtpdC9pY29ucy9mb250LWF3ZXNvbWUvZm9udC1hd2Vzb21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ui-kit/icons/font-awesome/font-awesome.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-kit/icons/font-awesome/font-awesome.component.ts ***!
  \*********************************************************************/
/*! exports provided: FontAwesomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeComponent", function() { return FontAwesomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FontAwesomeComponent = /** @class */ (function () {
    function FontAwesomeComponent() {
    }
    FontAwesomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-font-awesome',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./font-awesome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/icons/font-awesome/font-awesome.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./font-awesome.component.scss */ "./src/app/ui-kit/icons/font-awesome/font-awesome.component.scss")).default]
        })
    ], FontAwesomeComponent);
    return FontAwesomeComponent;
}());



/***/ }),

/***/ "./src/app/ui-kit/icons/simple-line/simple-line.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ui-kit/icons/simple-line/simple-line.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWtpdC9pY29ucy9zaW1wbGUtbGluZS9zaW1wbGUtbGluZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ui-kit/icons/simple-line/simple-line.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-kit/icons/simple-line/simple-line.component.ts ***!
  \*******************************************************************/
/*! exports provided: SimpleLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLineComponent", function() { return SimpleLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SimpleLineComponent = /** @class */ (function () {
    function SimpleLineComponent() {
    }
    SimpleLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple-line',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simple-line.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/icons/simple-line/simple-line.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simple-line.component.scss */ "./src/app/ui-kit/icons/simple-line/simple-line.component.scss")).default]
        })
    ], SimpleLineComponent);
    return SimpleLineComponent;
}());



/***/ }),

/***/ "./src/app/ui-kit/syntax-highlighter/syntax-highlighter.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-kit/syntax-highlighter/syntax-highlighter.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWtpdC9zeW50YXgtaGlnaGxpZ2h0ZXIvc3ludGF4LWhpZ2hsaWdodGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ui-kit/syntax-highlighter/syntax-highlighter.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui-kit/syntax-highlighter/syntax-highlighter.component.ts ***!
  \***************************************************************************/
/*! exports provided: SyntaxHighlighterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyntaxHighlighterComponent", function() { return SyntaxHighlighterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/highlight.service */ "./src/app/shared/services/highlight.service.ts");



var SyntaxHighlighterComponent = /** @class */ (function () {
    function SyntaxHighlighterComponent(highlightService) {
        this.highlightService = highlightService;
        this.highlighted = false;
    }
    SyntaxHighlighterComponent.prototype.ngAfterViewChecked = function () {
        this.highlightService.highlightAll();
    };
    SyntaxHighlighterComponent.ctorParameters = function () { return [
        { type: app_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"] }
    ]; };
    SyntaxHighlighterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-syntax-highlighter',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./syntax-highlighter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/syntax-highlighter/syntax-highlighter.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./syntax-highlighter.component.scss */ "./src/app/ui-kit/syntax-highlighter/syntax-highlighter.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"]])
    ], SyntaxHighlighterComponent);
    return SyntaxHighlighterComponent;
}());



/***/ }),

/***/ "./src/app/ui-kit/text-utilities/text-utilities.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ui-kit/text-utilities/text-utilities.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWtpdC90ZXh0LXV0aWxpdGllcy90ZXh0LXV0aWxpdGllcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ui-kit/text-utilities/text-utilities.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-kit/text-utilities/text-utilities.component.ts ***!
  \*******************************************************************/
/*! exports provided: TextUtilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextUtilitiesComponent", function() { return TextUtilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/highlight.service */ "./src/app/shared/services/highlight.service.ts");



var TextUtilitiesComponent = /** @class */ (function () {
    function TextUtilitiesComponent(highlightService) {
        this.highlightService = highlightService;
        this.highlighted = false;
    }
    TextUtilitiesComponent.prototype.ngAfterViewChecked = function () {
        this.highlightService.highlightAll();
    };
    TextUtilitiesComponent.ctorParameters = function () { return [
        { type: app_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"] }
    ]; };
    TextUtilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-utilities',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text-utilities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/text-utilities/text-utilities.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text-utilities.component.scss */ "./src/app/ui-kit/text-utilities/text-utilities.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"]])
    ], TextUtilitiesComponent);
    return TextUtilitiesComponent;
}());



/***/ }),

/***/ "./src/app/ui-kit/typography/typography.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/ui-kit/typography/typography.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWtpdC90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui-kit/typography/typography.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui-kit/typography/typography.component.ts ***!
  \***********************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-kit/typography/typography.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./typography.component.scss */ "./src/app/ui-kit/typography/typography.component.scss")).default]
        })
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/ui-kit/ui-kit-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ui-kit/ui-kit-routing.module.ts ***!
  \*************************************************/
/*! exports provided: UIKitRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIKitRoutingModule", function() { return UIKitRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grids_grids_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grids/grids.component */ "./src/app/ui-kit/grids/grids.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/ui-kit/typography/typography.component.ts");
/* harmony import */ var _helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper-classes/helper-classes.component */ "./src/app/ui-kit/helper-classes/helper-classes.component.ts");
/* harmony import */ var _syntax_highlighter_syntax_highlighter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syntax-highlighter/syntax-highlighter.component */ "./src/app/ui-kit/syntax-highlighter/syntax-highlighter.component.ts");
/* harmony import */ var _text_utilities_text_utilities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-utilities/text-utilities.component */ "./src/app/ui-kit/text-utilities/text-utilities.component.ts");
/* harmony import */ var _icons_feather_feather_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/feather/feather.component */ "./src/app/ui-kit/icons/feather/feather.component.ts");
/* harmony import */ var _icons_font_awesome_font_awesome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/font-awesome/font-awesome.component */ "./src/app/ui-kit/icons/font-awesome/font-awesome.component.ts");
/* harmony import */ var _icons_simple_line_simple_line_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/simple-line/simple-line.component */ "./src/app/ui-kit/icons/simple-line/simple-line.component.ts");











var routes = [
    {
        path: '',
        children: [
            {
                path: 'grids',
                component: _grids_grids_component__WEBPACK_IMPORTED_MODULE_3__["GridsComponent"],
                data: {
                    title: 'Grids'
                }
            },
            {
                path: 'typography',
                component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__["TypographyComponent"],
                data: {
                    title: 'Typography'
                }
            },
            {
                path: 'textutilities',
                component: _text_utilities_text_utilities_component__WEBPACK_IMPORTED_MODULE_7__["TextUtilitiesComponent"],
                data: {
                    title: 'Text Utilities'
                }
            },
            {
                path: 'syntaxhighlighter',
                component: _syntax_highlighter_syntax_highlighter_component__WEBPACK_IMPORTED_MODULE_6__["SyntaxHighlighterComponent"],
                data: {
                    title: 'Syntax Highlighter'
                }
            },
            {
                path: 'helperclasses',
                component: _helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_5__["HelperClassesComponent"],
                data: {
                    title: 'Helper Classes'
                }
            },
            {
                path: 'feather',
                component: _icons_feather_feather_component__WEBPACK_IMPORTED_MODULE_8__["FeatherComponent"],
                data: {
                    title: 'Feather Icons'
                }
            },
            {
                path: 'font-awesome',
                component: _icons_font_awesome_font_awesome_component__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeComponent"],
                data: {
                    title: 'Font Awesome'
                }
            },
            {
                path: 'simple-line',
                component: _icons_simple_line_simple_line_component__WEBPACK_IMPORTED_MODULE_10__["SimpleLineComponent"],
                data: {
                    title: 'Simple Line'
                }
            },
        ]
    }
];
var UIKitRoutingModule = /** @class */ (function () {
    function UIKitRoutingModule() {
    }
    UIKitRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UIKitRoutingModule);
    return UIKitRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-kit/ui-kit.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ui-kit/ui-kit.module.ts ***!
  \*****************************************/
/*! exports provided: UIKitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIKitModule", function() { return UIKitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ui_kit_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-kit-routing.module */ "./src/app/ui-kit/ui-kit-routing.module.ts");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _grids_grids_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grids/grids.component */ "./src/app/ui-kit/grids/grids.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/ui-kit/typography/typography.component.ts");
/* harmony import */ var _helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper-classes/helper-classes.component */ "./src/app/ui-kit/helper-classes/helper-classes.component.ts");
/* harmony import */ var _syntax_highlighter_syntax_highlighter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./syntax-highlighter/syntax-highlighter.component */ "./src/app/ui-kit/syntax-highlighter/syntax-highlighter.component.ts");
/* harmony import */ var _text_utilities_text_utilities_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./text-utilities/text-utilities.component */ "./src/app/ui-kit/text-utilities/text-utilities.component.ts");
/* harmony import */ var _icons_feather_feather_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/feather/feather.component */ "./src/app/ui-kit/icons/feather/feather.component.ts");
/* harmony import */ var _icons_font_awesome_font_awesome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/font-awesome/font-awesome.component */ "./src/app/ui-kit/icons/font-awesome/font-awesome.component.ts");
/* harmony import */ var _icons_simple_line_simple_line_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/simple-line/simple-line.component */ "./src/app/ui-kit/icons/simple-line/simple-line.component.ts");














;
var UIKitModule = /** @class */ (function () {
    function UIKitModule() {
    }
    UIKitModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ui_kit_routing_module__WEBPACK_IMPORTED_MODULE_4__["UIKitRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_5__["MatchHeightModule"]
            ],
            declarations: [
                _grids_grids_component__WEBPACK_IMPORTED_MODULE_6__["GridsComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__["TypographyComponent"],
                _helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_8__["HelperClassesComponent"],
                _syntax_highlighter_syntax_highlighter_component__WEBPACK_IMPORTED_MODULE_9__["SyntaxHighlighterComponent"],
                _text_utilities_text_utilities_component__WEBPACK_IMPORTED_MODULE_10__["TextUtilitiesComponent"],
                _icons_feather_feather_component__WEBPACK_IMPORTED_MODULE_11__["FeatherComponent"],
                _icons_font_awesome_font_awesome_component__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeComponent"],
                _icons_simple_line_simple_line_component__WEBPACK_IMPORTED_MODULE_13__["SimpleLineComponent"]
            ]
        })
    ], UIKitModule);
    return UIKitModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-kit-ui-kit-module.js.map