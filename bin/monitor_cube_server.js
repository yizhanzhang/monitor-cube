'use strict';

var http = require('http');
var os = require('os');
var tty = require('tty');
var util$2 = require('util');
var child_process = require('child_process');
var fs = require('fs');
var net = require('net');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);
var tty__default = /*#__PURE__*/_interopDefaultLegacy(tty);
var util__default = /*#__PURE__*/_interopDefaultLegacy(util$2);
var child_process__default = /*#__PURE__*/_interopDefaultLegacy(child_process);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var net__default = /*#__PURE__*/_interopDefaultLegacy(net);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/* MIT license */
/* eslint-disable no-mixed-operators */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(colorName)) {
	reverseKeywords[colorName[key]] = key;
}

const convert$1 = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

var conversions = convert$1;

// Hide .channels and .labels properties
for (const model of Object.keys(convert$1)) {
	if (!('channels' in convert$1[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert$1[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert$1[model].labels.length !== convert$1[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert$1[model];
	delete convert$1[model].channels;
	delete convert$1[model].labels;
	Object.defineProperty(convert$1[model], 'channels', {value: channels});
	Object.defineProperty(convert$1[model], 'labels', {value: labels});
}

convert$1.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert$1.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert$1.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert$1.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert$1.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert$1.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Infinity;
	let currentClosestKeyword;

	for (const keyword of Object.keys(colorName)) {
		const value = colorName[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert$1.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert$1.rgb.xyz = function (rgb) {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert$1.rgb.lab = function (rgb) {
	const xyz = convert$1.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert$1.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t2;
	let t3;
	let val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert$1.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert$1.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert$1.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert$1.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces */
	switch (i) {
		default:
		case 6:
		case 0: r = v;  g = n;  b = wh; break;
		case 1: r = n;  g = v;  b = wh; break;
		case 2: r = wh; g = v;  b = n; break;
		case 3: r = wh; g = n;  b = v; break;
		case 4: r = n;  g = wh; b = v; break;
		case 5: r = v;  g = wh; b = n; break;
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces */

	return [r * 255, g * 255, b * 255];
};

convert$1.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert$1.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// Assume sRGB
	r = r > 0.0031308
		? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert$1.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert$1.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert$1.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert$1.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert$1.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert$1.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert$1.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2]);
};

convert$1.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert$1.ansi16.rgb = function (args) {
	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (~~(args > 50) + 1) * 0.5;
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert$1.ansi256.rgb = function (args) {
	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert$1.rgb.hex = function (args) {
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert$1.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(char => {
			return char + char;
		}).join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};

convert$1.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let grayscale;
	let hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert$1.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

	let f = 0;
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert$1.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert$1.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	/* eslint-enable max-statements-per-line */

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert$1.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1.0 - c);
	let f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert$1.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1.0 - c) + 0.5 * c;
	let s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert$1.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert$1.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert$1.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert$1.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert$1.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert$1.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert$1.gray.hsv = convert$1.gray.hsl;

convert$1.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert$1.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert$1.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert$1.gray.hex = function (gray) {
	const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (val << 16) + (val << 8) + val;

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert$1.rgb.gray = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions);

	for (let len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions[current]);

		for (let len = adjacents.length, i = 0; i < len; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let len = models.length, i = 0; i < len; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

const convert = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(fromModel => {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	routeModels.forEach(toModel => {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var ansiStyles = createCommonjsModule(function (module) {

const wrapAnsi16 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => (...args) => {
	const rgb = fn(...args);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

const ansi2ansi = n => n;
const rgb2rgb = (r, g, b) => [r, g, b];

const setLazyProperty = (object, property, get) => {
	Object.defineProperty(object, property, {
		get: () => {
			const value = get();

			Object.defineProperty(object, property, {
				value,
				enumerable: true,
				configurable: true
			});

			return value;
		},
		enumerable: true,
		configurable: true
	});
};

/** @type {typeof import('color-convert')} */
let colorConvert$1;
const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
	if (colorConvert$1 === undefined) {
		colorConvert$1 = colorConvert;
	}

	const offset = isBackground ? 10 : 0;
	const styles = {};

	for (const [sourceSpace, suite] of Object.entries(colorConvert$1)) {
		const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
		if (sourceSpace === targetSpace) {
			styles[name] = wrap(identity, offset);
		} else if (typeof suite === 'object') {
			styles[name] = wrap(suite[targetSpace], offset);
		}
	}

	return styles;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],

			// Bright color
			blackBright: [90, 39],
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Alias bright black as gray (and grey)
	styles.color.gray = styles.color.blackBright;
	styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
	styles.color.grey = styles.color.blackBright;
	styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;

	for (const [groupName, group] of Object.entries(styles)) {
		for (const [styleName, style] of Object.entries(group)) {
			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	}

	Object.defineProperty(styles, 'codes', {
		value: codes,
		enumerable: false
	});

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	setLazyProperty(styles.color, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false));
	setLazyProperty(styles.bgColor, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true));

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});
});

var hasFlag = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os__default["default"].release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty__default["default"].isatty(1))),
	stderr: translateLevel(supportsColor(true, tty__default["default"].isatty(2)))
};

const stringReplaceAll$1 = (string, substring, replacer) => {
	let index = string.indexOf(substring);
	if (index === -1) {
		return string;
	}

	const substringLength = substring.length;
	let endIndex = 0;
	let returnValue = '';
	do {
		returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
		endIndex = index + substringLength;
		index = string.indexOf(substring, endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

const stringEncaseCRLFWithFirstIndex$1 = (string, prefix, postfix, index) => {
	let endIndex = 0;
	let returnValue = '';
	do {
		const gotCR = string[index - 1] === '\r';
		returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
		endIndex = index + 1;
		index = string.indexOf('\n', endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

var util$1 = {
	stringReplaceAll: stringReplaceAll$1,
	stringEncaseCRLFWithFirstIndex: stringEncaseCRLFWithFirstIndex$1
};

const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;

const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);

function unescape(c) {
	const u = c[0] === 'u';
	const bracket = c[1] === '{';

	if ((u && !bracket && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	if (u && bracket) {
		return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, arguments_) {
	const results = [];
	const chunks = arguments_.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		const number = Number(chunk);
		if (!Number.isNaN(number)) {
			results.push(number);
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const [styleName, styles] of Object.entries(enabled)) {
		if (!Array.isArray(styles)) {
			continue;
		}

		if (!(styleName in current)) {
			throw new Error(`Unknown Chalk style: ${styleName}`);
		}

		current = styles.length > 0 ? current[styleName](...styles) : current[styleName];
	}

	return current;
}

var templates = (chalk, temporary) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
		if (escapeCharacter) {
			chunk.push(unescape(escapeCharacter));
		} else if (style) {
			const string = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(character);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMessage);
	}

	return chunks.join('');
};

const {stdout: stdoutColor, stderr: stderrColor} = supportsColor_1;
const {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
} = util$1;

const {isArray} = Array;

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = [
	'ansi',
	'ansi',
	'ansi256',
	'ansi16m'
];

const styles = Object.create(null);

const applyOptions = (object, options = {}) => {
	if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
		throw new Error('The `level` option should be an integer from 0 to 3');
	}

	// Detect level if not set manually
	const colorLevel = stdoutColor ? stdoutColor.level : 0;
	object.level = options.level === undefined ? colorLevel : options.level;
};

class ChalkClass {
	constructor(options) {
		// eslint-disable-next-line no-constructor-return
		return chalkFactory(options);
	}
}

const chalkFactory = options => {
	const chalk = {};
	applyOptions(chalk, options);

	chalk.template = (...arguments_) => chalkTag(chalk.template, ...arguments_);

	Object.setPrototypeOf(chalk, Chalk.prototype);
	Object.setPrototypeOf(chalk.template, chalk);

	chalk.template.constructor = () => {
		throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
	};

	chalk.template.Instance = ChalkClass;

	return chalk.template;
};

function Chalk(options) {
	return chalkFactory(options);
}

for (const [styleName, style] of Object.entries(ansiStyles)) {
	styles[styleName] = {
		get() {
			const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
			Object.defineProperty(this, styleName, {value: builder});
			return builder;
		}
	};
}

styles.visible = {
	get() {
		const builder = createBuilder(this, this._styler, true);
		Object.defineProperty(this, 'visible', {value: builder});
		return builder;
	}
};

const usedModels = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];

for (const model of usedModels) {
	styles[model] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

for (const model of usedModels) {
	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, {
	...styles,
	level: {
		enumerable: true,
		get() {
			return this._generator.level;
		},
		set(level) {
			this._generator.level = level;
		}
	}
});

const createStyler = (open, close, parent) => {
	let openAll;
	let closeAll;
	if (parent === undefined) {
		openAll = open;
		closeAll = close;
	} else {
		openAll = parent.openAll + open;
		closeAll = close + parent.closeAll;
	}

	return {
		open,
		close,
		openAll,
		closeAll,
		parent
	};
};

const createBuilder = (self, _styler, _isEmpty) => {
	const builder = (...arguments_) => {
		if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
			// Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
			return applyStyle(builder, chalkTag(builder, ...arguments_));
		}

		// Single argument is hot path, implicit coercion is faster than anything
		// eslint-disable-next-line no-implicit-coercion
		return applyStyle(builder, (arguments_.length === 1) ? ('' + arguments_[0]) : arguments_.join(' '));
	};

	// We alter the prototype because we must return a function, but there is
	// no way to create a function with a different prototype
	Object.setPrototypeOf(builder, proto);

	builder._generator = self;
	builder._styler = _styler;
	builder._isEmpty = _isEmpty;

	return builder;
};

const applyStyle = (self, string) => {
	if (self.level <= 0 || !string) {
		return self._isEmpty ? '' : string;
	}

	let styler = self._styler;

	if (styler === undefined) {
		return string;
	}

	const {openAll, closeAll} = styler;
	if (string.indexOf('\u001B') !== -1) {
		while (styler !== undefined) {
			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			string = stringReplaceAll(string, styler.close, styler.open);

			styler = styler.parent;
		}
	}

	// We can move both next actions out of loop, because remaining actions in loop won't have
	// any/visible effect on parts we add here. Close the styling before a linebreak and reopen
	// after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
	const lfIndex = string.indexOf('\n');
	if (lfIndex !== -1) {
		string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
	}

	return openAll + string + closeAll;
};

let template;
const chalkTag = (chalk, ...strings) => {
	const [firstString] = strings;

	if (!isArray(firstString) || !isArray(firstString.raw)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return strings.join(' ');
	}

	const arguments_ = strings.slice(1);
	const parts = [firstString.raw[0]];

	for (let i = 1; i < firstString.length; i++) {
		parts.push(
			String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'),
			String(firstString.raw[i])
		);
	}

	if (template === undefined) {
		template = templates;
	}

	return template(chalk, parts.join(''));
};

Object.defineProperties(Chalk.prototype, styles);

const chalk = Chalk(); // eslint-disable-line new-cap
chalk.supportsColor = stdoutColor;
chalk.stderr = Chalk({level: stderrColor ? stderrColor.level : 0}); // eslint-disable-line new-cap
chalk.stderr.supportsColor = stderrColor;

var source = chalk;

/**
 * author       : Sunil Wang
 * createTime   : 2017/7/9 19:24
 * description  :
 */
var bucket = {
  options: {
    NOT_SUPPORTED_VALUE: 'not supported',
    INTERVAL: 1000
  },
  isNotSupported(res){
    return res === this.options.NOT_SUPPORTED_VALUE
  }
};

/**
 * author       : Sunil Wang
 * createTime   : 2017/7/9 19:39
 * description  :
 */



bucket.cpu = {
  average: function () {
    var totalIdle = 0;
    var totalTick = 0;
    var cpus = os__default["default"].cpus();

    for (var i = 0, len = cpus.length; i < len; i++) {
      var cpu = cpus[i];
      for (var type in cpu.times) {
        totalTick += cpu.times[type];
      }
      totalIdle += cpu.times.idle;
    }

    return {
      totalIdle: totalIdle,
      totalTick: totalTick,
      avgIdle: (totalIdle / cpus.length),
      avgTotal: (totalTick / cpus.length)
    }
  },
  usage: function (interval) {
    var self = this;

    if (!interval) {
      interval = bucket.options.INTERVAL;
    }

    return new Promise(function (resolve) {
      if (typeof interval !== 'number') {
        throw new TypeError('interval must be a number!')
      }

      var startMeasure = self.average();

      setTimeout(function () {
        var endMeasure = self.average();
        var idleDifference = endMeasure.avgIdle - startMeasure.avgIdle;
        var totalDifference = endMeasure.avgTotal - startMeasure.avgTotal;
        var cpuPercentage = (10000 - Math.round(10000 * idleDifference / totalDifference)) / 100;

        return resolve(cpuPercentage)
      }, interval);
    })
  },
  free: function (interval) {
    var self = this;

    if (!interval) {
      interval = bucket.options.INTERVAL;
    }

    return new Promise(function (resolve) {
      if (typeof interval !== 'number') {
        throw new TypeError('interval must be a number!')
      }

      self.usage(interval)
        .then(function (cpuPercentage) {
          return resolve(100 - cpuPercentage)
        });
    })
  },
  count: function () {
    return os__default["default"].cpus().length
  },
  model: function () {
    return os__default["default"].cpus()[0].model
  },
  loadavg: function () {
    return os__default["default"].loadavg()
  },
  loadavgTime: function (time) {
    time = parseInt(time, 10);

    var loads = os__default["default"].loadavg();

    switch (time) {
      case 5:
        return loads[1]
      case 15:
        return loads[2]
      default: return loads[0]
    }
  }
};

/**
 * author       : Sunil Wang
 * createTime   : 2019/10/25 10:36
 * description  :
 */



function exec(command){
  return new Promise(function (resolve) {
    var runCommand = 'LC_ALL="en_US.UTF-8";LANG="en_US.UTF-8";LANGUAGE="en_US:en";' + command;

    child_process__default["default"].exec(runCommand, { shell: true }, function (err, stdout, stderr) {
      if (err || !stdout) {
        return resolve(bucket.options.NOT_SUPPORTED_VALUE)
      }

      return resolve(stdout)
    });
  })
}

var exec_1 = exec;
var wrapExec$1 = function(command){
  return function(){
    return exec(command)
  }
};
exec_1.wrapExec = wrapExec$1;

/**
 * author       : Sunil Wang
 * createTime   : 2017/7/9 20:17
 * description  :
 */


var DISK_PATTERN = /^(\S+)\n?\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(.+?)\n/mg;

function createDiskInfo (headlineArgs, args) {
  var info = {};

  headlineArgs.forEach(function (h, i) {
    info[h] = args[i];
  });

  return info
}

function parseDfStdout (stdout) {
  var dfInfo = [];
  var headline;

  stdout.replace(DISK_PATTERN, function () {
    var args = Array.prototype.slice.call(arguments, 1, 7);

    if (arguments[7] === 0) {
      headline = args;
      return
    }
    dfInfo.push(createDiskInfo(headline, args));
  });

  return dfInfo
}

bucket.drive = {
  info: function (diskName) {
    if (!diskName) {
      diskName = '/';
    }

    return exec_1('df -kP').then(function (out) {
      var diskInfo = null;
      var main = null;
      var lines = parseDfStdout(out);

      for (var i = 0; i < lines.length; i++) {
        if (lines[i]['Mounted on'] === diskName) {
          diskInfo = lines[i];
          continue
        }

        if (lines[i]['Mounted on'] === '/') {
          main = lines[i];
          continue
        }
      }

      if (diskInfo === null) {
        if (main === null) {
          throw new Error('disk name invalid and / not found')
        }

        console.info('disk name invalid, using / as default');
        diskInfo = main;
      }

      var used = Math.ceil(diskInfo.Used * 1024 / Math.pow(1024, 2));
      var free = Math.ceil((diskInfo.Available || diskInfo.Avail) * 1024 / Math.pow(1024, 2));
      var total = used + free;

      var totalGb = (total / 1024).toFixed(1);
      var usedGb = (used / 1024).toFixed(1);
      var freeGb = (free / 1024).toFixed(1);

      var usedPercentage = (100 * used / total).toFixed(1);
      var freePercentage = (100 * free / total).toFixed(1);

      return Promise.resolve({
        totalGb: totalGb,
        usedGb: usedGb,
        freeGb: freeGb,
        usedPercentage: usedPercentage,
        freePercentage: freePercentage
      })
    })
  },
  free: function (diskName) {
    var self = this;

    return self.info(diskName)
      .then(function (res) {
        return Promise.resolve({
          totalGb: res.totalGb,
          freeGb: res.freeGb,
          freePercentage: res.freePercentage
        })
      })
  },
  used: function (diskName) {
    var self = this;

    return self.info(diskName)
      .then(function (res) {
        return Promise.resolve({
          totalGb: res.totalGb,
          usedGb: res.usedGb,
          usedPercentage: res.usedPercentage
        })
      })
  }
};

/**
 * slice() reference.
 */

var slice = Array.prototype.slice;

/**
 * Expose `co`.
 */

var co_1 = co['default'] = co.co = co;

/**
 * Wrap the given generator `fn` into a
 * function that returns a promise.
 * This is a separate function so that
 * every `co()` call doesn't create a new,
 * unnecessary closure.
 *
 * @param {GeneratorFunction} fn
 * @return {Function}
 * @api public
 */

co.wrap = function (fn) {
  createPromise.__generatorFunction__ = fn;
  return createPromise
  function createPromise () {
    return co.call(this, fn.apply(this, arguments))
  }
};

/**
 * Execute the generator function or a generator
 * and return a promise.
 *
 * @param {Function} fn
 * @return {Promise}
 * @api public
 */

function co (gen) {
  var ctx = this;
  var args = slice.call(arguments, 1);

  // we wrap everything in a promise to avoid promise chaining,
  // which leads to memory leak errors.
  // see https://github.com/tj/co/issues/180
  return new Promise(function (resolve, reject) {
    if (typeof gen === 'function') gen = gen.apply(ctx, args);
    if (!gen || typeof gen.next !== 'function') return resolve(gen)

    onFulfilled();

    /**
     * @param {Mixed} res
     * @return {Promise}
     * @api private
     */

    function onFulfilled (res) {
      var ret;
      try {
        ret = gen.next(res);
      } catch (e) {
        return reject(e)
      }
      next(ret);
    }

    /**
     * @param {Error} err
     * @return {Promise}
     * @api private
     */

    function onRejected (err) {
      var ret;
      try {
        ret = gen.throw(err);
      } catch (e) {
        return reject(e)
      }
      next(ret);
    }

    /**
     * Get the next value in the generator,
     * return a promise.
     *
     * @param {Object} ret
     * @return {Promise}
     * @api private
     */

    function next (ret) {
      if (ret.done) return resolve(ret.value)
      var value = toPromise.call(ctx, ret.value);
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected)
      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, ' +
        'but the following object was passed: "' + String(ret.value) + '"'))
    }
  })
}

/**
 * Convert a `yield`ed value into a promise.
 *
 * @param {Mixed} obj
 * @return {Promise}
 * @api private
 */

function toPromise (obj) {
  if (!obj) return obj
  if (isPromise(obj)) return obj
  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj)
  if (typeof obj === 'function') return thunkToPromise.call(this, obj)
  if (Array.isArray(obj)) return arrayToPromise.call(this, obj)
  if (isObject(obj)) return objectToPromise.call(this, obj)
  return obj
}

/**
 * Convert a thunk to a promise.
 *
 * @param {Function}
 * @return {Promise}
 * @api private
 */

function thunkToPromise (fn) {
  var ctx = this;
  return new Promise(function (resolve, reject) {
    fn.call(ctx, function (err, res) {
      if (err) return reject(err)
      if (arguments.length > 2) res = slice.call(arguments, 1);
      resolve(res);
    });
  })
}

/**
 * Convert an array of "yieldables" to a promise.
 * Uses `Promise.all()` internally.
 *
 * @param {Array} obj
 * @return {Promise}
 * @api private
 */

function arrayToPromise (obj) {
  return Promise.all(obj.map(toPromise, this))
}

/**
 * Convert an object of "yieldables" to a promise.
 * Uses `Promise.all()` internally.
 *
 * @param {Object} obj
 * @return {Promise}
 * @api private
 */

function objectToPromise (obj) {
  var results = new obj.constructor();
  var keys = Object.keys(obj);
  var promises = [];
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var promise = toPromise.call(this, obj[key]);
    if (promise && isPromise(promise)) defer(promise, key);
    else results[key] = obj[key];
  }
  return Promise.all(promises).then(function () {
    return results
  })

  function defer (promise, key) {
    // predefine the key in the result
    results[key] = undefined;
    promises.push(promise.then(function (res) {
      results[key] = res;
    }));
  }
}

/**
 * Check if `obj` is a promise.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isPromise (obj) {
  return typeof obj.then === 'function'
}

/**
 * Check if `obj` is a generator.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */

function isGenerator (obj) {
  return typeof obj.next === 'function' && typeof obj.throw === 'function'
}

/**
 * Check if `obj` is a generator function.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */
function isGeneratorFunction (obj) {
  var constructor = obj.constructor;
  if (!constructor) return false
  if (constructor.name === 'GeneratorFunction' || constructor.displayName === 'GeneratorFunction') return true
  return isGenerator(constructor.prototype)
}

/**
 * Check for plain object.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isObject (val) {
  return Object === val.constructor
}

/**
 * @Author: 王澍（SunilWang）
 * @Date: 2020-06-18 17:11:25
 * @Last Modified by: 王澍（SunilWang）
 * @Last Modified time: 2020-06-18 17:11:47
 * @Description:
 */
var isNumber = function(num) {
  return num !== true && num !== false && Boolean(num === 0 || (num && !isNaN(num)));
};

var util = {
	isNumber: isNumber
};

/**
 * @Author: 王澍（SunilWang）
 * @Date: 2017-7-9 21:49:00
 * @Last Modified by: 王澍（SunilWang）
 * @Last Modified time: 2020-09-10 14:59:41
 * @Description:
 */







var linuxFreeMemory = function () {
  return new Promise(function (resolve) {
    // https://github.com/SunilWang/node-os-utils/pull/11
    // running this on an embedded linux device. This steps takes around 500ms. With this change we brought it down to a few milliseconds.
    fs__default["default"].readFile('/proc/meminfo', 'utf8', function (err, out) {
      if (err) {
        return resolve(bucket.options.NOT_SUPPORTED_VALUE)
      }
      var memInfo = {};
      var usage = out.toString().trim().split('\n');
      usage.forEach((line) => {
        var pair = line.split(':');
        memInfo[pair[0]] = parseInt(pair[1], 10);
      });

      var totalMem = parseInt(memInfo.MemTotal, 10) * 1024;

      // check if MemAvailable exists
      if (!memInfo.MemAvailable) {
        memInfo.MemAvailable = memInfo['MemFree'] + memInfo['Buffers'] + memInfo['Cached'] + memInfo['SReclaimable'] - memInfo['Shmem'];
      }
      var freeMem = memInfo.MemAvailable * 1024;

      // https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=34e431b0ae398fc54ea69ff85ec700722c9da773
      // https://www.cnblogs.com/johnnyzen/p/8011309.html
      if (os__default["default"].release() < '3.14') {
        freeMem =
          ((memInfo.MemFree || 0) +
            (memInfo.Buffers || 0) +
            (memInfo.Cached || 0)) *
          1024;
      }

      return resolve({ totalMem, freeMem })
    });
  })
};

// learn from: https://github.com/X-Profiler/xtransit/blob/master/orders/system_log.js#L356
var osxFreeMemory = co_1.wrap(function* () {
  var totalMem = os__default["default"].totalmem();
  var mappings = {
    'Pages purgeable': 'purgeable',
    'Pages wired down': 'wired',
    'Pages active': 'active',
    'Pages inactive': 'inactive',
    'Pages occupied by compressor': 'compressed',
  };
  var [vmStat, pagePageable] = yield Promise.all([
    exec_1('vm_stat'),
    exec_1('sysctl vm.page_pageable_internal_count'),
  ]);

  vmStat = vmStat.toString().trim();
  pagePageable = pagePageable.toString().trim();

  // get page size
  var pageSize = 4096;
  var matchdPageSize = /page size of (\d+) bytes/.exec(vmStat);

  if (matchdPageSize && util.isNumber(matchdPageSize[1])) {
    pageSize = Number(matchdPageSize[1]);
  }

  // get page pageable
  var [, pageableValue] = pagePageable.split(':');

  if (!util.isNumber(pageableValue)) {
    return {
      totalMem,
      freeMem: os__default["default"].freemem(),
    }
  }

  pageableValue = Number(pageableValue) * pageSize;

  // get vm stats
  var lines = vmStat.split('\n').filter((x) => x !== '');
  var stats = {};

  lines.forEach((x) => {
    var parts = x.split(':');
    var key = parts[0];
    var val = parts[1].replace('.', '').trim();

    if (mappings[key]) {
      var ky = mappings[key];
      stats[ky] = val * pageSize;
    }
  });

  // get app memory
  var appMemory = pageableValue - stats.purgeable;
  // get wired memory
  var wiredMemory = stats.wired;
  // get compressed memory
  var compressedMemory = stats.compressed;
  var used = appMemory + wiredMemory + compressedMemory;

  return {
    totalMem,
    freeMem: totalMem - used,
  }
});

bucket.mem = {
  info: co_1.wrap(function* () {
    var totalMem = null;
    var freeMem = null;
    var memInfo = yield linuxFreeMemory();

    if (bucket.isNotSupported(memInfo)) {
      totalMem = os__default["default"].totalmem();
      freeMem = os__default["default"].freemem();
      if (os__default["default"].platform() === 'darwin') {
        var mem = yield osxFreeMemory();
        totalMem = mem.totalMem;
        freeMem = mem.freeMem;
      }
    } else {
      totalMem = memInfo.totalMem;
      freeMem = memInfo.freeMem;
    }

    var totalMemMb = parseFloat((totalMem / 1024 / 1024).toFixed(2));
    var usedMemMb = parseFloat(((totalMem - freeMem) / 1024 / 1024).toFixed(2));
    var freeMemMb = parseFloat((totalMemMb - usedMemMb).toFixed(2));
    var usedMemPercentage = parseFloat((100 * ((totalMem - freeMem) / totalMem)).toFixed(2));
    var freeMemPercentage = parseFloat((100 * (freeMem / totalMem)).toFixed(2));

    return {
      totalMemMb: totalMemMb,
      usedMemMb: usedMemMb,
      freeMemMb: freeMemMb,
      usedMemPercentage: usedMemPercentage,
      freeMemPercentage: freeMemPercentage,
    }
  }),
  free: function () {
    var self = this;

    return self.info().then(function (res) {
      return Promise.resolve({
        totalMemMb: res.totalMemMb,
        freeMemMb: res.freeMemMb,
      })
    })
  },
  used: function () {
    var self = this;

    return self.info().then(function (res) {
      return Promise.resolve({
        totalMemMb: res.totalMemMb,
        usedMemMb: res.usedMemMb,
      })
    })
  },
  totalMem: function () {
    return os__default["default"].totalmem()
  },
};

/**
 * author       : Sunil Wang
 * createTime   : 2017/7/9 22:16
 * description  :
 */




var ifconfig = {
  breakIntoBlocks: function breakIntoBlocks (fullText) {
    var blocks = [];
    var lines = fullText.split('\n');
    var currentBlock = [];
    lines.forEach(function (line) {
      if (line.length > 0 && ['\t', ' '].indexOf(line[0]) === -1 && currentBlock.length > 0) {
        // start of a new block detected
        blocks.push(currentBlock);
        currentBlock = [];
      }
      if (line.trim()) {
        currentBlock.push(line);
      }
    });
    if (currentBlock.length > 0) {
      blocks.push(currentBlock);
    }
    return blocks
  },

  parseSingleBlock: function parseSingleBlock (block) {
    var data = {};
    block.forEach(function (line, i) {
      var match = line.match(/^(\S+)\s+Link/);
      if (i === 0) {
        var match2 = line.match(/([a-zA-Z0-9]+):\s/);
        if (match === null && match2) {
          match = match2;
        }
      }
      if (match) { // eth0      Link encap:Ethernet  HWaddr 04:01:d3:db:fd:01
        data.device = match[1]; // eth0
        var link = {};
        match = line.match(/encap:(\S+)/);
        if (match) {
          link.encap = match[1];
        }
        match = line.match(/HWaddr\s+(\S+)/);
        if (match) {
          link.hwaddr = match[1];
        }
        data.link = link;
      } else {
        var section = data.other || {};
        if ((match = line.match(/collisions:(\S+)/))) {
          section.collisions = parseInt(match[1]);
        }
        if ((match = line.match(/txqueuelen:(\S+)/))) {
          section.txqueuelen = parseInt(match[1]);
        }
        if ((match = line.match(/RX bytes:(\S+)/))) {
          section.rxBytes = parseInt(match[1]);
        }
        if ((match = line.match(/RX packets (\S+) {2}bytes (\S+)/))) {
          section.rxBytes = parseInt(match[2]);
        }
        if ((match = line.match(/TX bytes:(\S+)/))) {
          section.txBytes = parseInt(match[1]);
        }
        if ((match = line.match(/TX packets (\S+) {2}bytes (\S+)/))) {
          section.txBytes = parseInt(match[2]);
        }
        data.other = section;
      }
    });
    return data
  }
};

function ifconfigStats () {
  return co_1(function * () {
    var res = yield exec_1('ifconfig');

    if(bucket.isNotSupported(res)) return res

    var blocks = ifconfig.breakIntoBlocks(res);
    var stats = [];

    blocks.forEach(function (block, index) {
      blocks[index] = ifconfig.parseSingleBlock(block);
      stats[index] = {
        'interface': blocks[index].device,
        'inputBytes': (blocks[index].other && blocks[index].other.rxBytes) || 0,
        'outputBytes': (blocks[index].other && blocks[index].other.txBytes) || 0
      };
    });

    return stats
  })
}

function isEthernetInterface(inter) {
  return inter.indexOf('en') === 0
}

bucket.netstat = {
  stats: co_1.wrap(function * () {
    var isMac = process.platform === 'darwin';
    const macShell = "netstat -ib | awk 'NR != 1 {printf \"{`%s`:`%s`,`%s`:`%s`,`%s`:`%s`},\", \"name\", $1, \"Ibytes\", $7, \"Obytes\", $10}'";
    const linuxShell = 'ip -s link';
    var out = yield exec_1(isMac ? macShell : linuxShell);
    if(bucket.isNotSupported(out)) return ifconfigStats()

    var stats = [];
    if (isMac) {
      const outObj = JSON.parse('[' + out.replaceAll('`', '"').replace(/,$/, '') + ']');
      stats = outObj.map(function(item, index) {
        if (index < outObj.length - 1 && item.name === outObj[index + 1].name) {
          return undefined
        }
        return {
          interface: item.name,
          inputBytes: item.Ibytes,
          outputBytes: item.Obytes
        }
      }).filter(item => !!item);
    } else {
      var names = new RegExp(/[0-9]+: ([\S]+): /g);
      var RX = new RegExp(/^\s+RX:\s+bytes\s+packets\s+errors\s+dropped\s+(overrun|missed)\s+mcast\s*\n\s*([0-9]+)\s+/gm);
      var TX = new RegExp(/^\s+TX:\s+bytes\s+packets\s+errors\s+dropped\s+carrier\s+collsns\s*\n\s*([0-9]+)\s+/gm);

      var i = 0;
      var res = [];

      while ((res = names.exec(out)) !== null) {
        stats[i++] = {
          interface: res[1]
        };
      }

      i = 0;
      while ((res = RX.exec(out)) !== null) {
        stats[i++].inputBytes = res[2];
      }

      i = 0;
      while ((res = TX.exec(out)) !== null) {
        stats[i++].outputBytes = res[1];
      }
    }

    return stats
  }),
  inOut: function (interval) {
    var self = this;

    if (!interval) {
      interval = bucket.options.INTERVAL;
    }

    return Promise.all([
      self.stats(),
      (function () {
        return new Promise(function (resolve) {
          setTimeout(function () {
            self.stats().then(resolve);
          }, interval);
        })
      })()
    ]).then(function (stats) {
      var oldStats = stats[0];
      var newStats = stats[1];

      var metrics = {
        total: {
          inputMb: 0,
          outputMb: 0
        }
      };
      var nbProblems = 0;

      for (var i = 0; i < oldStats.length; i++) {
        if (isEthernetInterface(oldStats[i].interface) && oldStats[i].inputBytes > 0 && oldStats[i].outputBytes > 0) {
          metrics[oldStats[i].interface] = {};
          metrics[oldStats[i].interface]['inputMb'] = (newStats[i].inputBytes - oldStats[i].inputBytes) / 1024 / 1024;
          metrics[oldStats[i].interface]['outputMb'] = (newStats[i].outputBytes - oldStats[i].outputBytes) / 1024 / 1024;

          metrics.total['inputMb'] += metrics[oldStats[i].interface]['inputMb'];
          metrics.total['outputMb'] += metrics[oldStats[i].interface]['outputMb'];
        } else {
          nbProblems++;
        }
      }

      if (nbProblems === oldStats.length) {
        return Promise.resolve(bucket.options.NOT_SUPPORTED_VALUE)
      }

      for (const key in metrics) {
        metrics[key].inputMb = parseFloat(metrics[key].inputMb.toFixed(2));
        metrics[key].outputMb = parseFloat(metrics[key].outputMb.toFixed(2));
      }

      return Promise.resolve(metrics)
    })
  }
};

/**
 * author       : Sunil Wang
 * createTime   : 2017/7/10 10:26
 * description  :
 */



bucket.openfiles = {
  openFd: function () {
    return new Promise(function (resolve) {
      fs__default["default"].readFile('/proc/sys/fs/file-nr', function (err, out) {
        if (err) {
          return resolve(bucket.options.NOT_SUPPORTED_VALUE)
        }

        var result = out.toString().replace(/\n/g, '').split(' ')[0];

        result = parseInt(result, 10);

        return resolve(result)
      });
    })
  }
};

/**
 * author       : Sunil Wang
 * createTime   : 2017/7/9 19:08
 * description  :
 */


var wrapExec = exec_1.wrapExec;

bucket.osCmd = {
  topCpu: wrapExec('ps -eo pcpu,user,args --no-headers | sort -k 1 -n | tail -n 10 | sort -k 1 -nr | cut -c 1-70'),
  topMem: wrapExec('ps -eo pmem,pid,cmd | sort -k 1 -n | tail -n 10 | sort -k 1 -nr | cut -c 1-70'),
  vmstats: wrapExec('vmstat -S m'),
  processesUsers: wrapExec('ps hax -o user | sort | uniq -c'),
  diskUsage: wrapExec('df -h'),
  who: wrapExec('who'),
  whoami: wrapExec('whoami'),
  openPorts: wrapExec('lsof -Pni4 | grep ESTABLISHED'),
  ifconfig: wrapExec('ifconfig')
};

/**
 * author       : Sunil Wang
 * createTime   : 2017/7/10 10:36
 * description  :
 */






var originalOperatingSystem = {
  checkLastResort: co_1.wrap(function * (){
    return exec_1('uname -sr')
  }),
  darwin: function () {
    var self = this;

    return co_1(function * (){
      var res = yield exec_1('sw_vers');

      if(bucket.isNotSupported(res)) return self.checkLastResort()

      var version = res.match(/[\n\r].*ProductVersion:\s*([^\n\r]*)/)[1];
      var distribution = res.match(/.*ProductName:\s*([^\n\r]*)/)[1];

      return distribution + ' ' + version
    })
  },
  linux: function () {
    var self = this;

    // Debian, Ubuntu, CentOS
    return new Promise(function (resolve) {
      fs__default["default"].readFile('/etc/issue', function (err, out) {
        if (err) {
          return self.checkLastResort(resolve)
        }
        out = out.toString();
        var version = out.match(/[\d]+(\.[\d][\d]?)?/);

        if (version !== null) {
          version = version[0];
        }
        var distribution = out.match(/[\w]*/)[0];

        if (version !== null && distribution !== null) {
          var resultOs = distribution + ' ' + version;
          return resolve(resultOs)
        } else if (distribution !== null && distribution !== '') {
          return resolve(distribution)
        } else if (version === null) {
          fs__default["default"].readFile('/etc/redhat-release', function (err, out) {
            if (err) {
              return self.checkLastResort(resolve)
            }

            out = out.toString();
            version = out.match(/[\d]+(\.[\d][\d]?)?/);

            if (version !== null) {
              version = version[0];
            }

            var resultOs = 'Red Hat ' + version;
            return resolve(resultOs)
          });
        }
      });
    })
  }
};

bucket.os = {
  oos: function () {
    var platform = os__default["default"].platform();

    if (platform === 'linux') {
      return originalOperatingSystem.linux()
    }

    if (platform === 'darwin') {
      return originalOperatingSystem.darwin()
    }

    return originalOperatingSystem.checkLastResort()
  },
  platform: function () {
    return os__default["default"].platform()
  },
  uptime: function () {
    // seconds
    return os__default["default"].uptime()
  },
  ip: function () {
    var platform = os__default["default"].platform();
    var interfaces = os__default["default"].networkInterfaces();
    var ip = '';
    var i = 0;
    try {

      if (platform === 'linux' && interfaces.eth0) {
        for (i = 0; i < interfaces.eth0.length; i++) {
          if (os__default["default"].networkInterfaces().eth0[i].family === 'IPv4') {
            ip = os__default["default"].networkInterfaces().eth0[i].address;
            break
          }
        }

        return ip
      }

      if (platform === 'darwin') {
        for (i = 0; i < interfaces.en0.length; i++) {
          if (os__default["default"].networkInterfaces().en0[i].family === 'IPv4') {
            ip = os__default["default"].networkInterfaces().en0[i].address;
            break
          }
        }

        return ip
      }

      for (i in interfaces) {
        var item = interfaces[i];
        for (var j in item) {
          if (item[j]['internal'] === false && item[j]['family'] === 'IPv4') {
            ip = item[j]['address'];
            break
          }
        }
      }
    } catch (error){
      ip = 'LOCALHOST';
    }

    return ip
  },
  hostname: function () {
    return os__default["default"].hostname()
  },
  type: function () {
    return os__default["default"].type()
  },
  arch: function () {
    return os__default["default"].arch()
  }
};

/**
 * author       : Sunil Wang
 * createTime   : 2017/7/10 14:31
 * description  :
 */





bucket.proc = {
  totalProcesses: co_1.wrap(function * () {
    var res = yield exec_1("top -bn1 | awk 'NR > 7 && $8 ~ /R|S|D|T/ { print $12 }'");

    if(bucket.isNotSupported(res)){
      if (os__default["default"].platform() === 'darwin') {
        var nb = yield exec_1('ps -A');

        nb = nb.toString().split('\n');

        return nb.length - 1
      }

      return res
    }

    var resultProc = (res.split('\n')).length;

    return resultProc
  }),
  zombieProcesses: co_1.wrap(function * () {
    var res = yield exec_1("top -bn1 | awk 'NR > 7 && $8 ~ /Z/ { print $12 }'");

    if(bucket.isNotSupported(res)) return res

    return (res.split('\n')).length
  })
};

/**
 * author       : Sunil Wang
 * createTime   : 2017/7/10 10:17
 * description  :
 */




bucket.users = {
  openedCount: co_1.wrap(function * () {
    var res = yield exec_1('who | grep -v localhost | wc -l');

    if(bucket.isNotSupported(res)) return res

    return parseInt(res, 10)
  })
};

/**
 * author       : Sunil Wang
 * createTime   : 2017/7/9 18:29
 * description  :
 */











var nodeOsUtils = bucket;

// call method 1: (port, cb(err, freePort))
// call method 2: (portBeg, portEnd, cb(err, freePort))
// call method 3: (portBeg, host, cb(err, freePort))
// call method 4: (portBeg, portEnd, host, cb(err, freePort))
// call method 5: (portBeg, portEnd, host, howmany, cb(err, freePort1, freePort2, ...))

function findFreePort(beg, ...rest){
  const p = rest.slice(0, rest.length - 1), cb = rest[rest.length - 1];
  let [end, ip, cnt] = Array.from(p);
  if (!ip && end && !/^\d+$/.test(end)) { // deal with method 3
    ip = end;
    end = 65534;
  } else {
    if (end == null) { end = 65534; }
  }
  if (cnt == null) { cnt = 1; }

  const retcb = cb;
  const res = [];
  const probe = function(ip, port, cb){
    const s = net__default["default"].createConnection({port: port, host: ip});
    s.on('connect', function(){ s.end(); cb(null, port + 1); });
    s.on('error', err=> { cb(port); });  // can't connect, port is available
  };
  var onprobe = function(port, nextPort){
    if (port) {
      res.push(port);
      if (res.length >= cnt) {
        retcb(null, ...res);
      } else {
        setImmediate(()=> probe(ip, port+1, onprobe));
      }
    } else {
      if (nextPort>=end) {
        retcb(new Error("No available ports"));
      } else {
        setImmediate(()=> probe(ip, nextPort, onprobe));
      }
    }
  };
  return probe(ip, beg, onprobe);
}
function findFreePortPmfy(beg, ...rest) {
  const last = rest[rest.length - 1];
  if (typeof last === 'function') {
    findFreePort(beg, ...rest);
  } else {
    return new Promise((resolve, reject) => {
      findFreePort(beg, ...rest, (err, ...ports) => {
        if (err) reject(err);
        else resolve(ports);
      });
    })
  }
}
var findFreePort_1 = findFreePortPmfy;

var monitor_cube_server = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(http__default["default"]);
const chalk_1 = __importDefault(source);
const util_1 = __importDefault(util__default["default"]);
const child_process_1 = __importDefault(child_process__default["default"]);



const exec = util_1.default.promisify(child_process_1.default.exec);
const greenLog = function (...others) {
    console.log(chalk_1.default.green('[MC]:', ...others));
};
const redLog = function (...others) {
    console.log(chalk_1.default.red('[MC]:', ...others));
};
const blueLog = function (...others) {
    console.log(chalk_1.default.blue('[MC]:', ...others));
};
class NetInfoAvatar {
    constructor() {
        this.lastRecord = "";
        this.lastReecordTimestamp = 0;
        this.isStart = false;
        this.getTimeout = undefined;
        this.cancelTimeout = undefined;
    }
    getRecord() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isStart) {
                this.isStart = true;
                this.addTimeout();
                this.startCancelTimeout();
                return this.getCore();
            }
            else {
                this.startCancelTimeout();
                return this.lastRecord;
            }
        });
    }
    getCore() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield nodeOsUtils.netstat.inOut(100);
            this.lastRecord = result;
            this.lastReecordTimestamp = Date.now();
            return result;
        });
    }
    addTimeout() {
        if (this.getTimeout) {
            clearTimeout(this.getTimeout);
        }
        this.getTimeout = setTimeout(() => {
            this.getTimeout = undefined;
            if (this.isStart) {
                this.getCore();
                this.addTimeout();
            }
        }, 500);
    }
    startCancelTimeout() {
        if (this.cancelTimeout) {
            clearTimeout(this.cancelTimeout);
        }
        this.cancelTimeout = setTimeout(() => {
            this.isStart = false;
            this.cancelTimeout = undefined;
        }, 5000);
    }
}
const netInfoAvatar = new NetInfoAvatar();
function getSystemInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const cpuData = parseInt((yield nodeOsUtils.cpu.usage()).toFixed(0));
            const memInfo = yield nodeOsUtils.mem.info();
            const memData = Math.round(memInfo.usedMemMb / memInfo.totalMemMb * 100);
            const netInfo = yield netInfoAvatar.getRecord();
            let downloadData = "";
            let uploadData = "";
            if (typeof netInfo === 'string') {
                downloadData = "00.00M";
                uploadData = "00.00M";
            }
            else {
                downloadData = (netInfo.total.inputMb * 10).toFixed(2) + "M";
                uploadData = (netInfo.total.outputMb * 10).toFixed(2) + "M";
                if (downloadData.length < 6)
                    downloadData = "0" + downloadData;
                if (uploadData.length < 6)
                    uploadData = "0" + uploadData;
            }
            resolve({
                cpuData,
                memData,
                downloadData,
                uploadData,
            });
        }));
    });
}
function getFreePort() {
    return new Promise((resolve, reject) => {
        findFreePort_1(3000, (err, freePort) => {
            if (err) {
                redLog('can not find free port');
                reject();
            }
            resolve(freePort);
        });
    });
}
function getLocalIP() {
    const nets = (0, os__default["default"].networkInterfaces)();
    const address = [];
    for (const name in nets) {
        const netGroup = nets[name];
        if (!netGroup || name.indexOf('en') !== 0)
            continue;
        netGroup.forEach(net => {
            if (net.family === 'IPv4' && !net.internal) {
                address.push(net.address);
            }
        });
    }
    return address;
}
function getNodeProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const { stdout, stderr } = yield exec('ps aux | grep monitor_cube_server.js');
        if (stderr) {
            redLog('find node process error');
            return [];
        }
        const pList = stdout
            .split('\n')
            .filter(i => !!i)
            .map(i => {
            const [USER, PID, CPU, MEM, VSZ, RSS, TTY, STAT, START, TIME, ...COMMAND] = i.split(' ').filter(s => !!s);
            return {
                pid: Number(PID),
                commandArr: COMMAND,
                command: COMMAND.join(' '),
            };
        }).filter(item => item.commandArr[0] === 'node' && item.command.indexOf('start') >= 0 && item.pid !== process.pid).map(item => ({
            pid: item.pid,
            command: item.command,
            port: -1,
        }));
        for (const p of pList) {
            const { stdout, stderr } = yield exec(`lsof -aPi -p ${p.pid} | awk 'NR != 1 { printf \"%s\", $9}'`);
            if (stderr)
                continue;
            p.port = stdout ? Number(stdout.match(/\d+/)[0]) : -1;
        }
        return pList;
    });
}
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const IP = getLocalIP();
        const pList = yield getNodeProcess();
        if (pList.length !== 0) {
            blueLog(`has available server NET:[${IP}:${pList[0].port}] PID:${pList[0].pid}`);
            return;
        }
        const port = yield getFreePort();
        if (!port)
            return;
        greenLog('[welcome to monitor cube]');
        greenLog(`local ip: ${IP.join(' | ')}`);
        greenLog(`start server PORT:${port} PID:${process.pid}`);
        http_1.default.createServer(function (request, response) {
            const url = request.url;
            if ((url === null || url === void 0 ? void 0 : url.indexOf('/info')) === 0) {
                getSystemInfo().then(res => {
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    response.end(JSON.stringify(res));
                });
            }
            else {
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.end('this is monitorCube');
            }
        }).listen(port);
    });
}
function stopServer() {
    return __awaiter(this, void 0, void 0, function* () {
        greenLog('begin to stop server');
        const pList = yield getNodeProcess();
        for (const p of pList) {
            blueLog(`begin to kill process: ${p.pid}`);
            yield exec(`kill -9 ${p.pid}`);
        }
        greenLog('stop server success');
    });
}
function showServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const pList = yield getNodeProcess();
        if (pList.length === 0) {
            redLog('no available server');
            return;
        }
        const IP = getLocalIP();
        blueLog(`local ip: ${IP.join(' | ')}`);
        for (const p of pList) {
            blueLog(`available server PORT:${p.port} PID:${p.pid}`);
        }
    });
}
const type = process.argv[2];
switch (type) {
    case 'start':
        startServer();
        break;
    case 'stop':
        stopServer();
        break;
    case 'show':
        showServer();
        break;
}
});

var monitor_cube_server$1 = unwrapExports(monitor_cube_server);

module.exports = monitor_cube_server$1;
