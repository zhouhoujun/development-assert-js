"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as path from 'path';
var development_core_1 = require("development-core");
// import * as chalk from 'chalk';
var cache = require('gulp-cached');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var JsTasks = (function () {
    function JsTasks() {
    }
    JsTasks.prototype.tasks = function () {
        return [
            {
                name: 'jscompile',
                oper: development_core_1.Operation.build,
                watch: true,
                pipes: [
                    function () { return cache('javascript'); },
                    function () { return sourcemaps.init(); },
                    function (config) { return babel(config.option.babelOption || { presets: ['es2015'] }); },
                    function (config) { return sourcemaps.write(config.option.sourceMaps || './sourcemaps'); }
                ]
            },
            {
                name: 'jscompile',
                oper: development_core_1.Operation.release | development_core_1.Operation.deploy,
                pipes: [
                    function () { return cache('javascript'); },
                    function () { return sourcemaps.init(); },
                    function (config) { return babel(config.option.babelOption || { presets: ['es2015'] }); },
                    function () { return uglify(); },
                    function (config) { return sourcemaps.write(config.option.sourceMaps || './sourcemaps'); }
                ]
            }
        ];
    };
    JsTasks = __decorate([
        development_core_1.dynamicTask()
    ], JsTasks);
    return JsTasks;
}());
exports.JsTasks = JsTasks;

//# sourceMappingURL=sourcemaps/index.js.map
