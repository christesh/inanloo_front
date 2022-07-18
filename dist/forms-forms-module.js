(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./node_modules/an-qrcode/fesm2015/an-qrcode.js":
/*!******************************************************!*\
  !*** ./node_modules/an-qrcode/fesm2015/an-qrcode.js ***!
  \******************************************************/
/*! exports provided: AnQrcodeComponent, AnQrcodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnQrcodeComponent", function() { return AnQrcodeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnQrcodeModule", function() { return AnQrcodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// alignment pattern
let adelta = [
    0, 11, 15, 19, 23, 27, 31, // force 1 pat
    16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24,
    26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28
];

// version block
let vpat = [
    0xc94, 0x5bc, 0xa99, 0x4d3, 0xbf6, 0x762, 0x847, 0x60d,
    0x928, 0xb78, 0x45d, 0xa17, 0x532, 0x9a6, 0x683, 0x8c9,
    0x7ec, 0xec4, 0x1e1, 0xfab, 0x08e, 0xc1a, 0x33f, 0xd75,
    0x250, 0x9d5, 0x6f0, 0x8ba, 0x79f, 0xb0b, 0x42e, 0xa64,
    0x541, 0xc69
];

// final format bits with mask: level << 3 | mask
let fmtword = [
    0x77c4, 0x72f3, 0x7daa, 0x789d, 0x662f, 0x6318, 0x6c41, 0x6976,    //L
    0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0,    //M
    0x355f, 0x3068, 0x3f31, 0x3a06, 0x24b4, 0x2183, 0x2eda, 0x2bed,    //Q
    0x1689, 0x13be, 0x1ce7, 0x19d0, 0x0762, 0x0255, 0x0d0c, 0x083b    //H
];

// 4 per version: number of blocks 1,2; data width; ecc width
let eccblocks = [
    1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17,
    1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28,
    1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22,
    1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16,
    1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22,
    2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28,
    2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26,
    2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26,
    2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24,
    2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28,
    4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24,
    2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28,
    4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22,
    3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24,
    5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24,
    5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30,
    1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28,
    5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28,
    3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26,
    3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28,
    4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30,
    2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24,
    4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30,
    6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30,
    8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30,
    10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30,
    8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30,
    3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30,
    7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30,
    5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30,
    13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30,
    17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30,
    17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30,
    13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30,
    12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30,
    6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30,
    17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30,
    4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30,
    20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30,
    19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30
];

// Galois field log table
let glog = [
    0xff, 0x00, 0x01, 0x19, 0x02, 0x32, 0x1a, 0xc6, 0x03, 0xdf, 0x33, 0xee, 0x1b, 0x68, 0xc7, 0x4b,
    0x04, 0x64, 0xe0, 0x0e, 0x34, 0x8d, 0xef, 0x81, 0x1c, 0xc1, 0x69, 0xf8, 0xc8, 0x08, 0x4c, 0x71,
    0x05, 0x8a, 0x65, 0x2f, 0xe1, 0x24, 0x0f, 0x21, 0x35, 0x93, 0x8e, 0xda, 0xf0, 0x12, 0x82, 0x45,
    0x1d, 0xb5, 0xc2, 0x7d, 0x6a, 0x27, 0xf9, 0xb9, 0xc9, 0x9a, 0x09, 0x78, 0x4d, 0xe4, 0x72, 0xa6,
    0x06, 0xbf, 0x8b, 0x62, 0x66, 0xdd, 0x30, 0xfd, 0xe2, 0x98, 0x25, 0xb3, 0x10, 0x91, 0x22, 0x88,
    0x36, 0xd0, 0x94, 0xce, 0x8f, 0x96, 0xdb, 0xbd, 0xf1, 0xd2, 0x13, 0x5c, 0x83, 0x38, 0x46, 0x40,
    0x1e, 0x42, 0xb6, 0xa3, 0xc3, 0x48, 0x7e, 0x6e, 0x6b, 0x3a, 0x28, 0x54, 0xfa, 0x85, 0xba, 0x3d,
    0xca, 0x5e, 0x9b, 0x9f, 0x0a, 0x15, 0x79, 0x2b, 0x4e, 0xd4, 0xe5, 0xac, 0x73, 0xf3, 0xa7, 0x57,
    0x07, 0x70, 0xc0, 0xf7, 0x8c, 0x80, 0x63, 0x0d, 0x67, 0x4a, 0xde, 0xed, 0x31, 0xc5, 0xfe, 0x18,
    0xe3, 0xa5, 0x99, 0x77, 0x26, 0xb8, 0xb4, 0x7c, 0x11, 0x44, 0x92, 0xd9, 0x23, 0x20, 0x89, 0x2e,
    0x37, 0x3f, 0xd1, 0x5b, 0x95, 0xbc, 0xcf, 0xcd, 0x90, 0x87, 0x97, 0xb2, 0xdc, 0xfc, 0xbe, 0x61,
    0xf2, 0x56, 0xd3, 0xab, 0x14, 0x2a, 0x5d, 0x9e, 0x84, 0x3c, 0x39, 0x53, 0x47, 0x6d, 0x41, 0xa2,
    0x1f, 0x2d, 0x43, 0xd8, 0xb7, 0x7b, 0xa4, 0x76, 0xc4, 0x17, 0x49, 0xec, 0x7f, 0x0c, 0x6f, 0xf6,
    0x6c, 0xa1, 0x3b, 0x52, 0x29, 0x9d, 0x55, 0xaa, 0xfb, 0x60, 0x86, 0xb1, 0xbb, 0xcc, 0x3e, 0x5a,
    0xcb, 0x59, 0x5f, 0xb0, 0x9c, 0xa9, 0xa0, 0x51, 0x0b, 0xf5, 0x16, 0xeb, 0x7a, 0x75, 0x2c, 0xd7,
    0x4f, 0xae, 0xd5, 0xe9, 0xe6, 0xe7, 0xad, 0xe8, 0x74, 0xd6, 0xf4, 0xea, 0xa8, 0x50, 0x58, 0xaf
];

// Galios field exponent table
let gexp = [
    0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1d, 0x3a, 0x74, 0xe8, 0xcd, 0x87, 0x13, 0x26,
    0x4c, 0x98, 0x2d, 0x5a, 0xb4, 0x75, 0xea, 0xc9, 0x8f, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0,
    0x9d, 0x27, 0x4e, 0x9c, 0x25, 0x4a, 0x94, 0x35, 0x6a, 0xd4, 0xb5, 0x77, 0xee, 0xc1, 0x9f, 0x23,
    0x46, 0x8c, 0x05, 0x0a, 0x14, 0x28, 0x50, 0xa0, 0x5d, 0xba, 0x69, 0xd2, 0xb9, 0x6f, 0xde, 0xa1,
    0x5f, 0xbe, 0x61, 0xc2, 0x99, 0x2f, 0x5e, 0xbc, 0x65, 0xca, 0x89, 0x0f, 0x1e, 0x3c, 0x78, 0xf0,
    0xfd, 0xe7, 0xd3, 0xbb, 0x6b, 0xd6, 0xb1, 0x7f, 0xfe, 0xe1, 0xdf, 0xa3, 0x5b, 0xb6, 0x71, 0xe2,
    0xd9, 0xaf, 0x43, 0x86, 0x11, 0x22, 0x44, 0x88, 0x0d, 0x1a, 0x34, 0x68, 0xd0, 0xbd, 0x67, 0xce,
    0x81, 0x1f, 0x3e, 0x7c, 0xf8, 0xed, 0xc7, 0x93, 0x3b, 0x76, 0xec, 0xc5, 0x97, 0x33, 0x66, 0xcc,
    0x85, 0x17, 0x2e, 0x5c, 0xb8, 0x6d, 0xda, 0xa9, 0x4f, 0x9e, 0x21, 0x42, 0x84, 0x15, 0x2a, 0x54,
    0xa8, 0x4d, 0x9a, 0x29, 0x52, 0xa4, 0x55, 0xaa, 0x49, 0x92, 0x39, 0x72, 0xe4, 0xd5, 0xb7, 0x73,
    0xe6, 0xd1, 0xbf, 0x63, 0xc6, 0x91, 0x3f, 0x7e, 0xfc, 0xe5, 0xd7, 0xb3, 0x7b, 0xf6, 0xf1, 0xff,
    0xe3, 0xdb, 0xab, 0x4b, 0x96, 0x31, 0x62, 0xc4, 0x95, 0x37, 0x6e, 0xdc, 0xa5, 0x57, 0xae, 0x41,
    0x82, 0x19, 0x32, 0x64, 0xc8, 0x8d, 0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xdd, 0xa7, 0x53, 0xa6,
    0x51, 0xa2, 0x59, 0xb2, 0x79, 0xf2, 0xf9, 0xef, 0xc3, 0x9b, 0x2b, 0x56, 0xac, 0x45, 0x8a, 0x09,
    0x12, 0x24, 0x48, 0x90, 0x3d, 0x7a, 0xf4, 0xf5, 0xf7, 0xf3, 0xfb, 0xeb, 0xcb, 0x8b, 0x0b, 0x16,
    0x2c, 0x58, 0xb0, 0x7d, 0xfa, 0xe9, 0xcf, 0x83, 0x1b, 0x36, 0x6c, 0xd8, 0xad, 0x47, 0x8e, 0x00
];

// Working buffers:
// data input and ecc append, image working buffer, fixed part of image, run lengths for badness
var strinbuf = [], eccbuf = [], qrframe = [], framask = [], rlens = [];
// Control values - width is based on version, last 4 are from table.
var version, width, neccblk1, neccblk2, datablkw, eccblkwid;
var ecclevel = 1;
// set bit to indicate cell in qrframe is immutable.  symmetric around diagonal
function setmask(x, y) {
    var bt;
    if (x > y) {
        bt = x;
        x = y;
        y = bt;
    }
    // y*y = 1+3+5...
    bt = y;
    bt *= y;
    bt += y;
    bt >>= 1;
    bt += x;
    framask[bt] = 1;
}

// enter alignment pattern - black to qrframe, white to mask (later black frame merged to mask)
function putalign(x, y) {
    var j;

    qrframe[x + width * y] = 1;
    for (j = -2; j < 2; j++) {
        qrframe[(x + j) + width * (y - 2)] = 1;
        qrframe[(x - 2) + width * (y + j + 1)] = 1;
        qrframe[(x + 2) + width * (y + j)] = 1;
        qrframe[(x + j + 1) + width * (y + 2)] = 1;
    }
    for (j = 0; j < 2; j++) {
        setmask(x - 1, y + j);
        setmask(x + 1, y - j);
        setmask(x - j, y - 1);
        setmask(x + j, y + 1);
    }
}

//========================================================================
// Reed Solomon error correction
// exponentiation mod N
function modnn(x) {
    while (x >= 255) {
        x -= 255;
        x = (x >> 8) + (x & 255);
    }
    return x;
}

var genpoly = [];

// Calculate and append ECC data to data block.  Block is in strinbuf, indexes to buffers given.
function appendrs(data, dlen, ecbuf, eclen) {
    var i, j, fb;

    for (i = 0; i < eclen; i++)
        strinbuf[ecbuf + i] = 0;
    for (i = 0; i < dlen; i++) {
        fb = glog[strinbuf[data + i] ^ strinbuf[ecbuf]];
        if (fb != 255)     /* fb term is non-zero */
            for (j = 1; j < eclen; j++)
                strinbuf[ecbuf + j - 1] = strinbuf[ecbuf + j] ^ gexp[modnn(fb + genpoly[eclen - j])];
        else
            for (j = ecbuf; j < ecbuf + eclen; j++)
                strinbuf[j] = strinbuf[j + 1];
        strinbuf[ecbuf + eclen - 1] = fb == 255 ? 0 : gexp[modnn(fb + genpoly[0])];
    }
}

//========================================================================
// Frame data insert following the path rules

// check mask - since symmetrical use half.
function ismasked(x, y) {
    var bt;
    if (x > y) {
        bt = x;
        x = y;
        y = bt;
    }
    bt = y;
    bt += y * y;
    bt >>= 1;
    bt += x;
    return framask[bt];
}

//========================================================================
//  Apply the selected mask out of the 8.
function applymask(m) {
    var x, y, r3x, r3y;

    switch (m) {
        case 0:
            for (y = 0; y < width; y++)
                for (x = 0; x < width; x++)
                    if (!((x + y) & 1) && !ismasked(x, y))
                        qrframe[x + y * width] ^= 1;
            break;
        case 1:
            for (y = 0; y < width; y++)
                for (x = 0; x < width; x++)
                    if (!(y & 1) && !ismasked(x, y))
                        qrframe[x + y * width] ^= 1;
            break;
        case 2:
            for (y = 0; y < width; y++)
                for (r3x = 0, x = 0; x < width; x++ , r3x++) {
                    if (r3x == 3)
                        r3x = 0;
                    if (!r3x && !ismasked(x, y))
                        qrframe[x + y * width] ^= 1;
                }
            break;
        case 3:
            for (r3y = 0, y = 0; y < width; y++ , r3y++) {
                if (r3y == 3)
                    r3y = 0;
                for (r3x = r3y, x = 0; x < width; x++ , r3x++) {
                    if (r3x == 3)
                        r3x = 0;
                    if (!r3x && !ismasked(x, y))
                        qrframe[x + y * width] ^= 1;
                }
            }
            break;
        case 4:
            for (y = 0; y < width; y++)
                for (r3x = 0, r3y = ((y >> 1) & 1), x = 0; x < width; x++ , r3x++) {
                    if (r3x == 3) {
                        r3x = 0;
                        r3y = !r3y;
                    }
                    if (!r3y && !ismasked(x, y))
                        qrframe[x + y * width] ^= 1;
                }
            break;
        case 5:
            for (r3y = 0, y = 0; y < width; y++ , r3y++) {
                if (r3y == 3)
                    r3y = 0;
                for (r3x = 0, x = 0; x < width; x++ , r3x++) {
                    if (r3x == 3)
                        r3x = 0;
                    if (!((x & y & 1) + !(!r3x | !r3y)) && !ismasked(x, y))
                        qrframe[x + y * width] ^= 1;
                }
            }
            break;
        case 6:
            for (r3y = 0, y = 0; y < width; y++ , r3y++) {
                if (r3y == 3)
                    r3y = 0;
                for (r3x = 0, x = 0; x < width; x++ , r3x++) {
                    if (r3x == 3)
                        r3x = 0;
                    if (!(((x & y & 1) + (r3x && (r3x == r3y))) & 1) && !ismasked(x, y))
                        qrframe[x + y * width] ^= 1;
                }
            }
            break;
        case 7:
            for (r3y = 0, y = 0; y < width; y++ , r3y++) {
                if (r3y == 3)
                    r3y = 0;
                for (r3x = 0, x = 0; x < width; x++ , r3x++) {
                    if (r3x == 3)
                        r3x = 0;
                    if (!(((r3x && (r3x == r3y)) + ((x + y) & 1)) & 1) && !ismasked(x, y))
                        qrframe[x + y * width] ^= 1;
                }
            }
            break;
    }
    return;
}

// Badness coefficients.
var N1 = 3, N2 = 3, N3 = 40, N4 = 10;

// Using the table of the length of each run, calculate the amount of bad image 
// - long runs or those that look like finders; called twice, once each for X and Y
function badruns(length) {
    var i;
    var runsbad = 0;
    for (i = 0; i <= length; i++)
        if (rlens[i] >= 5)
            runsbad += N1 + rlens[i] - 5;
    // BwBBBwB as in finder
    for (i = 3; i < length - 1; i += 2)
        if (rlens[i - 2] == rlens[i + 2]
            && rlens[i + 2] == rlens[i - 1]
            && rlens[i - 1] == rlens[i + 1]
            && rlens[i - 1] * 3 == rlens[i]
            // white around the black pattern? Not part of spec
            && (rlens[i - 3] == 0 // beginning
                || i + 3 > length  // end
                || rlens[i - 3] * 3 >= rlens[i] * 4 || rlens[i + 3] * 3 >= rlens[i] * 4)
        )
            runsbad += N3;
    return runsbad;
}

// Calculate how bad the masked image is - blocks, imbalance, runs, or finders.
function badcheck() {
    var x, y, h, b, b1;
    var thisbad = 0;
    var bw = 0;

    // blocks of same color.
    for (y = 0; y < width - 1; y++)
        for (x = 0; x < width - 1; x++)
            if ((qrframe[x + width * y] && qrframe[(x + 1) + width * y]
                && qrframe[x + width * (y + 1)] && qrframe[(x + 1) + width * (y + 1)]) // all black
                || !(qrframe[x + width * y] || qrframe[(x + 1) + width * y]
                    || qrframe[x + width * (y + 1)] || qrframe[(x + 1) + width * (y + 1)])) // all white
                thisbad += N2;

    // X runs
    for (y = 0; y < width; y++) {
        rlens[0] = 0;
        for (h = b = x = 0; x < width; x++) {
            if ((b1 = qrframe[x + width * y]) == b)
                rlens[h]++;
            else
                rlens[++h] = 1;
            b = b1;
            bw += b ? 1 : -1;
        }
        thisbad += badruns(h);
    }

    // black/white imbalance
    if (bw < 0)
        bw = -bw;

    var big = bw;
    let count = 0;
    big += big << 2;
    big <<= 1;
    while (big > width * width)
        big -= width * width, count++;
    thisbad += count * N4;

    // Y runs
    for (x = 0; x < width; x++) {
        rlens[0] = 0;
        for (h = b = y = 0; y < width; y++) {
            if ((b1 = qrframe[x + width * y]) == b)
                rlens[h]++;
            else
                rlens[++h] = 1;
            b = b1;
        }
        thisbad += badruns(h);
    }
    return thisbad;
}

function genframe(instring, ecclevel) {
    var x, y, k, t, v, i, j, m;

    // find the smallest version that fits the string
    t = instring.length;
    version = 0;
    do {
        version++;
        k = (ecclevel - 1) * 4 + (version - 1) * 16;
        neccblk1 = eccblocks[k++];
        neccblk2 = eccblocks[k++];
        datablkw = eccblocks[k++];
        eccblkwid = eccblocks[k];
        k = datablkw * (neccblk1 + neccblk2) + neccblk2 - 3 + (version <= 9);
        if (t <= k)
            break;
    } while (version < 40);

    // FIXME - insure that it fits insted of being truncated
    width = 17 + 4 * version;

    // allocate, clear and setup data structures
    v = datablkw + (datablkw + eccblkwid) * (neccblk1 + neccblk2) + neccblk2;
    for (t = 0; t < v; t++)
        eccbuf[t] = 0;
    strinbuf = instring.slice(0);

    for (t = 0; t < width * width; t++)
        qrframe[t] = 0;

    for (t = 0; t < (width * (width + 1) + 1) / 2; t++)
        framask[t] = 0;

    // insert finders - black to frame, white to mask
    for (t = 0; t < 3; t++) {
        k = 0;
        y = 0;
        if (t == 1)
            k = (width - 7);
        if (t == 2)
            y = (width - 7);
        qrframe[(y + 3) + width * (k + 3)] = 1;
        for (x = 0; x < 6; x++) {
            qrframe[(y + x) + width * k] = 1;
            qrframe[y + width * (k + x + 1)] = 1;
            qrframe[(y + 6) + width * (k + x)] = 1;
            qrframe[(y + x + 1) + width * (k + 6)] = 1;
        }
        for (x = 1; x < 5; x++) {
            setmask(y + x, k + 1);
            setmask(y + 1, k + x + 1);
            setmask(y + 5, k + x);
            setmask(y + x + 1, k + 5);
        }
        for (x = 2; x < 4; x++) {
            qrframe[(y + x) + width * (k + 2)] = 1;
            qrframe[(y + 2) + width * (k + x + 1)] = 1;
            qrframe[(y + 4) + width * (k + x)] = 1;
            qrframe[(y + x + 1) + width * (k + 4)] = 1;
        }
    }

    // alignment blocks
    if (version > 1) {
        t = adelta[version];
        y = width - 7;
        for (; ;) {
            x = width - 7;
            while (x > t - 3) {
                putalign(x, y);
                if (x < t)
                    break;
                x -= t;
            }
            if (y <= t + 9)
                break;
            y -= t;
            putalign(6, y);
            putalign(y, 6);
        }
    }

    // single black
    qrframe[8 + width * (width - 8)] = 1;

    // timing gap - mask only
    for (y = 0; y < 7; y++) {
        setmask(7, y);
        setmask(width - 8, y);
        setmask(7, y + width - 7);
    }
    for (x = 0; x < 8; x++) {
        setmask(x, 7);
        setmask(x + width - 8, 7);
        setmask(x, width - 8);
    }

    // reserve mask-format area
    for (x = 0; x < 9; x++)
        setmask(x, 8);
    for (x = 0; x < 8; x++) {
        setmask(x + width - 8, 8);
        setmask(8, x);
    }
    for (y = 0; y < 7; y++)
        setmask(8, y + width - 7);

    // timing row/col
    for (x = 0; x < width - 14; x++)
        if (x & 1) {
            setmask(8 + x, 6);
            setmask(6, 8 + x);
        }
        else {
            qrframe[(8 + x) + width * 6] = 1;
            qrframe[6 + width * (8 + x)] = 1;
        }

    // version block
    if (version > 6) {
        t = vpat[version - 7];
        k = 17;
        for (x = 0; x < 6; x++)
            for (y = 0; y < 3; y++ , k--)
                if (1 & (k > 11 ? version >> (k - 12) : t >> k)) {
                    qrframe[(5 - x) + width * (2 - y + width - 11)] = 1;
                    qrframe[(2 - y + width - 11) + width * (5 - x)] = 1;
                }
                else {
                    setmask(5 - x, 2 - y + width - 11);
                    setmask(2 - y + width - 11, 5 - x);
                }
    }

    // sync mask bits - only set above for white spaces, so add in black bits
    for (y = 0; y < width; y++)
        for (x = 0; x <= y; x++)
            if (qrframe[x + width * y])
                setmask(x, y);

    // convert string to bitstream
    // 8 bit data to QR-coded 8 bit data (numeric or alphanum, or kanji not supported)
    v = strinbuf.length;

    // string to array
    for (i = 0; i < v; i++)
        eccbuf[i] = strinbuf.charCodeAt(i);
    strinbuf = eccbuf.slice(0);

    // calculate max string length
    x = datablkw * (neccblk1 + neccblk2) + neccblk2;
    if (v >= x - 2) {
        v = x - 2;
        if (version > 9)
            v--;
    }

    // shift and repack to insert length prefix
    i = v;
    if (version > 9) {
        strinbuf[i + 2] = 0;
        strinbuf[i + 3] = 0;
        while (i--) {
            t = strinbuf[i];
            strinbuf[i + 3] |= 255 & (t << 4);
            strinbuf[i + 2] = t >> 4;
        }
        strinbuf[2] |= 255 & (v << 4);
        strinbuf[1] = v >> 4;
        strinbuf[0] = 0x40 | (v >> 12);
    }
    else {
        strinbuf[i + 1] = 0;
        strinbuf[i + 2] = 0;
        while (i--) {
            t = strinbuf[i];
            strinbuf[i + 2] |= 255 & (t << 4);
            strinbuf[i + 1] = t >> 4;
        }
        strinbuf[1] |= 255 & (v << 4);
        strinbuf[0] = 0x40 | (v >> 4);
    }
    // fill to end with pad pattern
    i = v + 3 - (version < 10);
    while (i < x) {
        strinbuf[i++] = 0xec;
        // buffer has room    if (i == x)      break;
        strinbuf[i++] = 0x11;
    }

    // calculate and append ECC

    // calculate generator polynomial
    genpoly[0] = 1;
    for (i = 0; i < eccblkwid; i++) {
        genpoly[i + 1] = 1;
        for (j = i; j > 0; j--)
            genpoly[j] = genpoly[j]
                ? genpoly[j - 1] ^ gexp[modnn(glog[genpoly[j]] + i)] : genpoly[j - 1];
        genpoly[0] = gexp[modnn(glog[genpoly[0]] + i)];
    }
    for (i = 0; i <= eccblkwid; i++)
        genpoly[i] = glog[genpoly[i]]; // use logs for genpoly[] to save calc step

    // append ecc to data buffer
    k = x;
    y = 0;
    for (i = 0; i < neccblk1; i++) {
        appendrs(y, datablkw, k, eccblkwid);
        y += datablkw;
        k += eccblkwid;
    }
    for (i = 0; i < neccblk2; i++) {
        appendrs(y, datablkw + 1, k, eccblkwid);
        y += datablkw + 1;
        k += eccblkwid;
    }
    // interleave blocks
    y = 0;
    for (i = 0; i < datablkw; i++) {
        for (j = 0; j < neccblk1; j++)
            eccbuf[y++] = strinbuf[i + j * datablkw];
        for (j = 0; j < neccblk2; j++)
            eccbuf[y++] = strinbuf[(neccblk1 * datablkw) + i + (j * (datablkw + 1))];
    }
    for (j = 0; j < neccblk2; j++)
        eccbuf[y++] = strinbuf[(neccblk1 * datablkw) + i + (j * (datablkw + 1))];
    for (i = 0; i < eccblkwid; i++)
        for (j = 0; j < neccblk1 + neccblk2; j++)
            eccbuf[y++] = strinbuf[x + i + j * eccblkwid];
    strinbuf = eccbuf;

    // pack bits into frame avoiding masked area.
    x = y = width - 1;
    k = v = 1;         // up, minus
    /* inteleaved data and ecc codes */
    m = (datablkw + eccblkwid) * (neccblk1 + neccblk2) + neccblk2;
    for (i = 0; i < m; i++) {
        t = strinbuf[i];
        for (j = 0; j < 8; j++ , t <<= 1) {
            if (0x80 & t)
                qrframe[x + width * y] = 1;
            do {        // find next fill position
                if (v)
                    x--;
                else {
                    x++;
                    if (k) {
                        if (y != 0)
                            y--;
                        else {
                            x -= 2;
                            k = !k;
                            if (x == 6) {
                                x--;
                                y = 9;
                            }
                        }
                    }
                    else {
                        if (y != width - 1)
                            y++;
                        else {
                            x -= 2;
                            k = !k;
                            if (x == 6) {
                                x--;
                                y -= 8;
                            }
                        }
                    }
                }
                v = !v;
            } while (ismasked(x, y));
        }
    }

    // save pre-mask copy of frame
    strinbuf = qrframe.slice(0);
    t = 0;           // best
    y = 30000;         // demerit
    // for instead of while since in original arduino code
    // if an early mask was "good enough" it wouldn't try for a better one
    // since they get more complex and take longer.
    for (k = 0; k < 8; k++) {
        applymask(k);      // returns black-white imbalance
        x = badcheck();
        if (x < y) { // current mask better than previous best?
            y = x;
            t = k;
        }
        if (t == 7)
            break;       // don't increment i to a void redoing mask
        qrframe = strinbuf.slice(0); // reset for next pass
    }
    if (t != k)         // redo best mask - none good enough, last wasn't t
        applymask(t);

    // add in final mask/ecclevel bytes
    y = fmtword[t + ((ecclevel - 1) << 3)];
    // low byte
    for (k = 0; k < 8; k++ , y >>= 1)
        if (y & 1) {
            qrframe[(width - 1 - k) + width * 8] = 1;
            if (k < 6)
                qrframe[8 + width * k] = 1;
            else
                qrframe[8 + width * (k + 1)] = 1;
        }
    // high byte
    for (k = 0; k < 7; k++ , y >>= 1)
        if (y & 1) {
            qrframe[8 + width * (width - 7 + k)] = 1;
            if (k)
                qrframe[(6 - k) + width * 8] = 1;
            else
                qrframe[7 + width * 8] = 1;
        }

    // return image
    return qrframe;
}

var wd, ht, qrc;
function doqr(ecclevel, qr_value, wd = 300, ht = 300) {

    var elem = document.createElement("canvas");
    elem.id = "qrcanv";

    qrc = elem.getContext('2d');

    let px = wd;
    if (ht < wd)
        px = ht;
    px /= width + 10;
    px = Math.round(px - 0.5);

    qrc.canvas.width = px * (width + 2);
    qrc.canvas.height = px * (width + 2);

    qrc.fillStyle = '#eee';
    qrc.fillRect(0, 0, px * (width + 2), px * (width + 2));
    let qf = genframe(qr_value, ecclevel);
    qrc.lineWidth = 1;

    var i, j;
    qrc.clearRect(0, 0, wd, ht);
    qrc.fillStyle = '#fff';
    qrc.fillRect(0, 0, px * (width + 2), px * (width + 2));
    qrc.fillStyle = '#000';
    for (i = 0; i < width; i++)
        for (j = 0; j < width; j++)
            if (qf[j * width + i])
                qrc.fillRect(px * (1 + i), px * (1 + j), px, px);

    return elem.toDataURL();

}

class AnQrcodeComponent {
    constructor() {
        this.level = 1;
        this.qrvalue = "Test";
        this.size = 200;
        this.result = null;
    }
    ngOnInit() {
        this.result = doqr(this.level, this.qrvalue, this.size, this.size);
        console.log("this.result", this.result);
    }
    ngOnChanges(changes) {
        const qrvalue = changes.qrvalue;
        const level = changes.level;
        const size = changes.size;
        this.result = doqr(this.level, this.qrvalue, this.size, this.size);
    }
}
AnQrcodeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'qrcode',
                template: `<img src="{{result}}">`
            },] }
];
AnQrcodeComponent.ctorParameters = () => [];
AnQrcodeComponent.propDecorators = {
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    qrvalue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

class AnQrcodeModule {
}
AnQrcodeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [AnQrcodeComponent],
                imports: [],
                exports: [AnQrcodeComponent]
            },] }
];

/*
 * Public API Surface of an-qrcode
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=an-qrcode.js.map


/***/ }),

/***/ "./node_modules/angular-archwizard/fesm5/angular-archwizard.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angular-archwizard/fesm5/angular-archwizard.js ***!
  \*********************************************************************/
/*! exports provided: WizardCompletionStepComponent, WizardNavigationBarComponent, WizardStepComponent, WizardComponent, EnableBackLinksDirective, GoToStepDirective, NextStepDirective, OptionalStepDirective, PreviousStepDirective, ResetWizardDirective, SelectedStepDirective, WizardCompletionStepDirective, WizardStepDirective, WizardStepTitleDirective, FreeNavigationMode, NavigationMode, SemiStrictNavigationMode, StrictNavigationMode, WizardState, navigationModeFactory, MovingDirection, isStepId, isStepIndex, isStepOffset, WizardCompletionStep, WizardStep, ArchwizardModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStepComponent", function() { return WizardCompletionStepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardNavigationBarComponent", function() { return WizardNavigationBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepComponent", function() { return WizardStepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableBackLinksDirective", function() { return EnableBackLinksDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToStepDirective", function() { return GoToStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextStepDirective", function() { return NextStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionalStepDirective", function() { return OptionalStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousStepDirective", function() { return PreviousStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetWizardDirective", function() { return ResetWizardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedStepDirective", function() { return SelectedStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStepDirective", function() { return WizardCompletionStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepDirective", function() { return WizardStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepTitleDirective", function() { return WizardStepTitleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeNavigationMode", function() { return FreeNavigationMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationMode", function() { return NavigationMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemiStrictNavigationMode", function() { return SemiStrictNavigationMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictNavigationMode", function() { return StrictNavigationMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardState", function() { return WizardState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationModeFactory", function() { return navigationModeFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingDirection", function() { return MovingDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStepId", function() { return isStepId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStepIndex", function() { return isStepIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStepOffset", function() { return isStepOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStep", function() { return WizardCompletionStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStep", function() { return WizardStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchwizardModule", function() { return ArchwizardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return WizardStepSymbolDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awWizardStepSymbol` directive can be used as an alternative to the `navigationSymbol` input of a [[WizardStep]]
 * to define the step symbol inside the navigation bar.  This way step symbol may contain arbitrary content.
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepSymbol>
 *     ...
 * </ng-template>
 * ```
 */
var WizardStepSymbolDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepSymbolDirective]]
     */
    function WizardStepSymbolDirective(templateRef) {
        this.templateRef = templateRef;
    }
    WizardStepSymbolDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
                },] }
    ];
    /** @nocollapse */
    WizardStepSymbolDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return WizardStepSymbolDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awWizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
 * to define the content of a step title inside the navigation bar.
 * This step title can be freely created and can contain more than only plain text
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepTitle>
 *     ...
 * </ng-template>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepTitleDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
     */
    function WizardStepTitleDirective(templateRef) {
        this.templateRef = templateRef;
    }
    WizardStepTitleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'ng-template[awStepTitle], ng-template[awWizardStepTitle]'
                },] }
    ];
    /** @nocollapse */
    WizardStepTitleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return WizardStepTitleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Basic functionality every type of wizard step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
var WizardStep = /** @class */ (function () {
    function WizardStep() {
        /**
         * A symbol property, which contains an optional symbol for the step inside the navigation bar.
         * Takes effect when `stepSymbolTemplate` is not defined or null.
         */
        this.navigationSymbol = { symbol: '' };
        /**
         * A boolean describing if the wizard step has been completed
         */
        this.completed = false;
        /**
         * A boolean describing if the wizard step is currently selected
         */
        this.selected = false;
        /**
         * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
         */
        this.defaultSelected = false;
        /**
         * A boolean describing if the wizard step is an optional step
         */
        this.optional = false;
        /**
         * A function or boolean deciding, if this step can be entered
         */
        this.canEnter = true;
        /**
         * A function or boolean deciding, if this step can be exited
         */
        this.canExit = true;
        /**
         * This [[EventEmitter]] is called when the step is entered.
         * The bound method should be used to do initialization work.
         */
        this.stepEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(WizardStep.prototype, "hidden", {
        /**
         * Returns if this wizard step should be visible to the user.
         * If the step should be visible to the user false is returned, otherwise true
         */
        get: /**
         * Returns if this wizard step should be visible to the user.
         * If the step should be visible to the user false is returned, otherwise true
         * @return {?}
         */
        function () {
            return !this.selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @param condition A condition variable, deciding if the step can be transitioned
     * @param direction The direction in which this step should be transitioned
     * @returns A [[Promise]] containing `true`, if this step can transitioned in the given direction
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     */
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     * @private
     * @param {?} condition A condition variable, deciding if the step can be transitioned
     * @param {?} direction The direction in which this step should be transitioned
     * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     */
    WizardStep.canTransitionStep = /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     * @private
     * @param {?} condition A condition variable, deciding if the step can be transitioned
     * @param {?} direction The direction in which this step should be transitioned
     * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     */
    function (condition, direction) {
        if (typeof (condition) === typeof (true)) {
            return Promise.resolve((/** @type {?} */ (condition)));
        }
        else if (condition instanceof Function) {
            return Promise.resolve(condition(direction));
        }
        else {
            return Promise.reject(new Error("Input value '" + condition + "' is neither a boolean nor a function"));
        }
    };
    /**
     * A function called when the step is entered
     *
     * @param direction The direction in which the step is entered
     */
    /**
     * A function called when the step is entered
     *
     * @param {?} direction The direction in which the step is entered
     * @return {?}
     */
    WizardStep.prototype.enter = /**
     * A function called when the step is entered
     *
     * @param {?} direction The direction in which the step is entered
     * @return {?}
     */
    function (direction) {
        this.stepEnter.emit(direction);
    };
    /**
     * A function called when the step is exited
     *
     * @param direction The direction in which the step is exited
     */
    /**
     * A function called when the step is exited
     *
     * @param {?} direction The direction in which the step is exited
     * @return {?}
     */
    WizardStep.prototype.exit = /**
     * A function called when the step is exited
     *
     * @param {?} direction The direction in which the step is exited
     * @return {?}
     */
    function (direction) {
        this.stepExit.emit(direction);
    };
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be entered
     * @returns A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     */
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be entered
     * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     */
    WizardStep.prototype.canEnterStep = /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be entered
     * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     */
    function (direction) {
        return WizardStep.canTransitionStep(this.canEnter, direction);
    };
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be left
     * @returns A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     */
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be left
     * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     */
    WizardStep.prototype.canExitStep = /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be left
     * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     */
    function (direction) {
        return WizardStep.canTransitionStep(this.canExit, direction);
    };
    WizardStep.propDecorators = {
        stepTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [WizardStepTitleDirective,] }],
        stepSymbolTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [WizardStepSymbolDirective,] }],
        stepId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        stepTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navigationSymbol: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        canEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        canExit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        stepEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        stepExit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['hidden',] }]
    };
    return WizardStep;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
var  /**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
WizardCompletionStep = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WizardCompletionStep, _super);
    function WizardCompletionStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @inheritDoc
         */
        _this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @inheritDoc
         */
        _this.canExit = false;
        return _this;
    }
    /**
     * @inheritDoc
     */
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    WizardCompletionStep.prototype.enter = /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        this.completed = true;
        this.stepEnter.emit(direction);
    };
    /**
     * @inheritDoc
     */
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    WizardCompletionStep.prototype.exit = /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        // set this completion step as incomplete
        this.completed = false;
        this.stepExit.emit(direction);
    };
    return WizardCompletionStep;
}(WizardStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
 * After a `aw-wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a `aw-wizard-completion-step` automatically sets the `aw-wizard` and all steps inside the `aw-wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'navigation symbol font family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WizardCompletionStepComponent, _super);
    function WizardCompletionStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardCompletionStepComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aw-wizard-completion-step',
                    template: "<ng-content></ng-content>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    providers: [
                        { provide: WizardStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return WizardCompletionStepComponent; })) },
                        { provide: WizardCompletionStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return WizardCompletionStepComponent; })) }
                    ],
                    styles: ["aw-wizard-completion-step{height:auto;width:100%}"]
                }] }
    ];
    return WizardCompletionStepComponent;
}(WizardCompletionStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The direction in which a step transition was made
 *
 * @author Marc Arndt
 */
/** @enum {number} */
var MovingDirection = {
    /**
     * A forward step transition
     */
    Forwards: 0,
    /**
     * A backward step transition
     */
    Backwards: 1,
    /**
     * No step transition was done
     */
    Stay: 2,
};
MovingDirection[MovingDirection.Forwards] = 'Forwards';
MovingDirection[MovingDirection.Backwards] = 'Backwards';
MovingDirection[MovingDirection.Stay] = 'Stay';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An interface describing the basic functionality, which must be provided by a navigation mode.
 * A navigation mode manages the navigation between different wizard steps, this contains the validation, if a step transition can be done
 *
 * @author Marc Arndt
 * @abstract
 */
var  /**
 * An interface describing the basic functionality, which must be provided by a navigation mode.
 * A navigation mode manages the navigation between different wizard steps, this contains the validation, if a step transition can be done
 *
 * @author Marc Arndt
 * @abstract
 */
NavigationMode = /** @class */ (function () {
    function NavigationMode(wizardState) {
        this.wizardState = wizardState;
    }
    /**
     * Tries to transition the wizard to the previous step from the `currentStep`
     */
    /**
     * Tries to transition the wizard to the previous step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
    NavigationMode.prototype.goToPreviousStep = /**
     * Tries to transition the wizard to the previous step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
    function (preFinalize, postFinalize) {
        if (this.wizardState.hasPreviousStep()) {
            this.goToStep(this.wizardState.currentStepIndex - 1, preFinalize, postFinalize);
        }
    };
    /**
     * Tries to transition the wizard to the next step from the `currentStep`
     */
    /**
     * Tries to transition the wizard to the next step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
    NavigationMode.prototype.goToNextStep = /**
     * Tries to transition the wizard to the next step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
    function (preFinalize, postFinalize) {
        if (this.wizardState.hasNextStep()) {
            this.goToStep(this.wizardState.currentStepIndex + 1, preFinalize, postFinalize);
        }
    };
    return NavigationMode;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
var  /**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
FreeNavigationMode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FreeNavigationMode, _super);
    /**
     * Constructor
     *
     * @param wizardState The model/state of the wizard, that is configured with this navigation mode
     */
    function FreeNavigationMode(wizardState) {
        return _super.call(this, wizardState) || this;
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     *
     * @param destinationIndex The index of the destination wizard step
     * @returns True if the destination wizard step can be entered, false otherwise
     */
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    FreeNavigationMode.prototype.canGoToStep = /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    function (destinationIndex) {
        var _this = this;
        /** @type {?} */
        var hasStep = this.wizardState.hasStep(destinationIndex);
        /** @type {?} */
        var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        /** @type {?} */
        var canExitCurrentStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        });
        /** @type {?} */
        var canEnterDestinationStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        });
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep);
    };
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    FreeNavigationMode.prototype.goToStep = /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    function (destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(destinationIndex).then((/**
         * @param {?} navigationAllowed
         * @return {?}
         */
        function (navigationAllowed) {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                /** @type {?} */
                var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                _this.wizardState.currentStep.completed = true;
                _this.wizardState.currentStep.exit(movingDirection);
                _this.wizardState.currentStep.selected = false;
                _this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                _this.wizardState.currentStep.enter(movingDirection);
                _this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                _this.wizardState.currentStep.exit(MovingDirection.Stay);
                _this.wizardState.currentStep.enter(MovingDirection.Stay);
            }
        }));
    };
    /**
     * @param {?} destinationIndex
     * @return {?}
     */
    FreeNavigationMode.prototype.isNavigable = /**
     * @param {?} destinationIndex
     * @return {?}
     */
    function (destinationIndex) {
        return true;
    };
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     */
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    FreeNavigationMode.prototype.reset = /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    function () {
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            step.completed = false;
            step.selected = false;
        }));
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(MovingDirection.Forwards);
    };
    return FreeNavigationMode;
}(NavigationMode));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A [[NavigationMode]], which allows the user to navigate with some limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - a completion step can only be entered, if all "normal" wizard steps have been completed
 *
 * @author Marc Arndt
 */
var  /**
 * A [[NavigationMode]], which allows the user to navigate with some limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - a completion step can only be entered, if all "normal" wizard steps have been completed
 *
 * @author Marc Arndt
 */
SemiStrictNavigationMode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(SemiStrictNavigationMode, _super);
    /**
     * Constructor
     *
     * @param wizardState The model/state of the wizard, that is configured with this navigation mode
     */
    function SemiStrictNavigationMode(wizardState) {
        return _super.call(this, wizardState) || this;
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
     *
     * @param destinationIndex The index of the destination wizard step
     * @returns True if the destination wizard step can be entered, false otherwise
     */
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    SemiStrictNavigationMode.prototype.canGoToStep = /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    function (destinationIndex) {
        var _this = this;
        /** @type {?} */
        var hasStep = this.wizardState.hasStep(destinationIndex);
        /** @type {?} */
        var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        /** @type {?} */
        var canExitCurrentStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        });
        /** @type {?} */
        var canEnterDestinationStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        });
        // provide the destination step as a lambda in case the index doesn't exist (i.e. hasStep === false)
        /** @type {?} */
        var destinationStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            if (previous) {
                /** @type {?} */
                var allNormalStepsCompleted = _this.wizardState.wizardSteps
                    .filter((/**
                 * @param {?} step
                 * @param {?} index
                 * @return {?}
                 */
                function (step, index) { return index < destinationIndex; }))
                    .every((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) { return step.completed || step.optional || step.selected; }));
                return Promise.resolve(!(_this.wizardState.getStepAtIndex(destinationIndex) instanceof WizardCompletionStep) || allNormalStepsCompleted);
            }
            else {
                return Promise.resolve(false);
            }
        });
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep)
            .then(destinationStep);
    };
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    SemiStrictNavigationMode.prototype.goToStep = /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    function (destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(destinationIndex).then((/**
         * @param {?} navigationAllowed
         * @return {?}
         */
        function (navigationAllowed) {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                /** @type {?} */
                var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                _this.wizardState.currentStep.completed = true;
                _this.wizardState.currentStep.exit(movingDirection);
                _this.wizardState.currentStep.selected = false;
                _this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                _this.wizardState.currentStep.enter(movingDirection);
                _this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                _this.wizardState.currentStep.exit(MovingDirection.Stay);
                _this.wizardState.currentStep.enter(MovingDirection.Stay);
            }
        }));
    };
    /**
     * @inheritDoc
     */
    /**
     * @inheritDoc
     * @param {?} destinationIndex
     * @return {?}
     */
    SemiStrictNavigationMode.prototype.isNavigable = /**
     * @inheritDoc
     * @param {?} destinationIndex
     * @return {?}
     */
    function (destinationIndex) {
        if (this.wizardState.getStepAtIndex(destinationIndex) instanceof WizardCompletionStep) {
            // a completion step can only be entered, if all previous steps have been completed, are optional, or selected
            return this.wizardState.wizardSteps.filter((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) { return index < destinationIndex; }))
                .every((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.completed || step.optional || step.selected; }));
        }
        else {
            // a "normal" step can always be entered
            return true;
        }
    };
    /**
     * @inheritDoc
     */
    /**
     * @inheritDoc
     * @return {?}
     */
    SemiStrictNavigationMode.prototype.reset = /**
     * @inheritDoc
     * @return {?}
     */
    function () {
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
        }
        // the default step is a completion step and the wizard contains more than one step
        /** @type {?} */
        var defaultCompletionStep = this.wizardState.getStepAtIndex(this.wizardState.defaultStepIndex) instanceof WizardCompletionStep &&
            this.wizardState.wizardSteps.length !== 1;
        if (defaultCompletionStep) {
            throw new Error("The default step index " + this.wizardState.defaultStepIndex + " references a completion step");
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            step.completed = false;
            step.selected = false;
        }));
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(MovingDirection.Forwards);
    };
    return SemiStrictNavigationMode;
}(NavigationMode));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A [[NavigationMode]], which allows the user to navigate with strict limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - all previous steps to the destination step have been completed or are optional
 *
 * @author Marc Arndt
 */
var  /**
 * A [[NavigationMode]], which allows the user to navigate with strict limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - all previous steps to the destination step have been completed or are optional
 *
 * @author Marc Arndt
 */
StrictNavigationMode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(StrictNavigationMode, _super);
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard, that is configured with this navigation mode
     */
    function StrictNavigationMode(wizardState) {
        return _super.call(this, wizardState) || this;
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @param destinationIndex The index of the destination wizard step
     * @returns True if the destination wizard step can be entered, false otherwise
     */
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    StrictNavigationMode.prototype.canGoToStep = /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    function (destinationIndex) {
        var _this = this;
        /** @type {?} */
        var hasStep = this.wizardState.hasStep(destinationIndex);
        /** @type {?} */
        var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        /** @type {?} */
        var canExitCurrentStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        });
        /** @type {?} */
        var canEnterDestinationStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        });
        /** @type {?} */
        var allPreviousStepsComplete = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            if (previous) {
                return Promise.resolve(_this.wizardState.wizardSteps
                    .filter((/**
                 * @param {?} step
                 * @param {?} index
                 * @return {?}
                 */
                function (step, index) { return index < destinationIndex && index !== _this.wizardState.currentStepIndex; }))
                    .every((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) { return step.completed || step.optional; })));
            }
            else {
                return Promise.resolve(false);
            }
        });
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep)
            .then(allPreviousStepsComplete);
    };
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - all steps between the old current step and the destination step are marked as incomplete
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - all steps between the old current step and the destination step are marked as incomplete
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    StrictNavigationMode.prototype.goToStep = /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - all steps between the old current step and the destination step are marked as incomplete
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    function (destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(destinationIndex).then((/**
         * @param {?} navigationAllowed
         * @return {?}
         */
        function (navigationAllowed) {
            if (navigationAllowed) {
                /** @type {?} */
                var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                _this.wizardState.currentStep.completed = true;
                _this.wizardState.currentStep.exit(movingDirection);
                _this.wizardState.currentStep.selected = false;
                // set all steps after the destination step to incomplete
                _this.wizardState.wizardSteps
                    .filter((/**
                 * @param {?} step
                 * @param {?} index
                 * @return {?}
                 */
                function (step, index) { return _this.wizardState.currentStepIndex > destinationIndex && index > destinationIndex; }))
                    .forEach((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) { return step.completed = false; }));
                _this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                _this.wizardState.currentStep.enter(movingDirection);
                _this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                _this.wizardState.currentStep.exit(MovingDirection.Stay);
                _this.wizardState.currentStep.enter(MovingDirection.Stay);
            }
        }));
    };
    /**
     * @param {?} destinationIndex
     * @return {?}
     */
    StrictNavigationMode.prototype.isNavigable = /**
     * @param {?} destinationIndex
     * @return {?}
     */
    function (destinationIndex) {
        // a wizard step can be navigated to through the navigation bar, iff it's located before the current wizard step
        return destinationIndex < this.wizardState.currentStepIndex;
    };
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     */
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    StrictNavigationMode.prototype.reset = /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    function () {
        var _this = this;
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
        }
        // at least one step is before the default step, that is not optional
        /** @type {?} */
        var illegalDefaultStep = this.wizardState.wizardSteps
            .filter((/**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        function (step, index) { return index < _this.wizardState.defaultStepIndex; }))
            .some((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return !step.optional; }));
        if (illegalDefaultStep) {
            throw new Error("The default step index " + this.wizardState.defaultStepIndex + " is located after a non optional step");
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            step.completed = false;
            step.selected = false;
        }));
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(MovingDirection.Forwards);
    };
    return StrictNavigationMode;
}(NavigationMode));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A factory method used to create [[NavigationMode]] instances
 *
 * @param {?} navigationMode The name of the to be used navigation mode
 * @param {?} wizardState The wizard state of the wizard
 * @return {?} The created [[NavigationMode]]
 */
function navigationModeFactory(navigationMode, wizardState) {
    switch (navigationMode) {
        case 'free':
            return new FreeNavigationMode(wizardState);
        case 'semi-strict':
            return new SemiStrictNavigationMode(wizardState);
        case 'strict':
        default:
            return new StrictNavigationMode(wizardState);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The internal model/state of a wizard.
 * This model contains:
 * - an array with all steps the wizard contains
 * - the index of the step the wizard currently resides inside
 * - information about the completeness of the wizard
 * - some additional helper methods
 *
 * @author Marc Arndt
 */
var WizardState = /** @class */ (function () {
    /**
     * Constructor
     */
    function WizardState() {
        /**
         * An array representation of all wizard steps belonging to this model
         */
        this.wizardSteps = [];
        /**
         * The index of the currently visible and selected step inside the wizardSteps QueryList.
         * If this wizard contains no steps, currentStepIndex is -1
         */
        this.currentStepIndex = -1;
        /**
         * The initial step index, as taken from the [[WizardComponent]]
         */
        this._defaultStepIndex = 0;
    }
    Object.defineProperty(WizardState.prototype, "defaultStepIndex", {
        /**
         * The initial step index.
         * This value can be either:
         * - the index of a wizard step with a `selected` directive, or
         * - the default step index, set in the [[WizardComponent]]
         */
        get: /**
         * The initial step index.
         * This value can be either:
         * - the index of a wizard step with a `selected` directive, or
         * - the default step index, set in the [[WizardComponent]]
         * @return {?}
         */
        function () {
            /** @type {?} */
            var foundDefaultStep = this.wizardSteps.find((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.defaultSelected; }));
            if (foundDefaultStep) {
                return this.getIndexOfStep(foundDefaultStep);
            }
            else {
                return this._defaultStepIndex;
            }
        },
        /**
         * Sets the initial default step.
         * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
         *
         * @param defaultStepIndex The new default wizard step index
         */
        set: /**
         * Sets the initial default step.
         * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
         *
         * @param {?} defaultStepIndex The new default wizard step index
         * @return {?}
         */
        function (defaultStepIndex) {
            this._defaultStepIndex = defaultStepIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardState.prototype, "currentStep", {
        /**
         * The WizardStep object belonging to the currently visible and selected step.
         * The currentStep is always the currently selected wizard step.
         * The currentStep can be either completed, if it was visited earlier,
         * or not completed, if it is visited for the first time or its state is currently out of date.
         *
         * If this wizard contains no steps, currentStep is null
         */
        get: /**
         * The WizardStep object belonging to the currently visible and selected step.
         * The currentStep is always the currently selected wizard step.
         * The currentStep can be either completed, if it was visited earlier,
         * or not completed, if it is visited for the first time or its state is currently out of date.
         *
         * If this wizard contains no steps, currentStep is null
         * @return {?}
         */
        function () {
            if (this.hasStep(this.currentStepIndex)) {
                return this.wizardSteps[this.currentStepIndex];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardState.prototype, "completed", {
        /**
         * The completeness of the wizard.
         * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
         */
        get: /**
         * The completeness of the wizard.
         * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
         * @return {?}
         */
        function () {
            return this.wizardSteps.every((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.completed || step.optional; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param updatedNavigationMode The name of the new navigation mode
     */
    /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param {?} updatedNavigationMode The name of the new navigation mode
     * @return {?}
     */
    WizardState.prototype.updateNavigationMode = /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param {?} updatedNavigationMode The name of the new navigation mode
     * @return {?}
     */
    function (updatedNavigationMode) {
        this.navigationMode = navigationModeFactory(updatedNavigationMode, this);
    };
    /**
     * Updates the wizard steps to the new array
     *
     * @param updatedWizardSteps The updated wizard steps
     */
    /**
     * Updates the wizard steps to the new array
     *
     * @param {?} updatedWizardSteps The updated wizard steps
     * @return {?}
     */
    WizardState.prototype.updateWizardSteps = /**
     * Updates the wizard steps to the new array
     *
     * @param {?} updatedWizardSteps The updated wizard steps
     * @return {?}
     */
    function (updatedWizardSteps) {
        // the wizard is currently not in the initialization phase
        if (this.wizardSteps.length > 0 && this.currentStepIndex > -1) {
            this.currentStepIndex = updatedWizardSteps.indexOf(this.wizardSteps[this.currentStepIndex]);
        }
        this.wizardSteps = updatedWizardSteps;
    };
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param stepIndex The to be checked index of a step inside this wizard
     * @returns True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param {?} stepIndex The to be checked index of a step inside this wizard
     * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    WizardState.prototype.hasStep = /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param {?} stepIndex The to be checked index of a step inside this wizard
     * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    function (stepIndex) {
        return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
    };
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @returns True if this wizard has a previous step before the current step
     */
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @return {?} True if this wizard has a previous step before the current step
     */
    WizardState.prototype.hasPreviousStep = /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @return {?} True if this wizard has a previous step before the current step
     */
    function () {
        return this.hasStep(this.currentStepIndex - 1);
    };
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @returns True if this wizard has a next step after the current step
     */
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @return {?} True if this wizard has a next step after the current step
     */
    WizardState.prototype.hasNextStep = /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @return {?} True if this wizard has a next step after the current step
     */
    function () {
        return this.hasStep(this.currentStepIndex + 1);
    };
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @returns True if the wizard is currently inside its last step
     */
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @return {?} True if the wizard is currently inside its last step
     */
    WizardState.prototype.isLastStep = /**
     * Checks if this wizard is currently inside its last step
     *
     * @return {?} True if the wizard is currently inside its last step
     */
    function () {
        return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
    };
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @param stepIndex The given index
     * @returns The found [[WizardStep]] at the given index `stepIndex`
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     */
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     * @param {?} stepIndex The given index
     * @return {?} The found [[WizardStep]] at the given index `stepIndex`
     */
    WizardState.prototype.getStepAtIndex = /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     * @param {?} stepIndex The given index
     * @return {?} The found [[WizardStep]] at the given index `stepIndex`
     */
    function (stepIndex) {
        if (!this.hasStep(stepIndex)) {
            throw new Error("Expected a known step, but got stepIndex: " + stepIndex + ".");
        }
        return this.wizardSteps[stepIndex];
    };
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param stepId The given step id
     * @returns The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param {?} stepId The given step id
     * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    WizardState.prototype.getIndexOfStepWithId = /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param {?} stepId The given step id
     * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    function (stepId) {
        return this.wizardSteps.findIndex((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return step.stepId === stepId; }));
    };
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param step The given [[WizardStep]]
     * @returns The found index of `step` or `-1` if the step is not included in the wizard
     */
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param {?} step The given [[WizardStep]]
     * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
     */
    WizardState.prototype.getIndexOfStep = /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param {?} step The given [[WizardStep]]
     * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
     */
    function (step) {
        return this.wizardSteps.indexOf(step);
    };
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param destinationStep The given destination step
     * @returns The calculated [[MovingDirection]]
     */
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param {?} destinationStep The given destination step
     * @return {?} The calculated [[MovingDirection]]
     */
    WizardState.prototype.getMovingDirection = /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param {?} destinationStep The given destination step
     * @return {?} The calculated [[MovingDirection]]
     */
    function (destinationStep) {
        /** @type {?} */
        var movingDirection;
        if (destinationStep > this.currentStepIndex) {
            movingDirection = MovingDirection.Forwards;
        }
        else if (destinationStep < this.currentStepIndex) {
            movingDirection = MovingDirection.Backwards;
        }
        else {
            movingDirection = MovingDirection.Stay;
        }
        return movingDirection;
    };
    WizardState.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    WizardState.ctorParameters = function () { return []; };
    return WizardState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
 * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
 * otherwise it will look like a normal `ul` component.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-navigation-bar></aw-wizard-navigation-bar>
 * ```
 *
 * @author Marc Arndt
 */
var WizardNavigationBarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state the wizard currently resides in
     */
    function WizardNavigationBarComponent(wizardState) {
        this.wizardState = wizardState;
        /**
         * The direction in which the wizard steps should be shown in the navigation bar.
         * This value can be either `left-to-right` or `right-to-left`
         */
        this.direction = 'left-to-right';
    }
    Object.defineProperty(WizardNavigationBarComponent.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationBarComponent.prototype, "wizardSteps", {
        /**
         * Returns all [[WizardStep]]s contained in the wizard
         *
         * @returns An array containing all [[WizardStep]]s
         */
        get: /**
         * Returns all [[WizardStep]]s contained in the wizard
         *
         * @return {?} An array containing all [[WizardStep]]s
         */
        function () {
            switch (this.direction) {
                case 'right-to-left':
                    return this.wizardState.wizardSteps.slice().reverse();
                case 'left-to-right':
                default:
                    return this.wizardState.wizardSteps;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationBarComponent.prototype, "numberOfWizardSteps", {
        /**
         * Returns the number of wizard steps, that need to be displaced in the navigation bar
         *
         * @returns The number of wizard steps to be displayed
         */
        get: /**
         * Returns the number of wizard steps, that need to be displaced in the navigation bar
         *
         * @return {?} The number of wizard steps to be displayed
         */
        function () {
            return this.wizardState.wizardSteps.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as current
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as current
     */
    WizardNavigationBarComponent.prototype.isCurrent = /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as current
     */
    function (wizardStep) {
        return wizardStep.selected && !wizardStep.completed && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as done
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as done
     */
    WizardNavigationBarComponent.prototype.isDone = /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as done
     */
    function (wizardStep) {
        return (wizardStep.completed && !wizardStep.selected) || this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as default
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as default
     */
    WizardNavigationBarComponent.prototype.isDefault = /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as default
     */
    function (wizardStep) {
        return !wizardStep.optional && !wizardStep.completed && !wizardStep.selected && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as editing
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as editing
     */
    WizardNavigationBarComponent.prototype.isEditing = /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as editing
     */
    function (wizardStep) {
        return wizardStep.selected && wizardStep.completed && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as optional
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as optional
     */
    WizardNavigationBarComponent.prototype.isOptional = /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as optional
     */
    function (wizardStep) {
        return wizardStep.optional && !wizardStep.completed && !wizardStep.selected && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as navigable
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as navigable
     */
    WizardNavigationBarComponent.prototype.isNavigable = /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as navigable
     */
    function (wizardStep) {
        return !wizardStep.selected && !this.wizardState.disableNavigationBar &&
            this.navigationMode.isNavigable(this.wizardState.getIndexOfStep(wizardStep));
    };
    WizardNavigationBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aw-wizard-navigation-bar',
                    template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n  <li [attr.id]=\"step.stepId\" *ngFor=\"let step of wizardSteps\"\n      [ngClass]=\"{\n        default: isDefault(step),\n        current: isCurrent(step),\n        done: isDone(step),\n        editing: isEditing(step),\n        optional: isOptional(step),\n        navigable: isNavigable(step)\n  }\">\n    <a [awGoToStep]=\"step\">\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n      </div>\n      <div class=\"step-indicator\" [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\n      </div>\n    </a>\n  </li>\n</ul>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["aw-wizard-navigation-bar.horizontal.small ul.steps-indicator{padding:24px 0 10px}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 14px);top:-7px;left:calc(50% + 14px / 2)}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li .step-indicator{position:absolute;top:-14px;left:calc(50% - 14px / 2);width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid grey}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done .step-indicator{border:2px solid #393}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #38ef38}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing .step-indicator{border:2px solid red}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:grey}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:grey;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done .step-indicator{background-color:#393;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#38ef38;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing .step-indicator{background-color:red;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:grey;border:2px solid grey}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done .step-indicator{color:#393;border:2px solid #393}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#38ef38;border:2px solid #38ef38}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing .step-indicator{color:red;border:2px solid red}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767;color:#676767}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326;color:#267326}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212;color:#12e212}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00;color:#c00}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:grey;color:grey}aw-wizard-navigation-bar.horizontal ul.steps-indicator{display:flex;flex-direction:row;justify-content:center;margin:0;width:100%;list-style:none}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2:before{left:25%;right:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2 li{width:50%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3:before{left:16.66666667%;right:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3 li{width:33.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4:before{left:12.5%;right:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4 li{width:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5:before{left:10%;right:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5 li{width:20%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6:before{left:8.33333333%;right:8.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6 li{width:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7:before{left:7.14285714%;right:7.14285714%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7 li{width:14.28571429%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8:before{left:6.25%;right:6.25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8 li{width:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9:before{left:5.55555556%;right:5.55555556%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9 li{width:11.11111111%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10:before{left:5%;right:5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10 li{width:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.horizontal ul.steps-indicator li{position:relative;margin:0;padding:0;pointer-events:none;text-align:center}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a{cursor:pointer}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a .label{display:inline-block;padding-top:10px;color:grey;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:center;font-weight:700;transition:.25s}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a:hover .label{color:#4d4d4d}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a .label{color:grey}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.navigable{pointer-events:auto}", "aw-wizard-navigation-bar.vertical{max-width:280px;width:20%;height:100%;position:-webkit-sticky;position:sticky;top:0}aw-wizard-navigation-bar.vertical.small ul.steps-indicator{padding:5px 5px 5px 19px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-7px;top:14px;height:calc(100% - 14px);width:1px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li a{min-height:14px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-14px;width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid grey}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done .step-indicator{border:2px solid #393}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #38ef38}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing .step-indicator{border:2px solid red}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:grey}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:grey;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done .step-indicator{background-color:#393;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#38ef38;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing .step-indicator{background-color:red;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:grey;border:2px solid grey}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done .step-indicator{color:#393;border:2px solid #393}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#38ef38;border:2px solid #38ef38}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing .step-indicator{color:red;border:2px solid red}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767;color:#676767}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326;color:#267326}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212;color:#12e212}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00;color:#c00}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:grey;color:grey}aw-wizard-navigation-bar.vertical ul.steps-indicator{display:flex;flex-direction:column;justify-content:center;list-style:none;margin:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.vertical ul.steps-indicator li{position:relative;pointer-events:none}aw-wizard-navigation-bar.vertical ul.steps-indicator li:not(:last-child){margin-bottom:0;padding-bottom:10px}aw-wizard-navigation-bar.vertical ul.steps-indicator li a{display:flex;flex-direction:row;align-items:center;cursor:pointer}aw-wizard-navigation-bar.vertical ul.steps-indicator li a .label{margin-left:15px;color:grey;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:left;font-weight:700;transition:.25s}aw-wizard-navigation-bar.vertical ul.steps-indicator li a:hover .label{color:#4d4d4d}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a .label{color:grey}aw-wizard-navigation-bar.vertical ul.steps-indicator li.navigable{pointer-events:auto}"]
                }] }
    ];
    /** @nocollapse */
    WizardNavigationBarComponent.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    WizardNavigationBarComponent.propDecorators = {
        direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return WizardNavigationBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard-step` component is used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WizardStepComponent, _super);
    function WizardStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStepComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aw-wizard-step',
                    template: "<ng-content></ng-content>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    providers: [
                        { provide: WizardStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return WizardStepComponent; })) }
                    ],
                    styles: ["aw-wizard-step{height:auto;width:100%}"]
                }] }
    ];
    return WizardStepComponent;
}(WizardStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard` component defines the root component of a wizard.
 * Through the setting of input parameters for the `aw-wizard` component it's possible to change the location and size
 * of its navigation bar.
 *
 * ### Syntax
 * ```html
 * <aw-wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
 *     ...
 * </aw-wizard>
 * ```
 *
 * ### Example
 *
 * Without completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 * </aw-wizard>
 * ```
 *
 * With completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-completion-step>...</aw-wizard-completion-step>
 * </aw-wizard>
 * ```
 *
 * @author Marc Arndt
 */
var WizardComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param model The model for this wizard component
     */
    function WizardComponent(model) {
        this.model = model;
        /**
         * The location of the navigation bar inside the wizard.
         * This location can be either top, bottom, left or right
         */
        this.navBarLocation = 'top';
        /**
         * The layout of the navigation bar inside the wizard.
         * The layout can be either small, large-filled, large-empty or large-symbols
         */
        this.navBarLayout = 'small';
        /**
         * The direction in which the steps inside the navigation bar should be shown.
         * The direction can be either `left-to-right` or `right-to-left`
         */
        this.navBarDirection = 'left-to-right';
        /**
         * The navigation mode used for transitioning between different steps.
         * The navigation mode can be either `strict`, `semi-strict` or `free`
         */
        this.navigationMode = 'strict';
        /**
         * The initially selected step, represented by its index
         */
        this.defaultStepIndex = 0;
        /**
         * True, if the navigation bar shouldn't be used for navigating
         */
        this.disableNavigationBar = false;
    }
    Object.defineProperty(WizardComponent.prototype, "horizontalOrientation", {
        /**
         * Returns true if this wizard uses a horizontal orientation.
         * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
         *
         * @returns True if this wizard uses a horizontal orientation
         */
        get: /**
         * Returns true if this wizard uses a horizontal orientation.
         * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
         *
         * @return {?} True if this wizard uses a horizontal orientation
         */
        function () {
            return this.navBarLocation === 'top' || this.navBarLocation === 'bottom';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "verticalOrientation", {
        /**
         * Returns true if this wizard uses a vertical orientation.
         * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
         *
         * @returns True if this wizard uses a vertical orientation
         */
        get: /**
         * Returns true if this wizard uses a vertical orientation.
         * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
         *
         * @return {?} True if this wizard uses a vertical orientation
         */
        function () {
            return this.navBarLocation === 'left' || this.navBarLocation === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "navigation", {
        /**
         * The navigation mode for this wizard
         */
        get: /**
         * The navigation mode for this wizard
         * @return {?}
         */
        function () {
            return this.model.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the model after certain input values have changed
     *
     * @param changes The detected changes
     */
    /**
     * Updates the model after certain input values have changed
     *
     * @param {?} changes The detected changes
     * @return {?}
     */
    WizardComponent.prototype.ngOnChanges = /**
     * Updates the model after certain input values have changed
     *
     * @param {?} changes The detected changes
     * @return {?}
     */
    function (changes) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var propName = _c.value;
                /** @type {?} */
                var change = changes[propName];
                if (!change.firstChange) {
                    switch (propName) {
                        case 'defaultStepIndex':
                            this.model.defaultStepIndex = parseInt(change.currentValue, 10);
                            break;
                        case 'disableNavigationBar':
                            this.model.disableNavigationBar = change.currentValue;
                            break;
                        case 'navigationMode':
                            this.model.updateNavigationMode(change.currentValue);
                            break;
                        /* istanbul ignore next */
                        default:
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    WizardComponent.prototype.ngAfterContentInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        var _this = this;
        // add a subscriber to the wizard steps QueryList to listen to changes in the DOM
        this.wizardSteps.changes.subscribe((/**
         * @param {?} changedWizardSteps
         * @return {?}
         */
        function (changedWizardSteps) {
            _this.model.updateWizardSteps(changedWizardSteps.toArray());
        }));
        // initialize the model
        this.model.disableNavigationBar = this.disableNavigationBar;
        this.model.defaultStepIndex = this.defaultStepIndex;
        this.model.updateWizardSteps(this.wizardSteps.toArray());
        this.model.updateNavigationMode(this.navigationMode);
        // finally reset the whole wizard state
        this.navigation.reset();
    };
    WizardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aw-wizard',
                    template: "<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'left',\n    horizontal: navBarLocation == 'top',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n\n<div [ngClass]=\"{\n  'wizard-steps': true,\n  vertical: navBarLocation == 'left' || navBarLocation == 'right',\n  horizontal: navBarLocation == 'top' || navBarLocation == 'bottom'\n}\">\n  <ng-content></ng-content>\n</div>\n\n<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'right',\n    horizontal: navBarLocation == 'bottom',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    providers: [WizardState],
                    styles: ["aw-wizard{display:flex;justify-content:flex-start}aw-wizard.vertical{flex-direction:row}aw-wizard.horizontal{flex-direction:column}aw-wizard .wizard-steps{top:0;display:flex}aw-wizard .wizard-steps.vertical{min-width:calc(100% - 280px);width:80%;height:100%;flex-direction:column}aw-wizard .wizard-steps.horizontal{width:100%;flex-direction:row}"]
                }] }
    ];
    /** @nocollapse */
    WizardComponent.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    WizardComponent.propDecorators = {
        wizardSteps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [WizardStep,] }],
        navBarLocation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navBarLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navBarDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navigationMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        defaultStepIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disableNavigationBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        horizontalOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.horizontal',] }],
        verticalOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.vertical',] }]
    };
    return WizardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awEnableBackLinks` directive can be used to allow the user to leave a [[WizardCompletionStep]] after is has been entered.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step awEnableBackLinks (stepExit)="exit function">
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Final step" awEnableBackLinks>
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var EnableBackLinksDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param completionStep The wizard completion step, which should be exitable
     */
    function EnableBackLinksDirective(completionStep) {
        this.completionStep = completionStep;
        /**
         * This EventEmitter is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    EnableBackLinksDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        this.completionStep.canExit = true;
        this.completionStep.stepExit = this.stepExit;
    };
    EnableBackLinksDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awEnableBackLinks]'
                },] }
    ];
    /** @nocollapse */
    EnableBackLinksDirective.ctorParameters = function () { return [
        { type: WizardCompletionStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
    ]; };
    EnableBackLinksDirective.propDecorators = {
        stepExit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return EnableBackLinksDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks whether the given `value` implements the interface [[StepId]].
 *
 * @param {?} value The value to be checked
 * @return {?} True if the given value implements [[StepId]] and false otherwise
 */
function isStepId(value) {
    return value.hasOwnProperty('stepId') && !(value instanceof WizardStep);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks whether the given `value` implements the interface [[StepIndex]].
 *
 * @param {?} value The value to be checked
 * @return {?} True if the given value implements [[StepIndex]] and false otherwise
 */
function isStepIndex(value) {
    return value.hasOwnProperty('stepIndex');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks whether the given `value` implements the interface [[StepOffset]].
 *
 * @param {?} value The value to be checked
 * @return {?} True if the given value implements [[StepOffset]] and false otherwise
 */
function isStepOffset(value) {
    return value.hasOwnProperty('stepOffset');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awGoToStep` directive can be used to navigate to a given step.
 * This step can be defined in one of multiple formats
 *
 * ### Syntax
 *
 * With absolute step index:
 *
 * ```html
 * <button [awGoToStep]="{ stepIndex: absolute step index }" (finalize)="finalize method">...</button>
 * ```
 *
 * With unique step id:
 *
 * ```html
 * <button [awGoToStep]="{ stepId: 'step id of destination step' }" (finalize)="finalize method">...</button>
 * ```
 *
 * With a wizard step object:
 *
 * ```html
 * <button [awGoToStep]="wizard step object" (finalize)="finalize method">...</button>
 * ```
 *
 * With an offset to the defining step:
 *
 * ```html
 * <button [awGoToStep]="{ stepOffset: offset }" (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var GoToStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     * @param wizardStep The wizard step, which contains this [[GoToStepDirective]]
     */
    function GoToStepDirective(wizardState, wizardStep) {
        this.wizardState = wizardState;
        this.wizardStep = wizardStep;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(GoToStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: /**
         * A convenience field for `preFinalize`
         * @return {?}
         */
        function () {
            return this.preFinalize;
        },
        /**
         * A convenience name for `preFinalize`
         *
         * @param emitter The [[EventEmitter]] to be set
         */
        set: /**
         * A convenience name for `preFinalize`
         *
         * @param {?} emitter The [[EventEmitter]] to be set
         * @return {?}
         */
        function (emitter) {
            /* istanbul ignore next */
            this.preFinalize = emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoToStepDirective.prototype, "destinationStep", {
        /**
         * Returns the destination step of this directive as an absolute step index inside the wizard
         *
         * @returns The index of the destination step
         * @throws If `targetStep` is of an unknown type an `Error` is thrown
         */
        get: /**
         * Returns the destination step of this directive as an absolute step index inside the wizard
         *
         * @throws If `targetStep` is of an unknown type an `Error` is thrown
         * @return {?} The index of the destination step
         */
        function () {
            /** @type {?} */
            var destinationStep;
            if (isStepIndex(this.targetStep)) {
                destinationStep = this.targetStep.stepIndex;
            }
            else if (isStepId(this.targetStep)) {
                destinationStep = this.wizardState.getIndexOfStepWithId(this.targetStep.stepId);
            }
            else if (isStepOffset(this.targetStep) && this.wizardStep !== null) {
                destinationStep = this.wizardState.getIndexOfStep(this.wizardStep) + this.targetStep.stepOffset;
            }
            else if (this.targetStep instanceof WizardStep) {
                destinationStep = this.wizardState.getIndexOfStep(this.targetStep);
            }
            else {
                throw new Error("Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId");
            }
            return destinationStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoToStepDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @private
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     */
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     * @param {?} event
     * @return {?}
     */
    GoToStepDirective.prototype.onClick = /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.navigationMode.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
    };
    GoToStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awGoToStep]'
                },] }
    ];
    /** @nocollapse */
    GoToStepDirective.ctorParameters = function () { return [
        { type: WizardState },
        { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    GoToStepDirective.propDecorators = {
        preFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        postFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        targetStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['awGoToStep',] }],
        finalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
    };
    return GoToStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awNextStep` directive can be used to navigate to the next step.
 *
 * ### Syntax
 *
 * ```html
 * <button awNextStep (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var NextStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard
     */
    function NextStepDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(NextStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: /**
         * A convenience field for `preFinalize`
         * @return {?}
         */
        function () {
            return this.preFinalize;
        },
        /**
         * A convenience name for `preFinalize`
         *
         * @param emitter The [[EventEmitter]] to be set
         */
        set: /**
         * A convenience name for `preFinalize`
         *
         * @param {?} emitter The [[EventEmitter]] to be set
         * @return {?}
         */
        function (emitter) {
            /* istanbul ignore next */
            this.preFinalize = emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NextStepDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @private
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     */
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     * @param {?} event
     * @return {?}
     */
    NextStepDirective.prototype.onClick = /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.navigationMode.goToNextStep(this.preFinalize, this.postFinalize);
    };
    NextStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awNextStep]'
                },] }
    ];
    /** @nocollapse */
    NextStepDirective.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    NextStepDirective.propDecorators = {
        preFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        postFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        finalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
    };
    return NextStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awOptionalStep` directive can be used to define an optional `wizard-step`.
 * An optional wizard step is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="Second step" awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var OptionalStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
     */
    function OptionalStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    OptionalStepDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        this.wizardStep.optional = true;
    };
    OptionalStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awOptionalStep]'
                },] }
    ];
    /** @nocollapse */
    OptionalStepDirective.ctorParameters = function () { return [
        { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
    ]; };
    return OptionalStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awPreviousStep` directive can be used to navigate to the previous step.
 * Compared to the [[NextStepDirective]] it's important to note, that this directive doesn't contain a `finalize` output method.
 *
 * ### Syntax
 *
 * ```html
 * <button awPreviousStep>...</button>
 * ```
 *
 * @author Marc Arndt
 */
var PreviousStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard
     */
    function PreviousStepDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(PreviousStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: /**
         * A convenience field for `preFinalize`
         * @return {?}
         */
        function () {
            return this.preFinalize;
        },
        /**
         * A convenience field for `preFinalize`
         *
         * @param emitter The [[EventEmitter]] to be set
         */
        set: /**
         * A convenience field for `preFinalize`
         *
         * @param {?} emitter The [[EventEmitter]] to be set
         * @return {?}
         */
        function (emitter) {
            /* istanbul ignore next */
            this.preFinalize = emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreviousStepDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @private
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     */
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     * @param {?} event
     * @return {?}
     */
    PreviousStepDirective.prototype.onClick = /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.navigationMode.goToPreviousStep(this.preFinalize, this.postFinalize);
    };
    PreviousStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awPreviousStep]'
                },] }
    ];
    /** @nocollapse */
    PreviousStepDirective.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    PreviousStepDirective.propDecorators = {
        preFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        postFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        finalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
    };
    return PreviousStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awResetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button awResetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var ResetWizardDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     */
    function ResetWizardDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
         */
        this.finalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ResetWizardDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @private
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets the wizard
     */
    /**
     * Resets the wizard
     * @param {?} event
     * @return {?}
     */
    ResetWizardDirective.prototype.onClick = /**
     * Resets the wizard
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // do some optional cleanup work
        this.finalize.emit();
        // reset the wizard to its initial state
        this.navigationMode.reset();
    };
    ResetWizardDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awResetWizard]'
                },] }
    ];
    /** @nocollapse */
    ResetWizardDirective.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    ResetWizardDirective.propDecorators = {
        finalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
    };
    return ResetWizardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awSelectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step stepTitle="Step title" awSelectedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var SelectedStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which should be selected by default
     */
    function SelectedStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    SelectedStepDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        this.wizardStep.defaultSelected = true;
    };
    SelectedStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awSelectedStep]'
                },] }
    ];
    /** @nocollapse */
    SelectedStepDirective.ctorParameters = function () { return [
        { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
    ]; };
    return SelectedStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awWizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
 * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard`, and all steps inside the `wizard`,
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <div awWizardCompletionStep [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'font-family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </div>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WizardCompletionStepDirective, _super);
    function WizardCompletionStepDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardCompletionStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awWizardCompletionStep]',
                    providers: [
                        { provide: WizardStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return WizardCompletionStepDirective; })) },
                        { provide: WizardCompletionStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return WizardCompletionStepDirective; })) }
                    ]
                },] }
    ];
    return WizardCompletionStepDirective;
}(WizardCompletionStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awWizardStep` directive can be used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WizardStepDirective, _super);
    function WizardStepDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awWizardStep]',
                    providers: [
                        { provide: WizardStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return WizardStepDirective; })) }
                    ]
                },] }
    ];
    return WizardStepDirective;
}(WizardStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The module defining all the content inside `angular-archwizard`
 *
 * @author Marc Arndt
 */
var ArchwizardModule = /** @class */ (function () {
    function ArchwizardModule() {
    }
    /* istanbul ignore next */
    /* istanbul ignore next */
    /**
     * @return {?}
     */
    ArchwizardModule.forRoot = /* istanbul ignore next */
    /**
     * @return {?}
     */
    function () {
        return { ngModule: ArchwizardModule, providers: [] };
    };
    ArchwizardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        WizardComponent,
                        WizardStepComponent,
                        WizardNavigationBarComponent,
                        WizardCompletionStepComponent,
                        GoToStepDirective,
                        NextStepDirective,
                        PreviousStepDirective,
                        OptionalStepDirective,
                        WizardStepSymbolDirective,
                        WizardStepTitleDirective,
                        EnableBackLinksDirective,
                        WizardStepDirective,
                        WizardCompletionStepDirective,
                        SelectedStepDirective,
                        ResetWizardDirective
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [
                        WizardComponent,
                        WizardStepComponent,
                        WizardNavigationBarComponent,
                        WizardCompletionStepComponent,
                        GoToStepDirective,
                        NextStepDirective,
                        PreviousStepDirective,
                        OptionalStepDirective,
                        WizardStepSymbolDirective,
                        WizardStepTitleDirective,
                        EnableBackLinksDirective,
                        WizardStepDirective,
                        WizardCompletionStepDirective,
                        SelectedStepDirective,
                        ResetWizardDirective
                    ]
                },] }
    ];
    return ArchwizardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1hcmNod2l6YXJkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXRpdGxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2NvbXBvbmVudHMvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0udHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vZnJlZS1uYXZpZ2F0aW9uLW1vZGUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvbmF2aWdhdGlvbi9zZW1pLXN0cmljdC1uYXZpZ2F0aW9uLW1vZGUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvbmF2aWdhdGlvbi9zdHJpY3QtbmF2aWdhdGlvbi1tb2RlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2NvbXBvbmVudHMvd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9jb21wb25lbnRzL3dpemFyZC1zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9lbmFibGUtYmFjay1saW5rcy5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvdXRpbC9zdGVwLWlkLmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3N0ZXAtaW5kZXguaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL3V0aWwvc3RlcC1vZmZzZXQuaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvZ28tdG8tc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9uZXh0LXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvb3B0aW9uYWwtc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9wcmV2aW91cy1zdGVwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3Jlc2V0LXdpemFyZC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9zZWxlY3RlZC1zdGVwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2FyY2h3aXphcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byB0aGUgYG5hdmlnYXRpb25TeW1ib2xgIGlucHV0IG9mIGEgW1tXaXphcmRTdGVwXV1cbiAqIHRvIGRlZmluZSB0aGUgc3RlcCBzeW1ib2wgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci4gIFRoaXMgd2F5IHN0ZXAgc3ltYm9sIG1heSBjb250YWluIGFyYml0cmFyeSBjb250ZW50LlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxuICogICAgIC4uLlxuICogPC9uZy10ZW1wbGF0ZT5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthd1N0ZXBTeW1ib2xdLCBuZy10ZW1wbGF0ZVthd1dpemFyZFN0ZXBTeW1ib2xdJ1xufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZVJlZiBBIHJlZmVyZW5jZSB0byB0aGUgY29udGVudCBvZiB0aGUgYG5nLXRlbXBsYXRlYCB0aGF0IGNvbnRhaW5zIHRoaXMgW1tXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlXV1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBgYXdXaXphcmRTdGVwVGl0bGVgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byB0aGUgYHN0ZXBUaXRsZWAgaW5wdXQgb2YgYSBbW1dpemFyZFN0ZXBdXVxuICogdG8gZGVmaW5lIHRoZSBjb250ZW50IG9mIGEgc3RlcCB0aXRsZSBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLlxuICogVGhpcyBzdGVwIHRpdGxlIGNhbiBiZSBmcmVlbHkgY3JlYXRlZCBhbmQgY2FuIGNvbnRhaW4gbW9yZSB0aGFuIG9ubHkgcGxhaW4gdGV4dFxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwVGl0bGU+XG4gKiAgICAgLi4uXG4gKiA8L25nLXRlbXBsYXRlPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F3U3RlcFRpdGxlXSwgbmctdGVtcGxhdGVbYXdXaXphcmRTdGVwVGl0bGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlUmVmIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250ZW50IG9mIHRoZSBgbmctdGVtcGxhdGVgIHRoYXQgY29udGFpbnMgdGhpcyBbW1dpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZV1dXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXN5bWJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge05hdmlnYXRpb25TeW1ib2x9IGZyb20gJy4vbmF2aWdhdGlvbi1zeW1ib2wuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBCYXNpYyBmdW5jdGlvbmFsaXR5IGV2ZXJ5IHR5cGUgb2Ygd2l6YXJkIHN0ZXAgbmVlZHMgdG8gcHJvdmlkZVxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2l6YXJkU3RlcCB7XG4gIC8qKlxuICAgKiBBIHN0ZXAgdGl0bGUgcHJvcGVydHksIHdoaWNoIGNvbnRhaW5zIHRoZSB2aXNpYmxlIGhlYWRlciB0aXRsZSBvZiB0aGUgc3RlcC5cbiAgICogVGhpcyB0aXRsZSBpcyB0aGVuIHNob3duIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIENvbXBhcmVkIHRvIGBzdGVwVGl0bGVgIHRoaXMgcHJvcGVydHkgY2FuIGNvbnRhaW4gYW55IGh0bWwgY29udGVudCBhbmQgbm90IG9ubHkgcGxhaW4gdGV4dFxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUpXG4gIHB1YmxpYyBzdGVwVGl0bGVUZW1wbGF0ZTogV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBBIHN0ZXAgc3ltYm9sIHByb3BlcnR5IHRoYXQsIGlmIGRlZmluZWQsIG92ZXJyaWRlcyBgbmF2aWdhdGlvblN5bWJvbGAuXG4gICAqIEFsbG93cyB0byBkaXNwbGF5IGFyYml0cmFyeSBjb250ZW50IGFzIGEgc3RlcCBzeW1ib2wgaW5zdGVhZCBvZiBwbGFpbiB0ZXh0LlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlKVxuICBwdWJsaWMgc3RlcFN5bWJvbFRlbXBsYXRlOiBXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBBIHN0ZXAgaWQsIHVuaXF1ZSB0byB0aGUgc3RlcFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHN0ZXBJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0ZXAgdGl0bGUgcHJvcGVydHksIHdoaWNoIGNvbnRhaW5zIHRoZSB2aXNpYmxlIGhlYWRlciB0aXRsZSBvZiB0aGUgc3RlcC5cbiAgICogVGhpcyB0aXRsZSBpcyBvbmx5IHNob3duIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIsIGlmIGBzdGVwVGl0bGVUZW1wbGF0ZWAgaXMgbm90IGRlZmluZWQgb3IgbnVsbC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdGVwVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzeW1ib2wgcHJvcGVydHksIHdoaWNoIGNvbnRhaW5zIGFuIG9wdGlvbmFsIHN5bWJvbCBmb3IgdGhlIHN0ZXAgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogVGFrZXMgZWZmZWN0IHdoZW4gYHN0ZXBTeW1ib2xUZW1wbGF0ZWAgaXMgbm90IGRlZmluZWQgb3IgbnVsbC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBuYXZpZ2F0aW9uU3ltYm9sOiBOYXZpZ2F0aW9uU3ltYm9sID0ge3N5bWJvbDogJyd9O1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaGFzIGJlZW4gY29tcGxldGVkXG4gICAqL1xuICBwdWJsaWMgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbiBkZXNjcmliaW5nIGlmIHRoZSB3aXphcmQgc3RlcCBpcyBjdXJyZW50bHkgc2VsZWN0ZWRcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZywgaWYgdGhlIHdpemFyZCBzdGVwIHNob3VsZCBiZSBzZWxlY3RlZCBieSBkZWZhdWx0LCBpLmUuIGFmdGVyIHRoZSB3aXphcmQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYXMgdGhlIGluaXRpYWwgc3RlcFxuICAgKi9cbiAgcHVibGljIGRlZmF1bHRTZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaXMgYW4gb3B0aW9uYWwgc3RlcFxuICAgKi9cbiAgcHVibGljIG9wdGlvbmFsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gb3IgYm9vbGVhbiBkZWNpZGluZywgaWYgdGhpcyBzdGVwIGNhbiBiZSBlbnRlcmVkXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgY2FuRW50ZXI6ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHwgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfCBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBvciBib29sZWFuIGRlY2lkaW5nLCBpZiB0aGlzIHN0ZXAgY2FuIGJlIGV4aXRlZFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNhbkV4aXQ6ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHwgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfCBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGVudGVyZWQuXG4gICAqIFRoZSBib3VuZCBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgdG8gZG8gaW5pdGlhbGl6YXRpb24gd29yay5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc3RlcEVudGVyOiBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZXhpdGVkLlxuICAgKiBUaGUgYm91bmQgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGRvIGNsZWFudXAgd29yay5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc3RlcEV4aXQ6IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhpcyB3aXphcmQgc3RlcCBzaG91bGQgYmUgdmlzaWJsZSB0byB0aGUgdXNlci5cbiAgICogSWYgdGhlIHN0ZXAgc2hvdWxkIGJlIHZpc2libGUgdG8gdGhlIHVzZXIgZmFsc2UgaXMgcmV0dXJuZWQsIG90aGVyd2lzZSB0cnVlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2hpZGRlbicpXG4gIHB1YmxpYyBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5zZWxlY3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIHRyYW5zaXRpb25lZCB3aXRoIGEgZ2l2ZW4gZGlyZWN0aW9uLlxuICAgKiBUcmFuc2l0aW9uZWQgaW4gdGhpcyBjYXNlIG1lYW5zIGVpdGhlciBlbnRlcmVkIG9yIGV4aXRlZCwgZGVwZW5kaW5nIG9uIHRoZSBnaXZlbiBgY29uZGl0aW9uYCBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSBjb25kaXRpb24gQSBjb25kaXRpb24gdmFyaWFibGUsIGRlY2lkaW5nIGlmIHRoZSBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWRcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgdHJhbnNpdGlvbmVkXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoaXMgc3RlcCBjYW4gdHJhbnNpdGlvbmVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biBpZiBgY29uZGl0aW9uYCBpcyBuZWl0aGVyIGEgZnVuY3Rpb24gbm9yIGEgYm9vbGVhblxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgY2FuVHJhbnNpdGlvblN0ZXAoY29uZGl0aW9uOiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKHR5cGVvZihjb25kaXRpb24pID09PSB0eXBlb2YodHJ1ZSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZGl0aW9uIGFzIGJvb2xlYW4pO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZGl0aW9uKGRpcmVjdGlvbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBJbnB1dCB2YWx1ZSAnJHtjb25kaXRpb259JyBpcyBuZWl0aGVyIGEgYm9vbGVhbiBub3IgYSBmdW5jdGlvbmApKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBlbnRlcmVkXG4gICAqXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgc3RlcCBpcyBlbnRlcmVkXG4gICAqL1xuICBwdWJsaWMgZW50ZXIoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLnN0ZXBFbnRlci5lbWl0KGRpcmVjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBleGl0ZWRcbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBzdGVwIGlzIGV4aXRlZFxuICAgKi9cbiAgcHVibGljIGV4aXQoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pIHtcbiAgICB0aGlzLnN0ZXBFeGl0LmVtaXQoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgZnJvbSB0aGUgZ2l2ZW4gZGlyZWN0aW9uLlxuICAgKiBCZWNhdXNlIHRoaXMgbWV0aG9kIGRlcGVuZHMgb24gdGhlIHZhbHVlIGBjYW5FbnRlcmAsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IsIGlmIGBjYW5FbnRlcmAgaXMgbmVpdGhlciBhIGJvb2xlYW5cbiAgICogbm9yIGEgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGlzIHN0ZXAgc2hvdWxkIGJlIGVudGVyZWRcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhlIHN0ZXAgY2FuIGJlIGVudGVyZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24gaWYgYGFuRW50ZXJgIGlzIG5laXRoZXIgYSBmdW5jdGlvbiBub3IgYSBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgY2FuRW50ZXJTdGVwKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIFdpemFyZFN0ZXAuY2FuVHJhbnNpdGlvblN0ZXAodGhpcy5jYW5FbnRlciwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIGV4aXRlZCBpbnRvIGdpdmVuIGRpcmVjdGlvbi5cbiAgICogQmVjYXVzZSB0aGlzIG1ldGhvZCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSBgY2FuRXhpdGAsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IsIGlmIGBjYW5FeGl0YCBpcyBuZWl0aGVyIGEgYm9vbGVhblxuICAgKiBub3IgYSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgbGVmdFxuICAgKiBAcmV0dXJucyBBIFtbUHJvbWlzZV1dIGNvbnRhaW5pbmcgYHRydWVgLCBpZiB0aGUgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duIGlmIGBjYW5FeGl0YCBpcyBuZWl0aGVyIGEgZnVuY3Rpb24gbm9yIGEgYm9vbGVhblxuICAgKi9cbiAgcHVibGljIGNhbkV4aXRTdGVwKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIFdpemFyZFN0ZXAuY2FuVHJhbnNpdGlvblN0ZXAodGhpcy5jYW5FeGl0LCBkaXJlY3Rpb24pO1xuICB9XG59XG4iLCJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4vd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5cbi8qKlxuICogQmFzaWMgZnVuY3Rpb25hbGl0eSBldmVyeSB3aXphcmQgY29tcGxldGlvbiBzdGVwIG5lZWRzIHRvIHByb3ZpZGVcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpemFyZENvbXBsZXRpb25TdGVwIGV4dGVuZHMgV2l6YXJkU3RlcCB7XG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcHVibGljIHN0ZXBFeGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgY2FuRXhpdDogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgZW50ZXIoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGVwRW50ZXIuZW1pdChkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgZXhpdChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IHZvaWQge1xuICAgIC8vIHNldCB0aGlzIGNvbXBsZXRpb24gc3RlcCBhcyBpbmNvbXBsZXRlXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0ZXBFeGl0LmVtaXQoZGlyZWN0aW9uKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhdy13aXphcmQtY29tcGxldGlvbi1zdGVwYCBjb21wb25lbnQgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgY29tcGxldGlvbi9zdWNjZXNzIHN0ZXAgYXQgdGhlIGVuZCBvZiB5b3VyIHdpemFyZFxuICogQWZ0ZXIgYSBgYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcGAgaGFzIGJlZW4gZW50ZXJlZCwgaXQgaGFzIHRoZSBjaGFyYWN0ZXJpc3RpYyB0aGF0IHRoZSB1c2VyIGlzIGJsb2NrZWQgZnJvbVxuICogbGVhdmluZyBpdCBhZ2FpbiB0byBhIHByZXZpb3VzIHN0ZXAuXG4gKiBJbiBhZGRpdGlvbiBlbnRlcmluZyBhIGBhdy13aXphcmQtY29tcGxldGlvbi1zdGVwYCBhdXRvbWF0aWNhbGx5IHNldHMgdGhlIGBhdy13aXphcmRgIGFuZCBhbGwgc3RlcHMgaW5zaWRlIHRoZSBgYXctd2l6YXJkYFxuICogYXMgY29tcGxldGVkLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBbc3RlcFRpdGxlXT1cInRpdGxlIG9mIHRoZSB3aXphcmQgc3RlcFwiXG4gKiAgICBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJ25hdmlnYXRpb24gc3ltYm9sJywgZm9udEZhbWlseTogJ25hdmlnYXRpb24gc3ltYm9sIGZvbnQgZmFtaWx5JyB9XCJcbiAqICAgIChzdGVwRW50ZXIpPVwiZXZlbnQgZW1pdHRlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgd2l6YXJkIHN0ZXAgaXMgZW50ZXJlZFwiXG4gKiAgICAoc3RlcEV4aXQpPVwiZXZlbnQgZW1pdHRlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgd2l6YXJkIHN0ZXAgaXMgZXhpdGVkXCI+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXAgc3RlcFRpdGxlPVwiU3RlcCAxXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcxJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIGBgYFxuICpcbiAqIFdpdGggYSBuYXZpZ2F0aW9uIHN5bWJvbCBmcm9tIHRoZSBgZm9udC1hd2Vzb21lYCBmb250OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgMVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnJiN4ZjFiYTsnLCBmb250RmFtaWx5OiAnRm9udEF3ZXNvbWUnIH1cIj5cbiAqICAgIC4uLlxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXAnLFxuICB0ZW1wbGF0ZVVybDogJ3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCl9LFxuICAgIHtwcm92aWRlOiBXaXphcmRDb21wbGV0aW9uU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQpfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50IGV4dGVuZHMgV2l6YXJkQ29tcGxldGlvblN0ZXAge1xufVxuIiwiLyoqXG4gKiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIGEgc3RlcCB0cmFuc2l0aW9uIHdhcyBtYWRlXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cblxuLyoqXG4gKiBUaGlzIGVudW0gY29udGFpbnMgdGhlIGRpZmZlcmVudCBwb3NzaWJsZSBtb3ZpbmcgZGlyZWN0aW9ucyBpbiB3aGljaCBhIHdpemFyZCBjYW4gYmUgdHJhdmVyc2VkXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBlbnVtIE1vdmluZ0RpcmVjdGlvbiB7XG4gIC8qKlxuICAgKiBBIGZvcndhcmQgc3RlcCB0cmFuc2l0aW9uXG4gICAqL1xuICBGb3J3YXJkcyxcbiAgLyoqXG4gICAqIEEgYmFja3dhcmQgc3RlcCB0cmFuc2l0aW9uXG4gICAqL1xuICBCYWNrd2FyZHMsXG4gIC8qKlxuICAgKiBObyBzdGVwIHRyYW5zaXRpb24gd2FzIGRvbmVcbiAgICovXG4gIFN0YXlcbn1cbiIsImltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4vd2l6YXJkLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBbiBpbnRlcmZhY2UgZGVzY3JpYmluZyB0aGUgYmFzaWMgZnVuY3Rpb25hbGl0eSwgd2hpY2ggbXVzdCBiZSBwcm92aWRlZCBieSBhIG5hdmlnYXRpb24gbW9kZS5cbiAqIEEgbmF2aWdhdGlvbiBtb2RlIG1hbmFnZXMgdGhlIG5hdmlnYXRpb24gYmV0d2VlbiBkaWZmZXJlbnQgd2l6YXJkIHN0ZXBzLCB0aGlzIGNvbnRhaW5zIHRoZSB2YWxpZGF0aW9uLCBpZiBhIHN0ZXAgdHJhbnNpdGlvbiBjYW4gYmUgZG9uZVxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmF2aWdhdGlvbk1vZGUge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgd2l6YXJkIHN0ZXAsIGFzIGRlZmluZWQgYnkgdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvLlxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY2FuIGJlIHRyYW5zaXRpb25lZCB0byBhbmQgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBhYnN0cmFjdCBjYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiBUcmllcyB0byB0cmFuc2l0aW9uIHRvIHRoZSB3aXphcmQgc3RlcCwgYXMgZGVub3RlZCBieSB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXG4gICAqIElmIHRoaXMgaXMgbm90IHBvc3NpYmxlLCB0aGUgY3VycmVudCB3aXphcmQgc3RlcCBzaG91bGQgYmUgZXhpdGVkIGFuZCB0aGVuIHJlZW50ZXJlZCB3aXRoIGBNb3ZpbmdEaXJlY3Rpb24uU3RheWBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICovXG4gIGFic3RyYWN0IGdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlciwgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciB0aGUgd2l6YXJkIHN0ZXAsIGxvY2F0ZWQgYXQgdGhlIGdpdmVuIGluZGV4LCBpcyBjYW4gYmUgbmF2aWdhdGVkIHRvXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBuYXZpZ2F0ZWQgdG8sIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgYWJzdHJhY3QgaXNOYXZpZ2FibGUoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBzdGF0ZSBvZiB0aGlzIHdpemFyZC5cbiAgICogQSByZXNldCB0cmFuc2l0aW9ucyB0aGUgd2l6YXJkIGF1dG9tYXRpY2FsbHkgdG8gdGhlIGZpcnN0IHN0ZXAgYW5kIHNldHMgYWxsIHN0ZXBzIGFzIGluY29tcGxldGUuXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGVcbiAgICovXG4gIGFic3RyYWN0IHJlc2V0KCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIHRyYW5zaXRpb24gdGhlIHdpemFyZCB0byB0aGUgcHJldmlvdXMgc3RlcCBmcm9tIHRoZSBgY3VycmVudFN0ZXBgXG4gICAqL1xuICBnb1RvUHJldmlvdXNTdGVwKHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy53aXphcmRTdGF0ZS5oYXNQcmV2aW91c1N0ZXAoKSkge1xuICAgICAgdGhpcy5nb1RvU3RlcCh0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggLSAxLCBwcmVGaW5hbGl6ZSwgcG9zdEZpbmFsaXplKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gdHJhbnNpdGlvbiB0aGUgd2l6YXJkIHRvIHRoZSBuZXh0IHN0ZXAgZnJvbSB0aGUgYGN1cnJlbnRTdGVwYFxuICAgKi9cbiAgZ29Ub05leHRTdGVwKHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy53aXphcmRTdGF0ZS5oYXNOZXh0U3RlcCgpKSB7XG4gICAgICB0aGlzLmdvVG9TdGVwKHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCArIDEsIHByZUZpbmFsaXplLCBwb3N0RmluYWxpemUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5cbi8qKlxuICogQSBbW05hdmlnYXRpb25Nb2RlXV0sIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBuYXZpZ2F0ZSB3aXRob3V0IGFueSBsaW1pdGF0aW9ucyxcbiAqIGFzIGxvbmcgYXMgdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGNsYXNzIEZyZWVOYXZpZ2F0aW9uTW9kZSBleHRlbmRzIE5hdmlnYXRpb25Nb2RlIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgbW9kZWwvc3RhdGUgb2YgdGhlIHdpemFyZCwgdGhhdCBpcyBjb25maWd1cmVkIHdpdGggdGhpcyBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkge1xuICAgIHN1cGVyKHdpemFyZFN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgd2l6YXJkIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAuXG4gICAqIEEgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgaWY6XG4gICAqIC0gaXQgZXhpc3RzXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBjYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBoYXNTdGVwID0gdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgY29uc3QgbW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICBjb25zdCBjYW5FeGl0Q3VycmVudFN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY2FuRXhpdFN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbkVudGVyRGVzdGluYXRpb25TdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpLmNhbkVudGVyU3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNTdGVwKVxuICAgICAgLnRoZW4oY2FuRXhpdEN1cnJlbnRTdGVwKVxuICAgICAgLnRoZW4oY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIGVudGVyIHRoZSB3aXphcmQgc3RlcCB3aXRoIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cbiAgICogV2hlbiBlbnRlcmluZyB0aGUgZGVzdGluYXRpb24gc3RlcCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyBjb21wbGV0ZWRcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgdW5zZWxlY3RlZFxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIGV4aXRlZFxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIHNldCBhcyBzZWxlY3RlZFxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIGVudGVyZWRcbiAgICpcbiAgICogV2hlbiB0aGUgZGVzdGluYXRpb24gc3RlcCBjb3VsZG4ndCBiZSBlbnRlcmVkLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgYW5kIGVudGVyZWQgaW4gdGhlIGRpcmVjdGlvbiBgTW92aW5nRGlyZWN0aW9uLlN0YXlgXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBlbnRlcmVkXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICovXG4gIGdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlciwgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQge1xuICAgIHRoaXMuY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleCkudGhlbihuYXZpZ2F0aW9uQWxsb3dlZCA9PiB7XG4gICAgICBpZiAobmF2aWdhdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgbW92aW5nRGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByZUZpbmFsaXplKSB7XG4gICAgICAgICAgcHJlRmluYWxpemUuZW1pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGVhdmUgY3VycmVudCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KG1vdmluZ0RpcmVjdGlvbik7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSBkZXN0aW5hdGlvbkluZGV4O1xuXG4gICAgICAgIC8vIGdvIHRvIG5leHQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKG1vdmluZ0RpcmVjdGlvbik7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocG9zdEZpbmFsaXplKSB7XG4gICAgICAgICAgcG9zdEZpbmFsaXplLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RlcCBjYW4ndCBiZSBsZWZ0LCByZWVudGVyIHRoZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc05hdmlnYWJsZShkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHN0YXRlIG9mIHRoaXMgd2l6YXJkLlxuICAgKiBBIHJlc2V0IHRyYW5zaXRpb25zIHRoZSB3aXphcmQgYXV0b21hdGljYWxseSB0byB0aGUgZmlyc3Qgc3RlcCBhbmQgc2V0cyBhbGwgc3RlcHMgYXMgaW5jb21wbGV0ZS5cbiAgICogSW4gYWRkaXRpb24gdGhlIHdob2xlIHdpemFyZCBpcyBzZXQgYXMgaW5jb21wbGV0ZVxuICAgKi9cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgLy8gdGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggdGhlIGRlZmF1bHQgc3RlcCBpbmRleFxuICAgIGlmICghdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9YCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgdGhlIHN0ZXAgaW50ZXJuYWwgc3RhdGVcbiAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgc3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHRoZSBmaXJzdCBzdGVwIGFzIHRoZSBjdXJyZW50IHN0ZXBcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSB0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXg7XG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHMpO1xuICB9XG59XG4iLCJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi93aXphcmQtc3RhdGUubW9kZWwnO1xuXG4vKipcbiAqIEEgW1tOYXZpZ2F0aW9uTW9kZV1dLCB3aGljaCBhbGxvd3MgdGhlIHVzZXIgdG8gbmF2aWdhdGUgd2l0aCBzb21lIGxpbWl0YXRpb25zLlxuICogVGhlIHVzZXIgY2FuIG9ubHkgbmF2aWdhdGlvbiB0byBhIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAsIGlmOlxuICogLSB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICogLSBhIGNvbXBsZXRpb24gc3RlcCBjYW4gb25seSBiZSBlbnRlcmVkLCBpZiBhbGwgXCJub3JtYWxcIiB3aXphcmQgc3RlcHMgaGF2ZSBiZWVuIGNvbXBsZXRlZFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgY2xhc3MgU2VtaVN0cmljdE5hdmlnYXRpb25Nb2RlIGV4dGVuZHMgTmF2aWdhdGlvbk1vZGUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBtb2RlbC9zdGF0ZSBvZiB0aGUgd2l6YXJkLCB0aGF0IGlzIGNvbmZpZ3VyZWQgd2l0aCB0aGlzIG5hdmlnYXRpb24gbW9kZVxuICAgKi9cbiAgY29uc3RydWN0b3Iod2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gICAgc3VwZXIod2l6YXJkU3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSB3aXphcmQgY2FuIGJlIHRyYW5zaXRpb25lZCB0byB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcC5cbiAgICogQSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBpZjpcbiAgICogLSBpdCBleGlzdHNcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKiAtIGFsbCBcIm5vcm1hbFwiIHdpemFyZCBzdGVwcyBoYXZlIGJlZW4gY29tcGxldGVkLCBhcmUgb3B0aW9uYWwgb3Igc2VsZWN0ZWQsIG9yIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzbid0IGEgY29tcGxldGlvbiBzdGVwXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXBcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgaGFzU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcChkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgY29uc3QgY2FuRXhpdEN1cnJlbnRTdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNhbkV4aXRTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYW5FbnRlckRlc3RpbmF0aW9uU3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleChkZXN0aW5hdGlvbkluZGV4KS5jYW5FbnRlclN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcblxuICAgIC8vIHByb3ZpZGUgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgYXMgYSBsYW1iZGEgaW4gY2FzZSB0aGUgaW5kZXggZG9lc24ndCBleGlzdCAoaS5lLiBoYXNTdGVwID09PSBmYWxzZSlcbiAgICBjb25zdCBkZXN0aW5hdGlvblN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICBjb25zdCBhbGxOb3JtYWxTdGVwc0NvbXBsZXRlZCA9IHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcbiAgICAgICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCBkZXN0aW5hdGlvbkluZGV4KVxuICAgICAgICAgIC5ldmVyeShzdGVwID0+IHN0ZXAuY29tcGxldGVkIHx8IHN0ZXAub3B0aW9uYWwgfHwgc3RlcC5zZWxlY3RlZCk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcbiAgICAgICAgICAhKHRoaXMud2l6YXJkU3RhdGUuZ2V0U3RlcEF0SW5kZXgoZGVzdGluYXRpb25JbmRleCkgaW5zdGFuY2VvZiBXaXphcmRDb21wbGV0aW9uU3RlcCkgfHwgYWxsTm9ybWFsU3RlcHNDb21wbGV0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaGFzU3RlcClcbiAgICAgIC50aGVuKGNhbkV4aXRDdXJyZW50U3RlcClcbiAgICAgIC50aGVuKGNhbkVudGVyRGVzdGluYXRpb25TdGVwKVxuICAgICAgLnRoZW4oZGVzdGluYXRpb25TdGVwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byBlbnRlciB0aGUgd2l6YXJkIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXG4gICAqIFdoZW4gZW50ZXJpbmcgdGhlIGRlc3RpbmF0aW9uIHN0ZXAsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgY29tcGxldGVkXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIHVuc2VsZWN0ZWRcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWRcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBzZXQgYXMgc2VsZWN0ZWRcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBlbnRlcmVkXG4gICAqXG4gICAqIFdoZW4gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY291bGRuJ3QgYmUgZW50ZXJlZCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGFuZCBlbnRlcmVkIGluIHRoZSBkaXJlY3Rpb24gYE1vdmluZ0RpcmVjdGlvbi5TdGF5YFxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwLCB3aGljaCBzaG91bGQgYmUgZW50ZXJlZFxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICogQHBhcmFtIHBvc3RGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXG4gICAqL1xuICBnb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsIHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICB0aGlzLmNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXgpLnRoZW4obmF2aWdhdGlvbkFsbG93ZWQgPT4ge1xuICAgICAgaWYgKG5hdmlnYXRpb25BbGxvd2VkKSB7XG4gICAgICAgIC8vIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwcmVGaW5hbGl6ZSkge1xuICAgICAgICAgIHByZUZpbmFsaXplLmVtaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxlYXZlIGN1cnJlbnQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChtb3ZpbmdEaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gZGVzdGluYXRpb25JbmRleDtcblxuICAgICAgICAvLyBnbyB0byBuZXh0IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihtb3ZpbmdEaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHBvc3RGaW5hbGl6ZSkge1xuICAgICAgICAgIHBvc3RGaW5hbGl6ZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0ZXAgY2FuJ3QgYmUgbGVmdCwgcmVlbnRlciB0aGUgY3VycmVudCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBpc05hdmlnYWJsZShkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleChkZXN0aW5hdGlvbkluZGV4KSBpbnN0YW5jZW9mIFdpemFyZENvbXBsZXRpb25TdGVwKSB7XG4gICAgICAvLyBhIGNvbXBsZXRpb24gc3RlcCBjYW4gb25seSBiZSBlbnRlcmVkLCBpZiBhbGwgcHJldmlvdXMgc3RlcHMgaGF2ZSBiZWVuIGNvbXBsZXRlZCwgYXJlIG9wdGlvbmFsLCBvciBzZWxlY3RlZFxuICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCBkZXN0aW5hdGlvbkluZGV4KVxuICAgICAgICAuZXZlcnkoc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCB8fCBzdGVwLm9wdGlvbmFsIHx8IHN0ZXAuc2VsZWN0ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhIFwibm9ybWFsXCIgc3RlcCBjYW4gYWx3YXlzIGJlIGVudGVyZWRcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgLy8gdGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggdGhlIGRlZmF1bHQgc3RlcCBpbmRleFxuICAgIGlmICghdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9YCk7XG4gICAgfVxuXG4gICAgLy8gdGhlIGRlZmF1bHQgc3RlcCBpcyBhIGNvbXBsZXRpb24gc3RlcCBhbmQgdGhlIHdpemFyZCBjb250YWlucyBtb3JlIHRoYW4gb25lIHN0ZXBcbiAgICBjb25zdCBkZWZhdWx0Q29tcGxldGlvblN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkgaW5zdGFuY2VvZiBXaXphcmRDb21wbGV0aW9uU3RlcCAmJlxuICAgICAgdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5sZW5ndGggIT09IDE7XG5cbiAgICBpZiAoZGVmYXVsdENvbXBsZXRpb25TdGVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IHN0ZXAgaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9IHJlZmVyZW5jZXMgYSBjb21wbGV0aW9uIHN0ZXBgKTtcbiAgICB9XG5cbiAgICAvLyByZXNldCB0aGUgc3RlcCBpbnRlcm5hbCBzdGF0ZVxuICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgIHN0ZXAuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICBzdGVwLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgdGhlIGZpcnN0IHN0ZXAgYXMgdGhlIGN1cnJlbnQgc3RlcFxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleDtcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5Gb3J3YXJkcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi93aXphcmQtc3RhdGUubW9kZWwnO1xuXG4vKipcbiAqIEEgW1tOYXZpZ2F0aW9uTW9kZV1dLCB3aGljaCBhbGxvd3MgdGhlIHVzZXIgdG8gbmF2aWdhdGUgd2l0aCBzdHJpY3QgbGltaXRhdGlvbnMuXG4gKiBUaGUgdXNlciBjYW4gb25seSBuYXZpZ2F0aW9uIHRvIGEgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcCwgaWY6XG4gKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gKiAtIGFsbCBwcmV2aW91cyBzdGVwcyB0byB0aGUgZGVzdGluYXRpb24gc3RlcCBoYXZlIGJlZW4gY29tcGxldGVkIG9yIGFyZSBvcHRpb25hbFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgY2xhc3MgU3RyaWN0TmF2aWdhdGlvbk1vZGUgZXh0ZW5kcyBOYXZpZ2F0aW9uTW9kZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIG9mIHRoZSB3aXphcmQsIHRoYXQgaXMgY29uZmlndXJlZCB3aXRoIHRoaXMgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHtcbiAgICBzdXBlcih3aXphcmRTdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHdpemFyZCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwLlxuICAgKiBBIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkIGlmOlxuICAgKiAtIGl0IGV4aXN0c1xuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIC0gYWxsIHByZXZpb3VzIHN0ZXBzIHRvIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGhhdmUgYmVlbiBjb21wbGV0ZWQgb3IgYXJlIG9wdGlvbmFsXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXBcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgaGFzU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcChkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgY29uc3QgY2FuRXhpdEN1cnJlbnRTdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNhbkV4aXRTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYW5FbnRlckRlc3RpbmF0aW9uU3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleChkZXN0aW5hdGlvbkluZGV4KS5jYW5FbnRlclN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFsbFByZXZpb3VzU3RlcHNDb21wbGV0ZSA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwc1xuICAgICAgICAgIC5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiBpbmRleCA8IGRlc3RpbmF0aW9uSW5kZXggJiYgaW5kZXggIT09IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleClcbiAgICAgICAgICAuZXZlcnkoc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCB8fCBzdGVwLm9wdGlvbmFsKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaGFzU3RlcClcbiAgICAgIC50aGVuKGNhbkV4aXRDdXJyZW50U3RlcClcbiAgICAgIC50aGVuKGNhbkVudGVyRGVzdGluYXRpb25TdGVwKVxuICAgICAgLnRoZW4oYWxsUHJldmlvdXNTdGVwc0NvbXBsZXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byBlbnRlciB0aGUgd2l6YXJkIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXG4gICAqIFdoZW4gZW50ZXJpbmcgdGhlIGRlc3RpbmF0aW9uIHN0ZXAsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgY29tcGxldGVkXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIHVuc2VsZWN0ZWRcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWRcbiAgICogLSBhbGwgc3RlcHMgYmV0d2VlbiB0aGUgb2xkIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgYXJlIG1hcmtlZCBhcyBpbmNvbXBsZXRlXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgc2V0IGFzIHNlbGVjdGVkXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgZW50ZXJlZFxuICAgKlxuICAgKiBXaGVuIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNvdWxkbid0IGJlIGVudGVyZWQsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBhbmQgZW50ZXJlZCBpbiB0aGUgZGlyZWN0aW9uIGBNb3ZpbmdEaXJlY3Rpb24uU3RheWBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGVudGVyZWRcbiAgICogQHBhcmFtIHByZUZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXG4gICAqIEBwYXJhbSBwb3N0RmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKi9cbiAgZ29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyLCBwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPiwgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XG4gICAgdGhpcy5jYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4KS50aGVuKG5hdmlnYXRpb25BbGxvd2VkID0+IHtcbiAgICAgIGlmIChuYXZpZ2F0aW9uQWxsb3dlZCkge1xuICAgICAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocHJlRmluYWxpemUpIHtcbiAgICAgICAgICBwcmVGaW5hbGl6ZS5lbWl0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZWF2ZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQobW92aW5nRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHNldCBhbGwgc3RlcHMgYWZ0ZXIgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgdG8gaW5jb21wbGV0ZVxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzXG4gICAgICAgICAgLmZpbHRlcigoc3RlcCwgaW5kZXgpID0+IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA+IGRlc3RpbmF0aW9uSW5kZXggJiYgaW5kZXggPiBkZXN0aW5hdGlvbkluZGV4KVxuICAgICAgICAgIC5mb3JFYWNoKHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgPSBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gZGVzdGluYXRpb25JbmRleDtcblxuICAgICAgICAvLyBnbyB0byBuZXh0IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihtb3ZpbmdEaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHBvc3RGaW5hbGl6ZSkge1xuICAgICAgICAgIHBvc3RGaW5hbGl6ZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0ZXAgY2FuJ3QgYmUgbGVmdCwgcmVlbnRlciB0aGUgY3VycmVudCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNOYXZpZ2FibGUoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgLy8gYSB3aXphcmQgc3RlcCBjYW4gYmUgbmF2aWdhdGVkIHRvIHRocm91Z2ggdGhlIG5hdmlnYXRpb24gYmFyLCBpZmYgaXQncyBsb2NhdGVkIGJlZm9yZSB0aGUgY3VycmVudCB3aXphcmQgc3RlcFxuICAgIHJldHVybiBkZXN0aW5hdGlvbkluZGV4IDwgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgc3RhdGUgb2YgdGhpcyB3aXphcmQuXG4gICAqIEEgcmVzZXQgdHJhbnNpdGlvbnMgdGhlIHdpemFyZCBhdXRvbWF0aWNhbGx5IHRvIHRoZSBmaXJzdCBzdGVwIGFuZCBzZXRzIGFsbCBzdGVwcyBhcyBpbmNvbXBsZXRlLlxuICAgKiBJbiBhZGRpdGlvbiB0aGUgd2hvbGUgd2l6YXJkIGlzIHNldCBhcyBpbmNvbXBsZXRlXG4gICAqL1xuICByZXNldCgpOiB2b2lkIHtcbiAgICAvLyB0aGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCB0aGUgZGVmYXVsdCBzdGVwIGluZGV4XG4gICAgaWYgKCF0aGlzLndpemFyZFN0YXRlLmhhc1N0ZXAodGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH1gKTtcbiAgICB9XG5cbiAgICAvLyBhdCBsZWFzdCBvbmUgc3RlcCBpcyBiZWZvcmUgdGhlIGRlZmF1bHQgc3RlcCwgdGhhdCBpcyBub3Qgb3B0aW9uYWxcbiAgICBjb25zdCBpbGxlZ2FsRGVmYXVsdFN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzXG4gICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCB0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXgpXG4gICAgICAuc29tZShzdGVwID0+ICFzdGVwLm9wdGlvbmFsKTtcblxuICAgIGlmIChpbGxlZ2FsRGVmYXVsdFN0ZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgc3RlcCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH0gaXMgbG9jYXRlZCBhZnRlciBhIG5vbiBvcHRpb25hbCBzdGVwYCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgdGhlIHN0ZXAgaW50ZXJuYWwgc3RhdGVcbiAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgc3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHRoZSBmaXJzdCBzdGVwIGFzIHRoZSBjdXJyZW50IHN0ZXBcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSB0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXg7XG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHMpO1xuICB9XG59XG4iLCJpbXBvcnQge0ZyZWVOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9mcmVlLW5hdmlnYXRpb24tbW9kZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtTZW1pU3RyaWN0TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vc2VtaS1zdHJpY3QtbmF2aWdhdGlvbi1tb2RlJztcbmltcG9ydCB7U3RyaWN0TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vc3RyaWN0LW5hdmlnYXRpb24tbW9kZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5cbi8qKlxuICogQSBmYWN0b3J5IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSBbW05hdmlnYXRpb25Nb2RlXV0gaW5zdGFuY2VzXG4gKlxuICogQHBhcmFtIG5hdmlnYXRpb25Nb2RlIFRoZSBuYW1lIG9mIHRoZSB0byBiZSB1c2VkIG5hdmlnYXRpb24gbW9kZVxuICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSB3aXphcmQgc3RhdGUgb2YgdGhlIHdpemFyZFxuICogQHJldHVybnMgVGhlIGNyZWF0ZWQgW1tOYXZpZ2F0aW9uTW9kZV1dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW9uTW9kZUZhY3RvcnkobmF2aWdhdGlvbk1vZGU6IHN0cmluZywgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKTogTmF2aWdhdGlvbk1vZGUge1xuICBzd2l0Y2ggKG5hdmlnYXRpb25Nb2RlKSB7XG4gICAgY2FzZSAnZnJlZSc6XG4gICAgICByZXR1cm4gbmV3IEZyZWVOYXZpZ2F0aW9uTW9kZSh3aXphcmRTdGF0ZSk7XG4gICAgY2FzZSAnc2VtaS1zdHJpY3QnOlxuICAgICAgcmV0dXJuIG5ldyBTZW1pU3RyaWN0TmF2aWdhdGlvbk1vZGUod2l6YXJkU3RhdGUpO1xuICAgIGNhc2UgJ3N0cmljdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBuZXcgU3RyaWN0TmF2aWdhdGlvbk1vZGUod2l6YXJkU3RhdGUpO1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7bmF2aWdhdGlvbk1vZGVGYWN0b3J5fSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5wcm92aWRlcic7XG5cbi8qKlxuICogVGhlIGludGVybmFsIG1vZGVsL3N0YXRlIG9mIGEgd2l6YXJkLlxuICogVGhpcyBtb2RlbCBjb250YWluczpcbiAqIC0gYW4gYXJyYXkgd2l0aCBhbGwgc3RlcHMgdGhlIHdpemFyZCBjb250YWluc1xuICogLSB0aGUgaW5kZXggb2YgdGhlIHN0ZXAgdGhlIHdpemFyZCBjdXJyZW50bHkgcmVzaWRlcyBpbnNpZGVcbiAqIC0gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbXBsZXRlbmVzcyBvZiB0aGUgd2l6YXJkXG4gKiAtIHNvbWUgYWRkaXRpb25hbCBoZWxwZXIgbWV0aG9kc1xuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2l6YXJkU3RhdGUge1xuICAvKipcbiAgICogQW4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgYWxsIHdpemFyZCBzdGVwcyBiZWxvbmdpbmcgdG8gdGhpcyBtb2RlbFxuICAgKi9cbiAgcHVibGljIHdpemFyZFN0ZXBzOiBBcnJheTxXaXphcmRTdGVwPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnRseSB2aXNpYmxlIGFuZCBzZWxlY3RlZCBzdGVwIGluc2lkZSB0aGUgd2l6YXJkU3RlcHMgUXVlcnlMaXN0LlxuICAgKiBJZiB0aGlzIHdpemFyZCBjb250YWlucyBubyBzdGVwcywgY3VycmVudFN0ZXBJbmRleCBpcyAtMVxuICAgKi9cbiAgcHVibGljIGN1cnJlbnRTdGVwSW5kZXggPSAtMTtcblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSB1c2VkIHRvIG5hdmlnYXRlIGluc2lkZSB0aGUgd2l6YXJkXG4gICAqL1xuICBwdWJsaWMgbmF2aWdhdGlvbk1vZGU6IE5hdmlnYXRpb25Nb2RlO1xuXG4gIC8qKlxuICAgKiBUcnVlLCBpZiB0aGUgbmF2aWdhdGlvbiBiYXIgc2hvdWxkbid0IGJlIHVzZWQgZm9yIG5hdmlnYXRpbmdcbiAgICovXG4gIHB1YmxpYyBkaXNhYmxlTmF2aWdhdGlvbkJhcjogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIHN0ZXAgaW5kZXgsIGFzIHRha2VuIGZyb20gdGhlIFtbV2l6YXJkQ29tcG9uZW50XV1cbiAgICovXG4gIHByaXZhdGUgX2RlZmF1bHRTdGVwSW5kZXggPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBzdGVwIGluZGV4LlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBlaXRoZXI6XG4gICAqIC0gdGhlIGluZGV4IG9mIGEgd2l6YXJkIHN0ZXAgd2l0aCBhIGBzZWxlY3RlZGAgZGlyZWN0aXZlLCBvclxuICAgKiAtIHRoZSBkZWZhdWx0IHN0ZXAgaW5kZXgsIHNldCBpbiB0aGUgW1tXaXphcmRDb21wb25lbnRdXVxuICAgKi9cbiAgcHVibGljIGdldCBkZWZhdWx0U3RlcEluZGV4KCk6IG51bWJlciB7XG4gICAgY29uc3QgZm91bmREZWZhdWx0U3RlcCA9IHRoaXMud2l6YXJkU3RlcHMuZmluZChzdGVwID0+IHN0ZXAuZGVmYXVsdFNlbGVjdGVkKTtcblxuICAgIGlmIChmb3VuZERlZmF1bHRTdGVwKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbmRleE9mU3RlcChmb3VuZERlZmF1bHRTdGVwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRTdGVwSW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluaXRpYWwgZGVmYXVsdCBzdGVwLlxuICAgKiBCZXdhcmU6IFRoaXMgaW5pdGlhbCBkZWZhdWx0IGlzIG9ubHkgdXNlZCBpZiBubyB3aXphcmQgc3RlcCBoYXMgYmVlbiBlbmhhbmNlZCB3aXRoIHRoZSBgc2VsZWN0ZWRgIGRpcmVjdGl2ZVxuICAgKlxuICAgKiBAcGFyYW0gZGVmYXVsdFN0ZXBJbmRleCBUaGUgbmV3IGRlZmF1bHQgd2l6YXJkIHN0ZXAgaW5kZXhcbiAgICovXG4gIHB1YmxpYyBzZXQgZGVmYXVsdFN0ZXBJbmRleChkZWZhdWx0U3RlcEluZGV4KSB7XG4gICAgdGhpcy5fZGVmYXVsdFN0ZXBJbmRleCA9IGRlZmF1bHRTdGVwSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogVGhlIFdpemFyZFN0ZXAgb2JqZWN0IGJlbG9uZ2luZyB0byB0aGUgY3VycmVudGx5IHZpc2libGUgYW5kIHNlbGVjdGVkIHN0ZXAuXG4gICAqIFRoZSBjdXJyZW50U3RlcCBpcyBhbHdheXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB3aXphcmQgc3RlcC5cbiAgICogVGhlIGN1cnJlbnRTdGVwIGNhbiBiZSBlaXRoZXIgY29tcGxldGVkLCBpZiBpdCB3YXMgdmlzaXRlZCBlYXJsaWVyLFxuICAgKiBvciBub3QgY29tcGxldGVkLCBpZiBpdCBpcyB2aXNpdGVkIGZvciB0aGUgZmlyc3QgdGltZSBvciBpdHMgc3RhdGUgaXMgY3VycmVudGx5IG91dCBvZiBkYXRlLlxuICAgKlxuICAgKiBJZiB0aGlzIHdpemFyZCBjb250YWlucyBubyBzdGVwcywgY3VycmVudFN0ZXAgaXMgbnVsbFxuICAgKi9cbiAgcHVibGljIGdldCBjdXJyZW50U3RlcCgpOiBXaXphcmRTdGVwIHtcbiAgICBpZiAodGhpcy5oYXNTdGVwKHRoaXMuY3VycmVudFN0ZXBJbmRleCkpIHtcbiAgICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzW3RoaXMuY3VycmVudFN0ZXBJbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY29tcGxldGVuZXNzIG9mIHRoZSB3aXphcmQuXG4gICAqIElmIHRoZSB3aXphcmQgaGFzIGJlZW4gY29tcGxldGVkLCBpLmUuIGFsbCBzdGVwcyBhcmUgZWl0aGVyIGNvbXBsZXRlZCBvciBvcHRpb25hbCwgdGhpcyB2YWx1ZSBpcyB0cnVlLCBvdGhlcndpc2UgaXQgaXMgZmFsc2VcbiAgICovXG4gIHB1YmxpYyBnZXQgY29tcGxldGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmV2ZXJ5KHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgfHwgc3RlcC5vcHRpb25hbCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbmF2aWdhdGlvbiBtb2RlIHRvIHRoZSBuYXZpZ2F0aW9uIG1vZGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAgKlxuICAgKiBAcGFyYW0gdXBkYXRlZE5hdmlnYXRpb25Nb2RlIFRoZSBuYW1lIG9mIHRoZSBuZXcgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICB1cGRhdGVOYXZpZ2F0aW9uTW9kZSh1cGRhdGVkTmF2aWdhdGlvbk1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUgPSBuYXZpZ2F0aW9uTW9kZUZhY3RvcnkodXBkYXRlZE5hdmlnYXRpb25Nb2RlLCB0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB3aXphcmQgc3RlcHMgdG8gdGhlIG5ldyBhcnJheVxuICAgKlxuICAgKiBAcGFyYW0gdXBkYXRlZFdpemFyZFN0ZXBzIFRoZSB1cGRhdGVkIHdpemFyZCBzdGVwc1xuICAgKi9cbiAgdXBkYXRlV2l6YXJkU3RlcHModXBkYXRlZFdpemFyZFN0ZXBzOiBBcnJheTxXaXphcmRTdGVwPik6IHZvaWQge1xuICAgIC8vIHRoZSB3aXphcmQgaXMgY3VycmVudGx5IG5vdCBpbiB0aGUgaW5pdGlhbGl6YXRpb24gcGhhc2VcbiAgICBpZiAodGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuY3VycmVudFN0ZXBJbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGVwSW5kZXggPSB1cGRhdGVkV2l6YXJkU3RlcHMuaW5kZXhPZih0aGlzLndpemFyZFN0ZXBzW3RoaXMuY3VycmVudFN0ZXBJbmRleF0pO1xuICAgIH1cblxuICAgIHRoaXMud2l6YXJkU3RlcHMgPSB1cGRhdGVkV2l6YXJkU3RlcHM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAgaXMgaW5zaWRlIHRoZSByYW5nZSBvZiBwb3NzaWJsZSB3aXphcmQgc3RlcHMgaW5zaWRlIHRoaXMgd2l6YXJkXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwSW5kZXggVGhlIHRvIGJlIGNoZWNrZWQgaW5kZXggb2YgYSBzdGVwIGluc2lkZSB0aGlzIHdpemFyZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiBgc3RlcEluZGV4YCBpcyBjb250YWluZWQgaW5zaWRlIHRoaXMgd2l6YXJkLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGhhc1N0ZXAoc3RlcEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIDAgPD0gc3RlcEluZGV4ICYmIHN0ZXBJbmRleCA8IHRoaXMud2l6YXJkU3RlcHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBoYXMgYSBwcmV2aW91cyBzdGVwLCBjb21wYXJlZCB0byB0aGUgY3VycmVudCBzdGVwXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgaGFzIGEgcHJldmlvdXMgc3RlcCBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcFxuICAgKi9cbiAgaGFzUHJldmlvdXNTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1N0ZXAodGhpcy5jdXJyZW50U3RlcEluZGV4IC0gMSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgd2l6YXJkIGhhcyBhIG5leHQgc3RlcCwgY29tcGFyZWQgdG8gdGhlIGN1cnJlbnQgc3RlcFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIGhhcyBhIG5leHQgc3RlcCBhZnRlciB0aGUgY3VycmVudCBzdGVwXG4gICAqL1xuICBoYXNOZXh0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNTdGVwKHRoaXMuY3VycmVudFN0ZXBJbmRleCArIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBpcyBjdXJyZW50bHkgaW5zaWRlIGl0cyBsYXN0IHN0ZXBcbiAgICpcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgd2l6YXJkIGlzIGN1cnJlbnRseSBpbnNpZGUgaXRzIGxhc3Qgc3RlcFxuICAgKi9cbiAgaXNMYXN0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9PT0gdGhpcy53aXphcmRTdGVwcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBbW1dpemFyZFN0ZXBdXSBhdCB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAuXG4gICAqIElmIG5vIFtbV2l6YXJkU3RlcF1dIGV4aXN0cyBhdCB0aGUgZ2l2ZW4gaW5kZXggYW4gRXJyb3IgaXMgdGhyb3duXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwSW5kZXggVGhlIGdpdmVuIGluZGV4XG4gICAqIEByZXR1cm5zIFRoZSBmb3VuZCBbW1dpemFyZFN0ZXBdXSBhdCB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGBcbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biwgaWYgdGhlIGdpdmVuIGluZGV4IGBzdGVwSW5kZXhgIGRvZXNuJ3QgZXhpc3RcbiAgICovXG4gIGdldFN0ZXBBdEluZGV4KHN0ZXBJbmRleDogbnVtYmVyKTogV2l6YXJkU3RlcCB7XG4gICAgaWYgKCF0aGlzLmhhc1N0ZXAoc3RlcEluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhIGtub3duIHN0ZXAsIGJ1dCBnb3Qgc3RlcEluZGV4OiAke3N0ZXBJbmRleH0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHNbc3RlcEluZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgaW5kZXggb2YgdGhlIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gYHN0ZXBJZGAuXG4gICAqIElmIG5vIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gYHN0ZXBJZGAgZXhpc3RzLCBgLTFgIGlzIHJldHVybmVkXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwSWQgVGhlIGdpdmVuIHN0ZXAgaWRcbiAgICogQHJldHVybnMgVGhlIGZvdW5kIGluZGV4IG9mIGEgc3RlcCB3aXRoIHRoZSBnaXZlbiBzdGVwIGlkLCBvciBgLTFgIGlmIG5vIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gaWQgaXMgaW5jbHVkZWQgaW4gdGhlIHdpemFyZFxuICAgKi9cbiAgZ2V0SW5kZXhPZlN0ZXBXaXRoSWQoc3RlcElkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmZpbmRJbmRleChzdGVwID0+IHN0ZXAuc3RlcElkID09PSBzdGVwSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV0gYHN0ZXBgLlxuICAgKiBJZiB0aGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV0gaXMgbm90IGNvbnRhaW5lZCBpbnNpZGUgdGhpcyB3aXphcmQsIGAtMWAgaXMgcmV0dXJuZWRcbiAgICpcbiAgICogQHBhcmFtIHN0ZXAgVGhlIGdpdmVuIFtbV2l6YXJkU3RlcF1dXG4gICAqIEByZXR1cm5zIFRoZSBmb3VuZCBpbmRleCBvZiBgc3RlcGAgb3IgYC0xYCBpZiB0aGUgc3RlcCBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIHdpemFyZFxuICAgKi9cbiAgZ2V0SW5kZXhPZlN0ZXAoc3RlcDogV2l6YXJkU3RlcCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMuaW5kZXhPZihzdGVwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBjb3JyZWN0IFtbTW92aW5nRGlyZWN0aW9uXV0gdmFsdWUgZm9yIGEgZ2l2ZW4gYGRlc3RpbmF0aW9uU3RlcGAgY29tcGFyZWQgdG8gdGhlIGBjdXJyZW50U3RlcEluZGV4YC5cbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uU3RlcCBUaGUgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcFxuICAgKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBbW01vdmluZ0RpcmVjdGlvbl1dXG4gICAqL1xuICBnZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25TdGVwOiBudW1iZXIpOiBNb3ZpbmdEaXJlY3Rpb24ge1xuICAgIGxldCBtb3ZpbmdEaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbjtcblxuICAgIGlmIChkZXN0aW5hdGlvblN0ZXAgPiB0aGlzLmN1cnJlbnRTdGVwSW5kZXgpIHtcbiAgICAgIG1vdmluZ0RpcmVjdGlvbiA9IE1vdmluZ0RpcmVjdGlvbi5Gb3J3YXJkcztcbiAgICB9IGVsc2UgaWYgKGRlc3RpbmF0aW9uU3RlcCA8IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLkJhY2t3YXJkcztcbiAgICB9IGVsc2Uge1xuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLlN0YXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmluZ0RpcmVjdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXJgIGNvbXBvbmVudCBjb250YWlucyB0aGUgbmF2aWdhdGlvbiBiYXIgaW5zaWRlIGEgW1tXaXphcmRDb21wb25lbnRdXS5cbiAqIFRvIGNvcnJlY3RseSBkaXNwbGF5IHRoZSBuYXZpZ2F0aW9uIGJhciwgaXQncyByZXF1aXJlZCB0byBzZXQgdGhlIHJpZ2h0IGNzcyBjbGFzc2VzIGZvciB0aGUgbmF2aWdhdGlvbiBiYXIsXG4gKiBvdGhlcndpc2UgaXQgd2lsbCBsb29rIGxpa2UgYSBub3JtYWwgYHVsYCBjb21wb25lbnQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtbmF2aWdhdGlvbi1iYXI+PC9hdy13aXphcmQtbmF2aWdhdGlvbi1iYXI+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICd3aXphcmQtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5ob3Jpem9udGFsLmxlc3MnLCAnd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC52ZXJ0aWNhbC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZE5hdmlnYXRpb25CYXJDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgd2l6YXJkIHN0ZXBzIHNob3VsZCBiZSBzaG93biBpbiB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIGVpdGhlciBgbGVmdC10by1yaWdodGAgb3IgYHJpZ2h0LXRvLWxlZnRgXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlyZWN0aW9uID0gJ2xlZnQtdG8tcmlnaHQnO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIHRoZSB3aXphcmQgY3VycmVudGx5IHJlc2lkZXMgaW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBbW1dpemFyZFN0ZXBdXXMgY29udGFpbmVkIGluIHRoZSB3aXphcmRcbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgY29udGFpbmluZyBhbGwgW1tXaXphcmRTdGVwXV1zXG4gICAqL1xuICBnZXQgd2l6YXJkU3RlcHMoKTogQXJyYXk8V2l6YXJkU3RlcD4ge1xuICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3JpZ2h0LXRvLWxlZnQnOlxuICAgICAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICAgIGNhc2UgJ2xlZnQtdG8tcmlnaHQnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB3aXphcmQgc3RlcHMsIHRoYXQgbmVlZCB0byBiZSBkaXNwbGFjZWQgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2Ygd2l6YXJkIHN0ZXBzIHRvIGJlIGRpc3BsYXllZFxuICAgKi9cbiAgZ2V0IG51bWJlck9mV2l6YXJkU3RlcHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgY3VycmVudGAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBjdXJyZW50XG4gICAqL1xuICBwdWJsaWMgaXNDdXJyZW50KHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiAhd2l6YXJkU3RlcC5jb21wbGV0ZWQgJiYgIXRoaXMud2l6YXJkU3RhdGUuY29tcGxldGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYGRvbmVgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgZG9uZVxuICAgKi9cbiAgcHVibGljIGlzRG9uZSh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh3aXphcmRTdGVwLmNvbXBsZXRlZCAmJiAhd2l6YXJkU3RlcC5zZWxlY3RlZCkgfHwgdGhpcy53aXphcmRTdGF0ZS5jb21wbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgZGVmYXVsdGAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBkZWZhdWx0XG4gICAqL1xuICBwdWJsaWMgaXNEZWZhdWx0KHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXdpemFyZFN0ZXAub3B0aW9uYWwgJiYgIXdpemFyZFN0ZXAuY29tcGxldGVkICYmICF3aXphcmRTdGVwLnNlbGVjdGVkICYmICF0aGlzLndpemFyZFN0YXRlLmNvbXBsZXRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBlZGl0aW5nYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIGVkaXRpbmdcbiAgICovXG4gIHB1YmxpYyBpc0VkaXRpbmcod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB3aXphcmRTdGVwLnNlbGVjdGVkICYmIHdpemFyZFN0ZXAuY29tcGxldGVkICYmICF0aGlzLndpemFyZFN0YXRlLmNvbXBsZXRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBvcHRpb25hbGAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBvcHRpb25hbFxuICAgKi9cbiAgcHVibGljIGlzT3B0aW9uYWwod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB3aXphcmRTdGVwLm9wdGlvbmFsICYmICF3aXphcmRTdGVwLmNvbXBsZXRlZCAmJiAhd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5jb21wbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgbmF2aWdhYmxlYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIEEgd2l6YXJkIHN0ZXAgY2FuIGJlIG5hdmlnYXRlZCB0byBpZjpcbiAgICogLSB0aGUgc3RlcCBpcyBjdXJyZW50bHkgbm90IHNlbGVjdGVkXG4gICAqIC0gdGhlIG5hdmlnYXRpb24gYmFyIGlzbid0IGRpc2FibGVkXG4gICAqIC0gdGhlIG5hdmlnYXRpb24gbW9kZSBhbGxvd3MgbmF2aWdhdGlvbiB0byB0aGUgc3RlcFxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgbmF2aWdhYmxlXG4gICAqL1xuICBwdWJsaWMgaXNOYXZpZ2FibGUod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5kaXNhYmxlTmF2aWdhdGlvbkJhciAmJlxuICAgICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5pc05hdmlnYWJsZSh0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwKHdpemFyZFN0ZXApKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXctd2l6YXJkLXN0ZXBgIGNvbXBvbmVudCBpcyB1c2VkIHRvIGRlZmluZSBhIG5vcm1hbCBzdGVwIGluc2lkZSBhIHdpemFyZC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogV2l0aCBgc3RlcFRpdGxlYCBhbmQgYG5hdmlnYXRpb25TeW1ib2xgIGlucHV0czpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXAgW3N0ZXBUaXRsZV09XCJzdGVwIHRpdGxlXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICdzeW1ib2wnLCBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknIH1cIlxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cbiAqICAgIC4uLlxuICogPC9hdy13aXphcmQtc3RlcD5cbiAqIGBgYFxuICpcbiAqIFdpdGggYGF3V2l6YXJkU3RlcFRpdGxlYCBhbmQgYGF3V2l6YXJkU3RlcFN5bWJvbGAgZGlyZWN0aXZlczpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXBcIlxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cbiAqICAgICAgICBzdGVwIHRpdGxlXG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cbiAqICAgICAgICBzeW1ib2xcbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIFdpdGggYHN0ZXBUaXRsZWAgYW5kIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dHM6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1zdGVwIHN0ZXBUaXRsZT1cIkFkZHJlc3MgaW5mb3JtYXRpb25cIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGBhd1dpemFyZFN0ZXBUaXRsZWAgYW5kIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZXM6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1zdGVwPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxuICogICAgICAgIEFkZHJlc3MgaW5mb3JtYXRpb25cbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxuICogICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGF4aVwiPjwvaT5cbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiA8L2F3LXdpemFyZC1zdGVwPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZC1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICd3aXphcmQtc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd3aXphcmQtc3RlcC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRTdGVwQ29tcG9uZW50KX1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwQ29tcG9uZW50IGV4dGVuZHMgV2l6YXJkU3RlcCB7XG59XG4iLCJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhdy13aXphcmRgIGNvbXBvbmVudCBkZWZpbmVzIHRoZSByb290IGNvbXBvbmVudCBvZiBhIHdpemFyZC5cbiAqIFRocm91Z2ggdGhlIHNldHRpbmcgb2YgaW5wdXQgcGFyYW1ldGVycyBmb3IgdGhlIGBhdy13aXphcmRgIGNvbXBvbmVudCBpdCdzIHBvc3NpYmxlIHRvIGNoYW5nZSB0aGUgbG9jYXRpb24gYW5kIHNpemVcbiAqIG9mIGl0cyBuYXZpZ2F0aW9uIGJhci5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkIFtuYXZCYXJMb2NhdGlvbl09XCJsb2NhdGlvbiBvZiBuYXZpZ2F0aW9uIGJhclwiIFtuYXZCYXJMYXlvdXRdPVwibGF5b3V0IG9mIG5hdmlnYXRpb24gYmFyXCI+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZD5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogV2l0aG91dCBjb21wbGV0aW9uIHN0ZXA6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZCBuYXZCYXJMb2NhdGlvbj1cInRvcFwiIG5hdkJhckxheW91dD1cInNtYWxsXCI+XG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XG4gKiA8L2F3LXdpemFyZD5cbiAqIGBgYFxuICpcbiAqIFdpdGggY29tcGxldGlvbiBzdGVwOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQgbmF2QmFyTG9jYXRpb249XCJ0b3BcIiBuYXZCYXJMYXlvdXQ9XCJzbWFsbFwiPlxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxuICogICAgIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwPi4uLjwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIDwvYXctd2l6YXJkPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZCcsXG4gIHRlbXBsYXRlVXJsOiAnd2l6YXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3dpemFyZC5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtXaXphcmRTdGF0ZV1cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyoqXG4gICAqIEEgUXVlcnlMaXN0IGNvbnRhaW5pbmcgYWxsIFtbV2l6YXJkU3RlcF1dcyBpbnNpZGUgdGhpcyB3aXphcmRcbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oV2l6YXJkU3RlcClcbiAgcHVibGljIHdpemFyZFN0ZXBzOiBRdWVyeUxpc3Q8V2l6YXJkU3RlcD47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhdGlvbiBvZiB0aGUgbmF2aWdhdGlvbiBiYXIgaW5zaWRlIHRoZSB3aXphcmQuXG4gICAqIFRoaXMgbG9jYXRpb24gY2FuIGJlIGVpdGhlciB0b3AsIGJvdHRvbSwgbGVmdCBvciByaWdodFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckxvY2F0aW9uID0gJ3RvcCc7XG5cbiAgLyoqXG4gICAqIFRoZSBsYXlvdXQgb2YgdGhlIG5hdmlnYXRpb24gYmFyIGluc2lkZSB0aGUgd2l6YXJkLlxuICAgKiBUaGUgbGF5b3V0IGNhbiBiZSBlaXRoZXIgc21hbGwsIGxhcmdlLWZpbGxlZCwgbGFyZ2UtZW1wdHkgb3IgbGFyZ2Utc3ltYm9sc1xuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckxheW91dCA9ICdzbWFsbCc7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHN0ZXBzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgc2hvdWxkIGJlIHNob3duLlxuICAgKiBUaGUgZGlyZWN0aW9uIGNhbiBiZSBlaXRoZXIgYGxlZnQtdG8tcmlnaHRgIG9yIGByaWdodC10by1sZWZ0YFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckRpcmVjdGlvbiA9ICdsZWZ0LXRvLXJpZ2h0JztcblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSB1c2VkIGZvciB0cmFuc2l0aW9uaW5nIGJldHdlZW4gZGlmZmVyZW50IHN0ZXBzLlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlIGNhbiBiZSBlaXRoZXIgYHN0cmljdGAsIGBzZW1pLXN0cmljdGAgb3IgYGZyZWVgXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmF2aWdhdGlvbk1vZGUgPSAnc3RyaWN0JztcblxuICAvKipcbiAgICogVGhlIGluaXRpYWxseSBzZWxlY3RlZCBzdGVwLCByZXByZXNlbnRlZCBieSBpdHMgaW5kZXhcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkZWZhdWx0U3RlcEluZGV4ID0gMDtcblxuICAvKipcbiAgICogVHJ1ZSwgaWYgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZG4ndCBiZSB1c2VkIGZvciBuYXZpZ2F0aW5nXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzYWJsZU5hdmlnYXRpb25CYXIgPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsIFRoZSBtb2RlbCBmb3IgdGhpcyB3aXphcmQgY29tcG9uZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZWw6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uLlxuICAgKiBUaGUgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uLCBpZmYgdGhlIG5hdmlnYXRpb24gYmFyIGlzIHNob3duIGF0IHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoaXMgd2l6YXJkXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgdXNlcyBhIGhvcml6b250YWwgb3JpZW50YXRpb25cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaG9yaXpvbnRhbCcpXG4gIHB1YmxpYyBnZXQgaG9yaXpvbnRhbE9yaWVudGF0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAndG9wJyB8fCB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAnYm90dG9tJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyB3aXphcmQgdXNlcyBhIHZlcnRpY2FsIG9yaWVudGF0aW9uLlxuICAgKiBUaGUgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvbiwgaWZmIHRoZSBuYXZpZ2F0aW9uIGJhciBpcyBzaG93biBhdCB0aGUgbGVmdCBvciByaWdodCBvZiB0aGlzIHdpemFyZFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvblxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy52ZXJ0aWNhbCcpXG4gIHB1YmxpYyBnZXQgdmVydGljYWxPcmllbnRhdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZCYXJMb2NhdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMubmF2QmFyTG9jYXRpb24gPT09ICdyaWdodCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSBmb3IgdGhpcyB3aXphcmRcbiAgICovXG4gIHB1YmxpYyBnZXQgbmF2aWdhdGlvbigpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbW9kZWwgYWZ0ZXIgY2VydGFpbiBpbnB1dCB2YWx1ZXMgaGF2ZSBjaGFuZ2VkXG4gICAqXG4gICAqIEBwYXJhbSBjaGFuZ2VzIFRoZSBkZXRlY3RlZCBjaGFuZ2VzXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjaGFuZ2VzKSkge1xuICAgICAgY29uc3QgY2hhbmdlID0gY2hhbmdlc1twcm9wTmFtZV07XG5cbiAgICAgIGlmICghY2hhbmdlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHN3aXRjaCAocHJvcE5hbWUpIHtcbiAgICAgICAgICBjYXNlICdkZWZhdWx0U3RlcEluZGV4JzpcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGVmYXVsdFN0ZXBJbmRleCA9IHBhcnNlSW50KGNoYW5nZS5jdXJyZW50VmFsdWUsIDEwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Rpc2FibGVOYXZpZ2F0aW9uQmFyJzpcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlzYWJsZU5hdmlnYXRpb25CYXIgPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbmF2aWdhdGlvbk1vZGUnOlxuICAgICAgICAgICAgdGhpcy5tb2RlbC51cGRhdGVOYXZpZ2F0aW9uTW9kZShjaGFuZ2UuY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXphdGlvbiB3b3JrXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgLy8gYWRkIGEgc3Vic2NyaWJlciB0byB0aGUgd2l6YXJkIHN0ZXBzIFF1ZXJ5TGlzdCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgRE9NXG4gICAgdGhpcy53aXphcmRTdGVwcy5jaGFuZ2VzLnN1YnNjcmliZShjaGFuZ2VkV2l6YXJkU3RlcHMgPT4ge1xuICAgICAgdGhpcy5tb2RlbC51cGRhdGVXaXphcmRTdGVwcyhjaGFuZ2VkV2l6YXJkU3RlcHMudG9BcnJheSgpKTtcbiAgICB9KTtcblxuICAgIC8vIGluaXRpYWxpemUgdGhlIG1vZGVsXG4gICAgdGhpcy5tb2RlbC5kaXNhYmxlTmF2aWdhdGlvbkJhciA9IHRoaXMuZGlzYWJsZU5hdmlnYXRpb25CYXI7XG4gICAgdGhpcy5tb2RlbC5kZWZhdWx0U3RlcEluZGV4ID0gdGhpcy5kZWZhdWx0U3RlcEluZGV4O1xuICAgIHRoaXMubW9kZWwudXBkYXRlV2l6YXJkU3RlcHModGhpcy53aXphcmRTdGVwcy50b0FycmF5KCkpO1xuICAgIHRoaXMubW9kZWwudXBkYXRlTmF2aWdhdGlvbk1vZGUodGhpcy5uYXZpZ2F0aW9uTW9kZSk7XG5cbiAgICAvLyBmaW5hbGx5IHJlc2V0IHRoZSB3aG9sZSB3aXphcmQgc3RhdGVcbiAgICB0aGlzLm5hdmlnYXRpb24ucmVzZXQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdFbmFibGVCYWNrTGlua3NgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBhbGxvdyB0aGUgdXNlciB0byBsZWF2ZSBhIFtbV2l6YXJkQ29tcGxldGlvblN0ZXBdXSBhZnRlciBpcyBoYXMgYmVlbiBlbnRlcmVkLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBhd0VuYWJsZUJhY2tMaW5rcyAoc3RlcEV4aXQpPVwiZXhpdCBmdW5jdGlvblwiPlxuICogICAgIC4uLlxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBzdGVwVGl0bGU9XCJGaW5hbCBzdGVwXCIgYXdFbmFibGVCYWNrTGlua3M+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3RW5hYmxlQmFja0xpbmtzXSdcbn0pXG5leHBvcnQgY2xhc3MgRW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoaXMgRXZlbnRFbWl0dGVyIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZC5cbiAgICogVGhlIGJvdW5kIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBkbyBjbGVhbnVwIHdvcmsuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHN0ZXBFeGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBjb21wbGV0aW9uU3RlcCBUaGUgd2l6YXJkIGNvbXBsZXRpb24gc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGV4aXRhYmxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgY29tcGxldGlvblN0ZXA6IFdpemFyZENvbXBsZXRpb25TdGVwKSB7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6YXRpb24gd29ya1xuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb21wbGV0aW9uU3RlcC5jYW5FeGl0ID0gdHJ1ZTtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGVwLnN0ZXBFeGl0ID0gdGhpcy5zdGVwRXhpdDtcbiAgfVxufVxuIiwiaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogQW4gdW5pcXVlIGlkZW50aWZpZXIgb2YgYSB3aXphcmQgc3RlcFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBJZCB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICovXG4gIHN0ZXBJZDogc3RyaW5nO1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBgdmFsdWVgIGltcGxlbWVudHMgdGhlIGludGVyZmFjZSBbW1N0ZXBJZF1dLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZFxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaW1wbGVtZW50cyBbW1N0ZXBJZF1dIGFuZCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RlcElkKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdGVwSWQge1xuICByZXR1cm4gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3N0ZXBJZCcpICYmICEodmFsdWUgaW5zdGFuY2VvZiBXaXphcmRTdGVwKTtcbn1cbiIsIi8qKlxuICogQW4gaW5kZXggb2YgYSB3aXphcmQgc3RlcC5cbiAqIFRoaXMgaW5kZXggaXMgdGhlIGluZGV4IG9mIHRoZSBzdGVwIGluc2lkZSB0aGUgd2l6YXJkLlxuICogVGhlIGluZGV4IGlzIGFsd2F5cyB6ZXJvIGJhc2VkLCBpLmUuIHRoZSBzdGVwIHdpdGggaW5kZXggMCBpcyB0aGUgZmlyc3Qgc3RlcCBvZiB0aGUgd2l6YXJkXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcEluZGV4IHtcbiAgLyoqXG4gICAqIFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKi9cbiAgc3RlcEluZGV4OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGB2YWx1ZWAgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIFtbU3RlcEluZGV4XV0uXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjaGVja2VkXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpbXBsZW1lbnRzIFtbU3RlcEluZGV4XV0gYW5kIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdGVwSW5kZXgodmFsdWU6IGFueSk6IHZhbHVlIGlzIFN0ZXBJbmRleCB7XG4gIHJldHVybiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnc3RlcEluZGV4Jyk7XG59XG4iLCIvKipcbiAqIEFuIG9mZnNldCBiZXR3ZWVuIHR3byBzdGVwcy5cbiAqIFRoaXMgb2Zmc2V0IGNhbiBiZSBlaXRoZXIgcG9zaXRpdmUgb3IgbmVnYXRpdmUuXG4gKiBBIHBvc2l0aXZlIG9mZnNldCBtZWFucywgdGhhdCB0aGUgb2Zmc2V0IHN0ZXAgaXMgYWZ0ZXIgdGhlIG90aGVyIHN0ZXAsIHdoaWxlIGEgbmVnYXRpdmUgb2Zmc2V0IG1lYW5zLFxuICogdGhhdCB0aGUgb2Zmc2V0IHN0ZXAgaXMgYWhlYWQgb2YgdGhlIG90aGVyIHN0ZXAuXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcE9mZnNldCB7XG4gIC8qKlxuICAgKiBUaGUgb2Zmc2V0IHRvIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqL1xuICBzdGVwT2Zmc2V0OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGB2YWx1ZWAgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIFtbU3RlcE9mZnNldF1dLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZFxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaW1wbGVtZW50cyBbW1N0ZXBPZmZzZXRdXSBhbmQgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0ZXBPZmZzZXQodmFsdWU6IGFueSk6IHZhbHVlIGlzIFN0ZXBPZmZzZXQge1xuICByZXR1cm4gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3N0ZXBPZmZzZXQnKTtcbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7aXNTdGVwSWQsIFN0ZXBJZH0gZnJvbSAnLi4vdXRpbC9zdGVwLWlkLmludGVyZmFjZSc7XG5pbXBvcnQge2lzU3RlcEluZGV4LCBTdGVwSW5kZXh9IGZyb20gJy4uL3V0aWwvc3RlcC1pbmRleC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtpc1N0ZXBPZmZzZXQsIFN0ZXBPZmZzZXR9IGZyb20gJy4uL3V0aWwvc3RlcC1vZmZzZXQuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdHb1RvU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIG5hdmlnYXRlIHRvIGEgZ2l2ZW4gc3RlcC5cbiAqIFRoaXMgc3RlcCBjYW4gYmUgZGVmaW5lZCBpbiBvbmUgb2YgbXVsdGlwbGUgZm9ybWF0c1xuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBXaXRoIGFic29sdXRlIHN0ZXAgaW5kZXg6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBbYXdHb1RvU3RlcF09XCJ7IHN0ZXBJbmRleDogYWJzb2x1dGUgc3RlcCBpbmRleCB9XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogV2l0aCB1bmlxdWUgc3RlcCBpZDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cInsgc3RlcElkOiAnc3RlcCBpZCBvZiBkZXN0aW5hdGlvbiBzdGVwJyB9XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogV2l0aCBhIHdpemFyZCBzdGVwIG9iamVjdDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cIndpemFyZCBzdGVwIG9iamVjdFwiIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIFdpdGggYW4gb2Zmc2V0IHRvIHRoZSBkZWZpbmluZyBzdGVwOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwieyBzdGVwT2Zmc2V0OiBvZmZzZXQgfVwiIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdHb1RvU3RlcF0nXG59KVxuZXhwb3J0IGNsYXNzIEdvVG9TdGVwRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYmVmb3JlIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwcmVGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGFmdGVyIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwb3N0RmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqXG4gICAqIFRoZSBkZXN0aW5hdGlvbiBzdGVwLCB0byB3aGljaCB0aGUgd2l6YXJkIHNob3VsZCBuYXZpZ2F0ZSwgYWZ0ZXIgdGhlIGNvbXBvbmVudCwgaGF2aW5nIHRoaXMgZGlyZWN0aXZlIGhhcyBiZWVuIGFjdGl2YXRlZC5cbiAgICogVGhpcyBkZXN0aW5hdGlvbiBzdGVwIGNhbiBiZSBnaXZlbiBlaXRoZXIgYXMgYSBbW1dpemFyZFN0ZXBdXSBjb250YWluaW5nIHRoZSBzdGVwIGRpcmVjdGx5LFxuICAgKiBhIFtbU3RlcE9mZnNldF1dIGJldHdlZW4gdGhlIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGB3aXphcmRTdGVwYCwgaW4gd2hpY2ggdGhpcyBkaXJlY3RpdmUgaGFzIGJlZW4gdXNlZCxcbiAgICogb3IgYSBzdGVwIGluZGV4IGFzIGEgbnVtYmVyIG9yIHN0cmluZ1xuICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXdHb1RvU3RlcCcpXG4gIHB1YmxpYyB0YXJnZXRTdGVwOiBXaXphcmRTdGVwIHwgU3RlcE9mZnNldCB8IFN0ZXBJbmRleCB8IFN0ZXBJZDtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSB3aXphcmQgc3RhdGVcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwLCB3aGljaCBjb250YWlucyB0aGlzIFtbR29Ub1N0ZXBEaXJlY3RpdmVdXVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUsIEBPcHRpb25hbCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICovXG4gIHB1YmxpYyBnZXQgZmluYWxpemUoKTogRXZlbnRFbWl0dGVyPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5wcmVGaW5hbGl6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIG5hbWUgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICpcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIFtbRXZlbnRFbWl0dGVyXV0gdG8gYmUgc2V0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHNldCBmaW5hbGl6ZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHRoaXMucHJlRmluYWxpemUgPSBlbWl0dGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgb2YgdGhpcyBkaXJlY3RpdmUgYXMgYW4gYWJzb2x1dGUgc3RlcCBpbmRleCBpbnNpZGUgdGhlIHdpemFyZFxuICAgKlxuICAgKiBAcmV0dXJucyBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogQHRocm93cyBJZiBgdGFyZ2V0U3RlcGAgaXMgb2YgYW4gdW5rbm93biB0eXBlIGFuIGBFcnJvcmAgaXMgdGhyb3duXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uU3RlcCgpOiBudW1iZXIge1xuICAgIGxldCBkZXN0aW5hdGlvblN0ZXA6IG51bWJlcjtcblxuICAgIGlmIChpc1N0ZXBJbmRleCh0aGlzLnRhcmdldFN0ZXApKSB7XG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLnRhcmdldFN0ZXAuc3RlcEluZGV4O1xuICAgIH0gZWxzZSBpZiAoaXNTdGVwSWQodGhpcy50YXJnZXRTdGVwKSkge1xuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcFdpdGhJZCh0aGlzLnRhcmdldFN0ZXAuc3RlcElkKTtcbiAgICB9IGVsc2UgaWYgKGlzU3RlcE9mZnNldCh0aGlzLnRhcmdldFN0ZXApICYmIHRoaXMud2l6YXJkU3RlcCAhPT0gbnVsbCkge1xuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcCh0aGlzLndpemFyZFN0ZXApICsgdGhpcy50YXJnZXRTdGVwLnN0ZXBPZmZzZXQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldFN0ZXAgaW5zdGFuY2VvZiBXaXphcmRTdGVwKSB7XG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwKHRoaXMudGFyZ2V0U3RlcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgJ3RhcmdldFN0ZXAnIGlzIG5laXRoZXIgYSBXaXphcmRTdGVwLCBTdGVwT2Zmc2V0LCBTdGVwSW5kZXggb3IgU3RlcElkYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uU3RlcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBwcml2YXRlIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXIgbWV0aG9kIGZvciBgY2xpY2tgIGV2ZW50cyBvbiB0aGUgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqIEFmdGVyIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0aGUgd2l6YXJkIHdpbGwgdHJ5IHRvIHRyYW5zaXRpb24gdG8gdGhlIGBkZXN0aW5hdGlvblN0ZXBgXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUuZ29Ub1N0ZXAodGhpcy5kZXN0aW5hdGlvblN0ZXAsIHRoaXMucHJlRmluYWxpemUsIHRoaXMucG9zdEZpbmFsaXplKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgYGF3TmV4dFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSB0byB0aGUgbmV4dCBzdGVwLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGF3TmV4dFN0ZXAgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd05leHRTdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgTmV4dFN0ZXBEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHByZUZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHBvc3RGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIG9mIHRoZSB3aXphcmRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBmaWVsZCBmb3IgYHByZUZpbmFsaXplYFxuICAgKi9cbiAgcHVibGljIGdldCBmaW5hbGl6ZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnByZUZpbmFsaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgbmFtZSBmb3IgYHByZUZpbmFsaXplYFxuICAgKlxuICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgW1tFdmVudEVtaXR0ZXJdXSB0byBiZSBzZXRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2V0IGZpbmFsaXplKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjx2b2lkPikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdGhpcy5wcmVGaW5hbGl6ZSA9IGVtaXR0ZXI7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgbmF2aWdhdGlvbk1vZGUoKTogTmF2aWdhdGlvbk1vZGUge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLm5hdmlnYXRpb25Nb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyIG1ldGhvZCBmb3IgYGNsaWNrYCBldmVudHMgb24gdGhlIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKiBBZnRlciB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgdGhlIHdpemFyZCB3aWxsIHRyeSB0byB0cmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0ZXBcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5nb1RvTmV4dFN0ZXAodGhpcy5wcmVGaW5hbGl6ZSwgdGhpcy5wb3N0RmluYWxpemUpO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdPcHRpb25hbFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYW4gb3B0aW9uYWwgYHdpemFyZC1zdGVwYC5cbiAqIEFuIG9wdGlvbmFsIHdpemFyZCBzdGVwIGlzIGEgW1tXaXphcmRTdGVwXV0gdGhhdCBkb2Vzbid0IG5lZWQgdG8gYmUgY29tcGxldGVkIHRvIHRyYW5zaXRpb24gdG8gbGF0ZXIgd2l6YXJkIHN0ZXBzLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXAgYXdPcHRpb25hbFN0ZXA+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXAgc3RlcFRpdGxlPVwiU2Vjb25kIHN0ZXBcIiBhd09wdGlvbmFsU3RlcD5cbiAqICAgICAuLi5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3T3B0aW9uYWxTdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgT3B0aW9uYWxTdGVwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCwgd2hpY2ggY29udGFpbnMgdGhpcyBbW09wdGlvbmFsU3RlcERpcmVjdGl2ZV1dXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMud2l6YXJkU3RlcC5vcHRpb25hbCA9IHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5cbi8qKlxuICogVGhlIGBhd1ByZXZpb3VzU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIG5hdmlnYXRlIHRvIHRoZSBwcmV2aW91cyBzdGVwLlxuICogQ29tcGFyZWQgdG8gdGhlIFtbTmV4dFN0ZXBEaXJlY3RpdmVdXSBpdCdzIGltcG9ydGFudCB0byBub3RlLCB0aGF0IHRoaXMgZGlyZWN0aXZlIGRvZXNuJ3QgY29udGFpbiBhIGBmaW5hbGl6ZWAgb3V0cHV0IG1ldGhvZC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBhd1ByZXZpb3VzU3RlcD4uLi48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdQcmV2aW91c1N0ZXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBQcmV2aW91c1N0ZXBEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHByZUZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHBvc3RGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIG9mIHRoZSB3aXphcmRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBmaWVsZCBmb3IgYHByZUZpbmFsaXplYFxuICAgKi9cbiAgcHVibGljIGdldCBmaW5hbGl6ZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnByZUZpbmFsaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICpcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIFtbRXZlbnRFbWl0dGVyXV0gdG8gYmUgc2V0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHNldCBmaW5hbGl6ZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHRoaXMucHJlRmluYWxpemUgPSBlbWl0dGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIHByaXZhdGUgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5lciBtZXRob2QgZm9yIGBjbGlja2AgZXZlbnRzIG9uIHRoZSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cbiAgICogQWZ0ZXIgdGhpcyBtZXRob2QgaXMgY2FsbGVkIHRoZSB3aXphcmQgd2lsbCB0cnkgdG8gdHJhbnNpdGlvbiB0byB0aGUgcHJldmlvdXMgc3RlcFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlLmdvVG9QcmV2aW91c1N0ZXAodGhpcy5wcmVGaW5hbGl6ZSwgdGhpcy5wb3N0RmluYWxpemUpO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBgYXdSZXNldFdpemFyZGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIHJlc2V0IHRoZSB3aXphcmQgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gKiBUaGlzIGRpcmVjdGl2ZSBhY2NlcHRzIGFuIG91dHB1dCwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBzb21lIGN1c3RvbSBjbGVhbnVwIHdvcmsgZHVyaW5nIHRoZSByZXNldCBwcm9jZXNzLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGF3UmVzZXRXaXphcmQgKGZpbmFsaXplKT1cImN1c3RvbSByZXNldCB0YXNrXCI+Li4uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3UmVzZXRXaXphcmRdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXNldFdpemFyZERpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBBbiBbW0V2ZW50RW1pdHRlcl1dIGNvbnRhaW5pbmcgc29tZSB0YXNrcyB0byBiZSBkb25lLCBkaXJlY3RseSBiZWZvcmUgdGhlIHdpemFyZCBpcyBiZWluZyByZXNldFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBmaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHdpemFyZCBzdGF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBwcml2YXRlIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSB3aXphcmRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgLy8gZG8gc29tZSBvcHRpb25hbCBjbGVhbnVwIHdvcmtcbiAgICB0aGlzLmZpbmFsaXplLmVtaXQoKTtcbiAgICAvLyByZXNldCB0aGUgd2l6YXJkIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5yZXNldCgpO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdTZWxlY3RlZFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBvbiBhIFtbV2l6YXJkU3RlcF1dIHRvIHNldCBpdCBhcyBzZWxlY3RlZCBhZnRlciB0aGUgd2l6YXJkIGluaXRpYWxpc2F0aW9uIG9yIGEgcmVzZXQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtc3RlcCBzdGVwVGl0bGU9XCJTdGVwIHRpdGxlXCIgYXdTZWxlY3RlZFN0ZXA+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd1NlbGVjdGVkU3RlcF0nXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBzZWxlY3RlZCBieSBkZWZhdWx0XG4gICAqL1xuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMud2l6YXJkU3RlcC5kZWZhdWx0U2VsZWN0ZWQgPSB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdXaXphcmRDb21wbGV0aW9uU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIGNvbXBsZXRpb24vc3VjY2VzcyBzdGVwIGF0IHRoZSBlbmQgb2YgeW91ciB3aXphcmRcbiAqIEFmdGVyIGEgW1tXaXphcmRDb21wbGV0aW9uU3RlcF1dIGhhcyBiZWVuIGVudGVyZWQsIGl0IGhhcyB0aGUgY2hhcmFjdGVyaXN0aWMgdGhhdCB0aGUgdXNlciBpcyBibG9ja2VkIGZyb21cbiAqIGxlYXZpbmcgaXQgYWdhaW4gdG8gYSBwcmV2aW91cyBzdGVwLlxuICogSW4gYWRkaXRpb24gZW50ZXJpbmcgYSBbW1dpemFyZENvbXBsZXRpb25TdGVwXV0gYXV0b21hdGljYWxseSBzZXRzIHRoZSBgd2l6YXJkYCwgYW5kIGFsbCBzdGVwcyBpbnNpZGUgdGhlIGB3aXphcmRgLFxuICogYXMgY29tcGxldGVkLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IGF3V2l6YXJkQ29tcGxldGlvblN0ZXAgW3N0ZXBUaXRsZV09XCJ0aXRsZSBvZiB0aGUgd2l6YXJkIHN0ZXBcIlxuICogICAgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICduYXZpZ2F0aW9uIHN5bWJvbCcsIGZvbnRGYW1pbHk6ICdmb250LWZhbWlseScgfVwiXG4gKiAgICAoc3RlcEVudGVyKT1cImV2ZW50IGVtaXR0ZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHdpemFyZCBzdGVwIGlzIGVudGVyZWRcIlxuICogICAgKHN0ZXBFeGl0KT1cImV2ZW50IGVtaXR0ZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHdpemFyZCBzdGVwIGlzIGV4aXRlZFwiPlxuICogICAgLi4uXG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhd1dpemFyZENvbXBsZXRpb25TdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgMVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnMScgfVwiPlxuICogICAgLi4uXG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIFdpdGggYSBuYXZpZ2F0aW9uIHN5bWJvbCBmcm9tIHRoZSBgZm9udC1hd2Vzb21lYCBmb250OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRDb21wbGV0aW9uU3RlcCBzdGVwVGl0bGU9XCJTdGVwIDFcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd1dpemFyZENvbXBsZXRpb25TdGVwXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSl9LFxuICAgIHtwcm92aWRlOiBXaXphcmRDb21wbGV0aW9uU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUpfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlIGV4dGVuZHMgV2l6YXJkQ29tcGxldGlvblN0ZXAge1xufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhd1dpemFyZFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYSBub3JtYWwgc3RlcCBpbnNpZGUgYSB3aXphcmQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIFdpdGggYHN0ZXBUaXRsZWAgYW5kIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dHM6XG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhd1dpemFyZFN0ZXAgW3N0ZXBUaXRsZV09XCJzdGVwIHRpdGxlXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICdzeW1ib2wnLCBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknIH1cIlxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cbiAqICAgIC4uLlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGBhd1dpemFyZFN0ZXBUaXRsZWAgYW5kIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZXM6XG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhd1dpemFyZFN0ZXAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cbiAqICAgICAgICBzdGVwIHRpdGxlXG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cbiAqICAgICAgICBzeW1ib2xcbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICAuLi5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBXaXRoIGBzdGVwVGl0bGVgIGFuZCBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXRzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRTdGVwIHN0ZXBUaXRsZT1cIkFkZHJlc3MgaW5mb3JtYXRpb25cIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogV2l0aCBgYXdXaXphcmRTdGVwVGl0bGVgIGFuZCBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmVzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRTdGVwPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxuICogICAgICAgIEFkZHJlc3MgaW5mb3JtYXRpb25cbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxuICogICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGF4aVwiPjwvaT5cbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdXaXphcmRTdGVwXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRTdGVwRGlyZWN0aXZlKX1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwRGlyZWN0aXZlIGV4dGVuZHMgV2l6YXJkU3RlcCB7XG59XG4iLCJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7V2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtXaXphcmRTdGVwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7V2l6YXJkQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQge0VuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2VuYWJsZS1iYWNrLWxpbmtzLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0dvVG9TdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ28tdG8tc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtOZXh0U3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL25leHQtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtPcHRpb25hbFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9vcHRpb25hbC1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1ByZXZpb3VzU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3ByZXZpb3VzLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7UmVzZXRXaXphcmREaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZXNldC13aXphcmQuZGlyZWN0aXZlJztcbmltcG9ydCB7U2VsZWN0ZWRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0ZWQtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7V2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXN5bWJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC10aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBUaGUgbW9kdWxlIGRlZmluaW5nIGFsbCB0aGUgY29udGVudCBpbnNpZGUgYGFuZ3VsYXItYXJjaHdpemFyZGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgV2l6YXJkQ29tcG9uZW50LFxuICAgIFdpemFyZFN0ZXBDb21wb25lbnQsXG4gICAgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCxcbiAgICBHb1RvU3RlcERpcmVjdGl2ZSxcbiAgICBOZXh0U3RlcERpcmVjdGl2ZSxcbiAgICBQcmV2aW91c1N0ZXBEaXJlY3RpdmUsXG4gICAgT3B0aW9uYWxTdGVwRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlLFxuICAgIEVuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwRGlyZWN0aXZlLFxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlLFxuICAgIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSxcbiAgICBSZXNldFdpemFyZERpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBXaXphcmRDb21wb25lbnQsXG4gICAgV2l6YXJkU3RlcENvbXBvbmVudCxcbiAgICBXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50LFxuICAgIEdvVG9TdGVwRGlyZWN0aXZlLFxuICAgIE5leHRTdGVwRGlyZWN0aXZlLFxuICAgIFByZXZpb3VzU3RlcERpcmVjdGl2ZSxcbiAgICBPcHRpb25hbFN0ZXBEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUsXG4gICAgRW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBEaXJlY3RpdmUsXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUsXG4gICAgU2VsZWN0ZWRTdGVwRGlyZWN0aXZlLFxuICAgIFJlc2V0V2l6YXJkRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXJjaHdpemFyZE1vZHVsZSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7bmdNb2R1bGU6IEFyY2h3aXphcmRNb2R1bGUsIHByb3ZpZGVyczogW119O1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFjQTs7Ozs7O0lBU0UsbUNBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtLQUMvQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0REFBNEQ7aUJBQ3ZFOzs7O2dCQWhCa0IsV0FBVzs7SUF5QjlCLGdDQUFDO0NBWEQ7Ozs7OztBQ2RBOzs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7OztJQVNFLGtDQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7S0FDL0M7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMERBQTBEO2lCQUNyRTs7OztnQkFuQmtCLFdBQVc7O0lBNEI5QiwrQkFBQztDQVhEOzs7Ozs7QUNqQkE7Ozs7OztBQVdBO0lBQUE7Ozs7O1FBa0NTLHFCQUFnQixHQUFxQixFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQzs7OztRQUtsRCxjQUFTLEdBQUcsS0FBSyxDQUFDOzs7O1FBS2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFLakIsb0JBQWUsR0FBRyxLQUFLLENBQUM7Ozs7UUFLeEIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7OztRQU1qQixhQUFRLEdBQTZHLElBQUksQ0FBQzs7OztRQU0xSCxZQUFPLEdBQTZHLElBQUksQ0FBQzs7Ozs7UUFPekgsY0FBUyxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7Ozs7UUFPL0UsYUFBUSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztLQTRFdEY7SUF0RUMsc0JBQ1csOEJBQU07Ozs7Ozs7Ozs7UUFEakI7WUFFRSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN2Qjs7O09BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBV2MsNEJBQWlCOzs7Ozs7Ozs7O0lBQWhDLFVBQWlDLFNBRVMsRUFDVCxTQUEwQjtRQUN6RCxJQUFJLFFBQU8sU0FBUyxDQUFDLEtBQUssUUFBTyxJQUFJLENBQUMsRUFBRTtZQUN0QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLG9CQUFDLFNBQVMsR0FBWSxDQUFDO1NBQzlDO2FBQU0sSUFBSSxTQUFTLFlBQVksUUFBUSxFQUFFO1lBQ3hDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGtCQUFnQixTQUFTLDBDQUF1QyxDQUFDLENBQUMsQ0FBQztTQUNwRztLQUNGOzs7Ozs7Ozs7Ozs7SUFPTSwwQkFBSzs7Ozs7O0lBQVosVUFBYSxTQUEwQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNoQzs7Ozs7Ozs7Ozs7O0lBT00seUJBQUk7Ozs7OztJQUFYLFVBQVksU0FBMEI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFXTSxpQ0FBWTs7Ozs7Ozs7O0lBQW5CLFVBQW9CLFNBQTBCO1FBQzVDLE9BQU8sVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFXTSxnQ0FBVzs7Ozs7Ozs7O0lBQWxCLFVBQW1CLFNBQTBCO1FBQzNDLE9BQU8sVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDOUQ7O29DQXJKQSxZQUFZLFNBQUMsd0JBQXdCO3FDQU9yQyxZQUFZLFNBQUMseUJBQXlCO3lCQU10QyxLQUFLOzRCQU9MLEtBQUs7bUNBT0wsS0FBSzsyQkEwQkwsS0FBSzswQkFNTCxLQUFLOzRCQU9MLE1BQU07MkJBT04sTUFBTTt5QkFPTixXQUFXLFNBQUMsUUFBUTs7SUFzRXZCLGlCQUFDO0NBNUpEOzs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7OztJQUFtREEsd0NBQVU7SUFBN0Q7UUFBQSxxRUEyQkM7Ozs7UUF2QlEsY0FBUSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBSy9DLGFBQU8sR0FBd0QsS0FBSyxDQUFDOztLQWtCN0U7Ozs7Ozs7OztJQWJRLG9DQUFLOzs7OztJQUFaLFVBQWEsU0FBMEI7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDaEM7Ozs7Ozs7OztJQUtNLG1DQUFJOzs7OztJQUFYLFVBQVksU0FBMEI7O1FBRXBDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQy9CO0lBQ0gsMkJBQUM7Q0EzQkQsQ0FBbUQsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDK0I3RDtJQVVtREEsaURBQW9CO0lBVnZFOztLQVdDOztnQkFYQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsdUNBQW9EO29CQUVwRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsU0FBUyxFQUFFO3dCQUNULEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSw2QkFBNkIsR0FBQSxFQUFDLEVBQUM7d0JBQ25GLEVBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLDZCQUE2QixHQUFBLEVBQUMsRUFBQztxQkFDOUY7O2lCQUNGOztJQUVELG9DQUFDO0NBQUEsQ0FEa0Qsb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7O0lDbkNyRSxXQUFROzs7O0lBSVIsWUFBUzs7OztJQUlULE9BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZE47Ozs7Ozs7O0lBQ0Usd0JBQXNCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0tBQzdDOzs7Ozs7Ozs7O0lBc0NELHlDQUFnQjs7Ozs7O0lBQWhCLFVBQWlCLFdBQWdDLEVBQUUsWUFBaUM7UUFDbEYsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2pGO0tBQ0Y7Ozs7Ozs7Ozs7SUFLRCxxQ0FBWTs7Ozs7O0lBQVosVUFBYSxXQUFnQyxFQUFFLFlBQWlDO1FBQzlFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNqRjtLQUNGO0lBQ0gscUJBQUM7Q0FBQTs7Ozs7Ozs7Ozs7O0FDcEREOzs7Ozs7O0lBQXdDQSxzQ0FBYzs7Ozs7O0lBTXBELDRCQUFZLFdBQXdCO2VBQ2xDLGtCQUFNLFdBQVcsQ0FBQztLQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVdELHdDQUFXOzs7Ozs7Ozs7SUFBWCxVQUFZLGdCQUF3QjtRQUFwQyxpQkFnQkM7O1lBZk8sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDOztZQUVwRCxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQzs7WUFFdkUsa0JBQWtCOzs7O1FBQUcsVUFBQyxRQUFpQjtZQUMzQyxPQUFPLFFBQVEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0RyxDQUFBOztZQUVLLHVCQUF1Qjs7OztRQUFHLFVBQUMsUUFBaUI7WUFDaEQsT0FBTyxRQUFRLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1SCxDQUFBO1FBRUQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzthQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUM7YUFDeEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7S0FDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkQscUNBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQVIsVUFBUyxnQkFBd0IsRUFBRSxXQUFnQyxFQUFFLFlBQWlDO1FBQXRHLGlCQWdDQztRQS9CQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsaUJBQWlCO1lBQ3ZELElBQUksaUJBQWlCLEVBQUU7OztvQkFFZixlQUFlLEdBQW9CLEtBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7O2dCQUc5RixJQUFJLFdBQVcsRUFBRTtvQkFDZixXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3BCOztnQkFHRCxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUM5QyxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBRTlDLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7O2dCQUdyRCxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O2dCQUc3QyxJQUFJLFlBQVksRUFBRTtvQkFDaEIsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNyQjthQUNGO2lCQUFNOztnQkFFTCxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFEO1NBQ0YsRUFBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsd0NBQVc7Ozs7SUFBWCxVQUFZLGdCQUF3QjtRQUNsQyxPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7Ozs7Ozs7SUFPRCxrQ0FBSzs7Ozs7O0lBQUw7O1FBRUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUNoRSxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFnRCxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFrQixDQUFDLENBQUM7U0FDdEc7O1FBR0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsSUFBSTtZQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QixFQUFDLENBQUM7O1FBR0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM5RDtJQUNILHlCQUFDO0NBakhELENBQXdDLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDR3REOzs7Ozs7Ozs7SUFBOENBLDRDQUFjOzs7Ozs7SUFNMUQsa0NBQVksV0FBd0I7ZUFDbEMsa0JBQU0sV0FBVyxDQUFDO0tBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZRCw4Q0FBVzs7Ozs7Ozs7OztJQUFYLFVBQVksZ0JBQXdCO1FBQXBDLGlCQStCQzs7WUE5Qk8sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDOztZQUVwRCxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQzs7WUFFdkUsa0JBQWtCOzs7O1FBQUcsVUFBQyxRQUFpQjtZQUMzQyxPQUFPLFFBQVEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0RyxDQUFBOztZQUVLLHVCQUF1Qjs7OztRQUFHLFVBQUMsUUFBaUI7WUFDaEQsT0FBTyxRQUFRLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1SCxDQUFBOzs7WUFHSyxlQUFlOzs7O1FBQUcsVUFBQyxRQUFpQjtZQUN4QyxJQUFJLFFBQVEsRUFBRTs7b0JBQ04sdUJBQXVCLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXO3FCQUN6RCxNQUFNOzs7OztnQkFBQyxVQUFDLElBQUksRUFBRSxLQUFLLElBQUssT0FBQSxLQUFLLEdBQUcsZ0JBQWdCLEdBQUEsRUFBQztxQkFDakQsS0FBSzs7OztnQkFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFBLEVBQUM7Z0JBRWxFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FDcEIsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLG9CQUFvQixDQUFDLElBQUksdUJBQXVCLENBQUMsQ0FBQzthQUNwSDtpQkFBTTtnQkFDTCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0I7U0FDRixDQUFBO1FBRUQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzthQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUM7YUFDeEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDO2FBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUMxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCRCwyQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBUixVQUFTLGdCQUF3QixFQUFFLFdBQWdDLEVBQUUsWUFBaUM7UUFBdEcsaUJBZ0NDO1FBL0JDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxpQkFBaUI7WUFDdkQsSUFBSSxpQkFBaUIsRUFBRTs7O29CQUVmLGVBQWUsR0FBb0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQzs7Z0JBRzlGLElBQUksV0FBVyxFQUFFO29CQUNmLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDcEI7O2dCQUdELEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzlDLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDbkQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFFOUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQzs7Z0JBR3JELEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDcEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs7Z0JBRzdDLElBQUksWUFBWSxFQUFFO29CQUNoQixZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3JCO2FBQ0Y7aUJBQU07O2dCQUVMLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUQ7U0FDRixFQUFDLENBQUM7S0FDSjs7Ozs7Ozs7O0lBS0QsOENBQVc7Ozs7O0lBQVgsVUFBWSxnQkFBd0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLG9CQUFvQixFQUFFOztZQUVyRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU07Ozs7O1lBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLE9BQUEsS0FBSyxHQUFHLGdCQUFnQixHQUFBLEVBQUM7aUJBQ2xGLEtBQUs7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFBLEVBQUMsQ0FBQztTQUNwRTthQUFNOztZQUVMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjs7Ozs7Ozs7SUFLRCx3Q0FBSzs7OztJQUFMOztRQUVFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDaEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBZ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBa0IsQ0FBQyxDQUFDO1NBQ3RHOzs7WUFHSyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFlBQVksb0JBQW9CO1lBQzlILElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBRTNDLElBQUkscUJBQXFCLEVBQUU7WUFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBMEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0Isa0NBQStCLENBQUMsQ0FBQztTQUM3Rzs7UUFHRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCLEVBQUMsQ0FBQzs7UUFHSCxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzlEO0lBQ0gsK0JBQUM7Q0FqSkQsQ0FBOEMsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUNENUQ7Ozs7Ozs7OztJQUEwQ0Esd0NBQWM7Ozs7OztJQU10RCw4QkFBWSxXQUF3QjtlQUNsQyxrQkFBTSxXQUFXLENBQUM7S0FDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlELDBDQUFXOzs7Ozs7Ozs7O0lBQVgsVUFBWSxnQkFBd0I7UUFBcEMsaUJBNEJDOztZQTNCTyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7O1lBRXBELGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDOztZQUV2RSxrQkFBa0I7Ozs7UUFBRyxVQUFDLFFBQWlCO1lBQzNDLE9BQU8sUUFBUSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RHLENBQUE7O1lBRUssdUJBQXVCOzs7O1FBQUcsVUFBQyxRQUFpQjtZQUNoRCxPQUFPLFFBQVEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVILENBQUE7O1lBRUssd0JBQXdCOzs7O1FBQUcsVUFBQyxRQUFpQjtZQUNqRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXO3FCQUNoRCxNQUFNOzs7OztnQkFBQyxVQUFDLElBQUksRUFBRSxLQUFLLElBQUssT0FBQSxLQUFLLEdBQUcsZ0JBQWdCLElBQUksS0FBSyxLQUFLLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEdBQUEsRUFBQztxQkFDaEcsS0FBSzs7OztnQkFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBQSxFQUFDLENBQ2hELENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0I7U0FDRixDQUFBO1FBRUQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzthQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUM7YUFDeEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDO2FBQzdCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQ25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkQsdUNBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFSLFVBQVMsZ0JBQXdCLEVBQUUsV0FBZ0MsRUFBRSxZQUFpQztRQUF0RyxpQkFvQ0M7UUFuQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLGlCQUFpQjtZQUN2RCxJQUFJLGlCQUFpQixFQUFFOztvQkFDZixlQUFlLEdBQW9CLEtBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7O2dCQUc5RixJQUFJLFdBQVcsRUFBRTtvQkFDZixXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3BCOztnQkFHRCxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUM5QyxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7O2dCQUc5QyxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVc7cUJBQ3pCLE1BQU07Ozs7O2dCQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLElBQUksS0FBSyxHQUFHLGdCQUFnQixHQUFBLEVBQUM7cUJBQ3pHLE9BQU87Ozs7Z0JBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBQSxFQUFDLENBQUM7Z0JBRTNDLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7O2dCQUdyRCxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O2dCQUc3QyxJQUFJLFlBQVksRUFBRTtvQkFDaEIsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNyQjthQUNGO2lCQUFNOztnQkFFTCxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFEO1NBQ0YsRUFBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsMENBQVc7Ozs7SUFBWCxVQUFZLGdCQUF3Qjs7UUFFbEMsT0FBTyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDO0tBQzdEOzs7Ozs7Ozs7Ozs7SUFPRCxvQ0FBSzs7Ozs7O0lBQUw7UUFBQSxpQkF5QkM7O1FBdkJDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDaEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBZ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBa0IsQ0FBQyxDQUFDO1NBQ3RHOzs7WUFHSyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVc7YUFDcEQsTUFBTTs7Ozs7UUFBQyxVQUFDLElBQUksRUFBRSxLQUFLLElBQUssT0FBQSxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsR0FBQSxFQUFDO2FBQ2xFLElBQUk7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQSxFQUFDO1FBRS9CLElBQUksa0JBQWtCLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBMEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsMENBQXVDLENBQUMsQ0FBQztTQUNySDs7UUFHRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCLEVBQUMsQ0FBQzs7UUFHSCxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzlEO0lBQ0gsMkJBQUM7Q0E3SUQsQ0FBMEMsY0FBYzs7Ozs7O0FDYnhEOzs7Ozs7O0FBYUEsU0FBZ0IscUJBQXFCLENBQUMsY0FBc0IsRUFBRSxXQUF3QjtJQUNwRixRQUFRLGNBQWM7UUFDcEIsS0FBSyxNQUFNO1lBQ1QsT0FBTyxJQUFJLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLEtBQUssYUFBYTtZQUNoQixPQUFPLElBQUksd0JBQXdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkQsS0FBSyxRQUFRLENBQUM7UUFDZDtZQUNFLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNoRDtDQUNGOzs7Ozs7QUN2QkQ7Ozs7Ozs7Ozs7QUFnQkE7Ozs7SUEwQkU7Ozs7UUFyQk8sZ0JBQVcsR0FBc0IsRUFBRSxDQUFDOzs7OztRQU1wQyxxQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQzs7OztRQXFCckIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO0tBTDdCO0lBYUQsc0JBQVcseUNBQWdCOzs7Ozs7Ozs7Ozs7OztRQUEzQjs7Z0JBQ1EsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsZUFBZSxHQUFBLEVBQUM7WUFFNUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7YUFDL0I7U0FDRjs7Ozs7Ozs7Ozs7Ozs7UUFRRCxVQUE0QixnQkFBZ0I7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO1NBQzNDOzs7T0FWQTtJQW9CRCxzQkFBVyxvQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBQXRCO1lBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUN2QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGOzs7T0FBQTtJQU1ELHNCQUFXLGtDQUFTOzs7Ozs7Ozs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBQSxFQUFDLENBQUM7U0FDeEU7OztPQUFBOzs7Ozs7Ozs7Ozs7SUFPRCwwQ0FBb0I7Ozs7OztJQUFwQixVQUFxQixxQkFBNkI7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMxRTs7Ozs7Ozs7Ozs7O0lBT0QsdUNBQWlCOzs7Ozs7SUFBakIsVUFBa0Isa0JBQXFDOztRQUVyRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7U0FDN0Y7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDO0tBQ3ZDOzs7Ozs7Ozs7Ozs7O0lBUUQsNkJBQU87Ozs7OztJQUFQLFVBQVEsU0FBaUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7S0FDN0Y7Ozs7Ozs7Ozs7O0lBT0QscUNBQWU7Ozs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2hEOzs7Ozs7Ozs7OztJQU9ELGlDQUFXOzs7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNoRDs7Ozs7Ozs7Ozs7SUFPRCxnQ0FBVTs7Ozs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDN0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBVUQsb0NBQWM7Ozs7Ozs7O0lBQWQsVUFBZSxTQUFpQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLCtDQUE2QyxTQUFTLE1BQUcsQ0FBQyxDQUFDO1NBQzVFO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7SUFTRCwwQ0FBb0I7Ozs7Ozs7SUFBcEIsVUFBcUIsTUFBYztRQUNqQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEdBQUEsRUFBQyxDQUFDO0tBQ25FOzs7Ozs7Ozs7Ozs7Ozs7SUFTRCxvQ0FBYzs7Ozs7OztJQUFkLFVBQWUsSUFBZ0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2Qzs7Ozs7Ozs7Ozs7OztJQVFELHdDQUFrQjs7Ozs7O0lBQWxCLFVBQW1CLGVBQXVCOztZQUNwQyxlQUFnQztRQUVwQyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0MsZUFBZSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7U0FDNUM7YUFBTSxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDbEQsZUFBZSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7U0FDN0M7YUFBTTtZQUNMLGVBQWUsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxlQUFlLENBQUM7S0FDeEI7O2dCQXhNRixVQUFVOzs7O0lBeU1YLGtCQUFDO0NBek1EOzs7Ozs7QUNoQkE7Ozs7Ozs7Ozs7Ozs7QUFrQkE7Ozs7OztJQW1CRSxzQ0FBbUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7Ozs7O1FBUHBDLGNBQVMsR0FBRyxlQUFlLENBQUM7S0FRbEM7SUFLRCxzQkFBVyx3REFBYzs7Ozs7Ozs7UUFBekI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1NBQ3hDOzs7T0FBQTtJQU9ELHNCQUFJLHFEQUFXOzs7Ozs7Ozs7OztRQUFmO1lBQ0UsUUFBUSxJQUFJLENBQUMsU0FBUztnQkFDcEIsS0FBSyxlQUFlO29CQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4RCxLQUFLLGVBQWUsQ0FBQztnQkFDckI7b0JBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQzthQUN2QztTQUNGOzs7T0FBQTtJQU9ELHNCQUFJLDZEQUFtQjs7Ozs7Ozs7Ozs7UUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUM1Qzs7O09BQUE7Ozs7Ozs7Ozs7Ozs7SUFRTSxnREFBUzs7Ozs7O0lBQWhCLFVBQWlCLFVBQXNCO1FBQ3JDLE9BQU8sVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztLQUNwRjs7Ozs7Ozs7Ozs7OztJQVFNLDZDQUFNOzs7Ozs7SUFBYixVQUFjLFVBQXNCO1FBQ2xDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztLQUNyRjs7Ozs7Ozs7Ozs7OztJQVFNLGdEQUFTOzs7Ozs7SUFBaEIsVUFBaUIsVUFBc0I7UUFDckMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO0tBQzdHOzs7Ozs7Ozs7Ozs7O0lBUU0sZ0RBQVM7Ozs7OztJQUFoQixVQUFpQixVQUFzQjtRQUNyQyxPQUFPLFVBQVUsQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO0tBQ25GOzs7Ozs7Ozs7Ozs7O0lBUU0saURBQVU7Ozs7OztJQUFqQixVQUFrQixVQUFzQjtRQUN0QyxPQUFPLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO0tBQzVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZTSxrREFBVzs7Ozs7Ozs7OztJQUFsQixVQUFtQixVQUFzQjtRQUN2QyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CO1lBQ25FLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7S0FDaEY7O2dCQXBIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsZ2tDQUFtRDtvQkFFbkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFyQk8sV0FBVzs7OzRCQTJCaEIsS0FBSzs7SUEwR1IsbUNBQUM7Q0FySEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3VDQTtJQVN5Q0EsdUNBQVU7SUFUbkQ7O0tBVUM7O2dCQVZBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQix1Q0FBeUM7b0JBRXpDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxTQUFTLEVBQUU7d0JBQ1QsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLG1CQUFtQixHQUFBLEVBQUMsRUFBQztxQkFDMUU7O2lCQUNGOztJQUVELDBCQUFDO0NBQUEsQ0FEd0MsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQm5EOzs7Ozs7SUEyREUseUJBQW1CLEtBQWtCO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7Ozs7O1FBeEM5QixtQkFBYyxHQUFHLEtBQUssQ0FBQzs7Ozs7UUFPdkIsaUJBQVksR0FBRyxPQUFPLENBQUM7Ozs7O1FBT3ZCLG9CQUFlLEdBQUcsZUFBZSxDQUFDOzs7OztRQU9sQyxtQkFBYyxHQUFHLFFBQVEsQ0FBQzs7OztRQU0xQixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7Ozs7UUFNckIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO0tBUW5DO0lBUUQsc0JBQ1csa0RBQXFCOzs7Ozs7Ozs7Ozs7O1FBRGhDO1lBRUUsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFFBQVEsQ0FBQztTQUMxRTs7O09BQUE7SUFRRCxzQkFDVyxnREFBbUI7Ozs7Ozs7Ozs7Ozs7UUFEOUI7WUFFRSxPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssT0FBTyxDQUFDO1NBQzFFOzs7T0FBQTtJQUtELHNCQUFXLHVDQUFVOzs7Ozs7OztRQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7U0FDbEM7OztPQUFBOzs7Ozs7Ozs7Ozs7SUFPRCxxQ0FBVzs7Ozs7O0lBQVgsVUFBWSxPQUFzQjs7O1lBQ2hDLEtBQXVCLElBQUEsS0FBQUMsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO2dCQUF4QyxJQUFNLFFBQVEsV0FBQTs7b0JBQ1gsTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBRWhDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO29CQUN2QixRQUFRLFFBQVE7d0JBQ2QsS0FBSyxrQkFBa0I7NEJBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQ2hFLE1BQU07d0JBQ1IsS0FBSyxzQkFBc0I7NEJBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQzs0QkFDdEQsTUFBTTt3QkFDUixLQUFLLGdCQUFnQjs0QkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3JELE1BQU07O3dCQUVSLFFBQVE7cUJBQ1Q7aUJBQ0Y7YUFDRjs7Ozs7Ozs7O0tBQ0Y7Ozs7Ozs7O0lBS0QsNENBQWtCOzs7O0lBQWxCO1FBQUEsaUJBY0M7O1FBWkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsa0JBQWtCO1lBQ25ELEtBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM1RCxFQUFDLENBQUM7O1FBR0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7O1FBR3JELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDekI7O2dCQXZJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGl6Q0FBb0M7b0JBRXBDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7O2lCQUN6Qjs7OztnQkE1Q08sV0FBVzs7OzhCQWlEaEIsZUFBZSxTQUFDLFVBQVU7aUNBTzFCLEtBQUs7K0JBT0wsS0FBSztrQ0FPTCxLQUFLO2lDQU9MLEtBQUs7bUNBTUwsS0FBSzt1Q0FNTCxLQUFLO3dDQWlCTCxXQUFXLFNBQUMsa0JBQWtCO3NDQVc5QixXQUFXLFNBQUMsZ0JBQWdCOztJQXlEL0Isc0JBQUM7Q0F4SUQ7Ozs7OztBQ2xEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7Ozs7SUFnQkUsa0NBQTRCLGNBQW9DO1FBQXBDLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjs7Ozs7UUFQekQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO0tBUXJEOzs7Ozs7OztJQUtELDJDQUFROzs7O0lBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUM5Qzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQzs7OztnQkF6Qk8sb0JBQW9CLHVCQXVDYixJQUFJOzs7MkJBUmhCLE1BQU07O0lBa0JULCtCQUFDO0NBMUJEOzs7Ozs7QUN6QkE7Ozs7OztBQW9CQSxTQUFnQixRQUFRLENBQUMsS0FBVTtJQUNqQyxPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLFlBQVksVUFBVSxDQUFDLENBQUM7Q0FDekU7Ozs7Ozs7Ozs7OztBQ0ZELFNBQWdCLFdBQVcsQ0FBQyxLQUFVO0lBQ3BDLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztDQUMxQzs7Ozs7Ozs7Ozs7O0FDREQsU0FBZ0IsWUFBWSxDQUFDLEtBQVU7SUFDckMsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0NBQzNDOzs7Ozs7QUN2QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBOzs7Ozs7O0lBK0JFLDJCQUFvQixXQUF3QixFQUFzQixVQUFzQjtRQUFwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFzQixlQUFVLEdBQVYsVUFBVSxDQUFZOzs7O1FBdkJqRixnQkFBVyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBTXJELGlCQUFZLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7S0FrQjVEO0lBS0Qsc0JBQVcsdUNBQVE7Ozs7Ozs7O1FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7Ozs7Ozs7Ozs7UUFPRCxVQUNvQixPQUEyQjs7WUFFN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7U0FDNUI7OztPQVhBO0lBbUJELHNCQUFXLDhDQUFlOzs7Ozs7Ozs7Ozs7O1FBQTFCOztnQkFDTSxlQUF1QjtZQUUzQixJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2hDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQzthQUM3QztpQkFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3BDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakY7aUJBQU0sSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO2dCQUNwRSxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO2FBQ2pHO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsWUFBWSxVQUFVLEVBQUU7Z0JBQ2hELGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDcEU7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDO2FBQ2hHO1lBRUQsT0FBTyxlQUFlLENBQUM7U0FDeEI7OztPQUFBO0lBS0Qsc0JBQVksNkNBQWM7Ozs7Ozs7OztRQUExQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7U0FDeEM7OztPQUFBOzs7Ozs7Ozs7OztJQU9NLG1DQUFPOzs7Ozs7SUFEZCxVQUNlLEtBQVk7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN6Rjs7Z0JBMUZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBeENPLFdBQVc7Z0JBSVgsVUFBVSx1QkFpRStCLFFBQVE7Ozs4QkF4QnRELE1BQU07K0JBTU4sTUFBTTs2QkFTTixLQUFLLFNBQUMsWUFBWTsyQkF3QmxCLE1BQU07MEJBeUNOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBSW5DLHdCQUFDO0NBM0ZEOzs7Ozs7QUN4Q0E7Ozs7Ozs7Ozs7O0FBZUE7Ozs7OztJQXFCRSwyQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7Ozs7UUFickMsZ0JBQVcsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQU1yRCxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0tBUTVEO0lBS0Qsc0JBQVcsdUNBQVE7Ozs7Ozs7O1FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7Ozs7Ozs7Ozs7UUFPRCxVQUNvQixPQUEyQjs7WUFFN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7U0FDNUI7OztPQVhBO0lBZ0JELHNCQUFZLDZDQUFjOzs7Ozs7Ozs7UUFBMUI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1NBQ3hDOzs7T0FBQTs7Ozs7Ozs7Ozs7SUFPTSxtQ0FBTzs7Ozs7O0lBRGQsVUFDZSxLQUFZO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3ZFOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFmTyxXQUFXOzs7OEJBb0JoQixNQUFNOytCQU1OLE1BQU07MkJBdUJOLE1BQU07MEJBaUJOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBSW5DLHdCQUFDO0NBekREOzs7Ozs7QUNmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7Ozs7O0lBU0UsK0JBQTRCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7S0FDakQ7Ozs7Ozs7O0lBS0Qsd0NBQVE7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztLQUNqQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkExQk8sVUFBVSx1QkFpQ0gsSUFBSTs7SUFTbkIsNEJBQUM7Q0FsQkQ7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7SUFxQkUsK0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhOzs7O1FBYnJDLGdCQUFXLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7UUFNckQsaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQVE1RDtJQUtELHNCQUFXLDJDQUFROzs7Ozs7OztRQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6Qjs7Ozs7Ozs7Ozs7O1FBT0QsVUFDb0IsT0FBMkI7O1lBRTdDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1NBQzVCOzs7T0FYQTtJQWdCRCxzQkFBWSxpREFBYzs7Ozs7Ozs7O1FBQTFCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztTQUN4Qzs7O09BQUE7Ozs7Ozs7Ozs7O0lBT00sdUNBQU87Ozs7OztJQURkLFVBQ2UsS0FBWTtRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQzNFOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQWhCTyxXQUFXOzs7OEJBcUJoQixNQUFNOytCQU1OLE1BQU07MkJBdUJOLE1BQU07MEJBaUJOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBSW5DLDRCQUFDO0NBekREOzs7Ozs7QUNoQkE7Ozs7Ozs7Ozs7OztBQWdCQTs7Ozs7O0lBZUUsOEJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhOzs7O1FBUHJDLGFBQVEsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQVF4RDtJQUtELHNCQUFZLGdEQUFjOzs7Ozs7Ozs7UUFBMUI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1NBQ3hDOzs7T0FBQTs7Ozs7Ozs7O0lBTU0sc0NBQU87Ozs7O0lBRGQsVUFDZSxLQUFZOztRQUV6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDOztRQUVyQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzdCOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzs7O2dCQWhCTyxXQUFXOzs7MkJBcUJoQixNQUFNOzBCQXFCTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQU9uQywyQkFBQztDQW5DRDs7Ozs7O0FDaEJBOzs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7SUFTRSwrQkFBNEIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtLQUNqRDs7Ozs7Ozs7SUFLRCx3Q0FBUTs7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0tBQ3hDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQWpCTyxVQUFVLHVCQXdCSCxJQUFJOztJQVNuQiw0QkFBQztDQWxCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0JBO0lBT21ERCxpREFBb0I7SUFQdkU7O0tBUUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxTQUFTLEVBQUU7d0JBQ1QsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLDZCQUE2QixHQUFBLEVBQUMsRUFBQzt3QkFDbkYsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsNkJBQTZCLEdBQUEsRUFBQyxFQUFDO3FCQUM5RjtpQkFDRjs7SUFFRCxvQ0FBQztDQUFBLENBRGtELG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNTdkU7SUFNeUNBLHVDQUFVO0lBTm5EOztLQU9DOztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsU0FBUyxFQUFFO3dCQUNULEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxtQkFBbUIsR0FBQSxFQUFDLEVBQUM7cUJBQzFFO2lCQUNGOztJQUVELDBCQUFDO0NBQUEsQ0FEd0MsVUFBVTs7Ozs7O0FDOURuRDs7Ozs7QUF1QkE7SUFBQTtLQTRDQzs7Ozs7O0lBSFEsd0JBQU87Ozs7SUFBZDtRQUNFLE9BQU8sRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBQyxDQUFDO0tBQ3BEOztnQkEzQ0YsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsNEJBQTRCO3dCQUM1Qiw2QkFBNkI7d0JBQzdCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLHFCQUFxQjt3QkFDckIseUJBQXlCO3dCQUN6Qix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsbUJBQW1CO3dCQUNuQiw2QkFBNkI7d0JBQzdCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLDRCQUE0Qjt3QkFDNUIsNkJBQTZCO3dCQUM3QixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLG1CQUFtQjt3QkFDbkIsNkJBQTZCO3dCQUM3QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjtxQkFDckI7aUJBQ0Y7O0lBTUQsdUJBQUM7Q0E1Q0Q7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/AsYouType.js":
/*!*********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/AsYouType.js ***!
  \*********************************************************/
/*! exports provided: DIGIT_PLACEHOLDER, default, close_dangling_braces, count_occurences, repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIGIT_PLACEHOLDER", function() { return DIGIT_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close_dangling_braces", function() { return close_dangling_braces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count_occurences", function() { return count_occurences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse */ "./node_modules/libphonenumber-js/es6/parse.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format */ "./node_modules/libphonenumber-js/es6/format.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common */ "./node_modules/libphonenumber-js/es6/common.js");



// This is an enhanced port of Google Android `libphonenumber`'s
// `asyoutypeformatter.js` of 17th November, 2016.
//
// https://github.com/googlei18n/libphonenumber/blob/8d21a365061de2ba0675c878a710a7b24f74d2ae/javascript/i18n/phonenumbers/asyoutypeformatter.js









// Used in phone number format template creation.
// Could be any digit, I guess.
var DUMMY_DIGIT = '9';
var DUMMY_DIGIT_MATCHER = new RegExp(DUMMY_DIGIT, 'g');
// I don't know why is it exactly `15`
var LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15;
// Create a phone number consisting only of the digit 9 that matches the
// `number_pattern` by applying the pattern to the "longest phone number" string.
var LONGEST_DUMMY_PHONE_NUMBER = repeat(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH);

// The digits that have not been entered yet will be represented by a \u2008,
// the punctuation space.
var DIGIT_PLACEHOLDER = 'x'; // '\u2008' (punctuation space)
var DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER);
var DIGIT_PLACEHOLDER_MATCHER_GLOBAL = new RegExp(DIGIT_PLACEHOLDER, 'g');

// A pattern that is used to match character classes in regular expressions.
// An example of a character class is "[1-4]".
var CHARACTER_CLASS_PATTERN = /\[([^\[\]])*\]/g;

// Any digit in a regular expression that actually denotes a digit. For
// example, in the regular expression "80[0-2]\d{6,10}", the first 2 digits
// (8 and 0) are standalone digits, but the rest are not.
// Two look-aheads are needed because the number following \\d could be a
// two-digit number, since the phone number can be as long as 15 digits.
var STANDALONE_DIGIT_PATTERN = /\d(?=[^,}][^,}])/g;

// A pattern that is used to determine if a `format` is eligible
// to be used by the "as you type formatter".
// It is eligible when the `format` contains groups of the dollar sign
// followed by a single digit, separated by valid phone number punctuation.
// This prevents invalid punctuation (such as the star sign in Israeli star numbers)
// getting into the output of the "as you type formatter".
var ELIGIBLE_FORMAT_PATTERN = new RegExp('^' + '[' + _parse__WEBPACK_IMPORTED_MODULE_4__["VALID_PUNCTUATION"] + ']*' + '(\\$\\d[' + _parse__WEBPACK_IMPORTED_MODULE_4__["VALID_PUNCTUATION"] + ']*)+' + '$');

// This is the minimum length of the leading digits of a phone number
// to guarantee the first "leading digits pattern" for a phone number format
// to be preemptive.
var MIN_LEADING_DIGITS_LENGTH = 3;

var VALID_INCOMPLETE_PHONE_NUMBER = '[' + _parse__WEBPACK_IMPORTED_MODULE_4__["PLUS_CHARS"] + ']{0,1}' + '[' + _parse__WEBPACK_IMPORTED_MODULE_4__["VALID_PUNCTUATION"] + _parse__WEBPACK_IMPORTED_MODULE_4__["VALID_DIGITS"] + ']*';

var VALID_INCOMPLETE_PHONE_NUMBER_PATTERN = new RegExp('^' + VALID_INCOMPLETE_PHONE_NUMBER + '$', 'i');

var as_you_type = function () {
	function as_you_type(country_code, metadata) {
		babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, as_you_type);

		// Metadata is required.
		if (!metadata || !metadata.countries) {
			throw new Error('Metadata is required');
		}

		if (country_code && metadata.countries[country_code]) {
			this.default_country = country_code;
		}

		this.metadata = metadata;

		this.reset();
	}

	babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(as_you_type, [{
		key: 'input',
		value: function input(text) {
			// Parse input

			var extracted_number = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["extract_formatted_phone_number"])(text);

			// Special case for a lone '+' sign
			// since it's not considered a possible phone number.
			if (!extracted_number) {
				if (text && text.indexOf('+') >= 0) {
					extracted_number = '+';
				}
			}

			// Validate possible first part of a phone number
			if (!Object(_common__WEBPACK_IMPORTED_MODULE_6__["matches_entirely"])(extracted_number, VALID_INCOMPLETE_PHONE_NUMBER_PATTERN)) {
				return this.current_output;
			}

			return this.process_input(Object(_parse__WEBPACK_IMPORTED_MODULE_4__["parse_phone_number"])(extracted_number));
		}
	}, {
		key: 'process_input',
		value: function process_input(input) {
			// If an out of position '+' sign detected
			// (or a second '+' sign),
			// then just drop it from the input.
			if (input[0] === '+') {
				if (!this.parsed_input) {
					this.parsed_input += '+';

					// If a default country was set
					// then reset it because an explicitly international
					// phone number is being entered
					this.reset_countriness();
				}

				input = input.slice(1);
			}

			// Raw phone number
			this.parsed_input += input;

			// // Reset phone number validation state
			// this.valid = false

			// Add digits to the national number
			this.national_number += input;

			// Try to format the parsed input

			if (this.is_international()) {
				if (!this.country_phone_code) {
					// If one looks at country phone codes
					// then he can notice that no one country phone code
					// is ever a (leftmost) substring of another country phone code.
					// So if a valid country code is extracted so far
					// then it means that this is the country code.

					// If no country phone code could be extracted so far,
					// then just return the raw phone number,
					// because it has no way of knowing
					// how to format the phone number so far.
					if (!this.extract_country_phone_code()) {
						// Return raw phone number
						return this.parsed_input;
					}

					// Initialize country-specific data
					this.initialize_phone_number_formats_for_this_country_phone_code();
					this.reset_format();
					this.determine_the_country();
				}
				// `this.country` could be `undefined`,
				// for instance, when there is ambiguity
				// in a form of several different countries
				// each corresponding to the same country phone code
				// (e.g. NANPA: USA, Canada, etc),
				// and there's not enough digits entered
				// to reliably determine the country
				// the phone number belongs to.
				// Therefore, in cases of such ambiguity,
				// each time something is input,
				// try to determine the country
				// (if it's not determined yet).
				else if (!this.country) {
						this.determine_the_country();
					}
			} else {
				// Some national prefixes are substrings of other national prefixes
				// (for the same country), therefore try to extract national prefix each time
				// because a longer national prefix might be available at some point in time.

				var previous_national_prefix = this.national_prefix;
				this.national_number = this.national_prefix + this.national_number;

				// Possibly extract a national prefix
				this.extract_national_prefix();

				if (this.national_prefix !== previous_national_prefix) {
					// National number has changed
					// (due to another national prefix been extracted)
					// therefore national number has changed
					// therefore reset all previous formatting data.
					// (and leading digits matching state)
					this.matching_formats = this.available_formats;
					this.reset_format();
				}
			}

			if (!this.should_format()) {
				return this.format_as_non_formatted_number();
			}

			// Check the available phone number formats
			// based on the currently available leading digits.
			this.match_formats_by_leading_digits();

			// Format the phone number (given the next digits)
			var formatted_national_phone_number = this.format_national_phone_number(input);

			// If the phone number could be formatted,
			// then return it, possibly prepending with country phone code
			// (for international phone numbers only)
			if (formatted_national_phone_number) {
				return this.full_phone_number(formatted_national_phone_number);
			}

			// If the phone number couldn't be formatted,
			// then just fall back to the raw phone number.
			return this.parsed_input;
		}
	}, {
		key: 'format_as_non_formatted_number',
		value: function format_as_non_formatted_number() {
			if (this.is_international() && this.country_phone_code) {
				if (this.national_number) {
					// For convenience, the public `.template` property
					// contains the whole international number
					// if the phone number being input is international:
					// 'x' for the '+' sign, 'x'es for the country phone code,
					// a spacebar and then the template for the national number digits.
					this.template = DIGIT_PLACEHOLDER + repeat(DIGIT_PLACEHOLDER, this.country_phone_code.length) + ' ' + repeat(DIGIT_PLACEHOLDER, this.national_number.length);

					return '+' + this.country_phone_code + ' ' + this.national_number;
				}

				return '+' + this.country_phone_code;
			}

			return this.parsed_input;
		}
	}, {
		key: 'format_national_phone_number',
		value: function format_national_phone_number(next_digits) {
			// Format the next phone number digits
			// using the previously chosen phone number format.
			//
			// This is done here because if `attempt_to_format_complete_phone_number`
			// was placed before this call then the `template`
			// wouldn't reflect the situation correctly (and would therefore be inconsistent)
			//
			var national_number_formatted_with_previous_format = void 0;
			if (this.chosen_format) {
				national_number_formatted_with_previous_format = this.format_next_national_number_digits(next_digits);
			}

			// See if the input digits can be formatted properly already. If not,
			// use the results from format_next_national_number_digits(), which does formatting
			// based on the formatting pattern chosen.

			var formatted_number = this.attempt_to_format_complete_phone_number();

			// Just because a phone number doesn't have a suitable format
			// that doesn't mean that the phone is invalid
			// because phone number formats only format phone numbers,
			// they don't validate them and some (rare) phone numbers
			// are meant to stay non-formatted.
			if (formatted_number) {
				// if (this.country)
				// {
				// 	this.valid = true
				// }

				return formatted_number;
			}

			// For some phone number formats national prefix

			// If the previously chosen phone number format
			// didn't match the next (current) digit being input
			// (leading digits pattern didn't match).
			if (this.choose_another_format()) {
				// And a more appropriate phone number format
				// has been chosen for these `leading digits`,
				// then format the national phone number (so far)
				// using the newly selected phone number pattern.

				// Will return `undefined` if it couldn't format
				// the supplied national number
				// using the selected phone number pattern.

				return this.reformat_national_number();
			}

			// If could format the next (current) digit
			// using the previously chosen phone number format
			// then return the formatted number so far.

			// If no new phone number format could be chosen,
			// and couldn't format the supplied national number
			// using the selected phone number pattern,
			// then it will return `undefined`.

			return national_number_formatted_with_previous_format;
		}
	}, {
		key: 'reset',
		value: function reset() {
			// Input stripped of non-phone-number characters.
			// Can only contain a possible leading '+' sign and digits.
			this.parsed_input = '';

			this.current_output = '';

			// This contains the national prefix that has been extracted. It contains only
			// digits without formatting.
			this.national_prefix = '';

			this.national_number = '';

			this.reset_countriness();

			this.reset_format();

			// this.valid = false

			return this;
		}
	}, {
		key: 'reset_country',
		value: function reset_country() {
			if (this.default_country && !this.is_international()) {
				this.country = this.default_country;
			} else {
				this.country = undefined;
			}
		}
	}, {
		key: 'reset_countriness',
		value: function reset_countriness() {
			this.reset_country();

			if (this.default_country && !this.is_international()) {
				this.country_metadata = this.metadata.countries[this.default_country];
				this.country_phone_code = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_phone_code"])(this.country_metadata);

				this.initialize_phone_number_formats_for_this_country_phone_code();
			} else {
				this.country_metadata = undefined;
				this.country_phone_code = undefined;

				this.available_formats = [];
				this.matching_formats = this.available_formats;
			}
		}
	}, {
		key: 'reset_format',
		value: function reset_format() {
			this.chosen_format = undefined;
			this.template = undefined;
			this.partially_populated_template = undefined;
			this.last_match_position = -1;
		}

		// Format each digit of national phone number (so far)
		// using the newly selected phone number pattern.

	}, {
		key: 'reformat_national_number',
		value: function reformat_national_number() {
			// Format each digit of national phone number (so far)
			// using the selected phone number pattern.
			return this.format_next_national_number_digits(this.national_number);
		}
	}, {
		key: 'initialize_phone_number_formats_for_this_country_phone_code',
		value: function initialize_phone_number_formats_for_this_country_phone_code() {
			// Get all "eligible" phone number formats for this country
			this.available_formats = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_formats"])(this.country_metadata).filter(function (format) {
				return ELIGIBLE_FORMAT_PATTERN.test(Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_international_format"])(format));
			});

			this.matching_formats = this.available_formats;
		}
	}, {
		key: 'match_formats_by_leading_digits',
		value: function match_formats_by_leading_digits() {
			var leading_digits = this.national_number;

			// "leading digits" pattern list starts with
			// one of a maximum length of 3 digits,
			// and then with each additional digit
			// a more precise "leading digits" pattern is specified.

			var index_of_leading_digits_pattern = leading_digits.length - MIN_LEADING_DIGITS_LENGTH;

			if (index_of_leading_digits_pattern < 0) {
				index_of_leading_digits_pattern = 0;
			}

			this.matching_formats = this.matching_formats.filter(function (format) {
				var leading_digits_pattern_count = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_leading_digits_patterns"])(format).length;

				// Keep everything that isn't restricted by leading digits.
				if (leading_digits_pattern_count === 0) {
					return true;
				}

				var leading_digits_pattern_index = Math.min(index_of_leading_digits_pattern, leading_digits_pattern_count - 1);
				var leading_digits_pattern = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_leading_digits_patterns"])(format)[leading_digits_pattern_index];

				// Brackets are required for `^` to be applied to
				// all or-ed (`|`) parts, not just the first one.
				return new RegExp('^(' + leading_digits_pattern + ')').test(leading_digits);
			});

			// If there was a phone number format chosen
			// and it no longer holds given the new leading digits then reset it.
			// The test for this `if` condition is marked as:
			// "Reset a chosen format when it no longer holds given the new leading digits".
			if (this.chosen_format && this.matching_formats.indexOf(this.chosen_format) === -1) {
				this.reset_format();
			}
		}
	}, {
		key: 'should_format',
		value: function should_format() {
			// Start matching any formats at all when the national number
			// entered so far is at least 3 digits long,
			// otherwise format matching would give false negatives
			// like when the digits entered so far are `2`
			// and the leading digits pattern is `21` –
			// it's quite obvious in this case that the format could be the one
			// but due to the absence of further digits it would give false negative.
			//
			// Google could have provided leading digits patterns starting
			// with a single digit but they chose not to (for whatever reasons).
			//
			return this.national_number >= MIN_LEADING_DIGITS_LENGTH;
		}

		// Check to see if there is an exact pattern match for these digits. If so, we
		// should use this instead of any other formatting template whose
		// leadingDigitsPattern also matches the input.

	}, {
		key: 'attempt_to_format_complete_phone_number',
		value: function attempt_to_format_complete_phone_number() {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.matching_formats), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var format = _step.value;

					var matcher = new RegExp('^(?:' + Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_pattern"])(format) + ')$');

					if (!matcher.test(this.national_number)) {
						continue;
					}

					if (!this.validate_format(format)) {
						continue;
					}

					// To leave the formatter in a consistent state
					this.reset_format();
					this.chosen_format = format;

					var formatted_number = Object(_format__WEBPACK_IMPORTED_MODULE_5__["format_national_number_using_format"])(this.national_number, format, this.is_international(), this.national_prefix.length > 0, this.country_metadata);

					// Set `this.template` and `this.partially_populated_template`.
					//
					// `else` case doesn't ever happen
					// with the current metadata,
					// but just in case.
					//
					/* istanbul ignore else */
					if (this.create_formatting_template(format)) {
						// Populate `this.partially_populated_template`
						this.reformat_national_number();
					} else {
						// Prepend `+CountryCode` in case of an international phone number
						var full_number = this.full_phone_number(formatted_number);
						this.template = full_number.replace(/[\d\+]/g, DIGIT_PLACEHOLDER);
						this.partially_populated_template = full_number;
					}

					return formatted_number;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}

		// Prepends `+CountryCode` in case of an international phone number

	}, {
		key: 'full_phone_number',
		value: function full_phone_number(formatted_national_number) {
			if (this.is_international()) {
				return '+' + this.country_phone_code + ' ' + formatted_national_number;
			}

			return formatted_national_number;
		}

		// Extracts the country calling code from the beginning
		// of the entered `national_number` (so far),
		// and places the remaining input into the `national_number`.

	}, {
		key: 'extract_country_phone_code',
		value: function extract_country_phone_code() {
			if (!this.national_number) {
				return;
			}

			var _parse_phone_number_a = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["parse_phone_number_and_country_phone_code"])(this.parsed_input, this.metadata),
			    country_phone_code = _parse_phone_number_a.country_phone_code,
			    number = _parse_phone_number_a.number;

			if (!country_phone_code) {
				return;
			}

			this.country_phone_code = country_phone_code;
			this.national_number = number;

			return this.country_metadata = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_metadata_by_country_phone_code"])(country_phone_code, this.metadata);
		}
	}, {
		key: 'extract_national_prefix',
		value: function extract_national_prefix() {
			this.national_prefix = '';

			if (!this.country_metadata) {
				return;
			}

			var national_number = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["strip_national_prefix"])(this.national_number, this.country_metadata);

			if (national_number !== this.national_number) {
				this.national_prefix = this.national_number.slice(0, this.national_number.length - national_number.length);
				this.national_number = national_number;
			}

			return this.national_prefix;
		}
	}, {
		key: 'choose_another_format',
		value: function choose_another_format() {
			// When there are multiple available formats, the formatter uses the first
			// format where a formatting template could be created.
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.matching_formats), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var format = _step2.value;

					// If this format is currently being used
					// and is still possible, then stick to it.
					if (this.chosen_format === format) {
						return;
					}

					// If this `format` is suitable for "as you type",
					// then extract the template from this format
					// and use it to format the phone number being input.

					if (!this.validate_format(format)) {
						continue;
					}

					if (!this.create_formatting_template(format)) {
						continue;
					}

					this.chosen_format = format;

					// With a new formatting template, the matched position
					// using the old template needs to be reset.
					this.last_match_position = -1;

					return true;
				}

				// No format matches the phone number,
				// therefore set `country` to `undefined`
				// (or to the default country).
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			this.reset_country();

			// No format matches the national phone number entered
			this.reset_format();
		}
	}, {
		key: 'validate_format',
		value: function validate_format(format) {
			// If national prefix is mandatory for this phone number format
			// and the user didn't input the national prefix,
			// then this phone number format isn't suitable.
			if (!this.is_international() && !this.national_prefix && Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_national_prefix_is_mandatory_when_formatting"])(format, this.country_metadata)) {
				return;
			}

			return true;
		}
	}, {
		key: 'create_formatting_template',
		value: function create_formatting_template(format) {
			// The formatter doesn't format numbers when numberPattern contains '|', e.g.
			// (20|3)\d{4}. In those cases we quickly return.
			// (Though there's no such format in current metadata)
			/* istanbul ignore if */
			if (Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_pattern"])(format).indexOf('|') >= 0) {
				return;
			}

			// Get formatting template for this phone number format
			var template = this.get_template_for_phone_number_format_pattern(format);

			// If the national number entered is too long
			// for any phone number format, then abort.
			if (!template) {
				return;
			}

			// This one is for national number only
			this.partially_populated_template = template;

			// For convenience, the public `.template` property
			// contains the whole international number
			// if the phone number being input is international:
			// 'x' for the '+' sign, 'x'es for the country phone code,
			// a spacebar and then the template for the formatted national number.
			if (this.is_international()) {
				this.template = DIGIT_PLACEHOLDER + repeat(DIGIT_PLACEHOLDER, this.country_phone_code.length) + ' ' + template;
			}
			// For local numbers, replace national prefix
			// with a digit placeholder.
			else {
					this.template = template.replace(/\d/g, DIGIT_PLACEHOLDER);
				}

			// This one is for the full phone number
			return this.template;
		}

		// Generates formatting template for a phone number format

	}, {
		key: 'get_template_for_phone_number_format_pattern',
		value: function get_template_for_phone_number_format_pattern(format) {
			var national_prefix_formatting_rule = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_national_prefix_formatting_rule"])(format, this.country_metadata);

			// A very smart trick by the guys at Google
			var number_pattern = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_pattern"])(format)
			// Replace anything in the form of [..] with \d
			.replace(CHARACTER_CLASS_PATTERN, '\\d')
			// Replace any standalone digit (not the one in `{}`) with \d
			.replace(STANDALONE_DIGIT_PATTERN, '\\d');

			// This match will always succeed,
			// because the "longest dummy phone number"
			// has enough length to accomodate any possible
			// national phone number format pattern.
			var dummy_phone_number_matching_format_pattern = LONGEST_DUMMY_PHONE_NUMBER.match(number_pattern)[0];

			// If the national number entered is too long
			// for any phone number format, then abort.
			if (this.national_number.length > dummy_phone_number_matching_format_pattern.length) {
				return;
			}

			// Prepare the phone number format
			var number_format = this.get_format_format(format, national_prefix_formatting_rule);

			// Get a formatting template which can be used to efficiently format
			// a partial number where digits are added one by one.

			// Below `strict_pattern` is used for the
			// regular expression (with `^` and `$`).
			// This wasn't originally in Google's `libphonenumber`
			// and I guess they don't really need it
			// because they're not using "templates" to format phone numbers
			// but I added `strict_pattern` after encountering
			// South Korean phone number formatting bug.
			//
			// Non-strict regular expression bug demonstration:
			//
			// this.national_number : `111111111` (9 digits)
			//
			// number_pattern : (\d{2})(\d{3,4})(\d{4})
			// number_format : `$1 $2 $3`
			// dummy_phone_number_matching_format_pattern : `9999999999` (10 digits)
			//
			// '9999999999'.replace(new RegExp(/(\d{2})(\d{3,4})(\d{4})/g), '$1 $2 $3') = "99 9999 9999"
			//
			// template : xx xxxx xxxx
			//
			// But the correct template in this case is `xx xxx xxxx`.
			// The template was generated incorrectly because of the
			// `{3,4}` variability in the `number_pattern`.
			//
			// The fix is, if `this.national_number` has already sufficient length
			// to satisfy the `number_pattern` completely then `this.national_number` is used
			// instead of `dummy_phone_number_matching_format_pattern`.

			var strict_pattern = new RegExp('^' + number_pattern + '$');
			var national_number_dummy_digits = this.national_number.replace(/\d/g, DUMMY_DIGIT);

			// If `this.national_number` has already sufficient length
			// to satisfy the `number_pattern` completely then use it
			// instead of `dummy_phone_number_matching_format_pattern`.
			if (strict_pattern.test(national_number_dummy_digits)) {
				dummy_phone_number_matching_format_pattern = national_number_dummy_digits;
			}

			// Generate formatting template for this phone number format
			return dummy_phone_number_matching_format_pattern
			// Format the dummy phone number according to the format
			.replace(new RegExp(number_pattern), number_format)
			// Replace each dummy digit with a DIGIT_PLACEHOLDER
			.replace(DUMMY_DIGIT_MATCHER, DIGIT_PLACEHOLDER);
		}
	}, {
		key: 'format_next_national_number_digits',
		value: function format_next_national_number_digits(digits) {
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(digits), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var digit = _step3.value;

					// If there is room for more digits in current `template`,
					// then set the next digit in the `template`,
					// and return the formatted digits so far.

					// If more digits are entered than the current format could handle
					if (this.partially_populated_template.slice(this.last_match_position + 1).search(DIGIT_PLACEHOLDER_MATCHER) === -1) {
						// Reset the current format,
						// so that the new format will be chosen
						// in a subsequent `this.choose_another_format()` call
						// later in code.
						this.chosen_format = undefined;
						this.template = undefined;
						this.partially_populated_template = undefined;
						return;
					}

					this.last_match_position = this.partially_populated_template.search(DIGIT_PLACEHOLDER_MATCHER);
					this.partially_populated_template = this.partially_populated_template.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
				}

				// Return the formatted phone number so far
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			return close_dangling_braces(this.partially_populated_template, this.last_match_position + 1).replace(DIGIT_PLACEHOLDER_MATCHER_GLOBAL, ' ');
		}
	}, {
		key: 'is_international',
		value: function is_international() {
			return this.parsed_input && this.parsed_input[0] === '+';
		}
	}, {
		key: 'get_format_format',
		value: function get_format_format(format, national_prefix_formatting_rule) {
			var number_format = this.is_international() ? Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_international_format"])(format) : Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_format"])(format);

			// If national prefix formatting rule is set
			// for this phone number format
			if (national_prefix_formatting_rule) {
				// If the user did input the national prefix
				// (or if the national prefix formatting rule does not require national prefix)
				// then maybe make it part of the phone number template
				if (this.national_prefix || !Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_uses_national_prefix"])(national_prefix_formatting_rule)) {
					// Make the national prefix part of the phone number template
					number_format = number_format.replace(_format__WEBPACK_IMPORTED_MODULE_5__["FIRST_GROUP_PATTERN"], national_prefix_formatting_rule);
				}
			}

			if (this.is_international()) {
				return Object(_format__WEBPACK_IMPORTED_MODULE_5__["local_to_international_style"])(number_format);
			}

			return number_format;
		}

		// Determines the country of the phone number
		// entered so far based on the country phone code
		// and the national phone number.

	}, {
		key: 'determine_the_country',
		value: function determine_the_country() {
			this.country = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["find_country_code"])(this.country_phone_code, this.national_number, this.metadata);
		}
	}]);

	return as_you_type;
}();

/* harmony default export */ __webpack_exports__["default"] = (as_you_type);


function close_dangling_braces(template, cut_before) {
	var retained_template = template.slice(0, cut_before);

	var opening_braces = count_occurences('(', retained_template);
	var closing_braces = count_occurences(')', retained_template);

	var dangling_braces = opening_braces - closing_braces;

	while (dangling_braces > 0 && cut_before < template.length) {
		if (template[cut_before] === ')') {
			dangling_braces--;
		}
		cut_before++;
	}

	return template.slice(0, cut_before);
}

// Counts all occurences of a symbol in a string
function count_occurences(symbol, string) {
	var count = 0;

	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(string), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var character = _step4.value;

			if (character === symbol) {
				count++;
			}
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	return count;
}

// Repeats a string (or a symbol) N times.
// http://stackoverflow.com/questions/202605/repeat-string-javascript
function repeat(string, times) {
	if (times < 1) {
		return '';
	}

	var result = '';

	while (times > 1) {
		if (times & 1) {
			result += string;
		}

		times >>= 1;
		string += string;
	}

	return result + string;
}
//# sourceMappingURL=AsYouType.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/common.js":
/*!******************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/common.js ***!
  \******************************************************/
/*! exports provided: matches_entirely */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches_entirely", function() { return matches_entirely; });
// Checks whether the entire input sequence can be matched
// against the regular expression.
function matches_entirely() {
	var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var regular_expression = arguments[1];

	if (typeof regular_expression === 'string') {
		regular_expression = '^(?:' + regular_expression + ')$';
	}

	var matched_groups = text.match(regular_expression);
	return matched_groups !== null && matched_groups[0].length === text.length;
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/format.js":
/*!******************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/format.js ***!
  \******************************************************/
/*! exports provided: default, FIRST_GROUP_PATTERN, format_national_number_using_format, format_national_number, choose_format_for_number, local_to_international_style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_GROUP_PATTERN", function() { return FIRST_GROUP_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format_national_number_using_format", function() { return format_national_number_using_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format_national_number", function() { return format_national_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose_format_for_number", function() { return choose_format_for_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "local_to_international_style", function() { return local_to_international_style; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./node_modules/libphonenumber-js/es6/common.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parse */ "./node_modules/libphonenumber-js/es6/parse.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");


// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of 17th November, 2016.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js







var default_options = {
	formatExtension: function formatExtension(number, extension) {
		return number + ' ext. ' + extension;
	}

	// Formats a phone number
	//
	// Example use cases:
	//
	// ```js
	// format('8005553535', 'RU', 'International')
	// format('8005553535', 'RU', 'International', metadata)
	// format({ phone: '8005553535', country: 'RU' }, 'International')
	// format({ phone: '8005553535', country: 'RU' }, 'International', metadata)
	// format('+78005553535', 'National')
	// format('+78005553535', 'National', metadata)
	// ```
	//
};function format(arg_1, arg_2, arg_3, arg_4, arg_5) {
	var _sort_out_arguments = sort_out_arguments(arg_1, arg_2, arg_3, arg_4, arg_5),
	    input = _sort_out_arguments.input,
	    format_type = _sort_out_arguments.format_type,
	    options = _sort_out_arguments.options,
	    metadata = _sort_out_arguments.metadata;

	var country_metadata = void 0;

	if (input.country) {
		country_metadata = metadata.countries[input.country];
	}

	var _parse_phone_number_a = Object(_parse__WEBPACK_IMPORTED_MODULE_3__["parse_phone_number_and_country_phone_code"])(input.phone, metadata),
	    country_phone_code = _parse_phone_number_a.country_phone_code,
	    number = _parse_phone_number_a.number;

	if (country_phone_code) {
		// Check country restriction
		if (input.country && country_metadata && country_phone_code !== Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata)) {
			return input.phone;
		}

		country_metadata = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_metadata_by_country_phone_code"])(country_phone_code, metadata);
	}

	if (!country_metadata) {
		return input.phone;
	}

	switch (format_type) {
		case 'International':
			if (!number) {
				return '+' + Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata);
			}
			var national_number = format_national_number(number, 'International', false, country_metadata);
			var international_number = '+' + Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata) + ' ' + national_number;
			if (input.ext || input.ext === 0) {
				return options.formatExtension(international_number, input.ext);
			}
			return international_number;

		case 'E.164':
		// "International_plaintext" is deprecated
		case 'International_plaintext':
			// `E.164` doesn't define "phone number extensions".
			return '+' + Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata) + input.phone;

		case 'RFC3966':
			return '+' + Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata) + input.phone + (input.ext || input.ext === 0 ? ';ext=' + input.ext : '');

		case 'National':
			if (!number) {
				return '';
			}
			var _national_number = format_national_number(number, 'National', false, country_metadata);
			if (input.ext || input.ext === 0) {
				return options.formatExtension(_national_number, input.ext);
			}
			return _national_number;
	}
}

// This was originally set to $1 but there are some countries for which the
// first group is not used in the national pattern (e.g. Argentina) so the $1
// group does not match correctly.  Therefore, we use \d, so that the first
// group actually used in the pattern will be matched.
var FIRST_GROUP_PATTERN = /(\$\d)/;

function format_national_number_using_format(number, format, international, enforce_national_prefix, country_metadata) {
	var format_pattern_matcher = new RegExp(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_pattern"])(format));

	var national_prefix_formatting_rule = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_national_prefix_formatting_rule"])(format, country_metadata);

	// National prefix is omitted if there's no national prefix formatting rule
	// set for this country, or when this rule is set but
	// national prefix is optional for this phone number format
	// (and it is not enforced explicitly)
	var national_prefix_may_be_omitted = !national_prefix_formatting_rule || national_prefix_formatting_rule && Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_national_prefix_is_optional_when_formatting"])(format, country_metadata) && !enforce_national_prefix;

	if (!international && !national_prefix_may_be_omitted) {
		return number.replace(format_pattern_matcher, Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_format"])(format).replace(FIRST_GROUP_PATTERN, national_prefix_formatting_rule));
	}

	var formatted_number = number.replace(format_pattern_matcher, international ? Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_international_format"])(format) : Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_format"])(format));

	if (international) {
		return local_to_international_style(formatted_number);
	}

	return formatted_number;
}

function format_national_number(number, format_as, enforce_national_prefix, country_metadata) {
	var format = choose_format_for_number(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_formats"])(country_metadata), number);

	if (!format) {
		return number;
	}

	return format_national_number_using_format(number, format, format_as === 'International', enforce_national_prefix, country_metadata);
}

function choose_format_for_number(available_formats, national_number) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(available_formats), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _format = _step.value;

			// Validate leading digits
			if (Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_leading_digits_patterns"])(_format).length > 0) {
				// The last leading_digits_pattern is used here, as it is the most detailed
				var last_leading_digits_pattern = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_leading_digits_patterns"])(_format)[Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_leading_digits_patterns"])(_format).length - 1];

				// If leading digits don't match then move on to the next phone number format
				if (national_number.search(last_leading_digits_pattern) !== 0) {
					continue;
				}
			}

			// Check that the national number matches the phone number format regular expression
			if (Object(_common__WEBPACK_IMPORTED_MODULE_2__["matches_entirely"])(national_number, new RegExp(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_pattern"])(_format)))) {
				return _format;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

// Removes brackets and replaces dashes with spaces.
//
// E.g. "(999) 111-22-33" -> "999 111 22 33"
//
function local_to_international_style(local) {
	return local.replace(new RegExp('[' + _parse__WEBPACK_IMPORTED_MODULE_3__["VALID_PUNCTUATION"] + ']+', 'g'), ' ').trim();
}

// Sort out arguments
function sort_out_arguments() {
	var arg_1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var arg_2 = arguments[1];
	var arg_3 = arguments[2];
	var arg_4 = arguments[3];
	var arg_5 = arguments[4];

	var input = void 0;
	var format_type = void 0;
	var options = void 0;
	var metadata = void 0;

	// Sort out arguments.

	// If the phone number is passed as a string.
	// `format('8005553535', ...)`.
	if (typeof arg_1 === 'string') {
		// If country code is supplied.
		// `format('8005553535', 'RU', 'National', [options], metadata)`.
		if (typeof arg_3 === 'string') {
			// Will be `parse()`d later in code
			input = {
				phone: arg_1,
				country: arg_2
			};

			format_type = arg_3;

			if (arg_5) {
				options = arg_4;
				metadata = arg_5;
			} else {
				metadata = arg_4;
			}
		}
		// Just an international phone number is supplied
		// `format('+78005553535', 'National', [options], metadata)`.
		else {
				// Will be `parse()`d later in code
				input = {
					phone: arg_1
				};

				if (typeof arg_2 !== 'string') {
					throw new Error('Format type argument not passed for `format()`');
				}

				format_type = arg_2;

				if (arg_4) {
					options = arg_3;
					metadata = arg_4;
				} else {
					metadata = arg_3;
				}
			}
	}
	// If the phone number is passed as a parsed number object.
	// `format({ phone: '8005553535', country: 'RU' }, 'National', [options], metadata)`.
	else {
			input = arg_1;
			format_type = arg_2;

			if (arg_4) {
				options = arg_3;
				metadata = arg_4;
			} else {
				metadata = arg_3;
			}
		}

	// Metadata is required.
	if (!metadata) {
		throw new Error('Metadata is required');
	}

	// Validate `format_type`.
	switch (format_type) {
		case 'International':
		case 'E.164':
		// "International_plaintext" is deprecated
		case 'International_plaintext':
		case 'National':
		case 'RFC3966':
			break;
		default:
			throw new Error('Unknown format type argument passed to "format()": "' + format_type + '"');
	}

	// Apply default options.
	if (options) {
		options = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, default_options, options);
	} else {
		options = default_options;
	}

	return { input: input, format_type: format_type, options: options, metadata: metadata };
}
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/metadata.js":
/*!********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/metadata.js ***!
  \********************************************************/
/*! exports provided: get_phone_code, get_national_number_pattern, get_formats, get_national_prefix, get_national_prefix_formatting_rule, get_national_prefix_for_parsing, get_national_prefix_transform_rule, get_national_prefix_is_optional_when_formatting, get_leading_digits, get_format_pattern, get_format_format, get_format_leading_digits_patterns, get_format_national_prefix_formatting_rule, get_format_national_prefix_is_optional_when_formatting, get_format_national_prefix_is_mandatory_when_formatting, get_format_uses_national_prefix, get_format_international_format, get_metadata_by_country_phone_code, get_types, get_type_fixed_line, get_type_mobile, get_type_toll_free, get_type_premium_rate, get_type_personal_number, get_type_voice_mail, get_type_uan, get_type_pager, get_type_voip, get_type_shared_cost, get_country_phone_code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_phone_code", function() { return get_phone_code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_national_number_pattern", function() { return get_national_number_pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_formats", function() { return get_formats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_national_prefix", function() { return get_national_prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_national_prefix_formatting_rule", function() { return get_national_prefix_formatting_rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_national_prefix_for_parsing", function() { return get_national_prefix_for_parsing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_national_prefix_transform_rule", function() { return get_national_prefix_transform_rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_national_prefix_is_optional_when_formatting", function() { return get_national_prefix_is_optional_when_formatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_leading_digits", function() { return get_leading_digits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_pattern", function() { return get_format_pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_format", function() { return get_format_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_leading_digits_patterns", function() { return get_format_leading_digits_patterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_national_prefix_formatting_rule", function() { return get_format_national_prefix_formatting_rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_national_prefix_is_optional_when_formatting", function() { return get_format_national_prefix_is_optional_when_formatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_national_prefix_is_mandatory_when_formatting", function() { return get_format_national_prefix_is_mandatory_when_formatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_uses_national_prefix", function() { return get_format_uses_national_prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_international_format", function() { return get_format_international_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_metadata_by_country_phone_code", function() { return get_metadata_by_country_phone_code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_types", function() { return get_types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_fixed_line", function() { return get_type_fixed_line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_mobile", function() { return get_type_mobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_toll_free", function() { return get_type_toll_free; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_premium_rate", function() { return get_type_premium_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_personal_number", function() { return get_type_personal_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_voice_mail", function() { return get_type_voice_mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_uan", function() { return get_type_uan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_pager", function() { return get_type_pager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_voip", function() { return get_type_voip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_shared_cost", function() { return get_type_shared_cost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_country_phone_code", function() { return get_country_phone_code; });
function get_phone_code(country_metadata) {
	return country_metadata[0];
}

function get_national_number_pattern(country_metadata) {
	return country_metadata[1];
}

function get_formats(country_metadata) {
	return country_metadata[2] || [];
}

function get_national_prefix(country_metadata) {
	return country_metadata[3];
}

function get_national_prefix_formatting_rule(country_metadata) {
	return country_metadata[4];
}

function get_national_prefix_for_parsing(country_metadata) {
	var national_prefix_for_parsing = country_metadata[5];

	// If `national_prefix_for_parsing` is not set explicitly,
	// then infer it from `national_prefix` (if any)
	if (!national_prefix_for_parsing) {
		national_prefix_for_parsing = get_national_prefix(country_metadata);
	}

	return national_prefix_for_parsing;
}

function get_national_prefix_transform_rule(country_metadata) {
	return country_metadata[6];
}

function get_national_prefix_is_optional_when_formatting(country_metadata) {
	return country_metadata[7];
}

function get_leading_digits(country_metadata) {
	return country_metadata[8];
}

function get_format_pattern(format_array) {
	return format_array[0];
}

function get_format_format(format_array) {
	return format_array[1];
}

function get_format_leading_digits_patterns(format_array) {
	return format_array[2] || [];
}

function get_format_national_prefix_formatting_rule(format_array, country_metadata) {
	return format_array[3] || get_national_prefix_formatting_rule(country_metadata);
}

function get_format_national_prefix_is_optional_when_formatting(format_array, country_metadata) {
	return format_array[4] || get_national_prefix_is_optional_when_formatting(country_metadata);
}

function get_format_national_prefix_is_mandatory_when_formatting(format_array, country_metadata) {
	var national_prefix_formatting_rule = get_format_national_prefix_formatting_rule(format_array, country_metadata);

	// National prefix is omitted if there's no national prefix formatting rule
	// set for this country, or when the national prefix formatting rule
	// contains no national prefix itself, or when this rule is set but
	// national prefix is optional for this phone number format
	// (and it is not enforced explicitly)
	return national_prefix_formatting_rule &&
	// Check that national prefix formatting rule is not a dummy one.
	// Check that national prefix formatting rule actually has national prefix digit(s).
	get_format_uses_national_prefix(national_prefix_formatting_rule) &&
	// Or maybe national prefix is optional for this format
	!get_format_national_prefix_is_optional_when_formatting(format_array, country_metadata);
}

// Checks whether national prefix formatting rule contains national prefix
function get_format_uses_national_prefix(national_prefix_formatting_rule) {
	// Check that national prefix formatting rule is not a dummy one
	return national_prefix_formatting_rule !== '$1' &&
	// Check that national prefix formatting rule actually has national prefix digit(s)
	/\d/.test(national_prefix_formatting_rule.replace('$1', ''));
}

function get_format_international_format(format_array) {
	return format_array[5] || get_format_format(format_array);
}

// Formatting information for regions which share
// a country calling code is contained by only one region
// for performance reasons. For example, for NANPA region
// ("North American Numbering Plan Administration",
//  which includes USA, Canada, Cayman Islands, Bahamas, etc)
// it will be contained in the metadata for `US`.
function get_metadata_by_country_phone_code(country_phone_code, metadata) {
	var country_code = metadata.country_phone_code_to_countries[country_phone_code][0];
	return metadata.countries[country_code];
}

function get_types(country_metadata) {
	return country_metadata[9];
}

function get_type(country_metadata, index) {
	return get_types(country_metadata) ? get_types(country_metadata)[index] : undefined;
}

function get_type_fixed_line(country_metadata) {
	return get_type(country_metadata, 0);
}

function get_type_mobile(country_metadata) {
	return get_type(country_metadata, 1);
}

function get_type_toll_free(country_metadata) {
	return get_type(country_metadata, 2);
}

function get_type_premium_rate(country_metadata) {
	return get_type(country_metadata, 3);
}

function get_type_personal_number(country_metadata) {
	return get_type(country_metadata, 4);
}

function get_type_voice_mail(country_metadata) {
	return get_type(country_metadata, 5);
}

function get_type_uan(country_metadata) {
	return get_type(country_metadata, 6);
}

function get_type_pager(country_metadata) {
	return get_type(country_metadata, 7);
}

function get_type_voip(country_metadata) {
	return get_type(country_metadata, 8);
}

function get_type_shared_cost(country_metadata) {
	return get_type(country_metadata, 9);
}

function get_country_phone_code(country, country_metadata) {
	return get_phone_code(country_metadata[country]);
}
//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parse.js ***!
  \*****************************************************/
/*! exports provided: PLUS_CHARS, VALID_DIGITS, VALID_PUNCTUATION, DIGIT_MAPPINGS, default, normalize, replace_characters, is_viable_phone_number, extract_formatted_phone_number, parse_phone_number, parse_phone_number_and_country_phone_code, strip_national_prefix, find_country_code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_CHARS", function() { return PLUS_CHARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID_DIGITS", function() { return VALID_DIGITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID_PUNCTUATION", function() { return VALID_PUNCTUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIGIT_MAPPINGS", function() { return DIGIT_MAPPINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace_characters", function() { return replace_characters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_viable_phone_number", function() { return is_viable_phone_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extract_formatted_phone_number", function() { return extract_formatted_phone_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_phone_number", function() { return parse_phone_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_phone_number_and_country_phone_code", function() { return parse_phone_number_and_country_phone_code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strip_national_prefix", function() { return strip_national_prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find_country_code", function() { return find_country_code; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./node_modules/libphonenumber-js/es6/common.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format */ "./node_modules/libphonenumber-js/es6/format.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./node_modules/libphonenumber-js/es6/types.js");



// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of 17th November, 2016.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js









// The maximum length of the country calling code.
var MAX_LENGTH_COUNTRY_CODE = 3;

// The minimum length of the national significant number.
var MIN_LENGTH_FOR_NSN = 2;

// The ITU says the maximum length should be 15,
// but one can find longer numbers in Germany.
var MAX_LENGTH_FOR_NSN = 17;

// We don't allow input strings for parsing to be longer than 250 chars.
// This prevents malicious input from consuming CPU.
var MAX_INPUT_STRING_LENGTH = 250;

var PLUS_CHARS = '+\uFF0B';

// Digits accepted in phone numbers
// (ascii, fullwidth, arabic-indic, and eastern arabic digits).
var VALID_DIGITS = '0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9';

// `DASHES` will be right after the opening square bracket of the "character class"
var DASHES = '-\u2010-\u2015\u2212\u30FC\uFF0D';
var SLASHES = '\uFF0F/';
var DOTS = '\uFF0E.';
var WHITESPACE = ' \xA0\xAD\u200B\u2060\u3000';
var BRACKETS = '()\uFF08\uFF09\uFF3B\uFF3D\\[\\]';
var TILDES = '~\u2053\u223C\uFF5E';

// Regular expression of acceptable punctuation found in phone numbers. This
// excludes punctuation found as a leading character only. This consists of dash
// characters, white space characters, full stops, slashes, square brackets,
// parentheses and tildes. Full-width variants are also present.
var VALID_PUNCTUATION = '' + DASHES + SLASHES + DOTS + WHITESPACE + BRACKETS + TILDES;

// Pattern to capture digits used in an extension.
// Places a maximum length of '7' for an extension.
var CAPTURING_EXTN_DIGITS = '([' + VALID_DIGITS + ']{1,7})';

// The RFC 3966 format for extensions.
var RFC3966_EXTN_PREFIX = ';ext=';

/**
 * Regexp of all possible ways to write extensions, for use when parsing. This
 * will be run as a case-insensitive regexp match. Wide character versions are
 * also provided after each ASCII version. There are three regular expressions
 * here. The first covers RFC 3966 format, where the extension is added using
 * ';ext='. The second more generic one starts with optional white space and
 * ends with an optional full stop (.), followed by zero or more spaces/tabs
 * /commas and then the numbers themselves. The other one covers the special
 * case of American numbers where the extension is written with a hash at the
 * end, such as '- 503#'. Note that the only capturing groups should be around
 * the digits that you want to capture as part of the extension, or else parsing
 * will fail! We allow two options for representing the accented o - the
 * character itself, and one in the unicode decomposed form with the combining
 * acute accent.
 */
var EXTN_PATTERNS_FOR_PARSING = RFC3966_EXTN_PREFIX + CAPTURING_EXTN_DIGITS + '|' + '[ \xA0\\t,]*' + '(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|' + '[;,x\uFF58#\uFF03~\uFF5E]|int|anexo|\uFF49\uFF4E\uFF54)' + '[:\\.\uFF0E]?[ \xA0\\t,-]*' + CAPTURING_EXTN_DIGITS + '#?|' + '[- ]+([' + VALID_DIGITS + ']{1,5})#';

// Regexp of all known extension prefixes used by different regions followed by
// 1 or more valid digits, for use when parsing.
var EXTN_PATTERN = new RegExp('(?:' + EXTN_PATTERNS_FOR_PARSING + ')$', 'i');

//  Regular expression of viable phone numbers. This is location independent.
//  Checks we have at least three leading digits, and only valid punctuation,
//  alpha characters and digits in the phone number. Does not include extension
//  data. The symbol 'x' is allowed here as valid punctuation since it is often
//  used as a placeholder for carrier codes, for example in Brazilian phone
//  numbers. We also allow multiple '+' characters at the start.
//
//  Corresponds to the following:
//  [digits]{minLengthNsn}|
//  plus_sign*
//  (([punctuation]|[star])*[digits]){3,}([punctuation]|[star]|[digits]|[alpha])*
//
//  The first reg-ex is to allow short numbers (two digits long) to be parsed if
//  they are entered as "15" etc, but only if there is no punctuation in them.
//  The second expression restricts the number of digits to three or more, but
//  then allows them to be in international form, and to have alpha-characters
//  and punctuation. We split up the two reg-exes here and combine them when
//  creating the reg-ex VALID_PHONE_NUMBER_PATTERN itself so we can prefix it
//  with ^ and append $ to each branch.
//
//  "Note VALID_PUNCTUATION starts with a -,
//   so must be the first in the range" (c) Google devs.
//  (wtf did they mean by saying that; probably nothing)
//
var MIN_LENGTH_PHONE_NUMBER_PATTERN = '[' + VALID_DIGITS + ']{' + MIN_LENGTH_FOR_NSN + '}';
//
// And this is the second reg-exp:
// (see MIN_LENGTH_PHONE_NUMBER_PATTERN for a full description of this reg-exp)
//
var VALID_PHONE_NUMBER = '[' + PLUS_CHARS + ']{0,1}' + '(?:' + '[' + VALID_PUNCTUATION + ']*' + '[' + VALID_DIGITS + ']' + '){3,}' + '[' + VALID_PUNCTUATION + VALID_DIGITS + ']*';

// The combined regular expression for valid phone numbers:
//
var VALID_PHONE_NUMBER_PATTERN = new RegExp(
// Either a short two-digit-only phone number
'^' + MIN_LENGTH_PHONE_NUMBER_PATTERN + '$' + '|' +
// Or a longer fully parsed phone number (min 3 characters)
'^' + VALID_PHONE_NUMBER +
// Phone number extensions
'(?:' + EXTN_PATTERNS_FOR_PARSING + ')?' + '$', 'i');

// This consists of the plus symbol, digits, and arabic-indic digits.
var PHONE_NUMBER_START_PATTERN = new RegExp('[' + PLUS_CHARS + VALID_DIGITS + ']');

// Regular expression of trailing characters that we want to remove.
var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp('[^' + VALID_DIGITS + ']+$');

var LEADING_PLUS_CHARS_PATTERN = new RegExp('^[' + PLUS_CHARS + ']+');

// These mappings map a character (key) to a specific digit that should
// replace it for normalization purposes. Non-European digits that
// may be used in phone numbers are mapped to a European equivalent.
//
// E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
//
var DIGIT_MAPPINGS = {
	'0': '0',
	'1': '1',
	'2': '2',
	'3': '3',
	'4': '4',
	'5': '5',
	'6': '6',
	'7': '7',
	'8': '8',
	'9': '9',
	'\uFF10': '0', // Fullwidth digit 0
	'\uFF11': '1', // Fullwidth digit 1
	'\uFF12': '2', // Fullwidth digit 2
	'\uFF13': '3', // Fullwidth digit 3
	'\uFF14': '4', // Fullwidth digit 4
	'\uFF15': '5', // Fullwidth digit 5
	'\uFF16': '6', // Fullwidth digit 6
	'\uFF17': '7', // Fullwidth digit 7
	'\uFF18': '8', // Fullwidth digit 8
	'\uFF19': '9', // Fullwidth digit 9
	'\u0660': '0', // Arabic-indic digit 0
	'\u0661': '1', // Arabic-indic digit 1
	'\u0662': '2', // Arabic-indic digit 2
	'\u0663': '3', // Arabic-indic digit 3
	'\u0664': '4', // Arabic-indic digit 4
	'\u0665': '5', // Arabic-indic digit 5
	'\u0666': '6', // Arabic-indic digit 6
	'\u0667': '7', // Arabic-indic digit 7
	'\u0668': '8', // Arabic-indic digit 8
	'\u0669': '9', // Arabic-indic digit 9
	'\u06F0': '0', // Eastern-Arabic digit 0
	'\u06F1': '1', // Eastern-Arabic digit 1
	'\u06F2': '2', // Eastern-Arabic digit 2
	'\u06F3': '3', // Eastern-Arabic digit 3
	'\u06F4': '4', // Eastern-Arabic digit 4
	'\u06F5': '5', // Eastern-Arabic digit 5
	'\u06F6': '6', // Eastern-Arabic digit 6
	'\u06F7': '7', // Eastern-Arabic digit 7
	'\u06F8': '8', // Eastern-Arabic digit 8
	'\u06F9': '9' // Eastern-Arabic digit 9
};

var default_options = {
	country: {}

	// `options`:
	//  {
	//    country:
	//    {
	//      restrict - (a two-letter country code)
	//                 the phone number must be in this country
	//
	//      default - (a two-letter country code)
	//                default country to use for phone number parsing and validation
	//                (if no country code could be derived from the phone number)
	//    }
	//  }
	//
	// Returns `{ country, number }`
	//
	// Example use cases:
	//
	// ```js
	// parse('8 (800) 555-35-35', 'RU')
	// parse('8 (800) 555-35-35', 'RU', metadata)
	// parse('8 (800) 555-35-35', { country: { default: 'RU' } })
	// parse('8 (800) 555-35-35', { country: { default: 'RU' } }, metadata)
	// parse('+7 800 555 35 35')
	// parse('+7 800 555 35 35', metadata)
	// ```
	//
};function parse(arg_1, arg_2, arg_3) {
	var _sort_out_arguments = sort_out_arguments(arg_1, arg_2, arg_3),
	    text = _sort_out_arguments.text,
	    options = _sort_out_arguments.options,
	    metadata = _sort_out_arguments.metadata;

	// Validate country codes

	// Validate `default` country


	if (options.country.default && !metadata.countries[options.country.default]) {
		throw new Error('Unknown country code: ' + options.country.default);
	}

	// Validate `restrict` country
	if (options.country.restrict && !metadata.countries[options.country.restrict]) {
		throw new Error('Unknown country code: ' + options.country.restrict);
	}

	// Parse the phone number

	var formatted_phone_number = void 0;
	var extension = void 0;

	// Parse RFC 3966 phone number URI.
	if (text && text.indexOf('tel:') === 0) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(text.split(';')), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var part = _step.value;

				var _part$split = part.split(':'),
				    _part$split2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_part$split, 2),
				    name = _part$split2[0],
				    value = _part$split2[1];

				switch (name) {
					case 'tel':
						formatted_phone_number = value;
						break;
					case 'ext':
						extension = value;
						break;
					case 'phone-context':
						// Domain contexts are ignored.
						if (value[0] === '+') {
							formatted_phone_number = value + formatted_phone_number;
						}
						break;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	} else {
		formatted_phone_number = extract_formatted_phone_number(text);
	}

	// If the phone number is not viable, then abort.
	if (!is_viable_phone_number(formatted_phone_number)) {
		return {};
	}

	// Attempt to parse extension first, since it doesn't require region-specific
	// data and we want to have the non-normalised number here.
	var with_extension_stripped = strip_extension(formatted_phone_number);

	if (with_extension_stripped.extension) {
		formatted_phone_number = with_extension_stripped.number, extension = with_extension_stripped.extension;
	}

	var _parse_phone_number_a = parse_phone_number_and_country_phone_code(formatted_phone_number, metadata),
	    country_phone_code = _parse_phone_number_a.country_phone_code,
	    number = _parse_phone_number_a.number;

	// Maybe invalid country phone code encountered


	if (!number) {
		return {};
	}

	var country = void 0;
	var country_metadata = void 0;

	// Whether the phone number is formatted as an international phone number
	var is_international = false;

	if (country_phone_code) {
		is_international = true;

		// Check country restriction
		if (options.country.restrict && country_phone_code !== Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(metadata.countries[options.country.restrict])) {
			return {};
		}

		// Formatting information for regions which share
		// a country calling code is contained by only one region
		// for performance reasons. For example, for NANPA region
		// ("North American Numbering Plan Administration",
		//  which includes USA, Canada, Cayman Islands, Bahamas, etc)
		// it will be contained in the metadata for `US`.
		country_metadata = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_metadata_by_country_phone_code"])(country_phone_code, metadata);

		// `country` will be set later,
		// because, for example, for NANPA countries
		// there are several countries corresponding
		// to the same `1` country phone code.
		// Therefore, to reliably determine the exact country,
		// national (significant) number should be parsed first.
	} else if (options.country.restrict || options.country.default) {
		country = options.country.restrict || options.country.default;
		country_metadata = metadata.countries[country];

		number = normalize(formatted_phone_number);
	}

	if (!country_metadata) {
		return {};
	}

	var national_number = number;

	// Only strip national prefixes for non-international phone numbers
	// because national prefixes can't be present in international phone numbers.
	// Otherwise, while forgiving, it would parse a NANPA number `+1 1877 215 5230`
	// first to `1877 215 5230` and then, stripping the leading `1`, to `877 215 5230`,
	// and then it would assume that's a valid number which it isn't.
	// So no forgiveness for grandmas here.
	// The issue asking for this fix:
	// https://github.com/catamphetamine/libphonenumber-js/issues/159
	if (!is_international) {
		national_number = strip_national_prefix(number, country_metadata);
	}

	var did_have_national_prefix = national_number !== number;

	// https://github.com/catamphetamine/libphonenumber-js/issues/67
	// if (!is_international && !did_have_national_prefix &&
	// 		is_national_prefix_required(national_number, country_metadata))
	// {
	// 	return {}
	// }

	// Sometimes there are several countries
	// corresponding to the same country phone code
	// (e.g. NANPA countries all having `1` country phone code).
	// Therefore, to reliably determine the exact country,
	// national (significant) number should have been parsed first.
	//
	if (!country) {
		// When `metadata.json` is generated, all "ambiguous" country phone codes
		// get their countries populated with the full set of
		// "phone number type" regular expressions.
		country = find_country_code(country_phone_code, national_number, metadata);

		// Just in case there appears to be a bug in Google's metadata
		// and the exact country could not be extracted from the phone number.
		/* istanbul ignore if */
		if (!country) {
			return {};
		}

		// Update metadata to be for this specific country
		country_metadata = metadata.countries[country];
	}

	// Validate national (significant) number length.
	//
	// A sidenote:
	//
	// They say that sometimes national (significant) numbers
	// can be longer than `MAX_LENGTH_FOR_NSN` (e.g. in Germany).
	// https://github.com/googlei18n/libphonenumber/blob/7e1748645552da39c4e1ba731e47969d97bdb539/resources/phonenumber.proto#L36
	// Such numbers will just be discarded.
	//
	if (national_number.length > MAX_LENGTH_FOR_NSN) {
		return {};
	}

	// National number pattern is different for each country,
	// even for those ones which are part of the "NANPA" group.
	var national_number_rule = new RegExp(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_national_number_pattern"])(country_metadata));

	// Check if national phone number pattern matches the number
	if (!Object(_common__WEBPACK_IMPORTED_MODULE_3__["matches_entirely"])(national_number, national_number_rule)) {
		return {};
	}

	var result = {
		country: country,
		phone: national_number
	};

	if (extension) {
		result.ext = extension;
	}

	return result;
}

// Normalizes a string of characters representing a phone number.
// This converts wide-ascii and arabic-indic numerals to European numerals,
// and strips punctuation and alpha characters.
//
// E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
//
function normalize(number) {
	return replace_characters(number, DIGIT_MAPPINGS);
}

// For any character not being part of `replacements`
// it is removed from the phone number.
function replace_characters(text, replacements) {
	var replaced = '';

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(text), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var character = _step2.value;

			var replacement = replacements[character.toUpperCase()];

			if (replacement !== undefined) {
				replaced += replacement;
			}
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	return replaced;
}

// Checks to see if the string of characters could possibly be a phone number at
// all. At the moment, checks to see that the string begins with at least 2
// digits, ignoring any punctuation commonly found in phone numbers. This method
// does not require the number to be normalized in advance - but does assume
// that leading non-number symbols have been removed, such as by the method
// `extract_possible_number`.
//
function is_viable_phone_number(number) {
	return number.length >= MIN_LENGTH_FOR_NSN && Object(_common__WEBPACK_IMPORTED_MODULE_3__["matches_entirely"])(number, VALID_PHONE_NUMBER_PATTERN);
}

function extract_formatted_phone_number(text) {
	if (!text || text.length > MAX_INPUT_STRING_LENGTH) {
		return '';
	}

	// Attempt to extract a possible number from the string passed in

	var starts_at = text.search(PHONE_NUMBER_START_PATTERN);

	if (starts_at < 0) {
		return '';
	}

	return text
	// Trim everything to the left of the phone number
	.slice(starts_at)
	// Remove trailing non-numerical characters
	.replace(AFTER_PHONE_NUMBER_END_PATTERN, '');
}

// Parses a formatted phone number.
function parse_phone_number(number) {
	if (!number) {
		return '';
	}

	var is_international = LEADING_PLUS_CHARS_PATTERN.test(number);

	// Remove non-digits
	// (and strip the possible leading '+')
	number = normalize(number);

	if (is_international) {
		return '+' + number;
	}

	return number;
}

// Parses a formatted phone number
// and returns `{ country_phone_code, number }`
// where `number` is the national (significant) phone number.
//
// (aka `maybeExtractCountryPhoneCode`)
//
function parse_phone_number_and_country_phone_code(number, metadata) {
	number = parse_phone_number(number);

	if (!number) {
		return {};
	}

	// If this is not an international phone number,
	// then don't extract country phone code.
	if (number[0] !== '+') {
		return { number: number };
	}

	// Strip the leading '+' sign
	number = number.slice(1);

	// Fast abortion: country codes do not begin with a '0'
	if (number[0] === '0') {
		return {};
	}

	// The thing with country phone codes
	// is that they are orthogonal to each other
	// i.e. there's no such country phone code A
	// for which country phone code B exists
	// where B starts with A.
	// Therefore, while scanning digits,
	// if a valid country code is found,
	// that means that it is the country code.
	//
	var i = 1;
	while (i <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
		var country_phone_code = number.slice(0, i);

		if (metadata.country_phone_code_to_countries[country_phone_code]) {
			return { country_phone_code: country_phone_code, number: number.slice(i) };
		}

		i++;
	}

	return {};
}

// Strips any national prefix (such as 0, 1) present in the number provided
function strip_national_prefix(number, country_metadata) {
	var national_prefix_for_parsing = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_national_prefix_for_parsing"])(country_metadata);

	if (!number || !national_prefix_for_parsing) {
		return number;
	}

	// Attempt to parse the first digits as a national prefix
	var national_prefix_pattern = new RegExp('^(?:' + national_prefix_for_parsing + ')');
	var national_prefix_matcher = national_prefix_pattern.exec(number);

	// If no national prefix is present in the phone number,
	// but if the national prefix is optional for this country,
	// then consider this phone number valid.
	//
	// Google's reference `libphonenumber` implementation
	// wouldn't recognize such phone numbers as valid,
	// but I think it would perfectly make sense
	// to consider such phone numbers as valid
	// because if a national phone number was originally
	// formatted without the national prefix
	// then it must be parseable back into the original national number.
	// In other words, `parse(format(number))`
	// must always be equal to `number`.
	//
	if (!national_prefix_matcher) {
		return number;
	}

	var national_significant_number = void 0;

	// `national_prefix_for_parsing` capturing groups
	// (used only for really messy cases: Argentina, Brazil, Mexico, Somalia)
	var any_groups_were_captured = national_prefix_matcher[national_prefix_matcher.length - 1];
	var national_prefix_transform_rule = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_national_prefix_transform_rule"])(country_metadata);

	// If the national number tranformation is needed then do it
	if (national_prefix_transform_rule && any_groups_were_captured) {
		national_significant_number = number.replace(national_prefix_pattern, national_prefix_transform_rule);
	}
	// Else, no transformation is necessary,
	// and just strip the national prefix.
	else {
			national_significant_number = number.slice(national_prefix_matcher[0].length);
		}

	// Verify the parsed national (significant) number for this country
	var national_number_rule = new RegExp(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_national_number_pattern"])(country_metadata));

	// If the original number (before stripping national prefix) was viable,
	// and the resultant number is not, then prefer the original phone number.
	// This is because for some countries (e.g. Russia) the same digit could be both
	// a national prefix and a leading digit of a valid national phone number,
	// like `8` is the national prefix for Russia and both
	// `8 800 555 35 35` and `800 555 35 35` are valid numbers.
	if (Object(_common__WEBPACK_IMPORTED_MODULE_3__["matches_entirely"])(number, national_number_rule) && !Object(_common__WEBPACK_IMPORTED_MODULE_3__["matches_entirely"])(national_significant_number, national_number_rule)) {
		return number;
	}

	// Return the parsed national (significant) number
	return national_significant_number;
}

function find_country_code(country_phone_code, national_phone_number, metadata) {
	// Is always non-empty, because `country_phone_code` is always valid
	var possible_countries = metadata.country_phone_code_to_countries[country_phone_code];

	// If there's just one country corresponding to the country code,
	// then just return it, without further phone number digits validation.
	if (possible_countries.length === 1) {
		return possible_countries[0];
	}

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(possible_countries), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var country_code = _step3.value;

			var country = metadata.countries[country_code];

			// Leading digits check would be the simplest one
			if (Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_leading_digits"])(country)) {
				if (national_phone_number && national_phone_number.search(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_leading_digits"])(country)) === 0) {
					return country_code;
				}
			}
			// Else perform full validation with all of those bulky
			// fixed-line/mobile/etc regular expressions.
			else if (Object(_types__WEBPACK_IMPORTED_MODULE_6__["default"])({ phone: national_phone_number, country: country_code }, metadata)) {
					return country_code;
				}
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}
}

// export function is_national_prefix_required(national_number, country_metadata)
// {
// 	const format = choose_format_for_number(get_formats(country_metadata), national_number)
//
// 	if (format)
// 	{
// 		return get_format_national_prefix_is_mandatory_when_formatting(format, country_metadata)
// 	}
// }

// Sort out arguments
function sort_out_arguments(arg_1, arg_2, arg_3) {
	var text = void 0;
	var options = void 0;
	var metadata = void 0;

	// Normalize numerical `value`.
	// https://github.com/catamphetamine/libphonenumber-js/issues/142
	// `parse(88005553535, ...)`.
	if (typeof arg_1 === 'number') {
		arg_1 = String(arg_1);
	}

	// If the phone number is passed as a string.
	// `parse('88005553535', ...)`.
	if (typeof arg_1 === 'string') {
		text = arg_1;
	}

	// If "resrict country" argument is being passed
	// then convert it to an `options` object.
	// `parse('88005553535', 'RU', [options], metadata)`.
	if (typeof arg_2 === 'string') {
		options = { country: { restrict: arg_2 } };
		metadata = arg_3;
	}
	// No "resrict country" argument is being passed.
	// International phone number is passed.
	// `parse('+78005553535', [options], metadata)`.
	else {
			if (arg_3) {
				options = arg_2;
				metadata = arg_3;
			} else {
				metadata = arg_2;
			}
		}

	// Metadata is required.
	if (!metadata || !metadata.countries) {
		throw new Error('Metadata is required');
	}

	// Apply default options.
	if (options) {
		options = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, default_options, options);
	} else {
		options = default_options;
	}

	return { text: text, options: options, metadata: metadata };
}

// Strips any extension (as in, the part of the number dialled after the call is
// connected, usually indicated with extn, ext, x or similar) from the end of
// the number, and returns it.
function strip_extension(number) {
	var start = number.search(EXTN_PATTERN);
	if (start < 0) {
		return {};
	}

	// If we find a potential extension, and the number preceding this is a viable
	// number, we assume it is an extension.
	var number_without_extension = number.slice(0, start);
	/* istanbul ignore if - seems a bit of a redundant check */
	if (!is_viable_phone_number(number_without_extension)) {
		return {};
	}

	var matches = number.match(EXTN_PATTERN);
	var i = 1;
	while (i < matches.length) {
		if (matches[i] != null && matches[i].length > 0) {
			return {
				number: number_without_extension,
				extension: matches[i]
			};
		}
		i++;
	}
}
//# sourceMappingURL=parse.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/types.js":
/*!*****************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/types.js ***!
  \*****************************************************/
/*! exports provided: default, is_of_type, sort_out_arguments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return get_number_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_of_type", function() { return is_of_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort_out_arguments", function() { return sort_out_arguments; });
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse */ "./node_modules/libphonenumber-js/es6/parse.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/libphonenumber-js/es6/common.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");






// Finds out national phone number type (fixed line, mobile, etc)
function get_number_type(arg_1, arg_2, arg_3) {
	var _sort_out_arguments = sort_out_arguments(arg_1, arg_2, arg_3),
	    input = _sort_out_arguments.input,
	    metadata = _sort_out_arguments.metadata;

	// When no input was passed


	if (!input) {
		return;
	}

	// When `parse()` returned `{}`
	// meaning that the phone number is not a valid one.
	if (!input.country) {
		return;
	}

	var national_number = input.phone;
	var country_metadata = metadata.countries[input.country];

	// The following is copy-pasted from the original function:
	// https://github.com/googlei18n/libphonenumber/blob/3ea547d4fbaa2d0b67588904dfa5d3f2557c27ff/javascript/i18n/phonenumbers/phonenumberutil.js#L2835

	// Is this national number even valid for this country
	if (!is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_national_number_pattern"])(country_metadata))) {
		return; // 'UNKNOWN'
	}

	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_premium_rate"])(country_metadata))) {
		return 'PREMIUM_RATE';
	}

	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_toll_free"])(country_metadata))) {
		return 'TOLL_FREE';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_shared_cost"])(country_metadata))) {
		return 'SHARED_COST';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_voip"])(country_metadata))) {
		return 'VOIP';
	}

	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_personal_number"])(country_metadata))) {
		return 'PERSONAL_NUMBER';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_pager"])(country_metadata))) {
		return 'PAGER';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_uan"])(country_metadata))) {
		return 'UAN';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_voice_mail"])(country_metadata))) {
		return 'VOICEMAIL';
	}

	// Is it fixed line number
	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_fixed_line"])(country_metadata))) {
		// Because duplicate regular expressions are removed
		// to reduce metadata size, if there's no "mobile" pattern
		// then it means it was removed due to being a duplicate of some other pattern.
		//
		if (!Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_mobile"])(country_metadata)) {
			return 'FIXED_LINE_OR_MOBILE';
		}

		// Check if the number happens to qualify as both fixed line and mobile.
		// (no such country in the minimal metadata set)
		/* istanbul ignore if */
		if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_mobile"])(country_metadata))) {
			return 'FIXED_LINE_OR_MOBILE';
		}

		return 'FIXED_LINE';
	}

	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_mobile"])(country_metadata))) {
		return 'MOBILE';
	}

	// return 'UNKNOWN'
}

function is_of_type(national_number, type) {
	// // Check if any possible number lengths are present;
	// // if so, we use them to avoid checking
	// // the validation pattern if they don't match.
	// // If they are absent, this means they match
	// // the general description, which we have
	// // already checked before a specific number type.
	// if (get_possible_lengths(type) &&
	// 	get_possible_lengths(type).indexOf(national_number.length) === -1)
	// {
	// 	return false
	// }

	// get_type_pattern(type) === type
	return Object(_common__WEBPACK_IMPORTED_MODULE_1__["matches_entirely"])(national_number, type);
}

// Sort out arguments
function sort_out_arguments(arg_1, arg_2, arg_3) {
	var input = void 0;
	var metadata = void 0;

	// Normalize numerical `value`.
	// https://github.com/catamphetamine/libphonenumber-js/issues/142
	// `getNumberType(88005553535, ...)`.
	if (typeof arg_1 === 'number') {
		arg_1 = String(arg_1);
	}

	// If the phone number is passed as a string.
	// `getNumberType('88005553535', ...)`.
	if (typeof arg_1 === 'string') {
		// If "resrict country" argument is being passed
		// then convert it to an `options` object.
		// `getNumberType('88005553535', 'RU', metadata)`.
		if (typeof arg_2 === 'string' || arg_2 === undefined) {
			metadata = arg_3;

			// `parse` extracts phone numbers from raw text,
			// therefore it will cut off all "garbage" characters,
			// while this `validate` function needs to verify
			// that the phone number contains no "garbage"
			// therefore the explicit `is_viable_phone_number` check.
			if (Object(_parse__WEBPACK_IMPORTED_MODULE_0__["is_viable_phone_number"])(arg_1)) {
				input = Object(_parse__WEBPACK_IMPORTED_MODULE_0__["default"])(arg_1, arg_2, metadata);
			}
		}
		// No "resrict country" argument is being passed.
		// International phone number is passed.
		// `getNumberType('+78005553535', metadata)`.
		else {
				metadata = arg_2;

				// `parse` extracts phone numbers from raw text,
				// therefore it will cut off all "garbage" characters,
				// while this `validate` function needs to verify
				// that the phone number contains no "garbage"
				// therefore the explicit `is_viable_phone_number` check.
				if (Object(_parse__WEBPACK_IMPORTED_MODULE_0__["is_viable_phone_number"])(arg_1)) {
					input = Object(_parse__WEBPACK_IMPORTED_MODULE_0__["default"])(arg_1, metadata);
				}
			}
	}
	// If the phone number is passed as a parsed phone number.
	// `getNumberType({ phone: '88005553535', country: 'RU' }, ...)`.
	else {
			// The `arg_1` must be a valid phone number
			// as a whole, not just a part of it which gets parsed here.
			if (arg_1 && arg_1.phone && Object(_parse__WEBPACK_IMPORTED_MODULE_0__["is_viable_phone_number"])(arg_1.phone)) {
				input = arg_1;
			}

			metadata = arg_2;
		}

	// Metadata is required.
	if (!metadata || !metadata.countries) {
		throw new Error('Metadata is required');
	}

	return { input: input, metadata: metadata };
}
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/validate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return is_valid; });
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse */ "./node_modules/libphonenumber-js/es6/parse.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/libphonenumber-js/es6/types.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");





// Checks if a given phone number is valid
//
// Example use cases:
//
// ```js
// is_valid('8005553535', 'RU')
// is_valid('8005553535', 'RU', metadata)
// is_valid({ phone: '8005553535', country: 'RU' })
// is_valid({ phone: '8005553535', country: 'RU' }, metadata)
// is_valid('+78005553535')
// is_valid('+78005553535', metadata)
// ```
//
function is_valid(arg_1, arg_2, arg_3) {
	var _sort_out_arguments = Object(_types__WEBPACK_IMPORTED_MODULE_1__["sort_out_arguments"])(arg_1, arg_2, arg_3),
	    input = _sort_out_arguments.input,
	    metadata = _sort_out_arguments.metadata;

	if (!input) {
		return false;
	}

	if (!input.country) {
		return false;
	}

	var country_metadata = metadata.countries[input.country];

	if (Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_types"])(country_metadata)) {
		if (!Object(_types__WEBPACK_IMPORTED_MODULE_1__["default"])(input, metadata)) {
			return false;
		}
	}

	return true;
}
//# sourceMappingURL=validate.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/index.es6.js":
/*!*****************************************************!*\
  !*** ./node_modules/libphonenumber-js/index.es6.js ***!
  \*****************************************************/
/*! exports provided: parse, format, getNumberType, get_number_type, isValidNumber, is_valid_number, AsYouType, as_you_type, asYouType, parseCustom, DIGITS, formatCustom, isValidNumberCustom, getNumberTypeCustom, AsYouTypeCustom, asYouTypeCustom, DIGIT_PLACEHOLDER, getPhoneCode, getPhoneCodeCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberType", function() { return getNumberType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_number_type", function() { return get_number_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNumber", function() { return isValidNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_valid_number", function() { return is_valid_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsYouType", function() { return AsYouType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "as_you_type", function() { return as_you_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asYouType", function() { return asYouType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhoneCode", function() { return getPhoneCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhoneCodeCustom", function() { return getPhoneCodeCustom; });
/* harmony import */ var _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata.min.json */ "./node_modules/libphonenumber-js/metadata.min.json");
var _metadata_min_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./metadata.min.json */ "./node_modules/libphonenumber-js/metadata.min.json", 1);
/* harmony import */ var _es6_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./es6/parse */ "./node_modules/libphonenumber-js/es6/parse.js");
/* harmony import */ var _es6_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./es6/types */ "./node_modules/libphonenumber-js/es6/types.js");
/* harmony import */ var _es6_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./es6/format */ "./node_modules/libphonenumber-js/es6/format.js");
/* harmony import */ var _es6_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./es6/validate */ "./node_modules/libphonenumber-js/es6/validate.js");
/* harmony import */ var _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./es6/AsYouType */ "./node_modules/libphonenumber-js/es6/AsYouType.js");
/* harmony import */ var _es6_metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./es6/metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseCustom", function() { return _es6_parse__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DIGITS", function() { return _es6_parse__WEBPACK_IMPORTED_MODULE_1__["DIGIT_MAPPINGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatCustom", function() { return _es6_format__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNumberCustom", function() { return _es6_validate__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberTypeCustom", function() { return _es6_types__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsYouTypeCustom", function() { return _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asYouTypeCustom", function() { return _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DIGIT_PLACEHOLDER", function() { return _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["DIGIT_PLACEHOLDER"]; });











function parse()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(_metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
	return _es6_parse__WEBPACK_IMPORTED_MODULE_1__["default"].apply(this, parameters)
}

function format()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(_metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
	return _es6_format__WEBPACK_IMPORTED_MODULE_3__["default"].apply(this, parameters)
}

function getNumberType()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(_metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
	return _es6_types__WEBPACK_IMPORTED_MODULE_2__["default"].apply(this, parameters)
}

// `get_number_type` name is deprecated
function get_number_type()
{
	return getNumberType.apply(this, arguments)
}

function isValidNumber()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(_metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
	return _es6_validate__WEBPACK_IMPORTED_MODULE_4__["default"].apply(this, parameters)
}

// `is_valid_number` name is deprecated
function is_valid_number()
{
	return isValidNumber.apply(this, arguments)
}

function AsYouType(country)
{
	_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, country, _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
}

AsYouType.prototype = Object.create(_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].prototype, {})
AsYouType.prototype.constructor = AsYouType

// `as_you_type` name is deprecated
function as_you_type(country)
{
	_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, country, _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
}

as_you_type.prototype = Object.create(_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].prototype, {})
as_you_type.prototype.constructor = as_you_type

// `asYouType` name is deprecated
function asYouType(country)
{
	_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, country, _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
}

asYouType.prototype = Object.create(_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].prototype, {})
asYouType.prototype.constructor = asYouType









function getPhoneCode(country)
{
	return getPhoneCodeCustom(country, _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
}

function getPhoneCodeCustom(country, metadata)
{
	if (!metadata.countries[country])
	{
		throw new Error('Unknown country: "' + country + '"')
	}

	return Object(_es6_metadata__WEBPACK_IMPORTED_MODULE_6__["get_phone_code"])(metadata.countries[country])
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/metadata.min.json":
/*!**********************************************************!*\
  !*** ./node_modules/libphonenumber-js/metadata.min.json ***!
  \**********************************************************/
/*! exports provided: country_phone_code_to_countries, countries, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"country_phone_code_to_countries\":{\"1\":[\"US\",\"AG\",\"AI\",\"AS\",\"BB\",\"BM\",\"BS\",\"CA\",\"DM\",\"DO\",\"GD\",\"GU\",\"JM\",\"KN\",\"KY\",\"LC\",\"MP\",\"MS\",\"PR\",\"SX\",\"TC\",\"TT\",\"VC\",\"VG\",\"VI\"],\"7\":[\"RU\",\"KZ\"],\"20\":[\"EG\"],\"27\":[\"ZA\"],\"30\":[\"GR\"],\"31\":[\"NL\"],\"32\":[\"BE\"],\"33\":[\"FR\"],\"34\":[\"ES\"],\"36\":[\"HU\"],\"39\":[\"IT\",\"VA\"],\"40\":[\"RO\"],\"41\":[\"CH\"],\"43\":[\"AT\"],\"44\":[\"GB\",\"GG\",\"IM\",\"JE\"],\"45\":[\"DK\"],\"46\":[\"SE\"],\"47\":[\"NO\",\"SJ\"],\"48\":[\"PL\"],\"49\":[\"DE\"],\"51\":[\"PE\"],\"52\":[\"MX\"],\"53\":[\"CU\"],\"54\":[\"AR\"],\"55\":[\"BR\"],\"56\":[\"CL\"],\"57\":[\"CO\"],\"58\":[\"VE\"],\"60\":[\"MY\"],\"61\":[\"AU\",\"CC\",\"CX\"],\"62\":[\"ID\"],\"63\":[\"PH\"],\"64\":[\"NZ\"],\"65\":[\"SG\"],\"66\":[\"TH\"],\"81\":[\"JP\"],\"82\":[\"KR\"],\"84\":[\"VN\"],\"86\":[\"CN\"],\"90\":[\"TR\"],\"91\":[\"IN\"],\"92\":[\"PK\"],\"93\":[\"AF\"],\"94\":[\"LK\"],\"95\":[\"MM\"],\"98\":[\"IR\"],\"211\":[\"SS\"],\"212\":[\"MA\",\"EH\"],\"213\":[\"DZ\"],\"216\":[\"TN\"],\"218\":[\"LY\"],\"220\":[\"GM\"],\"221\":[\"SN\"],\"222\":[\"MR\"],\"223\":[\"ML\"],\"224\":[\"GN\"],\"225\":[\"CI\"],\"226\":[\"BF\"],\"227\":[\"NE\"],\"228\":[\"TG\"],\"229\":[\"BJ\"],\"230\":[\"MU\"],\"231\":[\"LR\"],\"232\":[\"SL\"],\"233\":[\"GH\"],\"234\":[\"NG\"],\"235\":[\"TD\"],\"236\":[\"CF\"],\"237\":[\"CM\"],\"238\":[\"CV\"],\"239\":[\"ST\"],\"240\":[\"GQ\"],\"241\":[\"GA\"],\"242\":[\"CG\"],\"243\":[\"CD\"],\"244\":[\"AO\"],\"245\":[\"GW\"],\"246\":[\"IO\"],\"247\":[\"AC\"],\"248\":[\"SC\"],\"249\":[\"SD\"],\"250\":[\"RW\"],\"251\":[\"ET\"],\"252\":[\"SO\"],\"253\":[\"DJ\"],\"254\":[\"KE\"],\"255\":[\"TZ\"],\"256\":[\"UG\"],\"257\":[\"BI\"],\"258\":[\"MZ\"],\"260\":[\"ZM\"],\"261\":[\"MG\"],\"262\":[\"RE\",\"YT\"],\"263\":[\"ZW\"],\"264\":[\"NA\"],\"265\":[\"MW\"],\"266\":[\"LS\"],\"267\":[\"BW\"],\"268\":[\"SZ\"],\"269\":[\"KM\"],\"290\":[\"SH\",\"TA\"],\"291\":[\"ER\"],\"297\":[\"AW\"],\"298\":[\"FO\"],\"299\":[\"GL\"],\"350\":[\"GI\"],\"351\":[\"PT\"],\"352\":[\"LU\"],\"353\":[\"IE\"],\"354\":[\"IS\"],\"355\":[\"AL\"],\"356\":[\"MT\"],\"357\":[\"CY\"],\"358\":[\"FI\",\"AX\"],\"359\":[\"BG\"],\"370\":[\"LT\"],\"371\":[\"LV\"],\"372\":[\"EE\"],\"373\":[\"MD\"],\"374\":[\"AM\"],\"375\":[\"BY\"],\"376\":[\"AD\"],\"377\":[\"MC\"],\"378\":[\"SM\"],\"380\":[\"UA\"],\"381\":[\"RS\"],\"382\":[\"ME\"],\"385\":[\"HR\"],\"386\":[\"SI\"],\"387\":[\"BA\"],\"389\":[\"MK\"],\"420\":[\"CZ\"],\"421\":[\"SK\"],\"423\":[\"LI\"],\"500\":[\"FK\"],\"501\":[\"BZ\"],\"502\":[\"GT\"],\"503\":[\"SV\"],\"504\":[\"HN\"],\"505\":[\"NI\"],\"506\":[\"CR\"],\"507\":[\"PA\"],\"508\":[\"PM\"],\"509\":[\"HT\"],\"590\":[\"GP\",\"BL\",\"MF\"],\"591\":[\"BO\"],\"592\":[\"GY\"],\"593\":[\"EC\"],\"594\":[\"GF\"],\"595\":[\"PY\"],\"596\":[\"MQ\"],\"597\":[\"SR\"],\"598\":[\"UY\"],\"599\":[\"CW\",\"BQ\"],\"670\":[\"TL\"],\"672\":[\"NF\"],\"673\":[\"BN\"],\"674\":[\"NR\"],\"675\":[\"PG\"],\"676\":[\"TO\"],\"677\":[\"SB\"],\"678\":[\"VU\"],\"679\":[\"FJ\"],\"680\":[\"PW\"],\"681\":[\"WF\"],\"682\":[\"CK\"],\"683\":[\"NU\"],\"685\":[\"WS\"],\"686\":[\"KI\"],\"687\":[\"NC\"],\"688\":[\"TV\"],\"689\":[\"PF\"],\"690\":[\"TK\"],\"691\":[\"FM\"],\"692\":[\"MH\"],\"800\":[\"001\"],\"808\":[\"001\"],\"850\":[\"KP\"],\"852\":[\"HK\"],\"853\":[\"MO\"],\"855\":[\"KH\"],\"856\":[\"LA\"],\"870\":[\"001\"],\"878\":[\"001\"],\"880\":[\"BD\"],\"881\":[\"001\"],\"882\":[\"001\"],\"883\":[\"001\"],\"886\":[\"TW\"],\"888\":[\"001\"],\"960\":[\"MV\"],\"961\":[\"LB\"],\"962\":[\"JO\"],\"963\":[\"SY\"],\"964\":[\"IQ\"],\"965\":[\"KW\"],\"966\":[\"SA\"],\"967\":[\"YE\"],\"968\":[\"OM\"],\"970\":[\"PS\"],\"971\":[\"AE\"],\"972\":[\"IL\"],\"973\":[\"BH\"],\"974\":[\"QA\"],\"975\":[\"BT\"],\"976\":[\"MN\"],\"977\":[\"NP\"],\"979\":[\"001\"],\"992\":[\"TJ\"],\"993\":[\"TM\"],\"994\":[\"AZ\"],\"995\":[\"GE\"],\"996\":[\"KG\"],\"998\":[\"UZ\"]},\"countries\":{\"AC\":[\"247\",\"[46]\\\\d{4}|[01589]\\\\d{5}\"],\"AD\":[\"376\",\"[16]\\\\d{5,8}|[37-9]\\\\d{5}\",[[\"(\\\\d{3})(\\\\d{3})\",\"$1 $2\",[\"[137-9]|6[0-8]\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"180\",\"180[02]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"690\"]]]],\"AE\":[\"971\",\"[2-79]\\\\d{7,8}|800\\\\d{2,9}\",[[\"([2-4679])(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[2-4679][2-8]\"]],[\"(5\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"5\"]],[\"([479]00)(\\\\d)(\\\\d{5})\",\"$1 $2 $3\",[\"[479]00\"],\"$1\"],[\"([68]00)(\\\\d{2,9})\",\"$1 $2\",[\"[68]00\"],\"$1\"]],\"0\",\"0$1\"],\"AF\":[\"93\",\"[2-7]\\\\d{8}\",[[\"([2-7]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[2-7]\"]]],\"0\",\"0$1\"],\"AG\":[\"1\",\"[2589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"268\"],\"AI\":[\"1\",\"[2589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"264\"],\"AL\":[\"355\",\"[2-57]\\\\d{7}|6\\\\d{8}|8\\\\d{5,7}|9\\\\d{5}\",[[\"(4)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"4[0-6]\"]],[\"(6\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"6\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[2358][2-5]|4[7-9]\"]],[\"(\\\\d{3})(\\\\d{3,5})\",\"$1 $2\",[\"[235][16-9]|[79]|8[016-9]\"]]],\"0\",\"0$1\"],\"AM\":[\"374\",\"[1-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{6})\",\"$1 $2\",[\"1|47\"]],[\"(\\\\d{2})(\\\\d{6})\",\"$1 $2\",[\"4[1349]|[5-7]|88|9[1-9]\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"[23]\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"8|90\"],\"0 $1\"]],\"0\",\"(0$1)\"],\"AO\":[\"244\",\"[29]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\"]]],\"AR\":[\"54\",\"11\\\\d{8}|[2368]\\\\d{9}|9\\\\d{10}\",[[\"([68]\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"[68]\"]],[\"(9)(11)(\\\\d{4})(\\\\d{4})\",\"$2 15-$3-$4\",[\"911\"],null,null,\"$1 $2 $3-$4\"],[\"(9)(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$2 15-$3-$4\",[\"9(?:2[2-4689]|3[3-8])\",\"9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))\",\"9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))\",\"9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))\"],null,null,\"$1 $2 $3-$4\"],[\"(9)(\\\\d{4})(\\\\d{2})(\\\\d{4})\",\"$2 15-$3-$4\",[\"9[23]\"],null,null,\"$1 $2 $3-$4\"],[\"(11)(\\\\d{4})(\\\\d{4})\",\"$1 $2-$3\",[\"11\"],null,\"true\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2-$3\",[\"2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])\",\"2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))\",\"2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))\"],null,\"true\"],[\"(\\\\d{4})(\\\\d{2})(\\\\d{4})\",\"$1 $2-$3\",[\"[23]\"],null,\"true\"]],\"0\",\"0$1\",\"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?\",\"9$1\"],\"AS\":[\"1\",\"[5689]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"684\"],\"AT\":[\"43\",\"[1-9]\\\\d{3,12}\",[[\"(116\\\\d{3})\",\"$1\",[\"116\"],\"$1\"],[\"(1)(\\\\d{3,12})\",\"$1 $2\",[\"1\"]],[\"(5\\\\d)(\\\\d{3,5})\",\"$1 $2\",[\"5[079]\"]],[\"(5\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"5[079]\"]],[\"(5\\\\d)(\\\\d{4})(\\\\d{4,7})\",\"$1 $2 $3\",[\"5[079]\"]],[\"(\\\\d{3})(\\\\d{3,10})\",\"$1 $2\",[\"(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]\"]],[\"(\\\\d{4})(\\\\d{3,9})\",\"$1 $2\",[\"2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])\"]]],\"0\",\"0$1\"],\"AU\":[\"61\",\"1\\\\d{4,9}|[2-578]\\\\d{8}\",[[\"([2378])(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"[2378]\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"14|[45]\"],\"0$1\"],[\"(16)(\\\\d{3,4})\",\"$1 $2\",[\"16\"],\"0$1\"],[\"(16)(\\\\d{3})(\\\\d{2,4})\",\"$1 $2 $3\",[\"16\"],\"0$1\"],[\"(1[389]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[389]0\",\"1(?:[38]0|9)0\"]],[\"(180)(2\\\\d{3})\",\"$1 $2\",[\"180\",\"1802\"]],[\"(19\\\\d)(\\\\d{3})\",\"$1 $2\",[\"19[13]\"]],[\"(19\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"19[679]\"]],[\"(13)(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"13[1-9]\"]]],\"0\",null,null,null,null,null,[\"[237]\\\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\\\d|4[0-4]))|[6-8]\\\\d{4}|9(?:[02-9]\\\\d{3}|1(?:[0-57-9]\\\\d{2}|6[0135-9]\\\\d)))\\\\d{3}\",\"14(?:5\\\\d|71)\\\\d{5}|4(?:[0-3]\\\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12457-9]|9[017-9])\\\\d{6}\",\"180(?:0\\\\d{3}|2)\\\\d{3}\",\"19(?:0[0126]\\\\d|[679])\\\\d{5}\",\"500\\\\d{6}\",null,null,\"16\\\\d{3,7}\",\"550\\\\d{6}\",\"13(?:00\\\\d{3}|45[0-4]|\\\\d)\\\\d{3}\"]],\"AW\":[\"297\",\"[25-9]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"AX\":[\"358\",\"1\\\\d{5,11}|[35]\\\\d{5,9}|2\\\\d{4,9}|4\\\\d{5,10}|6\\\\d{7,9}|7\\\\d{4,9}|8\\\\d{6,9}\",[[\"(\\\\d{3})(\\\\d{3,7})\",\"$1 $2\",[\"(?:[1-3]0|[6-8])0\"]],[\"(75\\\\d{3})\",\"$1\",[\"75[12]\"]],[\"(116\\\\d{3})\",\"$1\",[\"116\"],\"$1\"],[\"(\\\\d{2})(\\\\d{4,10})\",\"$1 $2\",[\"[14]|2[09]|50|7[135]\"]],[\"(\\\\d)(\\\\d{4,11})\",\"$1 $2\",[\"[25689][1-8]|3\"]]],\"0\",null,null,null,null,null,[\"18[1-8]\\\\d{3,9}\",\"4\\\\d{5,10}|50\\\\d{4,8}\",\"800\\\\d{4,7}\",\"[67]00\\\\d{5,6}\",null,null,\"[13]0\\\\d{4,8}|2(?:0(?:[016-8]\\\\d{3,7}|[2-59]\\\\d{2,7})|9\\\\d{4,8})|60(?:[12]\\\\d{5,6}|6\\\\d{7})|7(?:1\\\\d{7}|3\\\\d{8}|5[03-9]\\\\d{2,7})\"]],\"AZ\":[\"994\",\"[1-9]\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"1[28]|2(?:[0-36]|[45]2)|365\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[4-8]\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"9\"],\"0$1\"]],\"0\",\"(0$1)\"],\"BA\":[\"387\",\"[3-9]\\\\d{7,8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2-$3\",[\"[3-5]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"6[1-356]|[7-9]\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"6[047]\"]]],\"0\",\"0$1\"],\"BB\":[\"1\",\"[2589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"246\"],\"BD\":[\"880\",\"[2-79]\\\\d{5,9}|1\\\\d{9}|8[0-7]\\\\d{4,8}\",[[\"(2)(\\\\d{7,8})\",\"$1-$2\",[\"2\"]],[\"(\\\\d{2})(\\\\d{4,6})\",\"$1-$2\",[\"[3-79]1\"]],[\"(\\\\d{4})(\\\\d{3,6})\",\"$1-$2\",[\"1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])\"]],[\"(\\\\d{3})(\\\\d{3,7})\",\"$1-$2\",[\"[3-79][2-9]|8\"]]],\"0\",\"0$1\"],\"BE\":[\"32\",\"[1-9]\\\\d{7,8}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"4[6-9]\"]],[\"(\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[23]|4[23]|9[2-4]\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[156]|7[018]|8(?:0[1-9]|[1-79])\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"(?:80|9)0\"]]],\"0\",\"0$1\"],\"BF\":[\"226\",\"[25-7]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"BG\":[\"359\",\"[23567]\\\\d{5,7}|[489]\\\\d{6,8}\",[[\"(2)(\\\\d)(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"2\"]],[\"(2)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"2\"]],[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"43[124-7]|70[1-9]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{2})\",\"$1 $2 $3\",[\"43[124-7]|70[1-9]\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"[78]00\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"99[69]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{2,3})\",\"$1 $2 $3\",[\"[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"48|8[7-9]|9[08]\"]]],\"0\",\"0$1\"],\"BH\":[\"973\",\"[136-9]\\\\d{7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\"]]],\"BI\":[\"257\",\"[267]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"BJ\":[\"229\",\"[2689]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[2689]\"]]]],\"BL\":[\"590\",\"[56]\\\\d{8}\",[[\"([56]\\\\d{2})(\\\\d{2})(\\\\d{4})\",\"$1 $2-$3\",[\"590|69[01]\"]]],\"0\",null,null,null,null,null,[\"590(?:2[7-9]|5[12]|87)\\\\d{4}\",\"69(?:0\\\\d{2}|1(?:2[29]|3[0-5]))\\\\d{4}\"]],\"BM\":[\"1\",\"[4589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"441\"],\"BN\":[\"673\",\"[2-578]\\\\d{6}\",[[\"([2-578]\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"[2-578]\"]]]],\"BO\":[\"591\",\"[23467]\\\\d{7}|8\\\\d{8}\",[[\"([234])(\\\\d{7})\",\"$1 $2\",[\"[2-4]\"]],[\"([67]\\\\d{7})\",\"$1\",[\"[67]\"]],[\"(800)(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"800\"]]],\"0\",null,\"0(1\\\\d)?\"],\"BQ\":[\"599\",\"[347]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[13-7]\"]],[\"(9)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"9\"]]],null,null,null,null,null,null,[\"(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\\\d)\\\\d{3}\",\"(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\\\d|9[056])\\\\d)\\\\d{3}\"]],\"BR\":[\"55\",\"[1-46-9]\\\\d{7,10}|5(?:[0-4]\\\\d{7,9}|5(?:[2-8]\\\\d{7}|9\\\\d{7,8}))\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1-$2\",[\"300|40[02]\",\"300|40(?:0|20)\"]],[\"([3589]00)(\\\\d{2,3})(\\\\d{4})\",\"$1 $2 $3\",[\"[3589]00\"],\"0$1\"],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2-$3\",[\"[1-9][1-9]\"],\"($1)\"],[\"(\\\\d{2})(\\\\d{5})(\\\\d{4})\",\"$1 $2-$3\",[\"[1-9][1-9]9\"],\"($1)\"]],\"0\",null,\"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\\\d{10,11}))?\",\"$2\"],\"BS\":[\"1\",\"[2589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"242\"],\"BT\":[\"975\",\"[1-8]\\\\d{6,7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"1|77\"]],[\"([2-8])(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[2-68]|7[246]\"]]]],\"BW\":[\"267\",\"[2-79]\\\\d{6,7}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[2-6]\"]],[\"(7\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"7\"]],[\"(90)(\\\\d{5})\",\"$1 $2\",[\"90\"]]]],\"BY\":[\"375\",\"[1-4]\\\\d{8}|8(?:0(?:0\\\\d{3,7}|[13]\\\\d{7})|(?:10|20\\\\d)\\\\d{7})|9\\\\d{9,10}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2-$3-$4\",[\"17[0-3589]|2[4-9]|[34]\",\"17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]\"],\"8 0$1\"],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2-$3-$4\",[\"1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])\",\"1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])\"],\"8 0$1\"],[\"(\\\\d{4})(\\\\d{2})(\\\\d{3})\",\"$1 $2-$3\",[\"1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])\",\"1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])\"],\"8 0$1\"],[\"([89]\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"8[01]|9\"],\"8 $1\"],[\"(82\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"82\"],\"8 $1\"],[\"(800)(\\\\d{3})\",\"$1 $2\",[\"800\"],\"8 $1\"],[\"(800)(\\\\d{2})(\\\\d{2,4})\",\"$1 $2 $3\",[\"800\"],\"8 $1\"]],\"8\",null,\"8?0?\"],\"BZ\":[\"501\",\"[2-8]\\\\d{6}|0\\\\d{10}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1-$2\",[\"[2-8]\"]],[\"(0)(800)(\\\\d{4})(\\\\d{3})\",\"$1-$2-$3-$4\",[\"080\",\"0800\"]]]],\"CA\":[\"1\",\"[2-9]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,null,[\"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\\\d{6}\",null,\"8(?:00|33|44|55|66|77|88)[2-9]\\\\d{6}\",\"900[2-9]\\\\d{6}\",\"5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\\\d{6}\"]],\"CC\":[\"61\",\"[1458]\\\\d{5,9}\",[[\"([2378])(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"[2378]\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"14|[45]\"],\"0$1\"],[\"(16)(\\\\d{3,4})\",\"$1 $2\",[\"16\"],\"0$1\"],[\"(16)(\\\\d{3})(\\\\d{2,4})\",\"$1 $2 $3\",[\"16\"],\"0$1\"],[\"(1[389]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[389]0\",\"1(?:[38]0|9)0\"]],[\"(180)(2\\\\d{3})\",\"$1 $2\",[\"180\",\"1802\"]],[\"(19\\\\d)(\\\\d{3})\",\"$1 $2\",[\"19[13]\"]],[\"(19\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"19[679]\"]],[\"(13)(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"13[1-9]\"]]],\"0\",null,null,null,null,null,[\"8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\\\d|70[23]|959))\\\\d{3}\",\"14(?:5\\\\d|71)\\\\d{5}|4(?:[0-3]\\\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\\\d{6}\",\"180(?:0\\\\d{3}|2)\\\\d{3}\",\"19(?:0[0126]\\\\d|[679])\\\\d{5}\",\"500\\\\d{6}\",null,null,null,\"550\\\\d{6}\",\"13(?:00\\\\d{2})?\\\\d{4}\"]],\"CD\":[\"243\",\"[2-6]\\\\d{6}|[18]\\\\d{6,8}|9\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"12\"]],[\"([89]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"8[0-2459]|9\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"88\"]],[\"(\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"[1-6]\"]]],\"0\",\"0$1\"],\"CF\":[\"236\",\"[278]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"CG\":[\"242\",\"[028]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"801\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[02]\"]],[\"(\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"800\"]]]],\"CH\":[\"41\",\"[2-9]\\\\d{8}|860\\\\d{9}\",[[\"([2-9]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[2-7]|[89]1\"]],[\"([89]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"8[047]|90\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4 $5\",[\"860\"]]],\"0\",\"0$1\"],\"CI\":[\"225\",\"[02-8]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"CK\":[\"682\",\"[2-8]\\\\d{4}\",[[\"(\\\\d{2})(\\\\d{3})\",\"$1 $2\"]]],\"CL\":[\"56\",\"1230\\\\d{7}|[2-46-9]\\\\d{8,10}|5[1-3578]\\\\d{7}\",[[\"(\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"2[23]\"],\"($1)\"],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[357]|4[1-35]|6[13-57]\"],\"($1)\"],[\"(9)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"9\"]],[\"(44)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"44\"]],[\"([68]00)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[68]00\"],\"$1\"],[\"(600)(\\\\d{3})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"600\"],\"$1\"],[\"(1230)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"123\",\"1230\"],\"$1\"],[\"(\\\\d{5})(\\\\d{4})\",\"$1 $2\",[\"219\"],\"($1)\"]],\"0\",\"0$1\",\"0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))\"],\"CM\":[\"237\",\"[2368]\\\\d{7,8}\",[[\"([26])(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4 $5\",[\"[26]\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[23]|88\"]]]],\"CN\":[\"86\",\"[1-7]\\\\d{6,11}|8[0-357-9]\\\\d{6,9}|9\\\\d{7,10}\",[[\"([48]00)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[48]00\"]],[\"(\\\\d{2})(\\\\d{5,6})\",\"$1 $2\",[\"(?:10|2\\\\d)[19]\",\"(?:10|2\\\\d)(?:10|9[56])\",\"(?:10|2\\\\d)(?:100|9[56])\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{5,6})\",\"$1 $2\",[\"[3-9]\",\"[3-9]\\\\d\\\\d[19]\",\"[3-9]\\\\d\\\\d(?:10|9[56])\"],\"0$1\"],[\"(21)(\\\\d{4})(\\\\d{4,6})\",\"$1 $2 $3\",[\"21\"],\"0$1\",\"true\"],[\"([12]\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"10[1-9]|2[02-9]\",\"10[1-9]|2[02-9]\",\"10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]\"],\"0$1\",\"true\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])\"],\"0$1\",\"true\"],[\"(\\\\d{3})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)\"],\"0$1\",\"true\"],[\"(\\\\d{4})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"807\",\"8078\"],\"0$1\",\"true\"],[\"(\\\\d{3})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:[3-57-9]|66)\"]],[\"(10800)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"108\",\"1080\",\"10800\"]],[\"(\\\\d{3})(\\\\d{7,8})\",\"$1 $2\",[\"950\"]]],\"0\",null,\"(1(?:[129]\\\\d{3}|79\\\\d{2}))|0\"],\"CO\":[\"57\",\"(?:[13]\\\\d{0,3}|[24-8])\\\\d{7}\",[[\"(\\\\d)(\\\\d{7})\",\"$1 $2\",[\"1(?:[2-7]|8[2-9]|9[0-3])|[24-8]\",\"1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]\"],\"($1)\"],[\"(\\\\d{3})(\\\\d{7})\",\"$1 $2\",[\"3\"]],[\"(1)(\\\\d{3})(\\\\d{7})\",\"$1-$2-$3\",[\"1(?:80|9[04])\",\"1(?:800|9(?:0[01]|4[78]))\"],\"0$1\",null,\"$1 $2 $3\"]],\"0\",null,\"0([3579]|4(?:44|56))?\"],\"CR\":[\"506\",\"[24-9]\\\\d{7,9}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[24-7]|8[3-9]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"[89]0\"]]],null,null,\"(19(?:0[012468]|1[09]|20|66|77|99))\"],\"CU\":[\"53\",\"[2-57]\\\\d{5,7}\",[[\"(\\\\d)(\\\\d{6,7})\",\"$1 $2\",[\"7\"]],[\"(\\\\d{2})(\\\\d{4,6})\",\"$1 $2\",[\"[2-4]\"]],[\"(\\\\d)(\\\\d{7})\",\"$1 $2\",[\"5\"],\"0$1\"]],\"0\",\"(0$1)\"],\"CV\":[\"238\",\"[259]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\"]]],\"CW\":[\"599\",\"[134679]\\\\d{6,7}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[13-7]\"]],[\"(9)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"9\"]]],null,null,null,null,null,null,[\"9(?:[48]\\\\d{2}|50\\\\d|7(?:2[0-24]|[34]\\\\d|6[35-7]|77|8[7-9]))\\\\d{4}\",\"9(?:5(?:[12467]\\\\d|3[01])|6(?:[15-9]\\\\d|3[01]))\\\\d{4}\",null,null,null,null,null,\"955\\\\d{5}\",null,\"60[0-2]\\\\d{4}\"]],\"CX\":[\"61\",\"[1458]\\\\d{5,9}\",[[\"([2378])(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"[2378]\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"14|[45]\"],\"0$1\"],[\"(16)(\\\\d{3,4})\",\"$1 $2\",[\"16\"],\"0$1\"],[\"(16)(\\\\d{3})(\\\\d{2,4})\",\"$1 $2 $3\",[\"16\"],\"0$1\"],[\"(1[389]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[389]0\",\"1(?:[38]0|9)0\"]],[\"(180)(2\\\\d{3})\",\"$1 $2\",[\"180\",\"1802\"]],[\"(19\\\\d)(\\\\d{3})\",\"$1 $2\",[\"19[13]\"]],[\"(19\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"19[679]\"]],[\"(13)(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"13[1-9]\"]]],\"0\",null,null,null,null,null,[\"8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\\\d|7(?:0[01]|1[0-2])|958))\\\\d{3}\",\"14(?:5\\\\d|71)\\\\d{5}|4(?:[0-3]\\\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\\\d{6}\",\"180(?:0\\\\d{3}|2)\\\\d{3}\",\"19(?:0[0126]\\\\d|[679])\\\\d{5}\",\"500\\\\d{6}\",null,null,null,\"550\\\\d{6}\",\"13(?:00\\\\d{2})?\\\\d{4}\"]],\"CY\":[\"357\",\"[257-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{6})\",\"$1 $2\"]]],\"CZ\":[\"420\",\"[2-8]\\\\d{8}|9\\\\d{8,11}\",[[\"([2-9]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[2-8]|9[015-7]\"]],[\"(96\\\\d)(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"96\"]],[\"(9\\\\d)(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"9[36]\"]]]],\"DE\":[\"49\",\"[1-35-9]\\\\d{3,14}|4(?:[0-8]\\\\d{3,12}|9(?:[0-37]\\\\d|4(?:[1-35-8]|4\\\\d?)|5\\\\d{1,2}|6[1-8]\\\\d?)\\\\d{2,8})\",[[\"(1\\\\d{2})(\\\\d{7,8})\",\"$1 $2\",[\"1[67]\"]],[\"(15\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"15[0568]\"]],[\"(1\\\\d{3})(\\\\d{7})\",\"$1 $2\",[\"15\"]],[\"(\\\\d{2})(\\\\d{3,11})\",\"$1 $2\",[\"3[02]|40|[68]9\"]],[\"(\\\\d{3})(\\\\d{3,11})\",\"$1 $2\",[\"2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)\"]],[\"(\\\\d{4})(\\\\d{2,11})\",\"$1 $2\",[\"[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])\",\"[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[1346]|8[13568])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])\"]],[\"(3\\\\d{4})(\\\\d{1,10})\",\"$1 $2\",[\"3\"]],[\"(800)(\\\\d{7,12})\",\"$1 $2\",[\"800\"]],[\"(\\\\d{3})(\\\\d)(\\\\d{4,10})\",\"$1 $2 $3\",[\"1(?:37|80)|900\",\"1(?:37|80)|900[1359]\"]],[\"(1\\\\d{2})(\\\\d{5,11})\",\"$1 $2\",[\"181\"]],[\"(18\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"185\",\"1850\",\"18500\"]],[\"(18\\\\d{2})(\\\\d{7})\",\"$1 $2\",[\"18[68]\"]],[\"(18\\\\d)(\\\\d{8})\",\"$1 $2\",[\"18[2-579]\"]],[\"(700)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"700\"]],[\"(138)(\\\\d{4})\",\"$1 $2\",[\"138\"]],[\"(15[013-68])(\\\\d{2})(\\\\d{8})\",\"$1 $2 $3\",[\"15[013-68]\"]],[\"(15[279]\\\\d)(\\\\d{2})(\\\\d{7})\",\"$1 $2 $3\",[\"15[279]\"]],[\"(1[67]\\\\d)(\\\\d{2})(\\\\d{7,8})\",\"$1 $2 $3\",[\"1(?:6[023]|7)\"]]],\"0\",\"0$1\"],\"DJ\":[\"253\",\"[27]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"DK\":[\"45\",\"[2-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"DM\":[\"1\",\"[57-9]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"767\"],\"DO\":[\"1\",\"[589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"8[024]9\"],\"DZ\":[\"213\",\"(?:[1-4]|[5-9]\\\\d)\\\\d{7}\",[[\"([1-4]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[1-4]\"]],[\"([5-8]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[5-8]\"]],[\"(9\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"9\"]]],\"0\",\"0$1\"],\"EC\":[\"593\",\"1\\\\d{9,10}|[2-8]\\\\d{7}|9\\\\d{8}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2-$3\",[\"[247]|[356][2-8]\"],null,null,\"$1-$2-$3\"],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"9\"],\"0$1\"],[\"(1800)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"180\",\"1800\"],\"$1\"]],\"0\",\"(0$1)\"],\"EE\":[\"372\",\"[3-9]\\\\d{6,7}|800\\\\d{6,7}\",[[\"([3-79]\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]\",\"[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]\"]],[\"(70)(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"70\"]],[\"(8000)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"800\",\"8000\"]],[\"([458]\\\\d{3})(\\\\d{3,4})\",\"$1 $2\",[\"40|5|8(?:00|[1-5])\",\"40|5|8(?:00[1-9]|[1-5])\"]]]],\"EG\":[\"20\",\"1\\\\d{4,9}|[24-6]\\\\d{8}|3\\\\d{7}|[89]\\\\d{8,9}\",[[\"(\\\\d)(\\\\d{7,8})\",\"$1 $2\",[\"[23]\"]],[\"(\\\\d{2})(\\\\d{6,7})\",\"$1 $2\",[\"1(?:3|5[239])|[4-6]|[89][2-9]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1[0-25]|[89]00\"]]],\"0\",\"0$1\"],\"EH\":[\"212\",\"[5-9]\\\\d{8}\",[[\"([5-7]\\\\d{2})(\\\\d{6})\",\"$1-$2\",[\"5(?:2[015-7]|3[0-4])|[67]\"]],[\"([58]\\\\d{3})(\\\\d{5})\",\"$1-$2\",[\"5(?:2[2-489]|3[5-9]|92)|892\",\"5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892\"]],[\"(5\\\\d{4})(\\\\d{4})\",\"$1-$2\",[\"5(?:29|38)\",\"5(?:29|38)[89]\"]],[\"([5]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"5(?:4[067]|5[03])\"]],[\"(8[09])(\\\\d{7})\",\"$1-$2\",[\"8(?:0|9[013-9])\"]]],\"0\",null,null,null,null,\"528[89]\"],\"ER\":[\"291\",\"[178]\\\\d{6}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\"]],\"0\",\"0$1\"],\"ES\":[\"34\",\"[5-9]\\\\d{8}\",[[\"([89]00)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[89]00\"]],[\"([5-9]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[568]|[79][0-8]\"]]]],\"ET\":[\"251\",\"[1-59]\\\\d{8}\",[[\"([1-59]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[1-59]\"]]],\"0\",\"0$1\"],\"FI\":[\"358\",\"1\\\\d{4,11}|[2-9]\\\\d{4,10}\",[[\"(\\\\d{3})(\\\\d{3,7})\",\"$1 $2\",[\"(?:[1-3]0|[6-8])0\"]],[\"(75\\\\d{3})\",\"$1\",[\"75[12]\"]],[\"(116\\\\d{3})\",\"$1\",[\"116\"],\"$1\"],[\"(\\\\d{2})(\\\\d{4,10})\",\"$1 $2\",[\"[14]|2[09]|50|7[135]\"]],[\"(\\\\d)(\\\\d{4,11})\",\"$1 $2\",[\"[25689][1-8]|3\"]]],\"0\",\"0$1\",null,null,null,null,[\"1(?:[3569][1-8]\\\\d{3,9}|[47]\\\\d{5,10})|2[1-8]\\\\d{3,9}|3(?:[1-8]\\\\d{3,9}|9\\\\d{4,8})|[5689][1-8]\\\\d{3,9}\",\"4(?:[0-8]\\\\d{4,9}|9\\\\d{3,8})|50\\\\d{4,8}\",\"800\\\\d{4,7}\",\"[67]00\\\\d{5,6}\",null,null,\"[13]0\\\\d{4,8}|2(?:0(?:[016-8]\\\\d{3,7}|[2-59]\\\\d{2,7})|9\\\\d{4,8})|60(?:[12]\\\\d{5,6}|6\\\\d{7})|7(?:1\\\\d{7}|3\\\\d{8}|5[03-9]\\\\d{3,7})\"]],\"FJ\":[\"679\",\"[2-9]\\\\d{6}|0\\\\d{10}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[2-9]\"]],[\"(\\\\d{4})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"0\"]]]],\"FK\":[\"500\",\"[2-7]\\\\d{4}\"],\"FM\":[\"691\",\"[39]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"FO\":[\"298\",\"[2-9]\\\\d{5}\",[[\"(\\\\d{6})\",\"$1\"]],null,null,\"(10(?:01|[12]0|88))\"],\"FR\":[\"33\",\"[1-9]\\\\d{8}\",[[\"([1-79])(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4 $5\",[\"[1-79]\"]],[\"(8\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"8\"],\"0 $1\"]],\"0\",\"0$1\"],\"GA\":[\"241\",\"0?\\\\d{7}\",[[\"(\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[2-7]\"],\"0$1\"],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"0\"]]]],\"GB\":[\"44\",\"\\\\d{7,10}\",[[\"(7\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"7(?:[1-57-9]|62)\",\"7(?:[1-57-9]|624)\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"2|5[56]|7[06]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:[02-9]1|1)|3|9[018]\"]],[\"(\\\\d{5})(\\\\d{4,5})\",\"$1 $2\",[\"1(?:38|5[23]|69|76|94)\",\"1(?:(?:38|69)7|5(?:24|39)|768|946)\",\"1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)\"]],[\"(1\\\\d{3})(\\\\d{5,6})\",\"$1 $2\",[\"1\"]],[\"(800)(\\\\d{4})\",\"$1 $2\",[\"800\",\"8001\",\"80011\",\"800111\",\"8001111\"]],[\"(845)(46)(4\\\\d)\",\"$1 $2 $3\",[\"845\",\"8454\",\"84546\",\"845464\"]],[\"(8\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"8(?:4[2-5]|7[0-3])\"]],[\"(80\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"80\"]],[\"(800)(\\\\d{6})\",\"$1 $2\",[\"800\"]]],\"0\",\"0$1\",null,null,null,null,[\"2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\\\d{7}|1(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\\\d)\\\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\\\d)|3(?:0\\\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\\\d|9[2-57]))\\\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\\\d)|276\\\\d|6(?:26[06-9]|686))|6(?:06(?:4\\\\d|7[4-79])|295[567]|35[34]\\\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\\\d{3}|176888[2-46-8]\\\\d{2}|16977[23]\\\\d{3}\",\"7(?:[1-3]\\\\d{3}|4(?:[0-46-9]\\\\d{2}|5(?:[0-689]\\\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\\\d|2[0-35-9])\\\\d|7(?:0(?:0[01]|[1-9]\\\\d)|[1-7]\\\\d{2}|8[02-9]\\\\d|9[0-689]\\\\d)|8(?:[014-9]\\\\d|[23][0-8])\\\\d|9(?:[024-9]\\\\d{2}|1(?:[02-9]\\\\d|1[028])|3[0-689]\\\\d))\\\\d{5}\",\"80(?:0(?:1111|\\\\d{6,7})|8\\\\d{7})\",\"(?:87[123]|9(?:[01]\\\\d|8[2349]))\\\\d{7}\",\"70\\\\d{8}\",null,\"(?:3[0347]|55)\\\\d{8}\",\"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\\\d{6}\",\"56\\\\d{8}\",\"8(?:4(?:5464\\\\d|[2-5]\\\\d{7})|70\\\\d{7})\"]],\"GD\":[\"1\",\"[4589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"473\"],\"GE\":[\"995\",\"[34578]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[348]\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"7\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"5\"]]],\"0\"],\"GF\":[\"594\",\"[56]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]],\"0\",\"0$1\"],\"GG\":[\"44\",\"[135789]\\\\d{6,9}\",[[\"(7\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"7(?:[1-57-9]|62)\",\"7(?:[1-57-9]|624)\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"2|5[56]|7[06]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:[02-9]1|1)|3|9[018]\"]],[\"(\\\\d{5})(\\\\d{4,5})\",\"$1 $2\",[\"1(?:38|5[23]|69|76|94)\",\"1(?:(?:38|69)7|5(?:24|39)|768|946)\",\"1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)\"]],[\"(1\\\\d{3})(\\\\d{5,6})\",\"$1 $2\",[\"1\"]],[\"(800)(\\\\d{4})\",\"$1 $2\",[\"800\",\"8001\",\"80011\",\"800111\",\"8001111\"]],[\"(845)(46)(4\\\\d)\",\"$1 $2 $3\",[\"845\",\"8454\",\"84546\",\"845464\"]],[\"(8\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"8(?:4[2-5]|7[0-3])\"]],[\"(80\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"80\"]],[\"(800)(\\\\d{6})\",\"$1 $2\",[\"800\"]]],\"0\",null,null,null,null,null,[\"1481[25-9]\\\\d{5}\",\"7(?:781\\\\d|839\\\\d|911[17])\\\\d{5}\",\"80(?:0(?:1111|\\\\d{6,7})|8\\\\d{7})\",\"(?:87[123]|9(?:[01]\\\\d|8[0-3]))\\\\d{7}\",\"70\\\\d{8}\",null,\"(?:3[0347]|55)\\\\d{8}\",\"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\\\d{6}\",\"56\\\\d{8}\",\"8(?:4(?:5464\\\\d|[2-5]\\\\d{7})|70\\\\d{7})\"]],\"GH\":[\"233\",\"[235]\\\\d{8}|8\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[235]\"]],[\"(\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"8\"]]],\"0\",\"0$1\"],\"GI\":[\"350\",\"[256]\\\\d{7}\",[[\"(\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"2\"]]]],\"GL\":[\"299\",\"[1-689]\\\\d{5}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\"]]],\"GM\":[\"220\",\"[2-9]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"GN\":[\"224\",\"[367]\\\\d{7,8}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"3\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[67]\"]]]],\"GP\":[\"590\",\"[56]\\\\d{8}\",[[\"([56]\\\\d{2})(\\\\d{2})(\\\\d{4})\",\"$1 $2-$3\",[\"590|69[01]\"]]],\"0\",\"0$1\",null,null,null,null,[\"590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\\\d)\\\\d{4}\",\"69(?:0\\\\d{2}|1(?:2[29]|3[0-5]))\\\\d{4}\"]],\"GQ\":[\"240\",\"[23589]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[235]\"]],[\"(\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"[89]\"]]]],\"GR\":[\"30\",\"[26-9]\\\\d{9}\",[[\"([27]\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"21|7\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"2[2-9]1|[689]\"]],[\"(2\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"2[2-9][02-9]\"]]]],\"GT\":[\"502\",\"[2-7]\\\\d{7}|1[89]\\\\d{9}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[2-7]\"]],[\"(\\\\d{4})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1\"]]]],\"GU\":[\"1\",\"[5689]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"671\"],\"GW\":[\"245\",\"(?:4(?:0\\\\d{5}|4\\\\d{7})|9\\\\d{8})\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"44|9[5-7]\"]],[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"40\"]]]],\"GY\":[\"592\",\"[2-46-9]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"HK\":[\"852\",\"[2-7]\\\\d{7}|8[0-3]\\\\d{6,7}|9\\\\d{4,10}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[2-7]|[89](?:0[1-9]|[1-9])\"]],[\"(800)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"800\"]],[\"(900)(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"900\"]],[\"(900)(\\\\d{2,5})\",\"$1 $2\",[\"900\"]]]],\"HN\":[\"504\",\"[237-9]\\\\d{7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1-$2\"]]],\"HR\":[\"385\",\"[1-7]\\\\d{5,8}|[89]\\\\d{6,8}\",[[\"(1)(\\\\d{4})(\\\\d{3})\",\"$1 $2 $3\",[\"1\"]],[\"([2-5]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[2-5]\"]],[\"(9\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"9\"]],[\"(6[01])(\\\\d{2})(\\\\d{2,3})\",\"$1 $2 $3\",[\"6[01]\"]],[\"([67]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[67]\"]],[\"(80[01])(\\\\d{2})(\\\\d{2,3})\",\"$1 $2 $3\",[\"80[01]\"]],[\"(80[01])(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"80[01]\"]]],\"0\",\"0$1\"],\"HT\":[\"509\",\"[2-489]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\"]]],\"HU\":[\"36\",\"[1-9]\\\\d{7,8}\",[[\"(1)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[2-9]\"]]],\"06\",\"($1)\"],\"ID\":[\"62\",\"(?:[1-79]\\\\d{6,10}|8\\\\d{7,11})\",[[\"(\\\\d{2})(\\\\d{5,8})\",\"$1 $2\",[\"2[124]|[36]1\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{5,8})\",\"$1 $2\",[\"2[035-9]|[36][02-9]|[4579]\"],\"(0$1)\"],[\"(8\\\\d{2})(\\\\d{3,4})(\\\\d{3})\",\"$1-$2-$3\",[\"8[1-35-9]\"]],[\"(8\\\\d{2})(\\\\d{4})(\\\\d{4,5})\",\"$1-$2-$3\",[\"8[1-35-9]\"]],[\"(1)(500)(\\\\d{3})\",\"$1 $2 $3\",[\"150\",\"1500\"],\"$1\"],[\"(177)(\\\\d{6,8})\",\"$1 $2\",[\"177\"]],[\"(800)(\\\\d{5,7})\",\"$1 $2\",[\"800\"]],[\"(804)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"804\"]],[\"(80\\\\d)(\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"80[79]\"]]],\"0\",\"0$1\"],\"IE\":[\"353\",\"[124-9]\\\\d{6,9}\",[[\"(1)(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"1\"]],[\"(\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"2[24-9]|47|58|6[237-9]|9[35-9]\"]],[\"(\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"40[24]|50[45]\"]],[\"(48)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"48\"]],[\"(818)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"818\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[24-69]|7[14]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"76|8[35-9]\"],\"0$1\"],[\"(8\\\\d)(\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3 $4\",[\"8[35-9]5\"],\"0$1\"],[\"(700)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"700\"],\"0$1\"],[\"(\\\\d{4})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1(?:5|8[059])\",\"1(?:5|8[059]0)\"],\"$1\"]],\"0\",\"(0$1)\"],\"IL\":[\"972\",\"1\\\\d{6,11}|[2-589]\\\\d{3}(?:\\\\d{3,6})?|6\\\\d{3}|7\\\\d{6,9}\",[[\"([2-489])(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"[2-489]\"],\"0$1\"],[\"([57]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"[57]\"],\"0$1\"],[\"(153)(\\\\d{1,2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3 $4\",[\"153\"]],[\"(1)([7-9]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1-$2-$3-$4\",[\"1[7-9]\"]],[\"(1255)(\\\\d{3})\",\"$1-$2\",[\"125\",\"1255\"]],[\"(1200)(\\\\d{3})(\\\\d{3})\",\"$1-$2-$3\",[\"120\",\"1200\"]],[\"(1212)(\\\\d{2})(\\\\d{2})\",\"$1-$2-$3\",[\"121\",\"1212\"]],[\"(1599)(\\\\d{6})\",\"$1-$2\",[\"159\",\"1599\"]],[\"(151)(\\\\d{1,2})(\\\\d{3})(\\\\d{4})\",\"$1-$2 $3-$4\",[\"151\"]],[\"(\\\\d{4})\",\"*$1\",[\"[2-689]\"]]],\"0\"],\"IM\":[\"44\",\"[135789]\\\\d{6,9}\",[[\"(7\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"7(?:[1-57-9]|62)\",\"7(?:[1-57-9]|624)\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"2|5[56]|7[06]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:[02-9]1|1)|3|9[018]\"]],[\"(\\\\d{5})(\\\\d{4,5})\",\"$1 $2\",[\"1(?:38|5[23]|69|76|94)\",\"1(?:(?:38|69)7|5(?:24|39)|768|946)\",\"1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)\"]],[\"(1\\\\d{3})(\\\\d{5,6})\",\"$1 $2\",[\"1\"]],[\"(800)(\\\\d{4})\",\"$1 $2\",[\"800\",\"8001\",\"80011\",\"800111\",\"8001111\"]],[\"(845)(46)(4\\\\d)\",\"$1 $2 $3\",[\"845\",\"8454\",\"84546\",\"845464\"]],[\"(8\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"8(?:4[2-5]|7[0-3])\"]],[\"(80\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"80\"]],[\"(800)(\\\\d{6})\",\"$1 $2\",[\"800\"]]],\"0\",null,null,null,null,null,[\"1624[5-8]\\\\d{5}\",\"7(?:4576|[59]24\\\\d|624[0-4689])\\\\d{5}\",\"808162\\\\d{4}\",\"(?:872299|90[0167]624)\\\\d{4}\",\"70\\\\d{8}\",null,\"3(?:08162\\\\d|3\\\\d{5}|4(?:40[49]06|5624\\\\d)|7(?:0624\\\\d|2299\\\\d))\\\\d{3}|55\\\\d{8}\",null,\"56\\\\d{8}\",\"8(?:4(?:40[49]06|5624\\\\d)|70624\\\\d)\\\\d{3}\"]],\"IN\":[\"91\",\"008\\\\d{9}|1\\\\d{7,12}|[2-9]\\\\d{9,10}\",[[\"(\\\\d{8})\",\"$1\",[\"561\",\"5616\",\"56161\"],\"$1\"],[\"(\\\\d{5})(\\\\d{5})\",\"$1 $2\",[\"6(?:[09]0|2[03689]|3[05-9])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9\",\"6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9\",\"6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[5-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[05-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:0(?:[089]|7[02])|[14](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|1(?:[089]|7[02-6])|2(?:[09]|77|8[0-689])|6(?:[089]|7[02-7]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-68]))|9(?:[02-9]|1(?:[0289]|7[2-6])))|9\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"11|2[02]|33|4[04]|79[1-9]|80[2-46]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)\"]],[\"(\\\\d{4})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1(?:[23579]|[468][1-9])|[2-8]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"008\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"140\"],\"$1\"],[\"(\\\\d{4})(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"160\",\"1600\"],\"$1\"],[\"(\\\\d{4})(\\\\d{4,5})\",\"$1 $2\",[\"180\",\"1800\"],\"$1\"],[\"(\\\\d{4})(\\\\d{2,4})(\\\\d{4})\",\"$1 $2 $3\",[\"180\",\"1800\"],\"$1\"],[\"(\\\\d{4})(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"186\",\"1860\"],\"$1\"],[\"(\\\\d{4})(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"18[06]\"],\"$1\"]],\"0\",\"0$1\",null,null,true],\"IO\":[\"246\",\"3\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"IQ\":[\"964\",\"[1-7]\\\\d{7,9}\",[[\"(1)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1\"]],[\"([2-6]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[2-6]\"]],[\"(7\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"7\"]]],\"0\",\"0$1\"],\"IR\":[\"98\",\"[1-8]\\\\d{5,9}|9(?:[0-4]\\\\d{8}|9\\\\d{8})\",[[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"[1-8]\"]],[\"(\\\\d{2})(\\\\d{4,5})\",\"$1 $2\",[\"[1-8]\"]],[\"(\\\\d{4,5})\",\"$1\",[\"96\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"9\"]]],\"0\",\"0$1\"],\"IS\":[\"354\",\"[4-9]\\\\d{6}|38\\\\d{7}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[4-9]\"]],[\"(3\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"3\"]]]],\"IT\":[\"39\",\"[01589]\\\\d{5,10}|3(?:[12457-9]\\\\d{8}|[36]\\\\d{7,9})\",[[\"(\\\\d{2})(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"0[26]|55\"]],[\"(0[26])(\\\\d{4})(\\\\d{5})\",\"$1 $2 $3\",[\"0[26]\"]],[\"(0[26])(\\\\d{4,6})\",\"$1 $2\",[\"0[26]\"]],[\"(0\\\\d{2})(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"0[13-57-9][0159]\"]],[\"(\\\\d{3})(\\\\d{3,6})\",\"$1 $2\",[\"0[13-57-9][0159]|8(?:03|4[17]|9[245])\",\"0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))\"]],[\"(0\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"0[13-57-9][2-46-8]\"]],[\"(0\\\\d{3})(\\\\d{2,6})\",\"$1 $2\",[\"0[13-57-9][2-46-8]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[13]|8(?:00|4[08]|9[59])\",\"[13]|8(?:00|4[08]|9(?:5[5-9]|9))\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"894\",\"894[5-9]\"]],[\"(\\\\d{3})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"3\"]]],null,null,null,null,null,null,[\"0(?:[26]\\\\d{4,9}|(?:1(?:[0159]\\\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\\\d{2,7})\",\"3(?:[12457-9]\\\\d{8}|6\\\\d{7,8}|3\\\\d{7,9})\",\"80(?:0\\\\d{6}|3\\\\d{3})\",\"0878\\\\d{5}|1(?:44|6[346])\\\\d{6}|89(?:2\\\\d{3}|4(?:[0-4]\\\\d{2}|[5-9]\\\\d{4})|5(?:[0-4]\\\\d{2}|[5-9]\\\\d{6})|9\\\\d{6})\",\"1(?:78\\\\d|99)\\\\d{6}\",null,null,null,\"55\\\\d{8}\",\"84(?:[08]\\\\d{6}|[17]\\\\d{3})\"]],\"JE\":[\"44\",\"[135789]\\\\d{6,9}\",[[\"(7\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"7(?:[1-57-9]|62)\",\"7(?:[1-57-9]|624)\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"2|5[56]|7[06]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:[02-9]1|1)|3|9[018]\"]],[\"(\\\\d{5})(\\\\d{4,5})\",\"$1 $2\",[\"1(?:38|5[23]|69|76|94)\",\"1(?:(?:38|69)7|5(?:24|39)|768|946)\",\"1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)\"]],[\"(1\\\\d{3})(\\\\d{5,6})\",\"$1 $2\",[\"1\"]],[\"(800)(\\\\d{4})\",\"$1 $2\",[\"800\",\"8001\",\"80011\",\"800111\",\"8001111\"]],[\"(845)(46)(4\\\\d)\",\"$1 $2 $3\",[\"845\",\"8454\",\"84546\",\"845464\"]],[\"(8\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"8(?:4[2-5]|7[0-3])\"]],[\"(80\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"80\"]],[\"(800)(\\\\d{6})\",\"$1 $2\",[\"800\"]]],\"0\",null,null,null,null,null,[\"1534[0-24-8]\\\\d{5}\",\"7(?:509\\\\d|7(?:00[378]|97[7-9])|829\\\\d|937\\\\d)\\\\d{5}\",\"80(?:07(?:35|81)|8901)\\\\d{4}\",\"(?:871206|90(?:066[59]|1810|71(?:07|55)))\\\\d{4}\",\"701511\\\\d{4}\",null,\"3(?:0(?:07(?:35|81)|8901)|3\\\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\\\d{4}|55\\\\d{8}\",\"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\\\d{6}\",\"56\\\\d{8}\",\"8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\\\d{4}\"]],\"JM\":[\"1\",\"[589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"876\"],\"JO\":[\"962\",\"[235-9]\\\\d{7,8}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[2356]|87\"],\"(0$1)\"],[\"(7)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"7[457-9]\"]],[\"(\\\\d{2})(\\\\d{7})\",\"$1 $2\",[\"70\"]],[\"(\\\\d{3})(\\\\d{5,6})\",\"$1 $2\",[\"8[0158]|9\"]]],\"0\",\"0$1\"],\"JP\":[\"81\",\"[1-9]\\\\d{8,9}|00(?:[36]\\\\d{7,14}|7\\\\d{5,7}|8\\\\d{7})\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1-$2-$3\",[\"(?:12|57|99)0\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"800\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1-$2-$3\",[\"[2579]0|80[1-9]\"]],[\"(\\\\d{4})(\\\\d)(\\\\d{4})\",\"$1-$2-$3\",[\"1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])\",\"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))\",\"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{4})\",\"$1-$2-$3\",[\"1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])\",\"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))\",\"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))\",\"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)\",\"1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])\",\"1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{4})\",\"$1-$2-$3\",[\"2(?:[34]7|[56]9|74|9[14-79])|82|993\"]],[\"(\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1-$2-$3\",[\"3|4(?:2[09]|7[01])|6[1-9]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"[2479][1-9]\"]]],\"0\",\"0$1\"],\"KE\":[\"254\",\"20\\\\d{6,7}|[4-9]\\\\d{6,9}\",[[\"(\\\\d{2})(\\\\d{5,7})\",\"$1 $2\",[\"[24-6]\"]],[\"(\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"7\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[89]\"]]],\"0\",\"0$1\",\"005|0\"],\"KG\":[\"996\",\"[235-8]\\\\d{8,9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[25-7]|31[25]\"]],[\"(\\\\d{4})(\\\\d{5})\",\"$1 $2\",[\"3(?:1[36]|[2-9])\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d)(\\\\d{3})\",\"$1 $2 $3 $4\",[\"8\"]]],\"0\",\"0$1\"],\"KH\":[\"855\",\"[1-9]\\\\d{7,9}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"1\\\\d[1-9]|[2-9]\"],\"0$1\"],[\"(1[89]00)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[89]0\",\"1[89]00\"]]],\"0\"],\"KI\":[\"686\",\"[2458]\\\\d{4}|3\\\\d{4,7}|[67]\\\\d{7}\",[],null,null,\"0\"],\"KM\":[\"269\",\"[3478]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\"]]],\"KN\":[\"1\",\"[589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"869\"],\"KP\":[\"850\",\"1\\\\d{9}|[28]\\\\d{7}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1\"]],[\"(\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"2\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"8\"]]],\"0\",\"0$1\"],\"KR\":[\"82\",\"00(?:3\\\\d{8,9}|7\\\\d{9,11})|[1-7]\\\\d{4,9}|8\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{3,4})\",\"$1-$2\",[\"(?:3[1-3]|[46][1-4]|5[1-5])1\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1-$2\",[\"1(?:5[246-9]|6[046-8]|8[03579])\",\"1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\"],\"$1\"],[\"(\\\\d{5})\",\"$1\",[\"1[016-9]1\",\"1[016-9]11\",\"1[016-9]114\"]],[\"(\\\\d)(\\\\d{3,4})(\\\\d{4})\",\"$1-$2-$3\",[\"2[1-9]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"60[2-9]|80\"]],[\"(\\\\d{2})(\\\\d{3,4})(\\\\d{4})\",\"$1-$2-$3\",[\"1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1-$2-$3\",[\"[57]0\"]]],\"0\",\"0$1\",\"0(8[1-46-8]|85\\\\d{2})?\"],\"KW\":[\"965\",\"[12569]\\\\d{6,7}\",[[\"(\\\\d{4})(\\\\d{3,4})\",\"$1 $2\",[\"[16]|2(?:[0-35-9]|4[0-35-9])|52[25]|9[024-9]\"]],[\"(\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"244|5(?:[015]|6[56])\"]]]],\"KY\":[\"1\",\"[3589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"345\"],\"KZ\":[\"7\",\"(?:33\\\\d|7\\\\d{2}|80[089])\\\\d{7}\",[[\"([3489]\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2-$3-$4\",[\"[3489]\"]],[\"(7\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"7\"]]],\"8\",null,null,null,null,null,[\"33622\\\\d{5}|7(?:1(?:0(?:[23]\\\\d|4[0-3]|59|63)|1(?:[23]\\\\d|4[0-79]|59)|2(?:[23]\\\\d|59)|3(?:2\\\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\\\d|3[013-9]|5[1-9])|5(?:2\\\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\\\d|5[19]|61)|72\\\\d|8(?:[27]\\\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\\\d|4[46-9]|5[3469])|2(?:2\\\\d|3[0679]|46|5[12679])|3(?:[234]\\\\d|5[139])|4(?:2\\\\d|3[1235-9]|59)|5(?:[23]\\\\d|4[01246-8]|59|61)|6(?:2\\\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\\\d|40|5[279])|8(?:[23]\\\\d|4[0-3]|59)|9(?:2\\\\d|3[124578]|59)))\\\\d{5}\",\"7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\\\d{7}\",\"800\\\\d{7}\",\"809\\\\d{7}\",\"808\\\\d{7}\",null,null,null,\"751\\\\d{7}\"]],\"LA\":[\"856\",\"[2-8]\\\\d{7,9}\",[[\"(20)(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"20\"]],[\"([2-8]\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"2[13]|3[14]|[4-8]\"]],[\"(30)(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"30\"]]],\"0\",\"0$1\"],\"LB\":[\"961\",\"[13-9]\\\\d{6,7}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]\"],\"0$1\"],[\"([7-9]\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"7(?:[01]|6[013-9]|8[89]|9[1-3])|[89][01]\"]]],\"0\"],\"LC\":[\"1\",\"[5789]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"758\"],\"LI\":[\"423\",\"6\\\\d{8}|[23789]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"[237-9]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"6[56]\"]],[\"(69)(7\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"697\"]]],\"0\",null,\"0|10(?:01|20|66)\"],\"LK\":[\"94\",\"[1-9]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[1-689]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"7\"]]],\"0\",\"0$1\"],\"LR\":[\"231\",\"2\\\\d{7,8}|[378]\\\\d{8}|4\\\\d{6}|5\\\\d{6,8}\",[[\"(2\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"2\"]],[\"([4-5])(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[45]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[23578]\"]]],\"0\",\"0$1\"],\"LS\":[\"266\",\"[2568]\\\\d{7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\"]]],\"LT\":[\"370\",\"[3-9]\\\\d{7}\",[[\"([34]\\\\d)(\\\\d{6})\",\"$1 $2\",[\"37|4(?:1|5[45]|6[2-4])\"]],[\"([3-6]\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"3[148]|4(?:[24]|6[09])|528|6\"]],[\"([7-9]\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"[7-9]\"],\"8 $1\"],[\"(5)(2\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"52[0-79]\"]]],\"8\",\"(8-$1)\",\"[08]\",null,true],\"LU\":[\"352\",\"[24-9]\\\\d{3,10}|3(?:[0-46-9]\\\\d{2,9}|5[013-9]\\\\d{1,8})\",[[\"(\\\\d{2})(\\\\d{3})\",\"$1 $2\",[\"[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"20\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{1,2})\",\"$1 $2 $3 $4\",[\"2(?:[0367]|4[3-8])\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"20\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{1,2})\",\"$1 $2 $3 $4 $5\",[\"2(?:[0367]|4[3-8])\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{1,4})\",\"$1 $2 $3 $4\",[\"2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"70|80[01]|90[015]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"6\"]]],null,null,\"(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\\\d)\"],\"LV\":[\"371\",\"[2689]\\\\d{7}\",[[\"([2689]\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[2689]\"]]]],\"LY\":[\"218\",\"[25679]\\\\d{8}\",[[\"([25-79]\\\\d)(\\\\d{7})\",\"$1-$2\",[\"[25-79]\"]]],\"0\",\"0$1\"],\"MA\":[\"212\",\"[5-9]\\\\d{8}\",[[\"([5-7]\\\\d{2})(\\\\d{6})\",\"$1-$2\",[\"5(?:2[015-7]|3[0-4])|[67]\"]],[\"([58]\\\\d{3})(\\\\d{5})\",\"$1-$2\",[\"5(?:2[2-489]|3[5-9]|92)|892\",\"5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892\"]],[\"(5\\\\d{4})(\\\\d{4})\",\"$1-$2\",[\"5(?:29|38)\",\"5(?:29|38)[89]\"]],[\"([5]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"5(?:4[067]|5[03])\"]],[\"(8[09])(\\\\d{7})\",\"$1-$2\",[\"8(?:0|9[013-9])\"]]],\"0\",\"0$1\",null,null,null,null,[\"5(?:2(?:[015-79]\\\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\\\d|3(?:[0-48]\\\\d|[57][2-9]|6[2-8]|9[3-9])\\\\d|4[067]\\\\d{2}|5[03]\\\\d{2})\\\\d{4}\",\"(?:6(?:[0-79]\\\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[07]))\\\\d{6}\",\"80\\\\d{7}\",\"89\\\\d{7}\",null,null,null,null,\"5924[01]\\\\d{4}\"]],\"MC\":[\"377\",\"[34689]\\\\d{7,8}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[39]\"],\"$1\"],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"4\"]],[\"(6)(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4 $5\",[\"6\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{2})\",\"$1 $2 $3\",[\"8\"],\"$1\"]],\"0\",\"0$1\"],\"MD\":[\"373\",\"[235-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"22|3\"]],[\"([25-7]\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"2[13-9]|[5-7]\"]],[\"([89]\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"[89]\"]]],\"0\",\"0$1\"],\"ME\":[\"382\",\"[2-9]\\\\d{7,8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[2-57-9]|6[036-9]\"]]],\"0\",\"0$1\"],\"MF\":[\"590\",\"[56]\\\\d{8}\",[[\"([56]\\\\d{2})(\\\\d{2})(\\\\d{4})\",\"$1 $2-$3\",[\"590|69[01]\"]]],\"0\",null,null,null,null,null,[\"590(?:0[079]|13|2[79]|30|43|5[0-268]|7[79]|87)\\\\d{4}\",\"69(?:0\\\\d{2}|1(?:2[29]|3[0-5]))\\\\d{4}\"]],\"MG\":[\"261\",\"[23]\\\\d{8}\",[[\"([23]\\\\d)(\\\\d{2})(\\\\d{3})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[23]\"]]],\"0\",\"0$1\"],\"MH\":[\"692\",\"[2-6]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1-$2\"]],\"1\"],\"MK\":[\"389\",\"[2-578]\\\\d{7}\",[[\"(2)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"2\"]],[\"([347]\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[347]\"]],[\"([58]\\\\d{2})(\\\\d)(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[58]\"]]],\"0\",\"0$1\"],\"ML\":[\"223\",\"[246-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[246-9]\"]]]],\"MM\":[\"95\",\"[178]\\\\d{5,7}|[24-6]\\\\d{5,8}|9(?:[279]\\\\d{0,2}|5|[34]\\\\d{1,2}|6(?:\\\\d{1,2})?|8(?:\\\\d{2})?)\\\\d{6}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"1|2[245]\"]],[\"(2)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"251\"]],[\"(\\\\d)(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"16|2\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"432|67|81\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[4-8]\"]],[\"(9)(\\\\d{3})(\\\\d{4,6})\",\"$1 $2 $3\",[\"9(?:2[0-4]|[35-9]|4[137-9])\"]],[\"(9)([34]\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"9(?:3[0-36]|4[0-57-9])\"]],[\"(9)(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"92[56]\"]],[\"(9)(\\\\d{3})(\\\\d{3})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"93\"]]],\"0\",\"0$1\"],\"MN\":[\"976\",\"[12]\\\\d{7,9}|[57-9]\\\\d{7}\",[[\"([12]\\\\d)(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"[12]1\"]],[\"([12]2\\\\d)(\\\\d{5,6})\",\"$1 $2\",[\"[12]2[1-3]\"]],[\"([12]\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"[12](?:27|[3-5])\",\"[12](?:27|[3-5]\\\\d)2\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[57-9]\"],\"$1\"],[\"([12]\\\\d{4})(\\\\d{4,5})\",\"$1 $2\",[\"[12](?:27|[3-5])\",\"[12](?:27|[3-5]\\\\d)[4-9]\"]]],\"0\",\"0$1\"],\"MO\":[\"853\",\"[268]\\\\d{7}\",[[\"([268]\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[268]\"]]]],\"MP\":[\"1\",\"[5689]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"670\"],\"MQ\":[\"596\",\"[56]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]],\"0\",\"0$1\"],\"MR\":[\"222\",\"[2-48]\\\\d{7}\",[[\"([2-48]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[2-48]\"]]]],\"MS\":[\"1\",\"[5689]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"664\"],\"MT\":[\"356\",\"[2357-9]\\\\d{7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\"]]],\"MU\":[\"230\",\"[2-9]\\\\d{6,7}\",[[\"([2-46-9]\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"[2-46-9]\"]],[\"(5\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"5\"]]]],\"MV\":[\"960\",\"[346-8]\\\\d{6,9}|9(?:00\\\\d{7}|\\\\d{6})\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1-$2\",[\"[3467]|9(?:0[1-9]|[1-9])\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[89]00\"]]]],\"MW\":[\"265\",\"(?:1(?:\\\\d{2})?|[2789]\\\\d{2})\\\\d{6}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1\"]],[\"(2\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"2\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[17-9]\"]]],\"0\",\"0$1\"],\"MX\":[\"52\",\"[1-9]\\\\d{9,10}\",[[\"([358]\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"33|55|81\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]\"]],[\"(1)([358]\\\\d)(\\\\d{4})(\\\\d{4})\",\"044 $2 $3 $4\",[\"1(?:33|55|81)\"],\"$1\",null,\"$1 $2 $3 $4\"],[\"(1)(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"044 $2 $3 $4\",[\"1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])\"],\"$1\",null,\"$1 $2 $3 $4\"]],\"01\",\"01 $1\",\"0[12]|04[45](\\\\d{10})\",\"1$1\",true],\"MY\":[\"60\",\"[13-9]\\\\d{7,9}\",[[\"([4-79])(\\\\d{3})(\\\\d{4})\",\"$1-$2 $3\",[\"[4-79]\"],\"0$1\"],[\"(3)(\\\\d{4})(\\\\d{4})\",\"$1-$2 $3\",[\"3\"],\"0$1\"],[\"([18]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1-$2 $3\",[\"1[02-46-9][1-9]|8\"],\"0$1\"],[\"(1)([36-8]00)(\\\\d{2})(\\\\d{4})\",\"$1-$2-$3-$4\",[\"1[36-8]0\",\"1[36-8]00\"]],[\"(11)(\\\\d{4})(\\\\d{4})\",\"$1-$2 $3\",[\"11\"],\"0$1\"],[\"(15[49])(\\\\d{3})(\\\\d{4})\",\"$1-$2 $3\",[\"15[49]\"],\"0$1\"]],\"0\"],\"MZ\":[\"258\",\"[28]\\\\d{7,8}\",[[\"([28]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"2|8[2-7]\"]],[\"(80\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"80\"]]]],\"NA\":[\"264\",\"[68]\\\\d{7,8}\",[[\"(8\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"8[1-35]\"]],[\"(6\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"6\"]],[\"(88)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"88\"]],[\"(870)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"870\"]]],\"0\",\"0$1\"],\"NC\":[\"687\",\"[2-57-9]\\\\d{5}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1.$2.$3\",[\"[2-46-9]|5[0-4]\"]]]],\"NE\":[\"227\",\"[0289]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"09|[289]\"]],[\"(08)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"08\"]]]],\"NF\":[\"672\",\"[13]\\\\d{5}\",[[\"(\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"1\"]],[\"(\\\\d)(\\\\d{5})\",\"$1 $2\",[\"3\"]]]],\"NG\":[\"234\",\"[1-6]\\\\d{5,8}|9\\\\d{5,9}|[78]\\\\d{5,13}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[12]|9(?:0[3-9]|[1-9])\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{2,3})\",\"$1 $2 $3\",[\"[3-6]|7(?:0[1-9]|[1-79])|8[2-9]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"70|8[01]|90[235-9]\"]],[\"([78]00)(\\\\d{4})(\\\\d{4,5})\",\"$1 $2 $3\",[\"[78]00\"]],[\"([78]00)(\\\\d{5})(\\\\d{5,6})\",\"$1 $2 $3\",[\"[78]00\"]],[\"(78)(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"78\"]]],\"0\",\"0$1\"],\"NI\":[\"505\",\"[125-8]\\\\d{7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\"]]],\"NL\":[\"31\",\"1\\\\d{4,8}|[2-7]\\\\d{8}|[89]\\\\d{6,9}\",[[\"([1-578]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]\"]],[\"([1-5]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[16-8]|2[259]|3[124]|4[17-9]|5[124679]\"]],[\"(6)(\\\\d{8})\",\"$1 $2\",[\"6[0-57-9]\"]],[\"(66)(\\\\d{7})\",\"$1 $2\",[\"66\"]],[\"(14)(\\\\d{3,4})\",\"$1 $2\",[\"14\"],\"$1\"],[\"([89]0\\\\d)(\\\\d{4,7})\",\"$1 $2\",[\"[89]0\"]]],\"0\",\"0$1\"],\"NO\":[\"47\",\"0\\\\d{4}|[2-9]\\\\d{7}\",[[\"([489]\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"[489]\"]],[\"([235-7]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[235-7]\"]]],null,null,null,null,null,null,[\"(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\\\d{6}\",\"(?:4[015-8]|5[89]|87|9\\\\d)\\\\d{6}\",\"80[01]\\\\d{5}\",\"82[09]\\\\d{5}\",\"880\\\\d{5}\",null,\"0\\\\d{4}|81(?:0(?:0[7-9]|1\\\\d)|5\\\\d{2})\\\\d{3}\",null,\"85[0-5]\\\\d{5}\",\"810(?:0[0-6]|[2-8]\\\\d)\\\\d{3}\"]],\"NP\":[\"977\",\"[1-8]\\\\d{7}|9(?:[1-69]\\\\d{6,8}|7[2-6]\\\\d{5,7}|8\\\\d{8})\",[[\"(1)(\\\\d{7})\",\"$1-$2\",[\"1[2-6]\"]],[\"(\\\\d{2})(\\\\d{6})\",\"$1-$2\",[\"1[01]|[2-8]|9(?:[1-69]|7[15-9])\"]],[\"(9\\\\d{2})(\\\\d{7})\",\"$1-$2\",[\"9(?:6[013]|7[245]|8)\"],\"$1\"]],\"0\",\"0$1\"],\"NR\":[\"674\",\"[458]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"NU\":[\"683\",\"[1-5]\\\\d{3}\"],\"NZ\":[\"64\",\"6[235-9]\\\\d{6}|[2-57-9]\\\\d{7,9}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1-$2 $3\",[\"240|[346]|7[2-57-9]|9[1-9]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"21\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,5})\",\"$1 $2 $3\",[\"2(?:1[1-9]|[69]|7[0-35-9])|70|86\"]],[\"(2\\\\d)(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"2[028]\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"90\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"2(?:10|74)|5|[89]0\"]]],\"0\",\"0$1\"],\"OM\":[\"968\",\"(?:5|[279]\\\\d)\\\\d{6}|800\\\\d{5,6}\",[[\"(2\\\\d)(\\\\d{6})\",\"$1 $2\",[\"2\"]],[\"([79]\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[79]\"]],[\"([58]00)(\\\\d{4,6})\",\"$1 $2\",[\"[58]00\"]]]],\"PA\":[\"507\",\"[1-9]\\\\d{6,7}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1-$2\",[\"[1-57-9]\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1-$2\",[\"6\"]]]],\"PE\":[\"51\",\"[14-9]\\\\d{7,8}\",[[\"(1)(\\\\d{7})\",\"$1 $2\",[\"1\"]],[\"([4-8]\\\\d)(\\\\d{6})\",\"$1 $2\",[\"[4-7]|8[2-4]\"]],[\"(\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"80\"]],[\"(9\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"9\"],\"$1\"]],\"0\",\"(0$1)\"],\"PF\":[\"689\",\"4\\\\d{5,7}|8\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"4[09]|8[79]\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"44\"]]]],\"PG\":[\"675\",\"[1-9]\\\\d{6,7}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[13-689]|27\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"20|7\"]]]],\"PH\":[\"63\",\"1\\\\d{10,12}|2\\\\d{5,7}|[3-7]\\\\d{8}|8\\\\d{7,9}|9\\\\d{9}\",[[\"(2)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"2\"],\"(0$1)\"],[\"(2)(\\\\d{5})\",\"$1 $2\",[\"2\"],\"(0$1)\"],[\"(\\\\d{4})(\\\\d{4,6})\",\"$1 $2\",[\"3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])\",\"3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))\"],\"(0$1)\"],[\"(\\\\d{5})(\\\\d{4})\",\"$1 $2\",[\"346|4(?:27|9[35])|883\",\"3469|4(?:279|9(?:30|56))|8834\"],\"(0$1)\"],[\"([3-8]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[3-8]\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"81|9\"],\"0$1\"],[\"(1800)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"180\",\"1800\"]],[\"(1800)(\\\\d{1,2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3 $4\",[\"180\",\"1800\"]]],\"0\"],\"PK\":[\"92\",\"1\\\\d{8}|[2-8]\\\\d{5,11}|9(?:[013-9]\\\\d{4,10}|2\\\\d(?:111\\\\d{6}|\\\\d{3,7}))\",[[\"([89]00)(\\\\d{3})(\\\\d{2})\",\"$1 $2 $3\",[\"[89]00\"],\"0$1\"],[\"(1\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"1\"],\"$1\"],[\"(\\\\d{2})(\\\\d{7,8})\",\"$1 $2\",[\"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\"]],[\"(\\\\d{3})(\\\\d{6,7})\",\"$1 $2\",[\"2[349]|45|54|60|72|8[2-5]|9[2-469]\",\"(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\\\d[2-9]\"]],[\"(58\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"58[126]\"]],[\"(3\\\\d{2})(\\\\d{7})\",\"$1 $2\",[\"3\"],\"0$1\"],[\"(\\\\d{2})(111)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1\",\"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11\",\"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111\"]],[\"(\\\\d{3})(111)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"2[349]|45|54|60|72|8[2-5]|9[2-9]\",\"(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\\\d1\",\"(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\\\d11\",\"(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\\\d111\"]]],\"0\",\"(0$1)\"],\"PL\":[\"48\",\"[1-57-9]\\\\d{6,8}|6\\\\d{5,8}\",[[\"(\\\\d{3})(\\\\d{3})\",\"$1 $2\",[\"11[68]|64\"]],[\"(\\\\d{5})\",\"$1\",[\"19\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2,3})\",\"$1 $2 $3\",[\"64\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"26|39|45|5[0137]|6[0469]|7[02389]|8[08]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]\"]]]],\"PM\":[\"508\",\"[45]\\\\d{5}\",[[\"([45]\\\\d)(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"[45]\"]]],\"0\",\"0$1\"],\"PR\":[\"1\",\"[5789]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"787|939\"],\"PS\":[\"970\",\"1\\\\d{9}|[24589]\\\\d{7,8}\",[[\"([2489])(2\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"[2489]2\"]],[\"(5[69]\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"5[69]\"]],[\"(1[78]00)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[78]0\",\"1[78]00\"],\"$1\"]],\"0\",\"0$1\"],\"PT\":[\"351\",\"[2-46-9]\\\\d{8}\",[[\"(2\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"2[12]\"]],[\"([2-46-9]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"2[3-9]|[346-9]\"]]]],\"PW\":[\"680\",\"[2-8]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"PY\":[\"595\",\"5[0-5]\\\\d{4,7}|[2-46-9]\\\\d{5,8}\",[[\"(\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]\"],\"(0$1)\"],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3,6})\",\"$1 $2\",[\"[2-9]0\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"9[1-9]\"],\"0$1\"],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"870\",\"8700\"]],[\"(\\\\d{3})(\\\\d{4,5})\",\"$1 $2\",[\"[2-8][1-9]\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[2-8][1-9]\"],\"0$1\"]],\"0\"],\"QA\":[\"974\",\"[2-8]\\\\d{6,7}\",[[\"([28]\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"[28]\"]],[\"([3-7]\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[3-7]\"]]]],\"RE\":[\"262\",\"[268]\\\\d{8}\",[[\"([268]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[268]\"]]],\"0\",\"0$1\",null,null,null,\"262|69|8\"],\"RO\":[\"40\",\"[23]\\\\d{5,8}|[7-9]\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[23]1\"]],[\"(\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"[23]1\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[23][3-7]|[7-9]\"]],[\"(2\\\\d{2})(\\\\d{3})\",\"$1 $2\",[\"2[3-6]\"]]],\"0\",\"0$1\"],\"RS\":[\"381\",\"[126-9]\\\\d{4,11}|3(?:[0-79]\\\\d{3,10}|8[2-9]\\\\d{2,9})\",[[\"([23]\\\\d{2})(\\\\d{4,9})\",\"$1 $2\",[\"(?:2[389]|39)0\"]],[\"([1-3]\\\\d)(\\\\d{5,10})\",\"$1 $2\",[\"1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])\"]],[\"(6\\\\d)(\\\\d{6,8})\",\"$1 $2\",[\"6\"]],[\"([89]\\\\d{2})(\\\\d{3,9})\",\"$1 $2\",[\"[89]\"]],[\"(7[26])(\\\\d{4,9})\",\"$1 $2\",[\"7[26]\"]],[\"(7[08]\\\\d)(\\\\d{4,9})\",\"$1 $2\",[\"7[08]\"]]],\"0\",\"0$1\"],\"RU\":[\"7\",\"[347-9]\\\\d{9}\",[[\"([3489]\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2-$3-$4\",[\"[3489]\"]],[\"(7\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"7\"]]],\"8\",\"8 ($1)\",null,null,true,null,[\"(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\\\d{7}\",\"9\\\\d{9}\",\"80[04]\\\\d{7}\",\"80[39]\\\\d{7}\",\"808\\\\d{7}\"]],\"RW\":[\"250\",\"[027-9]\\\\d{7,8}\",[[\"(2\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"2\"]],[\"([7-9]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[7-9]\"],\"0$1\"],[\"(0\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"0\"]]],\"0\"],\"SA\":[\"966\",\"1\\\\d{7,8}|(?:[2-467]|92)\\\\d{7}|5\\\\d{8}|8\\\\d{9}\",[[\"([1-467])(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[1-467]\"]],[\"(1\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1[1-467]\"]],[\"(5\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"5\"]],[\"(92\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"92\"],\"$1\"],[\"(800)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"800\"],\"$1\"],[\"(811)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"811\"]]],\"0\",\"0$1\"],\"SB\":[\"677\",\"[1-9]\\\\d{4,6}\",[[\"(\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"[7-9]\"]]]],\"SC\":[\"248\",\"[24689]\\\\d{5,6}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[246]\"]]]],\"SD\":[\"249\",\"[19]\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\"]],\"0\",\"0$1\"],\"SE\":[\"46\",\"[1-35-9]\\\\d{5,11}|4\\\\d{6,8}\",[[\"(8)(\\\\d{2,3})(\\\\d{2,3})(\\\\d{2})\",\"$1-$2 $3 $4\",[\"8\"],null,null,\"$1 $2 $3 $4\"],[\"([1-69]\\\\d)(\\\\d{2,3})(\\\\d{2})(\\\\d{2})\",\"$1-$2 $3 $4\",[\"1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90\"],null,null,\"$1 $2 $3 $4\"],[\"([1-469]\\\\d)(\\\\d{3})(\\\\d{2})\",\"$1-$2 $3\",[\"[12][136]|3[356]|4[0246]|6[03]|90\"],null,null,\"$1 $2 $3\"],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1-$2 $3 $4\",[\"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])\"],null,null,\"$1 $2 $3 $4\"],[\"(\\\\d{3})(\\\\d{2,3})(\\\\d{2})\",\"$1-$2 $3\",[\"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])\"],null,null,\"$1 $2 $3\"],[\"(7\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1-$2 $3 $4\",[\"7\"],null,null,\"$1 $2 $3 $4\"],[\"(77)(\\\\d{2})(\\\\d{2})\",\"$1-$2$3\",[\"77\"],null,null,\"$1 $2 $3\"],[\"(20)(\\\\d{2,3})(\\\\d{2})\",\"$1-$2 $3\",[\"20\"],null,null,\"$1 $2 $3\"],[\"(9[034]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1-$2 $3 $4\",[\"9[034]\"],null,null,\"$1 $2 $3 $4\"],[\"(9[034]\\\\d)(\\\\d{4})\",\"$1-$2\",[\"9[034]\"],null,null,\"$1 $2\"],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1-$2 $3 $4 $5\",[\"25[245]|67[3-6]\"],null,null,\"$1 $2 $3 $4 $5\"]],\"0\",\"0$1\"],\"SG\":[\"65\",\"[36]\\\\d{7}|[17-9]\\\\d{7,10}\",[[\"([3689]\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[369]|8[1-9]\"]],[\"(1[89]00)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1[89]0\",\"1[89]00\"]],[\"(7000)(\\\\d{4})(\\\\d{3})\",\"$1 $2 $3\",[\"700\",\"7000\"]],[\"(800)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"800\"]]]],\"SH\":[\"290\",\"[256]\\\\d{4}|8\\\\d{3}\",[],null,null,null,null,null,null,[\"2(?:[0-57-9]\\\\d|6[4-9])\\\\d{2}\",\"[56]\\\\d{4}\",null,null,null,null,null,null,\"262\\\\d{2}\"]],\"SI\":[\"386\",\"[1-7]\\\\d{6,7}|[89]\\\\d{4,7}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[12]|[34][24-8]|5[2-8]|7[3-8]\"],\"(0$1)\"],[\"([3-7]\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[37][01]|4[0139]|51|6\"]],[\"([89][09])(\\\\d{3,6})\",\"$1 $2\",[\"[89][09]\"]],[\"([58]\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"59|8[1-3]\"]]],\"0\",\"0$1\"],\"SJ\":[\"47\",\"0\\\\d{4}|[45789]\\\\d{7}\",[[\"([489]\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"[489]\"]],[\"([235-7]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[235-7]\"]]],null,null,null,null,null,null,[\"79\\\\d{6}\",\"(?:4[015-8]|5[89]|9\\\\d)\\\\d{6}\",\"80[01]\\\\d{5}\",\"82[09]\\\\d{5}\",\"880\\\\d{5}\",null,\"0\\\\d{4}|81(?:0(?:0[7-9]|1\\\\d)|5\\\\d{2})\\\\d{3}\",null,\"85[0-5]\\\\d{5}\",\"810(?:0[0-6]|[2-8]\\\\d)\\\\d{3}\"]],\"SK\":[\"421\",\"(?:[2-68]\\\\d{5,8}|9\\\\d{6,8})\",[[\"(2)(1[67])(\\\\d{3,4})\",\"$1 $2 $3\",[\"21[67]\"]],[\"([3-5]\\\\d)(\\\\d{2})(\\\\d{2,3})\",\"$1 $2 $3\",[\"[3-5]\"]],[\"(2)(\\\\d{3})(\\\\d{3})(\\\\d{2})\",\"$1/$2 $3 $4\",[\"2\"]],[\"([3-5]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1/$2 $3 $4\",[\"[3-5]\"]],[\"([689]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[689]\"]],[\"(9090)(\\\\d{3})\",\"$1 $2\",[\"909\",\"9090\"]]],\"0\",\"0$1\"],\"SL\":[\"232\",\"[2-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{6})\",\"$1 $2\"]],\"0\",\"(0$1)\"],\"SM\":[\"378\",\"[05-7]\\\\d{7,9}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[5-7]\"]],[\"(0549)(\\\\d{6})\",\"$1 $2\",[\"054\",\"0549\"],null,null,\"($1) $2\"],[\"(\\\\d{6})\",\"0549 $1\",[\"[89]\"],null,null,\"(0549) $1\"]],null,null,\"([89]\\\\d{5})\",\"0549$1\"],\"SN\":[\"221\",\"[3789]\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[379]\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"8\"]]]],\"SO\":[\"252\",\"[1-9]\\\\d{5,8}\",[[\"(\\\\d{6})\",\"$1\",[\"[134]\"]],[\"(\\\\d)(\\\\d{6})\",\"$1 $2\",[\"[13-5]|2[0-79]\"]],[\"(\\\\d)(\\\\d{7})\",\"$1 $2\",[\"24|[67]\"]],[\"(\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"8[125]\"]],[\"(\\\\d{2})(\\\\d{5,7})\",\"$1 $2\",[\"15|28|6[1-35-9]|799|9[2-9]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"3[59]|4[89]|6[24-6]|79|8[08]|90\"]]],\"0\"],\"SR\":[\"597\",\"[2-8]\\\\d{5,6}\",[[\"(\\\\d{3})(\\\\d{3})\",\"$1-$2\",[\"[2-4]|5[2-58]\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1-$2-$3\",[\"56\"]],[\"(\\\\d{3})(\\\\d{4})\",\"$1-$2\",[\"[6-8]\"]]]],\"SS\":[\"211\",\"[19]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",null,\"0$1\"]],\"0\"],\"ST\":[\"239\",\"[29]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"SV\":[\"503\",\"[267]\\\\d{7}|[89]\\\\d{6}(?:\\\\d{4})?\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[267]\"]],[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[89]\"]],[\"(\\\\d{3})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"[89]\"]]]],\"SX\":[\"1\",\"[5789]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"721\"],\"SY\":[\"963\",\"[1-59]\\\\d{7,8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[1-5]\"]],[\"(9\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"9\"]]],\"0\",\"0$1\",null,null,true],\"SZ\":[\"268\",\"[027]\\\\d{7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[027]\"]]]],\"TA\":[\"290\",\"8\\\\d{3}\",[],null,null,null,null,null,null,[\"8\\\\d{3}\"]],\"TC\":[\"1\",\"[5689]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"649\"],\"TD\":[\"235\",\"[2679]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"TG\":[\"228\",\"[279]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[279]\"]]]],\"TH\":[\"66\",\"1\\\\d{8,9}|[2-9]\\\\d{7,8}\",[[\"(2)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"2\"]],[\"([13-9]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"14|[3-9]\"]],[\"(1[89]00)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[89]0\",\"1[89]00\"],\"$1\"]],\"0\",\"0$1\"],\"TJ\":[\"992\",\"[3-57-9]\\\\d{8}\",[[\"([349]\\\\d{2})(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"[34]7|91[78]\"]],[\"([457-9]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"4[148]|[578]|9(?:[0235-9]|1[59])\"]],[\"(331700)(\\\\d)(\\\\d{2})\",\"$1 $2 $3\",[\"331\",\"3317\",\"33170\",\"331700\"]],[\"(\\\\d{4})(\\\\d)(\\\\d{4})\",\"$1 $2 $3\",[\"3[1-5]\",\"3(?:[1245]|3(?:[02-9]|1[0-589]))\"]]],\"8\",null,null,null,true],\"TK\":[\"690\",\"[2-47]\\\\d{3,6}\"],\"TL\":[\"670\",\"[2-489]\\\\d{6}|7\\\\d{6,7}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[2-489]|70\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"7[3-8]\"]]]],\"TM\":[\"993\",\"[1-6]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2-$3-$4\",[\"12\"]],[\"(\\\\d{2})(\\\\d{6})\",\"$1 $2\",[\"6\"],\"8 $1\"],[\"(\\\\d{3})(\\\\d)(\\\\d{2})(\\\\d{2})\",\"$1 $2-$3-$4\",[\"13|[2-5]\"]]],\"8\",\"(8 $1)\"],\"TN\":[\"216\",\"[2-57-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\"]]],\"TO\":[\"676\",\"[02-8]\\\\d{4,6}\",[[\"(\\\\d{2})(\\\\d{3})\",\"$1-$2\",[\"[1-6]|7[0-4]|8[05]\"]],[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"7[5-9]|8[47-9]\"]],[\"(\\\\d{4})(\\\\d{3})\",\"$1 $2\",[\"0\"]]]],\"TR\":[\"90\",\"[2-589]\\\\d{9}|444\\\\d{4}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[23]|4(?:[0-35-9]|4[0-35-9])\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"5[02-69]\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"51|[89]\"],\"0$1\"],[\"(444)(\\\\d{1})(\\\\d{3})\",\"$1 $2 $3\",[\"444\"]]],\"0\",null,null,null,true],\"TT\":[\"1\",\"[589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"868\"],\"TV\":[\"688\",\"[279]\\\\d{4,6}\"],\"TW\":[\"886\",\"2\\\\d{6,8}|[3-689]\\\\d{7,8}|7\\\\d{7,9}\",[[\"(20)(\\\\d)(\\\\d{4})\",\"$1 $2 $3\",[\"202\"]],[\"([258]0)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"20[013-9]|50[0-46-9]|80[0-79]\"]],[\"([2-8])(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"[25][2-8]|[346]|[78][1-9]\"]],[\"(9\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"9\"]],[\"(70)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"70\"]]],\"0\",\"0$1\"],\"TZ\":[\"255\",\"\\\\d{9}\",[[\"([24]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[24]\"]],[\"([67]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[67]\"]],[\"([89]\\\\d{2})(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"[89]\"]]],\"0\",\"0$1\"],\"UA\":[\"380\",\"[3-9]\\\\d{8}\",[[\"([3-9]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]\",\"[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]\"]],[\"([3-689]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90\",\"3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90\"]],[\"([3-6]\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])\",\"3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])\"]]],\"0\",\"0$1\"],\"UG\":[\"256\",\"\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"20[0-8]|4(?:6[45]|[7-9])|[7-9]\",\"20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]\"]],[\"(\\\\d{2})(\\\\d{7})\",\"$1 $2\",[\"3|4(?:[1-5]|6[0-36-9])\"]],[\"(2024)(\\\\d{5})\",\"$1 $2\",[\"202\",\"2024\"]]],\"0\",\"0$1\"],\"US\":[\"1\",\"[2-9]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,true,null,[\"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-258]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\\\d{6}\",null,\"8(?:00|33|44|55|66|77|88)[2-9]\\\\d{6}\",\"900[2-9]\\\\d{6}\",\"5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\\\d{6}\"]],\"UY\":[\"598\",\"[2489]\\\\d{6,7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[24]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"9[1-9]\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[89]0\"],\"0$1\"]],\"0\"],\"UZ\":[\"998\",\"[679]\\\\d{8}\",[[\"([679]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[679]\"]]],\"8\",\"8 $1\"],\"VA\":[\"39\",\"(?:0(?:878\\\\d{5}|6698\\\\d{5})|[1589]\\\\d{5,10}|3(?:[12457-9]\\\\d{8}|[36]\\\\d{7,9}))\",[[\"(\\\\d{2})(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"0[26]|55\"]],[\"(0[26])(\\\\d{4})(\\\\d{5})\",\"$1 $2 $3\",[\"0[26]\"]],[\"(0[26])(\\\\d{4,6})\",\"$1 $2\",[\"0[26]\"]],[\"(0\\\\d{2})(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"0[13-57-9][0159]\"]],[\"(\\\\d{3})(\\\\d{3,6})\",\"$1 $2\",[\"0[13-57-9][0159]|8(?:03|4[17]|9[245])\",\"0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))\"]],[\"(0\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"0[13-57-9][2-46-8]\"]],[\"(0\\\\d{3})(\\\\d{2,6})\",\"$1 $2\",[\"0[13-57-9][2-46-8]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[13]|8(?:00|4[08]|9[59])\",\"[13]|8(?:00|4[08]|9(?:5[5-9]|9))\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"894\",\"894[5-9]\"]],[\"(\\\\d{3})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"3\"]]],null,null,null,null,null,null,[\"06698\\\\d{5}\",\"3(?:[12457-9]\\\\d{8}|6\\\\d{7,8}|3\\\\d{7,9})\",\"80(?:0\\\\d{6}|3\\\\d{3})\",\"0878\\\\d{5}|1(?:44|6[346])\\\\d{6}|89(?:2\\\\d{3}|4(?:[0-4]\\\\d{2}|[5-9]\\\\d{4})|5(?:[0-4]\\\\d{2}|[5-9]\\\\d{6})|9\\\\d{6})\",\"1(?:78\\\\d|99)\\\\d{6}\",null,null,null,\"55\\\\d{8}\",\"84(?:[08]\\\\d{6}|[17]\\\\d{3})\"]],\"VC\":[\"1\",\"[5789]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"784\"],\"VE\":[\"58\",\"[24589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{7})\",\"$1-$2\"]],\"0\",\"0$1\"],\"VG\":[\"1\",\"[2589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"284\"],\"VI\":[\"1\",\"[3589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"340\"],\"VN\":[\"84\",\"1\\\\d{6,9}|2\\\\d{9}|6\\\\d{6,7}|7\\\\d{6}|8\\\\d{6,8}|9\\\\d{8}\",[[\"([17]99)(\\\\d{4})\",\"$1 $2\",[\"[17]99\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"2[48]\"]],[\"(80)(\\\\d{5})\",\"$1 $2\",[\"80\"]],[\"(69\\\\d)(\\\\d{4,5})\",\"$1 $2\",[\"69\"]],[\"(\\\\d{3})(\\\\d{4})(\\\\d{3})\",\"$1 $2 $3\",[\"2[0-35-79]\"]],[\"([89]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"8(?:8|9[89])|9\"]],[\"(1[2689]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:[26]|8[68]|99)\"]],[\"(86[89])(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"86[89]\"]],[\"(1[89]00)(\\\\d{4,6})\",\"$1 $2\",[\"1[89]0\",\"1[89]00\"],\"$1\"]],\"0\",\"0$1\",null,null,true],\"VU\":[\"678\",\"[2-57-9]\\\\d{4,6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[579]\"]]]],\"WF\":[\"681\",\"[4-8]\\\\d{5}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\"]]],\"WS\":[\"685\",\"[2-8]\\\\d{4,6}\",[[\"(8\\\\d{2})(\\\\d{3,4})\",\"$1 $2\",[\"8\"]],[\"(7\\\\d)(\\\\d{5})\",\"$1 $2\",[\"7\"]],[\"(\\\\d{5})\",\"$1\",[\"[2-6]\"]]]],\"YE\":[\"967\",\"[1-7]\\\\d{6,8}\",[[\"([1-7])(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[1-6]|7[24-68]\"]],[\"(7\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"7[0137]\"]]],\"0\",\"0$1\"],\"YT\":[\"262\",\"[268]\\\\d{8}\",[[\"([268]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[268]\"]]],\"0\",null,null,null,null,\"269|63\"],\"ZA\":[\"27\",\"[1-79]\\\\d{8}|8\\\\d{4,8}\",[[\"(860)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"860\"]],[\"(\\\\d{2})(\\\\d{3,4})\",\"$1 $2\",[\"8[1-4]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{2,3})\",\"$1 $2 $3\",[\"8[1-4]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[1-79]|8(?:[0-57]|6[1-9])\"]]],\"0\",\"0$1\"],\"ZM\":[\"260\",\"[289]\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{4})\",\"$1 $2\",null,\"$1\"],[\"([1-8])(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"[1-8]\"],\"$1\"],[\"([29]\\\\d)(\\\\d{7})\",\"$1 $2\",[\"[29]\"]],[\"(800)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"800\"]]],\"0\",\"0$1\"],\"ZW\":[\"263\",\"2(?:[0-57-9]\\\\d{3,8}|6(?:[14]\\\\d{7}|\\\\d{4}))|[13-69]\\\\d{4,9}|7\\\\d{8}|8[06]\\\\d{5,8}\",[[\"([49])(\\\\d{3})(\\\\d{2,4})\",\"$1 $2 $3\",[\"4|9[2-9]\"]],[\"(7\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"7\"]],[\"(86\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"86[24]\"]],[\"([2356]\\\\d{2})(\\\\d{3,5})\",\"$1 $2\",[\"2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329\"]],[\"([1-356]\\\\d)(\\\\d{3,5})\",\"$1 $2\",[\"1[3-9]|2[02569]|3[0-69]|5[05689]|6\"]],[\"([235]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[23]9|54\"]],[\"([25]\\\\d{3})(\\\\d{3,5})\",\"$1 $2\",[\"(?:25|54)8\",\"258[23]|5483\"]],[\"(8\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"86\"]],[\"(80\\\\d)(\\\\d{4})\",\"$1 $2\",[\"80\"]]],\"0\",\"0$1\"],\"001\":[\"979\",\"\\\\d{9}\",[[\"(\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\"]]]}}");

/***/ }),

/***/ "./node_modules/ng-circle-progress/fesm5/ng-circle-progress.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng-circle-progress/fesm5/ng-circle-progress.js ***!
  \*********************************************************************/
/*! exports provided: CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function() { return CircleProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function() { return CircleProgressOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function() { return NgCircleProgressModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var CircleProgressOptions = /** @class */ (function () {
    function CircleProgressOptions() {
        this.class = '';
        this.backgroundGradient = false;
        this.backgroundColor = 'transparent';
        this.backgroundGradientStopColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsFontWeight = 'normal';
        this.unitsColor = '#444444';
        this.outerStrokeGradient = false;
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeGradientStopColor = 'transparent';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.titleFontWeight = 'normal';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.subtitleFontWeight = 'normal';
        this.imageSrc = undefined;
        this.imageHeight = undefined;
        this.imageWidth = undefined;
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showImage = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
        this.startFromZero = true;
        this.showZeroOuterStroke = true;
        this.lazy = false;
    }
    return CircleProgressOptions;
}());
/** @dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351 */
var CircleProgressComponent = /** @class */ (function () {
    function CircleProgressComponent(defaultOptions, elRef, document) {
        var _this = this;
        this.elRef = elRef;
        this.document = document;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // <svg> of component
        this.svgElement = null;
        // whether <svg> is in viewport
        this.isInViewport = false;
        // event for notifying viewport change caused by scrolling or resizing
        this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;
        this.render = function () {
            _this.applyOptions();
            if (_this.options.lazy) {
                // Draw svg if it doesn't exist
                _this.svgElement === null && _this.draw(_this._lastPercent);
                // Draw it only when it's in the viewport
                if (_this.isInViewport) {
                    // Draw it at the latest position when I am in.
                    if (_this.options.animation && _this.options.animationDuration > 0) {
                        _this.animate(_this._lastPercent, _this.options.percent);
                    }
                    else {
                        _this.draw(_this.options.percent);
                    }
                    _this._lastPercent = _this.options.percent;
                }
            }
            else {
                if (_this.options.animation && _this.options.animationDuration > 0) {
                    _this.animate(_this._lastPercent, _this.options.percent);
                }
                else {
                    _this.draw(_this.options.percent);
                }
                _this._lastPercent = _this.options.percent;
            }
        };
        this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
            var angleInRadius = angleInDegrees * Math.PI / 180;
            var x = centerX + Math.sin(angleInRadius) * radius;
            var y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = function (percent) {
            var _a, _b, e_1, _c, e_2, _d;
            // make percent reasonable
            percent = (percent === undefined) ? _this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            var circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            var boxSize = _this.options.radius * 2 + _this.options.outerStrokeWidth * 2;
            if (_this.options.showBackground) {
                boxSize += (_this.options.backgroundStrokeWidth * 2 + _this.max(0, _this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            var centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            var startPoint = { x: centre.x, y: centre.y - _this.options.radius };
            // get the end point of the arc
            var endPoint = _this.polarToCartesian(centre.x, centre.y, _this.options.radius, 360 * (_this.options.clockwise ?
                circlePercent :
                (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (_this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            var largeArcFlag, sweepFlag;
            if (circlePercent > 50) {
                _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_this.options.clockwise ? [1, 1] : [1, 0], 2), largeArcFlag = _a[0], sweepFlag = _a[1];
            }
            else {
                _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_this.options.clockwise ? [0, 1] : [0, 0], 2), largeArcFlag = _b[0], sweepFlag = _b[1];
            }
            // percent may not equal the actual percent
            var titlePercent = _this.options.animateTitle ? percent : _this.options.percent;
            var titleTextPercent = titlePercent > _this.options.maxPercent ?
                _this.options.maxPercent.toFixed(_this.options.toFixed) + "+" : titlePercent.toFixed(_this.options.toFixed);
            var subtitlePercent = _this.options.animateSubtitle ? percent : _this.options.percent;
            // get title object
            var title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.titleColor,
                fontSize: _this.options.titleFontSize,
                fontWeight: _this.options.titleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (_this.options.titleFormat !== undefined && _this.options.titleFormat.constructor.name === 'Function') {
                var formatted = _this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(formatted);
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (_this.options.title instanceof Array) {
                        title.texts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_this.options.title);
                    }
                    else {
                        title.texts.push(_this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            var subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.subtitleColor,
                fontSize: _this.options.subtitleFontSize,
                fontWeight: _this.options.subtitleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (_this.options.subtitleFormat !== undefined && _this.options.subtitleFormat.constructor.name === 'Function') {
                var formatted = _this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(formatted);
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.subtitle instanceof Array) {
                    subtitle.texts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_this.options.subtitle);
                }
                else {
                    subtitle.texts.push(_this.options.subtitle.toString());
                }
            }
            // get units object
            var units = {
                text: "" + _this.options.units,
                fontSize: _this.options.unitsFontSize,
                fontWeight: _this.options.unitsFontWeight,
                color: _this.options.unitsColor
            };
            // get total count of text lines to be shown
            var rowCount = 0, rowNum = 1;
            _this.options.showTitle && (rowCount += title.texts.length);
            _this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (_this.options.showTitle) {
                try {
                    for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(title.texts), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var span = _f.value;
                        title.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                        rowNum++;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            // calc dy for each tspan for subtitle
            if (_this.options.showSubtitle) {
                try {
                    for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(subtitle.texts), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var span = _h.value;
                        subtitle.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                        rowNum++;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_d = _g.return)) _d.call(_g);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            // create ID for gradient element
            if (null === _this._gradientUUID) {
                _this._gradientUUID = _this.uuid();
            }
            // Bring it all together
            _this.svg = {
                viewBox: "0 0 " + boxSize + " " + boxSize,
                // Set both width and height to '100%' if it's responsive
                width: _this.options.responsive ? '100%' : boxSize,
                height: _this.options.responsive ? '100%' : boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius + _this.options.outerStrokeWidth / 2 + _this.options.backgroundPadding,
                    fill: _this.options.backgroundColor,
                    fillOpacity: _this.options.backgroundOpacity,
                    stroke: _this.options.backgroundStroke,
                    strokeWidth: _this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: "M " + startPoint.x + " " + startPoint.y + "\n        A " + _this.options.radius + " " + _this.options.radius + " 0 " + largeArcFlag + " " + sweepFlag + " " + endPoint.x + " " + endPoint.y,
                    stroke: _this.options.outerStrokeColor,
                    strokeWidth: _this.options.outerStrokeWidth,
                    strokeLinecap: _this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius - _this.options.space - _this.options.outerStrokeWidth / 2 - _this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: _this.options.innerStrokeColor,
                    strokeWidth: _this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
                image: {
                    x: centre.x - _this.options.imageWidth / 2,
                    y: centre.y - _this.options.imageHeight / 2,
                    src: _this.options.imageSrc,
                    width: _this.options.imageWidth,
                    height: _this.options.imageHeight,
                },
                outerLinearGradient: {
                    id: 'outer-linear-' + _this._gradientUUID,
                    colorStop1: _this.options.outerStrokeColor,
                    colorStop2: _this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : _this.options.outerStrokeGradientStopColor,
                },
                radialGradient: {
                    id: 'radial-' + _this._gradientUUID,
                    colorStop1: _this.options.backgroundColor,
                    colorStop2: _this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : _this.options.backgroundGradientStopColor,
                }
            };
        };
        this.getAnimationParameters = function (previousPercent, currentPercent) {
            var MIN_INTERVAL = 10;
            var times, step, interval;
            var fromPercent = _this.options.startFromZero ? 0 : (previousPercent < 0 ? 0 : previousPercent);
            var toPercent = currentPercent < 0 ? 0 : _this.min(currentPercent, _this.options.maxPercent);
            var delta = Math.abs(Math.round(toPercent - fromPercent));
            if (delta >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(delta / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = delta;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(_this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = _this.options.animationDuration / interval;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && delta > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(delta / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = function (previousPercent, currentPercent) {
            if (_this._timerSubscription && !_this._timerSubscription.closed) {
                _this._timerSubscription.unsubscribe();
            }
            var fromPercent = _this.options.startFromZero ? 0 : previousPercent;
            var toPercent = currentPercent;
            var _a = _this.getAnimationParameters(fromPercent, toPercent), step = _a.step, interval = _a.interval;
            var count = fromPercent;
            if (fromPercent < toPercent) {
                _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, interval).subscribe(function () {
                    count += step;
                    if (count <= toPercent) {
                        if (!_this.options.animateTitle && !_this.options.animateSubtitle && count >= 100) {
                            _this.draw(toPercent);
                            _this._timerSubscription.unsubscribe();
                        }
                        else {
                            _this.draw(count);
                        }
                    }
                    else {
                        _this.draw(toPercent);
                        _this._timerSubscription.unsubscribe();
                    }
                });
            }
            else {
                _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, interval).subscribe(function () {
                    count -= step;
                    if (count >= toPercent) {
                        if (!_this.options.animateTitle && !_this.options.animateSubtitle && toPercent >= 100) {
                            _this.draw(toPercent);
                            _this._timerSubscription.unsubscribe();
                        }
                        else {
                            _this.draw(count);
                        }
                    }
                    else {
                        _this.draw(toPercent);
                        _this._timerSubscription.unsubscribe();
                    }
                });
            }
        };
        this.emitClickEvent = function (event) {
            if (_this.options.renderOnClick) {
                _this.animate(0, _this.options.percent);
            }
            _this.onClick.emit(event);
        };
        this.applyOptions = function () {
            var e_3, _a;
            try {
                // the options of <circle-progress> may change already
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(_this.options)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name_1 = _c.value;
                    if (_this.hasOwnProperty(name_1) && _this[name_1] !== undefined) {
                        _this.options[name_1] = _this[name_1];
                    }
                    else if (_this.templateOptions && _this.templateOptions[name_1] !== undefined) {
                        _this.options[name_1] = _this.templateOptions[name_1];
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            // make sure key options valid
            _this.options.radius = Math.abs(+_this.options.radius);
            _this.options.space = +_this.options.space;
            _this.options.percent = +_this.options.percent > 0 ? +_this.options.percent : 0;
            _this.options.maxPercent = Math.abs(+_this.options.maxPercent);
            _this.options.animationDuration = Math.abs(_this.options.animationDuration);
            _this.options.outerStrokeWidth = Math.abs(+_this.options.outerStrokeWidth);
            _this.options.innerStrokeWidth = Math.abs(+_this.options.innerStrokeWidth);
            _this.options.backgroundPadding = +_this.options.backgroundPadding;
        };
        this.getRelativeY = function (rowNum, rowCount) {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            var initialOffset = -0.18, offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = function (a, b) {
            return a < b ? a : b;
        };
        this.max = function (a, b) {
            return a > b ? a : b;
        };
        this.uuid = function () {
            // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        this.findSvgElement = function () {
            if (this.svgElement === null) {
                var tags = this.elRef.nativeElement.getElementsByTagName('svg');
                if (tags.length > 0) {
                    this.svgElement = tags[0];
                }
            }
        };
        this.checkViewport = function () {
            _this.findSvgElement();
            var previousValue = _this.isInViewport;
            _this.isInViewport = _this.isElementInViewport(_this.svgElement);
            if (previousValue !== _this.isInViewport) {
                _this.onViewportChanged.emit({ oldValue: previousValue, newValue: _this.isInViewport });
            }
        };
        this.onScroll = function (event) {
            _this.checkViewport();
        };
        this.loadEventsForLazyMode = function () {
            if (_this.options.lazy) {
                _this.document.addEventListener('scroll', _this.onScroll, true);
                _this.window.addEventListener('resize', _this.onScroll, true);
                if (_this._viewportChangedSubscriber === null) {
                    _this._viewportChangedSubscriber = _this.onViewportChanged.subscribe(function (_a) {
                        var oldValue = _a.oldValue, newValue = _a.newValue;
                        newValue ? _this.render() : null;
                    });
                }
                // svgElement must be created in DOM before being checked.
                // Is there a better way to check the existence of svgElemnt?
                var _timer_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 50).subscribe(function () {
                    _this.svgElement === null ? _this.checkViewport() : _timer_1.unsubscribe();
                });
            }
        };
        this.unloadEventsForLazyMode = function () {
            // Remove event listeners
            _this.document.removeEventListener('scroll', _this.onScroll, true);
            _this.window.removeEventListener('resize', _this.onScroll, true);
            // Unsubscribe onViewportChanged
            if (_this._viewportChangedSubscriber !== null) {
                _this._viewportChangedSubscriber.unsubscribe();
                _this._viewportChangedSubscriber = null;
            }
        };
        this.document = document;
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    CircleProgressComponent.prototype.isDrawing = function () {
        return (this._timerSubscription && !this._timerSubscription.closed);
    };
    CircleProgressComponent.prototype.isElementInViewport = function (el) {
        // Return false if el has not been created in page.
        if (el === null || el === undefined)
            return false;
        // Check if the element is out of view due to a container scrolling
        var rect = el.getBoundingClientRect(), parent = el.parentNode, parentRect;
        do {
            parentRect = parent.getBoundingClientRect();
            if (rect.top >= parentRect.bottom)
                return false;
            if (rect.bottom <= parentRect.top)
                return false;
            if (rect.left >= parentRect.right)
                return false;
            if (rect.right <= parentRect.left)
                return false;
            parent = parent.parentNode;
        } while (parent != this.document.body);
        // Check its within the document viewport
        if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight))
            return false;
        if (rect.bottom <= 0)
            return false;
        if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth))
            return false;
        if (rect.right <= 0)
            return false;
        return true;
    };
    CircleProgressComponent.prototype.ngOnInit = function () {
        this.loadEventsForLazyMode();
    };
    CircleProgressComponent.prototype.ngOnDestroy = function () {
        this.unloadEventsForLazyMode();
    };
    CircleProgressComponent.prototype.ngOnChanges = function (changes) {
        this.render();
        if ('lazy' in changes) {
            changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CircleProgressComponent.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "class", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "backgroundGradient", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "backgroundColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "backgroundGradientStopColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "backgroundOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "backgroundStroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "backgroundStrokeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "backgroundPadding", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "space", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "percent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "toFixed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "maxPercent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "renderOnClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "units", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "unitsFontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "unitsFontWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "unitsColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "outerStrokeGradient", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "outerStrokeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "outerStrokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "outerStrokeGradientStopColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "outerStrokeLinecap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "innerStrokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleProgressComponent.prototype, "innerStrokeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], CircleProgressComponent.prototype, "titleFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleProgressComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "titleColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "titleFontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "titleFontWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], CircleProgressComponent.prototype, "subtitleFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleProgressComponent.prototype, "subtitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "subtitleColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "subtitleFontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "subtitleFontWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "imageSrc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "imageHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "imageWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "animation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "animateTitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "animateSubtitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "animationDuration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showTitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showSubtitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showUnits", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showBackground", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showInnerStroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "clockwise", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "responsive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "startFromZero", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showZeroOuterStroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "lazy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('options'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", CircleProgressOptions)
    ], CircleProgressComponent.prototype, "templateOptions", void 0);
    CircleProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'circle-progress',
            template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\"\n             [attr.viewBox]=\"svg.viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n             [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\" [attr.class]=\"options.class\">\n            <defs>\n                <linearGradient *ngIf=\"options.outerStrokeGradient\" [attr.id]=\"svg.outerLinearGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop1\"  [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </linearGradient>\n                <radialGradient *ngIf=\"options.backgroundGradient\" [attr.id]=\"svg.radialGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.radialGradient.colorStop1\" [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.radialGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </radialGradient>\n            </defs>\n            <ng-container *ngIf=\"options.showBackground\">\n                <circle *ngIf=\"!options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        [attr.fill]=\"svg.backgroundCircle.fill\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n                <circle *ngIf=\"options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        attr.fill=\"url(#{{svg.radialGradient.id}})\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n            </ng-container>            \n            <circle *ngIf=\"options.showInnerStroke\"\n                    [attr.cx]=\"svg.circle.cx\"\n                    [attr.cy]=\"svg.circle.cy\"\n                    [attr.r]=\"svg.circle.r\"\n                    [attr.fill]=\"svg.circle.fill\"\n                    [attr.stroke]=\"svg.circle.stroke\"\n                    [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n            <ng-container *ngIf=\"+options.percent!==0 || options.showZeroOuterStroke\">\n                <path *ngIf=\"!options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        [attr.stroke]=\"svg.path.stroke\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n                <path *ngIf=\"options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        attr.stroke=\"url(#{{svg.outerLinearGradient.id}})\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n            </ng-container>\n            <text *ngIf=\"!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)\"\n                  alignment-baseline=\"baseline\"\n                  [attr.x]=\"svg.circle.cx\"\n                  [attr.y]=\"svg.circle.cy\"\n                  [attr.text-anchor]=\"svg.title.textAnchor\">\n                <ng-container *ngIf=\"options.showTitle\">\n                    <tspan *ngFor=\"let tspan of svg.title.tspans\"\n                           [attr.x]=\"svg.title.x\"\n                           [attr.y]=\"svg.title.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.title.fontSize\"\n                           [attr.font-weight]=\"svg.title.fontWeight\"\n                           [attr.fill]=\"svg.title.color\">{{tspan.span}}</tspan>\n                </ng-container>\n                <tspan *ngIf=\"options.showUnits\"\n                       [attr.font-size]=\"svg.units.fontSize\"\n                       [attr.font-weight]=\"svg.units.fontWeight\"\n                       [attr.fill]=\"svg.units.color\">{{svg.units.text}}</tspan>\n                <ng-container *ngIf=\"options.showSubtitle\">\n                    <tspan *ngFor=\"let tspan of svg.subtitle.tspans\"\n                           [attr.x]=\"svg.subtitle.x\"\n                           [attr.y]=\"svg.subtitle.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.subtitle.fontSize\"\n                           [attr.font-weight]=\"svg.subtitle.fontWeight\"\n                           [attr.fill]=\"svg.subtitle.color\">{{tspan.span}}</tspan>\n                </ng-container>\n            </text>\n            <image *ngIf=\"options.showImage\" preserveAspectRatio=\"none\" \n                [attr.height]=\"svg.image.height\"\n                [attr.width]=\"svg.image.width\"\n                [attr.xlink:href]=\"svg.image.src\"\n                [attr.x]=\"svg.image.x\"\n                [attr.y]=\"svg.image.y\"\n            />\n        </svg>\n    "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CircleProgressOptions, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])
    ], CircleProgressComponent);
    return CircleProgressComponent;
}());

var NgCircleProgressModule = /** @class */ (function () {
    function NgCircleProgressModule() {
    }
    NgCircleProgressModule_1 = NgCircleProgressModule;
    NgCircleProgressModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: NgCircleProgressModule_1,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    };
    var NgCircleProgressModule_1;
    NgCircleProgressModule = NgCircleProgressModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                CircleProgressComponent,
            ],
            exports: [
                CircleProgressComponent,
            ]
        })
    ], NgCircleProgressModule);
    return NgCircleProgressModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-circle-progress.js.map


/***/ }),

/***/ "./node_modules/ng2-validation/dist/base64/directive.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/base64/directive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/base64/index.js");
var BASE64_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return Base64Validator; }),
    multi: true
};
var Base64Validator = (function () {
    function Base64Validator() {
    }
    Base64Validator.prototype.validate = function (c) {
        return _1.base64(c);
    };
    return Base64Validator;
}());
Base64Validator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                providers: [BASE64_VALIDATOR]
            },] },
];
/** @nocollapse */
Base64Validator.ctorParameters = function () { return []; };
exports.Base64Validator = Base64Validator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/base64/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/base64/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/base64/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/base64/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/base64/validator.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/base64/validator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.base64 = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { 'base64': true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/credit-card/directive.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/credit-card/directive.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/credit-card/index.js");
var CREDIT_CARD_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return CreditCardValidator; }),
    multi: true
};
var CreditCardValidator = (function () {
    function CreditCardValidator() {
    }
    CreditCardValidator.prototype.validate = function (c) {
        return _1.creditCard(c);
    };
    return CreditCardValidator;
}());
CreditCardValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                providers: [CREDIT_CARD_VALIDATOR]
            },] },
];
/** @nocollapse */
CreditCardValidator.ctorParameters = function () { return []; };
exports.CreditCardValidator = CreditCardValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/credit-card/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/credit-card/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/credit-card/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/credit-card/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/credit-card/validator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/credit-card/validator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.creditCard = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    var sanitized = v.replace(/[^0-9]+/g, '');
    // problem with chrome
    if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(sanitized))) {
        return { creditCard: true };
    }
    var sum = 0;
    var digit;
    var tmpNum;
    var shouldDouble;
    for (var i = sanitized.length - 1; i >= 0; i--) {
        digit = sanitized.substring(i, (i + 1));
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
            tmpNum *= 2;
            if (tmpNum >= 10) {
                sum += ((tmpNum % 10) + 1);
            }
            else {
                sum += tmpNum;
            }
        }
        else {
            sum += tmpNum;
        }
        shouldDouble = !shouldDouble;
    }
    if (Boolean((sum % 10) === 0 ? sanitized : false)) {
        return null;
    }
    return { creditCard: true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/date-ios/directive.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/date-ios/directive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/date-ios/index.js");
var DATE_ISO_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return DateISOValidator; }),
    multi: true
};
var DateISOValidator = (function () {
    function DateISOValidator() {
    }
    DateISOValidator.prototype.validate = function (c) {
        return _1.dateISO(c);
    };
    return DateISOValidator;
}());
DateISOValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                providers: [DATE_ISO_VALIDATOR]
            },] },
];
/** @nocollapse */
DateISOValidator.ctorParameters = function () { return []; };
exports.DateISOValidator = DateISOValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/date-ios/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/date-ios/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/date-ios/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/date-ios/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/date-ios/validator.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/date-ios/validator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.dateISO = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/date/directive.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/date/directive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/date/index.js");
var DATE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return DateValidator; }),
    multi: true
};
var DateValidator = (function () {
    function DateValidator() {
    }
    DateValidator.prototype.validate = function (c) {
        return _1.date(c);
    };
    return DateValidator;
}());
DateValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                providers: [DATE_VALIDATOR]
            },] },
];
/** @nocollapse */
DateValidator.ctorParameters = function () { return []; };
exports.DateValidator = DateValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/date/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/date/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/date/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/date/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/date/validator.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/date/validator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.date = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return lang_1.isDate(v) ? null : { date: true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/digits/directive.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/digits/directive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/digits/index.js");
var DIGITS_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return DigitsValidator; }),
    multi: true
};
var DigitsValidator = (function () {
    function DigitsValidator() {
    }
    DigitsValidator.prototype.validate = function (c) {
        return _1.digits(c);
    };
    return DigitsValidator;
}());
DigitsValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                providers: [DIGITS_VALIDATOR]
            },] },
];
/** @nocollapse */
DigitsValidator.ctorParameters = function () { return []; };
exports.DigitsValidator = DigitsValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/digits/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/digits/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/digits/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/digits/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/digits/validator.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/digits/validator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.digits = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return /^\d+$/.test(v) ? null : { digits: true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/email/directive.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/email/directive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var index_1 = __webpack_require__(/*! ./index */ "./node_modules/ng2-validation/dist/email/index.js");
var EMAIL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return EmailValidator; }),
    multi: true
};
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.validate = function (c) {
        return index_1.email(c);
    };
    return EmailValidator;
}());
EmailValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            },] },
];
/** @nocollapse */
EmailValidator.ctorParameters = function () { return []; };
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/email/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/email/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/email/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/email/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/email/validator.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/email/validator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.email = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/equal-to/directive.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/equal-to/directive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/equal-to/index.js");
var EQUAL_TO_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return EqualToValidator; }),
    multi: true
};
var EqualToValidator = (function () {
    function EqualToValidator() {
    }
    EqualToValidator.prototype.ngOnInit = function () {
        this.validator = _1.equalTo(this.equalTo);
    };
    EqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return EqualToValidator;
}());
EqualToValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                providers: [EQUAL_TO_VALIDATOR]
            },] },
];
/** @nocollapse */
EqualToValidator.ctorParameters = function () { return []; };
EqualToValidator.propDecorators = {
    'equalTo': [{ type: core_1.Input },],
};
exports.EqualToValidator = EqualToValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/equal-to/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/equal-to/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/equal-to/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/equal-to/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/equal-to/validator.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/equal-to/validator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.equalTo = function (equalControl) {
    var subscribe = false;
    return function (control) {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
            });
        }
        var v = control.value;
        return equalControl.value === v ? null : { equalTo: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/equal/directive.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/equal/directive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var index_1 = __webpack_require__(/*! ./index */ "./node_modules/ng2-validation/dist/equal/index.js");
var EQUAL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return EqualValidator; }),
    multi: true
};
var EqualValidator = (function () {
    function EqualValidator() {
    }
    EqualValidator.prototype.ngOnInit = function () {
        this.validator = index_1.equal(this.equal);
    };
    EqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'equal') {
                this.validator = index_1.equal(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    EqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    EqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return EqualValidator;
}());
EqualValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
                providers: [EQUAL_VALIDATOR]
            },] },
];
/** @nocollapse */
EqualValidator.ctorParameters = function () { return []; };
EqualValidator.propDecorators = {
    'equal': [{ type: core_1.Input },],
};
exports.EqualValidator = EqualValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/equal/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/equal/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/equal/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/equal/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/equal/validator.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/equal/validator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.equal = function (val) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return val === v ? null : { equal: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/greater-than-equal/directive.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/greater-than-equal/directive.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/greater-than-equal/index.js");
var GREATER_THAN_EQUAL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return GreaterThanEqualValidator; }),
    multi: true
};
var GreaterThanEqualValidator = (function () {
    function GreaterThanEqualValidator() {
    }
    GreaterThanEqualValidator.prototype.ngOnInit = function () {
        this.validator = _1.gte(this.gte);
    };
    GreaterThanEqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'gte') {
                this.validator = _1.gte(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    GreaterThanEqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    GreaterThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return GreaterThanEqualValidator;
}());
GreaterThanEqualValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
                providers: [GREATER_THAN_EQUAL_VALIDATOR]
            },] },
];
/** @nocollapse */
GreaterThanEqualValidator.ctorParameters = function () { return []; };
GreaterThanEqualValidator.propDecorators = {
    'gte': [{ type: core_1.Input },],
};
exports.GreaterThanEqualValidator = GreaterThanEqualValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/greater-than-equal/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/greater-than-equal/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/greater-than-equal/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/greater-than-equal/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/greater-than-equal/validator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/greater-than-equal/validator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.gte = function (gte) {
    return function (control) {
        if (!lang_1.isPresent(gte))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v >= +gte ? null : { gte: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/greater-than/directive.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/greater-than/directive.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/greater-than/index.js");
var GREATER_THAN_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return GreaterThanValidator; }),
    multi: true
};
var GreaterThanValidator = (function () {
    function GreaterThanValidator() {
    }
    GreaterThanValidator.prototype.ngOnInit = function () {
        this.validator = _1.gt(this.gt);
    };
    GreaterThanValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'gt') {
                this.validator = _1.gt(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    GreaterThanValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    GreaterThanValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return GreaterThanValidator;
}());
GreaterThanValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
                providers: [GREATER_THAN_VALIDATOR]
            },] },
];
/** @nocollapse */
GreaterThanValidator.ctorParameters = function () { return []; };
GreaterThanValidator.propDecorators = {
    'gt': [{ type: core_1.Input },],
};
exports.GreaterThanValidator = GreaterThanValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/greater-than/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/greater-than/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/greater-than/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/greater-than/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/greater-than/validator.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/greater-than/validator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.gt = function (gt) {
    return function (control) {
        if (!lang_1.isPresent(gt))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v > +gt ? null : { gt: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ng2-validation/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var base64_1 = __webpack_require__(/*! ./base64 */ "./node_modules/ng2-validation/dist/base64/index.js");
var credit_card_1 = __webpack_require__(/*! ./credit-card */ "./node_modules/ng2-validation/dist/credit-card/index.js");
var date_1 = __webpack_require__(/*! ./date */ "./node_modules/ng2-validation/dist/date/index.js");
var date_ios_1 = __webpack_require__(/*! ./date-ios */ "./node_modules/ng2-validation/dist/date-ios/index.js");
var digits_1 = __webpack_require__(/*! ./digits */ "./node_modules/ng2-validation/dist/digits/index.js");
var email_1 = __webpack_require__(/*! ./email */ "./node_modules/ng2-validation/dist/email/index.js");
var equal_1 = __webpack_require__(/*! ./equal */ "./node_modules/ng2-validation/dist/equal/index.js");
var equal_to_1 = __webpack_require__(/*! ./equal-to */ "./node_modules/ng2-validation/dist/equal-to/index.js");
var greater_than_1 = __webpack_require__(/*! ./greater-than */ "./node_modules/ng2-validation/dist/greater-than/index.js");
var greater_than_equal_1 = __webpack_require__(/*! ./greater-than-equal */ "./node_modules/ng2-validation/dist/greater-than-equal/index.js");
var json_1 = __webpack_require__(/*! ./json */ "./node_modules/ng2-validation/dist/json/index.js");
var less_than_1 = __webpack_require__(/*! ./less-than */ "./node_modules/ng2-validation/dist/less-than/index.js");
var less_than_equal_1 = __webpack_require__(/*! ./less-than-equal */ "./node_modules/ng2-validation/dist/less-than-equal/index.js");
var max_1 = __webpack_require__(/*! ./max */ "./node_modules/ng2-validation/dist/max/index.js");
var max_date_1 = __webpack_require__(/*! ./max-date */ "./node_modules/ng2-validation/dist/max-date/index.js");
var min_1 = __webpack_require__(/*! ./min */ "./node_modules/ng2-validation/dist/min/index.js");
var min_date_1 = __webpack_require__(/*! ./min-date */ "./node_modules/ng2-validation/dist/min-date/index.js");
var not_equal_1 = __webpack_require__(/*! ./not-equal */ "./node_modules/ng2-validation/dist/not-equal/index.js");
var not_equal_to_1 = __webpack_require__(/*! ./not-equal-to */ "./node_modules/ng2-validation/dist/not-equal-to/index.js");
var number_1 = __webpack_require__(/*! ./number */ "./node_modules/ng2-validation/dist/number/index.js");
var phone_1 = __webpack_require__(/*! ./phone */ "./node_modules/ng2-validation/dist/phone/index.js");
var range_1 = __webpack_require__(/*! ./range */ "./node_modules/ng2-validation/dist/range/index.js");
var range_length_1 = __webpack_require__(/*! ./range-length */ "./node_modules/ng2-validation/dist/range-length/index.js");
var url_1 = __webpack_require__(/*! ./url */ "./node_modules/ng2-validation/dist/url/index.js");
var uuid_1 = __webpack_require__(/*! ./uuid */ "./node_modules/ng2-validation/dist/uuid/index.js");
exports.CustomValidators = {
    base64: base64_1.base64,
    creditCard: credit_card_1.creditCard,
    date: date_1.date,
    dateISO: date_ios_1.dateISO,
    digits: digits_1.digits,
    email: email_1.email,
    equal: equal_1.equal,
    equalTo: equal_to_1.equalTo,
    gt: greater_than_1.gt,
    gte: greater_than_equal_1.gte,
    json: json_1.json,
    lt: less_than_1.lt,
    lte: less_than_equal_1.lte,
    max: max_1.max,
    maxDate: max_date_1.maxDate,
    min: min_1.min,
    minDate: min_date_1.minDate,
    notEqual: not_equal_1.notEqual,
    notEqualTo: not_equal_to_1.notEqualTo,
    number: number_1.number,
    phone: phone_1.phone,
    range: range_1.range,
    rangeLength: range_length_1.rangeLength,
    url: url_1.url,
    uuid: uuid_1.uuid
};
var CUSTOM_FORM_DIRECTIVES = [
    base64_1.Base64Validator,
    credit_card_1.CreditCardValidator,
    date_1.DateValidator,
    date_ios_1.DateISOValidator,
    digits_1.DigitsValidator,
    email_1.EmailValidator,
    equal_1.EqualValidator,
    equal_to_1.EqualToValidator,
    greater_than_1.GreaterThanValidator,
    greater_than_equal_1.GreaterThanEqualValidator,
    json_1.JSONValidator,
    less_than_1.LessThanValidator,
    less_than_equal_1.LessThanEqualValidator,
    max_1.MaxValidator,
    max_date_1.MaxDateValidator,
    min_1.MinValidator,
    min_date_1.MinDateValidator,
    not_equal_1.NotEqualValidator,
    not_equal_to_1.NotEqualToValidator,
    number_1.NumberValidator,
    phone_1.PhoneValidator,
    range_1.RangeValidator,
    range_length_1.RangeLengthValidator,
    url_1.UrlValidator,
    uuid_1.UUIDValidator
];
var CustomFormsModule = (function () {
    function CustomFormsModule() {
    }
    return CustomFormsModule;
}());
CustomFormsModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [CUSTOM_FORM_DIRECTIVES],
                exports: [CUSTOM_FORM_DIRECTIVES]
            },] },
];
/** @nocollapse */
CustomFormsModule.ctorParameters = function () { return []; };
exports.CustomFormsModule = CustomFormsModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/json/directive.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/json/directive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/json/index.js");
var JSON_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return JSONValidator; }),
    multi: true
};
var JSONValidator = (function () {
    function JSONValidator() {
    }
    JSONValidator.prototype.validate = function (c) {
        return _1.json(c);
    };
    return JSONValidator;
}());
JSONValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[json][formControlName],[json][formControl],[json][ngModel]',
                providers: [JSON_VALIDATOR]
            },] },
];
/** @nocollapse */
JSONValidator.ctorParameters = function () { return []; };
exports.JSONValidator = JSONValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/json/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/json/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/json/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/json/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/json/validator.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/json/validator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.json = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    try {
        var obj = JSON.parse(v);
        if (Boolean(obj) && typeof obj === 'object') {
            return null;
        }
    }
    catch (e) {
    }
    return { json: true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/less-than-equal/directive.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/less-than-equal/directive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/less-than-equal/index.js");
var LESS_THAN_EQUAL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return LessThanEqualValidator; }),
    multi: true
};
var LessThanEqualValidator = (function () {
    function LessThanEqualValidator() {
    }
    LessThanEqualValidator.prototype.ngOnInit = function () {
        this.validator = _1.lte(this.lte);
    };
    LessThanEqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'lte') {
                this.validator = _1.lte(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    LessThanEqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    LessThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return LessThanEqualValidator;
}());
LessThanEqualValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
                providers: [LESS_THAN_EQUAL_VALIDATOR]
            },] },
];
/** @nocollapse */
LessThanEqualValidator.ctorParameters = function () { return []; };
LessThanEqualValidator.propDecorators = {
    'lte': [{ type: core_1.Input },],
};
exports.LessThanEqualValidator = LessThanEqualValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/less-than-equal/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/less-than-equal/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/less-than-equal/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/less-than-equal/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/less-than-equal/validator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/less-than-equal/validator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.lte = function (lte) {
    return function (control) {
        if (!lang_1.isPresent(lte))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v <= +lte ? null : { lte: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/less-than/directive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/less-than/directive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/less-than/index.js");
var LESS_THAN_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return LessThanValidator; }),
    multi: true
};
var LessThanValidator = (function () {
    function LessThanValidator() {
    }
    LessThanValidator.prototype.ngOnInit = function () {
        this.validator = _1.lt(this.lt);
    };
    LessThanValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'lt') {
                this.validator = _1.lt(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    LessThanValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    LessThanValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return LessThanValidator;
}());
LessThanValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                providers: [LESS_THAN_VALIDATOR]
            },] },
];
/** @nocollapse */
LessThanValidator.ctorParameters = function () { return []; };
LessThanValidator.propDecorators = {
    'lt': [{ type: core_1.Input },],
};
exports.LessThanValidator = LessThanValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/less-than/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/less-than/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/less-than/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/less-than/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/less-than/validator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/less-than/validator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.lt = function (lt) {
    return function (control) {
        if (!lang_1.isPresent(lt))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v < +lt ? null : { lt: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/max-date/directive.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/max-date/directive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/max-date/index.js");
var MAX_DATE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MaxDateValidator; }),
    multi: true
};
var MaxDateValidator = (function () {
    function MaxDateValidator() {
    }
    MaxDateValidator.prototype.ngOnInit = function () {
        this.validator = _1.maxDate(this.maxDate);
    };
    MaxDateValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'maxDate') {
                this.validator = _1.maxDate(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MaxDateValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MaxDateValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MaxDateValidator;
}());
MaxDateValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                providers: [MAX_DATE_VALIDATOR]
            },] },
];
/** @nocollapse */
MaxDateValidator.ctorParameters = function () { return []; };
MaxDateValidator.propDecorators = {
    'maxDate': [{ type: core_1.Input },],
};
exports.MaxDateValidator = MaxDateValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/max-date/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/max-date/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/max-date/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/max-date/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/max-date/validator.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/max-date/validator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.maxDate = function (maxDate) {
    if (!lang_1.isDate(maxDate) && !(maxDate instanceof Function)) {
        throw Error('maxDate value must be or return a formatted date');
    }
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var d = new Date(control.value);
        if (!lang_1.isDate(d))
            return { maxDate: true };
        if (maxDate instanceof Function)
            maxDate = maxDate();
        return d <= new Date(maxDate) ? null : { maxDate: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/max/directive.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/max/directive.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/max/index.js");
var MAX_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MaxValidator; }),
    multi: true
};
var MaxValidator = (function () {
    function MaxValidator() {
    }
    MaxValidator.prototype.ngOnInit = function () {
        this.validator = _1.max(this.max);
    };
    MaxValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'max') {
                this.validator = _1.max(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MaxValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MaxValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MaxValidator;
}());
MaxValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                providers: [MAX_VALIDATOR]
            },] },
];
/** @nocollapse */
MaxValidator.ctorParameters = function () { return []; };
MaxValidator.propDecorators = {
    'max': [{ type: core_1.Input },],
};
exports.MaxValidator = MaxValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/max/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-validation/dist/max/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/max/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/max/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/max/validator.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/max/validator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.max = function (max) {
    return function (control) {
        if (!lang_1.isPresent(max))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v <= +max ? null : { actualValue: v, requiredValue: +max, max: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/min-date/directive.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/min-date/directive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/min-date/index.js");
var MIN_DATE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MinDateValidator; }),
    multi: true
};
var MinDateValidator = (function () {
    function MinDateValidator() {
    }
    MinDateValidator.prototype.ngOnInit = function () {
        this.validator = _1.minDate(this.minDate);
    };
    MinDateValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'minDate') {
                this.validator = _1.minDate(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MinDateValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MinDateValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MinDateValidator;
}());
MinDateValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
                providers: [MIN_DATE_VALIDATOR]
            },] },
];
/** @nocollapse */
MinDateValidator.ctorParameters = function () { return []; };
MinDateValidator.propDecorators = {
    'minDate': [{ type: core_1.Input },],
};
exports.MinDateValidator = MinDateValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/min-date/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/min-date/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/min-date/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/min-date/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/min-date/validator.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/min-date/validator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.minDate = function (minDate) {
    if (!lang_1.isDate(minDate) && !(minDate instanceof Function)) {
        throw Error('minDate value must be or return a formatted date');
    }
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var d = new Date(control.value);
        if (!lang_1.isDate(d))
            return { minDate: true };
        if (minDate instanceof Function)
            minDate = minDate();
        return d >= new Date(minDate) ? null : { minDate: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/min/directive.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/min/directive.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/min/index.js");
var MIN_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MinValidator; }),
    multi: true
};
var MinValidator = (function () {
    function MinValidator() {
    }
    MinValidator.prototype.ngOnInit = function () {
        this.validator = _1.min(this.min);
    };
    MinValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'min') {
                this.validator = _1.min(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MinValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MinValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MinValidator;
}());
MinValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                providers: [MIN_VALIDATOR]
            },] },
];
/** @nocollapse */
MinValidator.ctorParameters = function () { return []; };
MinValidator.propDecorators = {
    'min': [{ type: core_1.Input },],
};
exports.MinValidator = MinValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/min/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-validation/dist/min/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/min/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/min/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/min/validator.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/min/validator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.min = function (min) {
    return function (control) {
        if (!lang_1.isPresent(min))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v >= +min ? null : { actualValue: v, requiredValue: +min, min: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/not-equal-to/directive.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/not-equal-to/directive.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/not-equal-to/index.js");
var NOT_EQUAL_TO_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return NotEqualToValidator; }),
    multi: true
};
var NotEqualToValidator = (function () {
    function NotEqualToValidator() {
    }
    NotEqualToValidator.prototype.ngOnInit = function () {
        this.validator = _1.notEqualTo(this.notEqualTo);
    };
    NotEqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return NotEqualToValidator;
}());
NotEqualToValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                providers: [NOT_EQUAL_TO_VALIDATOR]
            },] },
];
/** @nocollapse */
NotEqualToValidator.ctorParameters = function () { return []; };
NotEqualToValidator.propDecorators = {
    'notEqualTo': [{ type: core_1.Input },],
};
exports.NotEqualToValidator = NotEqualToValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/not-equal-to/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/not-equal-to/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/not-equal-to/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/not-equal-to/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/not-equal-to/validator.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/not-equal-to/validator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.notEqualTo = function (notEqualControl) {
    var subscribe = false;
    return function (control) {
        if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
            });
        }
        var v = control.value;
        return notEqualControl.value !== v ? null : { notEqualTo: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/not-equal/directive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/not-equal/directive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var index_1 = __webpack_require__(/*! ./index */ "./node_modules/ng2-validation/dist/not-equal/index.js");
var NOT_EQUAL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return NotEqualValidator; }),
    multi: true
};
var NotEqualValidator = (function () {
    function NotEqualValidator() {
    }
    NotEqualValidator.prototype.ngOnInit = function () {
        this.validator = index_1.notEqual(this.notEqual);
    };
    NotEqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'notEqual') {
                this.validator = index_1.notEqual(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    NotEqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    NotEqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return NotEqualValidator;
}());
NotEqualValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
                providers: [NOT_EQUAL_VALIDATOR]
            },] },
];
/** @nocollapse */
NotEqualValidator.ctorParameters = function () { return []; };
NotEqualValidator.propDecorators = {
    'notEqual': [{ type: core_1.Input },],
};
exports.NotEqualValidator = NotEqualValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/not-equal/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/not-equal/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/not-equal/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/not-equal/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/not-equal/validator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/not-equal/validator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.notEqual = function (val) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return val !== v ? null : { notEqual: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/number/directive.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/number/directive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/number/index.js");
var NUMBER_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return NumberValidator; }),
    multi: true
};
var NumberValidator = (function () {
    function NumberValidator() {
    }
    NumberValidator.prototype.validate = function (c) {
        return _1.number(c);
    };
    return NumberValidator;
}());
NumberValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                providers: [NUMBER_VALIDATOR]
            },] },
];
/** @nocollapse */
NumberValidator.ctorParameters = function () { return []; };
exports.NumberValidator = NumberValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/number/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/number/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/number/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/number/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/number/validator.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/number/validator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.number = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'number': true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/phone/directive.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/phone/directive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/phone/index.js");
var PHONE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return PhoneValidator; }),
    multi: true
};
var PhoneValidator = (function () {
    function PhoneValidator() {
    }
    PhoneValidator.prototype.ngOnInit = function () {
        this.validator = _1.phone(this.phone);
    };
    PhoneValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'phone') {
                this.validator = _1.phone(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    PhoneValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    PhoneValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return PhoneValidator;
}());
PhoneValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[phone][formControlName],[phone][formControl],[phone][ngModel]',
                providers: [PHONE_VALIDATOR]
            },] },
];
/** @nocollapse */
PhoneValidator.ctorParameters = function () { return []; };
PhoneValidator.propDecorators = {
    'phone': [{ type: core_1.Input },],
};
exports.PhoneValidator = PhoneValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/phone/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/phone/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/phone/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/phone/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/phone/validator.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/phone/validator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var libphonenumber_js_1 = __webpack_require__(/*! libphonenumber-js */ "./node_modules/libphonenumber-js/index.es6.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.phone = function (country) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return libphonenumber_js_1.isValidNumber({ phone: v, country: country }) ? null : { phone: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/range-length/directive.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/range-length/directive.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/range-length/index.js");
var RANGE_LENGTH_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return RangeLengthValidator; }),
    multi: true
};
var RangeLengthValidator = (function () {
    function RangeLengthValidator() {
    }
    RangeLengthValidator.prototype.ngOnInit = function () {
        this.validator = _1.rangeLength(this.rangeLength);
    };
    RangeLengthValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'rangeLength') {
                this.validator = _1.rangeLength(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    RangeLengthValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    RangeLengthValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return RangeLengthValidator;
}());
RangeLengthValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                providers: [RANGE_LENGTH_VALIDATOR]
            },] },
];
/** @nocollapse */
RangeLengthValidator.ctorParameters = function () { return []; };
RangeLengthValidator.propDecorators = {
    'rangeLength': [{ type: core_1.Input },],
};
exports.RangeLengthValidator = RangeLengthValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/range-length/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/range-length/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/range-length/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/range-length/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/range-length/validator.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/range-length/validator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.rangeLength = function (rangeLength) {
    return function (control) {
        if (!lang_1.isPresent(rangeLength))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : { rangeLength: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/range/directive.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/range/directive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/range/index.js");
var RANGE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return RangeValidator; }),
    multi: true
};
var RangeValidator = (function () {
    function RangeValidator() {
    }
    RangeValidator.prototype.ngOnInit = function () {
        this.validator = _1.range(this.range);
    };
    RangeValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'range') {
                this.validator = _1.range(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    RangeValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    RangeValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return RangeValidator;
}());
RangeValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[range][formControlName],[range][formControl],[range][ngModel]',
                providers: [RANGE_VALIDATOR]
            },] },
];
/** @nocollapse */
RangeValidator.ctorParameters = function () { return []; };
RangeValidator.propDecorators = {
    'range': [{ type: core_1.Input },],
};
exports.RangeValidator = RangeValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/range/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/range/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/range/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/range/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/range/validator.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/range/validator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.range = function (range) {
    return function (control) {
        if (!lang_1.isPresent(range))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v >= range[0] && v <= range[1] ? null : { actualValue: v, requiredValue: range, range: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/url/directive.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/url/directive.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/url/index.js");
var URL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return UrlValidator; }),
    multi: true
};
var UrlValidator = (function () {
    function UrlValidator() {
    }
    UrlValidator.prototype.validate = function (c) {
        return _1.url(c);
    };
    return UrlValidator;
}());
UrlValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [URL_VALIDATOR]
            },] },
];
/** @nocollapse */
UrlValidator.ctorParameters = function () { return []; };
exports.UrlValidator = UrlValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/url/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-validation/dist/url/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/url/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/url/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/url/validator.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/url/validator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.url = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/util/lang.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-validation/dist/util/lang.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
exports.isPresent = isPresent;
function isDate(obj) {
    return !/Invalid|NaN/.test(new Date(obj).toString());
}
exports.isDate = isDate;
//# sourceMappingURL=lang.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/uuid/directive.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/uuid/directive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/uuid/index.js");
var UUID_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return UUIDValidator; }),
    multi: true
};
var UUIDValidator = (function () {
    function UUIDValidator() {
    }
    UUIDValidator.prototype.ngOnInit = function () {
        this.validator = _1.uuid(this.uuid);
    };
    UUIDValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'uuid') {
                this.validator = _1.uuid(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    UUIDValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    UUIDValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return UUIDValidator;
}());
UUIDValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                providers: [UUID_VALIDATOR]
            },] },
];
/** @nocollapse */
UUIDValidator.ctorParameters = function () { return []; };
UUIDValidator.propDecorators = {
    'uuid': [{ type: core_1.Input },],
};
exports.UUIDValidator = UUIDValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/uuid/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/uuid/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/uuid/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/uuid/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/uuid/validator.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/uuid/validator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
var uuids = {
    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
exports.uuid = function (version) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        var pattern = uuids[version] || uuids.all;
        return (new RegExp(pattern)).test(v) ? null : { uuid: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/layouts/basic/basic.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/layouts/basic/basic.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row text-left\">\n  <div class=\"col-sm-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">انتخاب بیمه شده</h4>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <div *ngIf=\"superadmin\" class=\"table-responsive\">\n            <div class=\"row text-center\" style=\"margin: auto;\">\n              <div class=\"col-sm-11\">\n                <!-- <div class=\"card\">\n                  <div class=\"card-header\">\n                    <h4 class=\"card-title\">فیلترینگ </h4>\n                  </div>\n                  <div class=\"card-content\">\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-3\" style=\"margin: 10px;\">\n                          <label for=\"eventInput2\"> انتخاب قرارداد</label>\n                          <div class=\"row\">\n                            <select id=\"projectinput6\" name=\"interested\" class=\"form-control\">\n                              <option value=\"none\" selected=\"\" disabled=\"\"></option>\n                              <option value=\"design\">طراحی</option>\n                              <option value=\"development\">توسعه دهنده</option>\n                              <option value=\"illustration\">تصویر</option>\n                              <option value=\"branding\">نام تجاری</option>\n                              <option value=\"video\">ویدئو</option>\n                            </select>\n\n                          </div>\n                        </div>\n                        <div class=\"col-sm-3\" style=\"margin: 10px;\">\n                          <label for=\"eventInput2\"> انتخاب طرح</label>\n                          <div class=\"row\">\n                            <select id=\"projectinput6\" name=\"interested\" class=\"form-control\">\n                              <option value=\"none\" selected=\"\" disabled=\"\"></option>\n                              <option value=\"design\">طراحی</option>\n                              <option value=\"development\">توسعه دهنده</option>\n                              <option value=\"illustration\">تصویر</option>\n                              <option value=\"branding\">نام تجاری</option>\n                              <option value=\"video\">ویدئو</option>\n                            </select>\n\n                          </div>\n                        </div>\n                        <div class=\"col-sm-3\" style=\"margin: 10px;\">\n                          <label for=\"eventInput2\"> انتخاب بیمه گذار</label>\n                          <div class=\"row\">\n\n                            <select id=\"projectinput6\" name=\"interested\" class=\"form-control\">\n                              <option value=\"none\" selected=\"\" disabled=\"\"></option>\n                              <option value=\"design\">طراحی</option>\n                              <option value=\"development\">توسعه دهنده</option>\n                              <option value=\"illustration\">تصویر</option>\n                              <option value=\"branding\">نام تجاری</option>\n                              <option value=\"video\">ویدئو</option>\n                            </select>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-1\" style=\"margin: auto;text-align: center;\">\n                          <label for=\"eventInput2\"> </label>\n                          <button type=\"button\" class=\"btn btn-raised btn-primary\"\n                            style=\"width: 100%;text-align: center;\">\n                            <i class=\"fa fa-check-square-o\"></i> اعمال فیلتر\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div> -->\n              </div>\n            </div>\n            <ng2-smart-table [settings]=\"alertsettings1\" [source]=\"alertSource\"\n              (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\"\n              (createConfirm)=\"onCreateConfirm($event)\" (custom)=\"regclaim($event)\">\n            </ng2-smart-table>\n          </div>\n          <div *ngIf=\"admin\" class=\"table-responsive\">\n            <div class=\"row text-center\" style=\"margin: auto;\">\n              <div class=\"col-sm-11\">\n                <!-- <div class=\"card\">\n                  <div class=\"card-header\">\n                    <h4 class=\"card-title\">فیلترینگ </h4>\n                  </div>\n                  <div class=\"card-content\">\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-3\" style=\"margin: 10px;\">\n                          <label for=\"eventInput2\"> انتخاب قرارداد</label>\n                          <div class=\"row\">\n                            <select id=\"projectinput6\" name=\"interested\" class=\"form-control\">\n                              <option value=\"none\" selected=\"\" disabled=\"\"></option>\n                              <option value=\"design\">طراحی</option>\n                              <option value=\"development\">توسعه دهنده</option>\n                              <option value=\"illustration\">تصویر</option>\n                              <option value=\"branding\">نام تجاری</option>\n                              <option value=\"video\">ویدئو</option>\n                            </select>\n\n                          </div>\n                        </div>\n                        <div class=\"col-sm-3\" style=\"margin: 10px;\">\n                          <label for=\"eventInput2\"> انتخاب طرح</label>\n                          <div class=\"row\">\n                            <select id=\"projectinput6\" name=\"interested\" class=\"form-control\">\n                              <option value=\"none\" selected=\"\" disabled=\"\"></option>\n                              <option value=\"design\">طراحی</option>\n                              <option value=\"development\">توسعه دهنده</option>\n                              <option value=\"illustration\">تصویر</option>\n                              <option value=\"branding\">نام تجاری</option>\n                              <option value=\"video\">ویدئو</option>\n                            </select>\n\n                          </div>\n                        </div>\n                        <div class=\"col-sm-3\" style=\"margin: 10px;\">\n                          <label for=\"eventInput2\"> انتخاب بیمه گذار</label>\n                          <div class=\"row\">\n\n                            <select id=\"projectinput6\" name=\"interested\" class=\"form-control\">\n                              <option value=\"none\" selected=\"\" disabled=\"\"></option>\n                              <option value=\"design\">طراحی</option>\n                              <option value=\"development\">توسعه دهنده</option>\n                              <option value=\"illustration\">تصویر</option>\n                              <option value=\"branding\">نام تجاری</option>\n                              <option value=\"video\">ویدئو</option>\n                            </select>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-1\" style=\"margin: auto;text-align: center;\">\n                          <label for=\"eventInput2\"> </label>\n                          <button type=\"button\" class=\"btn btn-raised btn-primary\"\n                            style=\"width: 100%;text-align: center;\">\n                            <i class=\"fa fa-check-square-o\"></i> اعمال فیلتر\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div> -->\n              </div>\n            </div>\n            <ng2-smart-table [settings]=\"alertsettings1\" [source]=\"alertSource\"\n              (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\"\n              (createConfirm)=\"onCreateConfirm($event)\" (custom)=\"regclaim($event)\">\n            </ng2-smart-table>\n          </div>\n          <div *ngIf=\"insured\" class=\"table-responsive\">\n            <div class=\"row text-center\" style=\"margin: auto;\">\n              <div class=\"col-sm-11\">\n                <!-- <div class=\"card\">\n                  <div class=\"card-header\">\n                    <h4 class=\"card-title\">فیلترینگ </h4>\n                  </div>\n                  <div class=\"card-content\">\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-3\" style=\"margin: 10px;\">\n                          <label for=\"eventInput2\"> انتخاب قرارداد</label>\n                          <div class=\"row\">\n                            <select id=\"projectinput6\" name=\"interested\" class=\"form-control\">\n                              <option value=\"none\" selected=\"\" disabled=\"\"></option>\n                              <option value=\"design\">طراحی</option>\n                              <option value=\"development\">توسعه دهنده</option>\n                              <option value=\"illustration\">تصویر</option>\n                              <option value=\"branding\">نام تجاری</option>\n                              <option value=\"video\">ویدئو</option>\n                            </select>\n\n                          </div>\n                        </div>\n                        <div class=\"col-sm-3\" style=\"margin: 10px;\">\n                          <label for=\"eventInput2\"> انتخاب طرح</label>\n                          <div class=\"row\">\n                            <select id=\"projectinput6\" name=\"interested\" class=\"form-control\">\n                              <option value=\"none\" selected=\"\" disabled=\"\"></option>\n                              <option value=\"design\">طراحی</option>\n                              <option value=\"development\">توسعه دهنده</option>\n                              <option value=\"illustration\">تصویر</option>\n                              <option value=\"branding\">نام تجاری</option>\n                              <option value=\"video\">ویدئو</option>\n                            </select>\n\n                          </div>\n                        </div>\n\n                        <div class=\"col-sm-1\" style=\"margin: auto;text-align: center;\">\n                          <label for=\"eventInput2\"> </label>\n                          <button type=\"button\" class=\"btn btn-raised btn-primary\"\n                            style=\"width: 100%;text-align: center;\">\n                            <i class=\"fa fa-check-square-o\"></i> اعمال فیلتر\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div> -->\n              </div>\n            </div>\n            <ng2-smart-table [settings]=\"alertsettings2\" [source]=\"alertSource\"\n              (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\"\n              (createConfirm)=\"onCreateConfirm($event)\" (custom)=\"regclaim($event)\">\n            </ng2-smart-table>\n          </div>\n          <div *ngIf=\"showperson\">\n            <div class=\"row text-left\">\n              <div class=\"col-sm-12\">\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    <h4 class=\"card-title\">شخص انتخابی</h4>\n                  </div>\n                  <div class=\"card-content\">\n                    <div class=\"card-body\">\n                      \n                      <img class=\"profile\" [src]=\"perimg\"  style=\" width: 100px; height: 100px; margin-left: 20px;\">\n                      {{per}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"user\">\n  <div class=\"row\" style=\"height:auto;  margin-bottom: 20px;\">\n    <div class=\"col-xl-12 col-lg-12 col-12\">\n      <div class=\"card\" style=\"height: 100%;\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">{{contract}}</h4>\n        </div>\n        <div class=\"card-content\" style=\"padding: 10px;\">\n          <div class=\"row\">\n\n            <div class=\"col-xl-8 col-lg-12 col-12\" style=\"padding: 20px; text-align: right;\">\n              تاریخ شروع قرارداد: {{start}}\n              <br />\n              تاریخ پایان قرارداد: {{end}}\n              <br />\n              <strong>{{des}}</strong>\n            </div>\n            <div class=\"col-xl-4 col-lg-12 col-12\" style=\"padding: 20px; text-align: left;\">\n              <div>\n                <img [src]=\"contract_image\" style=\" height: 100px; margin-left: 20px;\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"height:auto;  margin-bottom: 20px;\">\n    <div class=\"col-xl-4 col-lg-12 col-12\">\n      <div class=\"card\" style=\"height: 100%; \">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">انتخاب بیمه شده</h4>\n        </div>\n        <div class=\"card-content\" style=\"padding: 10px;\">\n          <div class=\"row\">\n            <div class=\"col-xl-12 col-lg-12 col-12\">\n              <ng-select [items]=\"perrel\" bindLabel=\"name\" [closeOnSelect]=\"true\" bindValue=\"NID\"\n                (change)=\"getValues1()\" [(ngModel)]=\"selected1\"\n                style=\"direction: rtl;text-align: right; width:100%; margin: auto;\" id=\"sgp\">\n                <ng-template ng-label-tmp let-item=\"item\">\n                  <img class=\"profile1\" height=\"75\" width=\"75\" [src]=\"item.img\" style=\"height: 75;width: 75;\" />\n                  <b style=\"margin:10px\"><strong>{{item.name}} : {{item.reltomain}}</strong></b>\n                </ng-template>\n                <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\" id=\"sgp\">\n                  <div style=\"padding-right: 10px;\">\n                    <img class=\"profile1\" height=\"75\" width=\"75\" [src]=\"item.img\" style=\"height: 75;width: 75;\"/>\n                    <b> </b>\n                    <b id=\"item-{{index}}\" [ngModel]=\"item$.selected1\" id=\"sgp\" style=\"margin:10px\">\n                      {{item.name}} : {{item.reltomain}}\n                    </b>\n                  </div>\n                </ng-template>\n              </ng-select>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"showclaim\">\n  <div class=\"row\" style=\"height:auto; min-height: 300px;\">\n    <div class=\"col-xl-3 col-lg-12 col-12\">\n      <div class=\"card\" style=\"height: 100%;\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">{{planname}}</h4>\n        </div>\n        <div class=\"card-content\" style=\"padding: 10px;\">\n          <div *ngFor=\"let svr1 of servgp\" style=\"margin:10px\">\n            <app-servlist  [childMessage]=\"svr1\"></app-servlist>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 col-lg-12 col-12\">\n      <div class=\"card\" style=\"height: 100%;\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> انتخاب خدمات</h4>\n        </div>\n        <div class=\"card-content\" style=\"padding: 10px;\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <ng-select [items]=\"items\" [multiple]=\"true\" bindLabel=\"subserv\" groupBy=\"serv\" [selectableGroup]=\"true\"\n                [selectableGroupAsModel]=\"false\" [closeOnSelect]=\"true\" bindValue=\"id\" (change)=\"getValues()\"\n                [(ngModel)]=\"selected\" style=\"direction: rtl;text-align: right; width:100%; margin: auto;\" id=\"sgp\">\n                <ng-template ng-optgroup-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                  <div style=\" font-size: larger;color: darkblue;height: 30px;\">\n                    {{item.serv }}\n                  </div>\n                </ng-template>\n                <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\" id=\"sgp\">\n                  <div style=\"padding-right: 10px;\">\n                    <input id=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\" id=\"sgp\" />\n                    {{item.subserv}}\n                  </div>\n                </ng-template>\n              </ng-select>\n            </div>\n          </div>\n          {{countss()}}\n          <div *ngFor=\"let hero of ss\">\n            <div\n              style=\"width: 100%; margin:auto;background-color: whitesmoke; height: 100%;border: solid 1px gainsboro;border-radius: 8px;margin-top: 10px; font-size: 10px; font-family: myFirstFont1;\">\n              <div class=\"row\" style=\"direction: rtl;\">\n                <div class=\"col-sm-6\" style=\"margin: auto; text-align: right;\">\n\n                  <p style=\"margin-top: 10px; margin-right: 10px;\">{{ hero.name }}</p>\n                  <!-- <a style=\" margin-right:10px;float: right; font-size: 12px;color: red;\"> مبلغ\n                                        استفاده شده: {{hero.accsum}}</a>\n                                    <br>\n                                    <a style=\" margin-right:10px;float: right; font-size: 12px; color: green;\"> مبلغ\n                                        باقیمانده: {{hero.remsum}}</a>-->\n                  <br>\n                  <div *ngIf=\"hero.showtc\">\n                    <a style=\" margin-right:10px;float: right; font-size: 12px; color: green;\"> کد پیگیری:\n                      {{hero.tc}}</a>\n                  </div>\n                  <br>\n                  <button type=\"button\" class=\"btn btn-raised btn-primary mr-1\" (click)=\"showpopup()\"\n                    style=\"float: right;\">\n                    مدارک مورد نیاز\n                  </button>\n                </div>\n                <div class=\"col-sm-6\" style=\"margin: auto;\">\n                  <div style=\"width: 100px;height: 100px; padding: 10px;float: left;\">\n                    <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\"\n                      style=\"margin-left: auto;width: 70px;height: 70px; float: left;\"\n                      (click)=\"loadChildComponent($event, hero);\">ثبت مستندات</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div style=\"margin: auto; text-align: center;\">\n            <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"printPage()\">\n              <i class=\"fa fa-check-square-o\"></i> چاپ رسید\n            </button>\n            <app-print *ngIf=\"showprint\" (onClose)=\"closeprint($event)\"></app-print>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-6 col-lg-12 col-12\">\n      <div class=\"card\" style=\"height: 100%;\">\n        <div class=\"card-content\" style=\"padding: 10px;\">\n          <div *ngFor=\"let doc of docs\">\n            <app-formdoc [childMessage1]=\"doc\" (onClose)=\"modalClosed($event)\" (onSave)=\"saveClosed($event)\">\n            </app-formdoc>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/layouts/basic/formdoc/formdoc.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/layouts/basic/formdoc/formdoc.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\n    <div class=\"row\" style=\"direction: rtl;\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <h4 class=\"card-title\" id=\"from-actions-top-left\" style=\"font-family: myFirstFont1;\"> ثبت هزینه\n                        {{docsname.subsvr}}</h4>\n                    <!-- <div class=\"alert alert-info\" role=\"alert\" style=\"font-family: myFirstFont0;\">\n                    <strong>اقدامات فرم در سمت چپ بالا.</strong>\n                </div> -->\n\n                </div>\n                <div class=\"card-content\" style=\"font-family: myFirstFont0;\">\n                    <div class=\"px-3\">\n                        <form class=\"form\">\n                            <div class=\"form-actions top\">\n                                <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\" (click)=\"closeModal()\">\n                                    <i class=\"ft-x\"></i> انصراف\n                                </button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"save()\">\n                                    <i class=\"fa fa-check-square-o\"></i> ذخیره\n                                </button>\n                            </div>\n\n                            <div class=\"form-body\">\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i> اطلاعات ویزیت</h4>\n                                <div class=\"row\">\n                                    <div class=\"form-group col-md-6 mb-2\">\n                                        <label for=\"projectinput1\">تاریخ ویزیت</label>\n                                        <br>\n                                        <dp-date-picker id=\"projectinput2\" class=\"form-control\"\n                                            style=\"border: solid 0px; font-family: myFirstFont0;\" dir=\"rtl\"\n                                            [(ngModel)]=\"dateObject\" mode=\"day\" placeholder=\"تاریخ\" theme=\"dp-material\"\n                                            [ngModelOptions]=\"{standalone: true}\">\n                                        </dp-date-picker>\n                                    </div>\n                                    <div class=\"form-group col-md-6 mb-2\">\n\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"form-group col-md-6 mb-2\">\n                                        <label for=\"projectinput3\">مقدار پرداختی</label>\n                                        <input type=\"text\" id=\"projectinput3\" class=\"form-control\" placeholder=\"هزینه\"\n                                            [(ngModel)]=\"invoiceval\" name=\"email\">\n                                    </div>\n\n                                </div>\n\n                                <!-- <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\" (click)=\"save()\">\n                                    <i class=\"ft-x\"></i> ارسال تصاویر\n                                </button> -->\n                                <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\" (click)=\"open(doctor)\">\n                                     انتخاب دکتر\n                                </button>\n                                <div *ngIf=\"selecteddrf1\">\n\n                                    <div class=\"continer\"\n                                        style=\"border-radius: 4px; border: solid whitesmoke 1px; padding: 10px; direction: rtl;\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-3\"\n                                                style=\"border-radius: 4px; border: solid whitesmoke 1px; margin: 10px; text-align: center;\">\n                                                <img [src]=\"pic\" style=\"width: 90%; \">\n                                            </div>\n                                            <div class=\"col-sm-8\">\n                                                <div class=\"row\">\n                                                    <a style=\"padding: 5px;\">نام دکتر: {{doctorfullname}} </a>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <a style=\"padding: 5px;\">تخصص: {{specialty}} </a>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <a style=\"padding: 5px;\">تحت قرارداد: {{contracted}} </a>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <a style=\"padding: 5px;\">کد نظام پزشکی: {{medical_id}}</a>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <a style=\"padding: 5px;\">تعرفه: {{mt}}</a>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"form-group col-12 mb-2\">\n                                        <div class=\"form-group col-12 mb-2\" style=\"direction: rtl;text-align: right;\">\n                                            <label> لطفا فایل تصویر قرارداد را انتخاب کنید</label>\n                                            <br />\n                                            <label for=\"file-upload\" class=\"btn btn-raised btn-primary\"\n                                                style=\"cursor: pointer;\">\n                                                <i class=\"fa fa-check-square-o\"></i>انتخاب فایل\n                                            </label>\n                                            <input id=\"file-upload\" type='file' (change)=\"onSelectFile($event)\"\n                                                multiple>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-12 mb-2\">\n                                        <div class=\"progress\" *ngIf=\"progress\">\n                                            <div class=\"progress-bar\" [style.width]=\"progress + '%'\">{{progress}}%</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <img *ngFor='let url of urls' [src]=\"url\" height=\"200\" style=\"margin:10px;\"> <br />\n                                </div>\n\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<ng-template #doctor let-c=\"close\" let-d=\"dismiss\" style=\"direction: rtl; text-align: right;\">\n    <div class=\"modal-header px-4\" style=\"direction: rtl; text-align: right;\">\n        <h4 class=\"modal-title\"> انتخاب دکتر </h4>\n    </div>\n    <div class=\"modal-body px-4\">\n        <div class=\"row text-right justify-content-md-center\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <div class=\"alert alert-info\" role=\"alert\">\n                            <strong> لطفا نام دکتر خود را با توجه به کد نظام پزشکی انتخاب فرمائید. در صورتی که نام دکتر\n                                شما در لیست وجود مدارد، آنرا اضافه کنید. </strong>\n                        </div>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"px-3\">\n                            <form class=\"form\">\n                                <div class=\"form-body\">\n                                    <div class=\"row\" style=\"direction: rtl; text-align: right;\">\n                                        <div class=\"form-group col-12 mb-2\">\n                                            <label for=\"eventInput2\"> انتخاب دکتر</label>\n                                            <div class=\"row\">\n                                                <div class=\"col-7\">\n                                                    <div class=\"related-widget-wrapper\">\n\n                                                        <ng-select [items]=\"doctors\" bindLabel=\"name family\"\n                                                            [multiple]=\"false\" [closeOnSelect]=\"true\"\n                                                            bindValue=\"medical_id\" (change)=\"getdoctor()\"\n                                                            [(ngModel)]=\"selecteddr\"\n                                                            [ngModelOptions]=\"{standalone: true}\"\n                                                            style=\"direction: rtl;text-align: right; width:100%; margin: auto;\"\n                                                            id=\"sgp\">\n                                                            <ng-template ng-label-tmp let-item=\"item\">\n                                                                <b id=\"item-{{index}}\" id=\"sgp\" style=\"margin:10px\">\n                                                                    {{item.name }} {{item.family}} - {{item.medical_id}}\n                                                                </b>\n                                                            </ng-template>\n                                                            <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\"\n                                                                let-index=\"index\" id=\"sgp\">\n                                                                <img height=\"35\" width=\"35\" [src]=\"item.picture\" />\n                                                                <b id=\"item-{{index}}\" id=\"sgp\" style=\"margin:10px\">\n                                                                    {{item.name }} {{item.family}} - {{item.medical_id}}\n                                                                </b>\n                                                            </ng-template>\n                                                        </ng-select>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-4\">\n                                                    <button type=\"button\" class=\"btn btn-raised btn-primary\"\n                                                        (click)=\"open(createdr)\">\n                                                        <i class=\"fa fa-check-square-o\"></i> اضاقه کردن دکتر\n                                                    </button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"selecteddrf\">\n\n                                        <div class=\"continer\"\n                                            style=\"border-radius: 4px; border: solid whitesmoke 1px; padding: 10px; direction: rtl;\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-3\"\n                                                    style=\"border-radius: 4px; border: solid whitesmoke 1px; margin: 10px; text-align: center;\">\n                                                    <img [src]=\"pic\" style=\"width: 90%; \">\n                                                </div>\n                                                <div class=\"col-sm-8\">\n                                                    <div class=\"row\">\n                                                        <a style=\"padding: 5px;\">نام: {{doctorfullname}} </a>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <a style=\"padding: 5px;\">تخصص: {{specialty}} </a>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <a style=\"padding: 5px;\">تحت قرارداد: {{contracted}} </a>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <a style=\"padding: 5px;\">کد نظام پزشکی: {{medical_id}}</a>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <a style=\"padding: 5px;\">تعرفه: {{mt}}</a>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                    <div class=\"form-actions center\">\n                                        <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\"\n                                            (click)=\"d('Cross click')\">\n                                            <i class=\"ft-x\"></i> انصراف\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-raised btn-primary\"\n                                            (click)=\"c('Cross click')\">\n                                            <i class=\"fa fa-check-square-o\"></i> انتخاب\n                                        </button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #createdr let-c=\"close\" let-d=\"dismiss\" style=\"direction: rtl; text-align: right;\">\n    <div class=\"modal-header px-4\" style=\"direction: rtl; text-align: right;\">\n        <h4 class=\"modal-title\"> ورود اظلاعات دکتر </h4>\n    </div>\n    <div class=\"modal-body px-4\">\n        <div class=\"row text-right justify-content-md-center\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <div class=\"alert alert-info\" role=\"alert\">\n                            <strong> لطفا اطلاعات دکتر خود را به همراه کد نظام پزشکی به دقت وارد نمائید. </strong>\n                        </div>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"px-3\">\n                            <form class=\"form\">\n                                <div class=\"form-body\">\n                                    <div class=\"row\" style=\"direction: rtl; text-align: right;\">\n                                        <div class=\"form-group col-12 mb-2\">\n                                            <label for=\"eventInput2\"> ورود اطلاعات دکتر</label>\n                                            <div class=\"row\">\n                                                <div class=\"form-group col-12 mb-2\">\n                                                    <label for=\"eventInput1\">نام دکتر</label>\n                                                    <input type=\"text\" style=\"direction: rtl; text-align: right;\"\n                                                        id=\"eventInput1\" class=\"form-control\" placeholder=\"نام\"\n                                                        name=\"fullname\" [(ngModel)]=\"drname\"\n                                                        [ngModelOptions]=\"{standalone: true}\">\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"form-group col-12 mb-2\">\n                                                    <label for=\"eventInput3\">نام خانوادگی دکتر </label>\n                                                    <input type=\"text\" style=\"direction: rtl; text-align: right;\"\n                                                        id=\"eventInput3\" class=\"form-control\" placeholder=\"نام خانوادگی\"\n                                                        name=\"company\" [(ngModel)]=\"drfamily\"\n                                                        [ngModelOptions]=\"{standalone: true}\">\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"form-group col-12 mb-2\">\n                                                    <label for=\"eventInput3\">کد نظام پزشکی </label>\n                                                    <input type=\"text\" style=\"direction: rtl; text-align: right;\"\n                                                        id=\"eventInput3\" class=\"form-control\"\n                                                        placeholder=\"کد نظام پزشکی\" name=\"company\" [(ngModel)]=\"drmid\"\n                                                        [ngModelOptions]=\"{standalone: true}\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-actions center\">\n                                    <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\"\n                                        (click)=\"d('Cross click')\">\n                                        <i class=\"ft-x\"></i> انصراف\n                                    </button>\n                                    <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"c('Cross click')\">\n                                        <i class=\"fa fa-check-square-o\"></i> ذخیره\n                                    </button>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/layouts/basic/print/print.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/layouts/basic/print/print.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html id=\"resid\">\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\n  integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\n\n<!-- JS, Popper.js, and jQuery -->\n<script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\n  integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"\n  integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\n  integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\" crossorigin=\"anonymous\"></script>\n<style>\n  html,\n  body,\n  h1,\n  h2,\n  h3,\n  h4,\n  p,\n  img {\n    margin: 0;\n  }\n\n  /* margin reset*/\n  h1 {\n    font-size: 18pt;\n    font-weight: 500;\n    margin-bottom: 0.5cm;\n  }\n\n  h2 {\n    font-size: 14pt;\n    font-weight: 500;\n  }\n\n  p {\n    font-size: 12pt;\n  }\n\n  .items-group {\n    border-style: solid;\n    border-color: black;\n    border-width: 1pt 1pt 1pt 1pt;\n    border-radius: 5pt;\n    padding: 3pt 3pt 3pt 3pt;\n    margin: 9pt 0 9pt 0;\n  }\n\n  .logotipo {\n    width: 6cm;\n    height: 4cm;\n    margin: -0.5cm;\n  }\n\n  .label {\n    font-weight: 500;\n  }\n\n  .disclaimer,\n  .address p {\n    font-size: 10pt;\n  }\n\n  .signature-field {\n    padding-bottom: 24pt;\n    border-bottom: solid black 1pt;\n  }\n</style>\n\n<body onload=\"window.print()\" style=\"direction: rtl;\">\n  <br>\n  <div class=\"container\" style=\"border-radius: 8px;  padding: 20px;\">\n    <br>\n    <div class=\"row\"\n      style=\"margin-bottom: 25px;  border-bottom: solid rgb(223, 223, 223) 1px;padding-bottom: 20px;\">\n      <div class=\"col-sm-4\" style=\"margin: auto;text-align: center;\">\n        <img [src]=\"inspic\" style=\" width: 100px; \">\n      </div>\n      <div class=\"col-sm-4\" style=\"margin: auto;text-align: center;\">\n        <img src=\"http://bimeh.plus/media/images/تدبیر_پوشش_لوگو.png\" style=\" width: 100px; \">\n      </div>\n      <div class=\"col-sm-4\" style=\"margin: auto;text-align: center;\">\n        <img [src]=\"compic\" style=\" width: 100px; \">\n      </div>\n\n    </div>\n    <div class=\"row\" style=\"margin-bottom: 25px;  border-bottom: solid rgb(223, 223, 223) 1px; padding: 25px;\">\n      <div class=\"col-xl-7 col-lg-7 col-7\" style=\"text-align: right; margin-right: 10px;\">\n\n        <h5>قرارداد: {{contarct}}</h5>\n        <h6>شماره بیمه نامه : {{insurno}}</h6>\n        <h6>کاربر ثبت کننده: {{sabtkonnade}}</h6>\n        <!-- <h2>کد ملی: {{NID}}</h2>\n        <h2>اصلی یا تبعی: {{main}}</h2> -->\n\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-4\" style=\"float: left; margin-left: 20px;\">\n\n        <qrcode [level]=\"1\" [qrvalue]=\"myAngularxQrCode\"></qrcode>\n\n      </div>\n    </div>\n    <br>\n    <div class=\"row\" style=\"padding: 20px;\">\n      <div class=\"col-sm-12\" style=\"margin: auto; text-align: center;\">\n        <table style=\"margin: auto;\">\n          <thead>\n            <tr>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(175, 175, 175);border-right: solid 2px grey; border-top: solid 2px grey; border-bottom: solid 2px grey;\">\n                <strong>ردیف</strong></td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(175, 175, 175);border-right: solid 1px grey; border-top: solid 2px grey; border-bottom: solid 2px grey;\">\n                <strong>کد پیگری</strong></td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px;background-color: rgb(175, 175, 175); border-right: solid 1px grey;border-top: solid 2px grey; border-bottom: solid 2px grey;\">\n                <strong>بیمه شده</strong></td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px;background-color: rgb(175, 175, 175); border-right: solid 1px grey;border-top: solid 2px grey; border-bottom: solid 2px grey;\">\n                <strong>نوع هزینه</strong></td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px;background-color: rgb(175, 175, 175);border-right: solid 1px grey; border-top: solid 2px grey; border-bottom: solid 2px grey;\">\n                <strong>تاریخ </strong></td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px;background-color: rgb(175, 175, 175); border-right: solid 1px grey;border-left: solid 2px grey;border-top: solid 2px grey; border-bottom: solid 2px grey;\">\n                <strong>مبلغ</strong></td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let row of rows\">\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px; background-color: whitesmoke; border: solid 1px grey; border-right: solid 2px grey;\">\n                {{row.row}}</td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px; background-color: whitesmoke; border: solid 1px grey;\">\n                {{row.tc}}</td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px; background-color: whitesmoke; border: solid 1px grey;\">\n                {{row.name}}</td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px;background-color: whitesmoke; border:solid 1px grey;\">\n                {{row.svr}}</td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px;background-color: whitesmoke; border:solid 1px grey;\">\n                {{row.date}}</td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px;background-color: whitesmoke; border:solid 1px grey;border-left: solid 2px grey;\">\n                {{row.cost}}</td>\n            </tr>\n            <tr>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(194, 191, 191); border-right: solid 2px grey;border-bottom: solid 2px grey;\">\n                <strong></strong></td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(194, 191, 191); border-bottom: solid 2px grey;\">\n                <strong></strong></td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(194, 191, 191); border-bottom: solid 2px grey;\">\n                <strong></strong></td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px;background-color: rgb(194, 191, 191); border-bottom:solid 2px grey;\">\n                <strong></strong></td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px;background-color: rgb(194, 191, 191);border-left: solid 1px grey; border-bottom:solid 2px grey;\">\n                <strong>جمع کل</strong></td>\n              <td\n                style=\"text-align: center;padding: 5px; height: 50px;background-color: rgb(194, 191, 191); border-left: solid 2px grey; border-bottom:solid 2px grey;\">\n                <strong>{{sum}}</strong></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n    <div class=\"row\" style=\"padding: 20px;\">\n      <div class=\"col-sm-12\" style=\"margin: auto; text-align: center;\">\n        <div class=\"row\">\n\n\n        </div>\n        <br>\n        <div class=\"row\">\n          <div style=\"margin: auto; text-align: center;\">\n            <table style=\"border: solid gray 2px;\">\n              <tr>\n                <td rowspan=\"2\"\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(175, 175, 175);border: solid gray 2px;\">\n                  <strong>بیمه شده</strong></td>\n                <td colspan=\"4\"\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(175, 175, 175); border-top: solid gray 2px;border-left: solid gray 2px;border-bottom: solid black 1px;\">\n                  <strong>تعداد</strong></td>\n                <td colspan=\"2\"\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(175, 175, 175); border-top: solid gray 2px;border-left: solid gray 2px;border-bottom: solid gray 1px;\">\n                  <strong>مبلغ کل (ریال)</strong></td>\n              </tr>\n              <tr>\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(175, 175, 175);border-bottom: solid gray 2px; border-left: solid gray 1px;\">\n                  کل</td>\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(175, 175, 175);border-bottom: solid gray 2px; border-left: solid gray 1px;\">\n                  پرداخت شده</td>\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(175, 175, 175);border-bottom: solid gray 2px; border-left: solid gray 1px;\">\n                  رد شده</td>\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(175, 175, 175);border-bottom: solid gray 2px; border-left: solid gray 2px;\">\n                  در جریان</td>\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(175, 175, 175);border-bottom: solid gray 2px; border-left: solid gray 1px;\">\n                  ثبت شده</td>\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: rgb(175, 175, 175);border-bottom: solid gray 2px;border-left: solid gray 2px;\">\n                  پرداخت شده</td>\n              </tr>\n\n              <tr *ngFor=\"let rep of reps\">\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: whitesmoke;border: solid gray 1px;border-left: solid gray 2px;border-right: solid gray 2px;\">\n                  {{rep.name}}</td>\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: whitesmoke;border: solid gray 1px;border-left: solid gray 1px;\">\n                  {{rep.allc}}</td>\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: whitesmoke;border: solid gray 1px;border-left: solid gray 1px;\">\n                  {{rep.accc}}</td>\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: whitesmoke;border: solid gray 1px;border-left: solid gray 1px;\">\n                  {{rep.rejc}}</td>\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: whitesmoke;border: solid gray 1px;border-left: solid gray 2px;\">\n                  {{rep.duringc}}</td>\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: whitesmoke;border: solid gray 1px;border-left: solid gray 1px;\">\n                  {{rep.allsum}}</td>\n                <td\n                  style=\"text-align: center;padding: 5px; height: 50px; background-color: whitesmoke;border: solid gray 1px;border-left: solid gray 2px;\">\n                  {{rep.accsum}}</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n        <br>\n        <br>\n        <div class=\"row\" style=\"margin:auto;text-align:center\">\n          <div style=\"margin:auto;text-align:center\">\n            {{emam}}: {{hadis}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"row\" style=\"padding: 20px; height: 20%;\">\n    <div class=\"col-4\" style=\"float: right; width: 50%;height: 50%;\">\n      <img [src]=\"http:/bimeh.plus/media/images/download.jpg\" style=\" width: 100px; height: 100px; margin-left: 20px;\">\n    </div>\n    <div class=\"col-4\" style=\"margin: auto;width: 50%;height: 50%;\">\n      <img [src]=\"http:/bimeh.plus/media/images/تدبیر_پوشش_لوگو.png\" style=\"width: 100%;height: 100%;\">\n    </div>\n    <div class=\"col-4\" style=\"float: left;width: 50%;height: 50%;\">\n      <img [src]=\"http:/bimeh.plus/media/images/image.jpg\" style=\"width: 100%;height: 100%;\">\n    </div>\n  </div> -->\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/layouts/basic/servlist/servlist.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/layouts/basic/servlist/servlist.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div\n    style=\"width: 100%; height: 100%;background-color:whitesmoke;padding: 10px; border-radius: 2px; font-size: 10px; font-family: myFirstFont1;\">\n    <div class=\"row\">\n        \n        <div class=\"col-sm-6\" style=\"padding: 10px; margin: auto;text-align: center;\">\n            <p style=\" margin-right:10px; font-size: 20px;\">{{service}}</p>\n            \n            <br>\n            <a style=\" margin-right:10px;float: right; font-size: 14px; color: royalblue;\"><strong> حداکثر پوشش: {{svrcov}}</strong></a>\n            <br>\n            <a style=\" margin-right:10px;float: right; font-size: 12px;color: red;\">  مبلغ استفاده شده: {{svrused}}</a>\n            <br>\n            <a style=\" margin-right:10px;float: right; font-size: 12px; color:orange;\">  مبلغ در جریان: {{svrduring}}</a>\n            <br>\n            <a style=\" margin-right:10px;float: right; font-size: 12px; color: green;\">  مبلغ باقیمانده: {{svrremain}}</a>\n            <br>\n            <a style=\" margin-right:10px;float: right; font-size: 12px; color: green;\"> نسبت پوشش هزینه ها: {{svrpooshesh}}%</a>\n            <br>\n            <a style=\" margin-right:10px; font-size: 12px;float: right; color: rgb(221, 183, 11);\">  تعداد هزینه ثبت شده: {{svrcclaim}}</a>\n            <br>\n            <br>\n            <button type=\"button\" class=\"btn btn-raised btn-primary mr-1\" (click)=\"toggle()\" style=\"float: right;\">\n                {{buttonName}}\n            </button>\n        </div>\n        <div class=\"col-sm-6\" style=\"padding: 10px; width: 100px; height: 100px;text-align: center;\">\n            <a style=\" margin:auto; font-size: 14px; color:orangered;\">درصد استفاده شده</a>\n            <circle-progress\n            [percent]=\"percent\"\n            [radius]=\"59\"\n            [unitsFontSize]= \"23\"\n            [space]= \"-11\"\n            [outerStrokeWidth]=\"11\"\n            [innerStrokeWidth]=\"11\"\n            [outerStrokeColor]=\"'#ff0000'\"\n            [innerStrokeColor]=\"'#C7E596'\"\n            [animation]=\"true\"\n            [animationDuration]=\"50\"\n            [titleFontSize] = \"30\"\n            [titleFontWeight]= \"700\"\n            [unitsFontSize] = \"30\"\n            [showSubtitle]=\"false\"\n            [subtitleFontSize] = \"12\"\n          style=\"float: left;\"></circle-progress>\n         \n        </div>\n    </div>\n    <div *ngIf=\"show\"> \n        <div *ngFor=\"let subsvr of svrsubs\" style=\"margin-bottom: 10px;\">\n            <div\n                style=\"width: 70%; margin-right:20% ;background-color:white; border-radius: 4px;box-shadow:2px 2px grey; font-size: 18px;text-align: center; font-family: myFirstFont1;\">\n                <a style=\" font-size: 18px;color: royalblue;\"><strong>  {{subsvr}}</strong></a>\n                <!-- <br>\n                <a style=\" font-size: 12px;float: right; color: rgb(221, 183, 11);\">  تعداد هزینه ثبت شده: {{subC}}</a>\n                <br>\n                <a style=\" font-size: 12px;float: right;color: rgb(221, 183, 11);;\">  مبلغ هزینه ثبت شده: {{inv}}</a>\n                <br>\n                <a style=\" font-size: 12px;float: right;color: green;\">  مبلغ هزینه پرداخت شده: {{inv}}</a>\n                <br> -->\n            </div>\n        </div>\n    </div> \n</div>");

/***/ }),

/***/ "./src/app/forms/forms-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/forms/forms-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_basic_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/basic/basic.component */ "./src/app/forms/layouts/basic/basic.component.ts");



// import { ValidationFormsComponent } from "./validation/validation-forms.component";

// import { HorizontalComponent } from './layouts/horizontal/horizontal.component';
// import { HiddenLabelsComponent } from './layouts/hidden-labels/hidden-labels.component';
// import { FormActionsComponent } from './layouts/form-actions/form-actions.component';
// import { BorderedComponent } from './layouts/bordered/bordered.component';
// import { StripedRowsComponent } from './layouts/striped-rows/striped-rows.component';
// import { InputsComponent } from './elements/inputs/inputs.component';
// import { InputGroupsComponent } from './elements/input-groups/input-groups.component';
// import { InputGridComponent } from './elements/input-grid/input-grid.component';
// import { ArchwizardComponent } from './archwizard/archwizard.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'RegClaim',
                component: _layouts_basic_basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"],
                data: {
                    title: 'Basic Forms'
                }
            },
        ]
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/forms/forms-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-archwizard */ "./node_modules/angular-archwizard/fesm5/angular-archwizard.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _layouts_basic_basic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/basic/basic.component */ "./src/app/forms/layouts/basic/basic.component.ts");
/* harmony import */ var _layouts_basic_formdoc_formdoc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/basic/formdoc/formdoc.component */ "./src/app/forms/layouts/basic/formdoc/formdoc.component.ts");
/* harmony import */ var _layouts_basic_servlist_servlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/basic/servlist/servlist.component */ "./src/app/forms/layouts/basic/servlist/servlist.component.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm5/ng-circle-progress.js");
/* harmony import */ var ng2_jalali_date_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-jalali-date-picker */ "./node_modules/ng2-jalali-date-picker/ng2-jalali-date-picker.es5.js");
/* harmony import */ var _layouts_basic_print_print_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layouts/basic/print/print.component */ "./src/app/forms/layouts/basic/print/print.component.ts");
/* harmony import */ var an_qrcode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! an-qrcode */ "./node_modules/an-qrcode/fesm2015/an-qrcode.js");







// import { NGXFormWizardModule } from "./ngx-wizard/ngx-wizard.module";




// import { ValidationFormsComponent } from "./validation/validation-forms.component";

// import { HorizontalComponent } from './layouts/horizontal/horizontal.component';
// import { HiddenLabelsComponent } from './layouts/hidden-labels/hidden-labels.component';
// import { FormActionsComponent } from './layouts/form-actions/form-actions.component';
// import { BorderedComponent } from './layouts/bordered/bordered.component';
// import { StripedRowsComponent } from './layouts/striped-rows/striped-rows.component';
// import { InputsComponent } from './elements/inputs/inputs.component';
// import { InputGroupsComponent } from './elements/input-groups/input-groups.component';
// import { InputGridComponent } from './elements/input-grid/input-grid.component';
// import { ArchwizardComponent } from './archwizard/archwizard.component';






var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    backgroundColor: "#F1F1F1",
                    backgroundPadding: -18,
                    radius: 47,
                    space: 4,
                    toFixed: 0,
                    maxPercent: 100,
                    outerStrokeWidth: 10,
                    outerStrokeColor: "#FF6347",
                    innerStrokeColor: "#32CD32",
                    innerStrokeWidth: 1,
                    titleFontSize: "14",
                    titleFontWeight: "700",
                    responsive: true,
                    startFromZero: false
                }),
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["Ng2SmartTableModule"],
                an_qrcode__WEBPACK_IMPORTED_MODULE_17__["AnQrcodeModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                // NGXFormWizardModule,
                angular_archwizard__WEBPACK_IMPORTED_MODULE_9__["ArchwizardModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_7__["CustomFormsModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_8__["MatchHeightModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ng2_jalali_date_picker__WEBPACK_IMPORTED_MODULE_15__["DpDatePickerModule"]
            ],
            declarations: [
                _layouts_basic_formdoc_formdoc_component__WEBPACK_IMPORTED_MODULE_12__["FormdocComponent"],
                // ValidationFormsComponent,
                _layouts_basic_basic_component__WEBPACK_IMPORTED_MODULE_11__["BasicComponent"],
                // HorizontalComponent,
                // HiddenLabelsComponent,
                // FormActionsComponent,
                // BorderedComponent,
                // StripedRowsComponent,
                // InputsComponent,
                // InputGroupsComponent,
                // InputGridComponent,
                // ArchwizardComponent,
                _layouts_basic_servlist_servlist_component__WEBPACK_IMPORTED_MODULE_13__["ServlistComponent"],
                _layouts_basic_print_print_component__WEBPACK_IMPORTED_MODULE_16__["PrintComponent"]
            ]
        })
    ], FormModule);
    return FormModule;
}());



/***/ }),

/***/ "./src/app/forms/layouts/basic/basic.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/forms/layouts/basic/basic.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "./src/app/forms/layouts/basic/basic.component.ts":
/*!********************************************************!*\
  !*** ./src/app/forms/layouts/basic/basic.component.ts ***!
  \********************************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/forms/layouts/basic/api.service.ts");
/* harmony import */ var _Models_allmodels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Models/allmodels.service */ "./src/app/Models/allmodels.service.ts");
/* harmony import */ var jalali_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jalali-moment */ "./node_modules/jalali-moment/jalali-moment.js");
/* harmony import */ var jalali_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jalali_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm5/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_print_print_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../basic/print/print.component */ "./src/app/forms/layouts/basic/print/print.component.ts");
/* harmony import */ var _globalvar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../globalvar.service */ "./src/app/globalvar.service.ts");
/* harmony import */ var _shared_data_smart_data_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/data/smart-data-table */ "./src/app/shared/data/smart-data-table.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");











var BasicComponent = /** @class */ (function () {
    function BasicComponent(cookieService, api, router, itemdata, printa, golvar) {
        this.cookieService = cookieService;
        this.api = api;
        this.router = router;
        this.itemdata = itemdata;
        this.printa = printa;
        this.golvar = golvar;
        this.claimNID = [];
        this.claims = [];
        this.svrcov = [];
        this.showclaim = false;
        this.servgp = [];
        this.items = [];
        this.rel = [];
        this.perrel = [];
        this.isshowed = false;
        this.filtersettings = _shared_data_smart_data_table__WEBPACK_IMPORTED_MODULE_9__["filtersettings"];
        this.alertsettings1 = _shared_data_smart_data_table__WEBPACK_IMPORTED_MODULE_9__["adminregtable"];
        this.alertsettings2 = _shared_data_smart_data_table__WEBPACK_IMPORTED_MODULE_9__["insuredregtable"];
        this.docs = [];
        this.showperson = false;
        this.personNID = "";
        this.ss = [];
        this.authid = "";
        this.ss1 = [];
        this.selectedflag = false;
        this.j = 0;
        this.showdocs = false;
        this.svrsubs = [];
        this.showsubload = false;
        this.j1 = 0;
        this.showprint = false;
    }
    BasicComponent.prototype.ngOnInit = function () {
        this.docs = [];
    };
    BasicComponent.prototype.ngAfterViewInit = function () {
        this.getusercat();
        this.filterSource = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["LocalDataSource"](_shared_data_smart_data_table__WEBPACK_IMPORTED_MODULE_9__["filerdata"]);
        this.isshowed = true;
    };
    BasicComponent.prototype.getusercat = function () {
        var _this = this;
        this.superadmin = false;
        this.admin = false;
        this.insured = false;
        this.user = false;
        this.evaluator = false;
        this.token_parts = this.cookieService.get('T');
        this.api.getPersonauth(this.token_parts).subscribe(function (response1) {
            _this.p2 = response1[0].catrgory;
            _this.nid = response1[0].person;
            _this.golvar.authcat = _this.p2.toString();
            switch (_this.golvar.authcat) {
                case "1":
                    {
                        _this.superadmin = true;
                        _this.showsuperadmin();
                        break;
                    }
                case "3":
                    {
                        _this.user = true;
                        _this.showuser();
                        break;
                    }
                case "2":
                    {
                        _this.insured = true;
                        _this.showinsurer();
                        break;
                    }
                case "4":
                    {
                        _this.admin = true;
                        _this.showadmin();
                        break;
                    }
                case "5":
                    {
                        _this.evaluator = true;
                        _this.showevaluator();
                        break;
                    }
            }
        }, function (err) {
            console.error('refresh error', err);
        });
    };
    BasicComponent.prototype.regclaim = function (event) {
        var _this = this;
        this.showclaim = false;
        var selectesdNID = event.data['us__national_id'].toString();
        sessionStorage.setItem('NID', selectesdNID);
        this.personNID = selectesdNID;
        var firstname = event.data['us__f_name'].toString();
        var surname = event.data['us__l_name'].toString();
        var img = event.data['us__picture'];
        this.planname = event.data['pln__title'].toString();
        this.contract = event.data['con__title'].toString();
        this.per = firstname + " " + surname;
        if (img != "" && img != null) {
            this.perimg = "http://bimeh.plus/media/" + img;
        }
        else {
            this.perimg = "";
        }
        this.showperson = true;
        if (this.isshowed) {
            this.ss1 = [];
            this.ss = [];
            this.docs = [];
            this.selectedflag = true;
            if (selectesdNID !== null) {
                var token_parts = this.cookieService.get('T');
                this.api.getPlanid(token_parts, this.planname).subscribe(function (res) {
                    //console.log(res)
                    var plnid = res[0]['id'].toString();
                    _this.api.getplandetail(token_parts, plnid).subscribe(function (response1) {
                        _this.subsrevices = response1;
                        _this.fillitems(_this.subsrevices);
                        ////////////////
                        _this.api.getClaiminfoNID(token_parts, selectesdNID).subscribe(function (response1) {
                            _this.claims = response1;
                            for (var i = 0; i < _this.claims.length; i++) {
                                for (var j = 0; j < _this.servgp.length; j++) {
                                    if (_this.claims[i]['contract_plan_subservice__Sub_service__service__title'] == _this.servgp[j].title) {
                                        _this.servgp[j].used = _this.claims[i]['accInvoice__sum'];
                                        _this.servgp[j].inv = _this.claims[i]['Invoice__sum'];
                                        _this.servgp[j].during = (Number(_this.claims[i]['s2']) + Number(_this.claims[i]['s2'])).toString();
                                        _this.servgp[j].cclaim = _this.claims[i]['invoice__count'];
                                    }
                                }
                            }
                            //////////////////////
                            _this.api.getPlanservNID(token_parts, selectesdNID).subscribe(function (response1) {
                                _this.svrcov = response1;
                                // console.log(response1)
                                for (var i = 0; i < _this.svrcov.length; i++) {
                                    for (var j = 0; j < _this.servgp.length; j++) {
                                        if (_this.svrcov[i]['service_id__title'] == _this.servgp[j].title) {
                                            // console.log(j + " / " + this.servgp[j])
                                            // console.log(this.svrcov[i])
                                            if (_this.svrcov[i]['max_coverage'] != 0)
                                                _this.servgp[j].cov = _this.svrcov[i]['max_coverage'];
                                            else
                                                _this.servgp[j].cov = "نامحدود";
                                            // console.log(j + ":" + this.servgp[j].title + "/" + this.servgp[j].cov + "/" + this.servgp[j].used)
                                            break;
                                        }
                                    }
                                }
                                for (var i = 0; i < _this.servgp.length; i++) {
                                    if (_this.servgp[i].cov != "نامحدود")
                                        _this.servgp[i].remain = (Number(_this.servgp[i].cov) - Number(_this.servgp[i].used)).toString();
                                    else
                                        _this.servgp[i].remain = "نامحدود";
                                }
                                console.log(_this.servgp);
                                _this.showclaim = true;
                            }, function (err) {
                                // this.router.navigate(['login']);
                                console.error('refresh error', err);
                            });
                        }, function (err) {
                            // this.router.navigate(['login']);
                            console.error('refresh error', err);
                        });
                    }, function (err) {
                        //this.router.navigate(['login']);
                        console.error('refresh error', err);
                    });
                }, function (err) {
                    //this.router.navigate(['login']);
                    console.error('refresh error', err);
                });
            }
            else {
                this.showclaim = false;
            }
        }
    };
    BasicComponent.prototype.showsuperadmin = function () {
        var _this = this;
        var con = "";
        this.api.getPerson(this.token_parts).subscribe(function (response1) {
            _this.authid = response1[0].auth_id;
            switch (response1[0]['reltomain']) {
                case '1': {
                    _this.prrel = 'تبعی';
                    break;
                }
                case '2': {
                    _this.prrel = 'تبعی';
                    break;
                }
                case '3': {
                    _this.prrel = 'تبعی';
                    break;
                }
                case '4': {
                    _this.prrel = 'تبعی';
                    break;
                }
                case '5': {
                    _this.prrel = 'تبعی';
                    break;
                }
                case '6': {
                    _this.prrel = 'تبعی';
                    break;
                }
                case '7': {
                    _this.prrel = 'تبعی';
                    break;
                }
                case '8': {
                    _this.prrel = 'تبعی';
                    break;
                }
                case '9': {
                    _this.prrel = 'تبعی';
                    break;
                }
                case '0': {
                    _this.prrel = 'اصلی';
                    break;
                }
                case null: {
                    _this.prrel = 'اصلی';
                    break;
                }
                default: {
                    _this.prrel = 'اصلی';
                    break;
                }
            }
        }, function (err) {
            //this.router.navigate(['login']);
            console.error('refresh error', err);
        });
        this.api.getuserclaims(this.token_parts, con).subscribe(function (response1) {
            _this.p2 = response1;
            // console.log(response1)
            _this.alertSource = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["LocalDataSource"](_this.p2);
            for (var i = 0; i < _this.p2.length; i++) {
                // console.log(this.p2[i]['us__reltomain'])
                switch (_this.p2[i]['us__reltomain']) {
                    case '1': {
                        _this.p2[i]['us__reltomain'] = 'پدر';
                        break;
                    }
                    case '2': {
                        _this.p2[i]['us__reltomain'] = 'مادر';
                        break;
                    }
                    case '3': {
                        _this.p2[i]['us__reltomain'] = 'همسر';
                        break;
                    }
                    case '4': {
                        _this.p2[i]['us__reltomain'] = 'دختر';
                        break;
                    }
                    case '5': {
                        _this.p2[i]['us__reltomain'] = 'برادر';
                        break;
                    }
                    case '6': {
                        _this.p2[i]['us__reltomain'] = 'خواهر';
                        break;
                    }
                    case '7': {
                        _this.p2[i]['us__reltomain'] = 'پدر بزرگ';
                        break;
                    }
                    case '8': {
                        _this.p2[i]['us__reltomain'] = 'مادر بزرگ';
                        break;
                    }
                    case '9': {
                        _this.p2[i]['us__reltomain'] = 'نوه';
                        break;
                    }
                    case '10': {
                        _this.p2[i]['us__reltomain'] = 'پسر';
                        break;
                    }
                    case '0': {
                        _this.p2[i]['us__reltomain'] = 'اصلی';
                        break;
                    }
                    case null: {
                        _this.p2[i]['us__reltomain'] = 'اصلی';
                        break;
                    }
                    default: {
                        _this.p2[i]['us__reltomain'] = 'اصلی';
                        break;
                    }
                }
            }
            // console.log(this.p2.length)
        }, function (err) {
            console.error('refresh error', err);
        });
    };
    ////////////////////
    BasicComponent.prototype.showinsurer = function () {
        var _this = this;
        var con = this.contract;
        this.api.getuserclaims(this.token_parts, con).subscribe(function (response1) {
            _this.p2 = response1;
            // console.log(response1)
            _this.alertSource = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["LocalDataSource"](_this.p2);
            for (var i = 0; i < _this.p2.length; i++) {
                // console.log(this.p2[i]['us__reltomain'])
                switch (_this.p2[i]['us__reltomain']) {
                    case '1': {
                        _this.p2[i]['us__reltomain'] = 'پدر';
                        break;
                    }
                    case '2': {
                        _this.p2[i]['us__reltomain'] = 'مادر';
                        break;
                    }
                    case '3': {
                        _this.p2[i]['us__reltomain'] = 'همسر';
                        break;
                    }
                    case '4': {
                        _this.p2[i]['us__reltomain'] = 'دختر';
                        break;
                    }
                    case '5': {
                        _this.p2[i]['us__reltomain'] = 'برادر';
                        break;
                    }
                    case '6': {
                        _this.p2[i]['us__reltomain'] = 'خواهر';
                        break;
                    }
                    case '7': {
                        _this.p2[i]['us__reltomain'] = 'پدر بزرگ';
                        break;
                    }
                    case '8': {
                        _this.p2[i]['us__reltomain'] = 'مادر بزرگ';
                        break;
                    }
                    case '9': {
                        _this.p2[i]['us__reltomain'] = 'نوه';
                        break;
                    }
                    case '10': {
                        _this.p2[i]['us__reltomain'] = 'پسر';
                        break;
                    }
                    case '0': {
                        _this.p2[i]['us__reltomain'] = 'اصلی';
                        break;
                    }
                    case null: {
                        _this.p2[i]['us__reltomain'] = 'اصلی';
                        break;
                    }
                    default: {
                        _this.p2[i]['us__reltomain'] = 'اصلی';
                        break;
                    }
                }
            }
            // console.log(this.p2.length)
        }, function (err) {
            console.error('refresh error', err);
        });
    };
    ////////////////////
    BasicComponent.prototype.showadmin = function () {
        var _this = this;
        var con = "";
        this.api.getuserclaims(this.token_parts, con).subscribe(function (response1) {
            _this.p2 = response1;
            // console.log(response1)
            _this.alertSource = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["LocalDataSource"](_this.p2);
            for (var i = 0; i < _this.p2.length; i++) {
                // console.log(this.p2[i]['us__reltomain'])
                switch (_this.p2[i]['us__reltomain']) {
                    case '1': {
                        _this.p2[i]['us__reltomain'] = 'پدر';
                        break;
                    }
                    case '2': {
                        _this.p2[i]['us__reltomain'] = 'مادر';
                        break;
                    }
                    case '3': {
                        _this.p2[i]['us__reltomain'] = 'همسر';
                        break;
                    }
                    case '4': {
                        _this.p2[i]['us__reltomain'] = 'دختر';
                        break;
                    }
                    case '5': {
                        _this.p2[i]['us__reltomain'] = 'برادر';
                        break;
                    }
                    case '6': {
                        _this.p2[i]['us__reltomain'] = 'خواهر';
                        break;
                    }
                    case '7': {
                        _this.p2[i]['us__reltomain'] = 'پدر بزرگ';
                        break;
                    }
                    case '8': {
                        _this.p2[i]['us__reltomain'] = 'مادر بزرگ';
                        break;
                    }
                    case '9': {
                        _this.p2[i]['us__reltomain'] = 'نوه';
                        break;
                    }
                    case '10': {
                        _this.p2[i]['us__reltomain'] = 'پسر';
                        break;
                    }
                    case '0': {
                        _this.p2[i]['us__reltomain'] = 'اصلی';
                        break;
                    }
                    case null: {
                        _this.p2[i]['us__reltomain'] = 'اصلی';
                        break;
                    }
                    default: {
                        _this.p2[i]['us__reltomain'] = 'اصلی';
                        break;
                    }
                }
            }
            // console.log(this.p2.length)
        }, function (err) {
            console.error('refresh error', err);
        });
    };
    ////////////////////
    BasicComponent.prototype.showevaluator = function () { };
    ////////////////////
    BasicComponent.prototype.showuser = function () {
        var _this = this;
        var token_parts = this.cookieService.get('T');
        /// get person auth id
        this.api.getPerson(token_parts).subscribe(function (response1) {
            _this.NID = response1[0].national_id;
            _this.authid = response1[0].auth_id;
            _this.api.getrelativeNID(token_parts, _this.NID).subscribe(function (response1) {
                _this.rel = response1;
                _this.fillperrel(_this.rel);
            }, function (err) {
                //this.router.navigate(['']);
                console.log('شخصی با این کد ملی وجود ندارد');
            });
        }, function (err) {
            //this.router.navigate(['login']);
            console.error('refresh error', err);
        });
        /////////////////////////////
        this.api.getPlanid(token_parts, this.planname).subscribe(function (res) {
            // console.log(res)
            var plnid = res[0]['id'].toString();
            _this.api.getplandetail(token_parts, plnid).subscribe(function (response1) {
                _this.subsrevices = response1;
                _this.fillitems(_this.subsrevices);
            }, function (err) {
                //this.router.navigate(['login']);
                console.error('refresh error', err);
            });
        }, function (err) {
            //this.router.navigate(['login']);
            console.error('refresh error', err);
        });
        //////////////////////////////
        this.api.getPersonPlan(token_parts).subscribe(function (response1) {
            _this.planname = response1[0].title;
            ////console.log(this.planname)
        }, function (err) {
            _this.router.navigate(['login']);
            //console.error('refresh error', err);
        });
        ////////////////////////// 
        this.api.getPersonContract(token_parts).subscribe(function (response1) {
            // console.log(response1[0])
            _this.contract = response1[0].title;
            _this.start = "";
            var m = jalali_moment__WEBPACK_IMPORTED_MODULE_4__(response1[0].start_date.toString());
            if (m.isValid()) {
                m.locale('fa');
                _this.start = m.format("YYYY/MM/DD");
            }
            else {
                _this.start = "it is not valid date";
            }
            _this.end = "";
            var m1 = jalali_moment__WEBPACK_IMPORTED_MODULE_4__(response1[0].end_date.toString());
            if (m1.isValid()) {
                m1.locale('fa');
                _this.end = m1.format("YYYY/MM/DD");
            }
            else {
                _this.end = "it is not valid date";
            }
            _this.des = 'بیمه گر : ' + response1[0].insurer.name.toString();
            _this.api.getContractpic(token_parts).subscribe(function (response2) {
                _this.contract_image = "http://bimeh.plus/media/" + response2[0]['contract_image'].toString();
            }, function (err) {
                console.error('refresh error', err);
            });
        }, function (err) {
            console.error('refresh error', err);
        });
    };
    BasicComponent.prototype.fillitems = function (subservices) {
        if (this.isshowed) {
            //console.log(subservices)
            this.j1 = 0;
            this.servgp = [];
            this.items = [];
            for (var i = 0; i < subservices.length; i++) {
                for (var j = 0; j < subservices[i].subs.length; j++) {
                    this.items.push({ id: subservices[i].subs[j].subid, serv: subservices[i]['svr'], subserv: subservices[i].subs[j].subver });
                    this.items = this.items.slice(0);
                }
                this.servgp.push({ title: subservices[i]['svr'].toString(), cov: "0", used: 0, inv: 0, during: "", remain: "", pooshesh: "", cclaim: "" });
                this.j1++;
            }
        }
    };
    BasicComponent.prototype.fillperrel = function (rel) {
        //console.log(rel)
        this.j1 = 0;
        for (var i = 0; i < rel.length; i++) {
            switch (rel[i]['reltomain']) {
                case '1': {
                    rel[i]['reltomain'] = 'پدر';
                    break;
                }
                case '2': {
                    rel[i]['reltomain'] = 'مادر';
                    break;
                }
                case '3': {
                    rel[i]['reltomain'] = 'همسر';
                    break;
                }
                case '4': {
                    rel[i]['reltomain'] = 'دختر';
                    break;
                }
                case '5': {
                    rel[i]['reltomain'] = 'برادر';
                    break;
                }
                case '6': {
                    rel[i]['reltomain'] = 'خواهر';
                    break;
                }
                case '7': {
                    rel[i]['reltomain'] = 'پدر بزرگ';
                    break;
                }
                case '8': {
                    rel[i]['reltomain'] = 'مادر بزرگ';
                    break;
                }
                case '9': {
                    rel[i]['reltomain'] = 'نوه';
                    break;
                }
                case '10': {
                    rel[i]['reltomain'] = 'پسر';
                    break;
                }
                case '0': {
                    rel[i]['reltomain'] = 'اصلی';
                    break;
                }
                case null: {
                    rel[i]['reltomain'] = 'اصلی';
                    break;
                }
                default: {
                    rel[i]['reltomain'] = 'اصلی';
                    break;
                }
            }
            var indx = "";
            var imgsrc = "";
            if (rel[i].picture != null && rel[i].picture != "") {
                indx = rel[i].picture.toString().indexOf("images");
                imgsrc = "http://bimeh.plus/media/" + rel[i].picture.toString().substring(indx);
            }
            if (rel[i]['reltomain'] == null)
                rel[i]['reltomain'] = "بیمه شده اصلی";
            this.personNID = rel[i]['national_id'];
            this.perrel.push({ name: rel[i]['f_name'] + " " + rel[i]['l_name'], NID: rel[i]['national_id'], img: imgsrc, reltomain: rel[i]['reltomain'] });
            this.perrel = this.perrel.slice(0);
        }
    };
    //// select subservices
    BasicComponent.prototype.getValues = function () {
        if (this.isshowed) {
            this.selectedflag = true;
            for (var i = 0; i < this.selected.length; i++) {
                for (var j = 0; j < this.items.length; j++) {
                    var f = false;
                    if (this.items[j].id == this.selected[i]) {
                        f = false;
                        if (this.ss.length != 0) {
                            var t = 0;
                            for (var k = 0; k < this.ss.length; k++) {
                                if (this.ss[k].name == this.items[j].subserv.toString()) {
                                    t++;
                                    break;
                                }
                            }
                            if (t > 0) {
                                f = true;
                            }
                        }
                        if (!f) {
                            this.ss.push({ name: this.items[j].subserv.toString(), accsum: "0", remsum: "0", tc: "", showtc: false, cost: "", sdate: "" });
                            break;
                        }
                    }
                }
            }
        }
    };
    //// select rel person
    BasicComponent.prototype.getValues1 = function () {
        var _this = this;
        if (this.isshowed) {
            this.ss1 = [];
            this.ss = [];
            this.docs = [];
            this.selectedflag = true;
            if (this.selected1 !== null) {
                // console.log(this.selected1)
                var nid = this.selected1.toString();
                sessionStorage.setItem('NID', nid);
                var token_parts = this.cookieService.get('T');
                this.api.getPlanidnid(token_parts, nid).subscribe(function (res) {
                    var plnid = res[0]['pln_id'].toString();
                    _this.api.getplandetail(token_parts, plnid).subscribe(function (response1) {
                        _this.subsrevices = response1;
                        _this.fillitems(_this.subsrevices);
                        ////////////////
                        _this.api.getClaiminfoNID(token_parts, nid).subscribe(function (response1) {
                            _this.claims = response1;
                            for (var i = 0; i < _this.claims.length; i++) {
                                for (var j = 0; j < _this.servgp.length; j++) {
                                    if (_this.claims[i]['contract_plan_subservice__Sub_service__service__title'] == _this.servgp[j].title) {
                                        _this.servgp[j].used = _this.claims[i]['accInvoice__sum'];
                                    }
                                }
                            }
                            //////////////////////
                            _this.api.getPlanservNID(token_parts, nid).subscribe(function (response1) {
                                _this.svrcov = response1;
                                for (var i = 0; i < _this.svrcov.length; i++) {
                                    for (var j = 0; j < _this.servgp.length; j++) {
                                        if (_this.svrcov[i]['service_id__title'] == _this.servgp[j].title) {
                                            if (_this.svrcov[i]['max_coverage'] != 0)
                                                _this.servgp[j].cov = _this.svrcov[i]['max_coverage'];
                                            else
                                                _this.servgp[j].cov = "نامحدود";
                                            //console.log(j+":"+this.servgp[j].title+"/"+this.servgp[j].cov+"/"+this.servgp[j].used)
                                        }
                                    }
                                }
                                console.log(_this.servgp);
                                _this.showclaim = true;
                            }, function (err) {
                                // this.router.navigate(['login']);
                                console.error('refresh error', err);
                            });
                        }, function (err) {
                            // this.router.navigate(['login']);
                            console.error('refresh error', err);
                        });
                    }, function (err) {
                        //this.router.navigate(['login']);
                        console.error('refresh error', err);
                    });
                }, function (err) { console.error('refresh error', err); });
            }
            else {
                this.showclaim = false;
            }
        }
    };
    BasicComponent.prototype.loadChildComponent = function (event, hero) {
        // console.log(this.contract + ", pln:" + this.planname + ", subsvr:" + hero + ", nid:" + this.nid + ", createby:" + this.authid)
        this.docs.push({ con: this.contract, pln: this.planname, subsvr: hero.name, nid: this.personNID, createby: this.authid });
        this.showdocs = true;
        this.j++;
    };
    BasicComponent.prototype.modalClosed = function (isClosed) {
        //  console.log(isClosed);
        this.docs = this.docs.filter(function (item) { return item !== isClosed; });
    };
    BasicComponent.prototype.saveClosed = function (isClosed, doc) {
        //  console.log("tc:" + isClosed[0]);
        for (var i = 0; i < this.ss.length; i++) {
            if (this.ss[i]['name'] == isClosed[1]['subsvr']) {
                this.ss[i]['tc'] = isClosed[0];
                this.ss[i]['showtc'] = true;
                this.ss[i]['cost'] = isClosed[2];
                this.ss[i]['sdate'] = isClosed[3];
            }
        }
        //  console.log(this.ss);
        this.docs = this.docs.filter(function (item) { return item !== isClosed[1]; });
    };
    BasicComponent.prototype.showsubservs = function (event, svr) {
        this.svrsubs = [];
        this.showsubload = true;
        this.j1 = 0;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].serv == svr) {
                this.svrsubs[this.j1] = this.items[i].subserv.valueOf();
                this.j1++;
            }
        }
    };
    BasicComponent.prototype.countss = function () {
        if (this.ss.length == 0)
            this.showdocs = false;
    };
    BasicComponent.prototype.printPage = function () {
        var _this = this;
        this.showprint = false;
        var token_parts = this.cookieService.get('T');
        // console.log(this.nid)
        // console.log(this.personNID)
        this.api.getClaimNIDreport(token_parts, this.personNID).subscribe(function (res) {
            //    console.log(res)
            _this.golvar.printreps = [];
            for (var i = 0; i < res.length; i++) {
                _this.golvar.printreps.push({ name: res[i]['user__f_name'] + " " + res[i]['user__l_name'], allc: res[i]['invoice__count'], accc: res[i]['countacc'], rejc: res[i]['countrej'], duringc: res[i]['countduring'], allsum: res[i]['invoice__sum'], accsum: res[i]['accInvoice__sum'] });
                _this.golvar.printreps = _this.golvar.printreps.slice(0);
            }
            var qr = "";
            _this.golvar.printrows = [];
            for (var i = 0; i < _this.ss.length; i++) {
                if (_this.ss[i].showtc) {
                    qr += "/" + _this.ss[i].tc;
                    _this.golvar.printrows.push({ row: (i + 1).toString(), tc: _this.ss[i].tc, name: _this.per, svr: _this.ss[i].name, cost: _this.ss[i].cost, date: _this.ss[i].sdate, fran: "" });
                }
            }
            sessionStorage.setItem('insurerpic', res[0]['contract_plan_subservice__contract__insurer__picture']);
            sessionStorage.setItem('compic', res[0]['user__company__picture']);
            _this.golvar.printtitle = [];
            _this.golvar.printtitle.push({ qr: qr, nid: _this.personNID, sabt: _this.per, rel: _this.prrel, cont: _this.contract });
            _this.showprint = true;
        }, function (err) { console.log(err); });
    };
    BasicComponent.prototype.printclose = function () {
        // alert("salam")
    };
    BasicComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _Models_allmodels_service__WEBPACK_IMPORTED_MODULE_3__["AllmodelsService"] },
        { type: _basic_print_print_component__WEBPACK_IMPORTED_MODULE_7__["PrintComponent"] },
        { type: _globalvar_service__WEBPACK_IMPORTED_MODULE_8__["GlobalvarService"] }
    ]; };
    BasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/layouts/basic/basic.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic.component.scss */ "./src/app/forms/layouts/basic/basic.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _Models_allmodels_service__WEBPACK_IMPORTED_MODULE_3__["AllmodelsService"],
            _basic_print_print_component__WEBPACK_IMPORTED_MODULE_7__["PrintComponent"],
            _globalvar_service__WEBPACK_IMPORTED_MODULE_8__["GlobalvarService"]])
    ], BasicComponent);
    return BasicComponent;
}());



/***/ }),

/***/ "./src/app/forms/layouts/basic/formdoc/formdoc.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/forms/layouts/basic/formdoc/formdoc.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "./src/app/forms/layouts/basic/formdoc/formdoc.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/forms/layouts/basic/formdoc/formdoc.component.ts ***!
  \******************************************************************/
/*! exports provided: FormdocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormdocComponent", function() { return FormdocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jalali_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jalali-moment */ "./node_modules/jalali-moment/jalali-moment.js");
/* harmony import */ var jalali_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jalali_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/forms/layouts/basic/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm5/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng2_jalali_date_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-jalali-date-picker */ "./node_modules/ng2-jalali-date-picker/ng2-jalali-date-picker.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







//port { MatDialog, MatDialogModule, MatDialogConfig } from '@angular/material/dialog';



//import { NgbModalOptions, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

var FormdocComponent = /** @class */ (function () {
    function FormdocComponent(modalService, cookieService, route, api, http, 
    // private dialog: MatDialog,
    dateObject) {
        this.modalService = modalService;
        this.cookieService = cookieService;
        this.route = route;
        this.api = api;
        this.http = http;
        this.dateObject = dateObject;
        this.msg = "";
        this.datenow = "";
        this.timenow = "";
        this.cps = "";
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.invoiceval = "";
        this.doctors = [];
        this.image = [];
        this.falg = false;
        this.urls = [];
        this.selecteddrf1 = false;
        this.drname = "";
        this.drfamily = "";
        this.drmid = "";
        this.selecteddrf = false;
        this.doctorfullname = "";
        this.specialty = "";
        this.degree = "";
        this.mt = "";
        this.accdate = "";
        this.pic = "";
        this.docid = "";
        this.medical_id = "";
        this.contracted = "";
    }
    FormdocComponent.prototype.closeModal = function () {
        this.onClose.emit(this.childMessage1);
    };
    FormdocComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.api.getdoctors(this.token_parts).subscribe(function (res) {
            console.log(res);
            var d1 = JSON.stringify(res);
            var drs = JSON.parse(d1);
            for (var i = 0; i < drs.length; i++) {
                _this.doctors.push(drs[i]);
                if (_this.doctors[i]['picture'] == null || _this.doctors[i]['picture'] == "")
                    _this.doctors[i]['picture'] = "http://bimeh.plus/media/images/drs/images.png";
                else
                    _this.doctors[i]['picture'] = "http://bimeh.plus/media/" + _this.doctors[i]['picture'];
            }
        }, function (err) { });
    };
    FormdocComponent.prototype.ngOnChanges = function () {
        this.docsname = this.childMessage1;
        // console.log(this.docsname);
        this.token_parts = this.cookieService.get('T');
    };
    FormdocComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (var i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                this.image[i] = event.target.files[i];
                reader.onload = function (event) {
                    _this.urls.push(event.target.result);
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    };
    FormdocComponent.prototype.save = function () {
        var _this = this;
        var con = this.docsname.con;
        var pln = this.docsname.pln;
        var subsvr = this.docsname.subsvr;
        console.log(con + " " + pln + " " + subsvr);
        this.api.getcpsid(this.token_parts, con, pln, subsvr).subscribe(function (response) {
            console.log(response);
            // console.log(response[0].id.toString())
            _this.cps = response[0].id.toString();
            var datevizit;
            var m1 = jalali_moment__WEBPACK_IMPORTED_MODULE_3__(_this.dateObject);
            // console.log("date"+m1);
            if (m1.isValid()) {
                m1.locale('en');
                datevizit = m1.format("YYYY-MM-DD");
            }
            else {
                datevizit = "it is not valid date";
            }
            var doctorid = "";
            if (_this.docid == "")
                alert("لطفا دکتر خود را انتخاب کنید");
            else
                doctorid = _this.docid;
            _this.api.checkclaim(_this.token_parts, _this.cps, _this.docsname.nid, datevizit, doctorid, _this.invoiceval).subscribe(function (resp) {
                var tc1 = "";
                var r1 = JSON.stringify(resp.toString());
                if (r1 != '""') {
                    var rr = JSON.parse(resp.toString());
                    for (var i = 0; i < rr.length; i++)
                        tc1 += "/" + rr[i]['trackingـcode'];
                    if (rr.length != 0) {
                        if (rr.length == 1) {
                            _this.msg = "قبلا هزینه ای با این مشخصات و با کد پیگیری " + tc1 + "  ثبت شده است، توجه داشته باشید در صورت تشخیص تکراری بودن هزینه توسط ارزیابان این هزینه رد خواد شد. آیا از غیر تکراری بودن این هزینه مطمئن هستید؟!";
                        }
                        else {
                            _this.msg = "قبلا هزینه هایی با این مشخصات و با کدهای پیگیری " + tc1 + "  ثبت شده است، توجه داشته باشید در صورت تشخیص تکراری بودن هزینه توسط ارزیابان این هزینه رد خواد شد. آیا از غیر تکراری بودن این هزینه مطمئن هستید؟!";
                        }
                    }
                }
                _this.api.getdatetime(_this.token_parts).subscribe(function (response) {
                    // console.log(response)
                    _this.dtnow = response;
                    var gdate = response.substring(0, 10);
                    _this.timenow = response.substring(11, 19);
                    var m = jalali_moment__WEBPACK_IMPORTED_MODULE_3__(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        _this.datenow = m.format("YYMMDD");
                    }
                    else {
                        _this.datenow = "it is not valid date";
                    }
                    // console.log(this.datenow + "   " + this.timenow)
                    // alert(this.datenow.substr(2,2))
                    var trackingcode = "";
                    _this.claiminfo = null;
                    // console.log(this.docsname);
                    console.log(_this.docsname.nid);
                    var NID = _this.docsname.nid;
                    var creator = _this.docsname.createby;
                    _this.api.getlasttc(_this.token_parts, NID).subscribe(function (response) {
                        console.log(response);
                        var tc = response;
                        // console.log(tc.trackingـcode)
                        if (response != "") {
                            if (tc.trackingـcode.substring(0, 6) == _this.datenow) {
                                var co = "";
                                var conter = Number(tc.trackingـcode.substring(6, 8)) + 1;
                                if (conter < 10) {
                                    co = "0" + conter.toString();
                                }
                                else {
                                    co = conter.toString();
                                }
                                trackingcode = _this.datenow + co + NID.substring(7, 10);
                                // console.log(trackingcode)
                            }
                            else {
                                trackingcode = _this.datenow + "01" + NID.substring(7, 10);
                            }
                        }
                        else {
                            trackingcode = _this.datenow + "01" + NID.substring(7, 10);
                        }
                        var myHeaders = new Headers();
                        myHeaders.append("Authorization", "Token " + _this.token_parts);
                        // console.log(this.cps);
                        _this.sdate = datevizit.toString();
                        var formdata = new FormData();
                        formdata.append("invoice", _this.invoiceval);
                        formdata.append("date", datevizit);
                        formdata.append("create_at", _this.dtnow);
                        formdata.append("accInvoice", "");
                        formdata.append("acc_date", "");
                        formdata.append("trackingـcode", trackingcode);
                        formdata.append("status", "2");
                        formdata.append("status_description", "");
                        formdata.append("contract_plan_subservice", _this.cps);
                        formdata.append("create_by", _this.docsname.createby);
                        formdata.append("doctor", doctorid);
                        formdata.append("user", NID);
                        formdata.append("duplicatecalim", tc1);
                        formdata.append("readbyperson", "true");
                        formdata.append("persianmonthreg", _this.datenow.substr(2, 2));
                        console.log(formdata);
                        var requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: formdata,
                        };
                        fetch("http://api.bimeh.plus/darman/createclaim/", requestOptions)
                            .then(function (response) { return response.text(); })
                            .then(function (result) {
                            console.log(result);
                            for (var i = 0; i < _this.image.length; i++) {
                                var myHeaders = new Headers();
                                myHeaders.append("Authorization", "Token " + _this.token_parts);
                                _this.progress = 1;
                                var formdata = new FormData();
                                formdata.append("claimTC", trackingcode);
                                formdata.append("image", _this.image[i], _this.image[i].name);
                                _this.http.post("http://api.bimeh.plus/darman/uploadveiw/", formdata, {
                                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                                        'Authorization': 'Token  ' + _this.token_parts
                                    }),
                                    responseType: 'text',
                                    reportProgress: true,
                                    observe: "events"
                                })
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (event) {
                                    if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress) {
                                        _this.progress = Math.round((100 / event.total) * event.loaded);
                                    }
                                    else if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Response) {
                                        var res = event.body;
                                        _this.progress = null;
                                    }
                                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
                                    _this.progress = null;
                                    // alert(err.message);
                                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(err.message);
                                }))
                                    .subscribe(function (response) {
                                    _this.falg = true;
                                });
                            }
                            _this.onSave.emit([trackingcode, _this.docsname, _this.invoiceval, _this.sdate]);
                        })
                            .catch(function (error) { return console.log('error', error); });
                    }, function (err1) {
                        console.log(err1);
                    });
                }, function (err1) {
                    console.log(err1);
                });
            }, function (err1) {
                console.log(err1);
            });
        }, function (err1) {
            console.log(err1);
        });
    };
    FormdocComponent.prototype.open = function (content) {
        var _this = this;
        var obj = content['_def']['references'];
        var page = Object.keys(obj);
        if (page[0] == "doctor") {
        }
        var ngbModalOptions = {
            size: "lg",
            backdrop: 'static',
            keyboard: false,
        };
        this.modalService.open(content, ngbModalOptions).result.then(function (result) {
            if (page[0] == "doctor") {
                _this.selecteddrf1 = true;
                _this.closeResult = "Closed with: " + result;
            }
            if (page[0] == "createdr") {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Token " + _this.token_parts);
                // console.log(this.cps);
                var formdata = new FormData();
                formdata.append("name", _this.drname);
                formdata.append("family", _this.drfamily);
                formdata.append("medical_id", _this.drmid);
                console.log(formdata);
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: formdata,
                };
                fetch("http://api.bimeh.plus/darman/createdoctor/", requestOptions)
                    .then(function (response) { return response.text(); })
                    .then(function (result) {
                    console.log(result);
                    _this.doctors = [];
                    _this.api.getdoctors(_this.token_parts).subscribe(function (res) {
                        console.log(res);
                        var d1 = JSON.stringify(res);
                        var drs = JSON.parse(d1);
                        for (var i = 0; i < drs.length; i++) {
                            _this.doctors.push(drs[i]);
                            // console.log(this.doctors)
                            if (_this.doctors[i]['picture'] == null || _this.doctors[i]['picture'] == "")
                                _this.doctors[i]['picture'] = "http://bimeh.plus/media/images/drs/images.png";
                            else
                                _this.doctors[i]['picture'] = "http://bimeh.plus/media/" + _this.doctors[i]['picture'];
                            // console.log(this.doctors)
                        }
                    }, function (err) { });
                })
                    .catch(function (error) { return console.log('error', error); });
            }
        }, function (reason) {
            _this.selecteddrf1 = false;
            _this.docid = "";
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    FormdocComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    FormdocComponent.prototype.getdoctor = function () {
        for (var i = 0; this.doctors.length; i++) {
            if (this.selecteddr == this.doctors[i]['medical_id']) {
                this.doctorfullname = this.doctors[i]['name'].toString() + " " + this.doctors[i]['family'].toString();
                this.specialty = this.doctors[i]['specialty'];
                if (this.doctors[i]['picture'] == null || this.doctors[i]['picture'] == "")
                    this.pic = "http://bimeh.plus/media/images/drs/images.png";
                else
                    this.pic = this.doctors[i]['picture'];
                this.docid = this.doctors[i]['id'];
                if (this.doctors[i]['contracted'] == "true")
                    this.contracted = "بله";
                else
                    this.contracted = "خیر";
                this.medical_id = this.doctors[i]['medical_id'];
                this.mt = this.doctors[i]['medicalـtariff'];
                this.degree = this.doctors[i]['degree'];
                this.selecteddrf = true;
                break;
            }
        }
    };
    FormdocComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ng2_jalali_date_picker__WEBPACK_IMPORTED_MODULE_9__["DpDatePickerModule"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormdocComponent.prototype, "childMessage1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormdocComponent.prototype, "onClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormdocComponent.prototype, "onSave", void 0);
    FormdocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formdoc',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./formdoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/layouts/basic/formdoc/formdoc.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./formdoc.component.scss */ "./src/app/forms/layouts/basic/formdoc/formdoc.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            ng2_jalali_date_picker__WEBPACK_IMPORTED_MODULE_9__["DpDatePickerModule"]])
    ], FormdocComponent);
    return FormdocComponent;
}());



/***/ }),

/***/ "./src/app/forms/layouts/basic/print/print.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forms/layouts/basic/print/print.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body, h1, h2, h3, h4, p, img {\n  margin: 0;\n  display: none;\n}\n\n/* margin reset*/\n\nh1 {\n  font-size: 18pt;\n  font-weight: 500;\n  margin-bottom: 0.5cm;\n}\n\nh2 {\n  font-size: 16pt;\n  font-weight: 500;\n}\n\np {\n  font-size: 12pt;\n}\n\n.items-group {\n  border-style: solid;\n  border-color: black;\n  border-width: 1pt 1pt 1pt 1pt;\n  border-radius: 5pt;\n  padding: 3pt 3pt 3pt 3pt;\n  margin: 9pt 0 9pt 0;\n}\n\n.logotipo {\n  width: 6cm;\n  height: 4cm;\n  margin: -0.5cm;\n}\n\n.label {\n  font-weight: 500;\n}\n\n.disclaimer, .address p {\n  font-size: 10pt;\n}\n\n.signature-field {\n  padding-bottom: 24pt;\n  border-bottom: solid black 1pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvbGF5b3V0cy9iYXNpYy9wcmludC9DOlxcVXNlcnNcXE1hc2loXFxEZXNrdG9wXFxmcm9udFxcYXBleF9ydGwvc3JjXFxhcHBcXGZvcm1zXFxsYXlvdXRzXFxiYXNpY1xccHJpbnRcXHByaW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jtcy9sYXlvdXRzL2Jhc2ljL3ByaW50L3ByaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXFDLFNBQUE7RUFBVyxhQUFBO0FDR2hEOztBREgrRCxnQkFBQTs7QUFDL0Q7RUFBRyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLG9CQUFBO0FDU3RDOztBRFJBO0VBQUcsZUFBQTtFQUFpQixnQkFBQTtBQ2FwQjs7QURaQTtFQUFFLGVBQUE7QUNnQkY7O0FEZEE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNpQkY7O0FEZEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNpQkY7O0FEZEE7RUFBUyxnQkFBQTtBQ2tCVDs7QURoQkE7RUFDRSxlQUFBO0FDbUJGOztBRGhCQTtFQUNFLG9CQUFBO0VBQ0EsOEJBQUE7QUNtQkYiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9sYXlvdXRzL2Jhc2ljL3ByaW50L3ByaW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSwgaDEsIGgyLCBoMywgaDQsIHAsIGltZyB7IG1hcmdpbjogMDsgZGlzcGxheTogbm9uZX0gLyogbWFyZ2luIHJlc2V0Ki9cclxuaDF7Zm9udC1zaXplOiAxOHB0OyBmb250LXdlaWdodDogNTAwOyBtYXJnaW4tYm90dG9tOiAwLjVjbTt9XHJcbmgye2ZvbnQtc2l6ZTogMTZwdDsgZm9udC13ZWlnaHQ6IDUwMDt9XHJcbnB7Zm9udC1zaXplOiAxMnB0O31cclxuXHJcbi5pdGVtcy1ncm91cCB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDogMXB0IDFwdCAxcHQgMXB0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVwdDtcclxuICBwYWRkaW5nOiAzcHQgM3B0IDNwdCAzcHQ7XHJcbiAgbWFyZ2luOiA5cHQgMCA5cHQgMDtcclxufVxyXG5cclxuLmxvZ290aXBvIHtcclxuICB3aWR0aDogNmNtO1xyXG4gIGhlaWdodDogNGNtO1xyXG4gIG1hcmdpbjogLTAuNWNtO1xyXG59XHJcblxyXG4ubGFiZWwgeyBmb250LXdlaWdodDogNTAwO31cclxuXHJcbi5kaXNjbGFpbWVyLCAuYWRkcmVzcyBwIHtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuXHJcbi5zaWduYXR1cmUtZmllbGQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNHB0O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIDFwdDtcclxufVxyXG4iLCJodG1sLCBib2R5LCBoMSwgaDIsIGgzLCBoNCwgcCwgaW1nIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBtYXJnaW4gcmVzZXQqL1xuaDEge1xuICBmb250LXNpemU6IDE4cHQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNWNtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbn1cblxuLml0ZW1zLWdyb3VwIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAxcHQgMXB0IDFwdCAxcHQ7XG4gIGJvcmRlci1yYWRpdXM6IDVwdDtcbiAgcGFkZGluZzogM3B0IDNwdCAzcHQgM3B0O1xuICBtYXJnaW46IDlwdCAwIDlwdCAwO1xufVxuXG4ubG9nb3RpcG8ge1xuICB3aWR0aDogNmNtO1xuICBoZWlnaHQ6IDRjbTtcbiAgbWFyZ2luOiAtMC41Y207XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5kaXNjbGFpbWVyLCAuYWRkcmVzcyBwIHtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4uc2lnbmF0dXJlLWZpZWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDI0cHQ7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIDFwdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/forms/layouts/basic/print/print.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forms/layouts/basic/print/print.component.ts ***!
  \**************************************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalvar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globalvar.service */ "./src/app/globalvar.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/forms/layouts/basic/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm5/ngx-cookie-service.js");





var PrintComponent = /** @class */ (function () {
    function PrintComponent(golvar, api, cookieService) {
        this.golvar = golvar;
        this.api = api;
        this.cookieService = cookieService;
        this.rows = [];
        this.reps = [];
        this.myAngularxQrCode = null;
        this.compic = "";
        this.inspic = "";
        this.segalpic = "";
        this.hadis = "";
        this.emam = "";
    }
    PrintComponent.prototype.ngOnInit = function () {
        this.emam = "امام علی (ع)";
        this.hadis = "از دست دادن فرصت‌های خیر، برای انسان مایه غم و اندوه است";
        this.reps.push({ name: "salam", allc: "salam", accc: "salam", rejc: "salam", duringc: "salam", allsum: "asa;", accsum: "asass" });
        this.reps = this.reps.slice(0);
        this.myAngularxQrCode = this.golvar.printtitle[0].qr;
        this.NID = this.golvar.printtitle[0].nid;
        this.sabtkonnade = this.golvar.printtitle[0].sabt;
        this.contarct = this.golvar.printtitle[0].cont;
        this.main = this.golvar.printtitle[0].rel;
        this.rows = this.golvar.printrows;
        this.reps = this.golvar.printreps;
        this.segalpic = "../../../../../assets/images/تدبیر_پوشش_لوگو.png";
        this.compic = "http://bimeh.plus/media/" + sessionStorage.getItem('compic');
        this.inspic = "http://bimeh.plus/media/" + sessionStorage.getItem('insurerpic');
        console.log(this.compic + " " + this.inspic);
        var s = 0;
        for (var i = 0; i < this.rows.length; i++) {
            s += Number(this.rows[i]['cost']);
        }
        this.sum = s.toString();
    };
    PrintComponent.prototype.ngAfterViewInit = function () {
        // console.log("salam")
        // console.log(this.reps)
        // sessionStorage.setItem('showprint','true');
        this.print1();
    };
    PrintComponent.prototype.print1 = function () {
        var popupWinindow = window.open('', '_blank', 'width=800,height=600');
        var innerContents = document.getElementById('resid').innerHTML;
        // let innerContents1 = document.getElementById('style').innerHTML;
        if (innerContents != null) {
            popupWinindow.document.open();
            popupWinindow.document.write(innerContents);
            popupWinindow.document.close();
        }
    };
    PrintComponent.prototype.unloadHandler = function (event) {
        // ...
        console.log("salamprint");
    };
    PrintComponent.prototype.beforeUnloadHandler = function (event) {
        console.log("byeprint");
        // ...
    };
    PrintComponent.ctorParameters = function () { return [
        { type: _globalvar_service__WEBPACK_IMPORTED_MODULE_2__["GlobalvarService"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:unload', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PrintComponent.prototype, "unloadHandler", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PrintComponent.prototype, "beforeUnloadHandler", null);
    PrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-print',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/layouts/basic/print/print.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./print.component.scss */ "./src/app/forms/layouts/basic/print/print.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globalvar_service__WEBPACK_IMPORTED_MODULE_2__["GlobalvarService"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], PrintComponent);
    return PrintComponent;
}());



/***/ }),

/***/ "./src/app/forms/layouts/basic/servlist/servlist.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/forms/layouts/basic/servlist/servlist.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "./src/app/forms/layouts/basic/servlist/servlist.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/forms/layouts/basic/servlist/servlist.component.ts ***!
  \********************************************************************/
/*! exports provided: ServlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServlistComponent", function() { return ServlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm5/ngx-cookie-service.js");
/* harmony import */ var _Models_allmodels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Models/allmodels.service */ "./src/app/Models/allmodels.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/forms/layouts/basic/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ServlistComponent = /** @class */ (function () {
    function ServlistComponent(cookieService, api, router, itempost) {
        this.cookieService = cookieService;
        this.api = api;
        this.router = router;
        this.itempost = itempost;
        this.items = [];
        this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.show = false;
        this.service = "";
        this.ssact = "";
        this.svrsubs = [];
        this.showsubload = false;
        this.svrused = "0";
        this.svrduring = "0";
        this.svrremain = "0";
        this.svrpooshesh = "0";
        this.svrcclaim = "0";
        this.svrcov = "0";
        this.j1 = 0;
    }
    ServlistComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show)
            this.buttonName = 'عدم نمایش';
        else
            this.buttonName = 'نمایش زیر مجموعه';
    };
    ServlistComponent.prototype.runapi = function () {
        var _this = this;
        var token_parts = this.cookieService.get('T');
        var NID = sessionStorage.getItem('NID');
        this.api.getservicesubservice(token_parts, NID).subscribe(function (response1) {
            _this.subsrevices = response1;
            _this.fillitems(_this.subsrevices);
        }, function (err) {
            //this.router.navigate(['login']);
            console.error('refresh error', err);
        });
    };
    ServlistComponent.prototype.fillitems = function (subservices) {
        this.j1 = 0;
        for (var i = 0; i < subservices.length; i++) {
            this.items.push({ id: i, serv: subservices[i]['service_id__title'], subserv: subservices[i]['title'] });
            this.items = this.items.slice(0);
        }
        var svr = this.ch;
        this.svrused = "0";
        this.svrduring = "0";
        this.svrremain = "0";
        this.svrpooshesh = "0";
        this.svrcov = "0";
        this.svrcclaim = "0";
        // console.log(svr)
        this.service = svr.title;
        this.svrsubs = [];
        if (svr.cov != 0) {
            this.percent = svr.used * 100 / svr.cov;
            if (svr.used != null) {
                this.svrused = svr.used.toString();
            }
            else {
                this.svrused = "0";
            }
            if (svr.during != "") {
                this.svrduring = svr.during;
            }
            else {
                this.svrduring = "0";
            }
            if (svr.remain != "") {
                this.svrremain = svr.remain;
            }
            else {
                this.svrremain = "0";
            }
            if (svr.pooshesh != "") {
                this.svrpooshesh = svr.pooshesh;
            }
            else {
                this.svrpooshesh = "0";
            }
            this.svrcclaim = svr.cclaim;
            if (svr.cov != null) {
                this.svrcov = svr.cov.toString();
                ;
            }
            else {
                this.svrcov = "0";
            }
            this.showsubload = true;
            this.j1 = 0;
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].serv == svr.title) {
                    this.svrsubs[this.j1] = this.items[i].subserv.valueOf();
                    this.j1++;
                }
            }
        }
    };
    ServlistComponent.prototype.ngOnInit = function () {
    };
    ServlistComponent.prototype.ngAfterViewInit = function () {
        // console.log(this.childMessage)
        this.ch = this.childMessage;
        console.log(this.ch);
        this.runapi();
        this.show = false;
        this.buttonName = 'نمایش زیر مجموعه';
    };
    ServlistComponent.prototype.subservselect = function (event, ss) {
        // console.log(ss);
        this.countChanged.emit(ss);
    };
    ServlistComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _Models_allmodels_service__WEBPACK_IMPORTED_MODULE_3__["AllmodelsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServlistComponent.prototype, "childMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ServlistComponent.prototype, "countChanged", void 0);
    ServlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./servlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/layouts/basic/servlist/servlist.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./servlist.component.scss */ "./src/app/forms/layouts/basic/servlist/servlist.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _Models_allmodels_service__WEBPACK_IMPORTED_MODULE_3__["AllmodelsService"]])
    ], ServlistComponent);
    return ServlistComponent;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map