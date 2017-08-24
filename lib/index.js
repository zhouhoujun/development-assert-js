"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import * as path from 'path';
var development_core_1 = require('development-core');
// import * as chalk from 'chalk';
var cache = require('gulp-cached');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var JsCompile = (function (_super) {
    __extends(JsCompile, _super);
    function JsCompile(info) {
        _super.call(this, info);
    }
    JsCompile.prototype.getInfo = function () {
        this.info.name = this.info.name || 'jscompile';
        return this.info;
    };
    JsCompile.prototype.pipes = function (ctx, dist, gulp) {
        var option = ctx.option;
        var pipes = [
            function () { return cache('javascript'); },
            function () { return sourcemaps.init(); },
            function (config) { return babel(config.option.babelOption || { presets: ['es2015'] }); },
        ];
        pipes = pipes.concat(_super.prototype.pipes.call(this, ctx, dist, gulp));
        if (option.uglify) {
            pipes.splice(0, 0, {
                oper: development_core_1.Operation.deploy | development_core_1.Operation.release,
                toTransform: function (ctx) { return typeof option.uglify === 'boolean' ? uglify() : uglify(option.uglify); }
            });
        }
        if (option.sourceMaps !== false) {
            var mappath_1 = ((typeof option.sourceMaps === 'boolean') || !option.sourceMaps) ? './sourcemaps' : option.sourceMaps;
            pipes.push(function (ctx) { return sourcemaps.write(mappath_1); });
        }
        return pipes;
    };
    JsCompile = __decorate([
        development_core_1.task({
            oper: development_core_1.Operation.default | development_core_1.Operation.autoWatch
        }), 
        __metadata('design:paramtypes', [Object])
    ], JsCompile);
    return JsCompile;
}(development_core_1.PipeTask));
exports.JsCompile = JsCompile;
// @dynamicTask()
// export class JsTasks implements IDynamicTasks {
//     tasks(): IDynamicTaskOption[] {
//         return [
//             {
//                 name: 'jscompile',
//                 oper: Operation.build,
//                 watch: true,
//                 pipes: [
//                     () => cache('javascript'),
//                     () => sourcemaps.init(),
//                     (config) => babel((<IJsTaskOption>config.option).babelOption || { presets: ['es2015'] }),
//                     (config) => sourcemaps.write((<IJsTaskOption>config.option).sourceMaps || './sourcemaps')
//                 ]
//             },
//             {
//                 name: 'jscompile',
//                 oper: Operation.release | Operation.deploy,
//                 pipes: [
//                     () => cache('javascript'),
//                     () => sourcemaps.init(),
//                     (config) => babel((<IJsTaskOption>config.option).babelOption || { presets: ['es2015'] }),
//                     () => uglify(),
//                     (config) => sourcemaps.write((<IJsTaskOption>config.option).sourceMaps || './sourcemaps')
//                 ]
//             }
//         ];
//     }
// }

//# sourceMappingURL=sourcemaps/index.js.map
