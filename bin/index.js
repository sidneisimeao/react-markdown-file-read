#! /usr/bin/env node
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argvs = process.argv.splice(2, process.argv.length - 1);

var validateArgs = function validateArgs(argvs) {
    if (argvs.length < 2) {
        console.error("It is expected [path] [destiny]. Received" + argvs.join(' '));
        process.exit(-1);
    }
    return argvs;
};

var _argvs = _slicedToArray(argvs, 2),
    path = _argvs[0],
    destiny = _argvs[1];

_fs2.default.readdir(path, function (err, items) {
    items.forEach(function (item) {

        var file = path + '/' + item;

        _fs2.default.readFile(file, 'utf-8', function (err, data) {
            if (err) throw err;
            console.log(data);
        });
    });
});
//# sourceMappingURL=index.js.map