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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EMPTY_OBJ", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NO_OP", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createComponentVNode", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createRenderer", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createVNode", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "directClone", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getFlagsForElementVnode", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getNumberStyleValue", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "linkEvent", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "normalizeProps", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "options", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "version", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JSX", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["c"]; });


if (process.env.NODE_ENV !== 'production') {
  console.warn('You are running production build of Inferno in development mode. Use dev:module entry point.');
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return BrowserRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return MemoryRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return Prompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return StaticRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return matchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return withRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_clone_vnode__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path_to_regexp_es6__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path_to_regexp_es6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path_to_regexp_es6__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hoist_non_inferno_statics__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hoist_non_inferno_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hoist_non_inferno_statics__);






/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        { t[p] = s[p]; } }
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        { for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) { if (e.indexOf(p[i]) < 0)
            { t[p[i]] = s[p[i]]; } } }
    return t;
}

var isBrowser = !!(typeof window !== 'undefined' && window.document);
var isArray = Array.isArray;
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isNull(o) {
    return o === null;
}
function isUndefined(o) {
    return o === void 0;
}
function isObject(o) {
    return typeof o === 'object';
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}

function warning$1(condition, message) {
    if (!condition) {
        // tslint:disable-next-line:no-console
        console.error(message);
    }
}
function isValidElement(obj) {
    var isNotANullObject = isObject(obj) && isNull(obj) === false;
    if (!isNotANullObject) {
        return false;
    }
    var flags = obj.flags;
    return (flags & (14 /* Component */ | 481 /* Element */)) > 0;
}
function invariant(condition, format, a, b, c, d, e, f) {
    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        }
        else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function () {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
}
var ARR = [];
var Children = {
    forEach: function forEach(children, fn) {
        if (isNullOrUndef(children)) {
            return;
        }
        children = Children.toArray(children);
        for (var i = 0, len = children.length; i < len; i++) {
            fn(children[i], i, children);
        }
    },
    count: function count(children) {
        return Children.toArray(children).length;
    },
    only: function only(children) {
        children = Children.toArray(children);
        if (children.length !== 1) {
            throw new Error('Children.only() expects only one child.');
        }
        return children[0];
    },
    toArray: function toArray(children) {
        return isNullOrUndef(children) ? [] : isArray(children) ? children : ARR.concat(children);
    }
};

/**
 * The public API for putting history on context.
 */
var Router = (function (Component$$1) {
    function Router(props, context) {
        Component$$1.call(this, props, context);
        this.state = {
            match: this.computeMatch(props.history.location.pathname)
        };
    }

    if ( Component$$1 ) Router.__proto__ = Component$$1;
    Router.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Router.prototype.constructor = Router;
    Router.prototype.getChildContext = function getChildContext () {
        return {
            router: Object.assign({}, this.context.router, { history: this.props.history, route: {
                    location: this.props.history.location,
                    match: this.state.match
                } })
        };
    };
    Router.prototype.computeMatch = function computeMatch (pathname) {
        return {
            isExact: pathname === '/',
            params: {},
            path: '/',
            url: '/'
        };
    };
    Router.prototype.componentWillMount = function componentWillMount () {
        var this$1 = this;

        var ref = this.props;
        var children = ref.children;
        var history = ref.history;
        invariant(children == null || Children.count(children) === 1, 'A <Router> may have only one child element');
        // Do this here so we can setState when a <Redirect> changes the
        // location in componentWillMount. This happens e.g. when doing
        // server rendering using a <StaticRouter>.
        this.unlisten = history.listen(function () {
            this$1.setState({
                match: this$1.computeMatch(history.location.pathname)
            });
        });
    };
    Router.prototype.componentWillUnmount = function componentWillUnmount () {
        this.unlisten();
    };
    Router.prototype.render = function render (props, state, context) {
        return props.children ? Object(__WEBPACK_IMPORTED_MODULE_1_inferno_clone_vnode__["a" /* cloneVNode */])(props.children) : null;
    };

    return Router;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]));

function addLeadingSlash(path) {
    return path.charAt(0) === '/' ? path : '/' + path;
}
// tslint:disable-next-line:no-empty
var noop = function () { };
var StaticRouter = (function (Component$$1) {
    function StaticRouter() {
        var this$1 = this;

        Component$$1.apply(this, arguments);
        this.createHref = function (path) { return addLeadingSlash(this$1.props.basename + createURL(path)); };
        this.handlePush = function (location) {
            var ref = this$1.props;
            var basename = ref.basename;
            var context = ref.context;
            context.action = 'PUSH';
            context.location = addBasename(basename, createLocation$1(location));
            context.url = createURL(context.location);
        };
        this.handleReplace = function (location) {
            var ref = this$1.props;
            var basename = ref.basename;
            var context = ref.context;
            context.action = 'REPLACE';
            context.location = addBasename(basename, createLocation$1(location));
            context.url = createURL(context.location);
        };
        // tslint:disable-next-line:no-empty
        this.handleListen = function () { return noop; };
        // tslint:disable-next-line:no-empty
        this.handleBlock = function () { return noop; };
    }

    if ( Component$$1 ) StaticRouter.__proto__ = Component$$1;
    StaticRouter.prototype = Object.create( Component$$1 && Component$$1.prototype );
    StaticRouter.prototype.constructor = StaticRouter;
    StaticRouter.prototype.getChildContext = function getChildContext () {
        return {
            router: {
                staticContext: this.props.context
            }
        };
    };
    StaticRouter.prototype.render = function render () {
        var _a = this.props;
        var basename = _a.basename;
        var context = _a.context;
        var location = _a.location;
        var props = __rest(_a, ["basename", "context", "location"]);
        var history = {
            action: 'POP',
            block: this.handleBlock,
            createHref: this.createHref,
            go: staticHandler('go'),
            goBack: staticHandler('goBack'),
            goForward: staticHandler('goForward'),
            listen: this.handleListen,
            location: stripBasename(basename, createLocation$1(location)),
            push: this.handlePush,
            replace: this.handleReplace
        };
        return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(4 /* ComponentClass */, Router, Object.assign({}, props, { history: history })); // TODO: check these props types!
    };

    return StaticRouter;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]));
StaticRouter.defaultProps = {
    basename: '',
    location: '/'
};
function normalizeLocation(ref) {
    var pathname = ref.pathname; if ( pathname === void 0 ) pathname = '/';
    var search = ref.search;
    var hash = ref.hash;

    return {
        hash: (hash || '') === '#' ? '' : hash,
        pathname: pathname,
        search: (search || '') === '?' ? '' : search
    };
}
function addBasename(basename, location) {
    if (!basename) {
        return location;
    }
    return Object.assign({}, location, { pathname: addLeadingSlash(basename) + location.pathname });
}
function stripBasename(basename, location) {
    if (!basename) {
        return location;
    }
    var base = addLeadingSlash(basename);
    if (location.pathname.indexOf(base) !== 0) {
        return location;
    }
    return Object.assign({}, location, { pathname: location.pathname.substr(base.length) });
}
function createLocation$1(location) {
    return typeof location === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_2_history__["g" /* parsePath */])(location) : normalizeLocation(location);
}
function createURL(location) {
    return typeof location === 'string' ? location : Object(__WEBPACK_IMPORTED_MODULE_2_history__["e" /* createPath */])(location);
}
function staticHandler(methodName) {
    return function () {
        invariant(false, 'You cannot %s with <StaticRouter>', methodName);
    };
}

var BrowserRouter = (function (Component$$1) {
    function BrowserRouter(props, context) {
        Component$$1.call(this, props, context);
        this.history = Object(__WEBPACK_IMPORTED_MODULE_2_history__["a" /* createBrowserHistory */])(props);
    }

    if ( Component$$1 ) BrowserRouter.__proto__ = Component$$1;
    BrowserRouter.prototype = Object.create( Component$$1 && Component$$1.prototype );
    BrowserRouter.prototype.constructor = BrowserRouter;
    BrowserRouter.prototype.render = function render () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(4 /* ComponentClass */, Router, {
            children: this.props.children,
            history: this.history
        });
    };

    return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]));

var HashRouter = (function (Component$$1) {
    function HashRouter(props, context) {
        Component$$1.call(this, props, context);
        this.history = Object(__WEBPACK_IMPORTED_MODULE_2_history__["b" /* createHashHistory */])(props);
    }

    if ( Component$$1 ) HashRouter.__proto__ = Component$$1;
    HashRouter.prototype = Object.create( Component$$1 && Component$$1.prototype );
    HashRouter.prototype.constructor = HashRouter;
    HashRouter.prototype.render = function render () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(4 /* ComponentClass */, Router, {
            children: this.props.children,
            history: this.history
        });
    };

    return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]));

var MemoryRouter = (function (Component$$1) {
    function MemoryRouter(props, context) {
        Component$$1.call(this, props, context);
        this.history = Object(__WEBPACK_IMPORTED_MODULE_2_history__["d" /* createMemoryHistory */])(props);
    }

    if ( Component$$1 ) MemoryRouter.__proto__ = Component$$1;
    MemoryRouter.prototype = Object.create( Component$$1 && Component$$1.prototype );
    MemoryRouter.prototype.constructor = MemoryRouter;
    MemoryRouter.prototype.render = function render () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(4 /* ComponentClass */, Router, {
            children: this.props.children,
            history: this.history
        });
    };

    return MemoryRouter;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]));

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;
var compilePath = function (pattern, options) {
    var cacheKey = "" + (options.end) + (options.strict) + (options.sensitive);
    var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
    if (cache[pattern]) {
        return cache[pattern];
    }
    var keys = [];
    var re = __WEBPACK_IMPORTED_MODULE_3_path_to_regexp_es6___default()(pattern, keys, options);
    var compiledPattern = { re: re, keys: keys };
    if (cacheCount < cacheLimit) {
        cache[pattern] = compiledPattern;
        cacheCount++;
    }
    return compiledPattern;
};
/**
 * Public API for matching a URL pathname to a path pattern.
 */
function matchPath(pathname, options) {
    if (typeof options === 'string') {
        options = { path: options };
    }
    var path = options.path; if ( path === void 0 ) path = '/';
    var exact = options.exact; if ( exact === void 0 ) exact = false;
    var strict = options.strict; if ( strict === void 0 ) strict = false;
    var sensitive = options.sensitive; if ( sensitive === void 0 ) sensitive = false;
    var ref = compilePath(path, { end: exact, strict: strict, sensitive: sensitive });
    var re = ref.re;
    var keys = ref.keys;
    var match = re.exec(pathname);
    if (!match) {
        return null;
    }
    var url = match[0];
    var values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) {
        return null;
    }
    return {
        isExact: isExact,
        params: keys.reduce(function (memo, key, index) {
            memo[key.name] = values[index];
            return memo;
        }, {}),
        path: path,
        url: path === '/' && url === '' ? '/' : url // the matched portion of the URL
    };
}

var isEmptyChildren = function (children) { return Children.count(children) === 0; };
/**
 * The public API for matching a single path and rendering.
 */
var Route = (function (Component$$1) {
    function Route(props, context) {
        Component$$1.call(this, props, context);
        this.state = {
            match: this.computeMatch(props, context.router)
        };
    }

    if ( Component$$1 ) Route.__proto__ = Component$$1;
    Route.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Route.prototype.constructor = Route;
    Route.prototype.getChildContext = function getChildContext () {
        return {
            router: Object.assign({}, this.context.router, { route: {
                    location: this.props.location || this.context.router.route.location,
                    match: this.state.match
                } })
        };
    };

    Route.prototype.computeMatch = function computeMatch (ref, router) {
        var computedMatch = ref.computedMatch;
        var location = ref.location;
        var path = ref.path;
        var strict = ref.strict;
        var exact = ref.exact;
        var sensitive = ref.sensitive;

        if (computedMatch) {
            // <Switch> already computed the match for us
            return computedMatch;
        }
        invariant(router, 'You should not use <Route> or withRouter() outside a <Router>');
        var route = router.route;
        var pathname = (location || route.location).pathname;
        return path ? matchPath(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
    };
    Route.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps, nextContext) {
        this.setState({
            match: this.computeMatch(nextProps, nextContext.router)
        });
    };
    Route.prototype.render = function render () {
        var ref = this.state;
        var match = ref.match;
        var ref$1 = this.props;
        var children = ref$1.children;
        var component = ref$1.component;
        var render = ref$1.render;
        var ref$2 = this.context.router;
        var history = ref$2.history;
        var route = ref$2.route;
        var staticContext = ref$2.staticContext;
        var location = this.props.location || route.location;
        var props = { match: match, location: location, history: history, staticContext: staticContext };
        if (component) {
            return match ? Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2 /* ComponentUnknown */, component, props) : null;
        }
        if (render) {
            return match ? render(props, this.context) : null;
        }
        if (typeof children === 'function') {
            return children(props);
        }
        if (children && !isEmptyChildren(children)) {
            return Children.only(children);
        }
        return null;
    };

    return Route;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]));

/**
 * The public API for rendering the first <Route> that matches.
 */
var Switch = (function (Component$$1) {
    function Switch () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Switch.__proto__ = Component$$1;
    Switch.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Switch.prototype.constructor = Switch;

    Switch.prototype.componentWillMount = function componentWillMount () {
        invariant(this.context.router, 'You should not use <Switch> outside a <Router>');
    };
    Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps) {
        warning$1(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');
        warning$1(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
    };
    Switch.prototype.render = function render () {
        var ref = this.context.router;
        var route = ref.route;
        var ref$1 = this.props;
        var children = ref$1.children;
        var location = this.props.location || route.location;
        var match;
        var child;
        // optimization: Better to use for loop here so we can return when match found, instead looping through everything
        Children.forEach(children, function (element) {
            if (!isValidElement(element)) {
                return;
            }
            var ref = element.props;
            var pathProp = ref.path;
            var exact = ref.exact;
            var strict = ref.strict;
            var sensitive = ref.sensitive;
            var from = ref.from;
            var path = pathProp || from;
            if (match == null) {
                child = element;
                match = path ? matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
            }
        });
        return match ? Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(child.flags, child.type, combineFrom(child.props, { location: location, computedMatch: match }), null, child.ref) : null;
    };

    return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]));

var isModifiedEvent = function (event) { return Boolean(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey); };
function handleClick(ref, event) {
    var props = ref.props;
    var context = ref.context;

    if (props.onClick) {
        props.onClick(event);
    }
    if (!event.defaultPrevented && // onClick prevented default
        event.button === 0 && // ignore everything but left clicks
        !props.target && // let browser handle "target=_blank" etc.
        !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
        event.preventDefault();
        var ref$1 = context.router;
        var history = ref$1.history;
        var replace = props.replace; if ( replace === void 0 ) replace = false;
        var to = props.to;
        if (replace) {
            history.replace(to);
        }
        else {
            history.push(to);
        }
    }
}
/**
 * The public API for rendering a history-aware <a>.
 */
function Link(props, context) {
    var replace = props.replace;
    var children = props.children;
    var className = props.className;
    var to = props.to; if ( to === void 0 ) to = '';
    var innerRef = props.innerRef;
    var rest = __rest(props, ["replace", "children", "className", "to", "innerRef"]);
    invariant(context.router, 'You should not use <Link> outside a <Router>');
    var href = context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);
    return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["c" /* createVNode */])(1 /* HtmlElement */, 'a', className, children, 0 /* UnknownChildren */, Object.assign({}, rest, { href: href, onClick: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["d" /* linkEvent */])({
            context: context,
            props: props
        }, handleClick) }), null, innerRef ? function (x) { return innerRef(x); } : null);
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
function NavLink(_a) {
    var to = _a.to;
    var exact = _a.exact;
    var strict = _a.strict;
    var onClick = _a.onClick;
    var linkLocation = _a.location;
    var activeClassName = _a.activeClassName; if ( activeClassName === void 0 ) activeClassName = 'active';
    var className = _a.className;
    var activeStyle = _a.activeStyle;
    var style = _a.style;
    var getIsActive = _a.isActive;
    var ariaCurrent = _a.ariaCurrent; if ( ariaCurrent === void 0 ) ariaCurrent = 'true';
    var rest = __rest(_a, ["to", "exact", "strict", "onClick", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "ariaCurrent"]);
    function linkComponent(ref) {
        var location = ref.location;
        var match = ref.match;

        var isActive = !!(getIsActive ? getIsActive(match, location) : match);
        return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(8 /* ComponentFunction */, Link, Object.assign({ 'aria-current': isActive && ariaCurrent, className: isActive ? [className, activeClassName].filter(function (i) { return i; }).join(' ') : className, onClick: onClick, style: isActive ? combineFrom(style, activeStyle) : style, to: to }, rest));
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(4 /* ComponentClass */, Route, {
        children: linkComponent,
        exact: exact,
        location: linkLocation,
        path: typeof to === 'object' ? to.pathname : to,
        strict: strict
    });
}

/**
 * The public API for matching a single path and rendering.
 */
var Prompt = (function (Component$$1) {
    function Prompt () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Prompt.__proto__ = Component$$1;
    Prompt.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Prompt.prototype.constructor = Prompt;

    Prompt.prototype.enable = function enable (message) {
        if (this.unblock) {
            this.unblock();
        }
        this.unblock = this.context.router.history.block(message);
    };
    Prompt.prototype.disable = function disable () {
        if (this.unblock) {
            this.unblock();
            this.unblock = null;
        }
    };
    Prompt.prototype.componentWillMount = function componentWillMount () {
        invariant(this.context.router, 'You should not use <Prompt> outside a <Router>');
        if (this.props.when) {
            this.enable(this.props.message);
        }
    };
    Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps) {
        if (nextProps.when) {
            if (!this.props.when || this.props.message !== nextProps.message) {
                this.enable(nextProps.message);
            }
        }
        else {
            this.disable();
        }
    };
    Prompt.prototype.componentWillUnmount = function componentWillUnmount () {
        this.disable();
    };
    Prompt.prototype.render = function render () {
        return null;
    };

    return Prompt;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]));

var Redirect = (function (Component$$1) {
    function Redirect () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Redirect.__proto__ = Component$$1;
    Redirect.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Redirect.prototype.constructor = Redirect;

    Redirect.prototype.isStatic = function isStatic () {
        return this.context.router && this.context.router.staticContext;
    };
    Redirect.prototype.componentWillMount = function componentWillMount () {
        invariant(this.context.router, 'You should not use <Redirect> outside a <Router>');
        if (this.isStatic()) {
            this.perform();
        }
    };
    Redirect.prototype.componentDidMount = function componentDidMount () {
        if (!this.isStatic()) {
            this.perform();
        }
    };
    Redirect.prototype.componentDidUpdate = function componentDidUpdate (prevProps) {
        var prevTo = Object(__WEBPACK_IMPORTED_MODULE_2_history__["c" /* createLocation */])(prevProps.to);
        var nextTo = Object(__WEBPACK_IMPORTED_MODULE_2_history__["c" /* createLocation */])(this.props.to);
        if (Object(__WEBPACK_IMPORTED_MODULE_2_history__["f" /* locationsAreEqual */])(prevTo, nextTo)) {
            // tslint:disable-next-line:no-console
            console.error(("You tried to redirect to the same route you're currently on: \"" + (nextTo.pathname) + (nextTo.search) + "\""));
            return;
        }
        this.perform();
    };
    Redirect.prototype.perform = function perform () {
        var ref = this.context.router;
        var history = ref.history;
        var ref$1 = this.props;
        var push = ref$1.push; if ( push === void 0 ) push = false;
        var to = ref$1.to;
        if (push) {
            history.push(to);
        }
        else {
            history.replace(to);
        }
    };
    Redirect.prototype.render = function render () {
        return null;
    };

    return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]));

/**
 * A public higher-order component to access the imperative API
 */
function withRouter(Com) {
    var C = function (props) {
        var wrappedComponentRef = props.wrappedComponentRef;
        var remainingProps = __rest(props, ["wrappedComponentRef"]);
        return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(4 /* ComponentClass */, Route, {
            render: function render(routeComponentProps) {
                return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2 /* ComponentUnknown */, Com, combineFrom(remainingProps, routeComponentProps), null, wrappedComponentRef);
            }
        });
    };
    C.displayName = "withRouter(" + (Com.displayName || Com.name) + ")";
    C.WrappedComponent = Com;
    return __WEBPACK_IMPORTED_MODULE_4_hoist_non_inferno_statics___default()(C, Com);
}




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsAreEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resolve_pathname__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_value_equal__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PathUtils__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = Object(__WEBPACK_IMPORTED_MODULE_2__PathUtils__["d" /* parsePath */])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(__WEBPACK_IMPORTED_MODULE_0_resolve_pathname__["a" /* default */])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(__WEBPACK_IMPORTED_MODULE_1_value_equal__["a" /* default */])(a.state, b.state);
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["a"] = (createTransitionManager);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoRouter = __webpack_require__(1);

var _NavbarTop = __webpack_require__(24);

var _NavbarTop2 = _interopRequireDefault(_NavbarTop);

var _Home = __webpack_require__(25);

var _Home2 = _interopRequireDefault(_Home);

var _Loading = __webpack_require__(31);

var _Loading2 = _interopRequireDefault(_Loading);

var _Season = __webpack_require__(32);

var _Season2 = _interopRequireDefault(_Season);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			lastXhr: null,
			loading: true,
			players: [],
			playerMap: {},
			ongoing: [],
			matches: [],
			db: null
		};

		_this.update = _this.update.bind(_this);
		_this.onDB = _this.onDB.bind(_this);
		_this.getPlayerById = _this.getPlayerById.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			setTimeout(function () {
				var xhr = new XMLHttpRequest();
				xhr.open('GET', './res/db/elo.db', true);
				xhr.responseType = 'arraybuffer';
				xhr.onload = _this2.onDB;
				_this2.state.lastXhr = xhr;
				xhr.send();
			}, 100);
		}
	}, {
		key: 'update',
		value: function update() {
			var _this3 = this;

			window.requestAnimationFrame(function () {
				return _this3.forceUpdate();
			});
		}
	}, {
		key: 'onDB',
		value: function onDB(e) {
			var dbpath = new Uint8Array(this.state.lastXhr.response);
			var db = new SQL.Database(dbpath);

			var query = db.prepare("SELECT ID,name,elo,win,loss FROM players ORDER BY elo desc");
			while (query.step()) {
				var obj = query.getAsObject();
				this.state.playerMap[obj.ID] = obj;
				obj.matches = [];
				if (obj.win > 0 || obj.loss > 0) {
					this.state.players.push(obj);
				}
			}

			query = db.prepare("SELECT ID,p1,p2,p3,p4,s1,s2,p5,p6,p7,p8 FROM games WHERE ID >= 0 ORDER BY ID desc;");
			while (query.step()) {
				var _obj = query.getAsObject();
				if (_obj.s1 == null || _obj.s2 == null) {
					this.state.ongoing.push(_obj);
				} else {
					this.state.matches.push(_obj);
				}
			}

			this.setState({
				loading: false,
				db: db
			});
		}
	}, {
		key: 'getPlayerById',
		value: function getPlayerById(id) {
			return this.state.playerMap[id];
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var loading = this.state.loading ? (0, _inferno.createComponentVNode)(2, _Loading2.default) : null;
			return (0, _inferno.createComponentVNode)(2, _infernoRouter.HashRouter, {
				children: (0, _inferno.createVNode)(1, 'div', null, [(0, _inferno.createVNode)(1, 'div', null, [(0, _inferno.createVNode)(1, 'div', 'left-cntr'), (0, _inferno.createVNode)(1, 'div', 'right-cntr')], 4, {
					'id': 'background-cntr'
				}), (0, _inferno.createComponentVNode)(2, _NavbarTop2.default, {
					'update': this.update
				}), (0, _inferno.createVNode)(1, 'div', null, (0, _inferno.createComponentVNode)(2, _infernoRouter.Switch, {
					children: [(0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
						'exact': true,
						'path': '/',
						'render': function render() {
							return (0, _inferno.createComponentVNode)(2, _Home2.default, {
								'getPlayerById': _this4.getPlayerById,
								'players': _this4.state.players,
								'matches': _this4.state.matches,
								'ongoing': _this4.state.ongoing,
								'db': _this4.state.db
							});
						}
					}), (0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
						'path': '/season-1',
						'render': function render() {
							return (0, _inferno.createComponentVNode)(2, _Season2.default, {
								'season': 1
							});
						}
					})]
				}), 2, {
					'id': 'main-cntr'
				}), loading], 0, {
					'id': 'inferno-root'
				})
			});
		}
	}]);

	return App;
}(_inferno.Component);

exports.default = App;


document.addEventListener("DOMContentLoaded", function () {
	(0, _inferno.render)((0, _inferno.createComponentVNode)(2, App), document.getElementById('root'));
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMPTY_OBJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NO_OP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createComponentVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createTextVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return createVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return directClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getFlagsForElementVnode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getNumberStyleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return linkEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return normalizeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JSX; });
var NO_OP = '$NO_OP';
var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== 'undefined' && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === 'string' || type === 'number';
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction(o) {
    return typeof o === 'function';
}
function isString(o) {
    return typeof o === 'string';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isNull(o) {
    return o === null;
}
function isTrue(o) {
    return o === true;
}
function isUndefined(o) {
    return o === void 0;
}
function isObject(o) {
    return typeof o === 'object';
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}

var keyPrefix = '$';
function getVNode(childFlags, children, className, flags, key, props, ref, type) {
    return {
        childFlags: childFlags,
        children: children,
        className: className,
        dom: null,
        flags: flags,
        key: key === void 0 ? null : key,
        parentVNode: null,
        props: props === void 0 ? null : props,
        ref: ref === void 0 ? null : ref,
        type: type
    };
}
function createVNode(flags, type, className, children, childFlags, props, key, ref) {
    var childFlag = childFlags === void 0 ? 1 /* HasInvalidChildren */ : childFlags;
    var vNode = getVNode(childFlag, children, className, flags, key, props, ref, type);
    var optsVNode = options.createVNode;
    if (typeof optsVNode === 'function') {
        optsVNode(vNode);
    }
    if (childFlag === 0 /* UnknownChildren */) {
        normalizeChildren(vNode, vNode.children);
    }
    return vNode;
}
function createComponentVNode(flags, type, props, key, ref) {
    if ((flags & 2 /* ComponentUnknown */) > 0) {
        flags = type.prototype && isFunction(type.prototype.render) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
    }
    // set default props
    var defaultProps = type.defaultProps;
    if (!isNullOrUndef(defaultProps)) {
        if (!props) {
            props = {}; // Props can be referenced and modified at application level so always create new object
        }
        for (var prop in defaultProps) {
            if (isUndefined(props[prop])) {
                props[prop] = defaultProps[prop];
            }
        }
    }
    if ((flags & 8 /* ComponentFunction */) > 0) {
        var defaultHooks = type.defaultHooks;
        if (!isNullOrUndef(defaultHooks)) {
            if (!ref) {
                // As ref cannot be referenced from application level, we can use the same refs object
                ref = defaultHooks;
            }
            else {
                for (var prop$1 in defaultHooks) {
                    if (isUndefined(ref[prop$1])) {
                        ref[prop$1] = defaultHooks[prop$1];
                    }
                }
            }
        }
    }
    var vNode = getVNode(1 /* HasInvalidChildren */, null, null, flags, key, props, ref, type);
    var optsVNode = options.createVNode;
    if (isFunction(optsVNode)) {
        optsVNode(vNode);
    }
    return vNode;
}
function createTextVNode(text, key) {
    return getVNode(1 /* HasInvalidChildren */, isNullOrUndef(text) ? '' : text, null, 16 /* Text */, key, null, null, null);
}
function normalizeProps(vNode) {
    var props = vNode.props;
    if (props) {
        var flags = vNode.flags;
        if (flags & 481 /* Element */) {
            if (props.children !== void 0 && isNullOrUndef(vNode.children)) {
                normalizeChildren(vNode, props.children);
            }
            if (props.className !== void 0) {
                vNode.className = props.className || null;
                props.className = undefined;
            }
        }
        if (props.key !== void 0) {
            vNode.key = props.key;
            props.key = undefined;
        }
        if (props.ref !== void 0) {
            if (flags & 8 /* ComponentFunction */) {
                vNode.ref = combineFrom(vNode.ref, props.ref);
            }
            else {
                vNode.ref = props.ref;
            }
            props.ref = undefined;
        }
    }
    return vNode;
}
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 14 /* Component */) {
        var props;
        var propsToClone = vNodeToClone.props;
        if (!isNull(propsToClone)) {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createComponentVNode(flags, vNodeToClone.type, props, vNodeToClone.key, vNodeToClone.ref);
    }
    else if (flags & 481 /* Element */) {
        newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, vNodeToClone.children, vNodeToClone.childFlags, vNodeToClone.props, vNodeToClone.key, vNodeToClone.ref);
    }
    else if (flags & 16 /* Text */) {
        newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
    }
    else if (flags & 1024 /* Portal */) {
        newVNode = vNodeToClone;
    }
    return newVNode;
}
function createVoidVNode() {
    return createTextVNode('', null);
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        if (!isInvalid(n)) {
            var newKey = currentKey + keyPrefix + index;
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, newKey);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, newKey);
                }
                else {
                    var oldKey = n.key;
                    var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;
                    if (!isNull(n.dom) || isPrefixedKey) {
                        n = directClone(n);
                    }
                    if (isNull(oldKey) || isPrefixedKey) {
                        n.key = newKey;
                    }
                    else {
                        n.key = currentKey + oldKey;
                    }
                }
                result.push(n);
            }
        }
    }
}
function getFlagsForElementVnode(type) {
    if (type === 'svg') {
        return 32 /* SvgElement */;
    }
    if (type === 'input') {
        return 64 /* InputElement */;
    }
    if (type === 'select') {
        return 256 /* SelectElement */;
    }
    if (type === 'textarea') {
        return 128 /* TextareaElement */;
    }
    return 1 /* HtmlElement */;
}
function normalizeChildren(vNode, children) {
    var newChildren;
    var newChildFlags = 1 /* HasInvalidChildren */;
    // Don't change children to match strict equal (===) true in patching
    if (isInvalid(children)) {
        newChildren = children;
    }
    else if (isString(children)) {
        newChildFlags = 2 /* HasVNodeChildren */;
        newChildren = createTextVNode(children);
    }
    else if (isNumber(children)) {
        newChildFlags = 2 /* HasVNodeChildren */;
        newChildren = createTextVNode(children + '');
    }
    else if (isArray(children)) {
        var len = children.length;
        if (len === 0) {
            newChildren = null;
            newChildFlags = 1 /* HasInvalidChildren */;
        }
        else {
            // we assign $ which basically means we've flagged this array for future note
            // if it comes back again, we need to clone it, as people are using it
            // in an immutable way
            // tslint:disable-next-line
            if (Object.isFrozen(children) || children['$'] === true) {
                children = children.slice();
            }
            newChildFlags = 8 /* HasKeyedChildren */;
            for (var i = 0; i < len; i++) {
                var n = children[i];
                if (isInvalid(n) || isArray(n)) {
                    newChildren = newChildren || children.slice(0, i);
                    _normalizeVNodes(children, newChildren, i, '');
                    break;
                }
                else if (isStringOrNumber(n)) {
                    newChildren = newChildren || children.slice(0, i);
                    newChildren.push(createTextVNode(n, keyPrefix + i));
                }
                else {
                    var key = n.key;
                    var isNullDom = isNull(n.dom);
                    var isNullKey = isNull(key);
                    var isPrefixed = !isNullKey && key[0] === keyPrefix;
                    if (!isNullDom || isNullKey || isPrefixed) {
                        newChildren = newChildren || children.slice(0, i);
                        if (!isNullDom || isPrefixed) {
                            n = directClone(n);
                        }
                        if (isNullKey || isPrefixed) {
                            n.key = keyPrefix + i;
                        }
                        newChildren.push(n);
                    }
                    else if (newChildren) {
                        newChildren.push(n);
                    }
                }
            }
            newChildren = newChildren || children;
            newChildren.$ = true;
        }
    }
    else {
        newChildren = children;
        if (!isNull(children.dom)) {
            newChildren = directClone(children);
        }
        newChildFlags = 2 /* HasVNodeChildren */;
    }
    vNode.children = newChildren;
    vNode.childFlags = newChildFlags;
    return vNode;
}
var options = {
    afterRender: null,
    beforeRender: null,
    createVNode: null,
    renderComplete: null
};

/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    if (isFunction(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}

var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var svgNS = 'http://www.w3.org/2000/svg';
var namespaces = {
    'xlink:actuate': xlinkNS,
    'xlink:arcrole': xlinkNS,
    'xlink:href': xlinkNS,
    'xlink:role': xlinkNS,
    'xlink:show': xlinkNS,
    'xlink:title': xlinkNS,
    'xlink:type': xlinkNS,
    'xml:base': xmlNS,
    'xml:lang': xmlNS,
    'xml:space': xmlNS
};

// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
var LIFECYCLE = [];
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if (isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    }
    else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(svgNS, tag);
    }
    return document.createElement(tag);
}
function replaceChild(parentDom, newDom, lastDom) {
    parentDom.replaceChild(newDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function callAll(arrayFn) {
    var listener;
    while ((listener = arrayFn.shift()) !== undefined) {
        listener();
    }
}

var attachedEventCounts = {};
var attachedEvents = {};
function handleEvent(name, nextEvent, dom) {
    var eventsLeft = attachedEventCounts[name];
    var eventsObject = dom.$EV;
    if (nextEvent) {
        if (!eventsLeft) {
            attachedEvents[name] = attachEventToDocument(name);
            attachedEventCounts[name] = 0;
        }
        if (!eventsObject) {
            eventsObject = dom.$EV = {};
        }
        if (!eventsObject[name]) {
            attachedEventCounts[name]++;
        }
        eventsObject[name] = nextEvent;
    }
    else if (eventsObject && eventsObject[name]) {
        attachedEventCounts[name]--;
        if (eventsLeft === 1) {
            document.removeEventListener(normalizeEventName(name), attachedEvents[name]);
            attachedEvents[name] = null;
        }
        eventsObject[name] = nextEvent;
    }
}
function dispatchEvents(event, target, isClick, name, eventData) {
    var dom = target;
    while (!isNull(dom)) {
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (isClick && dom.disabled) {
            return;
        }
        var eventsObject = dom.$EV;
        if (eventsObject) {
            var currentEvent = eventsObject[name];
            if (currentEvent) {
                // linkEvent object
                eventData.dom = dom;
                if (currentEvent.event) {
                    currentEvent.event(currentEvent.data, event);
                }
                else {
                    currentEvent(event);
                }
                if (event.cancelBubble) {
                    return;
                }
            }
        }
        dom = dom.parentNode;
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function stopPropagation() {
    this.cancelBubble = true;
    if (!this.immediatePropagationStopped) {
        this.stopImmediatePropagation();
    }
}
function attachEventToDocument(name) {
    var docEvent = function (event) {
        var type = event.type;
        var isClick = type === 'click' || type === 'dblclick';
        if (isClick && event.button !== 0) {
            // Firefox incorrectly triggers click event for mid/right mouse buttons.
            // This bug has been active for 12 years.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=184051
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        event.stopPropagation = stopPropagation;
        // Event data needs to be object to save reference to currentTarget getter
        var eventData = {
            dom: document
        };
        Object.defineProperty(event, 'currentTarget', {
            configurable: true,
            get: function get() {
                return eventData.dom;
            }
        });
        dispatchEvents(event, event.target, isClick, name, eventData);
        return;
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}

function isSameInnerHTML(dom, innerHTML) {
    var tempdom = document.createElement('i');
    tempdom.innerHTML = innerHTML;
    return tempdom.innerHTML === dom.innerHTML;
}
function isSamePropsInnerHTML(dom, props) {
    return Boolean(props && props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html && isSameInnerHTML(dom, props.dangerouslySetInnerHTML.__html));
}

function triggerEventListener(props, methodName, e) {
    if (props[methodName]) {
        var listener = props[methodName];
        if (listener.event) {
            listener.event(listener.data, e);
        }
        else {
            listener(e);
        }
    }
    else {
        var nativeListenerName = methodName.toLowerCase();
        if (props[nativeListenerName]) {
            props[nativeListenerName](e);
        }
    }
}
function createWrappedFunction(methodName, applyValue) {
    var fnMethod = function (e) {
        e.stopPropagation();
        var vNode = this.$V;
        // If vNode is gone by the time event fires, no-op
        if (!vNode) {
            return;
        }
        var props = vNode.props || EMPTY_OBJ;
        var dom = vNode.dom;
        if (isString(methodName)) {
            triggerEventListener(props, methodName, e);
        }
        else {
            for (var i = 0; i < methodName.length; i++) {
                triggerEventListener(props, methodName[i], e);
            }
        }
        if (isFunction(applyValue)) {
            var newVNode = this.$V;
            var newProps = newVNode.props || EMPTY_OBJ;
            applyValue(newProps, dom, false, newVNode);
        }
    };
    Object.defineProperty(fnMethod, 'wrapped', {
        configurable: false,
        enumerable: false,
        value: true,
        writable: false
    });
    return fnMethod;
}

function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
var onTextInputChange = createWrappedFunction('onInput', applyValueInput);
var wrappedOnChange = createWrappedFunction(['onClick', 'onChange'], applyValueInput);
/* tslint:disable-next-line:no-empty */
function emptywrapper(event) {
    event.stopPropagation();
}
emptywrapper.wrapped = true;
function inputEvents(dom, nextPropsOrEmpty) {
    if (isCheckedType(nextPropsOrEmpty.type)) {
        dom.onchange = wrappedOnChange;
        dom.onclick = emptywrapper;
    }
    else {
        dom.oninput = onTextInputChange;
    }
}
function applyValueInput(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute('type', type);
    }
    if (!isNullOrUndef(multiple) && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
        else if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === 'optgroup') {
        var children = vNode.children;
        var childFlags = vNode.childFlags;
        if (childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            updateChildOption(children, value);
        }
    }
    else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((isArray(value) && value.indexOf(props.value) !== -1) || props.value === value) {
        dom.selected = true;
    }
    else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
var onSelectChange = createWrappedFunction('onChange', applyValueSelect);
function selectEvents(dom) {
    dom.onchange = onSelectChange;
}
function applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode) {
    var multiplePropInBoolean = Boolean(nextPropsOrEmpty.multiple);
    if (!isNullOrUndef(nextPropsOrEmpty.multiple) && multiplePropInBoolean !== dom.multiple) {
        dom.multiple = multiplePropInBoolean;
    }
    var childFlags = vNode.childFlags;
    if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
        var children = vNode.children;
        var value = nextPropsOrEmpty.value;
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            updateChildOptionGroup(children, value);
        }
    }
}

var onTextareaInputChange = createWrappedFunction('onInput', applyValueTextArea);
var wrappedOnChange$1 = createWrappedFunction('onChange');
function textAreaEvents(dom, nextPropsOrEmpty) {
    dom.oninput = onTextareaInputChange;
    if (nextPropsOrEmpty.onChange) {
        dom.onchange = wrappedOnChange$1;
    }
}
function applyValueTextArea(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!isNullOrUndef(defaultValue) && defaultValue !== domValue) {
                dom.defaultValue = defaultValue;
                dom.value = defaultValue;
            }
        }
    }
    else if (domValue !== value) {
        /* There is value so keep it controlled */
        dom.defaultValue = value;
        dom.value = value;
    }
}

/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 64 /* InputElement */) {
        applyValueInput(nextPropsOrEmpty, dom);
    }
    else if (flags & 256 /* SelectElement */) {
        applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);
    }
    else if (flags & 128 /* TextareaElement */) {
        applyValueTextArea(nextPropsOrEmpty, dom, mounting);
    }
    if (isControlled) {
        dom.$V = vNode;
    }
}
function addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {
    if (flags & 64 /* InputElement */) {
        inputEvents(dom, nextPropsOrEmpty);
    }
    else if (flags & 256 /* SelectElement */) {
        selectEvents(dom);
    }
    else if (flags & 128 /* TextareaElement */) {
        textAreaEvents(dom, nextPropsOrEmpty);
    }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

function remove(vNode, parentDom) {
    unmount(vNode);
    if (!isNull(parentDom)) {
        removeChild(parentDom, vNode.dom);
        // Let carbage collector free memory
        vNode.dom = null;
    }
}
function unmount(vNode) {
    var flags = vNode.flags;
    if (flags & 481 /* Element */) {
        var ref = vNode.ref;
        var props = vNode.props;
        if (isFunction(ref)) {
            ref(null);
        }
        var children = vNode.children;
        var childFlags = vNode.childFlags;
        if (childFlags & 12 /* MultipleChildren */) {
            unmountAllChildren(children);
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            unmount(children);
        }
        if (!isNull(props)) {
            for (var name in props) {
                switch (name) {
                    case 'onClick':
                    case 'onDblClick':
                    case 'onFocusIn':
                    case 'onFocusOut':
                    case 'onKeyDown':
                    case 'onKeyPress':
                    case 'onKeyUp':
                    case 'onMouseDown':
                    case 'onMouseMove':
                    case 'onMouseUp':
                    case 'onSubmit':
                    case 'onTouchEnd':
                    case 'onTouchMove':
                    case 'onTouchStart':
                        handleEvent(name, null, vNode.dom);
                        break;
                    default:
                        break;
                }
            }
        }
    }
    else if (flags & 14 /* Component */) {
        var instance = vNode.children;
        var ref$1 = vNode.ref;
        if (flags & 4 /* ComponentClass */) {
            if (isFunction(instance.componentWillUnmount)) {
                instance.componentWillUnmount();
            }
            if (isFunction(ref$1)) {
                ref$1(null);
            }
            instance.$UN = true;
            unmount(instance.$LI);
        }
        else {
            if (!isNullOrUndef(ref$1) && isFunction(ref$1.onComponentWillUnmount)) {
                ref$1.onComponentWillUnmount(vNode.dom, vNode.props || EMPTY_OBJ);
            }
            unmount(instance);
        }
    }
    else if (flags & 1024 /* Portal */) {
        var children$1 = vNode.children;
        if (!isNull(children$1) && isObject(children$1)) {
            remove(children$1, vNode.type);
        }
    }
}
function unmountAllChildren(children) {
    for (var i = 0, len = children.length; i < len; i++) {
        unmount(children[i]);
    }
}
function removeAllChildren(dom, children) {
    unmountAllChildren(children);
    dom.textContent = '';
}

function createLinkEvent(linkEvent, nextValue) {
    return function (e) {
        linkEvent(nextValue.data, e);
    };
}
function patchEvent(name, lastValue, nextValue, dom) {
    var nameLowerCase = name.toLowerCase();
    if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
        var linkEvent = nextValue.event;
        if (linkEvent && isFunction(linkEvent)) {
            dom[nameLowerCase] = createLinkEvent(linkEvent, nextValue);
        }
    }
    else {
        var domEvent = dom[nameLowerCase];
        // if the function is wrapped, that means it's been controlled by a wrapper
        if (!domEvent || !domEvent.wrapped) {
            dom[nameLowerCase] = nextValue;
        }
    }
}
function getNumberStyleValue(style, value) {
    switch (style) {
        case 'animationIterationCount':
        case 'borderImageOutset':
        case 'borderImageSlice':
        case 'borderImageWidth':
        case 'boxFlex':
        case 'boxFlexGroup':
        case 'boxOrdinalGroup':
        case 'columnCount':
        case 'fillOpacity':
        case 'flex':
        case 'flexGrow':
        case 'flexNegative':
        case 'flexOrder':
        case 'flexPositive':
        case 'flexShrink':
        case 'floodOpacity':
        case 'fontWeight':
        case 'gridColumn':
        case 'gridRow':
        case 'lineClamp':
        case 'lineHeight':
        case 'opacity':
        case 'order':
        case 'orphans':
        case 'stopOpacity':
        case 'strokeDasharray':
        case 'strokeDashoffset':
        case 'strokeMiterlimit':
        case 'strokeOpacity':
        case 'strokeWidth':
        case 'tabSize':
        case 'widows':
        case 'zIndex':
        case 'zoom':
            return value;
        default:
            return value + 'px';
    }
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    var domStyle = dom.style;
    var style;
    var value;
    if (isString(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
        for (style in nextAttrValue) {
            // do not add a hasOwnProperty check here, it affects performance
            value = nextAttrValue[style];
            if (value !== lastAttrValue[style]) {
                domStyle[style] = isNumber(value) ? getNumberStyleValue(style, value) : value;
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = '';
            }
        }
    }
    else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle[style] = isNumber(value) ? getNumberStyleValue(style, value) : value;
        }
    }
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode) {
    switch (prop) {
        case 'onClick':
        case 'onDblClick':
        case 'onFocusIn':
        case 'onFocusOut':
        case 'onKeyDown':
        case 'onKeyPress':
        case 'onKeyUp':
        case 'onMouseDown':
        case 'onMouseMove':
        case 'onMouseUp':
        case 'onSubmit':
        case 'onTouchEnd':
        case 'onTouchMove':
        case 'onTouchStart':
            handleEvent(prop, nextValue, dom);
            break;
        case 'children':
        case 'childrenType':
        case 'className':
        case 'defaultValue':
        case 'key':
        case 'multiple':
        case 'ref':
            break;
        case 'autoFocus':
            dom.autofocus = !!nextValue;
            break;
        case 'allowfullscreen':
        case 'autoplay':
        case 'capture':
        case 'checked':
        case 'controls':
        case 'default':
        case 'disabled':
        case 'hidden':
        case 'indeterminate':
        case 'loop':
        case 'muted':
        case 'novalidate':
        case 'open':
        case 'readOnly':
        case 'required':
        case 'reversed':
        case 'scoped':
        case 'seamless':
        case 'selected':
            dom[prop] = !!nextValue;
            break;
        case 'defaultChecked':
        case 'value':
        case 'volume':
            if (hasControlledValue && prop === 'value') {
                return;
            }
            var value = isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
            break;
        case 'dangerouslySetInnerHTML':
            var lastHtml = (lastValue && lastValue.__html) || '';
            var nextHtml = (nextValue && nextValue.__html) || '';
            if (lastHtml !== nextHtml) {
                if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
                    if (!isNull(lastVNode)) {
                        if (lastVNode.childFlags & 12 /* MultipleChildren */) {
                            unmountAllChildren(lastVNode.children);
                        }
                        else if (lastVNode.childFlags === 2 /* HasVNodeChildren */) {
                            unmount(lastVNode.children);
                        }
                        lastVNode.children = null;
                        lastVNode.childFlags = 1 /* HasInvalidChildren */;
                    }
                    dom.innerHTML = nextHtml;
                }
            }
            break;
        default:
            if (prop[0] === 'o' && prop[1] === 'n') {
                patchEvent(prop, lastValue, nextValue, dom);
            }
            else if (isNullOrUndef(nextValue)) {
                dom.removeAttribute(prop);
            }
            else if (prop === 'style') {
                patchStyle(lastValue, nextValue, dom);
            }
            else if (isSVG && namespaces[prop]) {
                // We optimize for isSVG being false
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces[prop], prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
            break;
    }
}
function mountProps(vNode, flags, props, dom, isSVG) {
    var hasControlledValue = false;
    var isFormElement = (flags & 448 /* FormElement */) > 0;
    if (isFormElement) {
        hasControlledValue = isControlledFormElement(props);
        if (hasControlledValue) {
            addFormElementEventHandlers(flags, dom, props);
        }
    }
    for (var prop in props) {
        // do not add a hasOwnProperty check here, it affects performance
        patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue, null);
    }
    if (isFormElement) {
        processElement(flags, vNode, dom, props, true, hasControlledValue);
    }
}

function createClassComponentInstance(vNode, Component, props, context) {
    var instance = new Component(props, context);
    vNode.children = instance;
    instance.$V = vNode;
    instance.$BS = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    instance.$UN = false;
    if (isFunction(instance.componentWillMount)) {
        instance.$BR = true;
        instance.componentWillMount();
        if (instance.$PSS) {
            var state = instance.state;
            var pending = instance.$PS;
            if (isNull(state)) {
                instance.state = pending;
            }
            else {
                for (var key in pending) {
                    state[key] = pending[key];
                }
            }
            instance.$PSS = false;
            instance.$PS = null;
        }
        instance.$BR = false;
    }
    if (isFunction(options.beforeRender)) {
        options.beforeRender(instance);
    }
    var input = handleComponentInput(instance.render(props, instance.state, context), vNode);
    var childContext;
    if (isFunction(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (isNullOrUndef(childContext)) {
        instance.$CX = context;
    }
    else {
        instance.$CX = combineFrom(context, childContext);
    }
    if (isFunction(options.afterRender)) {
        options.afterRender(instance);
    }
    instance.$LI = input;
    return instance;
}
function handleComponentInput(input, componentVNode) {
    if (isInvalid(input)) {
        input = createVoidVNode();
    }
    else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 14 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = componentVNode;
        }
    }
    return input;
}

function mount(vNode, parentDom, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 481 /* Element */) {
        return mountElement(vNode, parentDom, context, isSVG);
    }
    if (flags & 14 /* Component */) {
        return mountComponent(vNode, parentDom, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    if (flags & 512 /* Void */ || flags & 16 /* Text */) {
        return mountText(vNode, parentDom);
    }
    if (flags & 1024 /* Portal */) {
        mount(vNode.children, vNode.type, context, false);
        return (vNode.dom = mountText(createVoidVNode(), parentDom));
    }
}
function mountText(vNode, parentDom) {
    var dom = (vNode.dom = document.createTextNode(vNode.children));
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, context, isSVG) {
    var flags = vNode.flags;
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    var childFlags = vNode.childFlags;
    isSVG = isSVG || (flags & 32 /* SvgElement */) > 0;
    var dom = documentCreateElement(vNode.type, isSVG);
    vNode.dom = dom;
    if (!isNullOrUndef(className) && className !== '') {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
        var childrenIsSVG = isSVG === true && vNode.type !== 'foreignObject';
        if (childFlags === 2 /* HasVNodeChildren */) {
            mount(children, dom, context, childrenIsSVG);
        }
        else if (childFlags & 12 /* MultipleChildren */) {
            mountArrayChildren(children, dom, context, childrenIsSVG);
        }
    }
    if (!isNull(props)) {
        mountProps(vNode, flags, props, dom, isSVG);
    }
    if (isFunction(ref)) {
        mountRef(dom, ref);
    }
    return dom;
}
function mountArrayChildren(children, dom, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!isNull(child.dom)) {
            children[i] = child = directClone(child);
        }
        mount(child, dom, context, isSVG);
    }
}
function mountComponent(vNode, parentDom, context, isSVG, isClass) {
    var dom;
    var type = vNode.type;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context);
        vNode.dom = dom = mount(instance.$LI, null, instance.$CX, isSVG);
        mountClassComponentCallbacks(vNode, ref, instance);
        instance.$UPD = false;
    }
    else {
        var input = handleComponentInput(type(props, context), vNode);
        vNode.children = input;
        vNode.dom = dom = mount(input, null, context, isSVG);
        mountFunctionalComponentCallbacks(props, ref, dom);
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function createClassMountCallback(instance) {
    return function () {
        instance.$UPD = true;
        instance.componentDidMount();
        instance.$UPD = false;
    };
}
function mountClassComponentCallbacks(vNode, ref, instance) {
    if (isFunction(ref)) {
        ref(instance);
    }
    if (isFunction(instance.componentDidMount)) {
        LIFECYCLE.push(createClassMountCallback(instance));
    }
}
function createOnMountCallback(ref, dom, props) {
    return function () { return ref.onComponentDidMount(dom, props); };
}
function mountFunctionalComponentCallbacks(props, ref, dom) {
    if (!isNullOrUndef(ref)) {
        if (isFunction(ref.onComponentWillMount)) {
            ref.onComponentWillMount(props);
        }
        if (isFunction(ref.onComponentDidMount)) {
            LIFECYCLE.push(createOnMountCallback(ref, dom, props));
        }
    }
}
function mountRef(dom, value) {
    LIFECYCLE.push(function () { return value(dom); });
}

function hydrateComponent(vNode, dom, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    var props = vNode.props || EMPTY_OBJ;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context);
        var input = instance.$LI;
        hydrateVNode(input, dom, instance.$CX, isSVG);
        vNode.dom = input.dom;
        mountClassComponentCallbacks(vNode, ref, instance);
        instance.$UPD = false; // Mount finished allow going sync
    }
    else {
        var input$1 = handleComponentInput(type(props, context), vNode);
        hydrateVNode(input$1, dom, context, isSVG);
        vNode.children = input$1;
        vNode.dom = input$1.dom;
        mountFunctionalComponentCallbacks(props, ref, dom);
    }
}
function hydrateElement(vNode, dom, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 32 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        var newDom = mountElement(vNode, null, context, isSVG);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
    }
    else {
        vNode.dom = dom;
        var childNode = dom.firstChild;
        var childFlags = vNode.childFlags;
        if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
            var nextSibling = null;
            while (childNode) {
                nextSibling = childNode.nextSibling;
                if (childNode.nodeType === 8) {
                    if (childNode.data === '!') {
                        dom.replaceChild(document.createTextNode(''), childNode);
                    }
                    else {
                        dom.removeChild(childNode);
                    }
                }
                childNode = nextSibling;
            }
            childNode = dom.firstChild;
            if (childFlags === 2 /* HasVNodeChildren */) {
                if (isNull(childNode)) {
                    mount(children, dom, context, isSVG);
                }
                else {
                    nextSibling = childNode.nextSibling;
                    hydrateVNode(children, childNode, context, isSVG);
                    childNode = nextSibling;
                }
            }
            else if (childFlags & 12 /* MultipleChildren */) {
                for (var i = 0, len = children.length; i < len; i++) {
                    var child = children[i];
                    if (isNull(childNode)) {
                        mount(child, dom, context, isSVG);
                    }
                    else {
                        nextSibling = childNode.nextSibling;
                        hydrateVNode(child, childNode, context, isSVG);
                        childNode = nextSibling;
                    }
                }
            }
            // clear any other DOM nodes, there should be only a single entry for the root
            while (childNode) {
                nextSibling = childNode.nextSibling;
                dom.removeChild(childNode);
                childNode = nextSibling;
            }
        }
        else if (!isNull(dom.firstChild) && !isSamePropsInnerHTML(dom, props)) {
            dom.textContent = ''; // dom has content, but VNode has no children remove everything from DOM
            if (flags & 448 /* FormElement */) {
                // If element is form element, we need to clear defaultValue also
                dom.defaultValue = '';
            }
        }
        if (!isNull(props)) {
            mountProps(vNode, flags, props, dom, isSVG);
        }
        if (isNullOrUndef(className)) {
            if (dom.className !== '') {
                dom.removeAttribute('class');
            }
        }
        else if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
        if (isFunction(ref)) {
            mountRef(dom, ref);
        }
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mountText(vNode, null);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
    }
    else {
        var text = vNode.children;
        if (dom.nodeValue !== text) {
            dom.nodeValue = text;
        }
        vNode.dom = dom;
    }
}
function hydrateVNode(vNode, dom, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 14 /* Component */) {
        hydrateComponent(vNode, dom, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 481 /* Element */) {
        hydrateElement(vNode, dom, context, isSVG);
    }
    else if (flags & 16 /* Text */) {
        hydrateText(vNode, dom);
    }
    else if (flags & 512 /* Void */) {
        vNode.dom = dom;
    }
    else {
        throwError();
    }
}
function hydrate(input, parentDom, callback) {
    var dom = parentDom.firstChild;
    if (!isNull(dom)) {
        if (!isInvalid(input)) {
            hydrateVNode(input, dom, EMPTY_OBJ, false);
        }
        dom = parentDom.firstChild;
        // clear any other DOM nodes, there should be only a single entry for the root
        while ((dom = dom.nextSibling)) {
            parentDom.removeChild(dom);
        }
    }
    if (LIFECYCLE.length > 0) {
        callAll(LIFECYCLE);
    }
    parentDom.$V = input;
    if (isFunction(callback)) {
        callback();
    }
}

function replaceWithNewNode(lastNode, nextNode, parentDom, context, isSVG) {
    unmount(lastNode);
    replaceChild(parentDom, mount(nextNode, null, context, isSVG), lastNode.dom);
}
function patch(lastVNode, nextVNode, parentDom, context, isSVG) {
    if (lastVNode !== nextVNode) {
        var nextFlags = nextVNode.flags | 0;
        if (lastVNode.flags !== nextFlags || nextFlags & 2048 /* ReCreate */) {
            replaceWithNewNode(lastVNode, nextVNode, parentDom, context, isSVG);
        }
        else if (nextFlags & 481 /* Element */) {
            patchElement(lastVNode, nextVNode, parentDom, context, isSVG);
        }
        else if (nextFlags & 14 /* Component */) {
            patchComponent(lastVNode, nextVNode, parentDom, context, isSVG, (nextFlags & 4 /* ComponentClass */) > 0);
        }
        else if (nextFlags & 16 /* Text */) {
            patchText(lastVNode, nextVNode, parentDom);
        }
        else if (nextFlags & 512 /* Void */) {
            nextVNode.dom = lastVNode.dom;
        }
        else {
            // Portal
            patchPortal(lastVNode, nextVNode, context);
        }
    }
}
function patchPortal(lastVNode, nextVNode, context) {
    var lastContainer = lastVNode.type;
    var nextContainer = nextVNode.type;
    var nextChildren = nextVNode.children;
    patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, context, false);
    nextVNode.dom = lastVNode.dom;
    if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {
        var node = nextChildren.dom;
        lastContainer.removeChild(node);
        nextContainer.appendChild(node);
    }
}
function patchElement(lastVNode, nextVNode, parentDom, context, isSVG) {
    var nextTag = nextVNode.type;
    if (lastVNode.type !== nextTag) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, context, isSVG);
    }
    else {
        var dom = lastVNode.dom;
        var nextFlags = nextVNode.flags;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var isFormElement = false;
        var hasControlledValue = false;
        var nextPropsOrEmpty;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 32 /* SvgElement */) > 0;
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
            nextPropsOrEmpty = nextProps || EMPTY_OBJ;
            if (nextPropsOrEmpty !== EMPTY_OBJ) {
                isFormElement = (nextFlags & 448 /* FormElement */) > 0;
                if (isFormElement) {
                    hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
                }
                for (var prop in nextPropsOrEmpty) {
                    var lastValue = lastPropsOrEmpty[prop];
                    var nextValue = nextPropsOrEmpty[prop];
                    if (lastValue !== nextValue) {
                        patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode);
                    }
                }
            }
            if (lastPropsOrEmpty !== EMPTY_OBJ) {
                for (var prop$1 in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (!nextPropsOrEmpty.hasOwnProperty(prop$1) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                        patchProp(prop$1, lastPropsOrEmpty[prop$1], null, dom, isSVG, hasControlledValue, lastVNode);
                    }
                }
            }
        }
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        if (lastChildren !== nextChildren) {
            patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastChildren, nextChildren, dom, context, isSVG && nextTag !== 'foreignObject');
        }
        if (isFormElement) {
            processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (isNullOrUndef(nextClassName)) {
                dom.removeAttribute('class');
            }
            else if (isSVG) {
                dom.setAttribute('class', nextClassName);
            }
            else {
                dom.className = nextClassName;
            }
        }
        if (isFunction(nextRef) && lastVNode.ref !== nextRef) {
            mountRef(dom, nextRef);
        }
    }
}
function patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG) {
    switch (lastChildFlags) {
        case 2 /* HasVNodeChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    patch(lastChildren, nextChildren, parentDOM, context, isSVG);
                    break;
                case 1 /* HasInvalidChildren */:
                    remove(lastChildren, parentDOM);
                    break;
                default:
                    remove(lastChildren, parentDOM);
                    mountArrayChildren(nextChildren, parentDOM, context, isSVG);
                    break;
            }
            break;
        case 1 /* HasInvalidChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    mount(nextChildren, parentDOM, context, isSVG);
                    break;
                case 1 /* HasInvalidChildren */:
                    break;
                default:
                    mountArrayChildren(nextChildren, parentDOM, context, isSVG);
                    break;
            }
            break;
        default:
            if (nextChildFlags & 12 /* MultipleChildren */) {
                var lastLength = lastChildren.length;
                var nextLength = nextChildren.length;
                // Fast path's for both algorithms
                if (lastLength === 0) {
                    if (nextLength > 0) {
                        mountArrayChildren(nextChildren, parentDOM, context, isSVG);
                    }
                }
                else if (nextLength === 0) {
                    removeAllChildren(parentDOM, lastChildren);
                }
                else if (nextChildFlags === 8 /* HasKeyedChildren */ && lastChildFlags === 8 /* HasKeyedChildren */) {
                    patchKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength);
                }
                else {
                    patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength);
                }
            }
            else if (nextChildFlags === 1 /* HasInvalidChildren */) {
                removeAllChildren(parentDOM, lastChildren);
            }
            else {
                removeAllChildren(parentDOM, lastChildren);
                mount(nextChildren, parentDOM, context, isSVG);
            }
            break;
    }
}
function updateClassComponent(instance, nextState, nextVNode, nextProps, parentDom, context, isSVG, force, fromSetState) {
    var lastState = instance.state;
    var lastProps = instance.props;
    nextVNode.children = instance;
    var renderOutput;
    if (instance.$UN) {
        return;
    }
    if (lastProps !== nextProps || nextProps === EMPTY_OBJ) {
        if (!fromSetState && isFunction(instance.componentWillReceiveProps)) {
            instance.$BR = true;
            instance.componentWillReceiveProps(nextProps, context);
            // If instance component was removed during its own update do nothing...
            if (instance.$UN) {
                return;
            }
            instance.$BR = false;
        }
        if (instance.$PSS) {
            nextState = combineFrom(nextState, instance.$PS);
            instance.$PSS = false;
            instance.$PS = null;
        }
    }
    /* Update if scu is not defined, or it returns truthy value or force */
    var hasSCU = isFunction(instance.shouldComponentUpdate);
    if (force || !hasSCU || (hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context))) {
        if (isFunction(instance.componentWillUpdate)) {
            instance.$BS = true;
            instance.componentWillUpdate(nextProps, nextState, context);
            instance.$BS = false;
        }
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
        if (isFunction(options.beforeRender)) {
            options.beforeRender(instance);
        }
        renderOutput = instance.render(nextProps, nextState, context);
        if (isFunction(options.afterRender)) {
            options.afterRender(instance);
        }
        var didUpdate = renderOutput !== NO_OP;
        var childContext;
        if (isFunction(instance.getChildContext)) {
            childContext = instance.getChildContext();
        }
        if (isNullOrUndef(childContext)) {
            childContext = context;
        }
        else {
            childContext = combineFrom(context, childContext);
        }
        instance.$CX = childContext;
        if (didUpdate) {
            var lastInput = instance.$LI;
            var nextInput = (instance.$LI = handleComponentInput(renderOutput, nextVNode));
            patch(lastInput, nextInput, parentDom, childContext, isSVG);
            if (isFunction(instance.componentDidUpdate)) {
                instance.componentDidUpdate(lastProps, lastState);
            }
        }
    }
    else {
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
    }
    nextVNode.dom = instance.$LI.dom;
}
function patchComponent(lastVNode, nextVNode, parentDom, context, isSVG, isClass) {
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastVNode.type !== nextType || lastKey !== nextKey) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, context, isSVG);
    }
    else {
        var nextProps = nextVNode.props || EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance.$UPD = true;
            updateClassComponent(instance, instance.state, nextVNode, nextProps, parentDom, context, isSVG, false, false);
            instance.$V = nextVNode;
            instance.$UPD = false;
        }
        else {
            var shouldUpdate = true;
            var lastProps = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !isNullOrUndef(nextHooks);
            var lastInput = lastVNode.children;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput;
            if (nextHooksDefined && isFunction(nextHooks.onComponentShouldUpdate)) {
                shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps, nextProps);
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && isFunction(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps, nextProps);
                }
                var nextInput = nextType(nextProps, context);
                if (nextInput !== NO_OP) {
                    nextInput = handleComponentInput(nextInput, nextVNode);
                    patch(lastInput, nextInput, parentDom, context, isSVG);
                    nextVNode.children = nextInput;
                    nextVNode.dom = nextInput.dom;
                    if (nextHooksDefined && isFunction(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps, nextProps);
                    }
                }
            }
            else if (lastInput.flags & 14 /* Component */) {
                lastInput.parentVNode = nextVNode;
            }
        }
    }
}
function patchText(lastVNode, nextVNode, parentDom) {
    var nextText = nextVNode.children;
    var textNode = parentDom.firstChild;
    var dom;
    // Guard against external change on DOM node.
    if (isNull(textNode)) {
        parentDom.textContent = nextText;
        dom = parentDom.firstChild;
    }
    else {
        dom = lastVNode.dom;
        if (nextText !== lastVNode.children) {
            dom.nodeValue = nextText;
        }
    }
    nextVNode.dom = dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, context, isSVG, lastChildrenLength, nextChildrenLength) {
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    var nextChild;
    for (; i < commonLength; i++) {
        nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, context, isSVG);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            nextChild = nextChildren[i];
            if (nextChild.dom) {
                nextChild = nextChildren[i] = directClone(nextChild);
            }
            mount(nextChild, dom, context, isSVG);
        }
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            remove(lastChildren[i], dom);
        }
    }
}
function patchKeyedChildren(a, b, dom, context, isSVG, aLength, bLength) {
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i;
    var j;
    var aNode = a[aStart];
    var bNode = b[bStart];
    var nextNode;
    var nextPos;
    // Step 1
    // tslint:disable-next-line
    outer: {
        // Sync nodes with the same key at the beginning.
        while (aNode.key === bNode.key) {
            if (bNode.dom) {
                b[bStart] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aNode = a[aStart];
            bNode = b[bStart];
        }
        aNode = a[aEnd];
        bNode = b[bEnd];
        // Sync nodes with the same key at the end.
        while (aNode.key === bNode.key) {
            if (bNode.dom) {
                b[bEnd] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aNode = a[aEnd];
            bNode = b[bEnd];
        }
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < bLength ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                bNode = b[bStart];
                if (bNode.dom) {
                    b[bStart] = bNode = directClone(bNode);
                }
                bStart++;
                insertOrAppend(dom, mount(bNode, null, context, isSVG), nextNode);
            }
        }
    }
    else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            remove(a[aStart++], dom);
        }
    }
    else {
        var aLeft = aEnd - aStart + 1;
        var bLeft = bEnd - bStart + 1;
        var sources = [];
        for (i = 0; i < bLeft; i++) {
            sources.push(0);
        }
        // Keep track if its possible to remove whole DOM using textContent = '';
        var canRemoveWholeContent = aLeft === aLength;
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLength < 4 || (aLeft | bLeft) < 32) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i + 1;
                            if (canRemoveWholeContent) {
                                canRemoveWholeContent = false;
                                while (i > aStart) {
                                    remove(a[aStart++], dom);
                                }
                            }
                            if (pos > j) {
                                moved = true;
                            }
                            else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = directClone(bNode);
                            }
                            patch(aNode, bNode, dom, context, isSVG);
                            patched++;
                            break;
                        }
                    }
                    if (!canRemoveWholeContent && j > bEnd) {
                        remove(aNode, dom);
                    }
                }
                else if (!canRemoveWholeContent) {
                    remove(aNode, dom);
                }
            }
        }
        else {
            var keyIndex = {};
            // Map keys by their index
            for (i = bStart; i <= bEnd; i++) {
                keyIndex[b[i].key] = i;
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    j = keyIndex[aNode.key];
                    if (j !== void 0) {
                        if (canRemoveWholeContent) {
                            canRemoveWholeContent = false;
                            while (i > aStart) {
                                remove(a[aStart++], dom);
                            }
                        }
                        bNode = b[j];
                        sources[j - bStart] = i + 1;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, context, isSVG);
                        patched++;
                    }
                    else if (!canRemoveWholeContent) {
                        remove(aNode, dom);
                    }
                }
                else if (!canRemoveWholeContent) {
                    remove(aNode, dom);
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (canRemoveWholeContent) {
            removeAllChildren(dom, a);
            mountArrayChildren(b, dom, context, isSVG);
        }
        else {
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === 0) {
                        pos = i + bStart;
                        bNode = b[pos];
                        if (bNode.dom) {
                            b[pos] = bNode = directClone(bNode);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(bNode, null, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                    else if (j < 0 || i !== seq[j]) {
                        pos = i + bStart;
                        bNode = b[pos];
                        nextPos = pos + 1;
                        insertOrAppend(dom, bNode.dom, nextPos < bLength ? b[nextPos].dom : null);
                    }
                    else {
                        j--;
                    }
                }
            }
            else if (patched !== bLeft) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === 0) {
                        pos = i + bStart;
                        bNode = b[pos];
                        if (bNode.dom) {
                            b[pos] = bNode = directClone(bNode);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(bNode, null, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                }
            }
        }
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice();
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

var documentBody = isBrowser ? document.body : null;
function render(input, parentDom, callback) {
    if (input === NO_OP) {
        return;
    }
    var rootInput = parentDom.$V;
    if (isNullOrUndef(rootInput)) {
        if (!isInvalid(input)) {
            if (input.dom) {
                input = directClone(input);
            }
            if (isNull(parentDom.firstChild)) {
                mount(input, parentDom, EMPTY_OBJ, false);
                parentDom.$V = input;
            }
            else {
                hydrate(input, parentDom);
            }
            rootInput = input;
        }
    }
    else {
        if (isNullOrUndef(input)) {
            remove(rootInput, parentDom);
            parentDom.$V = null;
        }
        else {
            if (input.dom) {
                input = directClone(input);
            }
            patch(rootInput, input, parentDom, EMPTY_OBJ, false);
            rootInput = parentDom.$V = input;
        }
    }
    if (LIFECYCLE.length > 0) {
        callAll(LIFECYCLE);
    }
    if (isFunction(callback)) {
        callback();
    }
    if (isFunction(options.renderComplete)) {
        options.renderComplete(rootInput);
    }
    if (rootInput && rootInput.flags & 14 /* Component */) {
        return rootInput.children;
    }
}
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}
function createPortal(children, container) {
    return createVNode(1024 /* Portal */, container, null, children, 0 /* UnknownChildren */, null, isInvalid(children) ? null : children.key, null);
}

var resolvedPromise = typeof Promise === 'undefined' ? null : Promise.resolve();
// raf.bind(window) is needed to work around bug in IE10-IE11 strict mode (TypeError: Invalid calling object)
var fallbackMethod = typeof requestAnimationFrame === 'undefined' ? setTimeout : requestAnimationFrame.bind(window);
function nextTick(fn) {
    if (resolvedPromise) {
        return resolvedPromise.then(fn);
    }
    return fallbackMethod(fn);
}
function queueStateChanges(component, newState, callback) {
    if (isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component.$PS;
    if (isNullOrUndef(pending)) {
        component.$PS = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (!component.$PSS && !component.$BR) {
        if (!component.$UPD) {
            component.$PSS = true;
            component.$UPD = true;
            applyState(component, false, callback);
            component.$UPD = false;
        }
        else {
            // Async
            var queue = component.$QU;
            if (isNull(queue)) {
                queue = component.$QU = [];
                nextTick(promiseCallback(component, queue));
            }
            if (isFunction(callback)) {
                queue.push(callback);
            }
        }
    }
    else {
        component.$PSS = true;
        if (component.$BR && isFunction(callback)) {
            LIFECYCLE.push(callback.bind(component));
        }
    }
}
function promiseCallback(component, queue) {
    return function () {
        component.$QU = null;
        component.$UPD = true;
        applyState(component, false, function () {
            for (var i = 0, len = queue.length; i < len; i++) {
                queue[i].call(component);
            }
        });
        component.$UPD = false;
    };
}
function applyState(component, force, callback) {
    if (component.$UN) {
        return;
    }
    if (force || !component.$BR) {
        component.$PSS = false;
        var pendingState = component.$PS;
        var prevState = component.state;
        var nextState = combineFrom(prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component.$PS = null;
        var vNode = component.$V;
        var lastInput = component.$LI;
        var parentDom = lastInput.dom && lastInput.dom.parentNode;
        updateClassComponent(component, nextState, vNode, props, parentDom, context, (vNode.flags & 32 /* SvgElement */) > 0, force, true);
        if (component.$UN) {
            return;
        }
        if ((component.$LI.flags & 1024 /* Portal */) === 0) {
            var dom = component.$LI.dom;
            while (!isNull((vNode = vNode.parentVNode))) {
                if ((vNode.flags & 14 /* Component */) > 0) {
                    vNode.dom = dom;
                }
            }
        }
        if (LIFECYCLE.length > 0) {
            callAll(LIFECYCLE);
        }
    }
    else {
        component.state = component.$PS;
        component.$PS = null;
    }
    if (isFunction(callback)) {
        callback.call(component);
    }
}
var Component = function Component(props, context) {
    this.state = null;
    // Internal properties
    this.$BR = false; // BLOCK RENDER
    this.$BS = true; // BLOCK STATE
    this.$PSS = false; // PENDING SET STATE
    this.$PS = null; // PENDING STATE (PARTIAL or FULL)
    this.$LI = null; // LAST INPUT
    this.$V = null; // VNODE
    this.$UN = false; // UNMOUNTED
    this.$CX = null; // CHILDCONTEXT
    this.$UPD = true; // UPDATING
    this.$QU = null; // QUEUE
    /** @type {object} */
    this.props = props || EMPTY_OBJ;
    /** @type {object} */
    this.context = context || EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate (callback) {
    if (this.$UN) {
        return;
    }
    // Do not allow double render during force update
    this.$BR = true;
    applyState(this, true, callback);
    this.$BR = false;
};
Component.prototype.setState = function setState (newState, callback) {
    if (this.$UN) {
        return;
    }
    if (!this.$BS) {
        queueStateChanges(this, newState, callback);
    }
    else {
        return;
    }
};
// tslint:disable-next-line:no-empty
Component.prototype.render = function render (nextProps, nextState, nextContext) { };
// Public
Component.defaultProps = null;



var JSX = /*#__PURE__*/Object.freeze({

});

var version = "5.1.1";




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["d"]; });


if (process.env.NODE_ENV !== 'production') {
  console.warn('You are running production build of Inferno in development mode. Use dev:module entry point.');
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* unused harmony export EMPTY_OBJ */
/* unused harmony export NO_OP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createComponentVNode; });
/* unused harmony export createPortal */
/* unused harmony export createRenderer */
/* unused harmony export createTextVNode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createVNode; });
/* unused harmony export directClone */
/* unused harmony export getFlagsForElementVnode */
/* unused harmony export getNumberStyleValue */
/* unused harmony export hydrate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return linkEvent; });
/* unused harmony export normalizeProps */
/* unused harmony export options */
/* unused harmony export render */
/* unused harmony export version */
/* unused harmony export JSX */
var NO_OP = '$NO_OP';
var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
var isBrowser = !!(typeof window !== 'undefined' && window.document);
var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === 'string' || type === 'number';
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction(o) {
    return typeof o === 'function';
}
function isString(o) {
    return typeof o === 'string';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isNull(o) {
    return o === null;
}
function isTrue(o) {
    return o === true;
}
function isUndefined(o) {
    return o === void 0;
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}

var keyPrefix = '$';
function getVNode(childFlags, children, className, flags, key, props, ref, type) {
    return {
        childFlags: childFlags,
        children: children,
        className: className,
        dom: null,
        flags: flags,
        key: key === void 0 ? null : key,
        parentVNode: null,
        props: props === void 0 ? null : props,
        ref: ref === void 0 ? null : ref,
        type: type
    };
}
function createVNode(flags, type, className, children, childFlags, props, key, ref) {
    var childFlag = childFlags === void 0 ? 1 /* HasInvalidChildren */ : childFlags;
    var vNode = getVNode(childFlag, children, className, flags, key, props, ref, type);
    var optsVNode = options.createVNode;
    if (typeof optsVNode === 'function') {
        optsVNode(vNode);
    }
    if (childFlag === 0 /* UnknownChildren */) {
        normalizeChildren(vNode, vNode.children);
    }
    return vNode;
}
function createComponentVNode(flags, type, props, key, ref) {
    if ((flags & 2 /* ComponentUnknown */) > 0) {
        flags = type.prototype && isFunction(type.prototype.render) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
    }
    // set default props
    var defaultProps = type.defaultProps;
    if (!isNullOrUndef(defaultProps)) {
        if (!props) {
            props = {}; // Props can be referenced and modified at application level so always create new object
        }
        for (var prop in defaultProps) {
            if (isUndefined(props[prop])) {
                props[prop] = defaultProps[prop];
            }
        }
    }
    if ((flags & 8 /* ComponentFunction */) > 0) {
        var defaultHooks = type.defaultHooks;
        if (!isNullOrUndef(defaultHooks)) {
            if (!ref) {
                // As ref cannot be referenced from application level, we can use the same refs object
                ref = defaultHooks;
            }
            else {
                for (var prop$1 in defaultHooks) {
                    if (isUndefined(ref[prop$1])) {
                        ref[prop$1] = defaultHooks[prop$1];
                    }
                }
            }
        }
    }
    var vNode = getVNode(1 /* HasInvalidChildren */, null, null, flags, key, props, ref, type);
    var optsVNode = options.createVNode;
    if (isFunction(optsVNode)) {
        optsVNode(vNode);
    }
    return vNode;
}
function createTextVNode(text, key) {
    return getVNode(1 /* HasInvalidChildren */, isNullOrUndef(text) ? '' : text, null, 16 /* Text */, key, null, null, null);
}
function normalizeProps(vNode) {
    var props = vNode.props;
    if (props) {
        var flags = vNode.flags;
        if (flags & 481 /* Element */) {
            if (props.children !== void 0 && isNullOrUndef(vNode.children)) {
                normalizeChildren(vNode, props.children);
            }
            if (props.className !== void 0) {
                vNode.className = props.className || null;
                props.className = undefined;
            }
        }
        if (props.key !== void 0) {
            vNode.key = props.key;
            props.key = undefined;
        }
        if (props.ref !== void 0) {
            if (flags & 8 /* ComponentFunction */) {
                vNode.ref = combineFrom(vNode.ref, props.ref);
            }
            else {
                vNode.ref = props.ref;
            }
            props.ref = undefined;
        }
    }
    return vNode;
}
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 14 /* Component */) {
        var props;
        var propsToClone = vNodeToClone.props;
        if (!isNull(propsToClone)) {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createComponentVNode(flags, vNodeToClone.type, props, vNodeToClone.key, vNodeToClone.ref);
    }
    else if (flags & 481 /* Element */) {
        newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, vNodeToClone.children, vNodeToClone.childFlags, vNodeToClone.props, vNodeToClone.key, vNodeToClone.ref);
    }
    else if (flags & 16 /* Text */) {
        newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
    }
    else if (flags & 1024 /* Portal */) {
        newVNode = vNodeToClone;
    }
    return newVNode;
}
function createVoidVNode() {
    return createTextVNode('', null);
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        if (!isInvalid(n)) {
            var newKey = currentKey + keyPrefix + index;
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, newKey);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, newKey);
                }
                else {
                    var oldKey = n.key;
                    var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;
                    if (!isNull(n.dom) || isPrefixedKey) {
                        n = directClone(n);
                    }
                    if (isNull(oldKey) || isPrefixedKey) {
                        n.key = newKey;
                    }
                    else {
                        n.key = currentKey + oldKey;
                    }
                }
                result.push(n);
            }
        }
    }
}
function getFlagsForElementVnode(type) {
    if (type === 'svg') {
        return 32 /* SvgElement */;
    }
    if (type === 'input') {
        return 64 /* InputElement */;
    }
    if (type === 'select') {
        return 256 /* SelectElement */;
    }
    if (type === 'textarea') {
        return 128 /* TextareaElement */;
    }
    return 1 /* HtmlElement */;
}
function normalizeChildren(vNode, children) {
    var newChildren;
    var newChildFlags = 1 /* HasInvalidChildren */;
    // Don't change children to match strict equal (===) true in patching
    if (isInvalid(children)) {
        newChildren = children;
    }
    else if (isString(children)) {
        newChildFlags = 2 /* HasVNodeChildren */;
        newChildren = createTextVNode(children);
    }
    else if (isNumber(children)) {
        newChildFlags = 2 /* HasVNodeChildren */;
        newChildren = createTextVNode(children + '');
    }
    else if (isArray(children)) {
        var len = children.length;
        if (len === 0) {
            newChildren = null;
            newChildFlags = 1 /* HasInvalidChildren */;
        }
        else {
            // we assign $ which basically means we've flagged this array for future note
            // if it comes back again, we need to clone it, as people are using it
            // in an immutable way
            // tslint:disable-next-line
            if (Object.isFrozen(children) || children['$'] === true) {
                children = children.slice();
            }
            newChildFlags = 8 /* HasKeyedChildren */;
            for (var i = 0; i < len; i++) {
                var n = children[i];
                if (isInvalid(n) || isArray(n)) {
                    newChildren = newChildren || children.slice(0, i);
                    _normalizeVNodes(children, newChildren, i, '');
                    break;
                }
                else if (isStringOrNumber(n)) {
                    newChildren = newChildren || children.slice(0, i);
                    newChildren.push(createTextVNode(n, keyPrefix + i));
                }
                else {
                    var key = n.key;
                    var isNullDom = isNull(n.dom);
                    var isNullKey = isNull(key);
                    var isPrefixed = !isNullKey && key[0] === keyPrefix;
                    if (!isNullDom || isNullKey || isPrefixed) {
                        newChildren = newChildren || children.slice(0, i);
                        if (!isNullDom || isPrefixed) {
                            n = directClone(n);
                        }
                        if (isNullKey || isPrefixed) {
                            n.key = keyPrefix + i;
                        }
                        newChildren.push(n);
                    }
                    else if (newChildren) {
                        newChildren.push(n);
                    }
                }
            }
            newChildren = newChildren || children;
            newChildren.$ = true;
        }
    }
    else {
        newChildren = children;
        if (!isNull(children.dom)) {
            newChildren = directClone(children);
        }
        newChildFlags = 2 /* HasVNodeChildren */;
    }
    vNode.children = newChildren;
    vNode.childFlags = newChildFlags;
    return vNode;
}
var options = {
    afterRender: null,
    beforeRender: null,
    createVNode: null,
    renderComplete: null
};

/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    if (isFunction(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}

var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var svgNS = 'http://www.w3.org/2000/svg';
var namespaces = {
    'xlink:actuate': xlinkNS,
    'xlink:arcrole': xlinkNS,
    'xlink:href': xlinkNS,
    'xlink:role': xlinkNS,
    'xlink:show': xlinkNS,
    'xlink:title': xlinkNS,
    'xlink:type': xlinkNS,
    'xml:base': xmlNS,
    'xml:lang': xmlNS,
    'xml:space': xmlNS
};

// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
var LIFECYCLE = [];
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if (isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    }
    else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(svgNS, tag);
    }
    return document.createElement(tag);
}
function replaceChild(parentDom, newDom, lastDom) {
    parentDom.replaceChild(newDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function callAll(arrayFn) {
    var listener;
    while ((listener = arrayFn.shift()) !== undefined) {
        listener();
    }
}

var attachedEventCounts = {};
var attachedEvents = {};
function handleEvent(name, nextEvent, dom) {
    var eventsLeft = attachedEventCounts[name];
    var eventsObject = dom.$EV;
    if (nextEvent) {
        if (!eventsLeft) {
            attachedEvents[name] = attachEventToDocument(name);
            attachedEventCounts[name] = 0;
        }
        if (!eventsObject) {
            eventsObject = dom.$EV = {};
        }
        if (!eventsObject[name]) {
            attachedEventCounts[name]++;
        }
        eventsObject[name] = nextEvent;
    }
    else if (eventsObject && eventsObject[name]) {
        attachedEventCounts[name]--;
        if (eventsLeft === 1) {
            document.removeEventListener(normalizeEventName(name), attachedEvents[name]);
            attachedEvents[name] = null;
        }
        eventsObject[name] = nextEvent;
    }
}
function dispatchEvents(event, target, isClick, name, eventData) {
    var dom = target;
    while (!isNull(dom)) {
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (isClick && dom.disabled) {
            return;
        }
        var eventsObject = dom.$EV;
        if (eventsObject) {
            var currentEvent = eventsObject[name];
            if (currentEvent) {
                // linkEvent object
                eventData.dom = dom;
                if (currentEvent.event) {
                    currentEvent.event(currentEvent.data, event);
                }
                else {
                    currentEvent(event);
                }
                if (event.cancelBubble) {
                    return;
                }
            }
        }
        dom = dom.parentNode;
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function stopPropagation() {
    this.cancelBubble = true;
    if (!this.immediatePropagationStopped) {
        this.stopImmediatePropagation();
    }
}
function attachEventToDocument(name) {
    var docEvent = function (event) {
        var type = event.type;
        var isClick = type === 'click' || type === 'dblclick';
        if (isClick && event.button !== 0) {
            // Firefox incorrectly triggers click event for mid/right mouse buttons.
            // This bug has been active for 12 years.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=184051
            event.stopPropagation();
            return false;
        }
        event.stopPropagation = stopPropagation;
        // Event data needs to be object to save reference to currentTarget getter
        var eventData = {
            dom: document
        };
        Object.defineProperty(event, 'currentTarget', {
            configurable: true,
            get: function get() {
                return eventData.dom;
            }
        });
        dispatchEvents(event, event.target, isClick, name, eventData);
        return;
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}

function isSameInnerHTML(dom, innerHTML) {
    var tempdom = document.createElement('i');
    tempdom.innerHTML = innerHTML;
    return tempdom.innerHTML === dom.innerHTML;
}
function isSamePropsInnerHTML(dom, props) {
    return Boolean(props && props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html && isSameInnerHTML(dom, props.dangerouslySetInnerHTML.__html));
}

function triggerEventListener(props, methodName, e) {
    if (props[methodName]) {
        var listener = props[methodName];
        if (listener.event) {
            listener.event(listener.data, e);
        }
        else {
            listener(e);
        }
    }
    else {
        var nativeListenerName = methodName.toLowerCase();
        if (props[nativeListenerName]) {
            props[nativeListenerName](e);
        }
    }
}
function createWrappedFunction(methodName, applyValue) {
    var fnMethod = function (e) {
        e.stopPropagation();
        var vNode = this.$V;
        // If vNode is gone by the time event fires, no-op
        if (!vNode) {
            return;
        }
        var props = vNode.props || EMPTY_OBJ;
        var dom = vNode.dom;
        if (isString(methodName)) {
            triggerEventListener(props, methodName, e);
        }
        else {
            for (var i = 0; i < methodName.length; i++) {
                triggerEventListener(props, methodName[i], e);
            }
        }
        if (isFunction(applyValue)) {
            var newVNode = this.$V;
            var newProps = newVNode.props || EMPTY_OBJ;
            applyValue(newProps, dom, false, newVNode);
        }
    };
    Object.defineProperty(fnMethod, 'wrapped', {
        configurable: false,
        enumerable: false,
        value: true,
        writable: false
    });
    return fnMethod;
}

function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
var onTextInputChange = createWrappedFunction('onInput', applyValueInput);
var wrappedOnChange = createWrappedFunction(['onClick', 'onChange'], applyValueInput);
/* tslint:disable-next-line:no-empty */
function emptywrapper(event) {
    event.stopPropagation();
}
emptywrapper.wrapped = true;
function inputEvents(dom, nextPropsOrEmpty) {
    if (isCheckedType(nextPropsOrEmpty.type)) {
        dom.onchange = wrappedOnChange;
        dom.onclick = emptywrapper;
    }
    else {
        dom.oninput = onTextInputChange;
    }
}
function applyValueInput(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute('type', type);
    }
    if (!isNullOrUndef(multiple) && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
        else if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === 'optgroup') {
        var children = vNode.children;
        var childFlags = vNode.childFlags;
        if (childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            updateChildOption(children, value);
        }
    }
    else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((isArray(value) && value.indexOf(props.value) !== -1) || props.value === value) {
        dom.selected = true;
    }
    else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
var onSelectChange = createWrappedFunction('onChange', applyValueSelect);
function selectEvents(dom) {
    dom.onchange = onSelectChange;
}
function applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode) {
    var multiplePropInBoolean = Boolean(nextPropsOrEmpty.multiple);
    if (!isNullOrUndef(nextPropsOrEmpty.multiple) && multiplePropInBoolean !== dom.multiple) {
        dom.multiple = multiplePropInBoolean;
    }
    var childFlags = vNode.childFlags;
    if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
        var children = vNode.children;
        var value = nextPropsOrEmpty.value;
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            updateChildOptionGroup(children, value);
        }
    }
}

var onTextareaInputChange = createWrappedFunction('onInput', applyValueTextArea);
var wrappedOnChange$1 = createWrappedFunction('onChange');
function textAreaEvents(dom, nextPropsOrEmpty) {
    dom.oninput = onTextareaInputChange;
    if (nextPropsOrEmpty.onChange) {
        dom.onchange = wrappedOnChange$1;
    }
}
function applyValueTextArea(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!isNullOrUndef(defaultValue) && defaultValue !== domValue) {
                dom.defaultValue = defaultValue;
                dom.value = defaultValue;
            }
        }
    }
    else if (domValue !== value) {
        /* There is value so keep it controlled */
        dom.defaultValue = value;
        dom.value = value;
    }
}

/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 64 /* InputElement */) {
        applyValueInput(nextPropsOrEmpty, dom);
    }
    else if (flags & 256 /* SelectElement */) {
        applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);
    }
    else if (flags & 128 /* TextareaElement */) {
        applyValueTextArea(nextPropsOrEmpty, dom, mounting);
    }
    if (isControlled) {
        dom.$V = vNode;
    }
}
function addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {
    if (flags & 64 /* InputElement */) {
        inputEvents(dom, nextPropsOrEmpty);
    }
    else if (flags & 256 /* SelectElement */) {
        selectEvents(dom);
    }
    else if (flags & 128 /* TextareaElement */) {
        textAreaEvents(dom, nextPropsOrEmpty);
    }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

function remove(vNode, parentDom) {
    unmount(vNode);
    if (parentDom && vNode.dom) {
        removeChild(parentDom, vNode.dom);
        // Let carbage collector free memory
        vNode.dom = null;
    }
}
function unmount(vNode) {
    var flags = vNode.flags;
    if (flags & 481 /* Element */) {
        var ref = vNode.ref;
        var props = vNode.props;
        if (isFunction(ref)) {
            ref(null);
        }
        var children = vNode.children;
        var childFlags = vNode.childFlags;
        if (childFlags & 12 /* MultipleChildren */) {
            unmountAllChildren(children);
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            unmount(children);
        }
        if (!isNull(props)) {
            for (var name in props) {
                switch (name) {
                    case 'onClick':
                    case 'onDblClick':
                    case 'onFocusIn':
                    case 'onFocusOut':
                    case 'onKeyDown':
                    case 'onKeyPress':
                    case 'onKeyUp':
                    case 'onMouseDown':
                    case 'onMouseMove':
                    case 'onMouseUp':
                    case 'onSubmit':
                    case 'onTouchEnd':
                    case 'onTouchMove':
                    case 'onTouchStart':
                        handleEvent(name, null, vNode.dom);
                        break;
                    default:
                        break;
                }
            }
        }
    }
    else {
        var children$1 = vNode.children;
        // Safe guard for crashed VNode
        if (children$1) {
            if (flags & 14 /* Component */) {
                var ref$1 = vNode.ref;
                if (flags & 4 /* ComponentClass */) {
                    if (isFunction(children$1.componentWillUnmount)) {
                        children$1.componentWillUnmount();
                    }
                    if (isFunction(ref$1)) {
                        ref$1(null);
                    }
                    children$1.$UN = true;
                    if (children$1.$LI) {
                        unmount(children$1.$LI);
                    }
                }
                else {
                    if (!isNullOrUndef(ref$1) && isFunction(ref$1.onComponentWillUnmount)) {
                        ref$1.onComponentWillUnmount(vNode.dom, vNode.props || EMPTY_OBJ);
                    }
                    unmount(children$1);
                }
            }
            else if (flags & 1024 /* Portal */) {
                remove(children$1, vNode.type);
            }
        }
    }
}
function unmountAllChildren(children) {
    for (var i = 0, len = children.length; i < len; i++) {
        unmount(children[i]);
    }
}
function removeAllChildren(dom, children) {
    unmountAllChildren(children);
    dom.textContent = '';
}

function createLinkEvent(linkEvent, nextValue) {
    return function (e) {
        linkEvent(nextValue.data, e);
    };
}
function patchEvent(name, lastValue, nextValue, dom) {
    var nameLowerCase = name.toLowerCase();
    if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
        var linkEvent = nextValue.event;
        if (linkEvent && isFunction(linkEvent)) {
            dom[nameLowerCase] = createLinkEvent(linkEvent, nextValue);
        }
    }
    else {
        var domEvent = dom[nameLowerCase];
        // if the function is wrapped, that means it's been controlled by a wrapper
        if (!domEvent || !domEvent.wrapped) {
            dom[nameLowerCase] = nextValue;
        }
    }
}
function getNumberStyleValue(style, value) {
    switch (style) {
        case 'animationIterationCount':
        case 'borderImageOutset':
        case 'borderImageSlice':
        case 'borderImageWidth':
        case 'boxFlex':
        case 'boxFlexGroup':
        case 'boxOrdinalGroup':
        case 'columnCount':
        case 'fillOpacity':
        case 'flex':
        case 'flexGrow':
        case 'flexNegative':
        case 'flexOrder':
        case 'flexPositive':
        case 'flexShrink':
        case 'floodOpacity':
        case 'fontWeight':
        case 'gridColumn':
        case 'gridRow':
        case 'lineClamp':
        case 'lineHeight':
        case 'opacity':
        case 'order':
        case 'orphans':
        case 'stopOpacity':
        case 'strokeDasharray':
        case 'strokeDashoffset':
        case 'strokeMiterlimit':
        case 'strokeOpacity':
        case 'strokeWidth':
        case 'tabSize':
        case 'widows':
        case 'zIndex':
        case 'zoom':
            return value;
        default:
            return value + 'px';
    }
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    var domStyle = dom.style;
    var style;
    var value;
    if (isString(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
        for (style in nextAttrValue) {
            // do not add a hasOwnProperty check here, it affects performance
            value = nextAttrValue[style];
            if (value !== lastAttrValue[style]) {
                domStyle[style] = isNumber(value) ? getNumberStyleValue(style, value) : value;
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = '';
            }
        }
    }
    else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle[style] = isNumber(value) ? getNumberStyleValue(style, value) : value;
        }
    }
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode) {
    switch (prop) {
        case 'onClick':
        case 'onDblClick':
        case 'onFocusIn':
        case 'onFocusOut':
        case 'onKeyDown':
        case 'onKeyPress':
        case 'onKeyUp':
        case 'onMouseDown':
        case 'onMouseMove':
        case 'onMouseUp':
        case 'onSubmit':
        case 'onTouchEnd':
        case 'onTouchMove':
        case 'onTouchStart':
            handleEvent(prop, nextValue, dom);
            break;
        case 'children':
        case 'childrenType':
        case 'className':
        case 'defaultValue':
        case 'key':
        case 'multiple':
        case 'ref':
            break;
        case 'autoFocus':
            dom.autofocus = !!nextValue;
            break;
        case 'allowfullscreen':
        case 'autoplay':
        case 'capture':
        case 'checked':
        case 'controls':
        case 'default':
        case 'disabled':
        case 'hidden':
        case 'indeterminate':
        case 'loop':
        case 'muted':
        case 'novalidate':
        case 'open':
        case 'readOnly':
        case 'required':
        case 'reversed':
        case 'scoped':
        case 'seamless':
        case 'selected':
            dom[prop] = !!nextValue;
            break;
        case 'defaultChecked':
        case 'value':
        case 'volume':
            if (hasControlledValue && prop === 'value') {
                return;
            }
            var value = isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
            break;
        case 'dangerouslySetInnerHTML':
            var lastHtml = (lastValue && lastValue.__html) || '';
            var nextHtml = (nextValue && nextValue.__html) || '';
            if (lastHtml !== nextHtml) {
                if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
                    if (!isNull(lastVNode)) {
                        if (lastVNode.childFlags & 12 /* MultipleChildren */) {
                            unmountAllChildren(lastVNode.children);
                        }
                        else if (lastVNode.childFlags === 2 /* HasVNodeChildren */) {
                            unmount(lastVNode.children);
                        }
                        lastVNode.children = null;
                        lastVNode.childFlags = 1 /* HasInvalidChildren */;
                    }
                    dom.innerHTML = nextHtml;
                }
            }
            break;
        default:
            if (prop[0] === 'o' && prop[1] === 'n') {
                patchEvent(prop, lastValue, nextValue, dom);
            }
            else if (isNullOrUndef(nextValue)) {
                dom.removeAttribute(prop);
            }
            else if (prop === 'style') {
                patchStyle(lastValue, nextValue, dom);
            }
            else if (isSVG && namespaces[prop]) {
                // We optimize for isSVG being false
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces[prop], prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
            break;
    }
}
function mountProps(vNode, flags, props, dom, isSVG) {
    var hasControlledValue = false;
    var isFormElement = (flags & 448 /* FormElement */) > 0;
    if (isFormElement) {
        hasControlledValue = isControlledFormElement(props);
        if (hasControlledValue) {
            addFormElementEventHandlers(flags, dom, props);
        }
    }
    for (var prop in props) {
        // do not add a hasOwnProperty check here, it affects performance
        patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue, null);
    }
    if (isFormElement) {
        processElement(flags, vNode, dom, props, true, hasControlledValue);
    }
}

function createClassComponentInstance(vNode, Component, props, context) {
    var instance = new Component(props, context);
    vNode.children = instance;
    instance.$V = vNode;
    instance.$BS = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    instance.$UN = false;
    if (isFunction(instance.componentWillMount)) {
        instance.$BR = true;
        instance.componentWillMount();
        if (instance.$PSS) {
            var state = instance.state;
            var pending = instance.$PS;
            if (isNull(state)) {
                instance.state = pending;
            }
            else {
                for (var key in pending) {
                    state[key] = pending[key];
                }
            }
            instance.$PSS = false;
            instance.$PS = null;
        }
        instance.$BR = false;
    }
    if (isFunction(options.beforeRender)) {
        options.beforeRender(instance);
    }
    var input = handleComponentInput(instance.render(props, instance.state, context), vNode);
    var childContext;
    if (isFunction(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (isNullOrUndef(childContext)) {
        instance.$CX = context;
    }
    else {
        instance.$CX = combineFrom(context, childContext);
    }
    if (isFunction(options.afterRender)) {
        options.afterRender(instance);
    }
    instance.$LI = input;
    return instance;
}
function handleComponentInput(input, componentVNode) {
    if (isInvalid(input)) {
        input = createVoidVNode();
    }
    else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 14 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = componentVNode;
        }
    }
    return input;
}

function mount(vNode, parentDom, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 481 /* Element */) {
        return mountElement(vNode, parentDom, context, isSVG);
    }
    if (flags & 14 /* Component */) {
        return mountComponent(vNode, parentDom, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    if (flags & 512 /* Void */ || flags & 16 /* Text */) {
        return mountText(vNode, parentDom);
    }
    if (flags & 1024 /* Portal */) {
        mount(vNode.children, vNode.type, context, false);
        return (vNode.dom = mountText(createVoidVNode(), parentDom));
    }
}
function mountText(vNode, parentDom) {
    var dom = (vNode.dom = document.createTextNode(vNode.children));
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, context, isSVG) {
    var flags = vNode.flags;
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    var childFlags = vNode.childFlags;
    isSVG = isSVG || (flags & 32 /* SvgElement */) > 0;
    var dom = documentCreateElement(vNode.type, isSVG);
    vNode.dom = dom;
    if (!isNullOrUndef(className) && className !== '') {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
        var childrenIsSVG = isSVG === true && vNode.type !== 'foreignObject';
        if (childFlags === 2 /* HasVNodeChildren */) {
            mount(children, dom, context, childrenIsSVG);
        }
        else if (childFlags & 12 /* MultipleChildren */) {
            mountArrayChildren(children, dom, context, childrenIsSVG);
        }
    }
    if (!isNull(props)) {
        mountProps(vNode, flags, props, dom, isSVG);
    }
    if (isFunction(ref)) {
        mountRef(dom, ref);
    }
    return dom;
}
function mountArrayChildren(children, dom, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!isNull(child.dom)) {
            children[i] = child = directClone(child);
        }
        mount(child, dom, context, isSVG);
    }
}
function mountComponent(vNode, parentDom, context, isSVG, isClass) {
    var dom;
    var type = vNode.type;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context);
        vNode.dom = dom = mount(instance.$LI, null, instance.$CX, isSVG);
        mountClassComponentCallbacks(vNode, ref, instance);
        instance.$UPD = false;
    }
    else {
        var input = handleComponentInput(type(props, context), vNode);
        vNode.children = input;
        vNode.dom = dom = mount(input, null, context, isSVG);
        mountFunctionalComponentCallbacks(props, ref, dom);
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function createClassMountCallback(instance) {
    return function () {
        instance.componentDidMount();
    };
}
function mountClassComponentCallbacks(vNode, ref, instance) {
    if (isFunction(ref)) {
        ref(instance);
    }
    if (isFunction(instance.componentDidMount)) {
        LIFECYCLE.push(createClassMountCallback(instance));
    }
}
function createOnMountCallback(ref, dom, props) {
    return function () { return ref.onComponentDidMount(dom, props); };
}
function mountFunctionalComponentCallbacks(props, ref, dom) {
    if (!isNullOrUndef(ref)) {
        if (isFunction(ref.onComponentWillMount)) {
            ref.onComponentWillMount(props);
        }
        if (isFunction(ref.onComponentDidMount)) {
            LIFECYCLE.push(createOnMountCallback(ref, dom, props));
        }
    }
}
function mountRef(dom, value) {
    LIFECYCLE.push(function () { return value(dom); });
}

function hydrateComponent(vNode, dom, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    var props = vNode.props || EMPTY_OBJ;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context);
        var input = instance.$LI;
        hydrateVNode(input, dom, instance.$CX, isSVG);
        vNode.dom = input.dom;
        mountClassComponentCallbacks(vNode, ref, instance);
        instance.$UPD = false; // Mount finished allow going sync
    }
    else {
        var input$1 = handleComponentInput(type(props, context), vNode);
        hydrateVNode(input$1, dom, context, isSVG);
        vNode.children = input$1;
        vNode.dom = input$1.dom;
        mountFunctionalComponentCallbacks(props, ref, dom);
    }
}
function hydrateElement(vNode, dom, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 32 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        var newDom = mountElement(vNode, null, context, isSVG);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
    }
    else {
        vNode.dom = dom;
        var childNode = dom.firstChild;
        var childFlags = vNode.childFlags;
        if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
            var nextSibling = null;
            while (childNode) {
                nextSibling = childNode.nextSibling;
                if (childNode.nodeType === 8) {
                    if (childNode.data === '!') {
                        dom.replaceChild(document.createTextNode(''), childNode);
                    }
                    else {
                        dom.removeChild(childNode);
                    }
                }
                childNode = nextSibling;
            }
            childNode = dom.firstChild;
            if (childFlags === 2 /* HasVNodeChildren */) {
                if (isNull(childNode)) {
                    mount(children, dom, context, isSVG);
                }
                else {
                    nextSibling = childNode.nextSibling;
                    hydrateVNode(children, childNode, context, isSVG);
                    childNode = nextSibling;
                }
            }
            else if (childFlags & 12 /* MultipleChildren */) {
                for (var i = 0, len = children.length; i < len; i++) {
                    var child = children[i];
                    if (isNull(childNode)) {
                        mount(child, dom, context, isSVG);
                    }
                    else {
                        nextSibling = childNode.nextSibling;
                        hydrateVNode(child, childNode, context, isSVG);
                        childNode = nextSibling;
                    }
                }
            }
            // clear any other DOM nodes, there should be only a single entry for the root
            while (childNode) {
                nextSibling = childNode.nextSibling;
                dom.removeChild(childNode);
                childNode = nextSibling;
            }
        }
        else if (!isNull(dom.firstChild) && !isSamePropsInnerHTML(dom, props)) {
            dom.textContent = ''; // dom has content, but VNode has no children remove everything from DOM
            if (flags & 448 /* FormElement */) {
                // If element is form element, we need to clear defaultValue also
                dom.defaultValue = '';
            }
        }
        if (!isNull(props)) {
            mountProps(vNode, flags, props, dom, isSVG);
        }
        if (isNullOrUndef(className)) {
            if (dom.className !== '') {
                dom.removeAttribute('class');
            }
        }
        else if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
        if (isFunction(ref)) {
            mountRef(dom, ref);
        }
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mountText(vNode, null);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
    }
    else {
        var text = vNode.children;
        if (dom.nodeValue !== text) {
            dom.nodeValue = text;
        }
        vNode.dom = dom;
    }
}
function hydrateVNode(vNode, dom, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 14 /* Component */) {
        hydrateComponent(vNode, dom, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 481 /* Element */) {
        hydrateElement(vNode, dom, context, isSVG);
    }
    else if (flags & 16 /* Text */) {
        hydrateText(vNode, dom);
    }
    else if (flags & 512 /* Void */) {
        vNode.dom = dom;
    }
    else {
        throwError();
    }
}
function hydrate(input, parentDom, callback) {
    var dom = parentDom.firstChild;
    if (!isNull(dom)) {
        if (!isInvalid(input)) {
            hydrateVNode(input, dom, EMPTY_OBJ, false);
        }
        dom = parentDom.firstChild;
        // clear any other DOM nodes, there should be only a single entry for the root
        while ((dom = dom.nextSibling)) {
            parentDom.removeChild(dom);
        }
    }
    if (LIFECYCLE.length > 0) {
        callAll(LIFECYCLE);
    }
    parentDom.$V = input;
    if (isFunction(callback)) {
        callback();
    }
}

function replaceWithNewNode(lastNode, nextNode, parentDom, context, isSVG) {
    unmount(lastNode);
    replaceChild(parentDom, mount(nextNode, null, context, isSVG), lastNode.dom);
}
function patch(lastVNode, nextVNode, parentDom, context, isSVG) {
    if (lastVNode !== nextVNode) {
        var nextFlags = nextVNode.flags | 0;
        if (lastVNode.flags !== nextFlags || nextFlags & 2048 /* ReCreate */) {
            replaceWithNewNode(lastVNode, nextVNode, parentDom, context, isSVG);
        }
        else if (nextFlags & 481 /* Element */) {
            patchElement(lastVNode, nextVNode, parentDom, context, isSVG);
        }
        else if (nextFlags & 14 /* Component */) {
            patchComponent(lastVNode, nextVNode, parentDom, context, isSVG, (nextFlags & 4 /* ComponentClass */) > 0);
        }
        else if (nextFlags & 16 /* Text */) {
            patchText(lastVNode, nextVNode, parentDom);
        }
        else if (nextFlags & 512 /* Void */) {
            nextVNode.dom = lastVNode.dom;
        }
        else {
            // Portal
            patchPortal(lastVNode, nextVNode, context);
        }
    }
}
function patchPortal(lastVNode, nextVNode, context) {
    var lastContainer = lastVNode.type;
    var nextContainer = nextVNode.type;
    var nextChildren = nextVNode.children;
    patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, context, false);
    nextVNode.dom = lastVNode.dom;
    if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {
        var node = nextChildren.dom;
        lastContainer.removeChild(node);
        nextContainer.appendChild(node);
    }
}
function patchElement(lastVNode, nextVNode, parentDom, context, isSVG) {
    var nextTag = nextVNode.type;
    if (lastVNode.type !== nextTag) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, context, isSVG);
    }
    else {
        var dom = lastVNode.dom;
        var nextFlags = nextVNode.flags;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var isFormElement = false;
        var hasControlledValue = false;
        var nextPropsOrEmpty;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 32 /* SvgElement */) > 0;
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
            nextPropsOrEmpty = nextProps || EMPTY_OBJ;
            if (nextPropsOrEmpty !== EMPTY_OBJ) {
                isFormElement = (nextFlags & 448 /* FormElement */) > 0;
                if (isFormElement) {
                    hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
                }
                for (var prop in nextPropsOrEmpty) {
                    var lastValue = lastPropsOrEmpty[prop];
                    var nextValue = nextPropsOrEmpty[prop];
                    if (lastValue !== nextValue) {
                        patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode);
                    }
                }
            }
            if (lastPropsOrEmpty !== EMPTY_OBJ) {
                for (var prop$1 in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (!nextPropsOrEmpty.hasOwnProperty(prop$1) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                        patchProp(prop$1, lastPropsOrEmpty[prop$1], null, dom, isSVG, hasControlledValue, lastVNode);
                    }
                }
            }
        }
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        if (lastChildren !== nextChildren) {
            patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastChildren, nextChildren, dom, context, isSVG && nextTag !== 'foreignObject');
        }
        if (isFormElement) {
            processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (isNullOrUndef(nextClassName)) {
                dom.removeAttribute('class');
            }
            else if (isSVG) {
                dom.setAttribute('class', nextClassName);
            }
            else {
                dom.className = nextClassName;
            }
        }
        if (isFunction(nextRef) && lastVNode.ref !== nextRef) {
            mountRef(dom, nextRef);
        }
    }
}
function patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG) {
    switch (lastChildFlags) {
        case 2 /* HasVNodeChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    patch(lastChildren, nextChildren, parentDOM, context, isSVG);
                    break;
                case 1 /* HasInvalidChildren */:
                    remove(lastChildren, parentDOM);
                    break;
                default:
                    remove(lastChildren, parentDOM);
                    mountArrayChildren(nextChildren, parentDOM, context, isSVG);
                    break;
            }
            break;
        case 1 /* HasInvalidChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    mount(nextChildren, parentDOM, context, isSVG);
                    break;
                case 1 /* HasInvalidChildren */:
                    break;
                default:
                    mountArrayChildren(nextChildren, parentDOM, context, isSVG);
                    break;
            }
            break;
        default:
            if (nextChildFlags & 12 /* MultipleChildren */) {
                var lastLength = lastChildren.length;
                var nextLength = nextChildren.length;
                // Fast path's for both algorithms
                if (lastLength === 0) {
                    if (nextLength > 0) {
                        mountArrayChildren(nextChildren, parentDOM, context, isSVG);
                    }
                }
                else if (nextLength === 0) {
                    removeAllChildren(parentDOM, lastChildren);
                }
                else if (nextChildFlags === 8 /* HasKeyedChildren */ && lastChildFlags === 8 /* HasKeyedChildren */) {
                    patchKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength);
                }
                else {
                    patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength);
                }
            }
            else if (nextChildFlags === 1 /* HasInvalidChildren */) {
                removeAllChildren(parentDOM, lastChildren);
            }
            else {
                removeAllChildren(parentDOM, lastChildren);
                mount(nextChildren, parentDOM, context, isSVG);
            }
            break;
    }
}
function updateClassComponent(instance, nextState, nextVNode, nextProps, parentDom, context, isSVG, force, fromSetState) {
    var lastState = instance.state;
    var lastProps = instance.props;
    nextVNode.children = instance;
    var renderOutput;
    if (instance.$UN) {
        return;
    }
    if (lastProps !== nextProps || nextProps === EMPTY_OBJ) {
        if (!fromSetState && isFunction(instance.componentWillReceiveProps)) {
            instance.$BR = true;
            instance.componentWillReceiveProps(nextProps, context);
            // If instance component was removed during its own update do nothing...
            if (instance.$UN) {
                return;
            }
            instance.$BR = false;
        }
        if (instance.$PSS) {
            nextState = combineFrom(nextState, instance.$PS);
            instance.$PSS = false;
            instance.$PS = null;
        }
    }
    /* Update if scu is not defined, or it returns truthy value or force */
    var hasSCU = Boolean(instance.shouldComponentUpdate);
    if (force || !hasSCU || (hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context))) {
        if (isFunction(instance.componentWillUpdate)) {
            instance.$BS = true;
            instance.componentWillUpdate(nextProps, nextState, context);
            instance.$BS = false;
        }
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
        if (isFunction(options.beforeRender)) {
            options.beforeRender(instance);
        }
        renderOutput = instance.render(nextProps, nextState, context);
        if (isFunction(options.afterRender)) {
            options.afterRender(instance);
        }
        var didUpdate = renderOutput !== NO_OP;
        var childContext;
        if (isFunction(instance.getChildContext)) {
            childContext = instance.getChildContext();
        }
        if (isNullOrUndef(childContext)) {
            childContext = context;
        }
        else {
            childContext = combineFrom(context, childContext);
        }
        instance.$CX = childContext;
        if (didUpdate) {
            var lastInput = instance.$LI;
            var nextInput = (instance.$LI = handleComponentInput(renderOutput, nextVNode));
            patch(lastInput, nextInput, parentDom, childContext, isSVG);
            if (isFunction(instance.componentDidUpdate)) {
                instance.componentDidUpdate(lastProps, lastState);
            }
        }
    }
    else {
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
    }
    nextVNode.dom = instance.$LI.dom;
}
function patchComponent(lastVNode, nextVNode, parentDom, context, isSVG, isClass) {
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastVNode.type !== nextType || lastKey !== nextKey) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, context, isSVG);
    }
    else {
        var nextProps = nextVNode.props || EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance.$UPD = true;
            instance.$V = nextVNode;
            updateClassComponent(instance, instance.state, nextVNode, nextProps, parentDom, context, isSVG, false, false);
            instance.$UPD = false;
        }
        else {
            var shouldUpdate = true;
            var lastProps = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !isNullOrUndef(nextHooks);
            var lastInput = lastVNode.children;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput;
            if (nextHooksDefined && isFunction(nextHooks.onComponentShouldUpdate)) {
                shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps, nextProps);
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && isFunction(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps, nextProps);
                }
                var nextInput = nextType(nextProps, context);
                if (nextInput !== NO_OP) {
                    nextInput = handleComponentInput(nextInput, nextVNode);
                    patch(lastInput, nextInput, parentDom, context, isSVG);
                    nextVNode.children = nextInput;
                    nextVNode.dom = nextInput.dom;
                    if (nextHooksDefined && isFunction(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps, nextProps);
                    }
                }
            }
            else if (lastInput.flags & 14 /* Component */) {
                lastInput.parentVNode = nextVNode;
            }
        }
    }
}
function patchText(lastVNode, nextVNode, parentDom) {
    var nextText = nextVNode.children;
    var textNode = parentDom.firstChild;
    var dom;
    // Guard against external change on DOM node.
    if (isNull(textNode)) {
        parentDom.textContent = nextText;
        dom = parentDom.firstChild;
    }
    else {
        dom = lastVNode.dom;
        if (nextText !== lastVNode.children) {
            dom.nodeValue = nextText;
        }
    }
    nextVNode.dom = dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, context, isSVG, lastChildrenLength, nextChildrenLength) {
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    var nextChild;
    var lastChild;
    for (; i < commonLength; i++) {
        nextChild = nextChildren[i];
        lastChild = lastChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChild, nextChild, dom, context, isSVG);
        lastChildren[i] = nextChild;
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            nextChild = nextChildren[i];
            if (nextChild.dom) {
                nextChild = nextChildren[i] = directClone(nextChild);
            }
            mount(nextChild, dom, context, isSVG);
        }
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            remove(lastChildren[i], dom);
        }
    }
}
function patchKeyedChildren(a, b, dom, context, isSVG, aLength, bLength) {
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var i;
    var j = 0;
    var aNode = a[j];
    var bNode = b[j];
    var nextPos;
    // Step 1
    // tslint:disable-next-line
    outer: {
        // Sync nodes with the same key at the beginning.
        while (aNode.key === bNode.key) {
            if (bNode.dom) {
                b[j] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG);
            a[j] = bNode;
            j++;
            if (j > aEnd || j > bEnd) {
                break outer;
            }
            aNode = a[j];
            bNode = b[j];
        }
        aNode = a[aEnd];
        bNode = b[bEnd];
        // Sync nodes with the same key at the end.
        while (aNode.key === bNode.key) {
            if (bNode.dom) {
                b[bEnd] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG);
            a[aEnd] = bNode;
            aEnd--;
            bEnd--;
            if (j > aEnd || j > bEnd) {
                break outer;
            }
            aNode = a[aEnd];
            bNode = b[bEnd];
        }
    }
    if (j > aEnd) {
        if (j <= bEnd) {
            nextPos = bEnd + 1;
            var nextNode = nextPos < bLength ? b[nextPos].dom : null;
            while (j <= bEnd) {
                bNode = b[j];
                if (bNode.dom) {
                    b[j] = bNode = directClone(bNode);
                }
                j++;
                insertOrAppend(dom, mount(bNode, null, context, isSVG), nextNode);
            }
        }
    }
    else if (j > bEnd) {
        while (j <= aEnd) {
            remove(a[j++], dom);
        }
    }
    else {
        var aStart = j;
        var bStart = j;
        var aLeft = aEnd - j + 1;
        var bLeft = bEnd - j + 1;
        var sources = [];
        for (i = 0; i < bLeft; i++) {
            sources.push(0);
        }
        // Keep track if its possible to remove whole DOM using textContent = '';
        var canRemoveWholeContent = aLeft === aLength;
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLength < 4 || (aLeft | bLeft) < 32) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i + 1;
                            if (canRemoveWholeContent) {
                                canRemoveWholeContent = false;
                                while (i > aStart) {
                                    remove(a[aStart++], dom);
                                }
                            }
                            if (pos > j) {
                                moved = true;
                            }
                            else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = directClone(bNode);
                            }
                            patch(aNode, bNode, dom, context, isSVG);
                            patched++;
                            break;
                        }
                    }
                    if (!canRemoveWholeContent && j > bEnd) {
                        remove(aNode, dom);
                    }
                }
                else if (!canRemoveWholeContent) {
                    remove(aNode, dom);
                }
            }
        }
        else {
            var keyIndex = {};
            // Map keys by their index
            for (i = bStart; i <= bEnd; i++) {
                keyIndex[b[i].key] = i;
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    j = keyIndex[aNode.key];
                    if (j !== void 0) {
                        if (canRemoveWholeContent) {
                            canRemoveWholeContent = false;
                            while (i > aStart) {
                                remove(a[aStart++], dom);
                            }
                        }
                        bNode = b[j];
                        sources[j - bStart] = i + 1;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, context, isSVG);
                        patched++;
                    }
                    else if (!canRemoveWholeContent) {
                        remove(aNode, dom);
                    }
                }
                else if (!canRemoveWholeContent) {
                    remove(aNode, dom);
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (canRemoveWholeContent) {
            removeAllChildren(dom, a);
            mountArrayChildren(b, dom, context, isSVG);
        }
        else {
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === 0) {
                        pos = i + bStart;
                        bNode = b[pos];
                        if (bNode.dom) {
                            b[pos] = bNode = directClone(bNode);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(bNode, null, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                    else if (j < 0 || i !== seq[j]) {
                        pos = i + bStart;
                        bNode = b[pos];
                        nextPos = pos + 1;
                        insertOrAppend(dom, bNode.dom, nextPos < bLength ? b[nextPos].dom : null);
                    }
                    else {
                        j--;
                    }
                }
            }
            else if (patched !== bLeft) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === 0) {
                        pos = i + bStart;
                        bNode = b[pos];
                        if (bNode.dom) {
                            b[pos] = bNode = directClone(bNode);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(bNode, null, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                }
            }
        }
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice();
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

var documentBody = isBrowser ? document.body : null;
function render(input, parentDom, callback) {
    if (input === NO_OP) {
        return;
    }
    var rootInput = parentDom.$V;
    if (isNullOrUndef(rootInput)) {
        if (!isInvalid(input)) {
            if (input.dom) {
                input = directClone(input);
            }
            if (isNull(parentDom.firstChild)) {
                mount(input, parentDom, EMPTY_OBJ, false);
                parentDom.$V = input;
            }
            else {
                hydrate(input, parentDom);
            }
            rootInput = input;
        }
    }
    else {
        if (isNullOrUndef(input)) {
            remove(rootInput, parentDom);
            parentDom.$V = null;
        }
        else {
            if (input.dom) {
                input = directClone(input);
            }
            patch(rootInput, input, parentDom, EMPTY_OBJ, false);
            rootInput = parentDom.$V = input;
        }
    }
    if (LIFECYCLE.length > 0) {
        callAll(LIFECYCLE);
    }
    if (isFunction(callback)) {
        callback();
    }
    if (isFunction(options.renderComplete)) {
        options.renderComplete(rootInput);
    }
    if (rootInput && rootInput.flags & 14 /* Component */) {
        return rootInput.children;
    }
}
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}
function createPortal(children, container) {
    return createVNode(1024 /* Portal */, container, null, children, 0 /* UnknownChildren */, null, isInvalid(children) ? null : children.key, null);
}

var resolvedPromise = typeof Promise === 'undefined' ? null : Promise.resolve();
// raf.bind(window) is needed to work around bug in IE10-IE11 strict mode (TypeError: Invalid calling object)
var fallbackMethod = typeof requestAnimationFrame === 'undefined' ? setTimeout : requestAnimationFrame.bind(window);
function nextTick(fn) {
    if (resolvedPromise) {
        return resolvedPromise.then(fn);
    }
    return fallbackMethod(fn);
}
function queueStateChanges(component, newState, callback, force) {
    if (isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component.$PS;
    if (isNullOrUndef(pending)) {
        component.$PS = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (!component.$PSS && !component.$BR) {
        if (!component.$UPD) {
            component.$PSS = true;
            component.$UPD = true;
            applyState(component, force, callback);
            component.$UPD = false;
        }
        else {
            // Async
            var queue = component.$QU;
            if (isNull(queue)) {
                queue = component.$QU = [];
                nextTick(promiseCallback(component, queue));
            }
            if (isFunction(callback)) {
                queue.push(callback);
            }
        }
    }
    else {
        component.$PSS = true;
        if (component.$BR && isFunction(callback)) {
            LIFECYCLE.push(callback.bind(component));
        }
    }
}
function promiseCallback(component, queue) {
    return function () {
        component.$QU = null;
        component.$UPD = true;
        applyState(component, false, function () {
            for (var i = 0, len = queue.length; i < len; i++) {
                queue[i].call(component);
            }
        });
        component.$UPD = false;
    };
}
function applyState(component, force, callback) {
    if (component.$UN) {
        return;
    }
    if (force || !component.$BR) {
        component.$PSS = false;
        var pendingState = component.$PS;
        var prevState = component.state;
        var nextState = combineFrom(prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component.$PS = null;
        var vNode = component.$V;
        var lastInput = component.$LI;
        var parentDom = lastInput.dom && lastInput.dom.parentNode;
        updateClassComponent(component, nextState, vNode, props, parentDom, context, (vNode.flags & 32 /* SvgElement */) > 0, force, true);
        if (component.$UN) {
            return;
        }
        if ((component.$LI.flags & 1024 /* Portal */) === 0) {
            var dom = component.$LI.dom;
            while (!isNull((vNode = vNode.parentVNode))) {
                if ((vNode.flags & 14 /* Component */) > 0) {
                    vNode.dom = dom;
                }
            }
        }
        if (LIFECYCLE.length > 0) {
            callAll(LIFECYCLE);
        }
    }
    else {
        component.state = component.$PS;
        component.$PS = null;
    }
    if (isFunction(callback)) {
        callback.call(component);
    }
}
var Component = function Component(props, context) {
    this.state = null;
    // Internal properties
    this.$BR = false; // BLOCK RENDER
    this.$BS = true; // BLOCK STATE
    this.$PSS = false; // PENDING SET STATE
    this.$PS = null; // PENDING STATE (PARTIAL or FULL)
    this.$LI = null; // LAST INPUT
    this.$V = null; // VNODE
    this.$UN = false; // UNMOUNTED
    this.$CX = null; // CHILDCONTEXT
    this.$UPD = true; // UPDATING
    this.$QU = null; // QUEUE
    /** @type {object} */
    this.props = props || EMPTY_OBJ;
    /** @type {object} */
    this.context = context || EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate (callback) {
    if (this.$UN) {
        return;
    }
    // Do not allow double render during force update
    queueStateChanges(this, {}, callback, true);
};
Component.prototype.setState = function setState (newState, callback) {
    if (this.$UN) {
        return;
    }
    if (!this.$BS) {
        queueStateChanges(this, newState, callback, false);
    }
    else {
        return;
    }
};
// tslint:disable-next-line:no-empty
Component.prototype.render = function render (nextProps, nextState, nextContext) { };



var JSX = /*#__PURE__*/Object.freeze({

});

var version = "5.3.0";




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cloneVNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);


var isBrowser = !!(typeof window !== 'undefined' && window.document);
var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === 'string' || type === 'number';
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isNull(o) {
    return o === null;
}
function isTrue(o) {
    return o === true;
}
function isUndefined(o) {
    return o === void 0;
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}

/*
 directClone is preferred over cloneVNode and used internally also.
 This function makes Inferno backwards compatible.
 And can be tree-shaked by modern bundlers

 Would be nice to combine this with directClone but could not do it without breaking change
*/
/**
 * Clones given virtual node by creating new instance of it
 * @param {VNode} vNodeToClone virtual node to be cloned
 * @param {Props=} props additional props for new virtual node
 * @param {...*} _children new children for new virtual node
 * @returns {VNode} new virtual node
 */
function cloneVNode(vNodeToClone, props) {
    var _children = [], len$1 = arguments.length - 2;
    while ( len$1-- > 0 ) _children[ len$1 ] = arguments[ len$1 + 2 ];

    if (arguments.length === 3) {
        if (!props) {
            props = {};
        }
        props.children = _children[0];
    }
    else {
        var childrenLen = _children.length;
        if (childrenLen > 0) {
            if (!props) {
                props = {};
            }
            props.children = _children;
        }
    }
    var newVNode;
    var flags = vNodeToClone.flags;
    var className = vNodeToClone.className;
    var key = vNodeToClone.key;
    var ref = vNodeToClone.ref;
    if (props) {
        if (props.className !== void 0) {
            className = props.className;
        }
        if (props.ref !== void 0) {
            ref = props.ref;
        }
        if (props.key !== void 0) {
            key = props.key;
        }
    }
    if (flags & 14 /* Component */) {
        newVNode = Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(flags, vNodeToClone.type, !vNodeToClone.props && !props ? __WEBPACK_IMPORTED_MODULE_0_inferno__["EMPTY_OBJ"] : combineFrom(vNodeToClone.props, props), key, ref);
        var newProps = newVNode.props;
        var newChildren = newProps.children;
        // we need to also clone component children that are in props
        // as the children may also have been hoisted
        if (newChildren) {
            if (isArray(newChildren)) {
                var len = newChildren.length;
                if (len > 0) {
                    var tmpArray = [];
                    for (var i = 0; i < len; i++) {
                        var child = newChildren[i];
                        if (isStringOrNumber(child)) {
                            tmpArray.push(child);
                        }
                        else if (!isInvalid(child) && child.flags) {
                            tmpArray.push(Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["directClone"])(child));
                        }
                    }
                    newProps.children = tmpArray;
                }
            }
            else if (newChildren.flags) {
                newProps.children = Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["directClone"])(newChildren);
            }
        }
        newVNode.children = null;
    }
    else if (flags & 481 /* Element */) {
        if (!props) {
            props = {
                children: vNodeToClone.children
            };
        }
        newVNode = Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["createVNode"])(flags, vNodeToClone.type, className, null, 1 /* HasInvalidChildren */, combineFrom(vNodeToClone.props, props), key, ref);
    }
    else if (flags & 16 /* Text */) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["createTextVNode"])(props ? props.children : vNodeToClone.children);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["normalizeProps"])(newVNode);
}




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createHashHistory__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__createHashHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocationUtils__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PathUtils__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__PathUtils__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__PathUtils__["b"]; });










/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(8);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["g" /* supportsHistory */])();
  var needsHashChangeListener = !Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["h" /* supportsPopStateOnHashChange */])();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);

    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* isExtraneousPopstateEvent */])(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["a"] = (createBrowserHistory);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (resolvePathname);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (valueEqual);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  },
  slash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["f" /* supportsGoWithoutReloadUsingHash */])();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);

    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["b" /* locationsAreEqual */])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location));
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["a"] = (createHashHistory);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathUtils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__(6);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_3__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, createKey()) : Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = __WEBPACK_IMPORTED_MODULE_1__PathUtils__["b" /* createPath */];

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["a"] = (createMemoryHistory);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var pathToRegExp = __webpack_require__(21)

/**
 * Expose `pathToRegexp` as ES6 module
 */
module.exports = pathToRegExp;
module.exports.parse = pathToRegExp.parse
module.exports.compile = pathToRegExp.compile
module.exports.tokensToFunction = pathToRegExp.tokensToFunction
module.exports.tokensToRegExp = pathToRegExp.tokensToRegExp
module.exports['default'] = module.exports;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(22)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var INFERNO_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!INFERNO_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};

module.exports = hoistNonReactStatics;
module.exports.default = module.exports;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoRouter = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavbarTop = function (_Component) {
	_inherits(NavbarTop, _Component);

	function NavbarTop(props) {
		_classCallCheck(this, NavbarTop);

		var _this = _possibleConstructorReturn(this, (NavbarTop.__proto__ || Object.getPrototypeOf(NavbarTop)).call(this, props));

		_this.refresh = _this.refresh.bind(_this);
		return _this;
	}

	_createClass(NavbarTop, [{
		key: 'refresh',
		value: function refresh() {
			this.props.update();
		}
	}, {
		key: 'render',
		value: function render() {
			return (0, _inferno.createVNode)(1, 'div', null, [(0, _inferno.createVNode)(1, 'div', 'top-cntr', (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
				'to': '/',
				'exact': true,
				children: (0, _inferno.createVNode)(1, 'div', 'icon', null, 1, {
					'onclick': this.refresh
				})
			}), 2), (0, _inferno.createVNode)(1, 'div', 'bottom-cntr', (0, _inferno.createVNode)(1, 'div', 'nav-btns-cntr', (0, _inferno.createComponentVNode)(2, _infernoRouter.NavLink, {
				'to': '/',
				'exact': true,
				'activeClassName': 'active',
				children: (0, _inferno.createVNode)(1, 'div', 'nav-season-btn', (0, _inferno.createTextVNode)(' Home '), 2, {
					'onclick': this.refresh
				})
			}), 2), 2)], 4, {
				'id': 'nav-bar-top'
			});
		}
	}]);

	return NavbarTop;
}(_inferno.Component);

exports.default = NavbarTop;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoRouter = __webpack_require__(1);

var _SearchBar = __webpack_require__(26);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _PlayersTable = __webpack_require__(27);

var _PlayersTable2 = _interopRequireDefault(_PlayersTable);

var _GamesTable = __webpack_require__(29);

var _GamesTable2 = _interopRequireDefault(_GamesTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAIN_CNTR_BREAKPOINT = 1240;

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.state = {
			searchValue: '',
			currSeason: 0,
			height: window.innerHeight - 161
		};

		_this.updateSearchBarValue = _this.updateSearchBarValue.bind(_this);
		_this.updateHeights = _this.updateHeights.bind(_this);
		_this.search = _this.search.bind(_this);
		return _this;
	}

	_createClass(Home, [{
		key: 'updateHeights',
		value: function updateHeights() {
			var height = 0;
			if (window.innerWidth > MAIN_CNTR_BREAKPOINT) {
				var left = document.getElementById('left-cntr');
				var right = document.getElementById('right-cntr');
				if (left !== null && right !== null) {
					height = Math.max(left.clientHeight, right.clientHeight);
				} else {
					height = window.innerHeight - 161;
				}
			}

			this.setState({
				height: height
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({});
			window.addEventListener("resize", this.updateHeights);
		}
	}, {
		key: 'updateSearchBarValue',
		value: function updateSearchBarValue(val) {
			this.state.searchValue = val;
			window.removeEventListener("resize", this.updateHeights);
		}
	}, {
		key: 'search',
		value: function search() {
			var search = this.state.searchValue;
			var players = search.split(",");
			for (var i = 0; i < players.length; ++i) {
				var player = players[i].trim(" ");
				players[i] = player;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var heightStyle = {
				minHeight: this.state.height
			};

			var currMatches = this.props.ongoing.length == 0 ? null : (0, _inferno.createComponentVNode)(2, _GamesTable2.default, {
				'id': 'current-games-table-cntr',
				'header': "Current Matches",
				'getPlayerById': this.props.getPlayerById,
				'players': this.props.players,
				'matches': this.props.ongoing,
				'updateHeights': this.updateHeights
			});
			return (0, _inferno.createVNode)(1, 'div', null, [(0, _inferno.createVNode)(1, 'div', 'top-cntr', [(0, _inferno.createVNode)(1, 'div', 'header-cntr', [(0, _inferno.createTextVNode)('Warcraft 3 Banjoball Elo, Season '), this.state.currSeason + 1], 0), (0, _inferno.createVNode)(1, 'div', 'search-cntr', (0, _inferno.createComponentVNode)(2, _SearchBar2.default, {
				'updateValue': this.updateSearchBarValue,
				'value': this.state.value,
				'onSearch': this.search
			}), 2)], 4), (0, _inferno.createVNode)(1, 'div', null, (0, _inferno.createComponentVNode)(2, _PlayersTable2.default, {
				'db': this.props.db,
				'players': this.props.players,
				'matches': this.props.matches,
				'updateHeights': this.updateHeights
			}), 2, {
				'id': 'right-cntr',
				'style': heightStyle
			}), (0, _inferno.createVNode)(1, 'div', null, [currMatches, (0, _inferno.createComponentVNode)(2, _GamesTable2.default, {
				'id': 'games-table-cntr',
				'header': "Match History",
				'getPlayerById': this.props.getPlayerById,
				'players': this.props.players,
				'matches': this.props.matches,
				'updateHeights': this.updateHeights
			})], 0, {
				'id': 'left-cntr',
				'style': heightStyle
			})], 4, {
				'id': 'home-cntr'
			});
		}
	}]);

	return Home;
}(_inferno.Component);

exports.default = Home;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoRouter = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_Component) {
	_inherits(SearchBar, _Component);

	function SearchBar(props) {
		_classCallCheck(this, SearchBar);

		var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

		_this.state = {
			active: false,
			enterDown: false
		};

		_this.onInput = _this.onInput.bind(_this);
		_this.onFocus = _this.onFocus.bind(_this);
		_this.onBlur = _this.onBlur.bind(_this);
		_this.onKeyDown = _this.onKeyDown.bind(_this);
		_this.onKeyUp = _this.onKeyUp.bind(_this);
		return _this;
	}

	_createClass(SearchBar, [{
		key: 'onInput',
		value: function onInput(evt) {
			this.props.updateValue(evt.target.value);
			this.setState({});
		}
	}, {
		key: 'onFocus',
		value: function onFocus(evt) {
			this.setState({ active: true });
		}
	}, {
		key: 'onBlur',
		value: function onBlur(evt) {
			this.setState({ active: false });
		}
	}, {
		key: 'onKeyDown',
		value: function onKeyDown(evt) {
			if (evt.key === "Enter") {
				this.setState({ enterDown: true });
			}
		}
	}, {
		key: 'onKeyUp',
		value: function onKeyUp(evt) {
			if (evt.key === "Enter" && this.state.enterDown) {
				this.setState({ enterDown: false });
				this.props.onSearch();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var btnClass = 'search-btn' + (this.state.active ? ' active' : '') + (this.state.enterDown ? ' down' : '');
			return (0, _inferno.createVNode)(1, 'div', null, [(0, _inferno.createVNode)(1, 'div', btnClass, (0, _inferno.createTextVNode)('Search'), 2, {
				'onClick': this.props.onSearch
			}), (0, _inferno.createVNode)(64, 'input', 'search-input', null, 1, {
				'type': 'text',
				'placeholder': 'Player 1, Player 2, Player 3...',
				'value': this.props.value,
				'onInput': this.onInput,
				'onFocus': this.onFocus,
				'onBlur': this.onBlur,
				'onKeyDown': this.onKeyDown,
				'onKeyUp': this.onKeyUp
			})], 4);
		}
	}]);

	return SearchBar;
}(_inferno.Component);

exports.default = SearchBar;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoRouter = __webpack_require__(1);

var _PlayersTableRow = __webpack_require__(28);

var _PlayersTableRow2 = _interopRequireDefault(_PlayersTableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getPosition(element) {
	var yPosition = 0;

	while (element) {
		yPosition += element.offsetTop - element.scrollTop + element.clientTop;
		element = element.offsetParent;
	}

	return yPosition;
}

var PlayersTable = function (_Component) {
	_inherits(PlayersTable, _Component);

	function PlayersTable(props) {
		_classCallCheck(this, PlayersTable);

		var _this = _possibleConstructorReturn(this, (PlayersTable.__proto__ || Object.getPrototypeOf(PlayersTable)).call(this, props));

		_this.state = {
			offset: 0
		};

		_this.onScroll = _this.onScroll.bind(_this);
		return _this;
	}

	_createClass(PlayersTable, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.updateHeights();
			root.addEventListener('scroll', this.onScroll);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			root.removeEventListener('scroll', this.onScroll, false);
		}
	}, {
		key: 'onScroll',
		value: function onScroll() {
			var cntr = document.getElementById("player-table-cntr-inner");
			var bnd = cntr.getBoundingClientRect();
			var offset = Math.min(bnd.height - 74, Math.max(0, -bnd.top));
			this.setState({
				offset: offset
			});
		}
	}, {
		key: 'displayLeaderboardRows',
		value: function displayLeaderboardRows() {
			var rows = [];
			for (var i = 0; i < this.props.players.length; ++i) {
				var rank = i + 1;
				var player = this.props.players[i];
				var name = player.name;
				var elo = player.elo;
				var wins = player.win;
				var loss = player.loss;
				rows.push((0, _inferno.createComponentVNode)(2, _PlayersTableRow2.default, {
					'rank': rank,
					'name': name,
					'elo': elo,
					'wins': wins,
					'loss': loss,
					'alt': rank % 2 == 0
				}));
			}

			return rows;
		}
	}, {
		key: 'render',
		value: function render() {
			var sticky = {
				top: this.state.offset
			};
			return (0, _inferno.createVNode)(1, 'div', null, [(0, _inferno.createVNode)(1, 'div', 'player-table-title', (0, _inferno.createTextVNode)('Leaderboard'), 2), (0, _inferno.createVNode)(1, 'div', null, [this.displayLeaderboardRows(), (0, _inferno.createVNode)(1, 'div', null, [(0, _inferno.createVNode)(1, 'div', 'rank', (0, _inferno.createTextVNode)(' Rank '), 2), (0, _inferno.createVNode)(1, 'div', 'name', (0, _inferno.createTextVNode)(' Name '), 2), (0, _inferno.createVNode)(1, 'div', 'elo', (0, _inferno.createTextVNode)(' Elo '), 2), (0, _inferno.createVNode)(1, 'div', 'winloss', (0, _inferno.createTextVNode)(' Win/Loss '), 2)], 4, {
				'id': 'player-table-header',
				'style': sticky
			})], 0, {
				'id': 'player-table-cntr-inner'
			})], 4, {
				'id': 'player-table-cntr-outer'
			});
		}
	}]);

	return PlayersTable;
}(_inferno.Component);

exports.default = PlayersTable;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoRouter = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayersTableRow = function (_Component) {
	_inherits(PlayersTableRow, _Component);

	function PlayersTableRow(props) {
		_classCallCheck(this, PlayersTableRow);

		var _this = _possibleConstructorReturn(this, (PlayersTableRow.__proto__ || Object.getPrototypeOf(PlayersTableRow)).call(this, props));

		var cntrClass = 'player-table-row' + (_this.props.alt ? ' alt' : '');
		var games = _this.props.wins + _this.props.loss;
		var gamesSafe = Math.max(1, games);
		var winrate = (Math.floor(_this.props.wins / gamesSafe * 1000) / 10).toFixed(1);
		var winbarStyle = {
			width: winrate + '%'
		};

		var wins = _this.props.wins > 0 ? (0, _inferno.createVNode)(1, 'span', 'txt left', [(0, _inferno.createTextVNode)('  '), _this.props.wins + "W", (0, _inferno.createTextVNode)(' ')], 0) : null;
		var loss = _this.props.loss > 0 ? (0, _inferno.createVNode)(1, 'span', 'txt right', [(0, _inferno.createTextVNode)(' '), _this.props.loss + "L", (0, _inferno.createTextVNode)(' ')], 0) : null;

		_this.state = {
			cntrClass: cntrClass,
			wins: wins,
			loss: loss,
			winrate: winrate,
			winbarStyle: winbarStyle
		};
		return _this;
	}

	_createClass(PlayersTableRow, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState, context) {
			return false;
		}
	}, {
		key: 'render',
		value: function render() {
			return (0, _inferno.createVNode)(1, 'div', this.state.cntrClass, [(0, _inferno.createVNode)(1, 'div', 'rank', this.props.rank, 0), (0, _inferno.createVNode)(1, 'div', 'name', this.props.name, 0), (0, _inferno.createVNode)(1, 'div', 'elo', this.props.elo, 0), (0, _inferno.createVNode)(1, 'div', 'winloss', [(0, _inferno.createVNode)(1, 'div', 'winloss-bar', [(0, _inferno.createVNode)(1, 'div', 'win-bar', null, 1, {
				'style': this.state.winbarStyle
			}), (0, _inferno.createVNode)(1, 'div', 'txt-cntr', [this.state.wins, this.state.loss], 0)], 4), (0, _inferno.createVNode)(1, 'div', 'winloss-rate', this.state.winrate + "%", 0)], 4)], 4);
		}
	}]);

	return PlayersTableRow;
}(_inferno.Component);

exports.default = PlayersTableRow;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoRouter = __webpack_require__(1);

var _GamesTableRow = __webpack_require__(30);

var _GamesTableRow2 = _interopRequireDefault(_GamesTableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getPosition(element) {
	var yPosition = 0;

	while (element) {
		yPosition += element.offsetTop - element.scrollTop + element.clientTop;
		element = element.offsetParent;
	}

	return yPosition;
}

var CurrentGamesTable = function (_Component) {
	_inherits(CurrentGamesTable, _Component);

	function CurrentGamesTable(props) {
		_classCallCheck(this, CurrentGamesTable);

		var _this = _possibleConstructorReturn(this, (CurrentGamesTable.__proto__ || Object.getPrototypeOf(CurrentGamesTable)).call(this, props));

		_this.state = {
			offset: 0
		};

		_this.onScroll = _this.onScroll.bind(_this);
		return _this;
	}

	_createClass(CurrentGamesTable, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.updateHeights();
			root.addEventListener('scroll', this.onScroll);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			root.removeEventListener('scroll', this.onScroll, false);
		}
	}, {
		key: 'onScroll',
		value: function onScroll() {
			var cntr = document.getElementById(this.props.id + '-inner');
			var bnd = cntr.getBoundingClientRect();
			var offset = Math.min(bnd.height - 145, Math.max(0, -bnd.top));
			this.setState({
				offset: offset
			});
		}
	}, {
		key: 'displayMatchRows',
		value: function displayMatchRows() {
			var rows = [];
			for (var i = 0; i < this.props.matches.length; ++i) {
				var game = this.props.matches[i];
				var players = [game.p1, game.p2, game.p3, game.p4, game.p5, game.p6, game.p7, game.p8];
				for (var j = 0; j < players.length; ++j) {
					players[j] = this.props.getPlayerById(players[j]).name;
				}
				rows.push((0, _inferno.createComponentVNode)(2, _GamesTableRow2.default, {
					'alt': i % 2 == 1,
					'match': game.ID,
					'p1': players[0],
					'p2': players[1],
					'p3': players[2],
					'p4': players[3],
					'p5': players[4],
					'p6': players[5],
					'p7': players[6],
					'p8': players[7],
					's1': game.s1,
					's2': game.s2
				}));
			}

			return rows;
		}
	}, {
		key: 'render',
		value: function render() {
			var sticky = {
				top: this.state.offset
			};
			var outer = this.props.id + '-outer';
			var inner = this.props.id + '-inner';

			return (0, _inferno.createVNode)(1, 'div', null, [(0, _inferno.createVNode)(1, 'div', 'cntr-title', this.props.header, 0), (0, _inferno.createVNode)(1, 'div', null, [(0, _inferno.createVNode)(1, 'div', 'table-header', [(0, _inferno.createVNode)(1, 'div', 'match', (0, _inferno.createTextVNode)(' Match '), 2), (0, _inferno.createVNode)(1, 'div', 'team1', (0, _inferno.createTextVNode)(' Team 1 '), 2), (0, _inferno.createVNode)(1, 'div', 'scores', (0, _inferno.createTextVNode)(' Scores '), 2), (0, _inferno.createVNode)(1, 'div', 'team2', (0, _inferno.createTextVNode)(' Team 2 '), 2)], 4, {
				'style': sticky
			}), this.displayMatchRows()], 0, {
				'id': inner
			})], 4, {
				'id': outer
			});
		}
	}]);

	return CurrentGamesTable;
}(_inferno.Component);

exports.default = CurrentGamesTable;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoRouter = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamesTableRow = function (_Component) {
	_inherits(GamesTableRow, _Component);

	function GamesTableRow(props) {
		_classCallCheck(this, GamesTableRow);

		var _this = _possibleConstructorReturn(this, (GamesTableRow.__proto__ || Object.getPrototypeOf(GamesTableRow)).call(this, props));

		var cntrClass = 'table-row' + (_this.props.alt ? ' alt' : '');

		var scores = _this.props.s1 + ' - ' + _this.props.s2;
		if (_this.props.s1 == null || _this.props.s2 == null) {
			scores = "vs";
		}

		_this.state = {
			cntrClass: cntrClass,
			scores: scores
		};
		return _this;
	}

	_createClass(GamesTableRow, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState, context) {
			return false;
		}
	}, {
		key: 'render',
		value: function render() {

			return (0, _inferno.createVNode)(1, 'div', this.state.cntrClass, [(0, _inferno.createVNode)(1, 'div', 'match', this.props.match, 0), (0, _inferno.createVNode)(1, 'div', 'team1', [(0, _inferno.createVNode)(1, 'div', 'player', this.props.p1, 0), (0, _inferno.createVNode)(1, 'div', 'player', this.props.p2, 0), (0, _inferno.createVNode)(1, 'div', 'player', this.props.p3, 0), (0, _inferno.createVNode)(1, 'div', 'player', this.props.p4, 0)], 4), (0, _inferno.createVNode)(1, 'div', 'scores', this.state.scores, 0), (0, _inferno.createVNode)(1, 'div', 'team1', [(0, _inferno.createVNode)(1, 'div', 'player', this.props.p5, 0), (0, _inferno.createVNode)(1, 'div', 'player', this.props.p6, 0), (0, _inferno.createVNode)(1, 'div', 'player', this.props.p7, 0), (0, _inferno.createVNode)(1, 'div', 'player', this.props.p8, 0)], 4)], 4);
		}
	}]);

	return GamesTableRow;
}(_inferno.Component);

exports.default = GamesTableRow;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoRouter = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FRAMES_PER_DOT = 20;
var DOTS = 3;

var Loading = function (_Component) {
	_inherits(Loading, _Component);

	function Loading(props) {
		_classCallCheck(this, Loading);

		return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));
	}

	_createClass(Loading, [{
		key: 'render',
		value: function render() {
			return (0, _inferno.createVNode)(1, 'div', null, (0, _inferno.createVNode)(1, 'div', 'loading-outer', (0, _inferno.createVNode)(1, 'div', 'loading-inner'), 2), 2, {
				'id': 'loading-screen'
			});
		}
	}]);

	return Loading;
}(_inferno.Component);

exports.default = Loading;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoRouter = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Season = function (_Component) {
	_inherits(Season, _Component);

	function Season(props) {
		_classCallCheck(this, Season);

		return _possibleConstructorReturn(this, (Season.__proto__ || Object.getPrototypeOf(Season)).call(this, props));
	}

	_createClass(Season, [{
		key: 'render',
		value: function render() {
			return (0, _inferno.createVNode)(1, 'div', null, null, 1, {
				'id': 'season-cntr'
			});
		}
	}]);

	return Season;
}(_inferno.Component);

exports.default = Season;

/***/ })
/******/ ]);