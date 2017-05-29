// https://pkgzip.com/?shamjs@0.4.1,lodash.shuffle@4.2.0,extend@3.0.1
// The following objects are now available!:

// window.pkgzip['shamjs']
// window.pkgzip['lodash.shuffle']
// window.pkgzip['extend']

// ============
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var integer = __webpack_require__(3)
var shuffle = __webpack_require__(6);
module.exports = function pick (data, count) {
    if (typeof count === 'number') {
        if (count > data.length) {
            count = data.length
        }
        if (count < 2) {
            console.warn('node_modules/shamjs/lib/random/pick.js: pick(data, count) count must > 1')
            count = 2
        }
        var type = 'array'
        if (typeof data === 'string') {
            data = data.split('')
            type = 'string'
        }
        var result = shuffle(data).slice(0, count)
        if (type === 'string') {
            result = result.join('')
        }
        return result
    }
    else {
        return data[integer(data.length-1)]
    }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ['0' , '1', '2', '3', '4', '5', '6', '7', '8', '9']
// '鐨勪竴鏄湪...璇ラ搧浠蜂弗榫欓'.split('')
var commonChinese = '鐨勪竴鏄湪涓嶄簡鏈夊拰浜鸿繖涓ぇ涓轰笂涓浗鎴戜互瑕佷粬鏃舵潵鐢ㄤ滑鐢熷埌浣滃湴浜庡嚭灏卞垎瀵规垚浼氬彲涓诲彂骞村姩鍚屽伐涔熻兘涓嬭繃瀛愯浜х闈㈣€屾柟鍚庡瀹氳瀛︽硶鎵€姘戝緱缁忓崄涓変箣杩涚潃绛夐儴搴﹀鐢靛姏閲屽姘村寲楂樿嚜浜岀悊璧峰皬鐗╃幇瀹炲姞閲忛兘涓や綋鍒舵満褰撲娇鐐逛粠涓氭湰鍘绘妸鎬уソ搴斿紑瀹冨悎杩樺洜鐢卞叾浜涚劧鍓嶅澶╂斂鍥涙棩閭ｇぞ涔変簨骞冲舰鐩稿叏琛ㄩ棿鏍蜂笌鍏冲悇閲嶆柊绾垮唴鏁版蹇冨弽浣犳槑鐪嬪師鍙堜箞鍒╂瘮鎴栦絾璐ㄦ皵绗悜閬撳懡姝ゅ彉鏉″彧娌＄粨瑙ｉ棶鎰忓缓鏈堝叕鏃犵郴鍐涘緢鎯呰€呮渶绔嬩唬鎯冲凡閫氬苟鎻愮洿棰樺厷绋嬪睍浜旀灉鏂欒薄鍛橀潻浣嶅叆甯告枃鎬绘鍝佸紡娲昏鍙婄鐗逛欢闀挎眰鑰佸ご鍩鸿祫杈规祦璺骇灏戝浘灞辩粺鎺ョ煡杈冨皢缁勮璁″埆濂规墜瑙掓湡鏍硅杩愬啘鎸囧嚑涔濆尯寮烘斁鍐宠タ琚共鍋氬繀鎴樺厛鍥炲垯浠诲彇鎹闃熷崡缁欒壊鍏夐棬鍗充繚娌诲寳閫犵櫨瑙勭儹棰嗕竷娴峰彛涓滃鍣ㄥ帇蹇椾笘閲戝浜夋祹闃舵补鎬濇湳鏋佷氦鍙楄仈浠€璁ゅ叚鍏辨潈鏀惰瘉鏀规竻宸辩編鍐嶉噰杞洿鍗曢鍒囨墦鐧芥暀閫熻姳甯﹀畨鍦鸿韩杞︿緥鐪熷姟鍏蜂竾姣忕洰鑷宠揪璧扮Н绀鸿澹版姤鏂楀畬绫诲叓绂诲崕鍚嶇‘鎵嶇寮犱俊椹妭璇濈背鏁寸┖鍏冨喌浠婇泦娓╀紶鍦熻姝ョ兢骞跨煶璁伴渶娈电爺鐣屾媺鏋楀緥鍙笖绌惰瓒婄粐瑁呭奖绠椾綆鎸侀煶浼椾功甯冨瀹瑰効椤婚檯鍟嗛潪楠岃繛鏂繁闅捐繎鐭垮崈鍛ㄥ绱犳妧澶囧崐鍔為潚鐪佸垪涔犲搷绾︽敮鑸彶鎰熷姵渚垮洟寰€閰稿巻甯傚厠浣曢櫎娑堟瀯搴滅О澶噯绮惧€煎彿鐜囨棌缁村垝閫夋爣鍐欏瓨鍊欐瘺浜插揩鏁堟柉闄㈡煡姹熷瀷鐪肩帇鎸夋牸鍏绘槗缃淳灞傜墖濮嬪嵈涓撶姸鑲插巶浜瘑閫傚睘鍦嗗寘鐏綇璋冩弧鍘垮眬鐓у弬绾㈢粏寮曞惉璇ラ搧浠蜂弗榫欓'.split('')
var color = '0123456789ABCDEF'
var tld = (
    // 鍩熷悕鍚庣紑
    'com net org edu gov int mil cn ' +
    // 鍥藉唴鍩熷悕
    'com.cn net.cn gov.cn org.cn ' +
    // 鏂板浗闄呭煙鍚�
    'tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ' +
    // 涓栫晫鍚勫浗鍩熷悕鍚庣紑
    'ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw'
).split(' ')
module.exports = {
    alphabet: alphabet,
    commonChinese: commonChinese,
    number: number,
    character: alphabet.concat(number),
    color: color,
    tld: tld,
    name: {
        first: {
            male: [
                "Nimo", "James", "John", "Robert", "Michael", "William",
                "David", "Richard", "Charles", "Joseph", "Thomas",
                "Christopher", "Daniel", "Paul", "Mark", "Donald",
                "George", "Kenneth", "Steven", "Edward", "Brian",
                "Ronald", "Anthony", "Kevin", "Jason", "Matthew",
                "Gary", "Timothy", "Jose", "Larry", "Jeffrey",
                "Frank", "Scott", "Eric"
            ],
            female: [
    			"Judy", "Mary", "Patricia", "Linda", "Barbara", "Elizabeth",
    			"Jennifer", "Maria", "Susan", "Margaret", "Dorothy",
    			"Lisa", "Nancy", "Karen", "Betty", "Helen",
    			"Sandra", "Donna", "Carol", "Ruth", "Sharon",
    			"Michelle", "Laura", "Sarah", "Kimberly", "Deborah",
    			"Jessica", "Shirley", "Cynthia", "Angela", "Melissa",
    			"Brenda", "Amy", "Anna"
    		]
        },
        last: [
			"Smith", "Johnson", "Williams", "Brown", "Jones",
			"Miller", "Davis", "Garcia", "Rodriguez", "Wilson",
			"Martinez", "Anderson", "Taylor", "Thomas", "Hernandez",
			"Moore", "Martin", "Jackson", "Thompson", "White",
			"Lopez", "Lee", "Gonzalez", "Harris", "Clark",
			"Lewis", "Robinson", "Walker", "Perez", "Hall",
			"Young", "Allen"
		]
    },
    cname: {
        first: (
			'寮� 椤� 鏉� 鍒� 闄� 鏉� 璧� 榛� 鍛� 鍚� ' +
			'寰� 瀛� 鑳� 鏈� 楂� 鏋� 浣� 閮� 椹� 缃� ' +
			'姊� 瀹� 閮� 璋� 闊� 鍞� 鍐� 浜� 钁� 钀� ' +
			'绋� 鏇� 琚� 閭� 璁� 鍌� 娌� 鏇� 褰� 鍚� ' +
			'鑻� 鍗� 钂� 钄� 璐� 涓� 榄� 钖� 鍙� 闃� ' +
			'浣� 娼� 鏉� 鎴� 澶� 閿� 姹� 鐢� 浠� 濮� ' +
			'鑼� 鏂� 鐭� 濮� 璋� 寤� 閭� 鐔� 閲� 闄� ' +
			'閮� 瀛� 鐧� 宕� 搴� 姣� 閭� 绉� 姹� 鍙� ' +
			'渚� 閭� 瀛� 榫� 涓� 娈� 闆� 閽� 姹� 鍌� ' +
			'灏� 榛� 鏄� 甯� 姝� 涔� 璐� 璧� 榫� 鏂� ' +
            '鎱曞 闀垮瓩 鍗庡 绔湪 涓�'
		).split(' '),
        last: (
			'濯� 褰� 鎬� 鑿� 娑� 鑻� 璇� 棣� 甯�' +
			'濡� 钀� 棰� 鐞� 閫� 钖� 渚� 鑺� 鑸�' +
			'鐟� 鐒� 鐟� 闆� ' +
            '鑻ラ洦 闈欓 姊︽磥 鍑岃枃 缇庤幉 闆呴潤 闆附 渚濆 闆呰姍 ' +
            '浼� 鍒� 鍕� 姣� 淇� 宄� 寮� 鍐� 骞� 淇� 涓� 鏂� 杈� 鍔� 鏄� ' +
            '姘� 鍋� 涓� 骞� 蹇� 涔� 鍏� 鑹� 娴� 灞� 浠� 娉� 瀹� 璐� 绂� ' +
            '鐢� 榫� 鍏� 鍏� 鍥� 鑳� 瀛� 绁� 鎵� 鍙� 姝� 鏂� 鍒� 娓� 椋� ' +
            '褰� 瀵� 椤� 淇� 瀛� 鏉� 娑� 鏄� 鎴� 搴� 鏄� 鍏� 澶� 杈� 瀹� 宀� ' +
            '涓� 鑼� 杩� 鏋� 鏈� 鍧� 鍜� 褰� 鍗� 璇� 鍏� 鏁� 闇� 鎸� 澹� 浼� ' +
            '鎬� 缇� 璞� 蹇� 閭� 鎵� 涔� 缁� 鍔� 鏉� 鍠� 鍘� 搴� 纾� 姘� 鍙� ' +
            '瑁� 娌� 鍝� 姹� 瓒� 娴� 浜� 鏀� 璋� 浜� 濂� 鍥� 涔� 杞� 缈� 鏈� ' +
            '浼� 瀹� 瑷€ 鑻� 楦� 鏈� 鏂� 姊� 鏍� 缁� 鍚� 鍏� 浼� 缈� 鏃� 楣� 娉� ' +
            '鏅� 杈� 澹� 浠� 寤� 瀹� 鑷� 鏍� 鐐� 寰� 琛� 鏃� 娉� 鐩� 闆� 鐞� 閽�'
		).split(' ')
    }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(4)
var loop = function (count, fn, baseIndex) {
    var result = []
    for (var i = 0; i < count; i++) {
        result.push(
            fn(i)
        )
    }
    return result
}
var generator = function (count, create) {
    return loop(count, create)
}
module.exports = generator


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var random = function (range) {
    if (range === 0) {
        return 0
    }
    return Math.floor(Math.random()*(range+1))
}
// 閬垮厤寰幆 require 鏃犳硶鍙栧€硷紝鐩存帴 require 鏂囦欢
var minMax = __webpack_require__(13)
module.exports = function integer () {
    var settings = minMax(arguments)
    return settings.min + random(settings.max - settings.min)
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var integer = __webpack_require__(3)
module.exports = {
    settings: {
        /**
         *  @param arg[0]min {number} min value  or count
         *  @param arg[1]max {number} max value
         */
        countOrRange: function (arg) {
            var count
            if (typeof arg[1] === 'undefined') {
                count = arg[0]
            }
            else {
                count = integer(arg[0], arg[1])
            }
            return count
        },
        minMax: __webpack_require__(13)
    }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    iteratorSymbol = Symbol ? Symbol.iterator : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeKeys = overArg(Object.keys, Object),
    nativeRandom = Math.random;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Gets `n` random elements at unique keys from `collection` up to the
 * size of `collection`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @param {number} [n=1] The number of elements to sample.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the random elements.
 * @example
 *
 * _.sampleSize([1, 2, 3], 2);
 * // => [3, 1]
 *
 * _.sampleSize([1, 2, 3], 4);
 * // => [2, 3, 1]
 */
function sampleSize(collection, n, guard) {
  var index = -1,
      result = toArray(collection),
      length = result.length,
      lastIndex = length - 1;

  if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
    n = 1;
  } else {
    n = baseClamp(toInteger(n), 0, length);
  }
  while (++index < n) {
    var rand = baseRandom(index, lastIndex),
        value = result[rand];

    result[rand] = result[index];
    result[index] = value;
  }
  result.length = n;
  return result;
}

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  return sampleSize(collection, MAX_ARRAY_LENGTH);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (iteratorSymbol && value[iteratorSymbol]) {
    return iteratorToArray(value[iteratorSymbol]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

  return func(value);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = shuffle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(5)
var query = function (data, request) {
    request = extend(true, {
       page: 1,
       pageSize: 10
   }, request)
   var filterType = typeof request.filter
   if (filterType === 'object' && Array.isArray(request.filter)) {
       filterType = 'array'
   }
   switch(filterType) {
       case 'undefined':
       break
       case 'function':
            data = data.filter(request.filter)
       break
       default:
            throw new Error('node_modules/shamjs/lib/query.js: query(data, request) request.filter must be a function')
   }
   if (typeof request.sort === 'function') {
       data = data.sort(request.sort)
   }
   var dataCount = data.length
   var pageCount = Math.ceil(dataCount/request.pageSize)
   var page = request.page
   if (page > pageCount) {
       page = pageCount
   }
   // query data
   var startIndex = ( page - 1) * request.pageSize
   var endIndex = page * request.pageSize
   var data = data.slice(startIndex, endIndex)
   return {
       page: page,
       dataCount: dataCount,
       pageCount: pageCount,
       data: data
   }
}
module.exports = query
module.exports.full = __webpack_require__(16)
module.exports.fuzzy = __webpack_require__(17)


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var integer = __webpack_require__(3)
module.exports = function boolean (percentage) {
    percentage = parseInt(percentage, 10)
    if (isNaN(percentage)) {
        percentage = 50
    }
    if (percentage < 0 ) {
        percentage = 0
    } else if (percentage > 100 ) {
        percentage = 100
    }
    return integer(100) <= percentage
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var pick = __webpack_require__(0)
var map = __webpack_require__(1)
var tld = __webpack_require__(24)
var word = __webpack_require__(12)
var g = __webpack_require__(2)
var integer = __webpack_require__(3)
module.exports = function domain () {
    return g(
            integer(1, 5),
            function () {
                return pick(map.character)
            }
        ).join('') +
        '.' +
        tld()
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    integer: __webpack_require__(3),
    pick: __webpack_require__(0),
    word: __webpack_require__(12),
    cword: __webpack_require__(20),
    id: __webpack_require__(22),
    color: __webpack_require__(19),
    boolean: __webpack_require__(8),
    bool: __webpack_require__(8),
    domain: __webpack_require__(9),
    name: __webpack_require__(11),
    cname: __webpack_require__(18),
    email: __webpack_require__(21),
    time: __webpack_require__(23),
    uh: __webpack_require__(25)
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(1)
var pick = __webpack_require__(0)
module.exports = function (middle) {
	var names = []
	var allFirstName = map.name.first.male.concat(map.name.first.female)
	names.push(pick(allFirstName))
	if (middle) {
		names.push(pick(allFirstName))
	}
	names.push(pick(map.name.last))
	return names.join(' ')
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(1)
var pick = __webpack_require__(0)
var generator = __webpack_require__(2)
var util = __webpack_require__(4)
module.exports = function word (min, max) {
    if (typeof arguments[0] === 'undefined') {
        arguments[0] = 5
    }
    return generator(util.settings.countOrRange(arguments), function () {
        return pick(map.alphabet)
    }).join('')
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 *  @param arg[0]min {number} min value
 *  @param arg[1]max {number} max value
 */
module.exports = function minMax (arg) {
    var min
    var max
    // USE:// integer(10) === integer(0, 10)
    if (arg.length === 1) {
        min = 0
        max = arg[0]
    }
    else {
        min = arg[0]
        max = arg[1]
    }
    min = typeof min === 'undefined'? 0: min
    max = typeof max === 'undefined'? 99999999999999: max
    if (max < min) {
        !(function(minNumber, maxNumber) {
            min = maxNumber
            max = minNumber
        })(min, max)
    }
    return {
        min: min,
        max: max
    }
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    random: __webpack_require__(10),
    r: __webpack_require__(10),
    generator: __webpack_require__(2),
    g: __webpack_require__(2),
    query: __webpack_require__(7),
    q: __webpack_require__(7)
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

window.pkgzip = {};
window.pkgzip['shamjs'] = __webpack_require__(14);
window.pkgzip['lodash.shuffle'] = __webpack_require__(6);
window.pkgzip['extend'] = __webpack_require__(5);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function full (content, search) {
    content = content || ''
    if (!Boolean(search)) {
        return true
    }
    content = String(content).trim()
    search = String(search).trim()
    return content === search
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function fuzzy (content, search) {
    content = content || ''
    if (!Boolean(search)) {
        return true
    }
    content = String(content).trim()
    search = String(search).trim()
    return content.indexOf(search) !== -1
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(1)
var pick = __webpack_require__(0)
module.exports = function (middle) {
	var names = []
	names.push(pick(map.cname.first))
	names.push(pick(map.cname.last))
	return names.join('')
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(1)
var pick = __webpack_require__(0)
var generator = __webpack_require__(2)
var util = __webpack_require__(4)
module.exports = function color () {
    return '#' + generator(6, function () {
        return pick(map.color)
    }).join('')
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(1)
var pick = __webpack_require__(0)
var generator = __webpack_require__(2)
var util = __webpack_require__(4)
module.exports = function word () {
    if (typeof arguments[0] === 'undefined') {
        arguments[0] = 5
    }
    return generator(util.settings.countOrRange(arguments), function () {
        return pick(map.commonChinese)
    }).join('')
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var domain = __webpack_require__(9)
var name = __webpack_require__(11)
module.exports = function () {
    return name().replace(' ','').toLowerCase() + '@' + domain()
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var integer = __webpack_require__(3)
var map = __webpack_require__(1)
var pick = __webpack_require__(0)
var generator = __webpack_require__(2)
module.exports = function id (count) {
    if (typeof count === 'undefined') {
        count = 24
    }
    return generator(count, function () {
        return pick(map.character)
    }).join('')
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var integer = __webpack_require__(3)
var _randomDate = function (min, max) {
    min = min === undefined ? new Date(0) : min
    max = max === undefined ? new Date() : max
    if (typeof min !== 'object') {
        min = new Date(min)
    }
    if (typeof max !== 'object') {
        max = new Date(max)
    }
    return new Date(
        integer(
            min.getTime(),
            max.getTime()
        )
    )
}
module.exports = function (min, max) {
    return _randomDate(min, max).getTime()
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var pick = __webpack_require__(0)
var map = __webpack_require__(1)
module.exports = function tld () {
    return pick(map.tld)
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var unsplash = __webpack_require__(26)
module.exports = unsplash


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var domain = "https://unsplash.it"
var uh = function (g, width, height, param) {
    var path = ['https://unsplash.it']
    var i
    for(i=0; i<arguments.length; i++) {
        var item = arguments[i]
        item = String(item)
        if (!/^(g|\d+)$/.test(item)) {
            if (item === 'r') {
                item = 'random'
            }
            item = '?' + item
        }
        else {
            item = '/' + item
        }
        path.push(item)
    }
    return path.join('')
}
if (true) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = uh
}
if (true) {
    module.exports = uh
}


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});
